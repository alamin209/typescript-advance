//optional parameter c
const yourFunc = (a: string, b: string, c?: string) => {
  console.log(`Hello string ${a} ${b}`);
};

yourFunc("alamin", "hossain");

//function  Type Aliases
type numberOrString = number | string;

const userDetails = (id: numberOrString, name: string) => {
  console.log(`user Id ${id} name ${name} `);
};

const sayHello = (name: string) => {
  console.log(` name ${name} `);
};
