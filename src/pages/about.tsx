import { type NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <main className="mx-5 py-5">
        <section className="mx-10 p-10 border-4 border-fuchsia-900 rounded-xl">
          <div className="flex flex-col justify-center place-items-center">
            <h1 className="text-2xl font-bold">About</h1>
            <div className="text-xl px-10 py-10 ">
              <p className="text-2xl font-semibold">
                Introducing our new journaling tool Sentiments that uses Natural
                Language Processing (NLP) to analyze your daily journal entries
                and predict your mood. With this tool, you can gain valuable
                insights into your emotions and track your mood over time.
              </p>
              <ul className="text-xl  font-bold ">How it works:</ul>
              <p className="text-md font-light">
                Simply write your daily journal entries using our online tool or
                mobile app, and our NLP algorithm will analyze the text to
                determine your mood. The algorithm uses pre-trained models to
                identify positive, negative, and neutral sentiments in your
                writing, and generates a mood score for each entry. Over time,
                you can view your mood scores on a graph to visualize your
                emotional patterns and track your progress. You can also see
                your overall mood score for each week, which can help you
                identify trends and patterns in your mood.
              </p>
              <ul className="text-xl  font-bold ">Benefits:</ul>
              <p className="text-md font-light">
                Our journaling tool provides several benefits, including:
                Increased self-awareness: By tracking your mood over time, you
                can gain a better understanding of your emotional patterns and
                identify triggers that affect your mood. Improved mental health:
                Journaling has been shown to have numerous mental health
                benefits, including reduced stress and anxiety, improved mood,
                and increased self-esteem.
              </p>
              <ul className="text-xl  font-bold ">Easy to use: </ul>
              <p className="text-md font-light">
                Our journaling tool is user-friendly and can be accessed from
                anywhere, making it easy to incorporate into your daily routine.
                Personalized insights: Our NLP algorithm provides personalized
                insights into your emotions, allowing you to identify patterns
                and make informed decisions about your mental health.
              </p>
              <ul className="text-xl  font-bold ">Conclusion: </ul>
              <p className="text-md font-light">
                Our journaling tool is an innovative way to track your mood and
                gain valuable insights into your emotional patterns. With the
                power of NLP, you can analyze your journal entries and gain a
                better understanding of your emotions, leading to improved
                mental health and overall well-being. Try our journaling tool
                today and start your journey to better mental health.
              </p>
            </div>
          </div>
        </section>

        <section className="p-10">
          <div className="flex justify-between lg:flex-nowrap flex-wrap  border-4 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
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
            {/* <div className=" h-60  w-96  px-20 bg-black">

           </div> */}
            <Image
              src="/tech-stack2.gif"
              alt="bijli"
              width={350}
              height={350}
            />
          </div>
        </section>

        <section className="p-10">
          <div className="flex-col justify-between lg:flex-nowrap flex-wrap    border-4 border-fuchsia-900  p-10 rounded-xl space-y-5 ">
            <h1 className=" text-3xl font-bold py-12 px-10 text-center">
              Team
            </h1>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-sm bg-amber-300  border-4 border-fuchsia-900  rounded-lg shadow mx-10 my-10">
                <div className="flex flex-col items-center pb-10">
                  {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                  <div className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg bg-white py-4"></div>
                  {/* <Image src="/tech-stack2.gif" alt="bijli" width={350} height={350}/> */}
                  <h5 className="mb-1 text-xl font-bold  ">Tanya Sinha</h5>

                  <p className=" text-base px-10">
                    I am a UI/UX Designer and a Front-End Developer.😌✨
                  </p>
                </div>
              </div>

              <div className="w-full max-w-sm  bg-violet-200 border-4 border-fuchsia-900  rounded-lg shadow mx-10 my-10">
                <div className="flex flex-col items-center pb-10">
                  {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                  <div className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg bg-white py-4"></div>
                  <h5 className="mb-1 text-xl font-bold  ">Utkarsh .</h5>
                  <p className=" text-base px-10">
                    I am a Web-Developer, I build the website and depoloyed the
                    backend and frontend. + I like cats 😺
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
