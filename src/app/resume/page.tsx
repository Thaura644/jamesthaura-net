import { getContent } from '@/lib/payload'
import { personalInfo as staticPersonalInfo } from '@/data/content'
import ResumeClient from './ResumeClient'

export default async function ResumePage() {
  const dynamicContent: any = await getContent()
  const personalInfo = dynamicContent?.personalInfo || staticPersonalInfo

  return <ResumeClient personalInfo={personalInfo} />
}
