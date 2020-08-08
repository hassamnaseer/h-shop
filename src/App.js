import React from "react";
import Main from "./Components/Main/Main.js";
import UserProvider from './Providers/UserProvider.js';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

export default App;
