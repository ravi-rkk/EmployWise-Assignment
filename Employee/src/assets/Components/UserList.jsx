import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Ensure this imports your CSS file with the custom class

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        const apiUsers = response.data.data.map((user) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name || "User",
          avatar: user.avatar,
          lastUpdated: `${Math.floor(Math.random() * 10) + 1} mins ago`,
        }));
        setUsers(apiUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">User List</h2>
      <div className="row">
        {currentUsers.map((user) => (
          <div key={user.id} className="col-md-3 mb-4">
            <div className="card shadow-lg custom-card-bg">
              <img className="card-img-top" src={user.avatar} alt="User Avatar" />
              <div className="card-body text-center">
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <p className="card-text">User ID: {user.id}</p>
                <button onClick={() => handleEdit(user)} className="btn btn-primary">
                  Edit
                </button>
              </div>
              <div className="card-footer text-muted text-center">
                Last updated {user.lastUpdated}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`btn mx-1 ${
              currentPage === number + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
