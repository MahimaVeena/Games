import "../css/main-content.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainCarousel from "./MainCarousel";
function FlexLayout() {
  return (
    <div className="flex-container">
      <div className="text-section">
        <h1 className="heading text-animate">
          Dynamic content that players
          <br />
          love to play across their favorite
          <br />
          channels.
          <br />
        </h1>
        <br />
        <br />
        <h2 className="para text-animate">
          Popular cross-platform content and powerful systems give players what
          they want – the ability to choose when and where they play their
          favorite Light & Wonder games – online, on mobile or at their favorite
          land-based casino.
        </h2>
      </div>
      <div className="carousel-section">
        <MainCarousel />
      </div>
    </div>
  );
}
export default FlexLayout;
