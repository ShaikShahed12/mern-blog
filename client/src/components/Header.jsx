import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import "../components/Header.css";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white "
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Shahed's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden rounded-lg" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline rounded-lg "
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="gradient-duo-tone-purple-to-blue rounded-lg outline" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <a href="/" className={`navbar-link ${path === "/" ? "active" : ""}`}>
          Home
        </a>
        <a
          href="/about"
          className={`navbar-link ${path === "/about" ? "active" : ""}`}
        >
          About
        </a>
        <a
          href="/projects"
          className={`navbar-link ${path === "/projects" ? "active" : ""}`}
        >
          Projects
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
