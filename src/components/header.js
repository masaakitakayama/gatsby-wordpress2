import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import '../css/header.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Modal } from 'react-bootstrap'; // Button は使用していません
import logo_blue from '../static/logo_blue.png';
import logo_white from '../static/logo_white.png';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (show) {
        // スクロールが開始されたらすぐにヘッダーを閉じる
        handleClose();
      }
      isScrolling.current = true;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        // スクロールが停止した後の処理 (必要であれば)
      }, -1000); // スクロール停止とみなす遅延時間 (調整が必要)
    };

    if (show) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current); // ヘッダーが閉じられたらタイマーをクリア
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [show, handleClose]);

  const handleAnchorClick = () => {
    if (show) {
      handleClose(); // アンカークリック時にもヘッダーを閉じる
    }
    isScrolling.current = true; // スクロール開始
  };

  return (
    <>
      <div className="header">
        <div className="header__body">
            <h1 className="header__body-logo-outer">
            <Link to="/" className="header__body-logo-link">
            <img className='header__body-logo-item' src={logo_blue} />
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
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to='/#landingpages' onClick={handleClose}>Landingpages</AnchorLink></li>
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#wordpress" onClick={handleClose}>Wordpress</AnchorLink></li>
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#banners" onClick={handleClose}>Banners</AnchorLink></li>
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#photos" onClick={handleClose}>photos</AnchorLink></li>
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#videos" onClick={handleClose}>Videos</AnchorLink></li>
                    <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#others" onClick={handleClose}>Others</AnchorLink></li>
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
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Link to="/" className="modal_logo-link">
            <h1 className='modal_logo_outer'>
              <img className='modal_logo_item' to="/" src={logo_white} />
            </h1>
          </Link>
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
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to='/#landingpages' onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>Landingpages</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#wordpress" onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>Wordpress</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#banners" onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>Banners</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#photos" onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>photos</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#videos" onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>Videos</AnchorLink></li>
                <li className="dropdown-item dropdown-item--fcb"><AnchorLink to="/#others" onClick={handleClose} onAnchorLinkClick={handleAnchorClick}>Others</AnchorLink></li>
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
    </>
  );
};

export default Header;