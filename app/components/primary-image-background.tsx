import Image from "next/image";

type PrimaryImageBackgroundProps = {
  alt?: string;
  className?: string;
  quality?: number;
  src: string;
};

export function PrimaryImageBackground({
  alt = "",
  className = "object-cover",
  quality,
  src,
}: PrimaryImageBackgroundProps) {
  return (
    <Image
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={className}
      fill
      preload
      quality={quality}
      sizes="100vw"
      src={src}
    />
  );
}
