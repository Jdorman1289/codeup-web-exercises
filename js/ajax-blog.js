
function renderItems(data) {
    let info = [];
    data.forEach(item => {
        info.push(`
<div class="row text-center">
    <div class="col-12 mb-5">
        <h1>${item.title}</h1>
    </div>
    <div class="col">
        <h2>${item.date}</h2>
    </div>
    <div class="col">
        <h3>${item.categories}</h3>
    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <p>${item.content}</p>
    </div>
</div> 
`);
    })
    return info.join('');
}


$.ajax({
    url: 'data/blog.json',
    type: 'GET'
}).done((data) => {
    document.querySelector('div').innerHTML = renderItems(data);
})