import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag =()=>{

    const [tag,setTag] = useState('car')
    const {gif,loading,fetchData} = useGif(tag);


    function generateGif(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value);
    }


    return(
        <div className="w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mb-10">
            
            <h3 className="text-2xl underline mt-[10px] uppercase font-semibold">RANDOM {tag} GIF</h3>

            {
                (loading) ? <Spinner/> : <img src={gif} width={450}/>
            }

            <input className="w-10/12 mb-[5px] text-lg py-2 rounded-lg text-center" onChange={changeHandler} value={tag}/>

            <button onClick={generateGif} className="w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]">Generate</button> 

        </div>
    )
}
  
export default Tag;