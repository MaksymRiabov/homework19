// Завдання 1
const products = [
  'Laptop',
  'Phone',
  'Tablet',
  'Headphones',
  'Monitor',
  'Keyboard',
];

function addProduct(array, product) {
  const length = array.push(product);
  return length;
}

function removeProduct(array, product) {
  const productIndex = array.indexOf(product);
  if (productIndex >= 0) {
    array.splice(productIndex, 1);
  } else if (productIndex === -1) {
    console.log('Product is not in the array!');
  }
}

function replaceProduct(array, oldProduct, newProduct) {
  const productIndex = array.indexOf(oldProduct);
  if (productIndex !== -1) {
    array.splice(productIndex, 1, newProduct);
  }
}

function checkProduct(array, product) {
  const productAvailable = array.includes(product);
  return productAvailable;
}

function getProducts(array) {
  const productList = array.join(', ');
  return productList;
}

addProduct(products, 'Speakers');
addProduct(products, 'Printer');
removeProduct(products, 'Monitor');
replaceProduct(products, 'Keyboard', 'Mouse');
console.log(checkProduct(products, 'Printer'));
console.log(checkProduct(products, 'Defibrillator'));
console.log(getProducts(products));

// Завдання 2
const scores = [85, 92, 67, 100, 74, 58, 91, 76, 88];
function getScores(array) {
  for (let item of array) {
    console.log(item);
  }
}

function getPassedScores(array) {
  let newArray = [];
  for (let item of array) {
    if (item >= 70) {
      newArray.push(item);
    }
  }
  return newArray;
}

function getTopScores(array, count) {
  let newArray = [];
  if (count !== 0) {
    newArray = array.slice(-count);
  }
  return newArray;
}

function removeLowestScore(array) {
  let currentLowest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (currentLowest > array[i]) {
      currentLowest = array[i];
    } else {
      continue;
    }
  }
  const indexOfLowest = array.indexOf(currentLowest);
  const lowest = Number(array.splice(indexOfLowest, 1));
  return lowest;
}

getScores(scores);
console.log(getPassedScores(scores));
console.log(getTopScores(scores, 3));
console.log(removeLowestScore(scores));

// Завдання 3
const messages = 'Hello|How are you?|See you tomorrow|Good morning|Thank you';

function getMessages(string) {
  const array = string.split('|');
  return array;
}

function getMessagesCount(string) {
  const array = getMessages(string);
  const length = array.length;
  return length;
}

function findMessage(string, message) {
  const array = getMessages(string);
  const check = array.includes(message);
  return check;
}

function removeMessage(string, message) {
  const array = getMessages(string);
  const index = array.indexOf(message);
  if (index >= 0) {
    array.splice(index, 1);
  }
  const newString = array.join('|');
  return newString;
}

console.log(getMessages(messages));
console.log(getMessagesCount(messages));
console.log(findMessage(messages, 'Hola'));
console.log(removeMessage(messages, 'Welcome'));

// Завдання 4
const clients = ['Anna', 'John', 'Kate', 'Michael', 'Sophia'];

function addClient(array, client) {
  array.push(client);
}

function addVIPClient(array, client) {
  array.unshift(client);
}

function serveClient(array) {
  const client = array.shift();
  return client;
}

function cancelLastClient(array) {
  const client = array.pop();
  return client;
}

function getClients(array) {
  const string = array.join(' → ');
  return string;
}

addClient(clients, 'Peter');
addClient(clients, 'Abdullah');
addVIPClient(clients, 'Dr. Evil');
serveClient(clients);
serveClient(clients);
cancelLastClient(clients);
console.log(getClients(clients));
