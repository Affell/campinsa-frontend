var noCrawlPages: string[] = ["/teams/bda"];

export default function getCrawlMetaContent(path: string) {
  return noCrawlPages.includes(path) ? "noindex" : "index";
}