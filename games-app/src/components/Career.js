import React, { useState } from "react";
import "../css/careers.css";
import jobData from "./job";
import JobApplicationForm from "./JobApplicationForm";
import Footer from "./Footer";
import MyGames from "./MyGames";
function Career() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const column1Style = {
    width: "25%",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    marginLeft: "2rem",
    fontSize: "20px",
    fontWeight: "500",
    color: "",
  };

  const column2Style = {
    width: "75%",
    padding: "20px",
    marginRight: "2rem",
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleFormClick = (e) => {
    e.stopPropagation();
  };
  const [selectedCountry, setSelectedCountry] = useState("India");
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div class="my-career">
      <img className="love" src="/images/do_what_you_love.png" />
      <br />
      <br />
      <br />
      <h1 className="find_dream">Find Your Dream Job!</h1>
      <br />
      <div style={containerStyle}>
        <div className="place" style={column1Style}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => handleCountryClick("India")}
          >
            India
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => handleCountryClick("USA")}
          >
            USA
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => handleCountryClick("London")}
          >
            London
          </p>
        </div>
        <div style={column2Style}>
          {jobData
            .filter((obj) => obj.place === selectedCountry)
            .map((obj, idx) => (
              <>
                <div className="card">
                  <h5 className="card-header c-h">{obj.title}</h5>
                  <div className="card-body">
                    <h6>Experience {obj.years}+ years</h6>
                    <p className="card-text">{obj.description}</p>
                    <button className="btn btn-primary" onClick={toggleModal}>
                      Apply for a Job
                    </button>
                  </div>
                </div>
                <br />
              </>
            ))}
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div onClick={handleFormClick}>
            <JobApplicationForm />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Career;
