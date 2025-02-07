import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export const HomePage = (props) => {
  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description: "A full stack chat application.",
      link: "https://yourproject.com",
    },
    {
      id: 2,
      title: "Note Taking App",
      description:
        "A full stack Note taking app, user can read, create, update, and delete notes.",
      link: "https://yourproject2.com",
    },
    {
      id: 3,
      title: "News App",
      description:
        "A full stack news app useful to fetch the latest news across multiple categories.",
      link: "https://yourproject2.com",
    },
    {
      id: 4,
      title: "Blogging App",
      description:
        "A full stack blogging app where users can create, read, and add comments to blogs, all securely stored in a database.",
      link: "https://yourproject2.com",
    },
    {
      id: 5,
      title: "YouTube Focus Mode - Chrome Extension",
      description:
        "A Chrome extension that hides comments and recommendations on YouTube for a distraction-free experience.",
      link: "https://yourproject2.com",
    },
  ];

  return (
    <div
      className={`${
        props.mode === "dark"
          ? "bg-indigo-950 text-white"
          : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Profile Section */}
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="relative w-48 h-48">
          <img
            src="Me.png"
            alt="Profile"
            className="w-24 rounded-full mx-auto border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FaHtml5 className="absolute text-orange-500 text-4xl animate-orbit-1" />
            <FaJs className="absolute text-yellow-300 text-4xl animate-orbit-2" />
            <FaNodeJs className="absolute text-green-500 text-4xl animate-orbit-3" />
            <SiExpress className="absolute text-white text-4xl animate-orbit-4" />
            <SiMongodb className="absolute text-green-500 text-4xl animate-orbit-5" />
            <FaPython className="absolute text-yellow-500 text-4xl animate-orbit-6" />
            <FaCss3Alt className="absolute text-blue-500 text-4xl animate-orbit-7" />
            <FaReact className="absolute text-blue-400  text-4xl animate-orbit-8" />
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center h-20 w-98 text-xm rounded-2xl p-4 ${props.mode==="dark" ? "bg-indigo-800"  : "bg-gray-100"  } shadow-lg relative`}
          style={{ animation: "fadeInScale 1s ease-in-out" }}
        >
          <p className="font-mono text-green-500 text-lg">
            <span className="typing">
              Hi!, I am FARUKH <br /> Trust me! I am a Software Developer
            </span>
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-10">
        <h2 className="text-center text-2xl font-semibold">Tech Stack</h2>
        <div className="flex justify-center gap-6 mt-4">
          <FaReact className="text-blue-400 text-3xl animate-bounce" />
          <FaNodeJs className="text-green-500 text-3xl animate-bounce" />
          <SiExpress className="text-gray-400 text-3xl animate-bounce" />
          <SiMongodb className="text-green-500 text-3xl animate-bounce" />
          <FaPython className="text-yellow-400 text-3xl animate-bounce" />
          <FaHtml5 className="text-orange-500 text-3xl animate-bounce" />
          <FaCss3Alt className="text-blue-500 text-3xl animate-bounce" />
          <FaJs className="text-yellow-300 text-3xl animate-bounce" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-10 px-10">
        <h2 className="text-center text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                props.mode === "dark"
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-black"
              } p-5 rounded-lg shadow-md`}
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p
                className={`${
                  props.mode === "dark" ? "text-gray-300" : "text-black"
                }`}
              >
                {project.description}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button
                  className={`${
                    props.mode === "dark"
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-white hover:bg-gray-200 text-black"
                  } mt-2 px-4 py-2 rounded-lg transition`}
                >
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div
          className={`${
            props.mode === "dark" ? "bg-slate-800" : "bg-gray-200"
          } h-22 flex justify-between p-5`}
        >
          <div>
            <img className="h-12 rounded-full" src="buglogo.png" alt="Logo" />
          </div>
          <div className="flex justify-center items-center gap-8">
            <a href="https://github.com/Farukh-patel">
              <FaGithub className="text-gray-600" />
            </a>
            <a href="">
              <FaFacebook className="text-blue-600" />
            </a>
            <a href="">
              <FaInstagram className="text-pink-500" />
            </a>
            <a href="">
              <FaLinkedin className="text-blue-600" />
            </a>
            <a href="">
              <FaEnvelope className="text-red-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
