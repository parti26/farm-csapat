//mai orai melo egyik resze

const pages = [1, 2, 3, 4, 5];

// trick (async)
async function main() {
  const requests = pages.map(function (page) {
    return fetch("https://narutodb.xyz/api/character?page=" + page)
      .then((res) => res.json())
      .then((res) => res.characters);
  });

  const characters = (await Promise.all(requests)).flat();
  console.log(JSON.stringify(characters, null, 2));
}

main();