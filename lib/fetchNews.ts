import { gql } from 'graphql-request';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const GET_QUERY = gql`
    query MyQuery {
      myQuery(access_key: "e3b4916b8b2e2c8214301e068036dd8f") {
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
  // Fetch function with Next.js caching ...
  // Sort function by images vs not images present
  // return res
};

export default fetchNews;
