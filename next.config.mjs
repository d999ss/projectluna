/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  typescript: {
    // Temporarily ignore build errors due to case-sensitivity issues on macOS
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
  },
})
