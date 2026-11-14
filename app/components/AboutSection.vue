<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>
<template>
  <section id="about" class="section about-section" aria-labelledby="about-title"><div class="container">
    <div class="section-heading"><div><p class="eyebrow"><span>02</span> ОБО МНЕ</p><h2 id="about-title">За каждой строкой -<br><span class="accent">человек.</span></h2></div><p>Немного обо мне.<br>Без громких цифр и лишних слов.</p></div>
    <div class="about-layout">
      <div class="identity-card"><div class="identity-light neon-decoration" aria-hidden="true"/><div class="identity-monogram" aria-hidden="true">m<span>.</span></div><div class="identity-info"><p class="micro-label">РАД ЗНАКОМСТВУ</p><h3>{{ profile.name }}</h3><p>{{ profile.profession }}</p></div><a :href="profile.telegramUrl" target="_blank" rel="noopener noreferrer" class="identity-link">{{ profile.telegram }}<AppIcon name="arrow-up-right" /></a></div>
      <div class="about-copy"><p class="about-lead">Смотрю на продукт <span>целиком.</span></p><p>{{ profile.about }}</p><p>{{ profile.story }}</p><div class="about-principle"><AppIcon name="layers"/><span>Интерфейс, логика и данные.<br><strong>Одна связная система.</strong></span></div></div>
    </div>
  </div></section>
</template>
