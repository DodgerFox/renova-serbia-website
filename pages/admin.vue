<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
      <h1 class="text-3xl font-bold mb-8">Admin Panel - RENOVA Content</h1>
      <p class="mb-6 text-gray-600">Edit the content below. In production, connect this to a real CMS (Nuxt Content, Sanity, Strapi) or save via API. For now, download the updated JSON and replace data/content.json.</p>
      
      <div class="space-y-6">
        <div>
          <label class="block font-medium mb-1">Company Name</label>
          <input v-model="editable.company.name" class="w-full border rounded-lg p-3" />
        </div>
        <div>
          <label class="block font-medium mb-1">Phone</label>
          <input v-model="editable.company.phone" class="w-full border rounded-lg p-3" />
        </div>
        <div>
          <label class="block font-medium mb-1">Email</label>
          <input v-model="editable.company.email" class="w-full border rounded-lg p-3" />
        </div>
        <div>
          <label class="block font-medium mb-1">Hero Title</label>
          <textarea v-model="editable.hero.title" rows="2" class="w-full border rounded-lg p-3"></textarea>
        </div>
        <div>
          <label class="block font-medium mb-1">Hero Subtitle</label>
          <textarea v-model="editable.hero.subtitle" rows="3" class="w-full border rounded-lg p-3"></textarea>
        </div>
      </div>

      <div class="mt-8 flex gap-4">
        <button @click="downloadJson" class="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium">Download Updated JSON</button>
        <NuxtLink to="/" class="border px-6 py-3 rounded-lg">View Site</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import content from '~/data/content.json'

const editable = ref(JSON.parse(JSON.stringify(content)))

function downloadJson() {
  const blob = new Blob([JSON.stringify(editable.value, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'content.json'
  a.click()
  URL.revokeObjectURL(url)
}

useSeoMeta({ title: 'Admin | RENOVA' })
</script>
