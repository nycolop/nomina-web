import { CustomInput } from "../components";
import assets from "../assets/loader";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

/* ToDo: Implement formik*/
export default function Login({ setHeaderTitle }) {
  const [passwordTypeInput, setPasswordTypeInput] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderTitle("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/list-payroll");
  }

  return (
    <main className="w-[90%] flex justify-between items-center pr-32">
      <img
        src={assets.images.welcome}
        className="w-[50%] h-[120%] object-contain"
        alt=""
      />

      <form onSubmit={handleSubmit} className="flex flex-col items-center w-[25%] gap-4">
        <h2 className="pb-8 text-xl">Iniciar sesión</h2>

        <section className="flex flex-col w-[110%] gap-1.5">
          <section className="flex flex-col gap-5 w-full">
            <CustomInput
              type="email"
              name="email"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              icon={assets.icons.eye}
              type={passwordTypeInput}
              name="password"
              onClick={() =>
                setPasswordTypeInput(
                  passwordTypeInput === "password" ? "text" : "password"
                )
              }
              value={password}
              setValue={setPassword}
            />
          </section>

          <button className="self-end pr-2.5">
            <small className="text-[#002959b3]">
              Recuperar contraseña
            </small>
          </button>
        </section>

        <button
          className="bg-custom--primary text-white py-3 w-full font-bold rounded-lg tracking-[.20rem]"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
