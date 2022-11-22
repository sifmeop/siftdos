import { FC } from 'react'
import Head from 'next/head'

interface IHead {
  title: string
  description: string
}

const Meta: FC<IHead> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={description} />
    </Head>
  )
}

export default Meta
