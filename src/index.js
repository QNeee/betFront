import { Fetch } from "./Fetch.js";
const footballEl = document.getElementById("football");
const lastElem = document.getElementById("lastElem");
const count = document.getElementById("count");
let matches;
let prevMatch;
const onClickUl = (e) => {
  const ul = e.target.closest(".match");
  if (!ul) return;

  const id = Number(ul.id);
  const item = matches.find((it) => it.id === id);
  prevMatch = [item];
  matches = matches.filter((m) => m.id !== id);
  MakeData(matches, footballEl);
  MakeData(prevMatch, lastElem);
  count.textContent = matches.length;
};
const MakeItem = (item) => {
  return `
    <ul class="match" id="${item.id}">
      <li class="country">${item.country}</li>
      <li class="league">${item.league}</li>
      <li class="versus">${item.versus}</li>
      <li class="winner">${item.winner}</li>
    </ul>
  `;
};
const MakeData = (data, el) => {
  const drawData = data.map((it) => MakeItem(it)).join("");
  el.innerHTML = drawData;
  count.textContent = matches.length;
};
footballEl.addEventListener("click", onClickUl);
Fetch.MakeFootballBets(count, new Date()).then((res) => {
  matches = res.result;
  MakeData(matches, footballEl);
});
