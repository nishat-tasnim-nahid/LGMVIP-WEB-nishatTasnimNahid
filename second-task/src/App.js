import './App.css';
import { useState } from 'react'
import Navbar from './Navbar';
import Person from './Person';
import Loading from './Loading';
import Home from './Home';

function App() {
  const [fetchData, setfetchData] = useState(false);
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const getData = async () => {
      setLoad(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const res = await response.json();
      setUsers(res.data);
      setInterval(() => {
          setfetchData(true);
      }, 2000);
  };
  

  return (
      <>
          <Navbar getData={getData} />

          {load ? (
              fetchData ? (
                  <Person users={users} />
              ) : (
                  <Loading />
              )
          ) : (
              <Home getData={getData} />
          )}
      </>
  );
}

export default App