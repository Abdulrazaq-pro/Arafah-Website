function Showcase() {
  return (
    <div className="my-5" id="showcase">
      <h2 className="text-center">
        <b>Gallery.</b>
      </h2>

      <div className="d-flex flex-column flex-sm-row gap-3 container-md mx-auto bg-primary  ">
        <div className="p-3 card bg-primary border-0">
          <div>
            <img
              src="./images/SKYLINES v3.jpg"
              alt="a person"
              className="w-200 img-fluid object-fit-cover"
            />
          </div>
          <h5 className="card-title jotifont">TANGIRO</h5>
          <p className="card-subtitle">
            <i>
              This a piece that was inspired by monalisa idovedo I worked very
              hard on this painting,it was also my first ever abstract art, I
              just knew i had it in me.
            </i>
          </p>
          <div>
            <button className="px-3 py-1 mt-2 border-0 btn-sm bg-white fw-bold box-sha">
              VIEW PROJECT
            </button>
          </div>
        </div>

        <div className="p-3 card bg-primary border-0">
          <div>
            <img
              src="./images/Street Art.jpg"
              alt="a person"
              className=" w-100 h-100 object-fit-cover"
            />
          </div>
          <h5 className="card-title jotifont">KWAII</h5>
          <p className="card-subtitle">
            <i>
              This a piece that was inspired by monalisa idovedo I worked very
              hard on this painting,it was also my first ever abstract art, I
              just knew i had it in me.
            </i>
          </p>
          <div>
            <button className="px-3 py-1 mt-2 border-0 btn-sm bg-white fw-bold box-sha">
              VIEW PROJECT
            </button>
          </div>
        </div>

        <div className="p-3 card bg-primary border-0 ">
          <div className="w-30 h-30">
            <img
              src="./images/lion.jpg"
              alt="a person "
              className=" w-100 h-100 object-fit-cover 
              "
            />
          </div>
          <h5 className="card-title jotifont">SUBARASHI</h5>
          <p className="card-subtitle">
            <i>
              This a piece that was inspired by monalisa idovedo I worked very
              hard on this painting,it was also my first ever abstract art, I
              just knew i had it in me.
            </i>
          </p>
          <div>
            <button
              type="button"
              className="px-3 py-1 mt-2 btn-sm bg-white border-0 fw-bold box-sha"
            >
              VIEW PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
