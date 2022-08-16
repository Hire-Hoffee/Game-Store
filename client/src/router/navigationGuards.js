function isUserAuth(to, from, next) {
  if (!localStorage.getItem("userToken")) {
    next({ name: "login" });
  } else {
    next();
  }
}

export { isUserAuth };
