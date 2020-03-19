import React from 'react';
 

class Setting extends React.Component {
 constructor(props){
   super(props)
   this.state ={
     fontSize:5
    
   }
 
 }
  componentWillReceiveProps(nextProps,nextState){
    console.log(nextProps,nextState)
  }
  render() {
  
    return (
        <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
        <div class="panel panel-warning">
           <div className="  panel-heading">
                <h3 className=" panel-title">Setting font-size</h3>
           </div>
           <div className="panel-body">
                <div className="row">
                   <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                     <button className="btn btn-warning"  >Grownd</button>
                   </div>
                   <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                     <button className="btn btn-default">Down</button>
                   </div>
                </div>
           </div>
        </div>
      </div>
    )
  }

}
export default Setting
