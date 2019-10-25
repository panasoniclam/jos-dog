import * as TYPE from './../constands/index'
const data = JSON.parse(localStorage.getItem('task'))
const initalState =   data ? data : []
  const  s4 = ()=>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
const   generateID=()=>{
    return s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()
  }
export default  (state=initalState,action)=>{
    switch(action.type){
        case TYPE.LIST_ALL:
            return {
                ...state,
            }
        case TYPE.ADD_TASK:
             const task  = {
                 id:generateID(),
                 name:action.payload.name,
                 status:action.payload.status === 'true' ? true : false  
             }
             state.push(task)
             localStorage.setItem('task',JSON.stringify(state))
        default:
            break
    }
    return state
}