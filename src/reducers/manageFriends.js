export function manageFriends(state, action){

  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] }
    case "REMOVE_FRIEND":
    console.log("state: ", state, "action: ", action)
      return { ...state, friends: state.friends.filter(friend => {
        return friend.id !== action.id
      }) }
    default:
      return state

  }

}
