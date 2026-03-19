export interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  formats: Record<string, string>;
}
