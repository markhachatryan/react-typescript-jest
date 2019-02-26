import * as React from 'react';
import {Mutation} from "react-apollo";
import { STAR_REPOSITORY, UNSTAR_REPOSITORY } from "../../query";

interface IButtonStar {
  id: string;
  viewerHasStarred: boolean;
}

const ButtonStar = (props: IButtonStar  ) => {
    const {id, viewerHasStarred} = props;
    const action = viewerHasStarred ? "Unstar" : "Star";
    const actionQuery = viewerHasStarred ? UNSTAR_REPOSITORY : STAR_REPOSITORY;
    return (
        <Mutation mutation={actionQuery} variables={{ id }}>
          {(starRepository: any) => (
            <button
              className="btn btn-primary"
              type="button"
              onClick={starRepository}
            >
              {action}
            </button>
          )}
        </Mutation>
    )
};

export default ButtonStar