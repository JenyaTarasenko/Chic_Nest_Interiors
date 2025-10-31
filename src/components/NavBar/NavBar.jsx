import React, { useState } from "react";
import { X, Menu } from "lucide-react"; // иконки npm install lucide-react
import logo from "../../assets/image/logo-text.svg";
import { HashLink } from 'react-router-hash-link'; // библиотека 
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const location = useLocation(); // Получаем текущий путь для проверки ховер меню

  // функция для прверки пути и ховера меню
  const isActiveLink =(path)=>{
      // для главной
    if (path === "/" && location.pathname === "/" && !location.hash) return true;

      // пункт скилы
    if (path === "/#skills" && location.pathname === "/" && !location.hash === "#skills") return true;

    // пункт проекты
    if (path === "/#projects" && location.pathname === "/" && !location.hash === "#projects") return true;
    
    return false;
  }

  // Функция для получения класса активной ссылки
  const getLinkClass = (path) => {
  const baseClass = "hover:text-red-700 transition-colors duration-200";
  const activeClass = "text-red-700 font-medium"; // Стиль для активной ссылки

    return isActiveLink(path) 
    ? `${baseClass} ${activeClass}`
    : baseClass;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-black ">
      <div className="flex items-center justify-between relative bg-[#CAC3BB] py-3">
        {/* Лого слева */}
        <div className="logo-menu px-5">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[120px]"/>
          </Link>
        </div>  

        {/* Центр меню */}
        <ul className="hidden lg:flex gap-10 text-sm font-light tracking-widest absolute justify-end w-full pr-5">
          <li><Link to="/"  className={getLinkClass("/")}>Home</Link></li>
          {/* плавный скролл */}
          <HashLink smooth to="/#skills" className={getLinkClass("/#skills")}>
            About
          </HashLink>

            {/* плавный скролл */}
          <HashLink smooth to="/#projects" className={getLinkClass("/#projects")}>
            Portfolio
          </HashLink>

          <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
            Services
          </HashLink>

          <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
            Investment Guide
          </HashLink>

          <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
            Questionnaire
          </HashLink>
         
          <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
            Contact
          </HashLink>
          {/* <li><Link to="/register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li> */}
        </ul>
      
       

        {/* Бургер справа (mobile) */}
        <div className="lg:hidden flex items-center justify-center px-5 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-700 hover:text-red-500 transition-colors duration-200"
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>
      {/* Меню на mobile */}
   

        {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#CAC3BB] z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-10 text-xl font-light items-center">
                <li><Link to="/"  className={getLinkClass("/")}>Home</Link></li>
                
                <HashLink smooth to="/#skills" className={getLinkClass("/#skills")}>
                    About
                </HashLink>

                    {/* плавный скролл */}
                <HashLink smooth to="/#projects" className={getLinkClass("/#projects")}>
                    Portfolio
                </HashLink>

                <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
                    Services
                </HashLink>

                <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
                    Investment Guide
                </HashLink>

                <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
                    Questionnaire
                </HashLink>
                
                <HashLink smooth to="/#social" className={getLinkClass("/#social")}>
                    Contact
                </HashLink>
            </ul>
        </div>
        )}
    </nav>
  );
};

export default Navbar;