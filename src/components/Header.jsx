import { icons } from "../assets/loader";

export function Header({ headerTitle }) {
  return (
    <header className="bg-custom--primary h-24 w-full flex justify-end items-center">
      <div
        className={`${headerTitle ? "w-[58%]" : "w-full"} pr-7 flex ${
          headerTitle ? "justify-between" : "justify-center"
        } items-center`}
      >
        {headerTitle && (
          <h2 className="font-bold text-3xl text-white">{headerTitle}</h2>
        )}

        <main className="flex gap-6">
          <img src={icons.dollar} alt="dollar sign" />
          <h1 className="text-white font-bold text-4xl">
            Nómina
            <span className="block text-right font-thin text-2xl">Virtual</span>
          </h1>
        </main>
      </div>
    </header>
  );
}
