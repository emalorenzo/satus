import { useRect } from '@studio-freight/hamo'
import { fetchCmsQuery } from 'dato-cms/api.js'
import { blogPageQuery } from 'dato-cms/queries/blogs.graphql'
import { Layout } from 'layouts/default'
import { useStore } from 'lib/store'
import Link from 'next/link'
import { useRef } from 'react'
import s from './blogs.module.scss'

export default function Blogs({ data }) {
  const rectRef = useRef()
  const [ref, compute] = useRect()
  const locomotive = useStore((state) => state.locomotive)

  console.log('DATA FROM DATO', data)

  return (
    <Layout theme="light">
      <section data-scroll-section>
        <div
          className={s.wrapper}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          {data.length > 0 &&
            data.map(({ title, slug }, i) => (
              <div key={i} className={s.links}>
                <Link href={`blog/${slug}`}>
                  <a>Go to {title}</a>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  // const variables = {
  //   id: '8332380',
  // }

  const fetchBlogPage = await fetchCmsQuery(blogPageQuery)
  const data = fetchBlogPage?.blogPage.blog

  console.log('DATA FROM DATO', data)
  return {
    props: {
      data,
    },
  }
}
