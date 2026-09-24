function add(num1, num2) {
    return num1 + num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function tafrigh(num1, num2) {
    return num1 - num2;
};

function taghsim(num1, num2) {
    return num1 / num2;
};


function calculator(num1, num2, opp) {
    return opp(num1, num2);
};

calculator(2, 3, add);

