
const getData = async () => {
    let response = await axios.get(`http://ergast.com/api/f1/drivers.json`)
    console.log(response)
    return response.data
}


const DOM_Elements = {
    f1_list : '.f1_list'
}


const create_list = ( id, name ) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`;
    document.querySelector(DOM_Elements.f1_list).insertAdjacentHTML('beforeend', html)
}



const load_data = async () => {
    const f1 = await getData();

    f1.forEach( element => create_list(element.id, element.name))        
}

const clear_data = () => {
    document.querySelector(DOM_Elements.f1_list).innerHTML = ""
}