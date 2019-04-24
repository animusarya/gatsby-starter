import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleDropdown() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className={isActive ? 'is-active dropdown' : 'dropdown'}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.toggleDropdown}
          >
            <span>Dropdown button</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Dropdown item
            </a>
            <a className="dropdown-item">Other dropdown item</a>
            <a href="#" className="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" className="dropdown-item">
              Other dropdown item
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>
    );
  }
}
