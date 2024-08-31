import logo from "../assets/logo/hashtag.svg";
import UserButtons from "./UserButtons";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const completeHeader = (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      {/* React não usa tags <a> mas usa o Link importado do react-router-dom, ao invés de href='' ele usa to='' */}
      <Link to="/">
        <img className="h-16 px-2" src={logo} alt="Logo da hashtag" />
      </Link>
      <UserButtons />
    </header>
  );

  const simpleHeader = (
    <header className="flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      <Link to="/">
        <img className="h-10 px-2" src={logo} alt="Logo da hashtag" />
      </Link>
    </header>
  );

  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
};

export default Header;
