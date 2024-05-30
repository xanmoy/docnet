"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";

import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Youtube,
  Code,
  SendHorizontal,
  Brain,
  User,
  Hospital,
  Search
} from "lucide-react";

import { Context } from "@/context/ContextProvider";
import Navbar from "./ui/Navbar";
const DocNetBody = () => {
  const { submit, recentPrompts, displayResult, loading, result, input, setInput } = useContext(Context);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsInputEmpty(e.target.value.trim() === "");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isInputEmpty) {
      submit(); // Call the submit function from context provider
    }
  };

  // Function to handle suggestion button click
  const handleSuggestionClick = () => {
    setInput("Is coffee beneficial or harmful for health?");
    setIsInputEmpty(false); // Set isInputEmpty to false since input is not empty


  };
  const handleSuggestionClickTwo = () => {
    setInput("How does stress affect the immune system?");
    setIsInputEmpty(false); // Set isInputEmpty to false since input is not empty


  };
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <Navbar />
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                  Hello, I am DocNet

                </span>
              </p>

              <p>
                <span className="text-4xl">
                  Direct science-based answers to medical questions
                </span>
              </p>
            </div>
            <div className="flex flex-col lg:pt-8">
              <p className="text-center">Try it out</p>
              <button onClick={handleSuggestionClick} className="pt-3 bg-bgSecondaryColor text-teal-600 rounded-xl relative cursor-pointer">
                <p>Is coffee beneficial or harmful for health?</p>

              </button>
              <button onClick={handleSuggestionClickTwo} className="pt-3 bg-bgSecondaryColor text-teal-600 rounded-xl relative cursor-pointer">
                <p>How does stress affect the immune system?</p>

              </button>

            </div>
          </>
        ) : (
          <div className="result p-5">
            <div className="my-10 flex items-center gap-5 text-black rounded-2xl p-5 bg-bgSecondaryColor w-full">
              {/* <CircleUserRound size={34} className="text-teal-400" /> */}
              <p className="font-semibold text-teal-600"><User /></p>
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start mb-10 gap-5 text-black rounded-2xl p-5  w-full">

              <p className="font-semibold text-teal-600"><Hospital /></p>
              <p
                className="text-md font-normal loading-6 "
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className="bottom-0 w-full max-w-[900px] px-5 m-auto bg-white fixed pt-5">
          <form onSubmit={handleSubmit}>
            <div className="flex border-4 border-teal-500 items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 pr-5 pl-2 rounded-[15px]">
              <input
                onChange={handleInputChange}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-600"
                placeholder="Ask a health or bioscience question"
              />
              <div className={`flex cursor-pointer ${isInputEmpty ? 'pointer-events-none' : ''}`}>
                <button
                  type="submit"
                  className={`focus:outline-none ${isInputEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <SendHorizontal size={20} className=" hover:text-teal-600" />
                </button>
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-xs	 text-center p-3">
            DocNet @ 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocNetBody;