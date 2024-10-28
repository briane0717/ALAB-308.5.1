const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
  ];
  // # 1
  console.log (solarSystem[4].moons); 
console.log("=====================================")

// # 2
  console.log(solarSystem[7].moons[1]
  );
  console.log("=====================================")

// # 3  
solarSystem[1].moons.push("Endor")
console.log(solarSystem[1].moons);

console.log("=====================================")

// # 4
solarSystem.push({name: "Pluto", ringSystem: false, moons:["Charon"]})
console.log(solarSystem[8]);
console.log("=====================================")

// # 5
solarSystem[2].diameter = "7918 miles"
console.log(solarSystem[2]);
