import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Famous Quotes!" />
        <p className="description">
          Believe in your self!!! <br />
          Happiness comes from within!! <br />
          Remember that even a blind squirrel can find nuts once in a while!!! <br />
          When the student is ready, the teacher will appear! <br />
          I think, therefore I am !! <br />
          Lead by Example!! <br />
          Where there is a will there is a way <br />
          Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. <br />
        </p>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
