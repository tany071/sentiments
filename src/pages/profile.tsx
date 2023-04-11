import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import cohere from "cohere-ai";
import { Examples } from "./constants";
const Profile: NextPage = () => {
  interface Notes {
    id: string;
    text: string;
    date: string;
  }

  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  // {
  //   id: nanoid(),
  //   text: "This is my first note!",
  //   date: "15/04/2021",
  // },
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
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  };
  const DeleteNote = (id: Number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const notesData = async () => {
    let res = await localStorage.getItem("Notes");
    res = JSON.parse(res);
    let notesArray = [];
    for (let iter = 0; iter < res.length; iter++) {
      notesArray.push(res[iter]["text"]);
    }
    // console.log(noteText)
    return notesArray;
    // let notesArray =
  };
  const analyzeSentiment = async () => {
    let NotesData = await notesData();
    cohere.init("wDzuhl6zPspMAejVLonV2kwzch16UMWpNQByIhv3");
    (async () => {
      const response = await cohere.classify({
        model: "small",
        inputs: NotesData,
        examples: Examples,
      });
      // for(let i =0 ; i <NotesData.length;i++){
      //   console.log(response.body.classifications[i]);
      // }
      let analyzedData: any = [];
      analyzedData.push(0);
      response.body.classifications.forEach((e, index) => {
        let parsedSentiment = parseFloat(e.labels.positive?.confidence) * 100;
        parsedSentiment>=90?parsedSentiment=parsedSentiment-10:parsedSentiment
        analyzedData.push(parsedSentiment);
      });
      console.log(analyzedData);
      localStorage.setItem("analyzedData", analyzedData);
    })();
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
    // analyzeSentiment();
  }, []);

  //saving data to local storage
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("Notes", JSON.stringify(notes));
      analyzeSentiment();
    }
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
