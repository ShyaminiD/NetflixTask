import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import SecondaryAppBar from "./components/SecondaryAppBar";
import { useFormik } from "formik";

// import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <SecondaryAppBar />
      <SignUp/>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <p>Get Started</p>
      <input type="text" placeholder=" enter Username"/>
    </div>
  )
}