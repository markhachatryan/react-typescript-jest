import * as React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {Query} from "react-apollo";
import {OWNER_REPOSITORY} from '../../query';
import Spinner from "../spiner/spiner";

const Owner = (props: any) => {
  const login = props.match.params.login;
  return (
    <div>

      <Query
        query={OWNER_REPOSITORY}
        variables={{
          login: login
        }}
      >
        {({data, error, loading}) => {
          if (loading) return <div className="home-spinner"><Spinner/></div>;
          if (error) {
            return (
              <>
                <div className="alert alert-danger" role="alert">
                  {error.message}
                </div>
                <br/>
                <br/>
                <hr/>
                <Link to="/" className="btn btn-primary btn-lg" role="button">Home</Link>
              </>
            )
          }
          console.log(data.user);
          return (
            <div className="jumbotron">
              <div>
                <div style={{width: "150px"}}><img src={data.user.avatarUrl} alt="..." style={{width: "100%"}}/></div>
                <h1 className="display-4">{data.user.name}</h1>
              </div>
              <p className="lead">location : {data.user.location}</p>
              <hr className="my-4"/>
              <p>email : {data.user.email}</p>
              <Link to="/" className="btn btn-primary btn-lg" role="button">Home</Link>
            </div>
          )
        }}
      </Query>

    </div>
  )
};

export default withRouter(Owner);