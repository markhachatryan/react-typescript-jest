import * as React from 'react';
import ButtonStar from "../buttons/buttonStar";
import {Link} from 'react-router-dom';

interface IProps {
  id: string,
  url: string,
  viewerHasStarred: boolean,
  name: string,
  owner: {
    login: string,
    id: string,
  }
}

const Row = (props: IProps) => {
  const {name, id, url, viewerHasStarred, owner} = props;
  return (
    <tr>
      <td>{name}</td>
      <td><Link to={`/owner/${owner.login}`}>{owner.login}</Link></td>
      <td><a href={url} target="_blank">go to GitHub</a></td>
      <td>
        <ButtonStar
          id={id}
          viewerHasStarred={viewerHasStarred}
        />
      </td>
    </tr>
  )
};

export default Row;