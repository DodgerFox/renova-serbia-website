import { createServerFn } from "@tanstack/react-start";

const channels = ["phone", "telegram", "viber", "whatsapp"] as const;
type Channel = (typeof channels)[number];

const channelLabel: Record<Channel, string> = {
  phone: "Телефон",
  telegram: "Telegram",
  viber: "Viber",
  whatsapp: "WhatsApp",
};

const lastSent = new Map<string, number>();

function readLead(input: unknown) {
  if (!input || typeof input !== "object") throw new Error("bad");
  const raw = input as Record<string, unknown>;
  const channel = raw.channel;
  if (!channels.includes(channel as Channel)) throw new Error("bad");
  const contact = typeof raw.contact === "string" ? raw.contact.trim() : "";
  const comment = typeof raw.comment === "string" ? raw.comment.replace(/\s+/g, " ").trim().slice(0, 1000) : "";
  const quote = typeof raw.quote === "string" ? raw.quote.replace(/\r/g, "").trim().slice(0, 1500) : "";
  if (channel === "telegram") {
    if (!/^@[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(contact)) throw new Error("bad");
  } else if (!contact.startsWith("+") || contact.replace(/\D/g, "").length < 8 || contact.replace(/\D/g, "").length > 15) {
    throw new Error("bad");
  }
  return { channel: channel as Channel, contact, comment, quote };
}

export const sendLead = createServerFn({ method: "POST" })
  .validator(readLead)
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return { ok: false as const };

    const key = `${data.channel}:${data.contact}`;
    const now = Date.now();
    if (now - (lastSent.get(key) ?? 0) < 20_000) return { ok: true as const };

    const text = [
      "Заявка RENOVA",
      `${channelLabel[data.channel]}: ${data.contact}`,
      data.comment ? `Комментарий: ${data.comment}` : "",
      data.quote ? `Смета:\n${data.quote}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!response.ok) return { ok: false as const };
    lastSent.set(key, now);
    return { ok: true as const };
  });
