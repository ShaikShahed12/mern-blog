import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import "../components/Header.css";
import { signoutSuccess } from '../redux/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  
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
          // rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden rounded-lg" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden lg:inline rounded-lg " // Show moon button on large screens
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        {currentUser ? (
           <Dropdown
           arrowIcon={false}
           inline
           label={
             <Avatar alt='user' img={currentUser.profilePicture} rounded />
           }
         >
           <Dropdown.Header>
             <span className='block text-sm'>@{currentUser.username}</span>
             <span className='block text-sm font-medium truncate'>
               {currentUser.email}
             </span>
           </Dropdown.Header>
           <Link to={'/dashboard?tab=profile'}>
             <Dropdown.Item>Profile</Dropdown.Item>
           </Link>
           <Dropdown.Divider />
           <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
         </Dropdown>
        ):
        (

        <Link to="/sign-in">
          <Button className="gradient-duo-tone-purple-to-blue rounded-lg outline" pill>
            Sign In
          </Button>
        </Link>
        )  
      }
        <Navbar.Toggle className="md:hidden" /> {/* Show toggle button only on small screens */}
      </div>
      <Navbar.Collapse className="md:flex"> {/* Show navigation links only on large screens */}
        <Link to="/" className={`navbar-link ${path === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/about" className={`navbar-link ${path === "/about" ? "active" : ""}`}>
          About
        </Link>
        <Link to="/projects" className={`navbar-link ${path === "/projects" ? "active" : ""}`}>
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
