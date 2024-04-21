"use client";
export default function NavLogo() {
  const imgUrl = "/logo.webp";

  return (
    <a href="/">
      <div className="flex items-center">
        <img className="h-16 rounded-full" src={imgUrl} />
        <div className="ml-2 hidden lg:block">
          <div className="font-bold text-[#064790]">
            <h1>MURPHY CHARITABLE FOUNDATION UGANDA</h1>
          </div>
          <div className="break-none flex items-center justify-evenly font-bold text-[#67B32E]">
            <div className="mr-2 h-[2px] w-full bg-[#67B32E]"></div>
            <div className="whitespace-nowrap">SINCE 2018</div>
            <div className="ml-2 h-[2px] w-full bg-[#67B32E]"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
