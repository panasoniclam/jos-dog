import React from 'react';
import {actionAddTask} from './../actions/index'
import {connect} from 'react-redux'
class TaskForm extends React.Component {
  constructor(props){
    super(props) ;
     this.state = {
       id:'',
       name:'',
       status:false
     }
    
  }
  onCloseFor = ()=>{
    this.props.onCloseForm()
  }
 
  handleChange  = (e)=>{
      let  target = e.target ;
      let  name = target.name ;
      let  value = target.value ;
       if(name==='status'){
        value = target.value === 'true'? true : false
    }
      this.setState({
         [name]:value
      })
  }
  
  handleSubmit = (e)=>{
    e.preventDefault()
    // this.props.onSubmit(this.state)
    console.log(this.state)
    this.props.Submit(this.state)
    this.onCloseFor()
  }
  CloseForm = ()=>{
    this.setState({
      name:'',
      status:false
    })
    this.props.onCloseForm()
  }
  
  // componentWillMount = ()=>{
  //   if(this.props.handleEditing){
  //      this.setState({
  //        id: this.props.handleEditing.id,
  //        name: this.props.handleEditing.name,
  //        status: this.props.handleEditing.status
  //      })
  //   }
      
  // }

  // componentWillReceiveProps = nextProps =>{
  //    if(nextProps && nextProps.handleEditing){
  //     this.setState({
  //       id: nextProps.id,
  //       name: nextProps.name,
  //       status: nextProps.status
  //     })
  //    }
  // }
componentWillUpdate = ()=>{
    const  {task} = this.props
    console.log(task)
  }
  render() {

    return (
       
            <div className="panel panel-warning">
              <div className="panel-title">
                <h3>   {this.props.editing ?  'them cong viec' : 'update cong viec' }
                <span className="fa fa-times-circle text-right" 
                onClick={this.onCloseFor}
                
                ></span></h3>
              </div>
              <div className="panel-body">
                <form   onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Ten:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange = {this.handleChange}
                    />
                  </div>
                  <label>trang thai:</label>
                  <select
                    className="form-control"
                    name="status"
                    value={this.state.status}
                    onChange = {this.handleChange}
                  >
                    <option value={true}>Kick hoat</option>
                    <option value={false}>an</option>

                  </select><br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-plus mr-5"></span> luu lai
                      </button>&nbsp;
                      <button type="button" onClick={this.CloseForm}className="btn btn-danger">
                      <span className="fa fa-close mr-5"></span>  huy bo
                      </button> 
                    </div>
                </form>
              </div>
            </div>
           
      
    )
  }
}
const mapStateToProps = state=>{
  console.log(state)
  return{
    task:state.ReducerTaskList
  }
}
const mapDispatchProps = dispath=>{
  return {
    Submit:(task)=>{
       
      dispath(actionAddTask(task))
  }
}
}
export default connect(mapStateToProps,mapDispatchProps)(TaskForm)
