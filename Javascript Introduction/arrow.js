function adder(n1, n2) { 
    return n1 + n2;
}

const added = adder(1, 2);
console.log(added);


const arrowAdded = (n1, n2) => {
    return n1 + n2;
};

console.log(arrowAdded(1, 2));