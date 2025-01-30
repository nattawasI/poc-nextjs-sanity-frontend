import { defineQuery } from 'next-sanity'
import { client } from './client'

const POSTS_QUERY = defineQuery(`*[_type == "post"]{_id, title, slug, image, publishedAt}`)

const getPosts = async () => {
  return client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } })
}

const POST_DETAIL_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]`)

const getPostDetail = (slug: string) => {
  return client.fetch(POST_DETAIL_QUERY, { slug }, { next: { revalidate: 60 } })
}

export { getPosts, getPostDetail }
