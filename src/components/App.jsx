import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, ListPayroll, PayrollDetail } from "../pages";
import { Header } from "./";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [headerTitle, setHeaderTitle] = useState("");

  return (
    <BrowserRouter>
      <div className="font-custom--roboto-primary w-full h-full">
        <Header headerTitle={headerTitle} />

        <div className="w-full pt-8">
          <Routes>
            <Route
              path="/"
              element={<Login setHeaderTitle={setHeaderTitle} />}
            />
            <Route
              path="/list-payroll"
              element={<ListPayroll setHeaderTitle={setHeaderTitle} />}
            />
            <Route
              path="/payroll-detail"
              element={<PayrollDetail setHeaderTitle={setHeaderTitle} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
