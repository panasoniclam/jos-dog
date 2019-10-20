import React from 'react';
 
import TaskItem from './TaskItem';
 
class TaskList extends React.Component {
 
 
  render() {
      const {tasks,a} = this.props
      const element = tasks.map((task,index)=>{
                 return <TaskItem   key={tasks.id} index={index} task={task}
                  handleStatus = {this.props.handleStatus}
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
              />
            </td>
            <td>
              <select 
              className="form-control"
              name="filterStatus"
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
export default TaskList
