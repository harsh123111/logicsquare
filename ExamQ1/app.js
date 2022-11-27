
function findCaliforniaCafes(cafe){
    const cafes = require("./cafe");
    const places = require("./places");
  const getCafes = cafes.filter((item) =>
    item.name.toLowerCase().includes(cafe.trim().toLowerCase()));
  const arr = [];
  for (let cafe of getCafes) {
    const getPlace = places.find((place) => cafe.place_id === place.id);
    delete cafe.place_id;
    delete getPlace.id;
    arr.push({ ...cafe, ...getPlace });
  }
  return arr;
};

const output = findCaliforniaCafes("Avenue");

console.log(output);
