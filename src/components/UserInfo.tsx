"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionManager } from "@/hooks/useSessionManager";
import AutoLogoutModal from "./AutoLogoutModal";

export default function UserInfo() {
  const [userType, setUserType] = useState<string>("guest");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUserInfo = async () => {
    try {
      // localStorage 체크
      const localUserType = localStorage.getItem("userType");
      if (!localUserType || localUserType === "guest") {
        console.log("[UserInfo] localStorage에 userType 없음 - guest로 설정");
        setUserType("guest");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        console.log("[UserInfo] 사용자 정보:", data.userType);
        setUserType(data.userType || "guest");
      } else {
        console.log("[UserInfo] API 응답 실패 - guest로 설정");
        setUserType("guest");
        localStorage.removeItem("userType");
      }
    } catch (err) {
      console.error("[UserInfo] 사용자 정보 가져오기 실패:", err);
      setUserType("guest");
      localStorage.removeItem("userType");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      console.log("[UserInfo] 로그아웃 시작");
      const response = await fetch("/api/auth/logout", { method: "POST" });
      console.log("[UserInfo] 로그아웃 API 응답:", response.status);

      localStorage.removeItem("userType");
      setUserType("guest");

      // 로그인 페이지로 이동
      console.log("[UserInfo] 로그인 페이지로 이동");
      window.location.href = "/portal/login";
    } catch (err) {
      console.error("[UserInfo] 로그아웃 오류:", err);
      localStorage.removeItem("userType");
      setUserType("guest");
      window.location.href = "/portal/login";
    }
  };

  // 세션 관리 훅 사용 (관리자로 로그인했을 때만)
  const { showWarning, countdown, closeWarning } = useSessionManager({
    onLogout: handleLogout,
    sessionTimeout: 30 * 60 * 1000, // 30분
    warningTimeout: 10 * 1000, // 10초
    enabled: userType !== "guest", // 로그인 상태일 때만 활성화
  });

  useEffect(() => {
    fetchUserInfo();

    // 주기적으로 사용자 정보 확인 (1분마다)
    const interval = setInterval(() => {
      fetchUserInfo();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="user-info-container">
        {userType === "guest" ? (
          <button
            onClick={() => router.push("/portal/login")}
            className="login-btn"
          >
            로그인
          </button>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            로그아웃
          </button>
        )}
      </div>

      {/* 자동 로그아웃 모달 */}
      {userType !== "guest" && (
        <AutoLogoutModal
          isOpen={showWarning}
          onClose={closeWarning}
          onLogout={handleLogout}
          countdown={countdown}
        />
      )}
    </>
  );
}
