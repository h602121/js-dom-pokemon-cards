function renderCards() {
  const cardHTML = document.getElementById("cards");
  cardHTML.innerHTML = "";
  data.forEach(function (item) {
    cardHTML.innerHTML += `<li class="card">
    <h2 class="card--title">${
      item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)
    }</h2>
    <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      item.id
    }.png"

  />

    <ul class="card--text">
    ${returnString(item.stats)}
    </ul>
    <ul>
    ${showGames(item.game_indices)}
    </ul>
    </li>
    
    `;
  });
}
renderCards();

function returnString(list) {
  let string = "";

  list.forEach(function (stat) {
    string += ` <li>${
      stat.stat.name.charAt(0).toLocaleUpperCase() + stat.stat.name.slice(1)
    }: ${stat.base_stat}</li>`;
  });

  return string;
}

function showGames(list) {
  let string = "";
  list.forEach(function (item) {
    string += `<li> ${item.version.name} </li>`;
  });

  return string;
}
