import { Button } from "@/components/Button";
import localFont from "next/font/local";
import Link from "next/link";

const monaSans = localFont({
  src: "../../public/fonts/Mona-Sans.woff2",
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="font-mona flex items-center justify-center flex-col space-y-4">
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
        <Button colored border shadow hover>
          <Link href="/sign-up">Try ProTasker for free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
