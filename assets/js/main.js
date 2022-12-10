document.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée");

  //   document.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    console.log("data >>>", {
      firstname,
      lastname,
      email,
      subject,
      message,
    });

    try {
      const response = await axios.post(
        "https://site--backend-formulaire--97yqlpf4l44b.code.run/form",
        {
          firstname,
          lastname,
          email,
          subject,
          message,
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
