import * as React from 'react';
import {SEARCH_QUERY} from "../../query";
import {Query} from "react-apollo";
import Spinner from "../spiner/spiner";
import Header from "../header/header";
import ReposTable from "../tables/reposTable";
import './home.scss';


interface IState {
  searchQuery: string,
}

interface IProps {
}


class Home extends React.Component <IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      searchQuery: "",
    }
  }

  handelSubmitSearch = (searchInput: string) => {
    this.setState({searchQuery: searchInput})
  };

  render() {
    const {searchQuery} = this.state;
    return (
      <div>
        <Header
          handelSubmitSearch={this.handelSubmitSearch}
        />
        <Query
          query={SEARCH_QUERY}
          variables={{
            Search: searchQuery
          }}
        >
          {({data, loading}) => {
            if (loading) return <div className="home-spinner"><Spinner/></div>;
            if (data) {

              if (data.search.edges.length > 1) {
                return <ReposTable repos={data.search.edges}/>
              }
            }
            return <div>YOU DO NOT SEARCH YET </div>
          }}
        </Query>
      </div>
    )
  }
}

export default Home;