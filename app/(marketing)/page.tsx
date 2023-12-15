import localFont from "next/font/local";

const monaSans = localFont({
  src: "../../public/fonts/Mona-Sans.woff2",
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col space-y-4">
        <h1 className="text-[1.5rem] font-bold md:text-[3.5rem] text-center">
          Welcome to ProTasker - your personal productivity companion in the
          digital world!
        </h1>
        <div
          className="
            text-sm 
            md:text-xl 
            max-w-xs 
            md:max-w-2xl 
            text-center 
            mx-auto 
            text-neutral-500 
            font-medium"
        >
          Hey there, go-getter! We get it - life gets a little crazy sometimes,
          and juggling tasks can feel like herding caffeinated cats. ProTasker
          your ultimate sidekick in conquering the chaos.
        </div>
        <button
          role="button"
          aria-label="Click to perform an action"
          // onClick={onClick}
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Try ProTasker for free
        </button>
      </div>
    </div>
  );
};

export default MarketingPage;
