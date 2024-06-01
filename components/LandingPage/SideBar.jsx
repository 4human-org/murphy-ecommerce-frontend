"use client";

export default function Sidebar() {
  return (
    <div className="h-min-[100%] left-0 hidden min-w-[240px] border-r-2 bg-slate-100 md:block ">
      <div className="pt-18 fixed mt-[10vh]">
        <h3 className="m-4 w-[200px] text-center text-2xl font-bold">
          Categories
        </h3>
        <ul className="relative m-4 flex flex-col text-center">
          <li
            className="my-1 transform rounded rounded-full bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/health" className="">
              Health
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/education" className="">
              Education
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/culture" className="">
              Culture
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/environment" className="">
              Environment
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/agriculture" className="">
              Agriculture
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-blue-100 bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/energy" className="">
              Energy
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-blue-100 bg-white  p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/recreation" className="">
              Recreation
            </a>
          </li>

          <li
            className="my-1 transform rounded rounded-full bg-blue-100 bg-white p-2 shadow shadow transition duration-300 ease-in-out
 hover:scale-105 hover:cursor-pointer hover:bg-blue-200 hover:shadow-lg"
          >
            <a href="/category/vocational" className="">
              Vocational
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
