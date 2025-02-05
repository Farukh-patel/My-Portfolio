import React from "react";
export const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center  bg-slate-900">
        <img
          className="rounded-full bg-slate-900 h-26 w-24 "
          src="Me.png"
          alt=""
        />
        <div className="mx-3 h-40 flex flex-col my-8 justify-center items-center">
          <h1>Trust me iam a software developer!!</h1>
          <p></p>
        </div>
      </div>

      <div className="flex justify-center bg-slate-900">
      <div className="bg-purple-800 h-1 w-[150px] rounded my-3"></div>
      </div>

      {/* div grids */}

      <div className="grid md:grid-cols-2 bg-slate-900 flex justify-center items-center gap-3 ">
        <div className="bg-purple-800 mt-2 mx-2 rounded-lg h-36 w-80">
          <div className="flex justify-center items-center h-28 p-0">
            <img
              className="h-14 mx-2 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnBuAOO1Gdujswhekc-wgsUdAEBC7zBZKDw&s"
              alt=""
            />
            <p className="mx-2"> Lorem ipsum, ctetur repellat iusto mnima, </p>
          </div>
          <button className=" mx-5  rounded-lg border-white btn btn-primary">
            See More{" "}
          </button>
        </div>
        <div className="bg-purple-800 mt-2 mx-2 rounded-lg h-36 w-80">
          <div className="flex justify-center items-center h-28 ">
            <img
              className="h-14 mx-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnBuAOO1Gdujswhekc-wgsUdAEBC7zBZKDw&s"
              alt=""
            />
            <p className="mx-2"> Lorem ipsum, ctetur repellat iusto mnima, </p>
          </div>
          <button className=" mx-5 rounded-lg border-white btn btn-primary">
            See More{" "}
          </button>
        </div>
        <div className="bg-purple-800 mt-2 mx-2 rounded-lg h-36 w-80">
          <div className="flex justify-center items-center h-28">
            <img
              className="h-14 mx-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnBuAOO1Gdujswhekc-wgsUdAEBC7zBZKDw&s"
              alt=""
            />
            <p className="mx-2"> Lorem ipsum, ctetur repellat iusto mnima, </p>
          </div>
          <button className=" mx-5 rounded-lg border-white btn btn-primary">
            See More{" "}
          </button>
        </div>
        <div className="bg-purple-800 mt-2 mx-2 rounded-lg h-36 w-80">
          <div className="flex justify-center items-center h-28 ">
            <img
              className="h-14 mx-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnBuAOO1Gdujswhekc-wgsUdAEBC7zBZKDw&s"
              alt=""
            />
            <p className="mx-2"> Lorem ipsum, ctetur repellat iusto mnima, </p>
          </div>
          <button className=" mx-5 rounded-lg border-white btn btn-primary">
            See More{" "}
          </button>
        </div>
      </div>

      {/* socila media section */}
      <div className="h-screen bg-slate-900">
        <div className="flex justify-center items-center h-96">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
      <p className="h-auto text-white bg-slate-700 font-light ">catch me on</p>
      <div className="h-22 bg-slate-800 flex justify-between p-5">
        <div> <img className="h-10 rounded-full hover:shadow-gray-400 cursor-pointer" src="gmail.png" alt="" /></div>
        <div> <img className="h-10 rounded-full hover:shadow-gray-400 cursor-pointer"  src="instagram.png" alt="" /></div>
        <div> <img className="h-10 rounded-full hover:shadow-gray-400 cursor-pointer"  src="github.png" alt="" /></div>
        <div> <img className="h-10 rounded-full hover:shadow-gray-400 cursor-pointer"  src="linkedin.png" alt="" /></div>
        <div> <img className="h-10 rounded-full hover:shadow-gray-400 cursor-pointer"  src="x.png" alt="" /></div>
      </div>
    </div>
  );
};
