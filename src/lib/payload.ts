import { getPayload as getPayloadLocal } from 'payload'
import config from '@/payload.config'

export const getPayload = async () => {
  return await getPayloadLocal({ config })
}

export const getProjects = async () => {
  try {
    const payload = await getPayload()
    const { docs } = await payload.find({
      collection: 'projects',
      depth: 1,
      limit: 100,
    })
    return docs
  } catch (error) {
    console.error('Error fetching projects from Payload:', error)
    return []
  }
}

export const getProjectBySlug = async (slug: string) => {
  try {
    const payload = await getPayload()
    const { docs } = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 1,
    })
    return docs[0] || null
  } catch (error) {
    console.error('Error fetching project by slug from Payload:', error)
    return null
  }
}

export const getExperience = async () => {
  try {
    const payload = await getPayload()
    const { docs } = await payload.find({
      collection: 'experience',
      depth: 1,
      limit: 100,
    })
    return docs
  } catch (error) {
    console.error('Error fetching experience from Payload:', error)
    return []
  }
}

export const getEducation = async () => {
  try {
    const payload = await getPayload()
    const { docs } = await payload.find({
      collection: 'education',
      depth: 1,
      limit: 100,
    })
    return docs
  } catch (error) {
    console.error('Error fetching education from Payload:', error)
    return []
  }
}

export const getSkills = async () => {
  try {
    const payload = await getPayload()
    const { docs } = await payload.find({
      collection: 'skills',
      depth: 1,
      limit: 100,
    })
    return docs
  } catch (error) {
    console.error('Error fetching skills from Payload:', error)
    return []
  }
}

export const getContent = async () => {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({
      slug: 'content',
    })
  } catch (error) {
    console.error('Error fetching content from Payload:', error)
    return null
  }
}

export const getSeoMetadata = async () => {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({
      slug: 'seo-metadata',
    })
  } catch (error) {
    console.error('Error fetching SEO metadata from Payload:', error)
    return null
  }
}
