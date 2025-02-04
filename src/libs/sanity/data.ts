import { sanityFetch } from '@/libs/sanity/live'
import { POSTS_QUERY, POST_PARAMS_QUERY, POST_DETAIL_QUERY } from './query'

const getPosts = async () => {
  return sanityFetch({ query: POSTS_QUERY })
}

const getPostParams = async () => {
  return sanityFetch({ query: POST_PARAMS_QUERY })
}

const getPostDetail = (params: Promise<{ slug: string }>) => {
  return sanityFetch({ query: POST_DETAIL_QUERY, params })
}

export { getPosts, getPostParams, getPostDetail }
