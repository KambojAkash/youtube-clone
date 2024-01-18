import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import yt_logo from "../assets/yt_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamBurger } from "../store/slices/GeneralConfigSlice";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import micsound from "../assets/sounds/micsound.wav";
import useGetVideoList from "../CustomHooks/useGetVideoList";
import { AUTO_SUGG_API, YT_SEARCH_URL } from "../assets/Constants";
import { addSearchedVideos, clearSearchedVideos } from "../store/slices/DataSlice";

const Navbar = () => {
  const [isMicOn, setIsMicOn] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate=useNavigate();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const isHamburger = useSelector((store) => store);

  useEffect(() => {
    let id = setTimeout(() => {
      suggest(searchQuery);
    }, 200);
    return () => clearTimeout(id);
  }, [searchQuery]);

  async function suggest(term) {
    try {
      const response = await fetch(AUTO_SUGG_API + term);

      if (!response.ok) {
        throw Error(`Suggest API not 200! Status: ${response.status}`);
      }

      const data = await response.json();

      setSuggestions(data[1]);
    } catch (error) {
      console.error("Error in suggest function:", error);
      throw error;
    }
  }

  useEffect(() => {
    
    setSearchQuery(transcript);
    console.log(transcript);
  }, [transcript]);

  const handleHamburger = () => {
    dispatch(toggleHamBurger());
  };
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    // inputRef.current.focus();
  };
  const handleMicButton = () => {

    // setSearchQuery("")
    // let temp = !isMicOn;
    // setIsMicOn(temp);
    startListening();

    // console.log(listening);
    // if (temp) {
    //   audioRef.current.play();
    //   let Interval = setInterval(() => {
    //     // searchFunForAll(searchQuery);
    //     console.log(transcript);
    //     SpeechRecognition.stopListening();
    //     setIsMicOn(false);
    //     // navigate("search/"+"coder kamboj")
        
    //     // console.log("search q",searchQuery)
        
    //     clearInterval(Interval);
    //   }, 4000);
    // }
    // } else {
    //   SpeechRecognition.stopListening();
    //   setSearchQuery("");
    // }
  };

  

  // async function searchVideos(text) {
  //   let res = await fetch(YT_SEARCH_URL + text);
  //   let jsondata = res.json();
  //   navigate("/search/"+text)
  //   // addSearchedVideos(jsondata.items)
  //   return jsondata;
  // }
  // function searchFunForAll(text){
  //   dispatch(clearSearchedVideos())
  //   searchVideos(text)
  //   .then((d) => {
  //     console.log("--",d)
  //     dispatch(addSearchedVideos(d.items));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  const handleSearch = () => {
    // searchFunForAll(searchQuery);

    if(searchQuery=="") return
    navigate("/search/"+searchQuery)
  };

  function handleSuggestionClick(text) {
    setSearchQuery(text);
    setShowSuggestions(false);
    // searchFunForAll(text);
  }

  function handleInputBlur() {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 500);
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="w-screen flex justify-between items-center bg-[#0f0f0f] text-white p-3 ">
        <audio ref={audioRef} src={micsound} />
        
          <div className="flex gap-2 text-2xl lg:gap-5 justify-center items-center">
            <span onClick={handleHamburger}>
              <RxHamburgerMenu />
            </span>
            <Link to="/">
            <img className="w-20" src={yt_logo} alt="" />
        </Link>
          </div>
        <div className="gap-2 lg:w-[50%] xl:w-[40%] h-10 flex justify-center items-center lg:gap-5">
          <div className="w-full h-full flex">
            <input
              ref={inputRef}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              value={searchQuery}
              placeholder="Search Videos...."
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleInputBlur}
              className="bg-transparent border h-full border-white w-60 lg:w-full border-r-transparent rounded-l-full py-2 px-3"
            />
            <span className="h-full cursor-pointer" onClick={handleSearch}>
              <CiSearch className="border border-white rounded-r-full h-full w-10 py-2" />
            </span>
          </div>
          <span
            onClick={handleMicButton}
            className={`${
              isMicOn ? "bg-red-500" : "bg-gray-800"
            } p-[6px] hover:bg-gray-600 lg:bg-gray-800 rounded-full cursor-pointer flex justify-center items-center bg-gray-900 mr-2 `}
          >
            <FaMicrophone className="text-2xl" />
          </span>
        </div>
        <div>
          <IoPersonCircle className="w-10 h-10 mr-5" />
        </div>
      </div>
      {(showSuggestions && suggestions.length )?
        <ul className="bg-white text-black w-[40%] p-5 z-50 absolute top-14 left-[32%]  rounded-lg">
          {suggestions && suggestions.map((sug, index) => (
            <li
              key={index}
              className="p-2 z-50 font-blod text-xl border-b cursor-pointer hover:bg-gray-200 transition-all duration-150"
              onClick={() => handleSuggestionClick(sug)}
            >
              {sug}
            </li>
          ))}
        </ul>:""
      }
    </>
  );
};

export default Navbar;
