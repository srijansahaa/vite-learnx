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
    <div className="sidebar flex flex-col p-4 font-mono gap-4 h-screen sticky left-0 top-16 text-neutral-900 border-r">
      <div className="border-b pb-8">
        <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400">
          <GridFour size={28} color="#7b74ff" weight="fill" /> Home
        </div>
        <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400">
          <SuitcaseSimple size={28} color="#7b74ff" weight="fill" /> Job Invites
        </div>
        <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400">
          <ChartLine size={28} color="#7b74ff" weight="fill" /> Analytics
        </div>
        <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400">
          <User size={28} color="#7b74ff" weight="fill" /> My Profile
        </div>
        <div className="flex items-center gap-3 hover:bg-indigo-100 p-2 rounded hover:border-indigo-400">
          <GlobeHemisphereEast size={28} color="#7b74ff" weight="fill" />{" "}
          Explore
        </div>
      </div>
      <div className="pb-8 gap-4 flex flex-col">
        <h4 className="text-xl font-semibold">Communities Feed</h4>
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-violet-900 rounded-full"/>
          <div>
            <span className="font-semibold">Indonesian UI Designer</span>
            <p className="text-sm text-gray-700">734 members</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-violet-900 rounded-full"/>
          <div>
            <span className="font-semibold">Indonesian UI Designer</span>
            <p className="text-sm text-gray-700">734 members</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-violet-900 rounded-full"/>
          <div>
            <span className="font-semibold">Indonesian UI Designer</span>
            <p className="text-sm text-gray-700">734 members</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-violet-900 rounded-full"/>
          <div>
            <span className="font-semibold">Indonesian UI Designer</span>
            <p className="text-sm text-gray-700">734 members</p>
          </div>
        </div>

        <a className="flex self-center items-center text-indigo-500">Show 5 more <CaretRight size={20} color="#7b74ff" /></a>
      </div>
    </div>
  );
};

export default Sidebar;
