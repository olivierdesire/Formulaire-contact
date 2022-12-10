document.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée");

  //   document.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit");

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    console.log("data >>>", {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    try {
      const response = await axios.post(
        "https://site--backend-formulaire--97yqlpf4l44b.code.run/form",
        {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }
      );
      console.log("response >>>>", response.data);

      firstname.value = "";
      lastname.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";

      console.log(
        "data after >>>",
        firstname.value,
        lastname.value,
        email.value,
        subject.value,
        message.value
      );

      document.querySelector(".sent").classList.remove("hidden");
    } catch (error) {
      console.log(error);
    }
  });
});
