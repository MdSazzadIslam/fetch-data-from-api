import React from "react";

const Row = ({ users }) => {
  const userInfo = users.map((user, index) => {
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <div className="avatar rounded-circle mr-3">
              <img alt={user.name.first} src={user.picture.large} />
            </div>
          </td>
          <td>
            <a href="###">
              <span className="mb-0 text-sm">
                {user.name.title} {user.name.first + " " + user.name.last}
              </span>
            </a>
          </td>
        </tr>
      </>
    );
  });

  return <>{userInfo}</>;
};

export default Row;
