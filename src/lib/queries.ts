export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const poojaBookingQuery = `*[_type == "poojaBooking"][0]`;

export const homepageQuery = `*[_type == "homepage"] | order(_updatedAt desc)[0]{
  ...,
  "heroVideoFileUrl": heroVideoFile.asset->url,
  festivalRef->
}`;

export const poojasQuery = `*[_type == "pooja"] | order(time asc)`;

export const vazhipadusQuery = `*[_type == "vazhipadu"] | order(price asc)`;

export const announcementsQuery = `*[_type in ["announcement", "news"] && published != false]{
  ...,
  "imageUrl": image.asset->url,
  "pdfUrl": pdfFile.asset->url
} | order(date desc, _createdAt desc)`;

export const festivalsQuery = `*[_type == "festival"] | order(startDate asc)`;

export const festivalScheduleQuery = `*[_type == "festivalSchedule"] | order(date asc)`;

export const eventsQuery = `*[_type == "event"] | order(date asc)`;

export const newsQuery = `*[_type in ["announcement", "news"] && published != false]{
  ...,
  "imageUrl": image.asset->url,
  "pdfUrl": pdfFile.asset->url
} | order(date desc, _createdAt desc)`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0]`;

export const galleryQuery = `*[_type == "gallery"]{
  ...,
  category->
}`;

export const historyQuery = `*[_type == "history"] | order(year asc)`;
