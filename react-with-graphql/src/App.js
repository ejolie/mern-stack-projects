import React, { Component } from 'react';
import axios from 'axios';
import { resolve } from 'url';

const TITLE = 'React GraphQL Client';

// axios
const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
})

// graphql query
// - use template literal for variables
// const getIssuesOfRepositoryQuery = (organization, repository) => `
// {
//   organization(login: "${organization}") {
//     name
//     url
//     repository(name: "${repository}") {
//       name
//       url
//       issues(last: 5) {
//         edges {
//           node {
//             id
//             titl
//             url
//           }
//         }
//       }
//     }
//   }
// }
// `;
// - graphql inline variables
const GET_ISSUES_OF_REPOSITORY = `
  query (
    $organization: String!, 
    $repository: String!,
    $cursor: String
  ) {
    organization(login: $organization) {
      name
      url
      repository(name: $repository) {
        name
        url
        issues(first: 5, after: $cursor, states: [OPEN]) {
          edges {
            node {
              id
              title
              url
              reactions(last: 3) {
                edges {
                  node {
                    id
                    content
                  }
                }
                totalCount
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getIssuesOfRepository = (path, cursor) => {
  const [organization, repository] = path.split('/');

  return axiosGitHubGraphQL.post('', { 
    query: GET_ISSUES_OF_REPOSITORY,
    variables: { organization, repository, cursor },
  });
}

const resolveIssuesQuery = queryResult => () => ({
  organization: queryResult.data.data.organization,
  errors: queryResult.data.errors,
})

class App extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
  };

  componentDidMount() {
    // fetch data (make an initial request)
    this.handleFetchFromGitHub(this.state.path);
  }

  handleChange = event => {
    this.setState({
      path: event.target.value,
    })
  }

  handleSubmit = event => {
    // fetch data
    this.onFetchFromGitHub(this.state.path);
    event.preventDefault();
  }

  handleFetchFromGitHub = (path, cursor) => {
    getIssuesOfRepository(path, cursor).then(queryResult =>
      this.setState(resolveIssuesQuery(queryResult, cursor)),
    );
  }

  handleFetchMoreIssues = () => {
    const {
      endCursor,
    } = this.state.organization.repository.issues.pageInfo;

    this.handleFetchFromGitHub(this.state.path, endCursor)
  }

  render() {
    const { path, organization, errors } = this.state;

    return (
      <div>
        <h1>{TITLE}</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <input
            id="url"
            type="text"
            value={path}
            onChange={this.handleChange}
            style={{
              width: '300px'
            }}
          />
          <button type="submit">Search</button>
        </form>

        <hr />

        { organization ? (
          <Organization 
            organization={organization} 
            errors={errors} 
            handleFetchMoreIssues={this.handleFetchFromGitHub}
          />
        ) : (
          <p>No information yet...</p>
        )}
      </div>
    );
  }
}

const Organization = ({ organization, errors, handleFetchMoreIssues }) => {
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    )
  }

  return (
    <div>
      <p>
        <strong>Issues from Organization</strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository 
        repository={organization.repository}
        handleFetchMoreIssues={handleFetchMoreIssues}
      />
    </div>
  );
};

const Repository = ({ repository, handleFetchMoreIssues }) => (
  <div>
    <p>
      <strong>In Repository:</strong>
      <a href={repository.url}>{repository.name}</a>
    </p>

    <ul>
      {repository.issues.edges.map(issue => (
        <li key={issue.node.id}>
          <a href={issue.node.url}>{issue.node.title}</a>

          <ul>
            {issue.node.reactions.edges.map(reaction => (
              <li key={reaction.node.id}>{reaction.node.content}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <hr />
    <button onClick={handleFetchMoreIssues}>More</button>
  </div>
)

export default App;