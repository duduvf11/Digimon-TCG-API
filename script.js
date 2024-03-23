function fetchDigAPI(){
    fetch('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#fill_list')
        
        data.map((item) => {
            const li = document.createElement('li')

            li.setAttribute('id', item.id)
            li.innerHTML = `${item.name} | ${item.cardnumber}`
            list.appendChild(li)
        })
    })
}

