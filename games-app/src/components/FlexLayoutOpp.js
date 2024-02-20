import "../css/main-content.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainCarousel from "./MainCarousel";
function FlexLayoutOpp() {
  return (
    <div className="flex-container bottom-container">
      <img
        className="empIg"
        src="/images/krakenimages-Y5bvRlcCx8k-unsplash.jpg"
      />
      <div className="text-section">
        <h1 className="heading1 text-animate">
          We're a team of creators
          <br />
          who dare to invent.
          <br></br>
          <br />
          <a className="careers" href="/careers">
            Careers
          </a>
        </h1>
        <br />
        <br />
      </div>
    </div>
  );
}
export default FlexLayoutOpp;
