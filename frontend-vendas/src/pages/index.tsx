import type { NextPage } from 'next'
import Head from 'next/head'
import 'bulma/css/bulma.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Bem vindo!
        <button className="button is-dark">Clique aqui</button>
      </div>
    </div>
  )
}

export default Home
