import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  return <div>{/* NewsList news */}</div>;
}

export default Homepage;
