import React from 'react';
import './App.css'
import  TaskFrom from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/Tasklist'

 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      task:[] ,//id uniqur , name , status,
      displayTaskForm:false,
      editing: ''
    }
    
  }
   componentDidMount = ()=>{
    if(localStorage && localStorage.getItem('task')){
       let tasks = JSON.parse(localStorage.getItem('task'))
       this.setState({
           task :tasks 
       })
    }
  }
  // onGenneratedata = ()=>{
  //   let tasks =  [{
  //     id:this.generateID(),
  //     name:'learning react',
  //     status:true

  //   },
  //   {
  //     id:this.generateID(),
  //     name:'di boi',
  //     status:false
  //   },
  //   {
  //     id:this.generateID(),
  //     name:'ngu',
  //     status:true
  //   }
  // ] 
  // this.setState({
  //   task:tasks
  // })
  //  localStorage.setItem('task',JSON.stringify(tasks))
  // }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'
    +this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()
    +'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'
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
     localStorage.setItem('task',JSON.stringify(task))
  } 
   findIndex= (id)=>{
      let {task} = this.state ;
      let result = -1
      task.forEach((task,index)=>{
        if(task.id===id){
          return result= index
        }
      })
      return result
   }
  handleStatus =(id)=>{
     let {task} = this.state 
     let index = this.findIndex(id)
     if(index!=-1){
        task[index].status =!task[index].status
      this.setState({
        task:task
      })
      localStorage.setItem('task',JSON.stringify(task))
     }
     
  }
  handleDelete = (id)=>{
    let {task} = this.state
    let index = this.findIndex(id)
     task.splice(index,1)
     if(index!=-1){
       task.splice(index)
       this.setState({
         task:task
       })
       localStorage.setItem('task',JSON.stringify(task))
     }
  }
  handleUpdate = id =>{
      let {task} = this.state ;
      let index = this.findIndex(id)
      if(index!==-1){
         this.onCloseForm()
         this.setState({
           editing:task[index]
         }) 
      }
  }
  render() {
     const {task,displayTaskForm} = this.state ;
     let elementtask  = displayTaskForm ? <TaskFrom onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} 
             handleEditing={this.state.editing}  handleUpdate={this.handleUpdate}
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
              <span className="fa fa-plus mr-5"></span>   Them cong viechhh 
               </button>
               <button className="btn btn-warning" type="button" 
               onClick={this.onGenneratedata}>
              <span className="fa fa-plus mr-5"></span> Generrate data
               </button>
             
            <div className="row mt-15">
              <Control/>
            </div>
          </div>
        </div>
      
              <TaskList tasks={task} handleStatus={this.handleStatus} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
        
      
      </div>
     
    )
  }
   
}
export default App
