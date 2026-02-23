import { getProjects } from '@/lib/payload'
import { projects as staticProjects } from '@/data/projects'
import ProjectsClient from './ProjectsClient'

export default async function ProjectsPage() {
  const dynamicProjects = await getProjects()
  
  const projects = dynamicProjects.length > 0
    ? dynamicProjects.map((p: any) => ({
        id: p.slug || p.id,
        title: p.title,
        subtitle: p.subtitle,
        description: p.description,
        image: p.image?.url || p.image || '',
        tech: p.tech?.map((t: any) => t.name) || [],
        category: p.category?.map((c: any) => c.cat) || [],
        status: p.status,
        featured: p.featured,
        links: p.links,
        architecture: p.architecture,
      }))
    : staticProjects

  return <ProjectsClient initialProjects={projects} />
}
