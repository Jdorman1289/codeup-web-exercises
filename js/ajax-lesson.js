function renderTableHead(data) {
    let info = [];
    data.forEach(item => {
        info.push(`<td>${item.title}</td>`);
    })
    return info.join('');
}



$.ajax({
    url: 'data/inventory.json',
    type: 'GET',
}).done((data) => {
    console.log(data)
    document.querySelector('tr').innerHTML = `${renderTableHead(data)}`;

})