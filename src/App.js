import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {

  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserList(prevElem => {
      return [...prevElem, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler} />
      <UsersList users={userList} />


    </div>
  );
}

export default App;
