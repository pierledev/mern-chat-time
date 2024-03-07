import { HiChatAlt2 } from "react-icons/hi";

const LoaderPage = () => {
  return (
    <div className="bg-slate-100-900 fixed bottom-0 left-0 right-0 top-0 grid place-items-center">
      <div className="grid justify-items-center gap-4">
        <div className="flex items-center gap-2 text-2xl font-medium text-white">
          <span>Chat Time</span>
          <span>
            <HiChatAlt2 />
          </span>
        </div>
        <span className="loading loading-spinner loading-md"></span>
      </div>
    </div>
  );
};

export default LoaderPage;
