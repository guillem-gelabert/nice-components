import React from 'react';
import List from './List/List';
import Tab from './Tab/Tab';
import Panels from './Panels/Panels';
import './Tabs.css';

class Tabs extends React.Component {
  static List = props => <List {...props} />;
  static Tab = props => <Tab {...props} />;
  static Panels = props => <Panels {...props} />;
  static Panel = props => <div className="panel">{props.children}</div>;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      activeIndex: this.state.activeIndex,
      onClick: activeIndex => this.setState({ activeIndex }),
    }));
    return <div className="tabs-container">{children}</div>;
  }
}

export default Tabs;
