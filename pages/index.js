import Head from 'next/head'




export default function Index({ youtube, preview }) {
  return (
    <div>

      <p>innkeeper</p>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  let youtube = {};

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
