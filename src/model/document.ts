export default class Document {
  name: string;
  date: string;
  icon: string;
  src: string;

  constructor(name: string, date: string, icon: string, src: string) {
    this.name = name;
    this.date = date;
    this.icon = icon;
    this.src = src;
  }
}

export const DOCUMENTS_DATA: Document[] = [
  new Document(
    "Endorsement Letter",
    "May 4, 2025",
    "pdf",
    "https://drive.google.com/file/d/1MyBKt-sS5DA2Dk-asO59Ffb48IrWW56w/view?usp=sharing"
  ),
  new Document(
    "Confirmation Letter",
    "May 4, 2025",
    "pdf",
    "https://drive.google.com/file/d/13pABuhW7LpqxksWcLbTOxqFdKqZxw-s1/view?usp=sharing"
  ),
  new Document(
    "Deed of Undertaking (DOU)",
    "May 4, 2025",
    "pdf",
    "https://drive.google.com/file/d/1xqaXq3ZexuYTq__XjmZIccT7S1Xs9Gmk/view?usp=sharing"
  ),
  new Document(
    "Certificate of Completion",
    "May 4, 2025",
    "pdf",
    "https://drive.google.com/file/d/12cJmsd4Md9-kY5PtCmSYVUxkSbTfJEIr/view?usp=sharing"
  ),
];
