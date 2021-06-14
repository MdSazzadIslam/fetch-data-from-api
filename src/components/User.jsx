import React, { useState } from "react";
import { useEffect } from "react";
import userService from "../services/userService";
import Row from "../components/Row";
import "./User.css";
const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      await userService
        .getUsers()
        .then((res) => {
          console.log(res.data);
          setUser(res.data.results);
        })
        .catch((err) => console.log(err));
    }

    // fetchUsers();
  }, []);

  return (
    <div className="main-content">
      <div className="container mt-7">
        {/* Table */}

        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">User informations</h3>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th>SL</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Row users={users} />
                  </tbody>
                </table>
              </div>
              {/* 
              <div className="card-footer py-4">
                <nav aria-label="...">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="###" tabIndex={-1}>
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="###">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="###">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="###">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="###">
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            
             */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
