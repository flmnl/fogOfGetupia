// character.js

const firstLevelUp = 50;
const defaultCharacter = {
  name: "RndN00b",
  level: 1,
  xp: 0,
  xp_next_level: 100,
  attributes: {
    "Konstitution": {
      level: 1,
      progress: 0.0,
      next: firstLevelUp
    },
    "Stärke": {
      level: 1,
      progress: 0.0,
      next: firstLevelUp
    },
    "Intelligenz": {
      level: 1,
      progress: 0.0,
      next: firstLevelUp
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
