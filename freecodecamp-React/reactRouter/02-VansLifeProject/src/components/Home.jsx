import React from "react";
import Navbar from "./Navbar";
import heroHome from "../assets/home-hero.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
        <Navbar />
      <section
        className="h-screen relative bg-cover bg-no-repeat bg-center -z-20 font-['Poppins']"
        style={{
          backgroundImage: `url(${heroHome})`,
        }}
      >
        <div
          className="absolute h-full w-full -z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>

        <div className="h-full w-[90%] mx-auto flex flex-col md:justify-center gap-5 md:items-center py-[100px] relative z-10">
          <h1 className="text-2xl lg:text-3xl text-white font-bold">You got the travel plans, we got the travel vans.</h1>
          <p className="text-gray-400 text-sm md:text-lg">
            Add adventure to your life by joining #vanlife movement.
            Rent the perfect van to make your perfect road trip
          </p>
          <button className="text-white cursor-pointer bg-orange-600 py-3  w-fit px-10 rounded-md mt-8 font-medium text-sm hover:bg-orange-700 transition-all duration-300 ease-in-out md:text-xl ">Find your van</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
