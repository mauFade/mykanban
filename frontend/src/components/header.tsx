import { UserCircle, Kanban, SignOut } from "phosphor-react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@mykanban-token");
    navigate("/login");
  };

  return (
    <header className="w-full h-14 md:h-16 bg-darkCyan border-b border-lightCyan flex justify-around items-center">
      <a
        className="font-bold text-2xl text-lightCyan hover:cursor-pointer"
        href="/home"
      >
        My Kanban
      </a>
      <a
        href="/user/profile"
        className="h-4/5 w-[7rem] bg-whiteCyan flex flex-row items-center justify-center rounded-lg text-stoneGray hover:border border-stoneGray px-2 space-x-1"
      >
        <UserCircle size={33} />
        <span>Perfil</span>
      </a>
      <a
        href="/kanban/post"
        className="h-4/5 w-[7rem] bg-whiteCyan flex flex-row items-center justify-center rounded-lg text-stoneGray hover:border border-stoneGray px-2 spece-x-1"
      >
        <Kanban size={33} />
        <span>Publicar</span>
      </a>
      <a
        className="h-4/5 w-[7rem] bg-whiteCyan flex flex-row items-center justify-center rounded-lg text-stoneGray hover:border border-stoneGray px-2 spece-x-1 hover:cursor-pointer"
        onClick={logout}
      >
        <SignOut size={33} />
        <span>Logout</span>
      </a>
    </header>
  );
};

export default Header;
