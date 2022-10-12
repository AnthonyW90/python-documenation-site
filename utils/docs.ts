export interface Document {
  title: string,
  href: string,
}

export interface Pages {
  docs: Document[],
  labs?: Document[],
  mob?: Document[],
  practice?: Document[],
}

export interface Section {
  title: string,
  pathPrefix: string,
  pages: Pages,
}

export interface Subject {
  title: string,
  pathPrefix: string,
}