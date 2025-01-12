/* export const data = { */

items = {
  raw: [
    {
    id: 1,
    name: "copper ore", 
    pic: "copper-ore.png",
    ingredients: [],
    station: null,
    material: true,
    hardmode: false,
    },
    {
      id: 2,
      name: "copper bar", 
      pic: "copper-bar.png",
      ingredients: [ 1, ],
      station: null,
      material: true,
      hardmode: false,
      }
  ],
  swords: [
    {
      id: 20,
      name: "copper shortsword", 
      pic: "photos/Copper_Shortsword.png",
      ingredients: [],
      station: "iron anvil" || "lead anvil",
      material: true,
      hardmode: false,
    },
    {
      id: 20,
      name: "boreal wood sword",
      pic: "photos/Boreal_Wood_Sword.png",
      ingredients: [],
      station: "iron anvil" || "lead anvil",
      material: false,
      hardmode: false,
    }
  ],
  yoyos: [
    {
      id: 20,
      name: "wooden yoyo",
      pic: "photos/Wooden_Yoyo.png",
      ingredients: [ "wood" ],
      station: "iron anvil" || "lead anvil",
      material: false,
      hardmode: false,
    }
   ] /*
  spears = [],
  bommerangs = [],
  flails = [],
  other = []*/
  }


const container = document.getElementById("container");

const header = document.createElement("h2");
header.textContent = items[0];
container.appendChild(header);

items.swords.forEach(item => {
    const div = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = item.name;
    div.appendChild(text);

    const image = document.createElement("img");
    image.src = item.pic;
    image.alt = item.name;
    div.appendChild(image);

    container.appendChild(div);
});