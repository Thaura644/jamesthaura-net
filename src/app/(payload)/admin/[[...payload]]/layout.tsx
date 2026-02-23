import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from '@/payload/importMap'
import React from 'react'

const serverFunction = async (args: any) => {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
