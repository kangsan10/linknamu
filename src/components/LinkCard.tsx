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
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-medium text-stone-800 shadow-[0_4px_24px_-10px_rgb(120_70_30/0.25)] backdrop-blur-md transition duration-300 ease-out hover:bg-white/65 hover:shadow-[0_8px_28px_-10px_rgb(120_70_30/0.3)] motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
    >
      {title}
    </a>
  );
}
