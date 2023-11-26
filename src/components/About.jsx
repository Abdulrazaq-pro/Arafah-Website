import React from "react";
function About() {
  return (
    <div className="" id="about">
      <div className="d-flex">
        <div className="w-50 d-flex p-4 bg-light">
          <div className="w-50 m-auto">
            <img
              src="./images/vk.png"
              alt=""
              className=" img-fluid h-30 my-5"
            />
          </div>
        </div>

        <div className="w-50 bg-secondary d-flex">
          <div className="m-auto p-2 p-md-5">
            <h1>
              <b>ALL THAT I AM </b>
            </h1>
            <h1 className="text-white">
              <b>ABOUT.</b>
            </h1>
            <p>
              <b className="small"> 
                Hello I'm Yuki , I'm from Tokyo Japan and I'm a contemporary
                abstract artist, keep scrolling to know more about me and my
                work.
              </b>
            </p>
            <div className="d-flex">
              <button className="jotifont border-0 m-auto px-4 py-1 btn-sm bg-white fw-bold box-sha">
                Learn About Me
              </button>
            </div>
            <div className="text-center align-items-baseline"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
