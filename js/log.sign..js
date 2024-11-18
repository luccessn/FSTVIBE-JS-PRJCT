export function lognSign() {
  const avatar = document.getElementById("avatar");
  const loginsection = document.getElementById("loginsection");
  const backblur = document.querySelector(".backblur");
  const body = document.getElementById("body");
  const quit = document.getElementById("quit");
  // Reg Section
  const goReg = document.getElementById("goReg");
  const golG = document.getElementById("goLog");
  const RgSection = document.getElementById("sectionRg");
  const quit2 = document.getElementById("quit2");
  avatar.addEventListener("click", function () {
    loginsection.classList.add("active");
    backblur.classList.add("blur");
    body.classList.add("overflow");
  });
  quit.addEventListener("click", function () {
    loginsection.classList.remove("active");
    backblur.classList.remove("blur");
    body.classList.remove("overflow");
  });
  goReg.addEventListener("click", function () {
    loginsection.classList.remove("active");
    RgSection.classList.add("active");
  });
  golG.addEventListener("click", function () {
    RgSection.classList.remove("active");
    loginsection.classList.add("active");
  });
  quit2.addEventListener("click", function () {
    RgSection.classList.remove("active");
    backblur.classList.remove("blur");
    body.classList.remove("overflow");
  });
  // cookies
  const divCookies = document.getElementById("cookies");
  const iconAcp = document.getElementById("accept");
  iconAcp.addEventListener("click", function () {
    divCookies.classList.add("active");
  });
  //form validation
  const formLog = document.getElementById("formLogin");
  const formReg = document.getElementById("formRg");
  //
  formLog.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  //
  formReg.addEventListener("submit", function (prevent) {
    prevent.preventDefault();
    let errors = {};
    //username
    const usernameValue = document.getElementById("usernameField").value;
    const username = document.getElementById("usernameField");
    let regexUsername = /^[0-9A-Za-z]{6,16}$/;
    if (usernameValue.match(regexUsername)) {
      username.style.border = "2px solid green";
      document.getElementById("error-username").style.color = "green";
    } else {
      username.style.border = "2px solid red";
      document.getElementById("error-username").style.color = "red";
      errors.username = "Username isnot Valid Please use 0-9A-Za-z (6,16)";
    }
    //
    if (usernameValue === "") {
      document.getElementById("error-username").style.color = "yellow";
      errors.username = "Username Cannt Be Empty";
      username.style.border = "2px solid yellow";
    }
    // little email
    const emailField = document.getElementById("emailField");
    const emailFieldValue = document.getElementById("emailField").value;
    if (emailFieldValue === "") {
      document.getElementById("error-email").style.color = "yellow";
      emailField.style.border = "2px solid yellow";
    }
    //paswords
    const password = document.getElementById("passwordField");
    const passwordRepeat = document.getElementById("passwordField2");
    const passwordValue = document.getElementById("passwordField").value;
    const passwordRepeatValue = document.getElementById("passwordField2").value;
    let regexPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
    if (passwordValue.match(regexPassword)) {
      password.style.border = "2px solid green";
      document.getElementById("error-password").style.color = "green";
    } else {
      password.style.border = "2px solid red";
      document.getElementById("error-password").style.color = "red";
      errors.password = "Password Isnt Valid Please use [0-9] [A-Za-z] ";
    }
    if (passwordValue === "") {
      document.getElementById("error-password").style.color = "yellow";
      password.style.border = "2px solid yellow";
      errors.password = "Please fill in the password field";
    }
    if (passwordRepeatValue !== passwordValue) {
      passwordRepeat.style.border = "2px solid red";
      document.getElementById("error-password2").style.colod = "red";
      errors.password2 = "Passwrods dnt Match Pls Check it ";
    } else {
      passwordRepeat.style.border = "2px solid green";
      document.getElementById("error-password2").style.colod = "green";
    }
    if (passwordRepeatValue === "") {
      passwordRepeat.style.border = "2px solid yellow";
    }
    //localstorage

    //cookies handling
    if (iconAcp.click) {
      Cookies.set("User", emailFieldValue);
      Cookies.set("Password", passwordValue);
      Cookies.set("UserName", usernameValue);
    } else {
      Cookies.remove("User");
      Cookies.remove("Password");
      Cookies.remove("UserName");
    }
    // saved
    const savedEmail = Cookies.get("User");
    const savedUsername = Cookies.get("UserName");
    const savedPassword = Cookies.get("Password");
    const hProfileUsername = document.getElementById("profileUsername");
    if (savedUsername) {
      hProfileUsername.textContent = savedUsername;
    }
    if (savedEmail) {
      document.getElementById("loginEmail").value = savedEmail;
      iconAcp.checked = true;
    }
    //MATCHES
    if (savedPassword) {
      document
        .getElementById("loginButton")
        .addEventListener("click", function () {
          const loginPassword = document.getElementById("loginpassword").value;
          const errorPassword = document.getElementById("error-passwordLG");
          if (loginPassword === savedPassword) {
            formLog.classList.add("hide");
            document.getElementById("profile").classList.add("active");
            errorPassword.innerText = "";
            document.getElementById("loginpassword").style.border =
              "2px solid green";
          } else {
            errorPassword.innerText = "Password is incorrect.";
            errorPassword.style.color = "red";
            document.getElementById("loginpassword").style.border =
              "2px solid red";
          }
        });
    }
    document.getElementById("logout").addEventListener("click", function () {
      formLog.classList.remove("hide");
      document.getElementById("profile").classList.remove("active");
    });
    //
    //
    this.querySelectorAll(".error").forEach(function (element) {
      element.textContent = "";
    });
    for (let key in errors) {
      const errorElement = document.getElementById("error-" + key);
      if (errorElement) {
        errorElement.textContent = errors[key];
      }
    }
    if (Object.keys(errors).lenght === 0) {
      this.submit();
      document.querySelectorAll(".inputtext").value = "";
    }
  });
  // email
  const email = document.getElementById("emailField");
  email.addEventListener("keyup", function () {
    const error = document.getElementById("error-email");
    const emailValue = document.getElementById("emailField").value;
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexMail.test(emailValue)) {
      email.style.border = "2px solid green";
      error.innerText = "";
    } else {
      error.innerText = "Your Email isn Correct Please Check It";
      error.style.color = "red";
      email.style.border = "2px solid red";
    }
  });
  //lock Login
  const passwordLg = document.getElementById("loginpassword");
  const lock = document.getElementById("fa-lock");
  lock.addEventListener("click", function () {
    if (passwordLg.type === "password") {
      passwordLg.setAttribute("type", "text");
      lock.classList.remove("fa-lock");
      lock.classList.add("fa-lock-open");
    } else {
      passwordLg.setAttribute("type", "password");
      lock.classList.add("fa-lock");
      lock.classList.remove("fa-lock-open");
    }
  });
  // Registration EYE
  const passwordRg = document.getElementById("passwordField");
  const eyeIcon = document.getElementById("eyeicon");
  eyeIcon.addEventListener("click", function () {
    if (passwordRg.type === "password") {
      passwordRg.setAttribute("type", "text");
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordRg.setAttribute("type", "password");
      eyeIcon.classList.add("fa-eye");
      eyeIcon.classList.remove("fa-eye-slash");
    }
  });
  // Eye fr Repeat Password
  const RepeatPasswordRg = document.getElementById("passwordField2");
  const eyeIcon2 = document.getElementById("eyeicon2");
  eyeIcon2.addEventListener("click", function () {
    if (RepeatPasswordRg.type === "password") {
      RepeatPasswordRg.setAttribute("type", "text");
      eyeIcon2.classList.remove("fa-eye");
      eyeIcon2.classList.add("fa-eye-slash");
    } else {
      RepeatPasswordRg.setAttribute("type", "password");
      eyeIcon2.classList.add("fa-eye");
      eyeIcon2.classList.remove("fa-eye-slash");
    }
  });
}
