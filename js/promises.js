let userName = prompt('what username?')

let url = `https://api.github.com/users/${userName}/events/public`;
let apiOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'authorization': `token ${GITHUB_MONTH_KEY}`
    }
}

fetch(url, apiOptions).then((response) => {
    return response.json()
}).then(data => {
    // console.log(data);

    document.querySelector('#user-image').innerHTML = `<img = src="${data[0].actor.avatar_url}" alt="user profile image">`
    document.querySelector('p').innerHTML = `Their last push was to ${data[0].repo.name} at ${data[0].created_at}`

})
