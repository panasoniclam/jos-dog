import React from 'react';
 
import TaskItem from './TaskItem';
import {connect} from 'react-redux'
class TaskList extends React.Component {
 constructor(props){
   super(props)
   this.state = {
     filterName:'',
     filterStatus:1,
   }
 }
 onChange = (event)=>{
    let name = event.target.name
    let value = event.target.value
      this.props.onSearch(name === 'filterName' ? value : this.state.filterName, name  === 'filterStatus' ?  value : this.state.filterStatus)   
      this.setState({
      [name]:value
    })
 }
   componentWillMount = ()=>{
      let task  = JSON.parse(localStorage.getItem('task'))
      this.setState({
        task:task
      })
   }
  render() {
      const { data} = this.props
      const element = data.map((task,index)=>{
                 return <TaskItem   key={data.id} index={index} task={task}
                 handleStatus={this.props.handleStatus}
                 handleDelete={this.props.handleDelete}
                 handleUpdate={this.props.handleUpdate}
               />
                })
     return (
        <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">ten</th>
            <th className="text-center">trang thai</th>
            <th className="text-center">hanh dong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
              type="text"
              className="form-control"
              name="filterName"
              value={this.state.filterName}
              onChange={this.onChange}
              />
            </td>
            <td>
              <select 
              className="form-control"
              name="filterStatus"
              value={this.state.filterStatus}
              onChange={this.onChange}
              >
               <option value={-1}>tat ca</option>
               <option value={0}>an</option>
               <option value={1}> kich hoat</option>
              </select>
            </td>
            <td></td>
          </tr>
            {/* <TaskItem/> */}
              { element }
        </tbody>
      </table>   
      </div>
      </div>
    )
  }
}
const mapStateToProps =  state=>{
  return{
    data:state.ReducerTaskList
  }
}
export default connect(mapStateToProps,null)(TaskList)
