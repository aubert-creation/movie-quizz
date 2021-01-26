import { gql } from '@apollo/client'

export const CASTINGS = gql`
  query GetCasting($page_num: PageRange!) {
    trendingPeople(timeframe: Week, page: $page_num) {
      id,
      name,
      photo {
        medium
      }
    }
  }
`

export const MOVIES_INCLUDE = gql`
  query DiscoverMovies($castId: ID!) {
    discoverMovies(filter: { withCast: { include: [$castId] } }) {
      id
      name
      poster {
        medium
      }
    }
  }
`

export const MOVIES_EXCLUDE = gql`
  query DiscoverMovies($castId: ID!) {
    discoverMovies(filter: { withCast: { exclude: [$castId] } }) {
      id
      name
      poster {
        medium
      }
    }
  }
`
