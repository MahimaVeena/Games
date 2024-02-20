import "./App.css";
import NavBar from "./components/NavBar";
import AgeConfirmationOverlay from "./components/AgeConfirmationOverlay";
import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function Home() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  useEffect(() => {
    const ageConfirmed = localStorage.getItem("ageConfirmed");
    if (ageConfirmed) {
      setAgeConfirmed(true);
    }
  }, []);

  const handleConfirmAge = () => {
    localStorage.setItem("ageConfirmed", "true");
    setAgeConfirmed(true);
  };

  return (
    <>
      {!ageConfirmed && <AgeConfirmationOverlay onConfirm={handleConfirmAge} />}
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
