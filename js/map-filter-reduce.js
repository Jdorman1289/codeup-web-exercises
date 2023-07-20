const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguageUsers = users.filter(user => user.languages.length >= 3);
// console.log(threeLanguageUsers);

let userEmails = users.map(user => `${user.email}`);
// console.log(userEmails);

let avgUserExp = users.reduce((exp, user) => exp + user.yearsOfExperience, 0) / users.length;
// console.log(avgUserExp);

let longestEmail = users.map(user => user.email.length);
longestEmail = longestEmail.reduce((champ, amount) => (amount >= champ) ? amount : champ, 0)
let answer = users.filter(user => user.email.length >= longestEmail);
// console.log(answer);

let nameStr = users.reduce((userStr, user) => (user === users[users.length - 1]) ? userStr + `and ${user.name}. ` : userStr + `${user.name}, `, "Your instructors are: ");
console.log(nameStr);



