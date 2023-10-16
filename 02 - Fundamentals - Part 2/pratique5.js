const dataDolphins = 44, 23, 71
const dataKoalas = 65 + 54 + 49

const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;
    let average = calcAverage(44,23,71);
    console.log(average);

let scoreDolphins = calcAverage(44,23,71)
console.log(scoreDolphins);

let scoreKoalas = calcAverage(65,54,49)
console.log(scoreKoalas);

function checkWinner (avgDolphins,avgKoalas) {
    if (avgDolphins >= avgKoalas*2) {
        return `Dolphins have won (${avgDolphins} to ${avgKoalas})`
    } else if (avgKoalas >= avgDolphins*2) {
        return `Koalas have won (${avgKoalas} to ${avgDolphins})`
    } else {
        return `No winners)`
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));


//CORRECTION
const calcAverage = (score1,score2,score3) => {
    return ((score1+score2+score3)/3);
}

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

function checkWinner (avgDolphins,avgKoalas) {
    if (avgDolphins >= 2*avgKoalas) {
    console.log(`Dolphins have won (${avgDolphins} to ${avgKoalas}`);
    } else if (avgKoalas >= 2*avgDolphins) {
    console.log(`Koalas have won (${avgKoalas} to ${avgDolphins}`)
    } else {
    console.log(`No winners.`)
    }
} 

checkWinner(scoreDolphins,scoreKoalas)

// console.log empeche de lire les console.log, si console.log utilisé privilégier return dans la fonction

//autre façon avec tableau 

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
  };
  const checkWinner = (scoresDolphins, scoresKoala) => {
    const dolphins = calcAverage(...scoresDolphins);
    const koala = calcAverage(...scoresKoala);
    console.log(dolphins, koala);
    if (dolphins >= koala * 2) {
      console.log(`Dolphins win ${dolphins} vs ${koala}!`);
      return;
    }
    if (koala >= dolphins * 2) {
      console.log(`Koalas win ${dolphins} vs ${koala}!`);
      return;
    }
    console.log("it's a draw!");
  };
  
  console.log('Match 1:');
  
  checkWinner([44, 23, 71], [65, 54, 49]);
  
  console.log('Match 2:');
  
  checkWinner([85, 54, 41], [23, 34, 27]);