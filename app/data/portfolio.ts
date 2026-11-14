import type { Project, Technology } from '~/types/portfolio'

export const profile = {
  nickname: 'Melincy',
  name: 'Евгений Трофимович',
  profession: 'Фуллстек-разработчик',
  telegram: '@melincy_dev',
  telegramUrl: 'https://t.me/melincy_dev',
  about: 'Меня зовут Евгений Трофимович. В сети я Melincy. Занимаюсь фуллстек-разработкой: соединяю то, что человек видит на экране, с логикой, которая работает за ним.',
  story: 'Это моё личное пространство для будущих проектов. Здесь будут работы, решения и детали разработки. Портфолио пока в начале пути, и первая глава ещё впереди.'
}

export const navigation = [
  { id: 'projects', label: 'Проекты' },
  { id: 'about', label: 'Обо мне' },
  { id: 'stack', label: 'Навыки' }
]

// Это технологии самого сайта, а не неподтверждённый список личных компетенций.
export const technologies: Technology[] = [
  { name: 'Nuxt', short: 'N', category: 'Основа', description: 'Структура приложения, быстрая загрузка и готовые HTML-страницы.' },
  { name: 'Vue', short: 'V', category: 'Интерфейс', description: 'Отдельные компоненты и живые, понятные взаимодействия.' },
  { name: 'TypeScript', short: 'TS', category: 'Логика', description: 'Типы для данных, проектов и компонентов.' },
  { name: 'HTML', short: '</>', category: 'Структура', description: 'Семантика, доступная навигация и содержимое страницы.' },
  { name: 'CSS', short: '#', category: 'Визуальный язык', description: 'Адаптивная вёрстка, фиолетовый свет и плавные переходы.' },
  { name: 'JavaScript', short: 'JS', category: 'Взаимодействия', description: 'Поведение интерфейса в браузере после сборки TypeScript.' }
]

// Добавляйте реальные проекты в этот массив. Пустой массив показывает пустое состояние.
export const projects: Project[] = []

export const exampleProject: Project = {
  id: 'example',
  title: 'Так будет выглядеть ваш проект',
  category: 'Пример оформления',
  description: 'Это демонстрация оформления, не выполненная работа. Здесь появится история реального проекта, когда он будет опубликован.',
  isExample: true,
  cover: '/project-placeholder.svg',
  coverAlt: 'Декоративная обложка примера проекта',
  tools: ['Пример инструмента', 'Пример технологии'],
  details: [
    { title: 'Задача', text: 'Для кого создавался продукт и какую проблему он должен был решить.' },
    { title: 'Решение', text: 'Моя роль, ключевые решения, особенности интерфейса и серверной логики.' },
    { title: 'Результат', text: 'Только реальные итоги и ссылки. Пока проект не готов, достижений здесь нет.' }
  ],
  links: []
}
