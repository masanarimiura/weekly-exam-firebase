export const state = () => ({
  userData: {
    name: "三浦雅成",
    email: ""
  },
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.userData = receiveUserData;
  }
};