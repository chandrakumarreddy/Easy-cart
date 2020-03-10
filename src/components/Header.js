import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <ul className="navBar__item">
          <li
            className="flex-2"
            css={`
              height: 44px;
              line-height: 44px;
              text-align: center;
            `}
          >
            <Link
              to="/"
              css={`
                font-weight: bold;
                font-size: 24px;
                font-style: italic;
              `}
            >
              Easy Cart
            </Link>
          </li>
          <li
            className="flex-4"
            css={`
              position: relative;
            `}
          >
            <input
              type="text"
              placeholder="Search on Commerce..."
              className="navBar__item--input"
            />
            <button
              css={`
                position: absolute;
                height: 100%;
                right: 18px;
                top: 0;
                font-size: 26px;
                color: #000;
                border: none;
                cursor: pointer;
                background-color: transparent;
                &:focus {
                  outline: none;
                }
              `}
            >
              <i className="flaticon-search"></i>
            </button>
          </li>
          <li
            className="flex-2"
            css={`
              height: 44px;
              line-height: 44px;
              text-align: center;
            `}
          >
            <ul className="navBar__item--right">
              <li className="navBar__item--right__item">
                <Link to="/signin">
                  <i
                    className="flaticon-profile"
                    css={`
                      font-size: 22px;
                    `}
                  ></i>{" "}
                  Signin | Register
                </Link>
              </li>

              <li className="navBar__item--right__item">
                <Link to="/cart">
                  <i
                    className="flaticon-bag"
                    css={`
                      font-size: 22px;
                    `}
                  ></i>{" "}
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
