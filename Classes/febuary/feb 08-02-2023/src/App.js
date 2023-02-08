import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

const dummyValue = [
  {
    name: "harish",
    id: 1,
    job: "react.js",
  },

  {
    name: "dinesh",
    id: 2,
    job: "angular.js",
  },

  {
    name: "chandana",
    id: 3,
    job: "javascript",
  },

  {
    name: "shiva",
    id: 4,
    job: "python",
  },

  {
    name: "sharyana",
    id: 5,
    job: "react.js",
  },
];
const App = () => {
  const [user, setUser] = useState(dummyValue);
  const [create, setCreate] = useState({ name: "", id: "", job: "" });
  const [updateUser, setupdateUser] = useState({ name: "", id: "", job: "" });
  // DELETE
  const deletHandler = (id) => {
    const updateUser = user.filter((obj) => {
      return obj.id !== id;
    });
    console.log("updateUser", updateUser);
    setUser(updateUser);
  };
  // create USER
  const createTheUser = () => {
    console.log(create);
    if (create.name && create.id && create.job) {
      setUser((prev) => [...prev, create]);
      setCreate({ name: "", id: "", job: "" });
    }
  };
  const handletheUpdate = (obj) => {
    setupdateUser(obj);
  };
  // UPDATE
  const updateTheUser = () => {
    const newUserObj = user.map((obj) => {
      if (obj.id === updateUser.id) {
        return updateUser;
      }
      return obj;
    });
    setUser(newUserObj);
    setupdateUser({ name: "", id: "", job: "" })
  };
  return (
    <div
      style={{
        marginLeft: "3rem",
      }}
    >
      <h1> create user</h1>
      <div>
        <p>
          id :{" "}
          <input
            value={create.id}
            onChange={(e) => {
              const { value } = e.target;
              setCreate((prev) => {
                return {
                  ...prev,
                  id: value,
                };
              });
            }}
          />
        </p>

        <p>
          name :{" "}
          <input
            value={create.name}
            onChange={(e) => {
              const { value } = e.target;
              setCreate((prev) => {
                return {
                  ...prev,
                  name: value,
                };
              });
            }}
          />
        </p>

        <p>
          job :{" "}
          <input
            value={create.job}
            onChange={(e) => {
              const { value } = e.target;
              setCreate((prev) => {
                return {
                  ...prev,
                  job: value,
                };
              });
            }}
          />
        </p>
        <button onClick={createTheUser}> Submit</button>
      </div>
      <h1>update user</h1>

      <div>
        <p>
          id :{" "}
          <input
            disabled={true}
            value={updateUser.id}
            onChange={(e) => {
              const { value } = e.target;
              setupdateUser((prev) => {
                return {
                  ...prev,
                  id: value,
                };
              });
            }}
          />
        </p>

        <p>
          name :{" "}
          <input
            value={updateUser.name}
            onChange={(e) => {
              const { value } = e.target;
              setupdateUser((prev) => {
                return {
                  ...prev,
                  name: value,
                };
              });
            }}
          />
        </p>

        <p>
          job :{" "}
          <input
            value={updateUser.job}
            onChange={(e) => {
              const { value } = e.target;
              setupdateUser((prev) => {
                return {
                  ...prev,
                  job: value,
                };
              });
            }}
          />
        </p>
        <button onClick={updateTheUser}> update</button>
      </div>
      READING THE DATA CRUD
      {user.map((obj) => {
        return (
          <div className="cards">
            <p> {obj.id} </p>
            <p> {obj.name} </p>
            <p> {obj.job} </p>
            <button
              onClick={() => {
                handletheUpdate(obj);
              }}
            >
              update
            </button>
            <button
              onClick={() => {
                deletHandler(obj.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
