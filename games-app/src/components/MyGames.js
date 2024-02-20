import React from "react";
import "../css/my-games.css";
import images from "./imageData";
import Footer from "./Footer";
function MyGames() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="my-games">
      <img
        className="amazing_games"
        src="/images/amazing_games.webp"
        alt="abc"
      />
      <br />
      <br />
      <br />
      <h1 className="explore">EXPLORE OUR GAMES</h1>
      <div className="games-grid">
        {images.map((obj, index) => (
          <div className="grid-item" key={index}>
            <div
              className="game-card"
              onClick={() => handleClick(obj.url)}
              style={{ cursor: "pointer" }}
            >
              <img
                className="image-grid"
                src={obj.name}
                alt={`Game ${index + 1}`}
              />
              <div className="game-info">
                <h3>{obj.title}</h3>
                <p>{obj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyGames;
