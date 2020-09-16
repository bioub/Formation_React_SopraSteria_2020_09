import React, { Component } from "react";

class Select extends Component {
  state = {
    opened: false,
  };
  toggleOpened = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };
  render() {
    // let menu;

    // if (this.state.opened) {
    //   menu = (
    //     <div className="menu">
    //       <div className="item">Rouge</div>
    //       <div className="item">Vert</div>
    //       <div className="item">Bleu</div>
    //     </div>
    //   );
    // } else {
    //   menu = <div>Menu fermé</div>
    // }

    const { items = [], selected = "", onSelected = () => {} } = this.props;
    const { opened = false } = this.state;

    const menuItems = items.map((item) => (
      <div className="item" onClick={() => onSelected(item)} key={item}>
        {item}
      </div>
    ));

    return (
      <div className="Select" onClick={this.toggleOpened}>
        <div className="selected">{selected}</div>
        {/* {this.state.opened ? (
          <div className="menu">
            <div className="item">Rouge</div>
            <div className="item">Vert</div>
            <div className="item">Bleu</div>

          </div>
        ) : (
          <div>Menu Fermé</div>
        )} */}
        {opened && <div className="menu">{menuItems}</div>}
      </div>
    );
  }
}

export default Select;
