// React
import React from 'react';

// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const GetRepositoryDirection = gql`
  query content ($name: String!, $login: String!,$dir:String!){
    repository(name: $name, owner: $login) {
      object(expression: $dir) {
        ... on Tree {
          entries {
            name
            extension
            path
          }
        }
      }
    }
  }
  
`;

const withInfo = graphql(GetRepositoryDirection, {
  options: ({ login = "wangyuanzcm", name = "hiker-coding", dir = "HEAD:tests" }) => {
    return {
      variables: {
        login,
        name,
        dir
      }
    }
  },
  props: ({ data }) => {
    // loading state
    if (data.loading) {
      return { loading: true };
    }
    // error state
    if (data.error) {
      console.error(data.error);
    }
    const { variables, repository, fetchMore } = data;
    const { name, login } = variables;
    const entries = repository.object.entries;
    // OK state
    return {
      name,
      login,
      entries,
      loadMoreEntries: (dir, name, login) => {
        return fetchMore({
          query: GetRepositoryDirection,
          variables: {
            login,
            name,
            dir
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const previousEntries = previousResult.repository.object.entries;
            const newEntries = fetchMoreResult.repository.object.entries;
            return  {
              entries: [...previousEntries, ...newEntries],
              name,
              login
            }
          },
        });
      },
    }
  },
});
const getDirectory =async({ entries, login, name, loadMoreEntries })=>{
  let stack = [];
  for(let item of entries){
    if (!item.extension) {
      let dir = "HEAD:" + item.path;
      let newResult = await loadMoreEntries(dir, name, login);
      const newEntries = newResult.data.repository.object.entries;
      let childrenEntries = await getDirectory({ entries:newEntries, login, name, loadMoreEntries });
      stack= [...stack,...childrenEntries]
    }
  }
  return [...entries,...stack];
}
// Repository
class Repository extends React.Component {
  constructor(props) {
    super(props);

    // states
    this.state = {
      login: props.login,
      name: props.name,
      list:[]
    };
  }

  componentWillReceiveProps(newProps) {
    // DRY
    // const repo = newProps.data.repository.object.entries
    // const repo = newProps.data.repositoryOwner.repository;
    getDirectory(newProps).then((data)=>{
      console.log(data,'list')
      this.setState({
        login: this.props.login,
        name: this.props.name,
        list:data
      });
    })

    // states

  }

  render() {
    return (<div>
      <h2>{this.state.login}/{this.state.name}</h2>
      <ul>
        {this.state.list.map((item,index)=>{
          return <li key={item.path+index}><span>{item.path}</span>--------<span>{item.extension}</span></li>
        })}
      </ul>
    </div>)
  }
}

const RepositoryWithInfo = withInfo(Repository);
export default RepositoryWithInfo;
