import fs from "fs/promises";

// use fs module from node to fetch the json file data
export async function fetchdata() {

  const resp = await fs.readFile(
    "./backend/data/TestData.json",
    (err, data) => {
      if (err) throw err;
      return data;
    }
  );
  return JSON.parse(resp);
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
