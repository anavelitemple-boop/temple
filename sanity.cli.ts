import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7uzr3mel';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'anavelitemple',
  deployment: {
    appId: 'xg2lom99k809t7m936ntotu6',
  },
});
