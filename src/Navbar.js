import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linkHeight);
    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container" ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { id, url, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
