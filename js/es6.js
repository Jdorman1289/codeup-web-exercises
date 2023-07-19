/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
let name = 'Jesse', email = 'Jesse@email.com', languages = ['JavaScript', 'Python'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages,
});



// TODO: replace `var` with `let` in the following variable declarations
let emails = [], names = [];

// TODO: rewrite the following using arrow functions

users.forEach(user => {
  return emails.push(user.email);
});
users.forEach(user => {
  return names.push(user.name);
});
// console.log(emails);
// console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({name,email,languages}) => {
  developers.push(`${name}'s email is ${email}  ${name} knows ${languages.join(', ')}`);
});
// console.log(developers);

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for(let developer of developers) {

  // TODO: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
}
list += '</ul>';
document.querySelector('body').innerHTML = list;