import { client } from '../src/lib/sanity';

async function listAllHomepageDocs() {
  const docs = await client.fetch(`*[_type == "homepage"]`);
  console.log('All Homepage Documents:', JSON.stringify(docs, null, 2));
}

listAllHomepageDocs();
