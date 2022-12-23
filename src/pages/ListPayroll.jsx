import { Fragment } from "react";
import { MainContent, Filter } from "../components";

export default function ListPayroll({ setHeaderTitle }) {
  return (
    <MainContent setHeaderTitle={setHeaderTitle} title="Lista de nominas">
      <section>
        <section className="flex items-center w-max flex-col gap-5 mb-7">
          <h3 className="text-custom--tertiary font-bold text-2xl">
            Filtro de busqueda
          </h3>

          <Filter />
        </section>

        <table className="border border-black mb-10 relative">
          <thead className="bg-black text-sm text-left my-10">
            <tr className="text-white">
              <th className="border border-black pl-3 pb-4 pt-2">Text</th>
              <th className="border border-black pl-3 pb-4 pt-2">
                No. de nómina
              </th>
              <th className="border border-black pl-3 pb-4 pt-2">
                Description
              </th>
              <th className="border border-black pl-3 pb-4 pt-2"> </th>
            </tr>
          </thead>

          <tbody>
            {["", "", "", ""].map((item) => (
              <Fragment key={item}>
                <input
                  className="cursor-pointer absolute left-[-50px] mt-2.5 h-8 w-8"
                  type="checkbox"
                />
                <tr>
                  <td className="border border-black h-[50px] w-[170px]"></td>
                  <td className="border border-black h-[50px] w-[170px]"></td>
                  <td className="border border-black h-[50px] w-[170px]"></td>
                  <td className="border border-black h-[50px] w-[170px]"></td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center">
          <button className="text-white bg-custom--primary font-bold rounded-xl px-4 py-2">
            Previsualizar
          </button>
        </div>
      </section>
    </MainContent>
  );
}
