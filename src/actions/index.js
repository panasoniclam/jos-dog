import * as TYPE from './../constands/index'
const actionListAll = payload =>({
    type:TYPE.LIST_ALL,
    payload
})
const actionAddTask = payload=>{
    
    return{
          type:TYPE.ADD_TASK,
    payload
    }
  
}

export {
    actionAddTask,actionListAll
}