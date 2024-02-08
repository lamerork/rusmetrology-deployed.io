import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useWindowSize } from "react-use";

import { TbChevronRight } from "react-icons/tb";
import { BsFilterLeft, BsFilterRight } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

import ButtonServises from "../UX/UI/ButtonServises";

import MedpromlabLogo from "../img/rusmetrologiya-logo.png";

function Menu({
  bgColor = "bg-white/80",

  margin = "-mt-[6rem]",
}) {
  const { width } = useWindowSize();

  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className={`fixed min-w-[320px]  px-0 w-full left-0 top-0 z-10 m-0 ${
        width < 1890 ? "bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="flex py-[1rem] flex-wrap items-start my-0  px-[15px] max-w-[1340px] animate-fade-down animate-ease-in animate-duration-500">
        <div className="relative flex justify-between xl:justify-normal w-full items-center  lg:mt-0">
          <img
            className={`cursor-pointer h-[2.3rem] object-cover max-w-[575px]:ml-[20px]  pr-[1rem]`}
            src={MedpromlabLogo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          {location.pathname === "/services/certificationmi" ||
          location.pathname === "/services/examination" ||
          location.pathname === "/services/typeassertion" ||
          location.pathname === "/services/verification" ||
          location.pathname === "/services/accreditationcertification" ||
          location.pathname === "/services/safety" ? (
            <ButtonServises />
          ) : null}
          <button
            className={`overflow-hidden text-black py-[10px] lg:pr-[1rem] text-[2.5rem] md:text-[3rem] lg:text-[2.5rem]`}
            onClick={handleClick}
          >
            {" "}
            {width < 1030 ? <BsFilterRight /> : <BsFilterLeft />}{" "}
          </button>
        </div>
        <div className="-ml-[5rem] relative flex  w-[50%] justify-end -z-10">
          <div className="flex flex-col"></div>
        </div>
      </div>
      {open ? (
        <>
          <div
            className={`fixed opacity-80 ${margin} pb-[100rem] w-full h-full bg-black/50 xl:bg-transparent overflow-hidden z-7 mx-0`}
            onClick={handleClickAway}
          ></div>
          <div
            className={`block h-screen ${margin} pb-[100rem] xl:mt-[2rem] md:w-[70%] lg:w-[60%] w-full xl:w-[18.5rem] fixed  bg-white  md:text-white  pt-[1rem] lg:pt-[6rem] xl:pt-0 z-8 ${
              open
                ? "animate-fade-right animate-once animate-duration-[1000ms] animate-delay-0 animate-ease-out animate-alternate animate-fill-both"
                : "animate-fade-left"
            } animate-ease-out animate-duration-300`}
            onClick={handleClickAway}
          >
            <nav className=" text-white text-left no-underline md:text-xl lg:text-xl xl:text-xl font-[300] tracking-wide  ">
              <ul className="ml-[2rem] md:ml-[6rem] lg:ml-[4.0rem] xl:ml-[2rem] uppercase ">
                {width < 1030 ? (
                  <li>
                    <a
                      href="#!"
                      className="absolute top-[7rem] right-[2rem] md:right-12 text-3xl"
                      onClick={handleClickAway}
                    >
                      <CiCircleRemove />
                    </a>
                  </li>
                ) : null}
                <li
                  className="lg:mt-[8rem] mt-[16rem] mb-[2rem] md:mb-[4rem] xl:mb-[3rem] "
                  onClick={handleClickAway}
                >
                  <Link to="/">Главная</Link>
                </li>
                <li
                  className=" mb-[1rem] md:mb-[1.5rem]"
                  onClick={handleClickAway}
                >
                  <Link to="/about">
                    <div className="flex items justify-between">
                      О компании
                      <div className="pr-[3rem] md:pr-[2rem]">
                        <TbChevronRight />{" "}
                      </div>
                    </div>
                  </Link>
                </li>
                <li
                  className=" mb-[1em] md:mb-[1.5rem]"
                  onClick={handleClickAway}
                >
                  <Link to="/projects">
                    <div className="flex items justify-between">
                      Проекты
                      <div className="pr-[3rem] md:pr-[2rem]">
                        <TbChevronRight />{" "}
                      </div>
                    </div>
                  </Link>
                </li>
                <li
                  className="mb-[1rem] md:mb-[1.5rem]"
                  onClick={handleClickAway}
                >
                  <Link to="/services">
                    <div className="flex items justify-between">
                      Услуги
                      <div className="pr-[3rem] md:pr-[2rem]">
                        <TbChevronRight />{" "}
                      </div>
                    </div>
                  </Link>
                </li>

                <li
                  className="mb-[1rem] md:mb-[1.5rem]"
                  onClick={handleClickAway}
                >
                  <Link to="/forpartners">
                    <div className="flex items justify-between">
                      Нам доверяют
                      <div className="pr-[3rem] md:pr-[2rem]">
                        <TbChevronRight />{" "}
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="mb-[1rem]">
                  <Link to="/contacts">
                    <div className="flex items justify-between">
                      Контакты
                      <div className="pr-[3rem] md:pr-[2rem]">
                        <TbChevronRight />{" "}
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}

export default Menu;
