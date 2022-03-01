import { useState } from 'react';
import Signup from './scenes/Signup'
import Login from './scenes/Login';
import UserList from './scenes/UserList';

function App() {
  const [ token, setToken ] = useState();
  const [ isUser, setIsUser ] = useState();

  return (
    <section>
      {!token
        ? isUser
          ? <Login setToken= {setToken} setIsUser={setIsUser} />
          : <Signup setToken={setToken} setIsUser={setIsUser} />
        : <UserList token={token} />
      }
    </section>
  );
}

export default App;
