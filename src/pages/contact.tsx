import { NextPage } from "next";
import Image from "next/image";

const contact: NextPage = () => {
  return (
    <>
      <section className="h-full bg-gray-100 border-purple-400 border-2 mx-10 my-10 flex items-center justify-center rounded-xl gap-5  ">
        <div className="flex flex-wrap justify-center items-center mx-10 my-10 gap-10">
          <Image className="h-full w-full" src="/gethelp.jpg" alt="helplines" width={700} height={500} />
        </div>
      </section>
    </>
  );
};

export default contact;
