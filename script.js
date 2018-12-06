const buttonsKey = document.getElementsByClassName('key');
let lastKey;

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    randomKey = Math.floor(math.random() * buttonsKey.lenght);

    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()  
    }
    lastKey = key;
    return key;
};
console.log(getRandomKey());

// do domu napisz funkcję która losowo dodaje do klawisza klasę fire-up 