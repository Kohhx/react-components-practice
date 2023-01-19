import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded>Clicked Me!</Button>
      </div>
      <div>
        <Button secondary outline>Buy Me!</Button>
      </div>
      <div>
        <Button success outline rounded>Hey!</Button>
      </div>
      <div>
        <Button warning rounded>There</Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
    </div>
  );
};

export default App;
