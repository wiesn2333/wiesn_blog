interface MarkdownFile {
  attributes: ArticleProps;
  ReactComponent: React.FC;
}
interface ArticleProps {
  title: string;
  description: string;
  date: string;
  cover: string;
}

const mdFiles = import.meta.glob<MarkdownFile>("../articles/*.md", { eager: true });
const articles = Object.entries(mdFiles).map(
  ([path, { attributes, ReactComponent}]) => ({
    fileName: path.split("/").slice(-1)[0],
    attributes,
    ArticleContent: ReactComponent,
  }),
);

export { articles };
export type { ArticleProps };
