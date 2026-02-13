const elements = {
    colapseDrop: document.querySelectorAll('.colapseDrop'),
    showInfo: document.querySelectorAll('.showInfo'),
    arrowDrop: document.querySelectorAll('.arrowDrop'),
    changeText: document.querySelectorAll('.changeText'),
    insertEducation: document.getElementById('insertEducation')

}


function showDrops() {

    elements.colapseDrop.forEach((drop, index) => {
        drop.addEventListener('click', () => {
            elements.showInfo[index].classList.toggle('show');
            if(elements.showInfo[index].classList.contains('show')) {
                elements.arrowDrop[index].classList.remove("flutuante");
                elements.changeText[index].innerText = "Fechar.";
            }else{
                elements.arrowDrop[index].classList.add("flutuante");
                if(index === 0 ){
                    elements.changeText[index].innerText = "Sobre mim.";
                }else{
                    elements.changeText[index].innerText = "Saiba Mais.";
                }
            }
        })
    })
}

async function showEducation(){
    const education = await fetch('./JSON/education.json')
        .then(response => response.json())

    education.forEach(item => {
        const div = document.createElement('div')
        div.classList.add(item.class, 'identado', 'grow-letter')
        div.innerHTML = `
            <h3>${item.school} ${item.image ? `<img src="${item.image ? item.image : ""}" alt="${item.school ? item.school : ""}" width="40">` : ''}</h3>
            <p class="main-text">${item.course}</p>
            <p>${item.description}</p>
        `
        elements.insertEducation.appendChild(div)
    })
}


function init() {
    showDrops()
    showEducation()
}

init()  