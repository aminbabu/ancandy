import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import brandLogo from "../assets/images/brand-logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const header = useRef();

  const handleOffcanvasToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const rebootBodyStyles = () => {
      const screenWidth = window.innerWidth;

      if (open && screenWidth < 992) {
        return document.body.classList.add("overflow-y-hidden");
      }

      document.body.classList.remove("overflow-y-hidden");
    };
    const handleScroll = () => {
      setScrollTop(window.scrollY);
      setHeaderHeight(header.current.clientHeight);
    };

    rebootBodyStyles();
    window.addEventListener("resize", rebootBodyStyles);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", rebootBodyStyles);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <>
      {/* ========== Header Start ========== */}
      <header
        id="header-main"
        className={`header-main fixed-top bg-white ${
          scrollTop > headerHeight ? "header-scrolled shadow" : ""
        }`}
        ref={header}
      >
        <nav className="navbar navbar-expand-lg" aria-label="Main navigation">
          <div className="container">
            <a className="navbar-brand d-lg-none" href="/">
              <img src={brandLogo} alt="Abcandy" width="128" height="23" />
            </a>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              onClick={handleOffcanvasToggle}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`navbar-collapse offcanvas-collapse d-lg-flex text-center text-lg-start py-3 py-lg-0 ${
                open ? "open" : ""
              }`}
              id="navbarMainMenu"
            >
              <ul className="navbar-nav col-lg-4">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#whatsnew">
                    {" "}
                    What&apos;s new?{" "}
                  </a>
                </li>
              </ul>
              <div className="d-none d-lg-flex col-lg-4 justify-content-lg-center">
                <a className="navbar-brand" href="./index.html">
                  <img src={brandLogo} alt="Abcandy" width="130" height="23" />
                </a>
              </div>
              <ul className="navbar-nav col-lg-4 justify-content-lg-end">
                <li className="nav-item">
                  <a className="nav-link" href="#community">
                    {" "}
                    Community{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <Button
                    className="btn-primary mx-lg-2 my-2 my-lg-0 fw-medium"
                    data-bs-toggle="modal"
                    data-bs-target="#contactUsModal"
                  >
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== Header End ========== */}
    </>
  );
};

export default Header;
