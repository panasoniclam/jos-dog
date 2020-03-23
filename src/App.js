import React from 'react';
import './App.css'
 
 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color:["red","#111aaa","yellow","blue"],
       reset: false,
       colorDefault:"black",
        // fontSize:15
    }
  }
  showColor = (color)=>{
    if(this.state.reset===false){
      return  {
       backgroundColor:color,
       padding:15,
       margin:10
     }
    }
    
  }
  changeColor = ( color)=>{  
      if(this.state.reset===false){
          this.setState((prevenvius)=>{
          return  {
            colorDefault:color
          }
          })  
      } 

  }

   componentDidMount=()=>{
    console.log(this.state)
    
   }
  reset = () =>{
      this.setState((previus)=>{
        return {
           reset:true
        }
      })
  }
  render() {
     let elementColor =  this.state.color.map((color,index)=>{
       return  <span key={index} style={this.showColor(color)} onClick={()=>this.changeColor(color)}></span>
     })
    return (
      <div className="container mt-50">
          <div className="row">
             <div className="col-md-6 col-lg-6 col-xs-6 col-sm"> 
                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h1 className="panel-title">colorSpicker</h1>
                  </div>
                  <div className="panel-body">
                    {elementColor}
                  </div>
                </div>
             </div>
             <div className="col-md-6 col-lg-6 col-xs-6 col-sm"> 
                <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h1 className="panel-title">Setting FontSize</h1>
                  </div>
                  <div className="panel-body">
                     15px
                  </div>
                </div>
             </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h1 className="panel-title">Result</h1>
                </div>
                <div className="panel-body">
                  <span style={{color:this.state.colorDefault}}>lamnn8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h1 className="panel-title">reset</h1>
                </div>
                <div className="panel-body">
                   <button className="btn btn-success" onClick={()=>this.reset()} >reset default

                   </button>
                </div>
              </div>
            </div>
          </div>
      </div>

    )
  }

}
export default App
