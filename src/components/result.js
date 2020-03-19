import React from 'react';
 

class Result extends React.Component {
   constructor(props){
     super(props)
     this.state ={
       color:"while",
       resetColor:false
     }
   }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
     this.setState({
       resetColor:nextProps.resetColor,
       color:nextProps.color
     })
  }
   onShowcolor =()=>{
     return {
       color:this.state.color
     }
   }
  render() {
     let item = ()=> {
       return this.state.resetColor ?    <h1>Ket qua</h1>: <h1 style={this.onShowcolor()} >ket qua</h1>
     }
     
   
     
    return (
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">Result</h1>
            </div>
            <div className="panel-body">
                {item()}
            </div>
        </div>
     </div>
 
    )
  }

}
export default Result
