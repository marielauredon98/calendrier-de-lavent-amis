document.addEventListener("DOMContentLoaded", function() {
    const today = new Date(); // Obtient le jour actuel
    const calendar = document.querySelector(".calendar");

    // Dictionnaire des messages pour chaque jour
    const messages = {
      1: "Bienvenue dans ce calendrier de l'Avent !",
      2: "Raconte une blague sur Whatsapp.",
      3: "Essaie de placer quelques rimes dans tes phrases aujourd'hui.",
      4: "Poste du rouge en statut.",
      5: "Partage ta chanson de Noël préférée.",
      6: "Complète la phrase : Vive le ven... Vive le ven... Vive le ...",
      7: "Comment s’appelle le gâteau le plus dur au monde ?",
      8: "La bûche. Ah ah !",
      9: "Dessine ton plus beau flocon de neige et partage-le.",
      10: "Partage ton film de Noël préféré.",
      11: "Mets l'image de quelque chose que tu aimes en photo de profil.",
      12: "Mets un fond d'écran de Noël sur ton téléphone.",
      13: "Dis quelque chose de positif dans ton prochain whatsapp.",
      14: "Tape 'Do a barrel roll' sur google.",
      15: "Demain, apporte un accessoire de Noël.",
      16: "Demain, porte du rouge ou du blanc.",
      17: "Dessine ton plus beau sapin de Noël et partage-le.",
      18: "Poste du vert en statut.",
      19: "Envoie un coeur à la première personne à laquelle tu penses.",
      20: "Partage un message de Noël dans ton statut.",
      21: "Pourquoi le Père Noël n'a pas été à ton école ?",
      22: "Parce qu'il voulait rester Santa Claus (sans ta classe).",
      23: "En retard sur les cadeaux ? 5 pompes : Danse de la joie.",
      24: "J-1... Bon réveillon !",
      25: "Joyeux Noël !"
    };

    const days = [1, 4, 18, 10, 6, 23, 3, 12, 16, 5, 19, 2, 25, 7, 11, 13, 8, 21, 9, 14, 24, 17, 20, 15, 22]

     // Génération des 25 divs du calendrier
    for (let i = 0; i <= days.length-1; i++) {
      const dayi = days[i];
      const day = document.createElement("div");
      day.classList.add("day");
      day.dataset.day = dayi;

      // Créer la structure de la carte
      const card = document.createElement("div");
      card.classList.add("card");

      const front = document.createElement("div");
      front.classList.add("front");
      front.style.backgroundImage = "url('cadeau.png')";
      const dayNumber = document.createElement("span");
      dayNumber.classList.add("day-number");
      dayNumber.textContent = dayi;
      front.appendChild(dayNumber);

      card.appendChild(front);

      const back = document.createElement("div");
      back.classList.add("back");
      const message = document.createElement("div");
      message.classList.add("message");
      message.textContent = messages[dayi];
      back.appendChild(message);
      card.appendChild(back);

      day.appendChild(card);
      calendar.appendChild(day);

      const flippedCards = JSON.parse(localStorage.getItem("flippedCards")) || [];
      if (flippedCards.includes(dayi)) {
        day.classList.add("flipped");
      }

      // Gérer le verrouillage des jours
      date = new Date(`2024-12-${dayi < 10 ? '0' : ''}${dayi}`);
      if (date > today) {
        day.classList.add("locked");
      } else {
        day.classList.add("unlocked");
      }

      // Ajouter l'événement de clic
      day.addEventListener("click", function() {
      const clickedDay = this.dataset.day;
      const date = new Date(`2024-12-${clickedDay < 10 ? '0' : ''}${clickedDay}`);
        if (date <= today) {

          day.classList.toggle("flipped");
          let flippedCards = JSON.parse(localStorage.getItem("flippedCards")) || [];
          if (day.classList.contains("flipped")) {
            flippedCards.push(dayi);
          } else {
            flippedCards = flippedCards.filter(dayId => dayId !== dayi);
          }
          localStorage.setItem("flippedCards", JSON.stringify(flippedCards));
        } else {
          day.classList.add("shake");
          setTimeout(() => day.classList.remove("shake"), 500);
        }
      });
    }
  });
