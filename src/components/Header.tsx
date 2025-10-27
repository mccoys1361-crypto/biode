"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // 스크롤 이벤트 최적화 - debounce 적용
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 10);
    }, 16); // 60fps에 맞춘 최적화
  }, []);

  useEffect(() => {
    // passive: true로 성능 향상
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // 모바일 메뉴 토글 최적화
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // 메뉴 닫기 함수
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // 메뉴 아이템 메모이제이션
  const menuItems = useMemo(
    () => [
      { href: "/only", label: "ONLY, 비오드", showDash: true, isBold: true },
      { href: "/wow", label: "WOW, 비오드", showDash: true, isBold: true },
      { href: "/principle", label: "비오드의 원칙", showDash: false, isBold: false },
      { href: "/technology", label: "비오드의 기술", showDash: false, isBold: false },
      { href: "/effect", label: "비오드의 효과", showDash: false, isBold: false },
      { href: "/experience", label: "놀라운 경험의 시작", showDash: true, isBold: true },
      { href: "/store", label: "STORE", showDash: true, isBold: true },
      { href: "/contact", label: "고객센터", showDash: true, isBold: true },
    ],
    []
  );

  return (
    <header
      className={`biode-header ${
        isScrolled ? "biode-header--scrolled" : ""
      } ${isHomePage ? "biode-header--home" : ""}`}
    >
      <div className="biode-header__container">
        <div className="biode-header__content">
          {/* 로고 */}
          <Link href="/" className="biode-header__logo">
            <span className="biode-header__logo-text">BIODE</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="biode-header__nav">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="biode-header__nav-item"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 메뉴 토글 */}
          <button
            className="biode-header__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <span className="biode-header__close-icon">✕</span>
            ) : (
              <div className="biode-header__hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`biode-header__mobile-menu ${
            isMobileMenuOpen ? "biode-header__mobile-menu--open" : ""
          }`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`biode-header__mobile-menu-item ${
                !item.isBold ? "biode-header__mobile-menu-item--normal" : ""
              }`}
              onClick={closeMobileMenu}
            >
              {item.showDash && <span className="biode-header__dash">- </span>}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
