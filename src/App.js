import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color:["red","yellow","#111aaa","blue"],
      colorSet:"black",
      fontSize:15
    
    }
  }
   showColor =(color)=>{
    return  {
      backgroundColor:color,
      padding:15,
    }
   }
   setColor =(color)=>{
    
      this.setState({
        colorSet:color
      })
   }
   resetDefault=()=>{
    this.setState({
      colorSet:"black",
      fontSize:15
    })
   }
   grownFont =()=>{
     this.setState((preverius)=>{
       return{
          fontSize:preverius.fontSize+1
       }
       
     })
   }
   reverse=()=>{
     this.setState((previus)=>{
       if(previus.fontSize>15){
           return {
         fontSize:previus.fontSize -1
          }
       }
     })
   }
  render() {
    const elementColor =  this.state.color.map((color,index)=>{
    return  <span key={index} style={this.showColor(color)} onClick={()=>this.setColor(color)}>   </span> })
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <p className="panel-title">Color picker</p>
                </div>
                <div className="panel-body ">
                    {elementColor}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
              <div className="panel  panel-success">
                <div className="panel-heading">
                  <p className="panel-title">Setting fontSize</p>
                </div>
                <div className="panel-body">
                  <span>{this.state.fontSize}px</span>
                  <div className="row">
                    <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                      <button className="btn btn-success" onClick={this.grownFont.bind(this)}>Tang</button>
                    </div>
                    <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                      <button className="btn btn-warning" onClick={this.reverse.bind(this)}>Giam</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-warning" onClick={this.resetDefault.bind(this)}>
            reset default
          </button>
          <div className="row">
             <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
             <div className="panel panel-primary">
                <div className="panel-heading">
                  <p className="panel-title">Result</p>
                </div>
                <div className="panel-body ">
                   <span style={{color:`${this.state.colorSet}`,fontSize:`${this.state.fontSize}px`}} >lamnn8</span>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
