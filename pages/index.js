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
          The greatest glory in living lies not in never falling, but in rising every time we fall. <br />
          The way to get started is to quit talking and begin doing.  <br />
          Your time is limited, so don't waste it living someone else's life.  <br />
          If life were predictable it would cease to be life, and be without flavor.  <br />
          Money Can't buy Happiness. <br />
          My Pride and joy. <br />
          The way to get started is to quit talking and begin doing. <br />
          Your time is limited, so don't waste it living someone else's life. <br />
          You must be the change you wish to see in the world. <br />
          Success is not final, failure is not fatal: it is the courage to continue that counts. <br />
          Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. <br />
          Be the change that you wish to see in the world. <br />
        </p>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
