import { Bug, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";

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
        "A full stack note-taking app where users can create, update, and delete notes.",
      link: "https://yourproject2.com",
    },
    {
      id: 3,
      title: "News App",
      description:
        "A full stack news app to fetch the latest news across categories.",
      link: "https://yourproject3.com",
    },
    {
      id: 4,
      title: "Blogging Platform",
      description:
        "A secure blogging app where users can create blogs and interact through comments.",
      link: "https://yourproject4.com",
    },
    {
      id: 5,
      title: "YouTube Focus Extension",
      description:
        "A Chrome extension that removes distractions from YouTube for focus mode.",
      link: "https://yourproject5.com",
    },
    {
      id: 6,
      title: "Gemini Clone",
      description:
        "A Gemini-style chatbot or assistant with clean UI and fast UX.",
      link: "https://yourproject6.com",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 w-full ${props.mode === "dark"
          ? "bg-zinc-900 text-white"
          : "bg-gray-50 text-black"
        }`}
    >



      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="relative w-48 h-48 mb-6">
          <img
            src="Me.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FaHtml5 className="absolute text-orange-500 text-3xl animate-orbit-1" />
            <FaJs className="absolute text-yellow-300 text-3xl animate-orbit-2" />
            <FaNodeJs className="absolute text-green-500 text-3xl animate-orbit-3" />
            <SiExpress className="absolute text-white text-3xl animate-orbit-4" />
            <SiMongodb className="absolute text-green-500 text-3xl animate-orbit-5" />
            <SiMysql className="absolute text-blue-900 text-4xl animate-orbit-6" />
            <FaPython className="absolute text-yellow-500 text-3xl animate-orbit-7" />
            <FaCss3Alt className="absolute text-blue-500 text-3xl animate-orbit-8" />
            <SiTailwindcss className="absolute text-blue-500 text-3xl animate-orbit-9" />
            <FaReact className="absolute text-blue-400 text-3xl animate-orbit-10" />
          </div>
        </div>
        <div
          className={`text-center p-4 rounded-xl shadow-lg w-fit ${props.mode === "dark" ? "bg-zinc-800" : "bg-white"
            }`}
        >
          <p className="text-lg font-mono text-green-500">
            <span className="typing">
              Hi! I am FARUKH <br /> Trust me, I’m a Software Developer 🚀
            </span>
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="py-10 px-6">
        <h2 className="text-center text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <FaReact className="text-blue-400 text-3xl animate-bounce" />
          <FaNodeJs className="text-green-500 text-3xl animate-bounce" />
          <SiExpress className="text-gray-400 text-3xl animate-bounce" />
          <SiMongodb className="text-green-500 text-3xl animate-bounce" />
          <SiMysql className="text-blue-500 text-3xl animate-bounce" />
          <FaPython className="text-yellow-400 text-3xl animate-bounce" />
          <FaHtml5 className="text-orange-500 text-3xl animate-bounce" />
          <FaCss3Alt className="text-blue-500 text-3xl animate-bounce" />
          <FaJs className="text-yellow-300 text-3xl animate-bounce" />
          <SiTailwindcss className="text-blue-500 text-3xl animate-bounce" />
        </div>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-2xl font-semibold mb-6 ">PROJECTS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl p-5 shadow-md transition transform hover:-translate-y-1 hover:shadow-lg ${props.mode === "dark"
                ? "bg-zinc-800 text-white"
                : "bg-white text-black"
                }`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-sm opacity-90">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${props.mode === "dark"
                    ? "bg-zinc-800 hover:bg-zinc-700"
                    : "bg-white hover:bg-gray-200 text-black"
                    } transition`}
                >
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div
          className={`flex flex-col md:flex-row justify-between items-center px-6 py-4 mt-8 border-t ${props.mode === "dark"
            ? "bg-zinc-900 text-white border-slate-700"
            : "bg-white text-black border-gray-200"
            }`}
        >
          <div className="flex items-center space-x-1 text-xl font-mono mb-4 md:mb-0">
            <span>&lt;</span>
            <Bug
              className={`w-5 h-5 ${props.mode === "dark" ? "text-green-400" : "text-green-600"
                }`}
            />
            <span>/&gt;</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Farukh-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/farukhpatel" className="hover:scale-110 transition-transform">
              <Linkedin className="text-blue-600" />
            </a>
            <a href="mailto:farukhpatel364@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Mail className="text-red-500" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="text-blue-600" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="text-pink-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
