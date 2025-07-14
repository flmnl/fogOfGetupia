// character.js


const defaultCharacter = {
  name: "RndN00b",
  level: 1,
  xp: 0,
  xp_next_level: 100,
  attributes: {
    "Konstitution": {
      value: 1,
      max: 1,
      progress: 0.0
    },
    "Stärke": {
      value: 1,
      max: 1,
      progress: 0.0
    },
    "Intelligenz": {
      value: 1,
      max: 1,
      progress: 0.0
    }
  },
  active_cards: [1, 2, 3],
  last_update: new Date().toISOString().split("T")[0]
};

// Holt aktuellen Charakter oder legt Standard an
function loadCharacterData() {
  const data = localStorage.getItem("characterData");
  if (data) {
    return JSON.parse(data);
  } else {
    saveCharacterData(defaultCharacter);
    return { ...defaultCharacter };
  }
}

// Speichert aktualisierte Daten
function saveCharacterData(data) {
  localStorage.setItem("characterData", JSON.stringify(data));
}

const character = loadCharacterData();
