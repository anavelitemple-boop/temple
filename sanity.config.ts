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
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ക്ഷേത്ര ഉള്ളടക്കം (Temple Content)')
          .items([
            S.listItem()
              .title('1. ഹോം പേജ് (Homepage)')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('2. ദിവസേനയുള്ള പൂജകൾ (Daily Poojas)')
              .child(S.documentTypeList('pooja').title('ദിവസേനയുള്ള പൂജകൾ')),
            S.listItem()
              .title('3. വഴിപാടുകൾ & നിരക്കുകൾ (Offerings & Rates)')
              .child(S.documentTypeList('vazhipadu').title('വഴിപാടുകൾ')),
            S.listItem()
              .title('4. അറിയിപ്പുകൾ (News & Announcements)')
              .child(S.documentTypeList('announcement').title('അറിയിപ്പുകൾ')),
            S.listItem()
              .title('5. ചിത്രശാല (Photo Gallery)')
              .child(S.documentTypeList('gallery').title('ചിത്രശാല')),
            S.listItem()
              .title('6. ക്ഷേത്ര ബന്ധപ്പെടൽ (Contact Information)')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
