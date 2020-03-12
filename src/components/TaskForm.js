import React from 'react';
import {actionAddTask} from './../actions/index'
import {connect} from 'react-redux'
class TaskForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      status:true
    }
  }
  handleCloseForm = ()=>{
     this.props.handleCloseForm(false)
  }
  handleChange = (e)=>{
    let target = e.target
    let name = target.name
    let value = target.value
    this.setState({
      [name]:value
    })
    
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.task(this.state)
  }
  render() {
    let {name,status} = this.state
    return (
       
            <div className="panel panel-warning">
              <div className="panel-title">
                <h3>    them cong viec 
                <span className="fa fa-times-circle text-right" 
                onClick={this.handleCloseForm}
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
                      value={name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <label>trang thai:</label>
                  <select
                    className="form-control"
                    name="status"
                    value={status}
                    onChange={this.handleChange}
                  >
                    <option value={true}>Kick hoat</option>
                    <option value={false}>an</option>

                  </select><br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning" >
                      <span className="fa fa-plus mr-5"></span> luu lai
                      </button>&nbsp;
                      <button type="button" onClick={this.handleCloseForm}className="btn btn-danger">
                      <span className="fa fa-close mr-5"></span>  huy bo
                      </button> 
                    </div>
                </form>
              </div>
            </div>
           
      
    )
  }
}
 
export default  (TaskForm)
