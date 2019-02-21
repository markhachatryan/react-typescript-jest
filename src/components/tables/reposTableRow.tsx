import * as React from 'react';
import ButtonStar from "../buttons/buttonStar";

interface IProps {
  id: string,
  url: string,
  viewerHasStarred: boolean,
  name: string,
}

const Row = (props: IProps) => {
  const {name, id, url, viewerHasStarred} = props;
  return (
    <tr>
      <td>{name}</td>
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