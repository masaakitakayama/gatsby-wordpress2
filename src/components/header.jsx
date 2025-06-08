import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import '../css/header.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Modal } from 'react-bootstrap';
import Logo from './Logo';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => {
  const [showModal, setShowModal] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isWorkListOpen, setIsWorkListOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
    setIsWorksOpen(false);
    setIsWorkListOpen(false);
  };

  const toggleWorks = () => setIsWorksOpen(!isWorksOpen);
  const toggleWorkList = () => setIsWorkListOpen(!isWorkListOpen);

  const handleAnchorClick = () => {
    handleModalClose();
  };

  // スクロール位置を監視
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) { // 50px以上スクロールしたら
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { to: "/", text: "Home" },
    { to: "/#About", text: "About(省略)" },
    { to: "/about_detaill", text: "About(詳細)" },
    {
      text: "Works",
      isDropdown: true,
      items: [
        { to: '/#landingpages', text: 'Landing' },
        { to: '/#wordpress', text: 'Wordpress' },
        { to: '/#banners', text: 'Banners' },
        { to: '/#photos', text: 'Photos' },
        { to: '/#videos', text: 'Videos' },
        { to: '/#others', text: 'Others' }
      ]
    },
    {
      text: "Works(一覧)",
      isDropdown: true,
      items: [
        { to: '/category/landingpages/', text: 'Landing' },
        { to: '/category/wordpress/', text: 'Wordpress' },
        { to: '/category/banners/', text: 'Banners' },
        { to: '/category/photos/', text: 'Photos' },
        { to: '/category/videos/', text: 'Videos' },
        { to: '/category/others/', text: 'Others' }
      ]
    },
    { to: "/#Skills", text: "Skills" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__body">
        <h1 className="header__body-logo-outer">
          <Link to="/" className="header__body-logo-link">
            <Logo className="header__body-logo-item" />
          </Link>
        </h1>
        <button
          type="button"
          className="d-xl-none modal-1 btn"
          aria-label="ハンバーガーメニュー"
          onClick={handleModalOpen}
        >
          <span className="bar"></span>
        </button>
        <div className='display-menu'>
          <div className="dropdown d-none d-xl-block">
            <ul className='d-flex'>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.isDropdown ? (
                    <>
                      <button
                        className="drop-item btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.text}
                      </button>
                      <ul className="dropdown-menu">
                        {link.items.map((item, idx) => (
                          <li key={idx} className="dropdown-item dropdown-item--fcb">
                            {item.to.startsWith('/#') ? (
                              <AnchorLink
                                to={item.to}
                                stripHash
                                onAnchorLinkClick={handleAnchorClick}
                              >
                                {item.text}
                              </AnchorLink>
                            ) : (
                              <Link to={item.to}>
                                {item.text}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    link.to.startsWith('/#') ? (
                      <AnchorLink
                        to={link.to}
                        className="dropdown-item"
                        stripHash
                        onAnchorLinkClick={handleAnchorClick}
                      >
                        {link.text}
                      </AnchorLink>
                    ) : (
                      <Link to={link.to} className="dropdown-item">
                        {link.text}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose} className="mobile-menu">
        <Modal.Header closeButton>
          <div className="modal_logo_outer">
            <Link to="/" className="modal_logo-link" onClick={handleModalClose}>
              <Logo className="modal_logo_item" />
            </Link>
          </div>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-unstyled">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                {link.isDropdown ? (
                  <>
                    <button
                      className="dropdown-toggle"
                      onClick={link.text === "Works" ? toggleWorks : toggleWorkList}
                      aria-expanded={link.text === "Works" ? isWorksOpen : isWorkListOpen}
                    >
                      {link.text}
                    </button>
                    <ul className={`dropdown-menu ${
                      link.text === "Works" ? (isWorksOpen ? 'show' : '') : (isWorkListOpen ? 'show' : '')
                    }`}>
                      {link.items.map((item, idx) => (
                        <li key={idx}>
                          {item.to.startsWith('/#') ? (
                            <AnchorLink
                              to={item.to}
                              stripHash
                              onAnchorLinkClick={handleAnchorClick}
                            >
                              {item.text}
                            </AnchorLink>
                          ) : (
                            <Link
                              to={item.to}
                              onClick={handleModalClose}
                            >
                              {item.text}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  link.to.startsWith('/#') ? (
                    <AnchorLink
                      to={link.to}
                      className="dropdown-item"
                      stripHash
                      onAnchorLinkClick={handleAnchorClick}
                    >
                      {link.text}
                    </AnchorLink>
                  ) : (
                    <Link
                      to={link.to}
                      className="dropdown-item"
                      onClick={handleModalClose}
                    >
                      {link.text}
                    </Link>
                  )
                )}
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;