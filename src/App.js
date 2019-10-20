import React from 'react';
import './App.css'
import  TaskFrom from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/Tasklist'
import TaskItem from './components/TaskItem';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      task:[] ,//id uniqur , name , status,
      displayTaskForm:false

    }
  }
  onGenneratedata = ()=>{
    let tasks =  [{
      id:this.generateID(),
      name:'learning react',
      status:true

    },
    {
      id:this.generateID(),
      name:'di boi',
      status:false
    },
    {
      id:this.generateID(),
      name:'ngu',
      status:true
    }
  ] 
  this.setState({
    task:tasks
  })
   localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'
    +this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()
    +'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'
  }
  componentWillMount = ()=>{
    if(localStorage && localStorage.getItem('tasks')){
      let task = JSON.parse(localStorage.getItem('tasks'))
       this.setState({
         task:task
       })
    }
  }
  handleDisplayForm = ()=>{
    this.setState({
      displayTaskForm:!this.state.displayTaskForm
    })
  }
  onCloseForm = ()=>{
     this.handleDisplayForm()
  }
  onSubmit = (data)=>{
    var {task }=  this.state 
     console.log( typeof task)
     data.id = this.generateID()
     task.push(data)
    this.setState({
      task:task
    })
     localStorage.setItem('tasks',JSON.stringify(task))
  }
  handleStatus = (id)=>{
     let {task}= this.state
     let index = this.findIndex(id)
      console.log(index)
     if(index!==-1){
       task[index].status = !task[index].status  
       this.setState({
       task: task
           })
           localStorage.setItem('tasks',JSON.stringify(task))
     }
  }
  findIndex=(id)=>{
    let {task} = this.state
    let result = -1
    task.forEach((task,index)=>{
      if(task.id===id){
       
         return result =index
      } 
    })
    return result;
  }
  render() {
     const {task,displayTaskForm} = this.state ;
     let elementtask  = displayTaskForm ? <TaskFrom onCloseForm={this.onCloseForm} onSubmit={this.onSubmit}
     
     />  :''
    return (
      <div className="container">
        <div className="text-center"><h1>Quan ly cong viec</h1></div>
        <div className="row">
          <div className={this.displayTaskForm ?  "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''} >
               
               {elementtask}
          </div>
          <div className= {this.displayTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : ''}>
            <button className="btn btn-primary" type="button"  onClick={this.handleDisplayForm}>
              <span className="fa fa-plus mr-5"></span>Them cong viec
               </button>
               <button className="btn btn-warning" type="button" 
               onClick={this.onGenneratedata}>
              <span className="fa fa-plus mr-5"></span> Generrate data
               </button>
            {/* search-sort */}
            <div className="row mt-15">
              <Control/>
            </div>
          </div>
        </div>
      
              <TaskList tasks={task} handleStatus = {this.handleStatus}  />
        
      
      </div>
    )
  }
}
export default App
