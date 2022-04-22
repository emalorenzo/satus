import { useRect } from '@studio-freight/hamo'
import { fetchCmsQuery } from 'dato-cms/api.js'
import {
  allBlogsQuery,
  getAllPageSlugsQuery,
} from 'dato-cms/queries/blogs.graphql'
import { Layout } from 'layouts/default'
import { useStore } from 'lib/store'
import Image from 'next/image'
import { useRef } from 'react'
import { StructuredText } from 'react-datocms'

export default function Blog({ data }) {
  const { title, image, richText } = data

  const rectRef = useRef()
  const [ref, compute] = useRect()
  const locomotive = useStore((state) => state.locomotive)

  console.log('DATA FROM DATO', data)

  return (
    <Layout theme="light">
      <section data-scroll-section>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ margin: '10px' }}>{title}</h1>
          <p style={{ margin: '10px' }}>
            <StructuredText data={richText.value} />
          </p>

          {image && <Image src={image.url} alt="" width={500} height={500} />}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths = async (context) => {
  const slugQuery = await fetchCmsQuery(allBlogsQuery, {})

  const paths = slugQuery?.allBlogs.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ preview = false, params }) => {
  const fetchBlogPost = await fetchCmsQuery(getAllPageSlugsQuery, {
    slug: params.slug,
  })

  if (!fetchBlogPost) {
    return { notFound: true }
  }

  const data = fetchBlogPost.blog

  return {
    props: {
      data,
      key: params.slug,
    },
  }
}
