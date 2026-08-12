import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7uzr3mel';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'ആനവേലി ക്ഷേത്രം (Anaveli Temple Admin)',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
