import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Charted from "../components/Charted";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
 


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Sentiments </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" ">
        <section className="mx-10 p-10 bg-white border-8 border-fuchsia-900 rounded-xl">
          <div className="flex flex-col items-center justify-center space-y-10 ">
            <Image src="/landingIcon.gif" alt="Aunty" width={500} height={500}/>
            <h1 className="text-5xl font-bold">Sentiments</h1>
            <div className="text-2xl">
            <Typewriter
                 options={{
                    loop: true,
                  }}
                  onInit={(typewriter:any) => {
                           typewriter.typeString('Lorem ipsum dolor sit')
                           .pauseFor(2500)
                          .deleteAll()
                          .start();
                  }}
              />
              </div>
 
          </div>
        </section>
        <section className="p-10">
          <div className="flex justify-between lg:flex-nowrap flex-wrap bg-amber-300 border-8 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
           <div className="flex-col justify-center place-items-center">
            <h1 className=" text-3xl font-bold py-12 px-10">What do we do?</h1>
            <p className="text-xl px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro!
            </p>      
           </div>
           <div className=" h-80 w-5/6   bg-black"></div>
          </div>
        </section>

        <section className="p-10">
          <div className="flex flex-row-reverse justify-between lg:flex-nowrap flex-wrap bg-red-400 border-8 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
           <div className="flex-col  justify-center place-items-center">
            <h1 className=" text-3xl font-bold py-12 px-10">Purpose & Vision</h1>
            <p className="text-xl px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro!
            </p>      
           </div>
           <div className=" h-80 w-5/6   bg-black"></div>
          </div>
        </section>
 
      </main>
    </>
  );
};

export default Home;
