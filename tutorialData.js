const tutorials =[
  {
    title: "Willkommen in Getupia!",
    text: "Dies ist dein Charakterdashboard.",
    delay: 0,
    buttonText: "Verstanden"
  },
  {
    title: "Deine Quests",
    text: "Erledige sie durch echtes Training!",
    delay: 1000,
    buttonText: "Los geht’s"
  },
  {
    title: "Weiter zur Karte?",
    text: "Willst du dich auf der Karte umsehen?",
    delay: 500,
    buttonText: "Zur Karte",
    onClose: () => {
      window.location.href = "map.html";
    }
  }
];
