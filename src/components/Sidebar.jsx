import {
  CaretRight,
  ChartLine,
  GlobeHemisphereEast,
  GridFour,
  SuitcaseSimple,
  User,
} from "@phosphor-icons/react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar hidden md:flex flex-col justify-between p-4  gap-4 h-screen sticky left-0 top-16 text-neutral-900 border-r">
      <div>
        <div className="border-b pb-8">
          <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400 text-indigo-950">
            <GridFour size={28} color="#7b74ff" weight="fill" /> Home
          </div>
          <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400 text-indigo-950">
            <SuitcaseSimple size={28} color="#7b74ff" weight="fill" /> Job
            Invites
          </div>
          <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400 text-indigo-950">
            <ChartLine size={28} color="#7b74ff" weight="fill" /> Analytics
          </div>
          <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400 text-indigo-950">
            <User size={28} color="#7b74ff" weight="fill" /> My Profile
          </div>
          <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400 text-indigo-950">
            <GlobeHemisphereEast size={28} color="#7b74ff" weight="fill" />{" "}
            Explore
          </div>
        </div>
        <div className="pb-8 gap-4 flex flex-col mt-8">
          <h4 className="text-xl font-semibold">Communities Feed</h4>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-violet-900 rounded-full" />
            <div>
              <span className="font-semibold text-indigo-950">Indonesian UI Designer</span>
              <p className="text-sm text-gray-400">734 members</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-violet-900 rounded-full" />
            <div>
              <span className="font-semibold text-indigo-950">Indonesian UI Designer</span>
              <p className="text-sm text-gray-400">734 members</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-violet-900 rounded-full" />
            <div>
              <span className="font-semibold text-indigo-950">Indonesian UI Designer</span>
              <p className="text-sm text-gray-400">734 members</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-violet-900 rounded-full" />
            <div>
              <span className="font-semibold text-indigo-950">Indonesian UI Designer</span>
              <p className="text-sm text-gray-400">734 members</p>
            </div>
          </div>

          <a className="flex self-center items-center text-indigo-500">
            Show 5 more <CaretRight size={20} color="#7b74ff" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
          <a>About</a> <a>Accesibility</a> <a>Help</a> <a>Privacy & Terms</a>{" "}
          <a>Advertise</a>
          <a>more</a>
        </div>
        <span>
          <b className="text-indigo-500">@sphere.io</b> ©2023
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
