//busca um elemento no html e salva em uma variavel
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


//funcao que vai abrir e fechar o menu
function abreFechaMenu(){

    //se o menu esta fechado 
    if(menu.classList.contains("menu-fechado")){
        //abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icone
        iconeX.style.display = "inline"

        //esconder icone de barras
        iconeBarras.style.display = "none"

    }
    //senao 
    else{

        //fechar o menu
        menu.classList.add("menu-fechado")

        //esconder icone x
        iconeX.style.display = "none"

        //mostrar icones de barras
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconeBarras.style.display = "inline"


}