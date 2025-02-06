import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
export const HomePage = () => {
  const cardData = [
    {
      id: 1,
      text: "Lorem ipsum, ctetur repellat iusto mnima",
      imgSrc: "/card-image.png",
    },
    {
      id: 2,
      text: "Lorem ipsum, ctetur repellat iusto mnima",
      imgSrc: "/card-image.png",
    },
    {
      id: 3,
      text: "Lorem ipsum, ctetur repellat iusto mnima",
      imgSrc: "/card-image.png",
    },
    {
      id: 4,
      text: "Lorem ipsum, ctetur repellat iusto mnima",
      imgSrc: "/card-image.png",
    },
  ];

  const socialMedia = [
    { id: 1, img: "/gmail.png", alt: "Gmail", link: "mailto:your@email.com" },
    {
      id: 2,
      img: "/instagram.png",
      alt: "Instagram",
      link: "https://instagram.com/yourprofile",
    },
    {
      id: 3,
      img: "/github.png",
      alt: "GitHub",
      link: "https://github.com/yourprofile",
    },
    {
      id: 4,
      img: "/linkedin.png",
      alt: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      id: 5,
      img: "/x.png",
      alt: "Twitter/X",
      link: "https://x.com/yourprofile",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Chat Application",
      description: "A full stack chat application.",
      link: "https://yourproject.com",
    },
    {
      id: 2,
      title: "Note Takig App",
      description:
        "A full stack Note taking app ,user can read ,create update and delete Notes",
      link: "https://yourproject2.com",
    },
    {
      id: 3,
      title: "Note Takig App",
      description:
        "A full stack Note taking app ,user can read ,create update and delete Notes",
      link: "https://yourproject2.com",
    },
    {
      id: 4,
      title: "Note Takig App",
      description:
        "A full stack Note taking app ,user can read ,create update and delete Notes",
      link: "https://yourproject2.com",
    },
    {
      id: 4,
      title: "Note Takig App",
      description:
        "A full stack Note taking app ,user can read ,create update and delete Notes",
      link: "https://yourproject2.com",
    },
    {
      id: 4,
      title: "Note Takig App",
      description:
        "A full stack Note taking app ,user can read ,create update and delete Notes",
      link: "https://yourproject2.com",
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Profile Section */}
      <div className="flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
        <div className="relative w-48 h-48">
          <img
            src="Me.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
          />

          <div className="bg-slate-50 chat chat-end">
            <p className="font-mono text-green-500 bg-slate-500  p-2">
              {" "}
              HI My name is farukh Trust me iam a softaware developer
            </p>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <FaHtml5 className="absolute text-orange-500 text-4xl animate-orbit-1" />
            <FaJs className="absolute text-yellow-300 text-4xl animate-orbit-2" />
            <FaNodeJs className="absolute text-green-500 text-4xl animate-orbit-3" />
            <SiExpress className="absolute text-blue-500 text-4xl animate-orbit-4" />
            <SiMongodb className="absolute text-green-500 text-4xl animate-orbit-5" />
            <FaPython className="absolute text-blue-500 text-4xl animate-orbit-6" />
            <FaCss3Alt className="absolute text-blue-500 text-4xl animate-orbit-7" />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="flex justify-center">
        <div className="bg-purple-800 h-1 w-[150px] rounded my-3"></div>
      </div>
      <div className="py-10">
        <h2 className="text-center text-2xl font-semibold">Tech Stack</h2>
        <div className="flex justify-center gap-6 mt-4">
          <FaReact className="text-blue-400 text-3xl animate-bounce" />
          <FaNodeJs className="text-green-500 text-3xl animate-bounce" />
          <SiMongodb className="text-green-500 text-3xl animate-bounce" />
          <FaPython className="text-yellow-400 text-3xl animate-bounce" />
          <FaHtml5 className="text-orange-500 text-3xl animate-bounce" />
          <FaCss3Alt className="text-blue-500 text-3xl animate-bounce" />
          <FaJs className="text-yellow-300 text-3xl animate-bounce" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-purple-800 h-1 w-[150px] rounded my-3"></div>
      </div>
      {/* Grid Section */}
      <div className="py-10 px-10">
        <h2 className="text-center text-2xl font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-purple-700 p-5 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media Section */}
      <footer>
        <div className="h-22 bg-slate-800 flex justify-between p-5">
          <div>
            <img className="h-12 rounded-full" src="buglogo.png" alt="" />
          </div>
          <div className="flex justify-center items-center gap-8">
            <a href="">
              <FaGithub className="text-white " />
            </a>
            <a href="">
              <FaFacebook className="text-white text-blue-600 " />
            </a>
            <a href="">
              <FaInstagram className="text-white text-pink-500 " />
            </a>
            <a href="">
              <FaLinkedin className="text-white text-blue-600 " />
            </a>
            <a href="">
              <FaEnvelope className="text-white text-red-500 " />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
