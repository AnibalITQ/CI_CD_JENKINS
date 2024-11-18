
describe("script_equipo2.js", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="equipo-2"></div>`;
      require("../script_equipo2.js");
    });
  
    test("should add a form with email input and submit button to #equipo-2", () => {
      const form = document.querySelector("#equipo-2 form");
      expect(form).not.toBeNull();
  
      const emailInput = form.querySelector("input[type='email']");
      const submitButton = form.querySelector("button[type='submit']");
      expect(emailInput).not.toBeNull();
      expect(submitButton).not.toBeNull();
      expect(submitButton.innerText).toBe("Enviar");
    });
  
    test("should display a success alert for a valid email", () => {
      window.alert = jest.fn();
      const form = document.querySelector("#equipo-2 form");
      const emailInput = form.querySelector("input[type='email']");
      emailInput.value = "test@example.com";
      form.dispatchEvent(new Event("submit"));
      expect(window.alert).toHaveBeenCalledWith("Email enviado correctamente.");
    });
  
    test("should display an error alert for an invalid email", () => {
      window.alert = jest.fn();
      const form = document.querySelector("#equipo-2 form");
      const emailInput = form.querySelector("input[type='email']");
      emailInput.value = "invalid-email";
      form.dispatchEvent(new Event("submit"));
      expect(window.alert).toHaveBeenCalledWith("Por favor, ingrese un email válido.");
    });
  });
  