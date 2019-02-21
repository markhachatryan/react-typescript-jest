import * as React from 'react';
import Row from './reposTableRow';

interface IReposTable {
}

const ReposTable = (props: any) => {
  const {repos} = props;
  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="name">Name</th>
        <th scope="owner">Owner User Name</th>
        <th scope="link">Link to Repository</th>
        <th scope="star">Star</th>
      </tr>
      </thead>
      <tbody>
      {repos.map((item: any) => {
        const {id, name, url, viewerHasStarred, owner} = item.node;
        return (
          <Row
            key={id}
            name={name}
            id={id}
            url={url}
            viewerHasStarred={viewerHasStarred}
            owner={owner}
          />
        )
      })}
      </tbody>
    </table>
  );
};

export default ReposTable;