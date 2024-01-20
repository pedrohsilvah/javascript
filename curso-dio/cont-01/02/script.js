const precoEtanol = 3.64;
const precoGasolina = 5.80;
const gastoPorKM = 10;
const distanciaEmKM = 100;

const escolha = "etanol"
const litrosConsumidos = distanciaEmKM / gastoPorKM;

if(escolha === "etanol"){
    const resultado = litrosConsumidos * precoEtanol
    console.log("Se a viagem for realizada com Etanol esse vai ser o gasto ", resultado)
} 

if(escolha === "gasolina"){
    const resultado = litrosConsumidos * precoGasolina
    console.log("Se a viagem for realizada com Gasolina esse vai ser o gasto ", resultado)
}