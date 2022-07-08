const todoReducer = ( state, action ) => {
  const { type } = action; 

  switch( type ){
    case 'ADD_TASK': 
      return [ ...state, action.payload ]; 
    case 'REMOVE_TASK':
      return state.filter( item => item.id != action.payload.id ); 
    case 'MARK_AS_DONE':
      return state.map( item => { if(item.id === action.payload.id){ item.status = 'completed'; } return item; })
    default:
      return state;
  }
}

export default todoReducer;