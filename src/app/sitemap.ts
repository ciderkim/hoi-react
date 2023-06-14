import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hoi.sidepunch.co/',
      lastModified: new Date(),
    },
  ]
}