import logo from "../assets/logo/hashtag.svg";
import UserButtons from "./UserButtons";

const Header = () => {
  return (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-base">
      <a href="/">
        <img className="h-16 px-2" src={logo} alt="Logo da hashtag" />
      </a>
      <UserButtons />
    </header>
  );
};

export default Header;
