import { getContent } from '@/lib/payload'
import { personalInfo as staticPersonalInfo } from '@/data/content'
import ContactClient from './ContactClient'

export default async function ContactPage() {
  const dynamicContent: any = await getContent()
  const personalInfo = dynamicContent?.personalInfo || staticPersonalInfo

  return <ContactClient personalInfo={personalInfo} />
}
