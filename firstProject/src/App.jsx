import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Profile />
      <br />
      <Button />
      <br />
      <Counter />
    </div>
  );
};

export default App;
