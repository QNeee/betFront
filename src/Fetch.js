export class Fetch {
  static #url = "http://localhost:5271/";

  static async MakeFootballBets() {
    const endpoint = "api/football";
    const url = this.#url + endpoint;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    return await res.json();
  }
}
