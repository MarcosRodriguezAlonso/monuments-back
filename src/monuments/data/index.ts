import Monument from "./Monument.js";

const monuments: Monument[] = [
  new Monument(
    "Coliseo",
    "El Coliseo es un antiguo anfiteatro romano ubicado en el centro de Roma, Italia, famoso por su arquitectura distintiva y por ser el escenario de espectáculos públicos, incluyendo combates de gladiadores y eventos de entretenimiento.",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg",
    { city: "Roma", country: "Italia" },
  ),
  new Monument(
    "Gran Muralla China",
    "La Gran Muralla China es una vasta estructura defensiva construida a lo largo de siglos para proteger el norte de China de invasiones, con una longitud total de más de 21,000 kilómetros.",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/383px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
    { city: "Beijing", country: "China" },
  ),
  new Monument(
    "Partenón",
    "El Partenón, un antiguo templo griego dedicado a la diosa Atenea, se erige majestuoso en la Acrópolis de Atenas, siendo un icónico símbolo de la arquitectura clásica y la civilización griega.",
    "https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg",
    { city: "Atenas", country: "Grecia" },
  ),
  new Monument(
    "Moai",
    "Los Moai son imponentes estatuas monolíticas de piedra situadas en la Isla de Pascua, representando antepasados y símbolos de la cultura ancestral Rapa Nui.",
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/Moai_Rano_raraku.jpg",
    { city: "Rapa Nui", country: "Chile" },
  ),
];

export default monuments;
