import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Header } from "./Header";

export default function App() {
  return (
    <Fragment>
      <Header />

      <div className="flex justify-center w-full pt-8">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Fragment>
  );
}
