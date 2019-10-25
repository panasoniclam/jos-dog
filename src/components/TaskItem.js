import React from 'react';
 
class TaskItem extends React.Component {
 
  handleStatus = ()=>{
    this.props.handleStatus(this.props.task.id)
  }
  handleDelete =()=>{
    this.props.handleDelete(this.props.task.id)
  }
  handleUpdate= ()=>{
    this.props.handleUpdate(this.props.task.id)
  }
  render() {
      const {task,index} = this.props
    return (
        <>
          <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <button className={ task.status ? "btn btn-primary" : "btn btn-warning" }type="button" 
             onClick={this.handleStatus}
             >
                 <span className="fa fa-danger mr-5">{ task.status ? "kick hoat" :"an"}</span>
              </button>
             
            </td>
            <td className="text-center">
              <button className="btn btn-danger" onClick={this.handleUpdate}> 
              <span className="fa fa-pencil mr-5"></span>sua
              </button>
              &nbsp;

              <button type="button" className="btn btn-danger" onClick={this.handleDelete}>
                <span className="fa fa-trash mr-5"></span>xoa
              </button>
             
            </td>
          </tr>
         
   </>
       
    )
  }
}
export default TaskItem
