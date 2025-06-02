import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import '../css/header.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Modal } from 'react-bootstrap'; // Button は使用していません
import Logo from './Logo';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        if (show) {
          handleClose();
        }
      }

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    };

    if (show) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [show]);

  const handleAnchorClick = () => {
    handleClose();
  };

  return (
    <header className="header">
      <div className="header__body">
        <h1 className="header__body-logo-outer">
          <Link to="/" className="header__body-logo-link">
            <Logo className="header__body-logo-item" />
          </Link>
        </h1>
        <button
          type="button"
          className="d-xl-none modal-1 btn"
          onClick={handleShow}
          aria-label="ハンバーガーメニュー"
        >
          <span className="bar"></span>
        </button>
        <div className='display-menu'>
          <div className="dropdown d-none d-xl-block">
            <ul className='d-flex'>
              <li><Link to="/" className="dropdown-item">Home</Link></li>
              <li><Link to="/#about" className="dropdown-item">About(省略)</Link></li>
              <li><Link to="/about_detaill" className="dropdown-item">About(詳細)</Link></li>
              <li className="nav-item dropdown">
                <button
                  className="drop-item btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Works
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to='/#landingpages' onAnchorLinkClick={handleAnchorClick} stripHash>Landingpages</AnchorLink></li>
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#wordpress" onAnchorLinkClick={handleAnchorClick} stripHash>Wordpress</AnchorLink></li>
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#banners" onAnchorLinkClick={handleAnchorClick} stripHash>Banners</AnchorLink></li>
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#photos" onAnchorLinkClick={handleAnchorClick} stripHash>photos</AnchorLink></li>
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#videos" onAnchorLinkClick={handleAnchorClick} stripHash>Videos</AnchorLink></li>
                  <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#others" onAnchorLinkClick={handleAnchorClick} stripHash>Others</AnchorLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="drop-item btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()}
                >
                  Works(一覧)
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/category/landingpages" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Landing</Link></li>
                  <li><Link to="/category/wordpress" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Wordpress</Link></li>
                  <li><Link to="/category/banners" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Banners</Link></li>
                  <li><Link to="/category/photos" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Photos</Link></li>
                  <li><Link to="/category/videos" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Videos</Link></li>
                  <li><Link to="/category/others" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Others</Link></li>
                </ul>
              </li>
              <li><Link to="/#Skills" className="dropdown-item">Skills</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header>
          <Link to="/" className="modal_logo-link">
            <h1 className='modal_logo_outer'>
              <Logo className="modal_logo_item" />
            </h1>
          </Link>
          <button type="button" className="btn-close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body>
          <ul className="link-group">
            <li><Link className='dropdown-item' to="/" onClick={handleClose}>Home</Link></li>
            <li><AnchorLink className='dropdown-item' to="/#About" onClick={handleClose}>About(省略)</AnchorLink></li>
            <li><Link className='dropdown-item' to="/about_detaill" onClick={handleClose}>About(詳細)</Link></li>
            <li className="nav-item dropdown">
              <div
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Works
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to='/#landingpages' onAnchorLinkClick={handleAnchorClick} stripHash>Landingpages</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#wordpress" onAnchorLinkClick={handleAnchorClick} stripHash>Wordpress</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#banners" onAnchorLinkClick={handleAnchorClick} stripHash>Banners</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#photos" onAnchorLinkClick={handleAnchorClick} stripHash>photos</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#videos" onAnchorLinkClick={handleAnchorClick} stripHash>Videos</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#others" onAnchorLinkClick={handleAnchorClick} stripHash>Others</AnchorLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Works(一覧)
              </div>
              <ul className="dropdown-menu">
                <li><Link to="/category/landingpages" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Landing</Link></li>
                <li><Link to="/category/wordpress" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Wordpress</Link></li>
                <li><Link to="/category/banners" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Banners</Link></li>
                <li><Link to="/category/photos" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Photos</Link></li>
                <li><Link to="/category/videos" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Videos</Link></li>
                <li><Link to="/category/others" className="dropdown-item dropdown-item--fcb" onClick={handleClose}>Others</Link></li>
              </ul>
            </li>
            <li><Link to="/#Skills" className="dropdown-item" onClick={handleClose}>Skills</Link></li>
          </ul>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;