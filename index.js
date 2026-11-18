function abrirModalDetalhesV1(){
    const modal = document.querySelector("#modalDetalheV1")
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    modal.classList.remove("hidden")
    modal.classList.add("flex")

}

function fecharModalDetalhesV1(){
    const modal = document.querySelector("#modalDetalheV1")
    const body = document.querySelector("body")
    body.classList.remove("overflow-hidden")
    modal.classList.remove("flex")
    modal.classList.add("hidden")

}