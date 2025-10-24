"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { notice } from "@/types/notice";

export default function NoticeDetailPage() {
  const params = useParams();
  const [notice, setNotice] = useState<notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/notices/${params.id}`);
        const result = await response.json();

        if (result.success) {
          setNotice(result.data);
        }
      } catch (error) {
        console.error("공지사항 불러오기 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchNotice();
    }
  }, [params.id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (loading) {
    return (
      <div className="biode-notice">
        <Header />
        <main className="biode-notice__container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">공지사항을 불러오는 중...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="biode-notice">
        <Header />
        <main className="biode-notice__container">
          <div className="text-center">
            <div className="biode-notice__empty">
              <p className="text-red-800 text-lg mb-4">
                공지사항을 찾을 수 없습니다.
              </p>
              <Link
                href="/biode/notice"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="biode-notice">
      <Header />

      <main className="biode-notice__container">
        {/* 뒤로가기 버튼 */}
        <div className="biode-notice__back-button">
          <Link
            href="/biode/notice"
            className="biode-notice__back-link"
          >
            ← 목록으로 돌아가기
          </Link>
        </div>

        {/* 공지사항 상세 */}
        <div className="biode-notice__detail-card">
          {/* 헤더 */}
          <div className="biode-notice__detail-header">
            <div className="biode-notice__detail-title-section">
              <div className="biode-notice__detail-title-row">
                {notice.isPinned && (
                  <span className="biode-notice__pinned-badge">
                    📌 상단고정
                  </span>
                )}
              </div>
              <h1 className="biode-notice__detail-title">
                {notice.title}
              </h1>
              <div className="biode-notice__detail-meta">
                <span>작성자: {notice.author}</span>
                <span>작성일: {formatDate(notice.createdAt)}</span>
                <span>조회수: {notice.viewCount}</span>
              </div>
            </div>
          </div>

          {/* 내용 */}
          <div className="biode-notice__detail-content">
            <div
              className="biode-notice__content-html"
              dangerouslySetInnerHTML={{ __html: notice.content }}
            />
          </div>

          {/* 첨부파일 */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="biode-notice__detail-attachments">
              <h3 className="biode-notice__attachments-title">첨부파일</h3>
              <div className="biode-notice__attachments-list">
                {notice.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="biode-notice__attachment-item"
                  >
                    <div className="biode-notice__attachment-info">
                      <span className="biode-notice__attachment-icon">
                        📎
                      </span>
                      <div className="biode-notice__attachment-details">
                        <div className="biode-notice__attachment-name">
                          {attachment.fileName}
                        </div>
                        <div className="biode-notice__attachment-meta">
                          {formatFileSize(attachment.fileSize)} | 다운로드:{" "}
                          {attachment.downloadCount}회
                        </div>
                      </div>
                    </div>
                    <a
                      href={`/api/notices/attachments/${attachment.id}/download`}
                      className="biode-notice__download-button"
                      download
                    >
                      다운로드
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="biode-notice__bottom-button">
          <Link
            href="/biode/notice"
            className="biode-notice__back-button-large"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
