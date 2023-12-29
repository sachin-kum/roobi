export const initialState = {
    user_data:null,
    efsef:null,
    user_defsefesfata:null,
    useresfesf_data:null,
    user_sefsefdata:null,
}
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case "first":
    return { ...state,user_data:payload }
  default:
    return state
  }
}

// dispatch({type:"first",payload:"jkdbwakjdb"})

