# REACT.JS

# npm package

The World's Largest Software Registry (Library)
npm is the world's largest Software Registry.

The registry contains over 800,000 code packages.

Open-source developers use npm to share software.

Many organizations also use npm to manage private development.

Using npm is Free
npm is free to use.

You can download all npm public software packages without any registration or logon.

Command Line Client
npm includes a CLI (Command Line Client) that can be used to download and install software:

Windows Example
C:\>npm install <package>

# npx create react app command

Create React App
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:

npx create-react-app my-app
cd my-app
npm start

# node.js environment

The Node. js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service. The Node.js runtime for App Engine in the standard environment is declared i

# what is jsx and what is react.js and what is index file and what app.js file and

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

Here are two examples. The first uses JSX and the second does not:

Example 1
JSX:

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

Example 2
Without JSX:

const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

# component name must be start with Captial Letters and

<!-- /// till here completed  -->

# useState 5 scenarios and state update in useState boolean {} number string array

<!--  engoug for today -->

# useEffect with dependency and without dependency

# props LHS and RHS

# state lifting parents to child and vise versa

# map using index for manipulation like delete update

1. filter using index for manipulation like delete update

2. findIndex

3. find

4. counter increment

5. uuid library

6. moment.js library

7. we can create a function using ()=> or using function name

8. using drop-down changing the state conditional

9. multiple class using template iterator

10. adding dynamic classes

11. adding dynamic css property to a div using condition

12. localStorage

13. Application in tab in network tab

14. what is git and what ticket and bigbucket and source tree and what is terminal

15. degubbing console and elements in chrome
16. conditionally show the div using useState

17. assigning jsx to constant
18. form on submit
19. condition ga showing using ternary operator

20. donot change props and only update the state

21. crud operation

22. use same components at multiple place and if we don't pass the some props to that components at some place what should i do

23. infinite loop cases in state update

24. keys

25. ref
    const myref = useRef(null);
    const handler = () => {
    console.log(myref.current);
    let obj = myref.current;
    obj.style.color = "red";
    };
    return (
    <>
    <h1 ref={myref}>hi</h1>
    <button onClick={handler}>submit</button>
    </>
    );

26. material ui or antd basis introduction

27. useCallback and useMemos
28. class compoenet
    class Car extends React.Component {
    constructor() {
    super();
    this.state = {color: "red"};
    }
    render() {
    return <h2>I am a Car!</h2>;
    }
    }
29. life cycle methods in functional and class components

30. context api,

31. axios fetch

32. router and history push and passing data from one route to another

33. redux
34. useSelector hooks
35. useDispatch hooks

# JAVASCRIPT

1.  Introduction
    JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node

2.  History of JavaScript
    JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8.

3.  Download and Install vscode
    completed

4.  How to execute javascript code
    script tag in html and browser console and in js file

5.  Hello World program
    console.log("hello wordl") in 4 point

6.  Intro to variables
    4 Ways to Declare a JavaScript Variable:
    Using var
    Using let
    Using const
    Using nothing (by default its a consider a var)

    <!-- completed  -->

7.  Rules for naming variables
    A variable name must start with a letter or an underscore character (_) A variable name cannot start with a digit. A variable name can only contain alpha-numeric characters and underscores ( a-z, A-Z , 0-9 , and _ ) Variable names are case-sensitive (age, Age and AGE are three different variables)

8.  Let keyword
    let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope

9.  Const keyword
    The const declaration creates block-scoped constants, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration).

10. var keyword
    The var statement declares a variable. Variables are containers for storing information. Creating a variable in JavaScript is called "declaring" a variable: var carName; After the declaration, the variable is empty (it has no value).

11. object and

12. object destructure, Object extracting values and Object keys and Object.values

13. Array and

14. Array destructure

15. boolean

16. number

17. map method

18. String Indexing
    JavaScript Strings
    The indexOf() Method
    indexOf() returns the position of the first occurrence of a value in a string.

    Find "welcome": out ==>13

    // code
    let text = "Hello world, welcome to the to universe.";
    let result = text.indexOf("to");
    console.log(result);

19. Useful string methods

    1. String constructor
    2. concat
    3. slice()
    4. split() splict(" ")
    5. - operator

20. typeof , string to number, number to string conversion
    console.log(typeof "star", typeof 12, typeof true);
    const no = "20";
    console.log(typeof no);
    const newNo = Number(20);
    console.log(typeof newNo);
    const SmallNo = String(20);
    console.log(typeof SmallNo);

21. Template Strings
    const name = "Johnny";
    const age = 20;
    const str = `He's often called ${name} ${age}`;
    const newStr = "He's often called " + name + " " + age;
    console.log(str, newStr);

22. undefined null

<!--  enoghy today -->

21. if else , truthy and falsy values
    // if (true) {
    // console.log("ok");
    // }
    // if (false) {
    // console.log("ok");
    // }
    // if (0) {
    // console.log("ok");
    // }
    // if ("") {
    // console.log("ok");
    // }
    // if (null) {
    // console.log("ok");
    // }

// if (undefined) {

// console.log("ok");
// }

// if (11) {
// console.log("ok");
// }
// if ("sss") {
// console.log("ok");
// }

17. Ternary operator
    ?
18. And Or Operator
    && ||
19. Nested If else

20. if elseif

21. Switch statement

22. rest operator

23. callback

24. forEach method

25. for in and for of
    const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
text += person[x];
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
text += x;
}

31. filter method

32. sort method
    const arr = [9, 0, 6, 3, 4, 8];
    console.log(arr.sort());

33. find method

34. What is DOM ?

35. getElementById and getElementByClassName

const App = () => {
// const myname = document.getElementById("name");
// console.log(myname.innerHTML, (myname.style.color = "red"));
// // const myname = document.getElementsByClassName("age");
// // console.log(myname[0].innerHTML, (myname[0].style.color = "red"));
// // console.log(myname[1].innerHTML, (myname[1].style.color = "green"));
return (

<div>
<h1 id="name">harish</h1>
<h1 className="age">22</h1>
<h1 className="age">22</h1>
</div>
);
};
export default React.memo(App);

36. setTimeout

37. and setInternal
