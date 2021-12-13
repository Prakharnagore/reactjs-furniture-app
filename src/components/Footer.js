import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgFacebook } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/about">about us</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="/cart">shipping</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="#"></Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Developer </h4>
              <p>
                <a href="https://www.google.com/search?q=Prakhar+Nagore">
                  {" "}
                  <span>Prakhar Nagore</span>
                </a>
                <br />
                Visit <span>Prakhar Nagore</span> on Below Links:
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/prakhar-nagore-7346111a6/?originalSubdomain=in">
                  <GrLinkedinOption />
                </a>
                <a href="https://twitter.com/nagoreprakhar">
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    background-color: var(--clr-black);
    padding: 40px 0;
    width: 100%;
  }
  .container {
    max-width: 1170px;
    margin: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .footer-col {
    width: 25%;
    padding: 0 15px;
  }
  .footer-col p {
    margin-top: 20px;
    color: #bbb;
  }
  .footer-col p span {
    margin-top: 20px;
    color: #fff;
  }
  .footer-col h4 {
    font-size: 18px;
    color: white;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: var(--clr-primary-7);
    height: 2px;
    width: 50px;
    box-sizing: border-box;
  }

  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  .footer-col ul li a {
    font-size: 16px;
    color: #bbb;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 300;
    display: block;
  }

  .footer-col ul li a:hover {
    transition: all 0.3s ease-in;
    color: #fff;
    padding-left: 8px;
    font-weight: 600;
    transform: scale(1);
  }
  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0px 10px 10px 0px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: white;
    border-bottom: 2px solid var(--clr-primary-7);
  }
  .footer-col .social-links a:hover {
    color: white;
    background-color: var(--clr-primary-7);
    transition: all 0.3s ease-in;
    transform: scale(1.1) rotate(360deg);
    border-bottom: 2px solid var(--clr-primary-7);
  }
  ul {
    list-style: none;
  }

  /*Responsive*/

  @media (max-width: 767px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export default Footer;
