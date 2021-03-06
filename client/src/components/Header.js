import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Google Login</a></li>;
      default:
        return [
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/promosList' : '/'}
            className="left brand-logo"
          >
          vuePress
          </Link>
          <ul className="right">
            <li key="3">
              <Link
                to={this.props.auth ? '/promoInstance/new' : '/'}
              >Add New</Link>
            </li>
              {this.renderContent()}
          </ul>

        </div>

      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
