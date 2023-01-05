import { categories } from '../constants';
import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';
import response from '../response.json';
import sortNewsByImage from '../utils/sortNewsByImage';

const Home = async () => {
  let news: NewsResponse = response;
  news = sortNewsByImage(news);
  // const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
};

export default Home;
