import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";


export default function Card() {
  return (
    <>
      <center id='project'>
        <h1 style={{ marginTop: "100px", marginBottom: "50px" }}>
          <u style={{ color: "#FFD700" }}>Projects</u>
        </h1>
      </center>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100" style={{ border: "4px solid #FFD700" }}>
              <img
                src={card1}
                className="card-img-top"
                alt="Fresh Fruits App"
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Fresh Fruits App</h5>
                <p className="card-text">
                  We pride ourselves on fast and reliable delivery services. Get
                  your food fresh, just the way you like it.
                </p>
              </div>
              <div className="card-body">
                <a href="https://abrehman04.netlify.app/" className="card-link">
                  App Link
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100" style={{ border: "4px solid #FFD700" }}>
              <img
                src={card2}
                className="card-img-top"
                alt="Calculator App"
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Calculator App</h5>
                <p className="card-text">
                  We pride ourselves on fast and reliable delivery services. Get
                  your food fresh, just the way you like it.
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://abrehman-calculator.netlify.app/"
                  className="card-link"
                >
                  App Link
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100" style={{ border: "4px solid #FFD700" }}>
              <img
                src={card3}
                className="card-img-top"
                alt="Food Ordering App"
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Food Ordering App</h5>
                <p className="card-text">
                  We pride ourselves on fast and reliable delivery services. Get
                  your food fresh, just the way you like it.
                </p>
              </div>
              <div className="card-body">
                <a href="http://abdrehman03.surge.sh" className="card-link">
                  App Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
