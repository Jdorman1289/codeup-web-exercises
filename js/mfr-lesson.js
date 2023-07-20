(() => {
    let url = 'data/houses.json';
    let apiOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, apiOptions).then((response) => {
        return response.json()
    }).then(data => {

        //filter
        let threeOrMoreBathHousesAtThisZip = data.filter(house => parseFloat(house.baths) >= 3).filter(house => house.addressZipcode === "78748");
        // console.log(threeOrMoreBathHousesAtThisZip);

        //map
        let housesPriceRange = data.map(house => `Address:\n${house.address}\n\nCan I afford it?\n${(house.price > 600_000) ? `No` : `Yes`}`);

        // for (let house of housesPriceRange) {
        //     console.log(house);
        // }

        //reduce
        let averageHousePrice = data.reduce((avgPrice, house) => parseFloat(house.price) + avgPrice, 0) / data.length;

        console.log(averageHousePrice.toLocaleString("en-US", {style: "currency", currency: "USD"}));

    })

})();