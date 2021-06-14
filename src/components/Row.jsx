import React from "react";
import { Link } from "react-router-dom";

const Row = ({ users, modalHandler }) => {
  const onClickHandler = (email, gender, phone) => {
    modalHandler(email, gender, phone);
  };
  const userInfo = users.map((user, index) => {
    return (
      <>
        <tr key={user.email}>
          <td>{index + 1}</td>
          <td>
            <div className="avatar rounded-circle mr-3">
              <img alt={user.name.first} src={user.picture.large} />
            </div>
          </td>
          <td>
            <Link
              onClick={(e) =>
                onClickHandler(user.email, user.gender, user.phone)
              }
            >
              <span className="mb-0 text-sm">
                {user.name.title} {user.name.first + " " + user.name.last}
              </span>
            </Link>
          </td>
        </tr>
      </>
    );
  });

  return <>{userInfo}</>;
};

export default Row;
