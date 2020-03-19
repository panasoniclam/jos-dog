import React from 'react';
 
class pickerColor extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       color:["red","yellow","blue","#111aaa"]
     }
     this.changeColor= this.changeColor.bind(this)
   }
  showColor =(color)=>{
    return {
        backgroundColor:color,
        width:"50px",
        height:"50px",
        disPlay:"inline",
        marginTop:"20px"
    }
  }
  changeColor =(color)=>{
       this.props.changeColor(color)
       
  }
  render() {
    let item  = this.state.color.map((color,index)=>{
    return(  <div  key={index} style={this.showColor(color)}  onClick={()=>this.changeColor(color) }>  </div>)
    })
    return (
        <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">picker color</h3>
              </div>
              <div className="panel-body">
                 {item}
                 <hr/>
              </div>
            </div>
          </div>
    )
  }

}
export default pickerColor;
