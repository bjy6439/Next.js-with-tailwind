import Link from "next/link";
import React from "react";
import ThemeChanger from "../components/ThemeChanger";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        />
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href={"/"}
        >
          <h2 className="ml-3 text-xl">배경민 포트폴리오</h2>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href={"/"}>
            홈
          </Link>
          <Link className="mr-5 hover:text-gray-900" href={"/projects"}>
            프로젝트
          </Link>
          <a className="mr-5 hover:text-gray-900">연락하기</a>
        </nav>
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
