<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>
<template>
  <section id="home" class="hero-section" aria-labelledby="hero-title">
    <div class="hero-haze neon-decoration" aria-hidden="true" />
    <div class="container hero-layout">
      <div class="hero-copy">
        <p class="hero-eyebrow"><AppIcon name="spark" />{{ profile.profession }}</p>
        <h1 id="hero-title">Интерфейс.<br>Логика.<br><span>Всё связано.</span></h1>
        <div class="hero-intro"><p>Привет, я <strong>Евгений</strong>. В сети - <strong>Melincy</strong>.</p><p>Превращаю идеи в веб-продукты.<br>От первого экрана до того, что за ним.</p></div>
        <div class="hero-buttons"><a class="button button-primary" href="#projects">Смотреть работы <AppIcon name="arrow-up-right" /></a><a class="button button-quiet" href="#contact">Связаться <AppIcon name="telegram" /></a></div>
        <p class="hero-note"><span aria-hidden="true" /> Портфолио в начале пути. Всё самое интересное впереди.</p>
      </div>
      <HeroVisual />
    </div>
    <div class="container hero-footer"><span>ПЕРСОНАЛЬНОЕ ПОРТФОЛИО</span><span class="hero-footer-center">ДЕТАЛИ ИМЕЮТ ЗНАЧЕНИЕ</span><a href="#projects">Листай дальше <AppIcon name="arrow-down" /></a></div>
  </section>
</template>
