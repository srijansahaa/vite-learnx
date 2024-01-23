import { Bell, CaretDown, EnvelopeSimple, MagnifyingGlass } from "@phosphor-icons/react";
import face from "../assets/face.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white z-50 border-b p-4 font-mono sticky top-0 left-0 right-0">
      <span className="flex justify-center items-center w-full max-w-16">
        SPHERE
      </span>
      <div className="flex gap-4">
        <div className="flex items-center relative border rounded p-3">
          <span className="absolute border-r">
            <MagnifyingGlass size={32} color="#000000" weight="thin" />
          </span>
          <input className=" pl-10" placeholder="Search" />
        </div>
        <button className="border rounded p-2">
          <Bell size={32} color="#7b74ff" weight="thin" />
        </button>
        <button className="border rounded p-2">
          <EnvelopeSimple size={32} color="#7b74ff" weight="thin" />
        </button>
        <span className="relative">
          <img className="w-12 rounded-full" src={face} />
          <button className="rounded-full bg-white absolute bottom-0 right-0 border-slate-200 border">
          <CaretDown size={14} color="#7b74ff" />
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
