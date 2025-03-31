import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams, Link } from "react-router-dom";

function VansDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  // console.log(params.id);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setVan(data.vans);
        // console.log(data);
      })
      .catch((error) => console.log("error fetching data: ", error));
  }, [params.id]);

  const typeColors = {
    simple: "bg-orange-400 hover:bg-orange-600",
    rugged: "bg-green-700 hover:bg-green-800",
    luxury: "bg-black",
  };

  return (
    <>
      <Navbar />
      <section className="min-h-full w-full flex flex-col gap-5 lg:gap-8 my-5 font-['Poppins',Arial]">
      <Link to='/vans' className="pl-3 underline hover:no-underline">&larr; Back to all vans</Link>
        {van ? (
          <div className="pl-3 flex flex-col md:flex-row gap-10 md:items-center">
            <img src={van.imageUrl} alt={van.name} className="w-[350px] rounded-md" />
            <div className="flex flex-col gap-4 pr-5">
              <span
                className={`
                               ${typeColors[van.type] || ""}
                               text-white w-fit py-2 px-5 rounded-md text-sm lg:text-lg capitalize
                               font-medium transition-all duration-300 ease-in-out cursor-pointer
                               
                               `}
              >
                {" "}
                {van.type}{" "}
              </span>
              <h2 className="text-2xl font-bold"> {van.name} </h2>
              <p className="text-xl font-bold"> ${van.price} <span className="text-sm text-gray-400">/day</span> </p>
              <p className="text-black text-justify"> {van.description} </p>
              <button className="bg-orange-600 py-2 px-5 text-white rounded-md font-medium md:w-fit cursor-pointer hover:bg-orange-700"> Rent this van </button>
            </div>
          </div>
        ) : (
          <p>Loading.......</p>
        )}
      </section>
      <div className="md:fixed md:bottom-0 w-full">
      <Footer />
      </div>
    </>
  );
}

export default VansDetail;
