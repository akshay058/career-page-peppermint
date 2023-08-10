import React from "react";
import Layout from "../components/layout/Layout";
import jobData from "../data/jobData";
import { Link } from "react-router-dom";
export default function Careers() {
  return (
    <Layout>
      <h1 className="d-flex justify-content-center align-items-center mt-3 mb-5">
        Careers
      </h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-10  ">
          <h3>About Peppermint</h3>
          <p>
            Peppermint is an award-winning robotics company, supported by SINE
            IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial
            and Enterprise robots and platforms for mobility-led services. The
            Engineering team has 50+ years of experience in building deep-tech
            and robotics products. Robots built on the Peppermint Platform are
            deployed across 13 cities in 4 countries!
          </p>
          <hr />
        </div>
        <div className="col-md-10 d-flex flex-column justify-content-center align-items-center mt-5">
          {" "}
          <div>
            <h5 className="ms-4 " style={{ color: "rgb(46, 177, 201)" }}>
              WE'RE HIRING!{" "}
            </h5>
            <h3>Current Openings</h3>{" "}
          </div>
          <div className="col-md-10 d-flex flex-column flex-wrap justify-content-between mt-4">
            {jobData.map((job) => (
              <div key={job.id} className="jobData">
                <h2>{job.position}</h2>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
                <div className="d-flex justify-content-end">
                  <Link
                    to="https://getpeppermint.co/careers/"
                    className="btn btn-primary"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
}
