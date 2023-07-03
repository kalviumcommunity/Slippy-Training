import { userDetails } from "~/composables/userDetails";
export default defineNuxtRouteMiddleware(async () => {
  // use this middleware in login|signUp page to redirect to home page if user is not logged in
  let data = await userDetails();
  if (data.loggedIn === true) {
    return abortNavigation();
  }
  if (data.loggedIn === false) {
    return navigateTo("/");
  }
});
