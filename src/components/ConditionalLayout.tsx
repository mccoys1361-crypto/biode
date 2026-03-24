"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPortal = pathname.startsWith("/portal");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      {!isAdminPortal && <Header />}
      <main>{children}</main>
      {!isAdminPortal && (
        <footer className="biode-footer">
          <div className="biode-footer__container">
            {/* 상단: 메뉴 + 맨 위로 버튼 */}
            <div className="biode-footer__top">
              <nav className="biode-footer__menu" aria-label="푸터 메뉴">
                <Link href="/wow/principle" className="biode-footer__menu-item">
                  WOW 비오드 <span className="biode-footer__arrow">→</span>
                </Link>
                <Link href="/only" className="biode-footer__menu-item">
                  ONLY 비오드 <span className="biode-footer__arrow">→</span>
                </Link>
                <Link href="/experience" className="biode-footer__menu-item">
                  비오드 경험 <span className="biode-footer__arrow">→</span>
                </Link>
                <Link href="/contact" className="biode-footer__menu-item">
                  문의하기 <span className="biode-footer__arrow">→</span>
                </Link>
              </nav>
              <button
                className="biode-footer__scroll-top"
                onClick={handleScrollToTop}
                aria-label="맨 위로 스크롤"
              >
                ↑
              </button>
            </div>

            {/* 회사 정보 */}
            <div className="biode-footer__info">
              <div className="biode-footer__info-row">
                <span className="biode-footer__label">상호명</span>
                <span className="biode-footer__text">주식회사 비오드(BIODE Inc.)</span>
              </div>
              <div className="biode-footer__info-row">
                <span className="biode-footer__label">대표</span>
                <span className="biode-footer__text">박한솔</span>
              </div>
              <div className="biode-footer__info-row">
                <span className="biode-footer__label">주소</span>
                <span className="biode-footer__text">경기도 광명시 소하로 190 G타워 1217</span>
              </div>
              <div className="biode-footer__info-row">
                <span className="biode-footer__label">연락처</span>
                <span className="biode-footer__text">010-8104-7181</span>
              </div>
              <div className="biode-footer__info-row">
                <span className="biode-footer__label">이메일</span>
                <span className="biode-footer__text">biode@biode.co.kr</span>
              </div>
            </div>

            {/* 소셜 링크 */}
            <div className="biode-footer__social">
              <span className="biode-footer__social-icon" aria-label="비오드 인스타그램">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </span>
              <span className="biode-footer__social-icon" aria-label="비오드 페이스북">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </span>
              <span className="biode-footer__social-icon" aria-label="비오드 유튜브">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </span>
            </div>

            {/* 로고 및 저작권 */}
            <div className="biode-footer__logo">BIODE<sup>®</sup></div>
            <p style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
              © 2025 BIODE Inc. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
