import React, { useEffect, useState } from "react";
import "../App.css";
import Loading from "../components/Loading";
import fetchData from "../APIUtils";
// import LoanOffers from "../Pages/LoanOffers";

const LoanOffers = (props) => {
  const [posts, setPosts] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [sortInterestActive, setInterestSortActive] = useState([]);
  const [sortTenuretActive, setTenureActive] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = 1;
  const param = `https://api.sfd.interview.ovckd.dev/v1/user/applications/${id}/offers`;
  useEffect(() => {
    setIsLoading(true);
    fetchData(param)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  const sortByInterest = () => {
    const sortedData = [...posts].sort((a,b) => sorting ? a.interest_rate - b.interest_rate : b.interest_rate - a.interest_rate);
    setPosts(sortedData);
    setSorting(!sorting);
    setInterestSortActive(!sorting);
    setTenureActive(true);
  };
  const sortByTenure = () => {
    const sortedData = [...posts].sort((a,b) => sorting ? a.tenure - b.tenure : b.tenure - a.tenure);
    setPosts(sortedData);
    setSorting(!sorting)
    setTenureActive(!sorting);
    setInterestSortActive(true);
  };
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-12 pb-4 sticky-top d-nne d-lg-block">
        <div className="card bank-card bank-card-menu h-100">
          <div className="card-body">
            <div className="bank_name text-start">Bank Name</div>
            <div className="bank_interest">
              <button
                className={sortInterestActive ? 'btn btn-light bg-transparent btn_active' : 'btn btn-light bg-transparent btn_inactive'}
                onClick={sortByInterest}
              >
                <span className="me-2">Interest</span>
                <small>
                  <small className="fas fa-chevron-down"></small>
                </small>
              </button>
            </div>
            <div className="bank_interest">
              <button className={sortTenuretActive ? 'btn btn-light bg-transparent btn_active' : 'btn btn-light bg-transparent btn_inactive'} onClick={sortByTenure}>
                <span className="me-2">Tenure</span>
                <small>
                  <small className="fas fa-chevron-down"></small>
                </small>
              </button>
            </div>
            <div className="bank_sort text-end">
              <div className="dropdown">
                <a
                  className="btn btn-outline-primary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter By
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-percent"></span> Interest
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-calendar-days"></span> Tenure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-star-half-stroke"></span> Ratings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        posts.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-12 pb-4" key={index}>
            {/* {item.bank} {item.bank_logo} */}
            <div className="card bank-card h-100">
              <div className="card-body">
                <div className="card-img-wrapper text-center">
                  <img
                    src={item.bank_logo}
                    className="card-img-item"
                    alt={item.bank}
                  />
                  <h5 className="card-title mt-2">{item.bank} Bank</h5>
                </div>
                <h5 className="card-text text-center">
                  <span className="d-lg-none">Interest Rate: </span>
                  {Math.round(item.interest_rate * 100) / 100}
                  <small>
                    <small>%</small>
                  </small>
                  <div
                    className="progress mt-2"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow={item.interest_rate}
                    aria-valuemin="0"
                    aria-valuemax="20"
                    style={{ width: "100px", height: "10px" }}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: `${item.interest_rate * 5}%` }}
                    ></div>
                  </div>
                </h5>
                <h5 className="card-text">
                  <span className="d-lg-none">Tenure Range: </span>
                  {item.tenure}
                  <small style={{ fontWeight: "400" }}>
                    <small>Years</small>
                  </small>
                </h5>
                <div className="btn-group text-end">
                  <a href="#" className="btn btn-primary">
                    Apply Now
                  </a>
                  <a href="#" className="btn btn-outline-secondary">
                    Explore <small className="fas fa-search"></small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LoanOffers;
