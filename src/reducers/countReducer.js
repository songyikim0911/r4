
const countInitState = {count:0}

export default (state = countInitState, action)=>{

    console.log("countReducer......." + action)

    const {type} = action

    if(type === 'INC'){
        return {count: state.count+1}
    }else{
        return {count: state.count-1}
    }

    return state

}