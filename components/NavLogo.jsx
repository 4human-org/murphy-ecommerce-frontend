export default function NavLogo() {
  const imgUrl = "/logo.webp";

  return (
    <a href="/">
      <div className="flex items-center">
        <img className="rounded-full h-16" src={imgUrl} />
        <div className="ml-2 hidden lg:block">
          <div className="text-[#064790] font-bold">
            <h1>MURPHY CHARITABLE FOUNDATION UGANDA</h1>
          </div>
          <div className="text-[#67B32E] font-bold flex justify-evenly items-center break-none">
            <div className="bg-[#67B32E] w-full h-[2px] mr-2"></div>
            <div className="whitespace-nowrap">SINCE 2018</div>
            <div className="bg-[#67B32E] w-full h-[2px] ml-2"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
