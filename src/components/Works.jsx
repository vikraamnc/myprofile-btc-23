import projectImg from "../assets/pp1.png";
import projectImg2 from "../assets/pp2.png";
import projectImg3 from "../assets/pp3.png";
import projectImg4 from "../assets/pp4.png";

const Works = () => {
  return (
    <section id="projects" className="container projects">
      <h2 className="title">My Recent Works</h2>

      <div className="grid projects-container">
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="project-img" />
          </div>
          <div className="bottom container">
            <h3>Prank Calculator</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg2} alt="project-img" />
          </div>
          <div className="bottom container">
            <h3>API Contact List</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg3} alt="project-img" />
          </div>
          <div className="bottom container">
            <h3>Movie Collection</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg4} alt="project-img" />
          </div>
          <div className="bottom container">
            <h3>Travelling Blog</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;
