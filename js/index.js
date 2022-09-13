window.addEventListener("load", function () {
  //listeners
  //submit button form
  const submitButton = document.querySelector(".submit-btn");
  if (submitButton) {
    submitButton.addEventListener("click", submitForm);
  }

  //navbar menu mobile
  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", showHideNav);

  const navMenu = document.querySelector(".show");

  //dark-mode switch
  let switchButton = document.querySelector(".mode-switch input");
  switchButton.addEventListener("click", changeMode);

  window.onresize = function () {
    if (window.innerWidth < 576) {
      navMenu.classList.remove("show");
      navMenu.classList.add("hidden");
    } else if (window.innerWidth > 576) {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("show");
    }
  };

  const btns = document.querySelectorAll(".header-button");
  for (const btn of btns) {
    btn.addEventListener("click", function () {
      console.log("hola");
      location.href = "../contact.html";
    });
  }

  // dark mode

  function changeMode() {
    document.body.classList.toggle("dark");
    console.log(document.body);
  }

  function showHideNav() {
    console.log(navMenu);
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      navMenu.classList.add("hidden");
    } else {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("show");
    }
  }

  function submitForm() {
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!phone.startsWith("+")) {
      document.getElementById("phone-error").innerHTML =
        "Number must start with +";
    } else if (message.length < 50) {
      document.getElementById("message-error").innerHTML =
        "Minimum length of the message is 50 characters";
    } else {
      const form = document.getElementById("form");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

      const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };

      const body = { item: data };

      const params = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify(body),
      };

      fetch(url, params)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((json) => {
          console.log(json);
          document.getElementById("message-error").innerHTML =
            "Enviado correctamente";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
        })
        .catch((err) => console.log(err));
    }
  }
});
