import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

// eslint-disable-next-line react/prop-types
const ExperienceModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white">
                  <h4 className="text-center text-xl font-medium py-3">
                    Add experience
                  </h4>
                  <div className="flex justify-between items-center bg-indigo-200 p-4 mb-4">
                    <span className="text-indigo-950">Notify network</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500"></div>
                    </label>
                  </div>

                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400">
                        Company Name <sup className="text-red-700">*</sup>
                      </label>
                      <input type="text" className="border rounded-lg h-10" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400">Location</label>
                      <input type="text" className="border rounded-lg h-10" />
                    </div>

                    <div className="flex gap-2">
                      <input type="checkbox" className="border rounded-lg" />
                      <label className="text-gray-400">
                        I currently work here
                      </label>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400">Start Date</label>
                      <div className="flex gap-4">
                        <select className="w-full border rounded-lg h-10" />
                        <select className="w-full border rounded-lg h-10" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400">End Date</label>
                      <div className="flex gap-4">
                        <select className="w-full border rounded-lg h-10" />
                        <select className="w-full border rounded-lg h-10" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400">Description</label>
                      <textarea className="border rounded-lg" />
                    </div>
                  </div>

                  <div className="border-t p-4 flex gap-4">
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg py-2 bg-white border-2 border-indigo-500 text-indigo-500 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg py-2 bg-indigo-500 border-2 border-indigo-500 text-white font-medium"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ExperienceModal;
