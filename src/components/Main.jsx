import {
  DropboxLogo,
  Info,
  PaperPlaneTilt,
  PencilSimple,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Timer,
  Trash,
  UsersThree,
} from "@phosphor-icons/react";
import face from "../assets/face.jpg";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";

const Main = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className=" w-full bg-slate-100">
        <div className="w-full h-64 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative">
          <button className="absolute right-6 top-6 bg-white rounded-full p-2">
            <PencilSimple size={28} color="#7b74ff" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-white max-w-md flex flex-col items-center relative p-4">
            <div className="w-48 rounded-full border-4 border-white absolute -top-24">
              <img className="rounded-full" src={face} />
            </div>
            <h3 className="mt-20 text-2xl font-semibold">Ayaat Khanna</h3>
            <p className="text-sm text-slate-400 font-light">UI/UX Designer</p>
            <div className="flex items-center gap-2 text-xs mb-6">
              <UsersThree size={20} color="#3a3951" /> <span>21 followers</span>
              <span>23 following</span>
            </div>
            <div className="flex justify-between w-full">
              <h5 className="font-medium">
                Make my profile visible to employers
              </h5>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500"></div>
              </label>
            </div>
            <p className="text-xs text-slate-400 font-light mt-1">
              Your profile and career goals will appear when employers search
              our database for candidates
            </p>

            <div className="flex justify-between w-full mt-6">
              <h5 className="font-medium">Online Links</h5>
              <button className="w-6 h-6 bg-indigo-500 rounded-full flex justify-center items-center">
                <Plus weight="bold" size={14} color="#FFFFFF" />
              </button>
            </div>
            <p className="text-xs text-slate-400 font-light mt-1">
              Your profile and career goals will appear when employers search
              our database for candidates
            </p>

            <div className="bg-slate-100 w-full p-2 rounded-md flex items-center justify-center gap-4 my-6">
              <DropboxLogo size={28} color="#0061fe" weight="fill" />
              <DropboxLogo size={28} color="#0061fe" weight="fill" />
              <DropboxLogo size={28} color="#0061fe" weight="fill" />
            </div>

            <div className="bg-slate-100 p-4 w-full flex flex-col items-center justify-center gap-4 border rounded-xl aspect-square">
              <h6 className="flex items-center gap-2 text-indigo-950 font-medium text-lg">
                Wheel of Opportunities
                <Info size={20} color="#808080" />
              </h6>
              <div className="bg-indigo-200 rounded-full p-8 w-48 h-48">
                <div className="bg-slate-100 rounded-full flex flex-col items-center justify-center w-full h-full">
                  <span className="text-indigo-950 text-2xl font-bold">
                    350
                  </span>
                  <p className="text-sm">Sphere rating</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h6 className="flex items-center gap-2 text-indigo-950 font-medium text-lg mb-3">
                Your Ranking
              </h6>
              <div className="w-full bg-slate-100 border rounded-full h-6 flex items-center">
                <div
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-5 rounded-full"
                  style={{ width: "73%" }}
                ></div>
              </div>
              <p className="text-gray-400 text-center mt-3">
                Hurray! You are in top{" "}
                <b className="text-indigo-500 text-lg">27%</b>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md w-full md:m-4">
            <div className="text-sm font-medium text-center text-gray-500 border-b-2 border-gray-200">
              <ul className="flex justify-around -mb-px ms-6">
                <li className="w-full text-start">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 font-medium"
                  >
                    About
                  </a>
                </li>
                <li className="w-full text-start">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 font-medium"
                  >
                    Skills & Certificates
                  </a>
                </li>
                <li className="w-full text-start">
                  <a
                    href="#"
                    className="inline-block p-4 text-black border-b-4 border-blue-600 rounded-t-lg active font-semibold"
                    aria-current="page"
                  >
                    Posts
                  </a>
                </li>
                <li className="w-full text-start">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 font-medium"
                  >
                    Spaces
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-8">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img className="w-16 rounded-full" src={face} />
                    <div>
                      <h6 className="font-semibold text-lg">Karim Saif</h6>
                      <div className="flex gap-1 text-sm">
                        <p className="flex items-center text-slate-400 me-2">
                          <Timer size={16} color="#94a3b8" weight="bold" />
                          14 mg ago on
                        </p>
                        Figma Community
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="w-6 h-6 bg-indigo-500 rounded-full flex justify-center items-center"
                      onClick={() => setOpen(true)}
                    >
                      <PencilSimple weight="bold" size={14} color="#FFFFFF" />
                    </button>
                    <button className="w-6 h-6 bg-indigo-500 rounded-full flex justify-center items-center">
                      <Trash weight="bold" size={14} color="#FFFFFF" />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="ps-20">
                    What is the reason guys, yesterday I uploaded same type of
                    content and they approved it and today i tried to upload
                    they say we no longer acept it
                  </p>
                  <div className="w-full h-64 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md mt-2" />
                  <div className="flex gap-8 border-b py-4">
                    <button className="flex gap-2 text-indigo-600">
                      <ThumbsUp size={20} color="#7b74ff" weight="fill" /> 1.9K
                    </button>
                    <button className="flex gap-2 text-slate-400">
                      <ThumbsDown size={20} color="#94a3b8" weight="fill" /> 45
                    </button>
                    <button>
                      <PaperPlaneTilt size={20} color="#94a3b8" />
                    </button>
                  </div>
                  <div className="py-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <img className="w-8 rounded-full" src={face} />
                        <div>
                          <h6 className="font-semibold text-md">Karim Saif</h6>
                        </div>
                      </div>
                      <div className="ms-12">
                        <p className="text-gray-500">
                          I loved Northerm Ireland and spent some of the very
                          memorable days
                        </p>
                        <span className="text-xs text-slate-400">
                          Like . 5 Reply . 1 Reply
                        </span>
                        <div className="flex items-center gap-3 my-2">
                          <img className="w-8 rounded-full" src={face} />
                          <div>
                            <h6 className="font-semibold text-md">
                              Karim Saif
                            </h6>
                          </div>
                        </div>
                        <div className="ms-12">
                          <p className="text-gray-500">
                            I loved Northerm Ireland and spent some of the very
                            memorable days
                          </p>
                          <button className="font-semibold ms-12 my-4">
                            Load more comments
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img className="w-16 rounded-full" src={face} />
                    <div>
                      <h6 className="font-semibold text-lg">Karim Saif</h6>
                      <div className="flex gap-1 text-sm">
                        <p className="flex items-center text-slate-400 me-2">
                          <Timer size={16} color="#94a3b8" weight="bold" />
                          14 mg ago on
                        </p>
                        Figma Community
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setOpen(true)}
                      className="w-6 h-6 bg-indigo-500 rounded-full flex justify-center items-center"
                    >
                      <PencilSimple weight="bold" size={14} color="#FFFFFF" />
                    </button>
                    <button className="w-6 h-6 bg-indigo-500 rounded-full flex justify-center items-center">
                      <Trash weight="bold" size={14} color="#FFFFFF" />
                    </button>
                  </div>
                </div>
                <div>
                  <p>
                    What is the reason guys, yesterday I uploaded same type of
                    content and they approved it and today i tried to upload
                    they say we no longer acept it
                  </p>
                  <div className="flex gap-8 border-b py-4">
                    <button className="flex gap-2 text-indigo-600">
                      <ThumbsUp size={20} color="#7b74ff" weight="fill" /> 1.9K
                    </button>
                    <button className="flex gap-2 text-slate-400">
                      <ThumbsDown size={20} color="#94a3b8" weight="fill" /> 45
                    </button>
                    <button>
                      <PaperPlaneTilt size={20} color="#94a3b8" />
                    </button>
                  </div>
                  <div className="py-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <img className="w-8 rounded-full" src={face} />
                        <div>
                          <h6 className="font-semibold text-md">Karim Saif</h6>
                        </div>
                      </div>
                      <div className="ms-12">
                        <p className="text-gray-500">
                          I loved Northerm Ireland and spent some of the very
                          memorable days
                        </p>
                        <span className="text-xs text-slate-400">
                          Like . 5 Reply . 1 Reply
                        </span>
                        <div className="flex items-center gap-3 my-2">
                          <img className="w-8 rounded-full" src={face} />
                          <div>
                            <h6 className="font-semibold text-md">
                              Karim Saif
                            </h6>
                          </div>
                        </div>
                        <div className="ms-12">
                          <p className="text-gray-500">
                            I loved Northerm Ireland and spent some of the very
                            memorable days
                          </p>
                          <button className="font-semibold ms-12 my-4">
                            Load more comments
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Main;
