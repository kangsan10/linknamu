"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
};

function trackClick(id: string) {
  const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
  // 새 탭으로 이동해도 요청이 유실되지 않도록 sendBeacon 사용
  if (!navigator.sendBeacon?.("/api/clicks", body)) {
    fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ id, title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(id)}
      className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-center font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      {title}
    </a>
  );
}
