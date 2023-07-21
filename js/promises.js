// const getUser = userName => {
//     let url = `https://api.github.com/users/${userName}/events/public`;
//     let apiOptions = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'authorization': `token ${GITHUB_MONTH_KEY}`
//         }
//     }
//
//     return fetch(url, apiOptions).then((response) => {
//         return response.json()
//     }).catch((error) => {
//         console.log(error.message);
//     })
// }
//
//
// (() => {
//
//     document.querySelector('button').addEventListener('click', () => {
//             let userName = document.querySelector('input').value;
//             getUser(userName).then(user => {
//                 let pushEvents = user.filter(event => event.type === "PushEvent");
//
//                 document.querySelector('#user-image').innerHTML = `<img class="rounded-pill" width="200px" src="${user[0].actor.avatar_url}" alt="user profile image">`
//                 document.querySelector('span').innerHTML = `Their last push was to this repo: ${pushEvents[0].repo.name} at this time: ${pushEvents[0].created_at}`
//
//
//             }).catch((error) => {
//                 console.log(error.message);
//             })
//         }
//     )
//
// })()

const getUser = async userName => {
    try {
        let url = `https://api.github.com/users/${userName}/events/public`;
        let apiOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `token ${GITHUB_MONTH_KEY}`
            }
        }

        const response = await fetch(url, apiOptions);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}


(() => {

    document.querySelector('button').addEventListener('click', async () => {
            let userName = document.querySelector('input').value;

            const userToDisplay = await getUser(userName);
            let pushEvents = userToDisplay.filter(event => event.type === "PushEvent");

            document.querySelector('#user-image').innerHTML = `<img class="rounded-pill" width="200px" src="${userToDisplay[0].actor.avatar_url}" alt="user profile image">`;
            document.querySelector('span').innerHTML = `Their last push was to this repo: ${pushEvents[0].repo.name} at this time: ${pushEvents[0].created_at}`;

        }
    )

})()