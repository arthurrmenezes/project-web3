document.querySelector("#paginas").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)
document.querySelector("#prazo").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function() {
    document.querySelector("label[for=prazo]").innerText = "Prazo: " + prazo
    calcular()
})

function calcular() {
    const qtdeDeCripto = document.querySelector("#paginas").value
    let valor = qtdeDeCripto * 5.25

    const tipo = document.querySelector("#tipo").value
    if (tipo == 2) {
        valor = valor + (valor * 20/100)
    }

    const prototipo = document.querySelector("#prototipo_sim").checked
    if (prototipo) {
        valor = valor + (valor * 10/100)
    } 
    

    document.querySelector("#valor").innerText = "R$ " + valor.toFixed(5)
}