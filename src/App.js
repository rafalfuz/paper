import React from "react";
import "./App.scss";
import Title from "./Title";
import Headlines from "./Headlines";
import Main from "./Main";
import Photo from "./Photo";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Headlines />
        <Main />
        <Photo />
      </div>
    );
  }
  return;
}

export default App;
