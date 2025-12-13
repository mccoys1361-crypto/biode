import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// 관리자 이메일 (환경변수로 설정 가능)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "mccoys1361@gmail.com";

export async function POST(request: NextRequest) {
  try {
    // API 키 확인
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "이메일 서비스가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { title, content, author, email } = body;

    // 1. 입력 검증
    if (!content || !author) {
      return NextResponse.json(
        { error: "내용과 작성자는 필수입니다." },
        { status: 400 }
      );
    }

    // 2. 이메일 발송
    const { error } = await resend.emails.send({
      from: "BIODE 문의 <onboarding@resend.dev>", // Resend 무료 플랜은 이 주소만 사용 가능
      to: ADMIN_EMAIL,
      subject: title || `[BIODE] ${author}님의 문의`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            새로운 문의가 접수되었습니다
          </h2>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>이름:</strong> ${author}</p>
            <p style="margin: 10px 0;"><strong>이메일:</strong> ${email || "미입력"}</p>
          </div>

          <div style="padding: 20px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">문의 내용</h3>
            <p style="white-space: pre-wrap; color: #4b5563; line-height: 1.6;">${content}</p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            이 이메일은 BIODE 웹사이트에서 자동 발송되었습니다.
          </p>
        </div>
      `,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("이메일 발송 오류:", error);
      return NextResponse.json(
        { error: "문의 접수 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    // 3. 성공 응답
    return NextResponse.json({
      success: true,
      message: "문의가 성공적으로 접수되었습니다.",
    });
  } catch (error) {
    console.error("문의 처리 오류:", error);
    return NextResponse.json(
      { error: "문의 접수 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
