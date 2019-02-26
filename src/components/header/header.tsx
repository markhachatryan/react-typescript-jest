import * as React from "react";
import "./header.css";

interface IHeaderProps {
  handelSubmitSearch(searchInput: string): void;
}
interface IHeaderState {
  searchInput: string;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  state = {
    searchInput: ""
  };

  handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      searchInput: e.target.value
    });
  };

  submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { handelSubmitSearch } = this.props;
    const { searchInput } = this.state;
    handelSubmitSearch(searchInput);
    this.setState({ searchInput: "" });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="header">
        <form className="header-search" onSubmit={this.submitSearch}>
          <input
            type="search"
            value={searchInput}
            onChange={this.handelChangeInput}
          />
          <button type="submit"> Search </button>
        </form>
      </div>
    );
  }
}

export default Header;
