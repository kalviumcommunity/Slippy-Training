export default async function setLocalStorage(data: any) {
  localStorage.setItem("email", data.email);
  localStorage.setItem("username", data.name);
  return;
}
