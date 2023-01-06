import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next.js 13 catching...
  const res = await fetch('https://machali.stepzen.net/api/jvnews/__graphql', {
    method: 'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: { revalidate: isDynamic ? 0 : 5400 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords
      }
    })
  });

  const { data } = await res.json();

  // Sort function by images vs. not images present
  const newsResponse = sortNewsByImage(data.myQuery);

  return newsResponse;
};

export default fetchNews;
