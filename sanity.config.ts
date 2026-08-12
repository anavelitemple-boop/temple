import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7uzr3mel';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'Anaveli Temple Admin',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'pooja',
        title: 'Poojas',
        type: 'document',
        fields: [
          { name: 'name', title: 'English Name', type: 'string' },
          { name: 'malayalamName', title: 'Malayalam Name', type: 'string' },
          { name: 'time', title: 'Timing', type: 'string' },
          { name: 'price', title: 'Price', type: 'number' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'active', title: 'Is Active', type: 'boolean' }
        ]
      },
      {
        name: 'vazhipadu',
        title: 'Vazhipadus',
        type: 'document',
        fields: [
          { name: 'name', title: 'English Name', type: 'string' },
          { name: 'malayalamName', title: 'Malayalam Name', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'price', title: 'Price', type: 'number' },
          { name: 'category', title: 'Category', type: 'string' }
        ]
      },
      {
        name: 'announcement',
        title: 'Announcements (അറിയിപ്പുകൾ)',
        type: 'document',
        fields: [
          { name: 'title', title: 'English Title', type: 'string' },
          { name: 'malayalamTitle', title: 'Malayalam Title', type: 'string' },
          { name: 'date', title: 'Date', type: 'datetime' },
          { name: 'summary', title: 'Summary (Short Description)', type: 'text' },
          { name: 'content', title: 'Full Content', type: 'text' },
          { name: 'image', title: 'Featured Image', type: 'image' },
          { name: 'published', title: 'Is Published', type: 'boolean' },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }
        ]
      },
      {
        name: 'gallery',
        title: 'Gallery Images',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'image', title: 'Image File', type: 'image' },
          { name: 'categoryName', title: 'Category Name (Malayalam)', type: 'string' },
          { name: 'categoryId', title: 'Category ID (English)', type: 'string' }
        ]
      }
    ]
  }
});
