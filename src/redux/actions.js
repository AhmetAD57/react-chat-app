export const loginAction = (uId, uImage) => ({
    type:"LOGIN",
    uId,
    uImage
});

export const logoutAction = _ => ({
    type:"LOGOUT"
});