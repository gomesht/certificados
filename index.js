var certificados = document.getElementById('certificados')
var projetos = document.getElementById('projetos')
var certificadoHTML = document.getElementById('certificadoHtml')
var certificadoCSS = document.getElementById('certificadoCss')
var certificadoJSBasico = document.getElementById('certificadoJsBasico')


function clickEvent(props) {
    switch (props.className) {
        case "mostrar":
            props.classList.remove('mostrar');
            props.classList.add('esconder');


            break
        case "esconder":
            props.classList.remove('esconder');
            props.classList.add('mostrar');

            break
        default:
            console.error("Erro de classe no certificado");
            break

    }


}