import React from "react";

const Row = ({ users }) => {
  console.log(users);
  const userInfo = users.map((user, index) => {
    console.log(user.picture.large);
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <div className="media align-items-center">
              <a href="###" className="avatar rounded-circle mr-3">
                <img alt="profile_pic" src={user.picture.large} />
              </a>
            </div>
          </td>
          <td>
            <div className="media-body">
              <span className="mb-0 text-sm">
                {user.name.title} {user.name.first + " " + user.name.last}
              </span>
            </div>
          </td>
          <td scope="row">{user.email}</td>
          <td>
            <span className="badge badge-dot mr-4">
              <i className="bg-warning" /> {user.gender}
            </span>
          </td>

          <td>
            <span className="badge badge-dot mr-4">
              <i className="bg-warning" /> {user.phone}
            </span>
          </td>
        </tr>
      </>
    );
  });

  return <>{userInfo}</>;
};

export default Row;
