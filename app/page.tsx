import SignInButton from "@/components/SignInButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-neutral-900 bg-cover bg-right sm:bg-[url('/pcBGHome.png')]">
      <nav className= "flex justify-between bg-transparent">
        <div className="flex mx-10 my-5">
          <img src="/Logo.png"/>
          <h1 className="max-sm:hidden ml-5 mt-2 text-lg font-bold font-Raleway">AstroInterest</h1>

        </div>
        <div className="mx-10 my-5">
          <SignInButton />
        </div>
        
      </nav>
      <div className="w-screen h-full bg-cover bg-right sm:bg-none bg-[url('/mobileBGHome.png')]">
        <div className=" text-center my-28 sm:text-left sm:ml-24 sm:my-48">
          <h2 className="text-4xl sm:text-7xl font-Raleway">Explore the</h2>
          <h2 className="text-4xl font-extrabold italic sm:text-8xl font-Raleway">Cosmos</h2>
          <p className="my-4 font-Raleway text-xs font-light mx-10 sm:mx-0 sm:text-lg sm:w-2/5 sm:text-start">Embark on a journey through the universe with our 
            curated collection of high-quality space images. 
            Save your favorite celestial snapshots, organize them into 
            boards, and share the wonders of the cosmos with
             others. Join our community of space enthusiasts and 
             start exploring today!</p>
             <SignInButton/>
        </div>
        
      </div>
    </main>
  );
}
