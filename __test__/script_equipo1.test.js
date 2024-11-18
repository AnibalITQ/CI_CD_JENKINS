
describe("script_equipo1.js", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="equipo-1"></div>`;
      require("../script_equipo1.js");
    });
  
    test("should add a button with text 'Mostrar Alerta' to #equipo-1", () => {
      const button = document.querySelector("#equipo-1 button");
      expect(button).not.toBeNull();
      expect(button.innerText).toBe("Mostrar Alerta");
    });
  
    test("should display an alert when the button is clicked", () => {
      window.alert = jest.fn();
      const button = document.querySelector("#equipo-1 button");
      button.click();
      expect(window.alert).toHaveBeenCalledWith("¡Hola desde la Sección 1!");
    });
  });
  