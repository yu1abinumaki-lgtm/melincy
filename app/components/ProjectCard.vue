<script setup lang="ts">
import type { Project } from '~/types/portfolio'
defineProps<{ project: Project }>()
defineEmits<{ open: [project: Project, trigger: HTMLElement] }>()
const brokenCover = ref(false)
</script>
<template>
  <button class="project-card" type="button" :aria-label="`Подробнее: ${project.title}`" @click="$emit('open', project, $event.currentTarget as HTMLElement)">
    <span class="project-cover"><img :src="!brokenCover && project.cover ? project.cover : '/project-placeholder.svg'" :alt="project.coverAlt || ''" width="800" height="500" loading="lazy" @error="brokenCover = true"><span class="project-open"><AppIcon name="arrow-up-right" /></span></span>
    <span class="project-body"><span class="micro-label accent">{{ project.isExample ? 'ПРИМЕР ОФОРМЛЕНИЯ' : project.category }}</span><strong>{{ project.title }}</strong><span class="project-description">{{ project.description }}</span><span class="tags"><span v-for="tool in project.tools" :key="tool" class="tag">{{ tool }}</span></span></span>
  </button>
</template>
