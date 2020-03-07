import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <ul className="navBar__item">
          <li className="flex-2">
            <Link
              to="/"
              css={`
                font-weight: bold;
                font-size: 24px;
              `}
            >
              Commerce
            </Link>
          </li>
          <li className="flex-3">
            <input
              type="text"
              placeholder="search here"
              className="navBar__item--input"
            />
          </li>
          <li className="flex-2">
            <ul className="navBar__item--right">
              <li className="navBar__item--right__item">
                <Link
                  to="/signin"
                  css={`
                    text-decoration: underline;
                  `}
                >
                  Signin | Register
                </Link>
              </li>
              <li className="navBar__item--right__item">
                <Link to="/orders">Returns & orders</Link>
              </li>
              <li className="navBar__item--right__item">
                <Link to="/cart">cart</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
