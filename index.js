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


//write your code here

//1. collect all characters that has jutsu
/**
 * for item of arr:
 * ha cb(item) === true
 *   akkor item hozzaad eredmeny
 * 
 * return eredmeny objektum
 */
const withJustu = characters.filter(function(item) {
    console.log(item);
});
for (let item of characters){
    if (item === "jutsu"){
        console.log(item)
    }
}
// 2. find the first character with more than 5 jutsu
/**
 * for item of arr:
 * ha cb(item) === true
 * return item
 * 
 * return null
 */

const boss = withJustu.find(cb)



}
main();