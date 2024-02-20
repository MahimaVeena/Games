import "../css/main-content.css";
import FlexLayout from "./FlexLayout";
import FlexLayoutOpp from "./FlexLayoutOpp";
import MainCarousel from "./MainCarousel";

function MainContent() {
  return (
    <>
      <div className="introduction introduction-image">
        <div className="text-animation">
          <span>We build new </span>
          <br></br>
          <span>worlds</span>
        </div>
        <div className="text-animation text-animation-second">
          <span>where play</span>
          <br />
          <span>reigns!</span>
        </div>
      </div>
      <div className="games-intro-image introduction">
        <div className="animated-image" id="image1"></div>
        <div className="animated-image-opp" id="image2"></div>
        <div className="animated-image-top" id="image3"></div>
        <h2 className="iconic-games">Iconic Games!</h2>
      </div>

      <div className="layout">
        <FlexLayout />

        <FlexLayoutOpp />
        <img className="conclusion" src="/images/conclusion.png" />
      </div>
    </>
  );
}

export default MainContent;
