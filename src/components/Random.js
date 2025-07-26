import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random =()=>{

    const {gif,loading,fetchData} = useGif();

    function generateGif(){
        fetchData();
    }


    return(
        <div className="w-1/2 bg-green-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mb-10">
            
            <h3 className="text-2xl underline mt-[10px] font-semibold">RANDOM GIF</h3>

            {
                (loading) ? <Spinner/> : <img src={gif} width={450}/>
            }

            <button onClick={generateGif} className="w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]">Generate</button>

        </div>
    )
}
  
export default Random;