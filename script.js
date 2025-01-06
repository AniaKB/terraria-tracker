weapons = [
  swords = [
    "copper shortsword" = {
      pic: "photos/weapons/Copper_Shortsword.png",
      description: "Copper Shortsword",
      ingredients: [ "copper bar" x5 ],
      station: "iron anvil" || "lead anvil",
      material: true,
      crafts: [ zenith ],
      hardmode: false,
    },
    "boreal wood sword" = {
      pic: "photos/weapons/Boreal_Wood_Sword.png",
      description: "Copper Shortsword",
      ingredients: [],
      station: "iron anvil" || "lead anvil",
      material: false,
      crafts: null,
      hardmode: false,
    }
  ],
  yoyos = [
    "boreal wood sword" = {
      pic: "photos/weapons/Boreal_Wood_Sword.png",
      description: "Copper Shortsword",
      ingredients: [],
      station: "iron anvil" || "lead anvil",
      material: false,
      crafts: null,
      hardmode: false,
    }
  ] /*
  spears = [

  ],
  bommerangs = [

  ],
  flails = [

  ],
  other = [

  ]*/
]


const container = document.getElementById("container");

data.forEach(item => {
    const div = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = item.text;
    div.appendChild(text);

    const image = document.createElement("img");
    image.src = item.photo;
    image.alt = item.text;
    div.appendChild(image);

    container.appendChild(div);
});