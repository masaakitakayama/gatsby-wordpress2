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
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Modal) => {
        if (modalRef.current) {
          bootstrapModalRef.current = new Modal.default(modalRef.current);
        }
      });

      // ドロップダウンなど、他の Bootstrap 機能も同様に初期化する場合はここに追加
      import('bootstrap/js/src/dropdown.js');
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
                {/* ... (モーダル内のリンク) ... */}
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