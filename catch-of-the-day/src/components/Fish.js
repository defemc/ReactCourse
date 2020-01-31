import React from "react";

class Fish extends React.Component {
    alertar = () =>{
        alert(this.props.details.img);
    }

  render() {
    return (
      <li className="menu-fish">
        <img onClick={this.alertar} src={this.props.details.img} alt={this.props.details.name} />
      </li>
    );
  }
}

export default Fish;
