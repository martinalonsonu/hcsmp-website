import React from "react";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => cleanup());

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) =>
    React.createElement(
      "a",
      {
        href,
        ...props,
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
          props.onClick?.(event);
          event.preventDefault();
        },
      },
      children,
    ),
}));

vi.mock("next/image", () => ({
  default: ({
    alt,
    fill: _fill,
    height: _height,
    priority: _priority,
    preload: _preload,
    quality: _quality,
    sizes: _sizes,
    src,
    width: _width,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & Record<string, unknown>) => {
    void [_fill, _height, _priority, _preload, _quality, _sizes, _width];
    return React.createElement("img", { alt, src, ...props });
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
  useRouter: vi.fn(() => ({ push: vi.fn(), replace: vi.fn(), refresh: vi.fn() })),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
