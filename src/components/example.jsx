export default function person({age, name}) {

    // const {age, name} = props;

    // const age = props.age;
    // const name = props.name;

    return <div>Name {name} <br/> Age: {age}</div>;
}

// export default person;

// END. Example code below

// Dano
const person = {
    name: 'Tony',
    age: 83,
    gender: 'male',
    adress: 'Trud...',
    wife: '',
    // ...
};

// Get some values into variables

/* Example of destructuring

// before
const name = person.name;
const age = person.age;
const gender = person.gender;

// after
const { name, age, gender } = person;


console.log('Person name is ', name);
// ... 
*/


// Example of component USAGE
// ...
// <person age="83" name="Tony" /> 
// ...

// Example of component ACTUAL RENDERING RESULT
// <div> Name: Tony <br/> Age: 83</div>