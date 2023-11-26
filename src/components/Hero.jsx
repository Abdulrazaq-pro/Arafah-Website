
function Hero() {
  return (
    <div id="hero">
      <div className="mt-4 container " >
        <h3>
          <b>I am an <span className="bg-secondary">Abstract Artist</span>.</b>
        </h3>
        <h3>
          <b>I am an <span className="bg-primary">Inspiration....</span></b>
        </h3>
        <p className="mt-1">
          Hello I'm Yuki , I'm from Tokyo Japan and I'm a contemporary abstract
          artist, keep scrolling to know more about me and my work.
        </p>
        <button className="bg-primary border-0 px-3 py-1 box-sha jotifont">View Work</button>
        <button className="bg-secondary border-0 mx-3 px-3 py-1 box-sha jotifont">View Bio</button>
      </div>
    </div>
  );
}

export default Hero;
