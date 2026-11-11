<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Hero inspired by Dribbble designs -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      <div class="relative z-10 container mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {{ content.hero.title.split('\n')[0] }}<br/>
            <span class="text-amber-400">{{ content.hero.title.split('\n')[1] || '' }}</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl">{{ content.hero.subtitle }}</p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition">
              {{ content.hero.cta }}
            </a>
            <a href="#services" class="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg text-lg transition">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in content.services" :key="service.title" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div class="text-4xl mb-4">{{ service.icon }}</div>
            <h3 class="text-xl font-semibold">{{ service.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p class="text-xl mb-10 text-slate-300">{{ content.company.description }}</p>
        <div class="space-y-2 text-lg">
          <p>{{ content.company.phone }}</p>
          <p>{{ content.company.email }}</p>
          <p>{{ content.company.address }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import content from '~/data/content.json'

useSeoMeta({
  title: 'RENOVA | Professional Renovation in Belgrade & Novi Sad',
  description: content.company.description,
  ogTitle: 'RENOVA - Turnkey Renovation in Serbia',
  ogDescription: content.company.description,
  ogImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
})
</script>
