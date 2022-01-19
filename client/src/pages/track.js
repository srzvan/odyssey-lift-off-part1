import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Layout, QueryResult, TrackDetail } from '../components';

export const GET_TRACK = gql`
  query getTrack($id: ID!) {
    track(id: $id) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        title
        length
        id
      }
      description
    }
  }
`;

const Track = ({ id }) => {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { id },
  });

  return (
    <Layout>
      <QueryResult data={data} loading={loading} error={error}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
