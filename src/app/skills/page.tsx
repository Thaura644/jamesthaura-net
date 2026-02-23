import { getSkills } from '@/lib/payload'
import { skills as staticSkills } from '@/data/content'
import SkillsClient from './SkillsClient'

export default async function SkillsPage() {
  const dynamicSkills = await getSkills()

  let skills: any = staticSkills
  if (dynamicSkills.length > 0) {
    const mappedSkills: any = {}
    dynamicSkills.forEach((cat: any) => {
      mappedSkills[cat.categoryName] = {
        icon: cat.icon,
        skills: cat.skills.map((s: any) => ({
          name: s.name,
          level: s.level,
          experience: s.experience
        }))
      }
    })
    skills = mappedSkills
  }

  return <SkillsClient initialSkills={skills} />
}
