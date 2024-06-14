"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Ayo',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let height;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("HOLA!");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=objects.js.map