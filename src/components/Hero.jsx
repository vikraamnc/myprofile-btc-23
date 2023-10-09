import profilePic from "../assets/pp.png";
const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left flex">
          <p>
            Hi I'm <strong> Bikram Adhikari</strong>
          </p>
          <h3>Software Engineer</h3>
          <p>I love coding and teach others what i know</p>

          <button className="download-btn">
            <a href="../assets/portfolio-website.pdf" download>
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </button>
        </div>

        <div className="right flex">
          <img src={profilePic} alt="profile-pic" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
