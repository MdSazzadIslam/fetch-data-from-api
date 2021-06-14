import React, { useState } from "react";
import { useEffect } from "react";
import userService from "../services/userService";
import Row from "../components/Row";
import Loader from "../components/Loader";
import { Button, Modal } from "react-bootstrap";
import "./User.css";
const User = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      await userService
        .getUsers()
        .then((res) => {
          setUser(res.data.results);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const modalHandler = (email, gender, phone) => {
    debugger;
    setUserEmail(email);
    setUserGender(gender);
    setUserPhone(phone);

    setShow(true);
  };

  const PopUp = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title> {userEmail}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Email- {userEmail} || Gender - {userGender} || Phone - {userPhone}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  if (loading === true) {
    return <Loader />;
  }
  return (
    <div className="main-content">
      <div className="container mt-7">
        {/* Table */}

        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0">
                <h3 className="mb-0">User Informations</h3>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th>SL</th>
                      <th>Image</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Row users={users} modalHandler={modalHandler} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show ? <PopUp /> : null}
    </div>
  );
};

export default User;
