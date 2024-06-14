var _a;
var employee = {
    id: 1,
    name: 'Ayo',
    retire: function (date) {
        console.log(date);
    }
};
///UNION TYPE
function KgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100;
var height;
//NULLABLE TYPES
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
// let Customer = getCustomer(0);
// if (Customer !== null && Customer !== undefined)
//     console.log(Customer.birthday);
//heres a simpler way to write the code in typescript
var customer = getCustomer(1);
//Optional Property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
