export const state = () => ({
  userData: "",
});

export const mutations = {
  sendLoginUserData(state,receiveUserData->name) {
    state.userData = receiveUserData;
  }
};