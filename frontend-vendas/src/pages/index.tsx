import type { NextPage } from 'next'
import Head from 'next/head'
import 'bulma/css/bulma.css'
import { Layout } from 'components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout/>
      </div>
    </div>
  )
}

export default Home
