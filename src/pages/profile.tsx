import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
const Profile: NextPage = () => {
  interface Notes {
    id: string;
    text: string;
    date: string;
  }

  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is my first note!",
    //   date: "15/04/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my second note!",
    //   date: "21/04/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my third note!",
    //   date: "28/04/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my new note!",
    //   date: "30/04/2021",
    // },
  ]);

  const handleChange = (event: any) => {
    setNoteText(event.target.value);
  };

  // const handleSaveClick = ()
  const AddNote = () => {
    if (noteText.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: noteText,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    }
  };
  const DeleteNote = (id: Number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  useEffect(() => {
    const savedNotes: string | any = JSON.parse(
      localStorage.getItem("notes-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
      console.log("Successfully retrieved Notes");
      console.log(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
    console.log("Successfully Saved the State of Notes");
  }, [notes]);
  return (
    <>
      <section className="h-full bg-gray-200 mx-10 my-10 flex items-start justify-start rounded-xl gap-5  ">
        <div className="flex flex-wrap justify-start items-start mx-10 my-10 gap-10">
          {notes.map((elem, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-yellow-200 flex-col rounded-lg shadow-md border border-gray hover:scale-105 hover:ease-in duration-300 "
              >
                <div className="flex flex-row-reverse py-2">
                  <button
                    className="scale-[130%]"
                    onClick={() => {
                      DeleteNote(elem.id);
                    }}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
                <h1 className="text-xl font-bold">{elem.text}</h1>
                <h1 className="text-xs font-light">{elem.date}</h1>
              </div>
            );
          })}
          <div className="note new p-10 bg-blue-300 flex-col rounded-lg shadow-md border border-gray">
            <textarea
              className="p-3 space-y-2 my-2 resize-none"
              placeholder="Type a note here"
              onChange={handleChange}
              value={noteText}
              onKeyDown={(e) => {
                e.key === "Enter" ? AddNote() : "";
              }}
            ></textarea>
            <div className="note-footer">
              <button
                className="save p-1 bg-black text-white rounded "
                onClick={AddNote}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
