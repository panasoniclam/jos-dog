import React from 'react';
import './App.css'
import PickerColor from  './components/pickerColor'
import Setting from  './components/setting'
import Reset from  './components/reset'
import Result from './components/result'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color:"",
      resetColor:false,
      fontSize:10
    }

  }
  changeColor =(color)=>{
     this.setState({
       color:color
     })
  }
  resetColor=(reset)=>{
   this.setState({
     resetColor:!reset
   })
  }
  componentWillReceiveProps(){
    console.log("componentwill receive props app")
  }
  chnage =()=>{
    this.setState({
      resetColor:true,
      fontSize:20
    })
  }
  render() {
    
    return (
      <div className="container mt-50">
        <div className="row">
          <button onClick={this.chnage}>Click</button>
          <PickerColor changeColor={this.changeColor}/>
           <Setting resetColor={this.state.resetColor}  />
        </div>
        <div className="row">
            <Reset    />
        </div>
        <div className="row">
           <Result   resetColor={this.state.resetColor} />
        </div>

      </div>

    )
  }

}
export default App
