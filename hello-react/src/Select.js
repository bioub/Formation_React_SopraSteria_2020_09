import React, { Component } from "react";
import styles from './Select.module.scss';
import classNames from 'classnames';

class Select extends Component {
  hostRef = React.createRef();
  state = {
    opened: false,
  };
  toggleOpened = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  _documentClickListener = (event) => {
    const hostEl = this.hostRef.current;
    
    if (!hostEl.contains(event.target)) {
      this.setState({
        opened: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this._documentClickListener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._documentClickListener);
  }

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
      <div className={classNames(styles.item, {[styles.active]: selected === item})} onClick={() => onSelected(item)} key={item}>
        {item}
      </div>
      // <div className={selected === item ? styles.item + ' ' + styles.active : styles.item} onClick={() => onSelected(item)} key={item}>
      //   {item}
      // </div>
    ));

    return (
      <div ref={this.hostRef} className={styles.host} onClick={this.toggleOpened}>
        <div className={styles.selected}>{selected}</div>
        {/* {this.state.opened ? (
          <div className="menu">
            <div className="item">Rouge</div>
            <div className="item">Vert</div>
            <div className="item">Bleu</div>

          </div>
        ) : (
          <div>Menu Fermé</div>
        )} */}
        {opened && <div className={styles.menu}>{menuItems}</div>}
      </div>
    );
  }
}

export default Select;
