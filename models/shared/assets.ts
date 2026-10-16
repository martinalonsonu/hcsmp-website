const ASSETS_BASE_URL =
  "https://hcsmpcb.wordpress.com/wp-content/uploads/2026/09";

export function assetUrl(filename: string): string {
  return `${ASSETS_BASE_URL}/${filename}`;
}

export const brotherhoodLogoUrl = assetUrl("hcsmp-logo-i-1.png");
