import myself2 from '../assets/myself2.jpg';
import './Header.css';

function Header() {
  return (
    <div style={{ marginTop: "100px" }} className="container" id='home'>
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h6 className="head">Hello, I'm Abdul-Rehman</h6>
          <h2 className="head">Front-End Developer</h2>
          <br />
          <p className="text">
            Hello! I'm Abdul Rehman, A passionate and dedicated Front-End
            Developer with 01 year of experience crafting engaging and
            intuitive user interfaces. I specialize in translating design
            concepts into interactive, responsive, and high-performance web
            applications that provide seamless user experiences across all
            devices and browsers.
          </p>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={myself2}
            className="img-fluid"
            style={{
              maxWidth: '70%', // Adjust image size on smaller screens
              height: 'auto',
              border: '10px solid #FFD700',
              borderRadius: '80%',
              padding: '10px',
            }}
            alt="myImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
