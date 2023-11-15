let weather = ['sunshine', 'cloudy', 'raining', 'snowing', 'foggy'];

let animals = ['elephant', 'tiger', 'penguin', 'giraffe', 'koala'];

let dinners = ['chicken pasta bake', 'tofu curry with homemade roti', 'wild mushroom risotto', 'fish Tacos', 'smoky sausage & sqaush traybake'];

const random = arr => {
    const num = Math.floor(Math.random() * arr.length)
    return num;
}

const weatherFunc = arr => {
    const randNum = random(weather);
    return "It's " + weather[randNum]  + " today";
}

const animalFunc = arr => {
    const randNum = random(animals);
    return "I saw a cute " + animals[randNum] + " at the park";
}

const dinnerFunc = arr => {
    const randNum = random(dinners);
    return "I'm craving some " + dinners[randNum] + " for dinner"
}

console.log(weatherFunc(weather));
console.log(animalFunc(animals));
console.log(dinnerFunc(dinners));