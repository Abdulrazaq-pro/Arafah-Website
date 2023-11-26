function Footer() {
  return (
    <div className="d-flex">
      <div className="">
        <span className="text-bg-dark"> YURI</span>URI
      </div>
      <div className="row container-sm mx-auto">
        <section className="col">
          <ul>
            <li>WORK</li>
            <li>ABOUT</li>
          </ul>
        </section>

        <section className="col">
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>
              <a href="/" className="nav-link fw-light">
                Uriyuri45@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section className="col">
          <p className="fw-lighter">
            All rights reserved 2022 Yuki uri abstract design Made in Tokyo
            Japan. Thanks for looking!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
