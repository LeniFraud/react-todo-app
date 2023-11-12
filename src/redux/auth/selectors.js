export const selectUser = state => state.authData.user;
export const selectUserName = state => state.authData.user.name;
export const selectUserAvatar = state => state.authData.user.avatar;
export const selectAvatarSrc = state => state.authData.avatarSrc;
export const selectIsLoggedIn = state => state.authData.isLoggedIn;
export const selectIsRefreshing = state => state.authData.isRefreshing;
