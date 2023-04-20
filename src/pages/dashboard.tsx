import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import Charted from "../components/Charted";
const dashboard: NextPage = () => {
  const [sentiment, setSentimnet] = useState([]);
  const [moodScore, setMoodScore] = useState(0);
  const [profile, setProfile] = useState({
    name: "User",
  });
  const fetchAnalyzedData = async () => {
    let res = await localStorage.getItem("analyzedData");
    let data = res?.split(",");
    let temp = [];
    data?.forEach((e) => {
      temp.push(parseFloat(e));
    });
    setSentimnet(temp);
  };
  const fetchProfile = async () => {
    let res = await localStorage.getItem("profile");
    let data = JSON.parse(res);
    if (data) {
      setProfile(data);
    }
  };
  useEffect(() => {
    fetchAnalyzedData();
    fetchProfile();
  }, []);
  useEffect(() => {
    calculateMoodScore();
  }, [sentiment]);

  const calculateMoodScore = () => {
    let mood = sentiment.reduce((a, b) => a + b, 0);
    mood = mood / (sentiment.length - 1);
    setMoodScore(mood);
  };

  return (
    <>
      <section className="h-full bg-gray-50 mx-10 my-10 flex flex-col items-start justify-start rounded-md gap-5 p-2 ">
        <div className="flex h-full  w-full rounded-xl p-5 justify-between items-start flex-wrap bg-blue-200 border-r-8 border-black border-l-2 shadow-xl ">
          {/* <Image className=" h-[20rem] w-[20rem] " src="/analytics.gif" alt="img" width={400} height={100}/> */}
          <div className="md:w-1/2 w-full flex flex-col">
            <h1 className="font-bold text-5xl">Hi {profile.name}</h1>
            <h1 className="font-bold text-5xl">
              This is your sentiment report📝
            </h1>
            <p className="mt-10 text-xl font-light">
              The purpose of this report is to analyze the mood of a patient
              through his journal entries using Natural Language Processing
              (NLP), The patient has been writing daily journal entries for the
              past month, and we have used NLP to analyze the entries and
              predict his mood. The patient's journal entries were analyzed
              using NLP techniques to identify the sentiment of each entry. We
              used a pre-trained sentiment analysis model that is capable of
              identifying positive, negative, and neutral sentiments. The
              sentiment of each entry was then plotted on a graph to visualize
              the patient's mood over the past few days.
            </p>
            <h2 className="text-xl font-semibold">
              Your Average sentiment score is:-{" "}
              <span className="text-md font-bold ">{moodScore}</span>
            </h2>
          </div>
          <div className="  z-[0] h-full scale-[65%] md:scale-100">
            <Charted height={400} width={600} />
          </div>
        </div>
        {sentiment.map((e, index) => {
          return index === 0 ? (
            <></>
          ) : (
            <div className="p-5 rounded-md mb-2 bg-orange-200 border-l-4  border-orange-600 w-full text-xl font-bold shadow-md">
              Day {index}{" "}
              <span className="font-light text-md ">
                {" "}
                sentiment score :
                <span className="text-xl font-semibold"> {e}</span>
              </span>
            </div>
          );
        })}
        <div>
          {moodScore > 0 ? (
            <h1 className="text-3xl font-bold text-pink-500 mb-10 ">
              Songs suggested for you based on your recent mood 😊
            </h1>
          ) : (
            <></>
          )}
          {moodScore < 40 && moodScore > 0 ? (
            <iframe
              className="rounded-md w-[92vw] mx-2"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3ummpEavFme?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <></>
          )}

          {moodScore > 40 && moodScore < 70 ? (
            <iframe
              className="rounded-md w-[92vw] mx-2"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <></>
          )}
          {moodScore > 70 ? (
            <iframe
              className="rounded-md w-[92vw] mx-2"
              src="https://open.spotify.com/embed/playlist/4FBzep3CLUGKMWlV3JjfuG?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default dashboard;
