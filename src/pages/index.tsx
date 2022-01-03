import { GetStaticProps } from "next"
import { Context } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      welcome: 'Welcome to site. This is temporary.'
    }
  }
}

export default function Home({ welcome }) {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          {
            `${welcome}`
          }
        </h1>
      </main>
    </div>
  )
}
