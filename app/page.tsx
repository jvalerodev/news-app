import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';
import { categories } from '../constants';

const Home = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
};

export default Home;
