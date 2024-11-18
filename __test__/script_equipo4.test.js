
describe("script_equipo4.js", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="equipo-4"></div>`;
      require("../script_equipo4.js");
    });
  
    test("should add a select with color options to #equipo-4", () => {
      const select = document.querySelector("#equipo-4 select");
      expect(select).not.toBeNull();
  
      const options = Array.from(select.options).map(option => option.value);
      expect(options).toEqual(["red", "green", "blue", "yellow", "purple"]);
    });
  
    test("should change background color of #equipo-4 when an option is selected", () => {
      const select = document.querySelector("#equipo-4 select");
      select.value = "blue";
      select.dispatchEvent(new Event("change"));
      expect(document.querySelector("#equipo-4").style.backgroundColor).toBe("blue");
    });
  });
  