import fetchNews from '../../../utils/fetchNews';
import NewsList from '../../NewsList';
import { categories } from '../../../constants';

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params }: Props) => {
  const { category } = params;
  const news: NewsResponse = await fetchNews(category);

  return (
    <>
      <h1 className="header-title">{category}</h1>

      <NewsList news={news} />
    </>
  );
};

export default NewsCategory;

export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category: category
  }));
};
