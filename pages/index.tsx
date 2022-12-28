import { Button } from '@mantine/core'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>オールマイティ・kのサイト（仮）</title>
        <meta name='description' content='オールマイティ・kのサイト（仮）' />
      </Head>
      <h1 className='text-3xl font-bold underline text-cyan-700'>Hello world!</h1>
      <Button>test</Button>
    </>
  )
}

export default Home
