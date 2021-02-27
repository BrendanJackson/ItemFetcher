console.log("calling ajax");

$.ajax({
    url: 'https://fortniteapi.io/v2/items/list?lang=en',
    type: 'GET',
    dataType: 'json',
    // API KEY (Authorization header)
    // Authorization: 'c2418124-8c266c17-8be41c35-aa47ed62'
    headers: { Authorization: 'c2418124-8c266c17-8be41c35-aa47ed62' },
    beforeSend: function() {
        // // to be continued

        console.log("beforeSend")
    }
}).done(function(data) {
    // process data
    console.log("done")
    // console.log("data: " + data)

    console.log("data.result: " + data.result);
    if (data.result == true){
        items = data.items;
        // items = Object.entries(items);
        // console.log("items: " + items);
        // const card = document.createElement('div');
        // card.setAttribute('class', 'card');

        // for (var i = 0; i < items.length; i++){
        for (var i = 0; i < 24; i++){

            // console.log("items[i].name: " + items[i].name);
            // console.log("items[i].id: " + items[i].id);
            // console.log("items[i].description: " + items[i].description);
            // console.log("items[i].images.full_background: " + items[i].images.full_background);

            //assign container
            const main__deck = document.getElementById('main__deck');

            //assign cards
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Set name to h3
            const h3 = document.createElement('h3');
            h3.textContent = "Name: " + items[i].name;
//
            const pId = document.createElement('p');
            pId.textContent = "ID: " + items[i].id;

            const pDescription = document.createElement('p');
            pDescription.textContent = "Description: " + items[i].description;

            const img = document.createElement('img');
            img.src = items[i].images.full_background;

//         // Append the cards to the container element
            main__deck.appendChild(card);
//
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(pId);
            card.appendChild(pDescription);

        }

    }


}).fail(function() {
    // to be continued
    console.log("fail")
}).always(function() {
    // to be continued
    console.log("always")
});