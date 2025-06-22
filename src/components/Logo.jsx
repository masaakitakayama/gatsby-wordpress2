import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ variant = 'default', className = '' }) => {
  const isModal = className.includes('modal_logo_item');

  return (
    <Link to="/" className={`logo-link ${className}`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 200 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* メインのグラデーション - 明るい青 */}
          <linearGradient
            id="lightBlueGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#40B3FF" />
            <stop offset="100%" stopColor="#6BB7D1" />
          </linearGradient>

          {/* セカンダリーグラデーション - 濃い青 */}
          <linearGradient
            id="darkBlueGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1466C7" />
            <stop offset="100%" stopColor="#0A4C8B" />
          </linearGradient>
        </defs>

        {/* ロゴマーク - 重なる四角形 */}
        <g className="logo-mark">
          {/* 後ろの四角形 - 濃い青 */}
          <rect
            x="15"
            y="30"
            width="20"
            height="20"
            rx="4"
            className="shape-back"
            fill="url(#darkBlueGradient)"
          />

          {/* 前の四角形 - 明るい青 */}
          <rect
            x="25"
            y="26"
            width="20"
            height="20"
            rx="4"
            className="shape-front"
            fill="url(#lightBlueGradient)"
            style={{
              mixBlendMode: 'multiply'
            }}
          />
        </g>

        {/* テキストグループ */}
        <g className="text-group">
          {/* メインテキスト */}
          <text
            x="55"
            y="36"
            className="main-text"
            fill={isModal ? "#ffffff" : "#333333"}
            style={{
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.5px"
            }}
          >
            M.Portfolio
          </text>

          {/* サブテキスト */}
          <text
            x="55"
            y="53"
            className="subtext"
            fill={isModal ? "#ffffff" : "#1466C7"}
            style={{
              fontSize: "10px",
              fontWeight: "500",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
          >
            Creative Works
          </text>
        </g>

        <style>
          {`
            .shape-front, .shape-back {
              transition: all 0.3s ease;
            }
            .main-text {
              transition: fill 0.3s ease;
              filter: brightness(1.2);
            }
            .subtext {
              transition: fill 0.3s ease;
              filter: brightness(1.3);
            }

            /* モーダル内での白文字スタイル */
            .modal_logo_item .main-text {
              fill: #ffffff !important;
              filter: brightness(1.4);
            }
            .modal_logo_item .subtext {
              fill: #ffffff !important;
              filter: brightness(1.5);
            }
            .modal_logo_item .shape-front {
              opacity: 0.9;
            }
            .modal_logo_item .shape-back {
              opacity: 0.9;
            }
            [data-theme='dark'] .main-text {
              fill: #ffffff;
              filter: brightness(1.4);
            }
            [data-theme='dark'] .subtext {
              fill: #6BB7D1;
              filter: brightness(1.5);
            }
            [data-theme='dark'] .shape-front {
              opacity: 0.9;
            }
            [data-theme='dark'] .shape-back {
              opacity: 0.9;
            }
            @media (prefers-reduced-motion: no-preference) {
              .shape-front {
                animation: pulse 3s infinite ease-in-out;
              }
              @keyframes pulse {
                0% {
                  transform: translate(0, 0);
                }
                50% {
                  transform: translate(-2px, -2px);
                }
                100% {
                  transform: translate(0, 0);
                }
              }
            }
          `}
        </style>
      </svg>
    </Link>
  );
};

export default Logo;