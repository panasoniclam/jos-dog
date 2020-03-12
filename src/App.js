import React from 'react';
import './App.css'
import  TaskFrom from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/Tasklist'

 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openForm:false,
      tasks:[]
    }
  }
  generialId = ()=>{
      return this.s4()+this.s4()+"-"+this.s4()+this.s4()+"-"+this.s4()+this.s4()
  }
  generialData = ()=>{
     let task = [
       {
         id:this.generialId(),
         name:'di boi',
         status:1
       },  {
        id:this.generialId(),
        name:'hoc lap trinh',
        status:0
      },  {
        id:this.generialId(),
        name:'hoc golang',
        status:-1
      }
     ]
     return task
  }
  s4 = ()=>{
    return Math.floor((Math.random()+1)*0x10000).toString(16).substring(1)
  }
  handleOpenForm = ()=>{
    this.setState({
      openForm:true
    })
  }
  handleCloseForm = (data)=>{
     this.setState({
       openForm:data
     })
  }

  task = data=>{
    let {tasks} = this.state
    data.id = this.generialId()
    tasks.push(data)
     this.setState({
       tasks:tasks
     })
     localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  componentWillMount = ()=>{
    if(localStorage && localStorage.getItem('tasks')){
      let data = JSON.parse( localStorage.getItem('tasks'))
      this.setState({
        tasks:data
      })
    }
  }
  render() {
    let data =  this.state.tasks
     let elementTask  =  this.state.openForm ? <TaskFrom handleCloseForm={this.handleCloseForm} task={this.task}/> :''
    return (
      <div className="container">
        <div className="text-center"><h1>Quan ly cong viec</h1></div>
        <div className="row">
          <div className=   "col-xs-4 col-sm-4 col-md-4 col-lg-4"  >              
              
               {/* <TaskFrom  /> */}
               {elementTask}
          </div>
          <div className=  "col-xs-8 col-sm-8 col-md-8 col-lg-8"  >
            <button className="btn btn-primary" type="button" onClick={this.handleOpenForm} >
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
      
              <TaskList tasks={data}  />
        
      
      </div>
     
    )
  }
   
}
export default App
