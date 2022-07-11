export const state = () => ({
  userData: "",
});

export const mutations = {
  sendLoginUserData(state,receiveUserData-) {
    state.userData = receiveUserData;
  }
};