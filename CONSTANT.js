export const CONSTANT = {
  server: "http://192.168.1.172:4000/",
};

export const checkLoginFromLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? true
    : false;
};

export const checkLoginFromNonLogin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data
    ? false
    : true;
};

export const checkLoginFromAdmin = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data.role === "admin"
    ? false
    : true;
};

export const checkLoginFromCommittee = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data.role === "committee"
    ? false
    : true;
};

export const checkLoginFromHOD = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data.role === "hod"
    ? false
    : true;
};

export const checkLoginFromStaff = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data.role === "staff"
    ? false
    : true;
};

export const checkLoginFromTeacher = () => {
  return sessionStorage.getItem("loggedin") &&
    JSON.parse(sessionStorage.getItem("loggedin")).data.role === "teacher"
    ? false
    : true;
};

export const Loader = (extra = "") => {
  return (
    <div class={`spinner-grow ${extra}`} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export const setMessage = (text, color) => {
  console.log(text);
  if (text === "User Already Registered") {
    alert(text);
  }
};

export const resetMessage = () => {
  let error = document.getElementById("error");
  error.innerText = "";
  error.style.display = "none";
  error.classList.remove("text-danger");
  error.classList.remove("text-success");
};

export const isMessage = () => {
  let error = document.getElementById("error");
  if (error.style.display === "none") {
    return false;
  }
  return true;
};
