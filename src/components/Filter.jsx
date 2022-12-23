const mappers = {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  years: (() => {
    const payload = [];

    let currentYear = new Date().getFullYear();
    for (let stopYear = 1900; currentYear >= stopYear; currentYear--)
      payload.push(currentYear);

    return payload;
  })(),
};

function Select({ label, mapper }) {
  return (
    <select
      className="cursor-pointer border font-bold border-custom--tertiary rounded-md w-16 p-0.5"
      name={label.toLowerCase()}
    >
      <option value="" selected disabled hidden>
        {label}
      </option>

      {mappers[mapper].map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}

export function Filter() {
  return (
    <section className="flex gap-3.5">
      <Select label="Mes" mapper="months" />
      <Select label="Año" mapper="years" />
    </section>
  );
}
