import { MainContent } from "../components";

export default function PayrollDetail({ setHeaderTitle }) {
  return (
    <MainContent to="/list-payroll" setHeaderTitle={setHeaderTitle} title="Detalles de la nomina">
      <section className="relative bottom-20 h-[65vh] flex flex-col justify-between">
        <section>
          <h2 className="text-custom--tertiary text-center font-bold text-2xl mb-12">
            Nomina <span className="block">012990298</span>
          </h2>

          <table className="border border-black mb-10 relative">
            <thead className="bg-[#3A4DE5] text-sm text-left">
              <tr className="text-white">
                <th className="border border-black pl-3 pb-4 pt-2 h-[25px] w-[250px]">
                  Text
                </th>
                <th className="border border-black pl-3 pb-4 pt-2 h-[25px] w-[250px]">
                  Text
                </th>
                <th className="border border-black pl-3 pb-4 pt-2 h-[25px] w-[250px]">
                  Text
                </th>
              </tr>
            </thead>

            <tbody>
              {[].map((item, index) => (
                <tr key={item}>
                  <td className="border border-black h-[30px] w-[250px]"></td>
                  <td className="border border-black h-[30px] w-[250px]"></td>
                  <td className="border border-black h-[30px] w-[250px]"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="flex justify-center items-center flex-col gap-4">
          <button className="text-white bg-custom--primary font-bold rounded-xl w-64 py-2.5">
            Descargar
          </button>
          <button className="text-custom--primary border border-custom--primary bg-transparent font-bold rounded-xl w-64 py-2.5">
            Enviar por correo
          </button>
        </div>
      </section>
    </MainContent>
  );
}
