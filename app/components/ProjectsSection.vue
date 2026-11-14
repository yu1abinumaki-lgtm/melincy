<script setup lang="ts">
import { projects, exampleProject } from '~/data/portfolio'
import type { Project } from '~/types/portfolio'
import ProjectDialog from './ProjectDialog.vue'
const details = useTemplateRef<InstanceType<typeof ProjectDialog>>('details')
function openProject(project: Project, origin: HTMLElement) { details.value?.open(project, origin) }
</script>
<template>
  <section id="projects" class="section container" aria-labelledby="projects-title">
    <div class="section-heading"><div><p class="eyebrow"><span>01</span> ПРОЕКТЫ</p><h2 id="projects-title">Код с <span class="accent">продолжением.</span></h2></div><p>От идеи к решению.<br>Место для моих будущих работ.</p></div>
    <div v-if="projects.length" class="projects-grid"><ProjectCard v-for="project in projects" :key="project.id" :project="project" @open="openProject" /></div>
    <div v-else class="empty-project">
      <div class="empty-art" aria-hidden="true"><div class="empty-art-glow neon-decoration" /><span class="empty-art-index">ПРОЕКТ / 001</span><div class="project-window"><div class="window-toolbar"><span /><span /><span /><i /></div><div class="window-content"><span class="window-small-line"/><div class="window-title-lines"><span /><span /></div><div class="window-content-row"><div class="window-image"><AppIcon name="plus" /></div><div class="window-lines"><span /><span /><span /></div></div></div><span class="window-cursor"><AppIcon name="arrow-up-right" /></span></div><span class="empty-art-caption">ЧИСТЫЙ ЛИСТ. НОВЫЕ ВОЗМОЖНОСТИ.</span></div>
      <div class="empty-project-copy"><span class="status-pill"><span /> Ещё не опубликовано</span><h3>Здесь будет<br>что посмотреть.</h3><p>Пока я собираю первые работы. Каждый проект появится здесь со своей задачей, решениями и деталями разработки.</p><button class="text-button" type="button" @click="openProject(exampleProject, $event.currentTarget as HTMLElement)">Посмотреть пример <AppIcon name="arrow-up-right" /></button><p class="sample-note">Образец оформления, не реальная работа</p></div>
    </div>
    <ProjectDialog ref="details" />
  </section>
</template>
