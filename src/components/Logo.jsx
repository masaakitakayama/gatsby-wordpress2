import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <svg
        width="200"
        height="60"
        viewBox="0 0 200 60"
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
            y="20"
            width="20"
            height="20"
            rx="4"
            className="shape-back"
            fill="url(#darkBlueGradient)"
          />

          {/* 前の四角形 - 明るい青 */}
          <rect
            x="25"
            y="16"
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
              fill: #333333;
              transition: fill 0.3s ease;
              filter: brightness(1.2);
            }
            .subtext {
              fill: #1466C7;
              transition: fill 0.3s ease;
              filter: brightness(1.3);
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