import Head from 'next/head'
import styles from '../styles/Home.module.scss'



export default function Index({ youtube, preview }) {
  return (

    <div className={styles.container}>

      <Head>
        <title>innkeeper.eth</title>
        <meta name="description" content="Gather 'round and stay awhile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          the <a href="#">innkeeper</a>
        </h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>roadmap &rarr;</h2>
            <p>The plan to provide services in decentraland. </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>treasury &rarr;</h2>
            <p>Assets and loot in the keepers vault.</p>
          </a>

          <a href="#" className={styles.card} >
            <h2>the inn &rarr;</h2>
            <p>Drop off your bags and gather &apos; round the fire.</p>
          </a>

          <a href="#" className={styles.card}  >
            <h2>services &rarr;</h2>
            <p>
              full menu of services and options coming soon
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by // {' '}
          <span>
            Aragon DAO, Decentraland, ETH
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  let youtube = {};

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
