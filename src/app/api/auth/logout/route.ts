import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("[로그아웃] 로그아웃 요청 시작");

    const response = NextResponse.json({
      success: true,
      message: "로그아웃되었습니다.",
    });

    // 쿠키 삭제 (여러 방법 시도)
    response.cookies.delete("admin_token");
    response.cookies.delete("admin_session");

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
