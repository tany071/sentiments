import React from "react";
import { type NextPage } from "next";

// {const paragraph = document.getElementById("edit");
// const edit_button = document.getElementById("edit-button");
// const end_button = document.getElementById("end-editing");

// edit_button.addEventListener("click", function() {
//   paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "#dddbdb";
// } );

// end_button.addEventListener("click", function() {
//   paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "#ffe44d";
// } )}

const service: NextPage = () => {
  return (
    <>
    <section className="h-full mx-10 my-10 flex flex-col items-start justify-start rounded-md gap-5 p-2 ">
    <h1 className="font-bold text-4xl">
      Profile
    </h1>
    </section>
    <section className="h-full border-4 border-fuchsia-800 mx-10 my-10 flex flex-col items-start justify-start rounded-md gap-2 p-1 ">
        <div className="flex w-full justify-between mt-5">
        <h2 className=" text-2xl ml-5">Name</h2>
        <div>
        <button type="submit" id="edit-button"  className=" text-base mr-4">Edit</button>
        <button type="submit" id="end-editing" className="mr-10">✔️</button>
        </div>
        {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className= " bg-slate-900 h-0.5 w-full"></div>
        <p id="edit" className=" text-sm ml-5 text-gray-500 mb-5"><b> Enter your name </b></p>

        <div className="flex w-full justify-between">
        <h2 className=" text-2xl ml-5">Age</h2>
        <div>
        <button type="submit" id="edit-button"  className=" text-base mr-4">Edit</button>
        <button type="submit" id="end-editing" className="mr-10">✔️</button>
        </div>
        {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className= " bg-slate-900 h-0.5 w-full"></div>
        <p id="edit" className=" text-sm ml-5 text-gray-500 mb-5"><b> Enter your age </b></p>

        <div className="flex w-full justify-between">
        <h2 className=" text-2xl ml-5">Email-id</h2>
        {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className= " bg-slate-900 h-0.5 w-full"></div>
        <p id="edit" className=" text-sm ml-5 text-gray-900 mb-5"><b> abc@gmail.com </b></p>


        <div className="flex w-full justify-between">
        <h2 className=" text-2xl ml-5">Password</h2>
        <div>
        <button type="submit" id="edit-button"  className=" text-base mr-4">Edit</button>
        <button type="submit" id="end-editing" className="mr-10">✔️</button>
        </div>
        {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className= " bg-slate-900 h-0.5 w-full"></div>
        <p id="edit" className=" text-sm ml-5 text-gray-500"><b> ******** </b></p>



    </section>
    </>
  );
};

export default service;

  

