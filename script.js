weapons = {
  swords: [
    {
      name: "copper shortsword", 
      pic: "photos/weapons/Copper_Shortsword.png",
      ingredients: {
        num: 5, 
        ingredient:"copper bar" },
      station: "iron anvil" || "lead anvil",
      material: true,
      crafts: [],
      hardmode: false,
    },
    {
      name: "boreal wood sword",
      pic: "photos/weapons/Boreal_Wood_Sword.png",
      ingredients: [],
      station: "iron anvil" || "lead anvil",
      material: false,
      crafts: null,
      hardmode: false,
    }
  ],
  yoyos: [
    {
      name: "wooden yoyo",
      pic: "photos/weapons/Wooden_Yoyo.png",
      ingredients: [ "wood"],
      station: "iron anvil" || "lead anvil",
      material: false,
      crafts: null,
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
header.textContent = weapons[0];
container.appendChild(header);

weapons.swords.forEach(item => {
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