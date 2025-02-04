import { defineQuery } from 'next-sanity'

const POSTS_QUERY = defineQuery(`*[_type == "post"]{_id, title, slug, image, publishedAt}`)
const POST_PARAMS_QUERY = defineQuery(`*[_type == "post"]{slug}`)
const POST_DETAIL_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]`)

export { POSTS_QUERY, POST_PARAMS_QUERY, POST_DETAIL_QUERY }
