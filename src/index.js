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
  const item = matches[id];
  delete matches[id];
  prevMatch = [item];
  MakeData(matches, footballEl);
  MakeData(prevMatch, lastElem);
  count.textContent = Object.values(matches).length;
  window.open(
    `https://betking.com.ua/sports-book/?page=championship&championshipIds=${id}`,
    "_blank",
  );
};
const MakeData = (data, el) => {
  const html = Object.entries(data)
    .map(
      ([leagueId, teams]) => `
      <ul class="match" id=${leagueId}>
        ${teams.map((t) => `<li class="country">${t}</li>`).join("")}
      </ul>
  `,
    )
    .join("");

  el.innerHTML = html;
  count.textContent = Object.values(matches).length;
};
footballEl.addEventListener("click", onClickUl);
Fetch.MakeFootballBets(count, new Date()).then((res) => {
  matches = res.result;
  MakeData(matches, footballEl);
});
