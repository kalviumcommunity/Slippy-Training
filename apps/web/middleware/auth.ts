import { userDetails } from "~/composables/userDetails";
export default defineNuxtRouteMiddleware(async (to, from) => {
  // use this middleware in login|signUp page to redirect to home page if user is not logged in
  let data = await userDetails();
  if (data.loggedIn === true) {
    if (to.path === "/login" || to.path === "/signup") {
      return navigateTo("/profile");
    } else {
      return;
    }
  } else {
    if (to.path === "/editor") {
      return navigateTo("/login");
    } else if (to.path === "/profile") {
      return navigateTo("/login");
    } else {
      return;
    }
  }
});
