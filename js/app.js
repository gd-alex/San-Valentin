// const header = document.querySelector("header");
// const footer = document.querySelector("footer");

// header.innerHTML = `
// <p>soy el header</p>
// `;

// footer.innerHTML = `
// soy el footer
// `;

// const div = document.querySelector(".writeEfect"),
//     texto = "Hola linda!";

// function textTyping(elemento, texto, i = 0){
//     elemento.textContent += texto[i];

//     if (i=== texto.length-1) return;

//     setTimeout( ()=> textTyping(div,texto,i+1),100);
// }

// textTyping(div, texto)

function countTo(){
    let from = 100;
    let to = 929;
    let step = to > from ? 1 : -1;
    let interval = 1;

    if(from == to){
        document.querySelector("#dias").
        textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#dias").
        textContent = from;

        if(from == to){
            clearInterval(counter)
        }
    }, interval);
    
}

countTo();

// 

function countTo2(){
    let from = 1;
    let to = 45;
    let step = to > from ? 1 : -1;
    let interval = 50;

    if(from == to){
        document.querySelector("#salidas").
        textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#salidas").
        textContent = from;

        if(from == to){
            clearInterval(counter)
        }
    }, interval);
    
}

countTo2();

// 
function countTo3(){
    let from = 1;
    let to = 100;
    let step = to > from ? 1 : -1;
    let interval = 25;

    if(from == to){
        document.querySelector("#mensajes").
        textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector("#mensajes").
        textContent = from;

        if(from == to){
            clearInterval(counter)
        }
    }, interval);
    
}

countTo3();