import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 따뜻한 색 그림자로 살짝 떠 있는 느낌 */}
      <div className="relative size-28 overflow-hidden rounded-full bg-orange-300 ring-4 ring-white/80 shadow-[0_12px_32px_-8px_rgb(194_105_50/0.45)]">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="112px" className="object-cover" priority />
        ) : (
          <span className="flex size-full items-center justify-center text-4xl font-semibold text-white">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-800">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{bio}</p>
    </header>
  );
}
