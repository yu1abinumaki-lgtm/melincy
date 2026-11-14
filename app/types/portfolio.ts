export interface ProjectDetail { title: string; text: string }
export interface ProjectLink { label: string; url: string }
export interface Project {
  id: string
  title: string
  category: string
  description: string
  cover?: string
  coverAlt?: string
  tools: string[]
  details: ProjectDetail[]
  links: ProjectLink[]
  isExample?: boolean
}
export interface Technology { name: string; short: string; description: string; category: string }
