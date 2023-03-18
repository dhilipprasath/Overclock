import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../APIUtils";
import universityImage from "../university.jpg";

const LoanApplication = () => {
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const param = `https://api.sfd.interview.ovckd.dev/v1/user/applications/`;
  useEffect(() => {
    setIsLoading(true);
    fetchData(param)
      .then((data) => {
        setLoans(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card" aria-hidden="true">
            <div className="card-img-wrapper placeholder-glow">
              <svg
                className="bd-placeholder-img card-img-top border-radius-3"
                width="100%"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="var(--alpha-bg)"></rect>
              </svg>
            </div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card" aria-hidden="true">
            <div className="card-img-wrapper placeholder-glow">
              <svg
                className="bd-placeholder-img card-img-top border-radius-3"
                width="100%"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="var(--alpha-bg)"></rect>
              </svg>
            </div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        loans.map((loan) => (
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card d-flex" style={{ maxWidth: "400px" }}>
                <img src={universityImage} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">University</h5>
                  <h6 className="card-title">{loan.university}</h6>
                  <p className="card-text">
                    <strong>Loan Amount</strong> ${loan.loan_amount}
                  </p>
                  <Link
                    to={'user/applications/1/offers'}
                    className="btn btn-primary"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default LoanApplication;
