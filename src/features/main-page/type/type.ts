interface Page {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Image;
  originalimage?: Image;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

interface Namespace {
  id: number;
  text: string;
}

interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

interface Image {
  source: string;
  width: number;
  height: number;
}

interface ContentUrls {
  desktop: Urls;
  mobile: Urls;
}

interface Urls {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface EventsType {
  text: string;
  pages: Page[];
  year: number;
}

export interface ApiResponse {
  events: Array<EventsType>;
}
