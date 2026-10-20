import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";

// wireframe.png: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 목록 (한 단 세로 배치)
export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-6 pt-16 pb-16">
      <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <section aria-label="링크 목록" className="mt-10 w-full">
        <LinkList links={profile.links} />
      </section>
    </main>
  );
}
