function travelsFilter(state, action) {

  if (typeof state === 'undefined') {
    return {

    }
  }

  switch(action.type){
      case "filterSet":
          return action.data;
        //break;
      default:
        return {}
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  //return state
}

export default travelsFilter;