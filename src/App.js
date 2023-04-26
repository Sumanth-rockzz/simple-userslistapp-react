import React ,{useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler=(name,age)=>{
    setUsersList((prevdata)=>{
      return [...prevdata,{id:Math.random().toString(),name:name,age:age}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;