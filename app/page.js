"use client";
import React, { useState } from "react";

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
        {/* <div
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
            <div className="animated">
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
        </div> */}
        </div>
        
        <div id="faq">
  <h1>FAQ</h1>
  <ul className="w-[100%]">
    <li className="sm:w-4/5 w-11/12 sm:text-2xl sm:p-10 p-5 relative sm:mt-32 mt-10  m-auto rounded-xl sm:rounded-3xl">
      
      <input type="checkbox" checked={!show}
                      onClick={() => setShow(!show)}

 />
      <i></i>
      <h2 className="sm:w-4/5 w-11/12 sm:text-2xl sm:p-10 p-5 relative sm:mt-32 mt-10  m-auto rounded-xl sm:rounded-3xl">                  Build Your Own Decentrailized Apps on Ramestta
</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore fugit iste deserunt incidunt error provident repudiandae laudantium quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt, aspernatur.</p>
    </li>
    <li>
      <input type="checkbox" checked/>
      <i></i>
      <h2>Hvorfor..?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
    </li>
    <li>
      <input type="checkbox" checked/>
      <i></i>
      <h2>Hvad..?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
    </li>
  </ul>
</div>


      
    </>
  );
};

export default index;