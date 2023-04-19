import React, { useEffect, useState, createContext } from "react";
import { type NextPage } from "next";
const service: NextPage = () => {
  const [form, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const [editName, setEditName] = useState(false);
  const [editAge, setEditAge] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPass, setEditPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const saveFromData = () => {
      if(form.name.length>0){
        localStorage.setItem("profile", JSON.stringify(form));
      }
  };
  const fetchProfileData = async () => {
    let res = await localStorage.getItem("profile");
    let data = JSON.parse(res);
    console.log(data);
   if(data){
    setFormData(data);
   }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);
  useEffect(() => {
    saveFromData();
  }, [form]);
  return (
    <>
      <section className="h-full mx-10 my-10 flex flex-col items-start justify-start rounded-md gap-5 p-2 ">
        <h1 className="font-bold text-4xl">Profile</h1>
      </section>
      <section className="h-full border-t-4 border-2 border-r-4 border-fuchsia-800 mx-10 my-10 flex flex-col items-start justify-start rounded-md gap-2 p-1 bg-gray-50 shadow-xl">
        <div className="flex w-full justify-between mt-5">
          <h2 className=" text-2xl ml-5">Name</h2>
          <div>
            <button
              type="submit"
              id="edit-button"
              className=" text-base mr-4"
              onClick={() => {
                setEditName(!editName);
              }}
            >
              {!editName ? (
                <h1 className="text-xl font-semibold">Edit</h1>
              ) : (
                <>✔️</>
              )}
            </button>
            {/* <button type="submit" id="end-editing" className="mr-10">
              ✔️
            </button> */}
          </div>
          {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className=" bg-slate-900 h-0.5 w-full"></div>
        {editName ? (
          <>
            {" "}
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full p-2"
              type=" text"
              name="name"
              placeholder="Enter your name"
            />
          </>
        ) : (
          <div className="mx-5 text-2xl font-bold">{form.name}</div>
        )}
        <div className="flex w-full justify-between">
          <h2 className=" text-2xl ml-5">Age</h2>
          <div>
            <button
              type="submit"
              id="edit-button"
              className=" text-base mr-4"
              onClick={() => {
                setEditAge(!editAge);
              }}
            >
              {!editAge ? (
                <h1 className="text-xl font-semibold">Edit</h1>
              ) : (
                <>✔️</>
              )}
            </button>
            {/* <button type="submit" id="end-editing" className="mr-10">
              ✔️
            </button> */}
          </div>
          {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className=" bg-slate-900 h-0.5 w-full"></div>
        {editAge ? (
          <>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full p-2"
              type=" text"
              name="age"
              placeholder="Enter your Age"
            />
          </>
        ) : (
          <div className="mx-5 text-2xl font-bold">{form.age}</div>
        )}
        <div className="flex w-full justify-between">
          <h2 className=" text-2xl ml-5">Email</h2>
          <div>
            <button
              type="submit"
              id="edit-button"
              className=" text-base mr-4"
              onClick={() => {
                setEditEmail(!editEmail);
              }}
            >
              {!editEmail ? (
                <h1 className="text-xl font-semibold">Edit</h1>
              ) : (
                <>✔️</>
              )}
            </button>
            {/* <button type="submit" id="end-editing" className="mr-10">
              ✔️
            </button> */}
          </div>
        </div>
        <div className=" bg-slate-900 h-0.5 w-full"></div>
        {editEmail ? (
          <>
            {" "}
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full p-2"
              type=" text"
              name="email"
              placeholder="Enter your email"
            />
          </>
        ) : (
          <div className="mx-5 text-2xl font-bold">{form.email}</div>
        )}

        <div className="flex w-full justify-between">
          <h2 className=" text-2xl ml-5">Password</h2>
          <div>
            <button
              type="submit"
              id="edit-button"
              className=" text-base mr-4"
              onClick={() => {
                setEditPass(!editPass);
              }}
            >
              {!editPass ? (
                <h1 className="text-xl font-semibold">Edit</h1>
              ) : (
                <>✔️</>
              )}
            </button>
            {/* <button type="submit" id="end-editing" className="mr-10" >
              ✔️
            </button> */}
          </div>
          {/* <h2 className=" text-base mr-10">edit</h2> */}
        </div>
        <div className=" bg-slate-900 h-0.5 w-full"></div>
        {editPass ? (
          <>
            {" "}
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full p-2"
              type=" text"
              name="password"
              placeholder="Enter your name"
            />
          </>
        ) : (
          <div className="mx-5 text-2xl font-bold">{form.password}</div>
        )}
        <button className="bg-green-300 border-2 px-7 py-3 rounded-md mx-2 hover:bg-green-700">
          SAVE
        </button>
      </section>
    </>
  );
};

export default service;
