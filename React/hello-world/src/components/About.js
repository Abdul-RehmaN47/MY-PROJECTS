import me from "../assets/me.jpg";
import './About.css';

function About() {
  return (
    <div className="card mb-3" style={{ backgroundColor: "black" }} id="about">
      <center>
        <h1 className="about">
          <u>About Me</u>
        </h1>
      </center>
      <div className="row g-0 justify-content-center align-items-center">
        <div className="col-12 col-md-4 text-center">
          <img
            src={me}
            className="img-fluid"
            style={{
              maxWidth: "80%", // Make the image responsive
              height: "auto",
              border: "5px solid #2C2C2C",
              borderRadius: "5px",
              padding: "2px",
            }}
            alt="myImage"
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="card-body">
            <p className="card-text" style={{ color: "white", margin: "20px" }}>
              My name is Abdul Rehman, and in 2023, I embarked on a journey of
              personal and professional growth. Starting from scratch with no
              prior experience, I was determined to turn my curiosity into
              something valuable. I developed essential skills and knowledge that have
              empowered me to create meaningful and impactful work. This
              journey has transformed me from a beginner into a confident and
              capable individual, ready to take on new challenges. My growth
              reflects my passion for continuous learning and my commitment to
              making a difference. Here are some of my skills which I learned in this tenure:
            </p>
            <h3 className="gold">Skills:</h3>
            <ul className="white">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React-Js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
