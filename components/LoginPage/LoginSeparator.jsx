"use client";

export default function LoginSeparator() {
  return (
    <div className="between m-auto mx-20 flex flex-col">
      <div className="relative left-[50%] m-[-1.5px] h-[110px] w-px border-l-[1px] bg-[#aaa]"></div>
      <div className="m-0 m-0 h-[60px] w-[60px] rounded-full border-[1px] border-[#aaa] p-0 text-center leading-[60px]">
        <span className="inline-block align-middle leading-normal">OR</span>
      </div>
      <div className="relative left-[50%] m-[-1.5px] mt-0 h-[110px] w-px border-l-[1px] bg-[#aaa]"></div>
    </div>
  );
}
