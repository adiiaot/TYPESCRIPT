type Employee ={
    readonly id: number;
     name: string;
     retire: (date: Date) => void
}



let employee: {
} = { 
    id: 1,
     name: 'Ayo',
        retire: (date: Date) => {
    console.log(date);
     }
    };

///UNION TYPE
function KgToLbs(weight: number | string): number{
    // Narrowing
    if (typeof weight === 'number')
    return weight * 2.2;
    else 
    return parseInt(weight) * 2.2;
}


// INTERSECTION
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

//LITERAL TYPES
//literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Inches= "Metrics" | "cm";
let height: Inches;

//NULLABLE TYPES
function greet(name: string | null | undefined){
    if (name)
    console.log(name.toUpperCase());
else
console.log("HOLA!");
}
greet(undefined);

//WORKING WITH NULL OBJECTS
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

// let Customer = getCustomer(0);
// if (Customer !== null && Customer !== undefined)
//     console.log(Customer.birthday);

    //heres a simpler way to write the code in typescript
let customer = getCustomer(1);
//Optional Property access operator
    console.log(customer?.birthday?.getFullYear());


//Optional element access operator
// customers?.[0]

//optional call
let log: any = null;
log?.('a');