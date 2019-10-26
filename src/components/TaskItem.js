import React from 'react';
 
class TaskItem extends React.Component {
 
 
  render() {
    let task = {
      id:1,
      name:'ff',
      status:1
    }
    return (
        <>
          <tr>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <button className=  "btn btn-warning" type="button" 
            
             >
                 <span className="fa fa-danger mr-5"> kick hoat</span>
              </button>
             
            </td>
            <td className="text-center">
              <button className="btn btn-danger"  > 
              <span className="fa fa-pencil mr-5"></span>sua
              </button>
              &nbsp;

              <button type="button" className="btn btn-danger" >
                <span className="fa fa-trash mr-5"></span>xoa
              </button>
             
            </td>
          </tr>
         
   </>
       
    )
  }
}
export default TaskItem
