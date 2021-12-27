import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import SecondaryAppBar from "./components/SecondaryAppBar";

// import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <SecondaryAppBar />
    </div>
  );
}
