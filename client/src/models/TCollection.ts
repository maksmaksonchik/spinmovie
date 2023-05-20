export type TCollection = {
  id: number;
  title: string;
  description: string;
  items: number[];
}

export type TCollectionsResponse = {
  rows: TCollection[];
  count: number;
}
