export const state = () => ({
  userData: {
    name: "三浦雅成",
    email: "メアド"
  },
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.userData = receiveUserData;
  }
};