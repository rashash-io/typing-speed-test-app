import { FaGear } from "react-icons/fa6";
import Logo from "../assets/logo.webp";

export const Header = ({
  setShowSettings,
}: {
  setShowSettings: (show: boolean) => void;
}) => {
  return (
    <header className="shadow-xl h-[10vh]  flex flex-row justify-between items-center px-4 overflow-hidden">
      {/*---------- LOGO ----------*/}
      <img
        src={Logo}
        className="h-full hover:bg-slate-950  transition-all  duration-300"
        alt="logo"
      />

      {/*---------- NAV ----------*/}
      <nav className="text-3xl text-primary-500 ">
        <button
          onClick={() => setShowSettings(true)}
          className="flex flex-row   hover:bg-slate-950 rounded-full transition-all  duration-200"
        >
          <FaGear className=" hover:rotate-45 transition-all  duration-200 m-2" />
        </button>
      </nav>
    </header>
  );
};
