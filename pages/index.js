import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <head>

      </head>
      <main className={"h-screen w-screen text-gray-900 flex items-center justify-center text-center flex-col space-y-12 bg-gradient-to-br from-white via-gray-200 to-red-50 relative p-6"}>
        <Head>
          <title>Keycast - Give your users a delightful, simple, and efficient way to control your app.</title>
          <link rel="shortcut icon" href="logo.png" />
        </Head>

          <div className={"border-gray-300 p-2 border rounded-lg"}>
          <h1 className={"text-4xl font-bold antialiased tracking-tight"}>
          ⌘K
          </h1>
          </div>
          <h1 className={"text-6xl font-semibold text-gray-300"}>
            Coming soon
          </h1>
          <p className={"text-gray-700 text-2xl max-w-lg antialiased"}>
            Keycast gives your users a delightful, simple, and efficient way to control your app.
        </p>
        <a target="_blank" href={"https://twitter.com/keycast_co"} className={"bg-white px-8 py-3 cursor-pointer rounded-xl"}>Follow on Twitter</a>

      </main>
    </div>
  )
}
