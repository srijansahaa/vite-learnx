import {
  Bell,
  CaretDown,
  EnvelopeSimple,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import face from "../assets/face.jpg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white z-8 border-b p-4  sticky top-0 left-0 right-0">
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <button className="block md:hidden">
          <MagnifyingGlass size={32} color="#000000" weight="thin" />
        </button>
        <span className="hidden md:flex justify-center items-center w-full max-w-16">
          SPHERE
        </span>
        <div className="hidden md:flex gap-4 ">
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
    </>
  );
};

export default Header;
