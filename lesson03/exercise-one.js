let zoo =['zebra', 'giraffe', 'tiger', 'penguin', 'panda'];
console.log(zoo);

zoo.push('elephant');
console.log(zoo);

zoo.splice(2,1);
console.log(zoo);

let zooList = zoo.join(', ');
console.log(zooList);
