import { buscaNome, buscaTag } from "./data.js";

describe("buscaNome", () => {
  it("função de filtrar campeão por nome", () => {
    const campeao = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ];
    const nome = ["aa", "mor", "ann"];
    const resultadoEsperado = [
      {
        campeao,
      },
    ];
    expect(buscaNome(campeao, nome)).toBe(resultadoEsperado);
  });
});
it("retornar campeão digitado", () => {
  expect(buscaNome("Aatrox", "Morgana", "Annie")).toBe("aa", "mor", "ann");
});

describe("buscaTag", () => {
  it("função de filtrar campeão pelo tipo", () => {
    const campeao = [{ name: "Shaco" }];
    const tag = [{ tags: "Assassin" }];
    const resultadoEsperado = [
      {
        campeao,
      },
    ];
    expect(buscaTag(campeao, tag)).toBe(resultadoEsperado);
  });
});
it("retornar tipo selecionado", () => {
  expect(buscaTag("Shaco")).toBe("Assassin");
});