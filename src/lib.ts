export interface IHeader {
  left1: string;
  left2: string;
  title: string;
  right1: string;
  right2: string;
}

export interface IDescription {
  type: 'bullets' | 'paragraphs';
  entries: string[];
}

export interface IMainEntries {
  title?: string;
  date?: string;
  description: IDescription;
}

export interface IMain {
  title?: string;
  entries: IMainEntries[];
}

export interface IResume {
  header: IHeader;
  main: IMain[];
}
