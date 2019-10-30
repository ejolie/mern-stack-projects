import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { REPO_QUERY } from "./queries";
import DisplayRepos from "./DisplayRepos";

class MyRepo extends Component {
  handleMore = (data, fetchMore, current) => {
    fetchMore({
      variables: { last: current + 10 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign(prev, fetchMoreResult);
      }
    });
  };

  render() {
    return (
      <Query query={REPO_QUERY} variables={{ last: 10 }}>
        {({ data, loading, error, fetchMore, refetch }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;

          let current = data.viewer.repositories.edges.length;

          return (
            <DisplayRepos
              current={current}
              refetch={refetch}
              data={data}
              handleMore={() => this.handleMore(data, fetchMore, current)}
            />
          );
        }}
      </Query>
    );
  }
}

export default MyRepo;
