import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("[로그아웃] 로그아웃 요청 시작");

    const response = NextResponse.json({
      success: true,
      message: "로그아웃되었습니다.",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: false, // HTTP 환경에서도 작동하도록 설정
      sameSite: "lax" as const,
      maxAge: 0, // 즉시 만료
      path: "/",
    };

    // 세션 쿠키 삭제
    response.cookies.set("admin_token", "", cookieOptions);
    response.cookies.set("admin_session", "", cookieOptions);

    console.log("[로그아웃] 쿠키 삭제 완료");

    return response;
  } catch (error) {
    console.error("[로그아웃] 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "로그아웃 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
