import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Charted from "../components/Charted";
import Typewriter from 'typewriter-effect';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sentiments </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5">
      <section className="mx-10 p-10 bg-gray-200 rounded-xl">
          <div className="flex flex-col items-center justify-center space-y-10 ">
            <h1 className="bg-pink-500 h-52 w-52 ">Logo</h1>
            <h1 className="text-5xl font-bold">Sentiments</h1>
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro!
            </p>
          </div>
        </section>
        <section className="p-10">
          <div className="flex justify-between">
           <div className="flex-col justify-center place-items-center bg-gray-200 p-10 rounded-xl space-y-5 ">
            <h1 className=" text-xl font-bold ">What do we do?</h1>
            {/* <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro!
            </p> */}
              <Typewriter
                 options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                           typewriter.typeString('loremipsum')
                           .pauseFor(1500)
                          .deleteAll()
                          .start();
                  }}
              />

      
           </div>
          </div>
        </section>
        <section className="mx-10 p-10 bg-gray-200 rounded-xl">
          <div className="flex items-center justify-center ">
            <Charted height={250} width={450} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
