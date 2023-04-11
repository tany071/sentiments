import { NextPage } from "next";
import Image from "next/image";
import Charted from "../components/Charted";
const dashboard: NextPage = () => {
  return (
    <>
      <section className="h-full bg-gray-50 mx-10 my-10 flex items-start justify-start rounded-md gap-5 p-2 ">
        <div className="flex h-full  w-full rounded-sm p-5 justify-between items-start flex-wrap bg-blue-200">
          {/* <Image className=" h-[20rem] w-[20rem] " src="/analytics.gif" alt="img" width={400} height={100}/> */}
          <div className="md:w-1/2 w-full flex flex-col">
            <h1 className="font-bold text-5xl">
              This is your sentiment report📝
            </h1>
            <p className="mt-5 text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
              ipsa cupiditate eligendi consectetur, asperiores ad, cum dolorem
              dolores magnam nemo minus delectus nam eum tenetur voluptatibus
              voluptatem voluptas laboriosam quia! Excepturi nam at hic ab nihil
              possimus, amet sint! Molestiae esse possimus officiis ullam maxime
              unde distinctio laudantium ad.
            </p>
          </div>
          <div className="h-full scale-[65%] md:scale-100">
            <Charted height={400} width={600} />
          </div>
        </div>
      </section>
    </>
  );
};

export default dashboard;
