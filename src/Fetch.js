export class Fetch {
  static #url = "http://localhost:5271/";

  static async MakeFootballBets(countEl, date) {
    try {
      const formattedDate = date.toISOString();
      countEl.textContent = "loading...";
      const endpoint = "api/football";
      const url = this.#url + endpoint + `?date=${formattedDate}`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return await res.json();
    } catch {
      countEl.textContent = "error";
    }
  }
}
