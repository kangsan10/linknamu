import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative size-48 overflow-hidden rounded-full bg-emerald-600 ring-4 ring-white shadow-md">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="192px" className="object-cover" priority />
        ) : (
          <span className="flex size-full items-center justify-center text-6xl font-bold text-white">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-10 text-2xl font-bold text-gray-900">{name}</h1>
      <p className="mt-1 text-gray-600">{bio}</p>
    </header>
  );
}
