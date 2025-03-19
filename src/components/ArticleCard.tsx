import { ArticleProps } from "../scripts/articles";

function ArticleCard({ title, description, date, cover }: ArticleProps) {
  return (
    <div className="">
      <img className="h-48 object-cover" src={cover} alt={title} />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="mb-4">{description}</p>
        <span className="text-sm">{date}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
