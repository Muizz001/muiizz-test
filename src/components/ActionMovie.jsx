import React, { useEffect, useState } from "react";

const ActionMovie = () => {
  const [actionMovie, setActionMovie] = useState()
  useEffect(() => {
    fetch('http://www.omdbapi.com/?t=top%20gun%20maverick&apikey=3b72366a')
    .then(response => response.json())
    .then(response => setActionMovie(response))
    .catch(err => console.error(err));
  
  }, [])


  return (
      <div className="w-full">
        <p className="sm:text-[24px] text-[18px] sm:mb-[18px] mb-[24px]">Action</p>
        <div className="w-full flex justify-start gap-[10px] overflow-x-auto">
          <div className="sm:h-[300px] h-[200px] sm:w-[300px] flex justify-center items-center min-w-[200px] bg-black rounded-[12px] overflow-hidden relative isolate ">
            <img src={actionMovie?.Poster} className="w-full h-full opacity-30 absolute inset-0 -z-[1] object-cover" />
            <p className="text-white sm:text-[24px] text-[18px] text-center">
              {actionMovie?.Title}
            </p>
          </div>
          <div className="sm:h-[300px] h-[200px] sm:w-[300px] flex justify-center items-center min-w-[200px] bg-black rounded-[12px] overflow-hidden relative isolate ">
            <img src={actionMovie?.Poster} className="w-full h-full opacity-30 absolute inset-0 -z-[1] object-cover" />
            <p className="text-white sm:text-[24px] text-[18px] text-center">
              {actionMovie?.Title}
            </p>
          </div>
          <div className="sm:h-[300px] h-[200px] sm:w-[300px] flex justify-center items-center min-w-[200px] bg-black rounded-[12px] overflow-hidden relative isolate ">
            <img src={actionMovie?.Poster} className="w-full h-full opacity-30 absolute inset-0 -z-[1] object-cover" />
            <p className="text-white sm:text-[24px] text-[18px] text-center">
              {actionMovie?.Title}
            </p>
          </div>
          <div className="sm:h-[300px] h-[200px] sm:w-[300px] flex justify-center items-center min-w-[200px] bg-black rounded-[12px] overflow-hidden relative isolate ">
            <img src={actionMovie?.Poster} className="w-full h-full opacity-30 absolute inset-0 -z-[1] object-cover" />
            <p className="text-white sm:text-[24px] text-[18px] text-center">
              {actionMovie?.Title}
            </p>
          </div>
        </div>
      </div> 
  );
};

export default ActionMovie;
