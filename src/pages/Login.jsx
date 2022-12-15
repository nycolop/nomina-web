import { CustomInput } from "../components/CustomInput";

export default function Login() {
  return (
    <main className="w-[80%] flex justify-between items-center pr-32">
      <div className="bg-slate-400 rounded-full w-96 h-96" />

      <form className="flex flex-col items-center w-[25%] gap-4">
        <h2 className="font-semibold pb-8 text-xl">Iniciar sesión</h2>

        <section className="flex flex-col w-[110%] gap-1.5">
          <section className="flex flex-col gap-5 w-full">
            <CustomInput type="email" name="email" />
            <CustomInput type="password" name="password" />
          </section>

          <button className="self-end pr-2.5">
            <small>Recuperar contraseña</small>
          </button>
        </section>

        <button
          className="bg-custom--primary text-white py-3 w-full font-semibold rounded-lg tracking-[.20rem]"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
