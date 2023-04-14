export const isSignedIn = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
