import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/loader";

const blocks = ["Descripcion", "Configuracion"];

const Block = ({ title, currentBlock, setCurrentBlock }) => {
  return (
    <button
      onClick={() => setCurrentBlock(title)}
      className={`${
        currentBlock === title
          ? "bg-custom--primary text-white"
          : "border border-custom--tertiary text-custom--tertiary"
      } h-[4.5rem] flex justify-center items-center w-full`}
    >
      <h4 className="font-bold">{title}</h4>
    </button>
  );
};

export function MainContent({ to, title, setHeaderTitle, children }) {
  const [currentBlock, setCurrentBlock] = useState("Descripcion");

  useEffect(() => {
    setHeaderTitle(title);
  }, []);

  return (
    <div className="w-full pl-9">
      <button className="mb-24">
        <Link to={to}>
          <img src={assets.icons.arrowLeft} alt="back" />
        </Link>
      </button>

      <main className="w-full flex pl-3.5 gap-40">
        <section className="h-[60vh] border flex flex-col justify-between py-8 pb-2 rounded-2xl border-custom--tertiary">
          <section>
            <h3 className="font-bold px-9 pb-6">Lista de nominas</h3>

            {blocks.map((block) => (
              <Block
                key={block}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
                title={block}
              />
            ))}
          </section>

          <button className="font-bold text-custom--tertiary text-xl pl-5 gap-2 flex flex-col items-center w-max">
            <img src={assets.icons.exit} alt="exit" />
            <p>Salir</p>
          </button>
        </section>

        {children}
      </main>
    </div>
  );
}
