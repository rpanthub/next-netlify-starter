import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Awesome app!" />
        <p className="description">
          Believe in your self!!! <br />
          Remember that even a blind squirrel can find nuts once in a while!!! <br />
          When the student is ready, the teacher will appear! <br />
          We all rock!!! <br />
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
