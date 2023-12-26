import React, { useState } from "react";
import axios from "axios";
import { Button, Input } from "components";

const Home = ({darkMode}) => {
  const [insertUrl, setInsertUrl] = useState("");
  const [shortUrlId, setShortUrlId] = useState("");
  const [urlCheck,setUrlCheck]=useState('');
  const Url = "http://localhost:8001/";
  const handleShortUrl = async () => {
    console.log(insertUrl);
    await axios
      .post(Url + "url", { url: insertUrl })
      .then((response) => {
        console.log("Generated Successfully", response.data.id);
        setShortUrlId(response.data.id);
        setInsertUrl(insertUrl)
        setUrlCheck(response.data.id)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(Url + "url" + "/" + shortUrlId).then((response)=>{
      console.log('copied')
    })
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-[50px]">
        <Input
          type="text"
          placeholder="Enter Url to short"
          className="bg-gray-100 w-[30%] h-[50px] text-black rounded-lg placeholder:pl-[20px] pl-[20px]"
          value={insertUrl}
          onChange={(e) => setInsertUrl(e.target.value)}
        />
        <Button
          className={`bg-[purple] h-[50px] text-white text-[16px] ml-[20px] rounded-lg w-[100px]
           ${darkMode?'font-bold hover:text-blue-900':''}`}
          onClick={handleShortUrl}
        >
          Generate
        </Button>
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <Input
          type="text"
          placeholder="Enter your Url"
          className="bg-gray-100 w-[30%] h-[50px] text-black rounded-lg placeholder:pl-[20px] pl-[20px]"
          value={urlCheck === "" ? "" : Url + "url" + "/" + shortUrlId}
        />
        <Button
          className={`bg-[purple] h-[50px] text-white text-[16px] ml-[20px] rounded-lg w-[100px]
          ${darkMode?'font-bold hover:text-blue-900':'text-white'}`}
          onClick={handleCopyUrl}
        >
          Copy
        </Button>
      </div>
    </div>
  );
};

export default Home;
