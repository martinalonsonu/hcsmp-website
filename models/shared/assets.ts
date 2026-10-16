const ASSETS_BASE_URL =
  "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/09";

export function assetUrl(filename: string): string {
  return `${ASSETS_BASE_URL}/${filename}`;
}

export function wordpressImageUrl(
  imageUrl: string,
  width: number,
  quality = 85,
): string {
  const url = new URL(imageUrl);
  url.searchParams.set("w", String(width));
  url.searchParams.set("quality", String(quality));
  return url.toString();
}

export const brotherhoodLogoUrl = wordpressImageUrl(
  assetUrl("hcsmp-logo-i-1.png"),
  512,
);
