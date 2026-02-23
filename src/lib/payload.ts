import { getPayload as getPayloadLocal } from 'payload'
import config from '@/payload.config'

/**
 * Global cache for the Payload instance to avoid multiple initializations.
 */
let cachedPayload: any = null

export const getPayload = async () => {
  if (cachedPayload) return cachedPayload

  // Basic check for DATABASE_URI to avoid noisy errors during build if DB is missing
  if (!process.env.DATABASE_URI && process.env.NODE_ENV === 'production') {
     console.warn('DATABASE_URI is missing. Payload might not initialize correctly.')
  }

  try {
    cachedPayload = await getPayloadLocal({ config })
    return cachedPayload
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error initializing Payload:', error)
    }
    throw error
  }
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
  } catch {
    // Graceful fallback is handled in the components
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
  } catch {
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
  } catch {
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
  } catch {
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
  } catch {
    return []
  }
}

export const getContent = async () => {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({
      slug: 'content',
    })
  } catch {
    return null
  }
}

export const getSeoMetadata = async () => {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({
      slug: 'seo-metadata',
    })
  } catch {
    return null
  }
}
