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
        {/* <section className="mx-10 p-10 bg-white rounded-xl flex items-center">
          <div className="flex flex-row w-full items-start justify-between">
            <Image src="/landingIcon.gif" alt="Aunty" width={550} height={550} className="  "/>
            <div className="flex flex-col items-center self-center ">
            <h1 className="text-5xl font-bold ">Sentiments</h1>
            <div className="text-3xl">
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
 
          </div>
        </section> */}

        <section className="mx-10 p-10 bg-white rounded-xl flex items-center">
          <div className=" h-full w-full inline-block">
            <div className=" flex w-full items-start justify-between">
            <Image src="/landingIcon.gif" alt="Aunty" width={500} height={500} className=" w-1/2 inline-block"/>
            <div className=" flex w-1/2 flex-col items-start self-center">
            <h1 className="text-6xl font-bold ">Sentiments</h1>
            <div className="text-3xl my-8">
            <Typewriter
                 options={{
                    loop: true,
                  }}
                  onInit={(typewriter:any) => {
                           typewriter.typeString('Revitalize your mind, body, and soul.')
                           .pauseFor(2500)
                          .deleteAll()
                          .start();
                  }}
              />
              </div>
              

            </div>


            </div>

          </div>
          
        </section>
        <section className="p-10 ">
          <div className="flex justify-between lg:flex-nowrap flex-wrap border-4 border-fuchsia-800 p-10 rounded-xl space-y-5 ">
           <div className="flex-col justify-center place-items-center">
            <h1 className=" text-3xl font-bold py-12 px-10">What do we do?</h1>
            <p className="text-xl px-10">
            An NLP-based journaling tool is an innovative and personalized solution for individuals looking to improve their mental wellbeing. By simply writing in the journal, the tool is able to analyze the text and provide an accurate assessment of the user's mood. This information is crucial in identifying patterns and gaining insight into the user's emotional state.
            </p>      
           </div>
           {/* <div className=" h-80 w-5/6   bg-black"></div> */}
           <Image src="/landing2.gif" alt="sooraj" width={350} height={350}/>
          </div>
        </section>

        <section className="p-10">
          <div className="flex flex-row-reverse justify-between lg:flex-nowrap flex-wrap border-4 border-fuchsia-800 p-10 rounded-xl space-y-5 ">
           <div className="flex-col  justify-center place-items-center">
            <h1 className=" text-3xl font-bold py-12 px-10">Purpose & Vision</h1>
            <p className="text-xl px-10">
            Our mission is to promote mental wellness and empower individuals to take control of their mental health. We believe that with the right tools and support, anyone can achieve optimal mental wellbeing and live a fulfilling, healthy life.Whether you're struggling with stress, anxiety, depression, or simply want to improve your overall mental wellbeing, our app can help.
            </p>      
           </div>
           {/* <div className=" h-80 w-5/6   bg-black"></div> */}
           <Image src="/landing3.gif" alt="dartgame" width={350} height={350}/>
           
          </div>
        </section>
 
      </main>
    </>
  );
};

export default Home;
