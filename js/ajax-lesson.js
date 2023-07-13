function renderTableHead(data) {
    let info = [];
    data.forEach(item => {
        info.push(`<td>${item.title}</td>`);
    })
    return info.join('');
}

function renderItemQuantity(data) {
    let info = [];
    data.forEach(item => {
        info.push(`<td>Quantity: ${item.quantity}</td>`);
    })
    return info.join('');
}

function renderItemPrice(data) {
    let info = [];
    data.forEach(item => {
        info.push(`<td>Price: $${item.price}</td>`);
    })
    return info.join('');
}

function renderItemCategories(data) {
    let info = [];
    data.forEach(item => {
        info.push(`<td>Type: ${item.categories}</td>`);
    })
    return info.join('');
}

$.ajax({
    url: 'data/inventory.json',
    type: 'GET',
}).done((data) => {
    console.log(data)
    document.querySelector('tr').innerHTML = `${renderTableHead(data)}`;
    document.querySelector('tbody').firstElementChild.innerHTML = `${renderItemQuantity(data)}`;
    document.querySelector('tbody').firstElementChild.nextElementSibling.innerHTML = `${renderItemPrice(data)}`;
    document.querySelector('tbody').lastElementChild.innerHTML = `${renderItemCategories(data)}`;
})