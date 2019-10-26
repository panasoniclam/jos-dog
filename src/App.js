import React from 'react';
import './App.css'
import  TaskFrom from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/Tasklist'

 
class App extends React.Component {
  
  generialdata = ()=>{

  }
  s4 = ()=>{
    return Math.floor((Math.random())*0x1000).toString(16).substring(10)
  }
  render() {
    console.log(this.s4())
  
   
  
    return (
      <div className="container">
        <div className="text-center"><h1>Quan ly cong viec</h1></div>
        <div className="row">
          <div className=   "col-xs-4 col-sm-4 col-md-4 col-lg-4"  >              
              
               <TaskFrom  />
          </div>
          <div className=  "col-xs-8 col-sm-8 col-md-8 col-lg-8"  >
            <button className="btn btn-primary" type="button"  >
              <span className="fa fa-plus mr-5"></span>   Them cong viec
               </button>
               <button className="btn btn-warning" type="button" 
            >
              <span className="fa fa-plus mr-5"></span> Generrate data
               </button>
             
            <div className="row mt-15">
              <Control/>
            </div>
          </div>
        </div>
      
              <TaskList />
        
      
      </div>
     
    )
  }
   
}
export default App
