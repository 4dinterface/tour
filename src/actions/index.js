export const searchTravel = (findText) => {
  return {
    type: 'SEARCH_TRAVEL',    
    findText
  }
}

export const setTravelFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}