
// // for (let index = 0; index < liElement.length; index++) {
// //     console.log(liElement[index].textContent)    
// // }

// // console.log(liElement)

// // let nr1 = [1,2,3,4,5];
// // let nr2 = [6,7,8,9,10];
// // let nr3 = [nr1,nr2]

// // console.log(`Array-1 ${nr1}`);
// // console.log(`Array-2 ${nr2}`);
// // console.log(`Array-3 ${nr3}`);

// // nr3.forEach((itemDoArray) =>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);
// // })


// // // listando array com MAP
// // nr3.map((numero,key)=>{
// //      log(`Itens do array - ${(key+1) - numero}`);
// // })


// // let nr1 = [1,2,3,4,5];
// // let nr2 = [6,7,8,9,10];
// // //Espalhar o array com SPREAD [ ... ]
// // let nr3 = [...nr1,nr2]

// // console.log(`Array-1 ${nr1}`);
// // console.log(`Array-2 ${nr2}`);
// // console.log(`Array-3 ${nr3}`);



// //CONVERTENDO HTML COLLECTION EM ARRAY DE FORMA INDIRETA 
// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// liElementArray.map((item,key)=>{
//     console.log(``)
// })

// function soma(parametro) {
//     nr1 = 10;
//     nr2 = 5; 
//     console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
//     console.log(`Este é o parametro que foi passado: ${parametro}`)
// }


// //ARROW FUNCTION
// const mudaCor = ()=>{

//     //FUNÇÂO SET TIME-OUT
//     setTimeout(alert("EXECUTOU"), 5000)

// }

// mudaCor();

function mudaCor(){
    
    let r = "";
    let g = "";
    let b = "";

    //random = Gera números aleatórios entre 0 e 1
    //ceil, floor e round, arredondam o número para cima, baixo e aleatóriamente.

    //Determinando para a variável r um valor entre 0 e 255
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    const cabecalho = document.querySelector(".central");

    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`)

    tmp = setTimeout(mudaCor,1000)

}


function alteraImg(){

   let caminho = "/img/banner-lateral-2.png"

   const img1 = document.querySelector(".l-e > img")

   img1.src  = caminho
}

alteraImg();