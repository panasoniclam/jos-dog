import React from 'react';
 

class Reset extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      resetColor:false
    }
  }
  resetColor =()=>{
    this.setState({
      resetColor:!this.state.resetColor
    })
    // this.props.resetColor(this.state.resetColor)
  }
  componentWillReceiveProps(nextProps,nextState){
    console.log(nextProps)
  }
  
  render() {
    console.log("render")
    return (
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">not change</h1>
            </div>
            <div className="panel-body">
               <button className="btn btn-primary" onClick={this.resetColor}>Reset</button>
            </div>
        </div>
     </div>
    )
  }

}
export default Reset
