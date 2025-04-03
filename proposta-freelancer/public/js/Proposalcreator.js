// INPUTS
let Prodescription = document.querySelector("#iddescriçao")
let Proprazo = document.querySelector("#idprazo")
let Propreco = document.querySelector("#idpreço")
// ENVIAR VALORES
let submit = document.querySelector("#proposalsubmit")

// TEXTOS PARA TROCAR COM SWITCH
let TxtDescrição = document.querySelector("#textdescrição")
let TxtPrazo = document.querySelector("#textprazo")
let TxtPreço = document.querySelector("#textpreço")

class Proposta {
    constructor(description, prazo, price) {
        this.description = description
        this.prazo = prazo
        this.price = price
    }
}

const PropostaData = JSON.parse(localStorage.getItem("PropostaData")) || []

submit.addEventListener("click", () => {
    const order = new Proposta(
        Prodescription.value,
        Proprazo.value,
        Propreco.value
    )

    PropostaData.push(order)
    console.log(PropostaData)
})

localStorage.setItem("PropostaData", JSON.stringify(PropostaData))

// <SELECT>
let Options = document.querySelector("#idformularios")
let OptionsValue = Options.value


Options.addEventListener("change", () => {

let OptionsValue = Options.value

    console.log(OptionsValue)
    switch (OptionsValue) {
        case "Simples":
            TxtDescrição.innerHTML = "Descrição do Serviço: "
            TxtPrazo.innerHTML = "Prazo do Trabalho: "
            TxtPreço.innerHTML = "Preço: "
            break
        case "Moderno":
            TxtDescrição.innerHTML = "Tipo do Frete"
            TxtPrazo.innerHTML = "Prazo de entrega:"
            TxtPreço.innerHTML = "Valor do Frete: "
            break
        case "Corporativo":
            TxtDescrição.innerHTML = "Descrição do Produto:"
            TxtPrazo.innerHTML = "Dias de produção:"
            TxtPreço.innerHTML = "Valor do Produto: "
            break
        default:
            TxtDescrição.innerHTML = "Descrição do Serviço: "
            TxtPrazo.innerHTML = "Prazo do Trabalho: "
            TxtPreço.innerHTML = "Preço: "
            break
    }

})

