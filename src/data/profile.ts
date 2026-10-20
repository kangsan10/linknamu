export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 기준 경로. 비워 두면 이름 첫 글자로 대체 */
  imageUrl?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값 — 나중에 실제 프로필·링크로 교체
export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
  links: [
    { id: "github", title: "💻 GitHub", url: "https://github.com" },
    { id: "linkedin", title: "💼 LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "✍️ Blog", url: "https://velog.io" },
  ],
};
