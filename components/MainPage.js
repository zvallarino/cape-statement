"use client"
import Homepage from "./Homepage";
import Leftpage from "./Leftpage";
import Rightpage from "./Rightpage";

import { useState } from 'react';

export default function Mainpage() {

const [filePreviews, setFilePreviews] = useState("");
 
  return (
    <div className="flex bg-red-200 h-full w-full">
        <Leftpage />
        <Homepage setFilePreviews ={setFilePreviews} />
        <Rightpage filePreviews ={filePreviews} />
    </div>
  );
}