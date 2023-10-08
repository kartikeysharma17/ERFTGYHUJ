"use client";
import React, { useEffect, useState } from "react";

const index = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  return (
    <>
      <div>
        <div className="flex">
          <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center sm:pt-20 pt-10  font-semibold  text-2xl sm:text-6xl ">
              <p className="">
                About <span className="linear">Us</span>
              </p>
            </div>
            <div className="sm:mt-5 mt-2">
              <p className="sm:text-xl  text-center text-[9px] w-[80%] sm:w-[48%] mx-auto">
                Developers simply change Chain ID and enjoy faster EVM
                executions identical at the bytecode level. They can use their
                familiar and standard Web3 tooling to easily migrate to Ramestta
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(to right ,rgba(56, 198, 130, 0.8) , rgba(0, 121, 109, 0.8))",
              }}
              className="p-auto sm:w-[720px] w-[290px] sm:h-28 h-14 mx-auto sm:rounded-3xl rounded-xl justify-center text-white sm:mt-16 mt-8 flex"
            >
              <p className="sm:px-8 px-3 py-4 sm:py-7 sm:text-base text-[8px] ">
                Learn more about us Or see currently open positions and join us!
              </p>

              <div className="flex items-center">
                <button className="sm:w-32 w-14 h-6 sm:h-11 sm:text-base text-[7px]  bg-white font-light sm:rounded-2xl rounded-lg border text-black">
                  Learn More
                </button>
                <button
                  style={{
                    background:
                      "linear-gradient(to right ,rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.11))",
                  }}
                  className="sm:w-32 sm:h-11 w-14 h-6 sm:text-base text-[7px] ml-2 sm:ml-5 bg-transparent font-light sm:mr-5 mr-2   border-[0.5px] sm:rounded-2xl rounded-lg  text-white"
                >
                  Open Positions
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-0  mt-10 sm:mt-0 h-44 w-12 sm:h-[650px] sm:w-[282px]  ">
            <img className="sm:ml-28" src="rsticker.png" alt="" />
          </div>
        </div>



        
<div class="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
    <div class="w-6/12 mx-auto rounded border">
    <div class="bg-white p-10 shadow-sm">
        <h3 class="text-lg font-medium text-gray-800">Several Windows stacked on each other</h3>
        <p class="text-sm font-light text-gray-600 my-3">
        The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails
        </p>

        <div class="h-1 w-full mx-auto border-b my-5"></div>

        <div class="transition hover:bg-indigo-50">
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>What is term?</h3>
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <div class="transition hover:bg-indigo-50">
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>When to use Accordion Components?</h3>
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <div class="transition hover:bg-indigo-50">
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>How can it be defined?</h3>
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>

        <div class="transition hover:bg-indigo-50">
        <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
            <i class="fas fa-plus"></i>
            <h3>Chamber reached do he nothing be?</h3>
        </div>
        <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
            <p class="leading-6 font-light pl-9 text-justify">
            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
            far daughter.
            </p>
            <button class="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">Learn more</button>
        </div>
        </div>
    </div>
    </div>
<section class="mt-4 text-center">Build with ❤️ by <a href="https://github.com/saadh393" target="_blank">Saad Hasan </a></section>
</div>
        <div
          style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
          className="sm:w-4/5 w-11/12 sm:text-2xl sm:p-10 p-5 relative sm:mt-32 mt-10  m-auto rounded-xl sm:rounded-3xl"
        >
          {show && (
            <div className="flex    ">
              <h2 className="sm:text-3xl text-[11px] font-medium flex">
                <p>01</p>
                <p className="sm:ml-11 ml-2">
                  Build Your Own Decentrailized Apps on Ramestta
                </p>
              </h2>
              <img
                onClick={() => setShow(!show)}
                className="flex absolute     sm:h-10 sm:w-10  h-5 w-5 sm:right-11 text-[10px] sm:mt-0 right-4 cursor-pointer"
                src="rightarrow.png"
              />
            </div>
          )}
          {!show && (
            <div className="animated accordian-animation">
              <h2 className="sm:text-3xl text-[11px] font-medium flex relative  linear">
                <p>01</p>
                <p className="sm:ml-11 ml-2">
                  Build Your Own Decentrailized Apps on Ramestta
                </p>
                <img
                  onClick={() => setShow(!show)}
                  src="arrowdown.png"
                  className="absolute sm:h-10 sm:w-10 h-5 w-5  cursor-pointer right-0 text-[10px] sm:mt-0"
                />
              </h2>
              <p className="sm:mt-5 sm:text-lg text-[8px] sm:ml-20 ml-5 sm:w-3/4 w-5/6 font-light">
                Ramestta is based on the Ethereum blockchain, which may be
                thought of as a global computer that is controlled by many
                different computers all over the world. Each contact with the
                blockchain necessitates a tiny transaction cost to reimburse the
                Ethereum operators – this is the Gas Fee. When the Ethereum
                blockchain becomes overburdened, the transaction fee rises in
                accordance with supply and demand. Ramestta (RAMA) is an
                open-source project developed by a global community of
                collaborators or developers. It is an independent protocol and
                framework for constructing and linking EVM-compatible blockchain
                networks.
              </p>
            </div>
          )}
        </div>
        <div
          style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
          className="sm:w-4/5 w-11/12 sm:text-2xl sm:p-10 p-5 relative sm:mt-10 mt-5   m-auto rounded-xl sm:rounded-3xl"
        >
          {show1 && (
            <div className="flex">
              <h2 className="sm:text-3xl text-[11px] font-medium flex">
                <p>02</p> <p className="sm:ml-11 ml-2">RAMA Coin</p>
              </h2>
              <img
                onClick={() => setShow1(!show1)}
                className="flex absolute sm:h-10 sm:w-10 h-5 w-5 sm:right-11 text-[10px] sm:mt-0 right-4 cursor-pointer"
                src="rightarrow.png"
              />
            </div>
          )}
          {!show1 && (
            <div>
              <h2 className="sm:text-3xl text-[11px] font-medium flex relative  linear">
                <p>02</p> <p className="sm:ml-11 ml-2">RAMA Coin</p>
                <img
                  onClick={() => setShow1(!show1)}
                  src="arrowdown.png"
                  className="absolute sm:h-10 sm:w-10 h-5 w-5 cursor-pointer right-0 text-[10px] sm:mt-0"
                />
              </h2>
              <p className="sm:mt-5 sm:text-lg text-[8px] sm:ml-20 ml-5 sm:w-3/4 w-5/6 font-light">
                Ramestta is based on the Ethereum blockchain, which may be
                thought of as a global computer that is controlled by many
                different computers all over the world. Each contact with the
                blockchain necessitates a tiny transaction cost to reimburse the
                Ethereum operators – this is the Gas Fee. When the Ethereum
                blockchain becomes overburdened, the transaction fee rises in
                accordance with supply and demand. Ramestta (RAMA) is an
                open-source project developed by a global community of
                collaborators or developers. It is an independent protocol and
                framework for constructing and linking EVM-compatible blockchain
                networks.
              </p>
            </div>
          )}
        </div>
        <div
          style={{ backgroundColor: "rgba(248, 248, 248, 1)" }}
          className="sm:w-4/5 w-11/12 sm:text-2xl sm:p-10 p-5 relative sm:mt-10 mt-5  m-auto rounded-xl sm:rounded-3xl"
        >
          {show2 && (
            <div className="flex">
              <h2 className="sm:text-3xl text-[11px] font-medium flex">
                <p>03</p> <p className="sm:ml-11 ml-2">What is a Blockchain</p>
              </h2>
              <img
                onClick={() => setShow2(!show2)}
                className="flex absolute sm:h-10 sm:w-10 h-5 w-5 sm:right-11 text-[10px] sm:mt-0 right-4 cursor-pointer"
                src="rightarrow.png"
              />
            </div>
          )}
          {!show2 && (
            <div>
              <h2 className="sm:text-3xl text-[11px] font-medium flex relative  linear">
                <p> 03</p> <p className="sm:ml-11 ml-2">What is a Blockchain</p>
                <img
                  onClick={() => setShow2(!show2)}
                  src="arrowdown.png"
                  className="absolute sm:h-10 sm:w-10 h-5 w-5 cursor-pointer right-0 text-[10px] sm:mt-0"
                />
              </h2>
              <p className="sm:mt-5 sm:text-lg text-[8px] sm:ml-20 ml-5 sm:w-3/4 w-5/6 font-light">
                Ramestta is based on the Ethereum blockchain, which may be
                thought of as a global computer that is controlled by many
                different computers all over the world. Each contact with the
                blockchain necessitates a tiny transaction cost to reimburse the
                Ethereum operators – this is the Gas Fee. When the Ethereum
                blockchain becomes overburdened, the transaction fee rises in
                accordance with supply and demand. Ramestta (RAMA) is an
                open-source project developed by a global community of
                collaborators or developers. It is an independent protocol and
                framework for constructing and linking EVM-compatible blockchain
                networks.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default index;