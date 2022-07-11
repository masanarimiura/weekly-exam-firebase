export const state = () => ({
  userData: [
    name三浦雅成,
    
  ],
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.userData = receiveUserData;
  }
};