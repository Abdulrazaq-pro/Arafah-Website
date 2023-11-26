
function IconSection() {
  return (
    <div className="d-flex justify-content-around my-5"  id="icon">
      <div className="twitter">
        <img src="./icons/twitter.svg"alt="" className="w-50 w-25-md" />
        <h3>Twitter</h3>
      </div>

      <div className="instagram">
        <img src="./icons/instagram.svg" alt="" className=" h-50 w-50" />
        <h3>Instagram</h3>
      </div>

      <div className="facebook">
        <img src="./icons/facebook.svg" alt="" className=" h-50 w-50" />
        <h3>Facebook</h3>
      </div>

      <div className="github">
        <img src="./icons/github.svg" alt="" className=" h-50 w-50" />
        <h3>Github</h3>
      </div>
      
    </div>
  
  )
}

export default IconSection
