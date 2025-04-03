let clientname = document.querySelector("#idnome")
let clientmail = document.querySelector("#ide-mail")
let clientfone = document.querySelector("#idtelefone")
let clientrazao = document.querySelector("#idrazao")
let clientcnpj = document.querySelector("#idcnpj")

// Botão de enviar do formulário
let subclient = document.querySelector("#clientsubmit")

class Client {
        constructor(name, email, fone, razao, cnpj) {
        this.name = name,
        this.email = email,
        this.fone = fone,
        this.razao = razao,
        this.cnpj = cnpj
    }
}
const ClientsData = JSON.parse(localStorage.getItem("ClientsData")) || []

subclient.addEventListener("click", () => {
    const client = new Client(
        clientname.value,
        clientmail.value,
        clientfone.value,
        clientrazao.value,
        clientcnpj.value
    )

ClientsData.push(client)

localStorage.setItem("ClientsData", JSON.stringify(ClientsData))

console.log(ClientsData)
})