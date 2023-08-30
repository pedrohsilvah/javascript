function trocarImagem(filename, animalname) {
    document.querySelector('.img').setAttribute('src' , 'img/'+filename);
    document.querySelector('.img').setAttribute('data-animal', animalname)
}

function pegarAnimal() {
    let animal = document.querySelector('.img').getAttribute('data-animal');
    alert("O nome do animal é: "+animal)
}