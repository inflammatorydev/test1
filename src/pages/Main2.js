import React, { Component} from 'react'

class Main2 extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    // console.log('this.props4', this.props);
    return this.props.render(this.props);
    // return <div>A hello world</div>;
  }

} 

export default Main2
