import { getProjectBySlug } from '@/lib/payload'
import { projects as staticProjects } from '@/data/projects'
import ProjectDetailClient from './ProjectDetailClient'
import { notFound } from 'next/navigation'

export default async function ProjectPage({ params }: { params: any }) {
  const { id } = await params
  const dynamicProject = await getProjectBySlug(id)
  
  let project: any = null

  if (dynamicProject) {
    project = {
      ...dynamicProject,
      id: dynamicProject.slug || dynamicProject.id,
      image: dynamicProject.image?.url || dynamicProject.image || '',
      tech: dynamicProject.tech?.map((t: any) => t.name) || [],
      category: dynamicProject.category?.map((c: any) => c.cat) || [],
      features: dynamicProject.features?.map((f: any) => f.feature) || [],
      challenges: dynamicProject.challenges?.map((c: any) => c.challenge) || [],
      impact: dynamicProject.impact || [],
      links: dynamicProject.links || {},
    }
  } else {
    project = staticProjects.find(p => p.id === id)
  }

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
