type MySomeType = {
    something: string;
};

const mySomeType: MySomeType = { something: "something" };
console.log("mySomeType", mySomeType);
const mystack = new Error().stack;
console.log("mystack", mystack);
console.trace();
