import { client } from '../src/lib/sanity';

async function checkHomepage() {
  const data = await client.fetch(`*[_type == "homepage" && (_id == "homepage" || _id == "drafts.homepage")][0]{
    ...,
    "heroVideoFileUrl": heroVideoFile.asset->url,
    "heroVideoAsset": heroVideoFile.asset->
  }`);
  console.log('Homepage Sanity Data:', JSON.stringify(data, null, 2));
}

checkHomepage();
