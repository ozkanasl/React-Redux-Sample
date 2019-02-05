import HOME from "./Home.constants";

const initialState = {

};


const homeReducer = (state : Object = initialState, action : Object) => {

  switch (action.type) {
    case HOME.GET_MOVIES_START:
      return {
        ...state,
        ProgramsLoading: true,
        fetching: true
      };

    case HOME.GET_MOVIES_FINISH:
      return {
        ...state,
        ProgramsLoading: false,
        programs: action.programs,
        fetching: true
      };
    case HOME.GET_MOVIES_REJECTED:
      return {
        ...state,
        ProgramsLoading: false,
        fetching: false
      };
    default:
      return state;
  }

};


export default homeReducer;
