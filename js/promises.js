const getUser = userName => {
    let url = `https://api.github.com/users/${userName}/events/public`;
    let apiOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `token ${GITHUB_MONTH_KEY}`
        }
    }

    return fetch(url, apiOptions).then((response) => {
        return response.json()
    }).catch((error) => {
        console.log(error.message);
    })
}


(() => {

    document.querySelector('button').addEventListener('click', () => {
            let userName = document.querySelector('input').value;
            getUser(userName).then(user => {

                document.querySelector('#user-image').innerHTML = `<img class="rounded-pill" width="200px" src="${user[0].actor.avatar_url}" alt="user profile image">`
                document.querySelector('span').innerHTML = `Their last push was to this repo: ${user[0].repo.name} at this time: ${user[0].created_at}`


            }).catch((error) => {
                console.log(error.message);
            })
        }
    )

})()