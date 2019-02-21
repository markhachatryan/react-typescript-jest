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
        <th scope="owner">Link to Repository</th>
        <th scope="col">Star</th>
      </tr>
      </thead>
      <tbody>
      {repos.map((item: any) => {
        const {id, name, url, viewerHasStarred} = item.node;
        return (
          <Row
            key={id}
            name={name}
            id={id}
            url={url}
            viewerHasStarred={viewerHasStarred}
          />
        )
      })}
      </tbody>
    </table>
  );
};

export default ReposTable;