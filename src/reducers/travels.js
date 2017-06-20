function travels(state, action) {

  if (typeof state === 'undefined') {
    return []
  }

  switch(action.type){
      case "filterSet":
          return action.data;
        //break;
      default:
        return {}
  }
}

export default travels;