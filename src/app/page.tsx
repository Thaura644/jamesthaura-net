import { getProjects, getContent } from '@/lib/payload'
import { projects as staticProjects } from '@/data/projects'
import { personalInfo as staticPersonalInfo, bio as staticBio } from '@/data/content'
import HomeClient from './HomeClient'

export default async function HomePage() {
  const dynamicProjects = await getProjects()
  const dynamicContent: any = await getContent()

  const projects = dynamicProjects.length > 0
    ? dynamicProjects.map((p: any) => ({
        id: p.slug || p.id,
        title: p.title,
        subtitle: p.subtitle,
        description: p.description,
        image: p.image?.url || p.image || '',
        tech: p.tech?.map((t: any) => t.name) || [],
        featured: p.featured,
      }))
    : staticProjects.filter(p => p.featured)

  const personalInfo = dynamicContent?.personalInfo || staticPersonalInfo

  let bio = staticBio
  if (dynamicContent?.bio) {
    bio = {
      ...dynamicContent.bio,
      values: dynamicContent.bio.values?.map((v: any) => v.value) || staticBio.values
    }
  }

  return <HomeClient initialProjects={projects} initialPersonalInfo={personalInfo} initialBio={bio} />
}
