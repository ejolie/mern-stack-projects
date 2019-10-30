import React from "react";

const DisplayRepos = props => {
  const { current, data, refetch } = props;

  return (
    <div>
      <h2>First {current} repositories</h2>
      {data.viewer.repositories.edges.map(({ node }) => (
        <ul className="list" key={node.id}>
          <li>{node.name}</li>
          <li>stars {node.stargazers.totalCount}</li>
        </ul>
      ))}
      <button onClick={props.handleMore}>Load more</button>
    </div>
  );
};

export default DisplayRepos;
