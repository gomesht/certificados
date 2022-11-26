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
            switch (props.id) {
                case "certificados":
                    projetos.classList.remove('mostrar');
                    projetos.classList.add('esconder');
                    console.log("esconde projetos")
                    break

                case "projetos":
                    certificados.classList.remove('mostrar');
                    certificados.classList.add('esconder');
                    console.log("esconde certificados")
                    break

                case "certificadoHtml":
                    certificadoCSS.classList.remove('mostrar');
                    certificadoCSS.classList.add('esconder');

                    certificadoJSBasico.classList.remove('mostrar');
                    certificadoJSBasico.classList.add('esconder');
                    console.log("esconde o que não é html")
                    break
                case "certificadoCss":
                    certificadoHTML.classList.remove('mostrar');
                    certificadoHTML.classList.add('esconder');

                    certificadoJSBasico.classList.remove('mostrar');
                    certificadoJSBasico.classList.add('esconder');
                    console.log("esconde o que não é css")
                    break
                case "certificadoJsBasico":
                    certificadoHTML.classList.remove('mostrar');
                    certificadoHTML.classList.add('esconder');

                    certificadoCSS.classList.remove('mostrar');
                    certificadoCSS.classList.add('esconder');
                    console.log("esconde o que não é js")
                    break
                default:
                    console.error("Erro de classe no certificado");
                    console.log(props)
                    break




            }


            break
        default:
            console.error("Erro de classe no certificado");
            break

    }


}