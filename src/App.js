import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App(){
  return(
    <div className="w-full h-auto flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg font-bold w-[90%] text-center mt-[40px] text-3xl py-2">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center mt-[40px]">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App;