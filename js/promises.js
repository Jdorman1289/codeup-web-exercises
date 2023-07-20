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
    console.log(`The last push date from that user is: ${data[0].created_at}`);

})
