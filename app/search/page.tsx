import fetchNews from '../../utils/fetchNews';
import NewsList from '../NewsList';

type Props = {
  searchParams?: { term: string };
};

const Search = async ({ searchParams }: Props) => {
  if (!searchParams?.term) return null;

  const { term } = searchParams;

  const news: NewsResponse = await fetchNews('general', term, true);

  return (
    <>
      <h1 className="header-title">Search results for: {term}</h1>

      <NewsList news={news} />
    </>
  );
};

export default Search;
