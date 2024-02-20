import React from "react";
import "../css/careers.css";
import "bootstrap/dist/css/bootstrap.min.css";

const JobApplicationForm = () => (
  <div className="job-application container mt-5">
    <h2 className="job-app">Job Application Form</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="yearsOfExperience" className="form-label">
          Years of Experience:
        </label>
        <input
          type="number"
          className="form-control"
          id="yearsOfExperience"
          name="yearsOfExperience"
          min="0"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="skillSets" className="form-label">
          Skill Sets:
        </label>
        <textarea
          className="form-control"
          id="skillSets"
          name="skillSets"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="resume" className="form-label">
          Resume:
        </label>
        <input
          type="file"
          className="form-control"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  </div>
);

export default JobApplicationForm;
