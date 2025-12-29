// SEO 설정 중앙 관리
export const SEO_CONFIG = {
  // 기본 설정 (BIODE 메인)
  default: {
    title: "비오드(BIODE) - 세계 최고 수준의 반려동물 유산균",
    description:
      "비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다. 라이트핏 펫 유산균으로 반려동물의 건강한 삶을 지켜드립니다.",
    keywords: [
      "비오드",
      "BIODE",
      "반려동물 유산균",
      "펫 유산균",
      "라이트핏 펫 유산균",
      "강아지 유산균",
      "고양이 유산균",
      "반려동물 건강식품",
      "펫 프로바이오틱스",
      "반려동물 헬스케어",
      "반려동물 건강",
      "펫 건강식",
      "반려견 유산균",
      "반려묘 유산균",
      "프로바이오틱스",
      "장 건강",
      "면역력 강화",
      "반려동물 영양제",
    ],
    author: "비오드(BIODE)",
    siteName: "비오드(BIODE)",
    url: "https://biode.co.kr",
    image: "/biode-og.jpg",
  },

  // 관리자 포털 설정
  portal: {
    title: "관리자 포털 - 비오드(BIODE)",
    description:
      "비오드(BIODE) 관리자 포털 - 콘텐츠 관리 및 시스템 운영",
    keywords: ["관리자", "포털", "비오드", "BIODE", "콘텐츠 관리"],
    author: "비오드(BIODE)",
    siteName: "비오드(BIODE) 관리자 포털",
    url: "https://biode.co.kr/portal",
    image: "/portal-og.jpg",
    robots: "noindex, nofollow", // 관리자 페이지는 크롤링 제한
  },

  // 페이지별 설정
  pages: {
    home: {
      title: "홈 - 비오드(BIODE)",
      description:
        "비오드(BIODE) 홈페이지 - 세계 최고 수준의 반려동물 유산균 솔루션",
      keywords: [
        "홈",
        "메인",
        "반려동물 유산균",
        "펫 유산균",
        "비오드",
        "BIODE",
      ],
    },
    notice: {
      title: "공지사항 - 비오드(BIODE)",
      description: "비오드(BIODE) 공지사항 및 업데이트, 회사 소식",
      keywords: [
        "공지사항",
        "업데이트",
        "소식",
        "비오드",
        "BIODE",
        "회사소식",
      ],
    },
    inquiry: {
      title: "문의하기 - 비오드(BIODE)",
      description: "비오드(BIODE)에 문의하기, 고객 문의 및 상담",
      keywords: [
        "문의",
        "상담",
        "고객지원",
        "비오드",
        "BIODE",
        "문의하기",
      ],
    },
    inquiryWrite: {
      title: "문의글 작성 - 비오드(BIODE)",
      description: "비오드(BIODE) 문의글 작성, 고객 문의 등록",
      keywords: [
        "문의글 작성",
        "문의 등록",
        "고객문의",
        "비오드",
        "BIODE",
      ],
    },
    inquiryDetail: {
      title: "문의글 상세 - 비오드(BIODE)",
      description: "비오드(BIODE) 문의글 상세보기, 답변 확인",
      keywords: [
        "문의글 상세",
        "답변 확인",
        "문의내용",
        "비오드",
        "BIODE",
      ],
      robots: "noindex, nofollow", // 개인정보 보호를 위해 크롤링 제한
    },
    noticeDetail: {
      title: "공지사항 상세 - 비오드(BIODE)",
      description: "비오드(BIODE) 공지사항 상세보기, 회사 소식 확인",
      keywords: [
        "공지사항 상세",
        "회사소식",
        "업데이트",
        "비오드",
        "BIODE",
      ],
    },
    noticeWrite: {
      title: "공지사항 작성 - 비오드(BIODE)",
      description: "비오드(BIODE) 공지사항 작성, 관리자 전용",
      keywords: ["공지사항 작성", "관리자", "비오드", "BIODE"],
      robots: "noindex, nofollow", // 관리자 전용 페이지
    },
  },
};

// 구조화된 데이터 설정
export const STRUCTURED_DATA_CONFIG = {
  organization: {
    biode: {
      "@type": "Organization",
      name: "비오드(BIODE)",
      alternateName: ["BIODE", "비오드"],
      url: "https://biode.co.kr",
      description:
        "비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다.",
      logo: {
        "@type": "ImageObject",
        url: "https://biode.co.kr/logo.png",
        width: 200,
        height: 60,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "테헤란로 123",
        addressLocality: "강남구",
        addressRegion: "서울특별시",
        postalCode: "06123",
        addressCountry: "KR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-2-1234-5678",
        contactType: "customer service",
        email: "info@biode.co.kr",
        availableLanguage: "Korean",
      },
      sameAs: [
        "https://www.facebook.com/biode",
        "https://www.instagram.com/biode",
        "https://www.linkedin.com/company/biode",
      ],
      foundingDate: "2020",
      industry: "반려동물 건강식품",
      keywords: "비오드, BIODE, 반려동물 유산균, 펫 유산균, 라이트핏",
      inLanguage: "ko-KR",
    },
  },
  website: {
    biode: {
      "@type": "WebSite",
      name: "비오드(BIODE)",
      alternateName: ["BIODE", "비오드"],
      url: "https://biode.co.kr",
      description:
        "비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다.",
      inLanguage: "ko-KR",
      publisher: {
        "@type": "Organization",
        name: "비오드(BIODE)",
        logo: {
          "@type": "ImageObject",
          url: "https://biode.co.kr/logo.png",
        },
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://biode.co.kr/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
  breadcrumb: {
    biode: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: "https://biode.co.kr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "공지사항",
          item: "https://biode.co.kr/notice",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "문의하기",
          item: "https://biode.co.kr/inquiry",
        },
      ],
    },
  },
  article: {
    notice: {
      "@type": "Article",
      headline: "공지사항",
      description: "비오드(BIODE) 공지사항 및 업데이트",
      author: {
        "@type": "Organization",
        name: "비오드(BIODE)",
      },
      publisher: {
        "@type": "Organization",
        name: "비오드(BIODE)",
        logo: {
          "@type": "ImageObject",
          url: "https://biode.co.kr/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://biode.co.kr/notice",
      },
    },
  },
};
