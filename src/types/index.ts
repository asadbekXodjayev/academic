export type Skill = {
  name: string
  level: number
}

export type SkillGroup = {
  key: string
  skills: Skill[]
}

export type Project = {
  id: string
  title: string
  descKey: string
  tech: string[]
  url: string
}

export type TimelineItem = {
  yearKey: string
  titleKey: string
  descKey: string
}
