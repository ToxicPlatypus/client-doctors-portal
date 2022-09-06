import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Users = () => {
  // const { data: users, isLoading } = useQuery("users", () =>
  //   fetch("http://localhost:5000/user").then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  // console.log("ksdjfkljsaldkjf", users);

  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-500 mb-2">
        USERS: {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin Panel</th>
              <th>Remove Panel</th>
            </tr>
          </thead>
          <tbody>
            {users.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>
                  {role !== "admin" && (
                    <button className="btn btn-xs" onClick={makeAdmin}>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs">Remove User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
