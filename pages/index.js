import Head from 'next/head'
import { useEffect } from 'react';

export default function Home() {

  return (

    <body>
      <div>
        <head>

        </head>
         <div className={"relative text-gray-900"}>
          <div className={"w-screen min-h-screen bg-black bg-opacity-50 z-10 absolute flex-row justify-center items-center align-middle lg:pt-16 hidden"} id="myDIV">
            <div class="text-gray-400 focus-within:text-gray-600 bg-white rounded-2xl p-4 w-full my-auto mx-auto flex flex-row justify-between max-w-lg cursor-pointer">
              <div class={"flex flex-row space-x-4"}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <p>What are you looking for?</p>
                <input focused></input>
              </div>
              <div className={"bg-gray-100 border border-gray-200 rounded-md px-1"}>esc</div>
            </div>
          </div>

          <div className={"xl:grid xl:grid-cols-2 min-h-screen min-w-screen bg-gradient-to-br from-white via-gray-200 to-red-50 p-6 sm:pl-32"}>
            <div className={"flex items-start xl:justify-center text-left flex-col space-y-8 sm:space-y-12"}>
              <Head>
                <title>Keycast - Let users control your app with just a few keystrokes.</title>
                <link rel="shortcut icon" href="logo.png" />
              </Head>

              <div className={"border-gray-300 p-2 border rounded-lg"}>
                <h1 className={"sm:text-4xl text-xl font-bold antialiased tracking-tight"}>
                  ⌘K
          </h1>
              </div>
              <h1 className={"sm:text-6xl text-4xl font-extrabold sm:max-w-lg sm:w-auto w-64 text-gray-900"}>
                An embeddable command center for your app.
          </h1>
              <p className={"text-gray-700 sm:text-2xl text-lg max-w-md antialiased"}>
              Hit ⌘K, start typing, and find the command you need in seconds, no more confusion.
        </p>
              <div className={"flex flex-col space-y-4"}>
                <form action="https://formspree.io/f/xzbyblor" className={"space-x-2 w-full"} method="post" name="waitlist">
                  <input className={"px-3 py-3 sm:pr-10 sm:text-base text-sm  bg-white border border-gray-200 rounded-xl"} type="email" name="email" required placeholder="Your email..." />
                  <input className={"bg-black text-white px-3 sm:px-6 py-3 sm:text-base text-sm cursor-pointer rounded-xl"} type="submit" target="_blank" value="Join the Waitlist" />
                </form>
                <a target="_blank" href={"https://twitter.com/keycast_co"} className={"text-gray-500 cursor-pointer hover:underline mr-auto"}>Follow on Twitter</a>
              </div>
            </div>

            <img className={" max-w-full mx-auto xl:pr-24 my-auto"} src="/keycast-mock.svg"></img>
          </div>
        </div>
      </div>

    </body>
  )
}
