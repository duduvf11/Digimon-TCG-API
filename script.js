function fetchDigAPI(){
    fetch('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#fill_list')
        list.innerHTML = ''
        
        data.map((item) => {
            const li = document.createElement('li')

            li.setAttribute('id', item.id)
            li.innerHTML = `${item.name} <br/>${item.cardnumber} <br/><br/>`
            list.appendChild(li)
        })

    })
    .catch((err) => console.log(err))
}

function searchDigAPI(){

        const value = document.querySelector('#search_input').value
        
        fetch('https://digimoncard.io/api-public/search.php?n=' + value)
        .then((res) => res.json())
        .then((data) => {
            const search_list = document.querySelector('#search_list')
            search_list.innerHTML = ''
            
            if (value === '') {
                const errorLi = document.createElement('li')
                errorLi.textContent = 'Por favor, insira um valor no campo de pesquisa.'
                search_list.appendChild(errorLi)
                return;
            }

            if (!Array.isArray(data)) {
                const errorLi = document.createElement('li')
                errorLi.textContent = 'Nenhum resultado encontrado.'
                search_list.appendChild(errorLi)
                return;
            }

            data.forEach((item) => {
                const li = document.createElement('li')

                li.setAttribute('id', item.id)
                li.innerHTML = `name: ${item.name}<br />card number: ${item.cardnumber} <br /> digi_type: ${item.digi_type} <br /> image: <br><img src="${item.image_url}"></img><br /> <br />`
                search_list.appendChild(li)
            })
            document.querySelector('input').value = ''
        })
        .catch((err) => console.error(err))
}

function limparPesquisa(){
    document.querySelector('#search_list').innerHTML = ''

}

function limparLista(){
    document.querySelector('#fill_list').innerHTML = ''

}
