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
  const [allJobs, setAllJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState();
  const [showAppliedJobs, setShowAppliedJobs] = useState(false);

  const toggleModal = (obj) => {
    setShowModal(!showModal);
    setCurrentJob(obj);
  };
  const handleFormClick = (e) => {
    setAllJobs((prev) => [...prev, currentJob]);
    console.log(allJobs);
    e.stopPropagation();
  };
  const [selectedCountry, setSelectedCountry] = useState("India");
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  const toggleAppliedJobsView = () => {
    setShowAppliedJobs(!showAppliedJobs);
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <div class="my-career">
      <img className="love" src="/images/do_what_you_love.png" />
      <br />
      <br />
      <br />
      {!showAppliedJobs && (
        <div className="job-listings">
          <div className="d-flex flexbox">
            <h1 className="find_dream">Find Your Dream Job! </h1>
            <button className="job-appl" onClick={toggleAppliedJobsView}>
              My job applications{" "}
            </button>
          </div>
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
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            toggleModal(obj);
                          }}
                        >
                          Apply for a Job
                        </button>
                      </div>
                    </div>

                    <br />
                  </>
                ))}
            </div>
          </div>
        </div>
      )}
      {showAppliedJobs && (
        <div>
          <div className="d-flex flexbox">
            <h1 className="find_dream">My Job Applications </h1>
            <button className="job-appl" onClick={toggleAppliedJobsView}>
              Back to Job Listings
            </button>
          </div>
          <br />
          <div className="applied-jobs-table">
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Job Title</th>
                  <th>Date of Application</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allJobs.map((job, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{job.title}</td>
                    <td>{today}</td> <td>Pending</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
