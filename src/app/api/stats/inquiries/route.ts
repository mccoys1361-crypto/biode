import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // 전체 문의글 수
    const total = await prisma.inquiry.count();

    // 답변 대기 중 (답변이 없는 글)
    const pending = await prisma.inquiry.count({
      where: {
        answer: null,
      },
    });

    // 답변 완료 (답변이 있는 글)
    const answered = await prisma.inquiry.count({
      where: {
        NOT: {
          answer: null,
        },
      },
    });

    // 비밀글 수
    const secret = await prisma.inquiry.count({
      where: {
        isSecret: true,
      },
    });

    // 공개글 수
    const publicInquiries = await prisma.inquiry.count({
      where: {
        isSecret: false,
      },
    });

    // 답변율 계산
    const answerRate = total > 0 ? Math.round((answered / total) * 100) : 0;

    return NextResponse.json({
      total,
      pending,
      answered,
      secret,
      public: publicInquiries,
      answerRate,
    });
  } catch (error) {
    console.error("문의글 통계 조회 오류:", error);
    return NextResponse.json(
      {
        total: 0,
        pending: 0,
        answered: 0,
        secret: 0,
        public: 0,
        answerRate: 0,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
