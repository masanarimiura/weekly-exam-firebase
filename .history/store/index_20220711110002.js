export const state = () => ({
  userData: [
    name:
  ],
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.userData = receiveUserData;
  }
};