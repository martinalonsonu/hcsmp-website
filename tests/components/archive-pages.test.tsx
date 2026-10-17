import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DocumentArchive } from "@/components/archivo/document-archive";
import { PhotoAlbumArchive } from "@/components/archivo/photo-album-archive";
import { VideoArchive } from "@/components/archivo/video-archive";
import { documents, albums, videos } from "@/models/archivo/archive-content";

describe("archive components", () => {
  it("links each institutional document to its published file", () => {
    render(<DocumentArchive />);
    for (const document of documents) {
      expect(screen.getByRole("link", { name: new RegExp(document.title, "i") })).toHaveAttribute("href", document.href);
    }
  });

  it("shows public photo albums with their original Facebook URLs", () => {
    render(<PhotoAlbumArchive />);
    expect(screen.getAllByRole("link")).toHaveLength(albums.length);
    expect(screen.getByRole("link", { name: new RegExp(albums[0].title, "i") })).toHaveAttribute(
      "href",
      `https://www.facebook.com/media/set/?set=a.${albums[0].id}&type=3`,
    );
  });

  it("embeds each video with a descriptive title and privacy friendly source", () => {
    render(<VideoArchive />);
    expect(screen.getAllByTitle(/HCSMP/i)).toHaveLength(videos.length);
    expect(screen.getByTitle(videos[0].title)).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${videos[0].id}`,
    );
  });
});
