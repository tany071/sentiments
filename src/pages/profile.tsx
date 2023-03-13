import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Profile: NextPage = () => {
  interface Notes {
    id: string;
    text: string;
    date: string;
  }

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);
  useEffect(() => {
    const savedNotes: string | null = JSON.parse(
      localStorage.getItem("notes-data") || "{}"
    );
    console.log("Successfully retreived Notes");
    console.log(savedNotes);
  }, []);
  useEffect(() => {
    const savedNotes: any = localStorage.setItem(
      "notes-data",
      JSON.stringify(notes)
    );
    if (savedNotes) {
      setNotes(savedNotes);
      console.log("Successfully Saved the State of Notes");
    }
  }, [notes]);
  return (
    <>
      <section className="h-[100vh] bg-gray-200 mx-10 my-10 flex items-start justify-start rounded-xl gap-5  ">
        <div className="flex flex-wrap justify-start items-start mx-10 my-10 gap-10">
          {notes.map((elem, index) => {
            return (
              <div className="p-10 bg-yellow-200 flex-col rounded-lg shadow-md border border-gray ">
                <h1 className="text-xl font-bold">{elem.text}</h1>
                <h1 className="text-sm font-light">{elem.date}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Profile;
