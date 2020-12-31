declare module '*.md' {
  type Author = {
    description: string;
    name: string;
  }

  type Attributes = {
    authors: Array<Author>;
    title: string;
    date: Date;
  }
  
  const attributes: Attributes;

  const react: () => JSX.Element;
};
