import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap } from '@/payload/importMap'

export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: any) => RootPage({ config, params, searchParams, importMap })

export default Page
