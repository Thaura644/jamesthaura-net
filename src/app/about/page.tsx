import { getContent, getEducation } from '@/lib/payload'
import { personalInfo as staticPersonalInfo, bio as staticBio, education as staticEducation } from '@/data/content'
import AboutClient from './AboutClient'

export default async function AboutPage() {
  const dynamicContent: any = await getContent()
  const dynamicEducation = await getEducation()

  const personalInfo = dynamicContent?.personalInfo || staticPersonalInfo

  let bio = staticBio
  if (dynamicContent?.bio) {
    bio = {
      ...dynamicContent.bio,
      values: dynamicContent.bio.values?.map((v: any) => v.value) || staticBio.values
    }
  }

  const education = dynamicEducation.length > 0 ? dynamicEducation : staticEducation

  return <AboutClient initialPersonalInfo={personalInfo} initialBio={bio} initialEducation={education} />
}
