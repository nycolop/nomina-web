export function CustomInput({ type, name, icon, onClick, value, setValue }) {
  return (
    <div aria-label="input" className="relative flex items-center">
      <input
        className="bg-[#E1E5E8] w-full rounded-lg py-3 pl-4 "
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {icon && (
        <button type="button" onClick={onClick} className="absolute right-5">
          <img src={icon} alt="" />
        </button>
      )}
    </div>
  );
}
