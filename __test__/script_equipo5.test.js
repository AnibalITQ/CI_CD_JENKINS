
describe("script_equipo5.js", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="equipo-5"></div>`;
      require("../script_equipo5.js");
    });
  
    test("should add a counter display and increment button to #equipo-5", () => {
      const counterDisplay = document.querySelector("#equipo-5 p");
      const incrementButton = document.querySelector("#equipo-5 button");
  
      expect(counterDisplay).not.toBeNull();
      expect(counterDisplay.innerText).toBe("Contador: 0");
      expect(incrementButton).not.toBeNull();
      expect(incrementButton.innerText).toBe("Incrementar");
    });
  
    test("should increment counter when button is clicked", () => {
      const counterDisplay = document.querySelector("#equipo-5 p");
      const incrementButton = document.querySelector("#equipo-5 button");
  
      incrementButton.click();
      expect(counterDisplay.innerText).toBe("Contador: 1");
  
      incrementButton.click();
      expect(counterDisplay.innerText).toBe("Contador: 2");
    });
  });
  