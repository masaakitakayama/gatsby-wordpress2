import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import '../css/header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const bootstrapModalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle').then((bootstrap) => {
        if (modalRef.current && bootstrap.Modal) {
          bootstrapModalRef.current = new bootstrap.Modal(modalRef.current);
        }
      });
    }

    return () => {
      if (bootstrapModalRef.current) {
        bootstrapModalRef.current.dispose();
        bootstrapModalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (bootstrapModalRef.current) {
      if (isModalOpen) {
        bootstrapModalRef.current.show();
      } else {
        bootstrapModalRef.current.hide();
      }
    }
  }, [isModalOpen]);

  const scrollToSection = (sectionId) => {
    closeModal();
    if (typeof window !== 'undefined') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <div className="header">
        <div className="header__body">
          <Link to="/" className="header__body-logo-link">
            <h1 className="header__body-logo-outer">
              {/* <img src={LogoBlue} alt="" className="header__body-logo" /> */}
            </h1>
          </Link>
          <button
            type="button"
            className="d-xl-none modal-1 btn"
            onClick={toggleModal}
            aria-label="ハンバーガーメニュー"
          >
            <span className="bar"></span>
          </button>
          <div className='display-menu'>
            <div className="dropdown d-none d-xl-block">
              <ul className='d-flex'>
                <li><Link to="/" className="drop-item link">Home</Link></li>
                <li><Link to="/#About" className="drop-item link">About(省略)</Link></li>
                <li><Link to="/about-detailed" className="drop-item link">About(詳細)</Link></li>
                <li className="nav-item dropdown"> {/* Bootstrap のクラスを追加 */}
                  <button
                    className="drop-item btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Works
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to='/#landingpages'>Landingpages</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/#wordpress">
                        Wordpress
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/#banners">
                        Banners
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/#photos">
                        photos
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/#videos">
                        Videos
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/#others">
                        Others
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> {/* Bootstrap のクラスを追加 */}
                  <button
                    className="drop-item btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Works(一覧)
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/category/landingpages" className="dropdown-item">
                        Landing
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/wordpress" className="dropdown-item">
                        Wordpress
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/banners" className="dropdown-item">
                        Banners
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/photos" className="dropdown-item">
                        Photos
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/videos" className="dropdown-item">
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/others" className="dropdown-item">
                        Others
                      </Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="/#Skills" className="drop-item link">Skills</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Settings */}
      <div
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{ display: isModalOpen ? 'block' : 'none' }}
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Link to="/" className="logo-link">
                <h1>
                  {/* <img src={LogoWhite} alt="" className="logo" /> */}
                </h1>
              </Link>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="閉じる"
              ></button>
            </div>

            <div className="modal-area">
              <ul className="link-group">
                <li><Link to="/" onClick={closeModal}>Home</Link></li>
                <li><Link to="/#About" onClick={closeModal}>About(省略)</Link></li>
                <li><Link to="/about-detailed" onClick={closeModal}>About(詳細)</Link></li>
                <li className="nav-item dropdown">
                  <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                    Works
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><Link to='/#landingpages' onClick={closeModal}>Landingpages</Link></li>
                    <li className="dropdown-item"><Link to="/#wordpress" onClick={closeModal}>Wordpress</Link></li>
                    <li className="dropdown-item"><Link to="/#banners" onClick={closeModal}>Banners</Link></li>
                    <li className="dropdown-item"><Link to="/#photos" onClick={closeModal}>photos</Link></li>
                    <li className="dropdown-item"><Link to="/#videos" onClick={closeModal}>Videos</Link></li>
                    <li className="dropdown-item"><Link to="/#others" onClick={closeModal}>Others</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                    Works(一覧)
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/category/landingpages" className="dropdown-item" onClick={closeModal}>Landing</Link></li>
                    <li><Link to="/category/wordpress" className="dropdown-item" onClick={closeModal}>Wordpress</Link></li>
                    <li><Link to="/category/banners" className="dropdown-item" onClick={closeModal}>Banners</Link></li>
                    <li><Link to="/category/photos" className="dropdown-item" onClick={closeModal}>Photos</Link></li>
                    <li><Link to="/category/videos" className="dropdown-item" onClick={closeModal}>Videos</Link></li>
                    <li><Link to="/category/others" className="dropdown-item" onClick={closeModal}>Others</Link></li>
                  </ul>
                </li>
                <li><Link to="/#Skills" onClick={closeModal}>Skills</Link></li>
              </ul>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </>
  );
};

export default Header;