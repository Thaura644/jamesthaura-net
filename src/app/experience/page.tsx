import { getExperience, getEducation } from '@/lib/payload'
import { experience as staticExperience, education as staticEducation } from '@/data/content'
import ExperienceClient from './ExperienceClient'

export default async function ExperiencePage() {
  const dynamicExperience = await getExperience()
  const dynamicEducation = await getEducation()

  const experience = dynamicExperience.length > 0
    ? dynamicExperience.map((exp: any) => ({
        ...exp,
        achievements: exp.achievements.map((a: any) => a.achievement)
      }))
    : staticExperience

  const education = dynamicEducation.length > 0 ? dynamicEducation : staticEducation

  return <ExperienceClient initialExperience={experience} initialEducation={education} />
}
