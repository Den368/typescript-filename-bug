type SomeType = {
    something: string;
};

const someType: SomeType = { something: "something" };
console.log("someType", someType);
const stack = new Error().stack;
console.log("stack", stack);
console.trace();
