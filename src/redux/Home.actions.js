import HOME from "./Home.constants";



export const getProgramsStart = () => ({
  type: HOME.GET_MOVIES_START
});


export const getProgramsFinish = (programs) => ({
  type: HOME.GET_MOVIES_FINISH,
  programs
});

export const getProgramsRejected = () => ({
  type: HOME.GET_MOVIES_REJECTED
});


