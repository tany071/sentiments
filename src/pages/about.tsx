import { type NextPage } from "next";
import React from "react";
import Head from "next/head";

const About: NextPage= () => {
  return (
    <>
      <main className="mx-5 py-5">
        <section className="mx-10 p-10 bg-amber-300 border-8 border-fuchsia-900 rounded-xl">
          <div className="flex flex-col justify-center place-items-center">
            <h1 className="text-2xl font-bold">About</h1>
            <p className="text-xl px-10 py-10 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>


        <section className="p-10">
          <div className="flex justify-between lg:flex-nowrap flex-wrap bg-emerald-300 border-8 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
           <div className="flex-col justify-center place-items-center">
            <h1 className=" text-3xl font-bold py-8 px-10">Tech we Used!</h1>
            <ul className="text-xl px-20 list-disc">
              <li>Next Js</li>
              <li>Tailwind CSS</li>
              <li>Cohere SDK</li>
              <li>T3</li>
              <li>Vercel</li>
            </ul>
           </div>
           <div className=" h-60  w-96  px-20 bg-black">

           </div>
          </div>
        </section>


        <section className="p-10">
          <div className="flex-col justify-between lg:flex-nowrap flex-wrap bg-red-400 border-8 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
           
            <h1 className=" text-3xl font-bold py-12 px-10 text-center">Team</h1>
            <p className="text-xl px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
              eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
              incidunt maxime porro!
            </p> 
            <div className="flex justify-center items-center">
            <div className="w-full max-w-sm bg-amber-300 border-8 border-fuchsia-900 rounded-lg shadow mx-10 my-10">
 
                <div className="flex flex-col items-center pb-10">
                       {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                       <div className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg bg-white py-4"></div>
                       <h5 className="mb-1 text-xl font-bold  ">Tanya Sinha</h5>

                      <p className=" text-base px-10">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                      nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
                      eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
                      incidunt maxime porro!
                      </p>
                </div>
            </div>

            <div className="w-full max-w-sm bg-amber-300 border-8 border-fuchsia-900 rounded-lg shadow mx-10 my-10">
 
                <div className="flex flex-col items-center pb-10">
                       {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                       <div className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg bg-white py-4"></div>
                       <h5 className="mb-1 text-xl font-bold  ">Utkarsh .</h5>
                      <p className=" text-base px-10">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                      nulla voluptatem magnam rem hic reiciendis fugiat expedita ut
                      eligendi, rerum similique commodi vero. Architecto, id sit. Dolore
                      incidunt maxime porro!
                      </p>
                </div>
            </div>
            </div>
 
           </div>
        </section>
 


  
      

      </main>


    </>
  )
};

export default About;
