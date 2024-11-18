
describe("script_equipo3.js", () => {
    beforeAll(() => {
      document.body.innerHTML = `<div id="equipo-3"></div>`;
      require("../script_equipo3.js");
    });
  
    test("should add an image with specific properties and description to #equipo-3", () => {
      const img = document.querySelector("#equipo-3 img");
      const description = document.querySelector("#equipo-3 p");
  
      expect(img).not.toBeNull();
      expect(img.src).toContain("cisco_white.png");
      expect(img.alt).toBe("Logo blanco cisco");
      expect(img.style.width).toBe("200px");
      expect(description).not.toBeNull();
      expect(description.innerText).toBe("Cisco significa hola demonio");
    });
  
    test("should add a blue border on mouseover and remove it on mouseout", () => {
      const img = document.querySelector("#equipo-3 img");
      img.dispatchEvent(new Event("mouseover"));
      expect(img.style.border).toBe("2px solid blue");
  
      img.dispatchEvent(new Event("mouseout"));
      expect(img.style.border).toBe("none");
    });
  });
  