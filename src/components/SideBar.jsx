import { FaPlus } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
export default function SideBar() {
  return (
    <div className=" h-full w-64 ">
      <div id="newBtn" className="w-full h-14 pl-4 mb-6">
        <div className=" bg-white w-[50%] shadow-[0_1px_15px_-5px_rgba(0,0,0,0.75)] p-2 h-full flex rounded-xl">
          <div className="w-full flex justify-center items-center h-full">
            <FaPlus size={20} />
          </div>
          <div className="w-full h-full text-md flex justify-center items-center">
            <span>New</span>
          </div>
        </div>
      </div>
      <div id="sidebarLinks" className="flex flex-col gap-1">
        <div id="home" className="flex justify-center items-center h-max w-full">
            <div className=" bg-[#c2e7ff] flex rounded-3xl pt-1 pb-1 cursor-pointe w-[90%] justify-center items-center">
                <MdHomeFilled className="w-[20%]" size={20}/>
                <span className="w-[80%]">Home</span>
            </div>
        </div>
        <div id="recent" className="flex justify-center items-center h-max w-full">
            <div className="flex hover:bg-gray-300 rounded-3xl pt-1 pb-1 cursor-pointer w-[90%] justify-center items-center">
                <FaRegClock className="w-[20%]" size={20}/>
                <span className="w-[80%]">Recent</span>
            </div>
        </div>
        <div id="starred" className="flex justify-center items-center h-max w-full">
            <div className="flex hover:bg-gray-300 rounded-3xl pt-1 pb-1 cursor-pointer w-[90%] justify-center items-center">
                <FaRegStar className="w-[20%]" size={20}/>
                <span className="w-[80%]">Recent</span>
            </div>
        </div>
      </div>
    </div>
  );
}
