var FormularioUnico=document.getElementById("formularios");
var Alertas=document.getElementById("alertas");
let closet=[];
 const crear=(Input)=>{
  let cositas= {
     Input:Input
  }
  
  console.log(closet)
  closet.push(cositas);
  return cositas;
  
 }
 
 const Guardar=()=>{
     localStorage.setItem('rut', JSON.stringify(closet));
  Pinta()
 }
 const Pinta=()=>{
     Alertas.innerHTML=""
     closet=JSON.parse(localStorage.getItem('rut'))
 if(closet===null){
 closet=[]
 }else{
   closet.forEach(element=>{
       if(element.Input){
        Alertas.innerHTML+=`<div role="alert" class=" text-dark  alert alert-light"><b>${element.Input}</b></div>`
       }
   })
 }
 }



FormularioUnico.addEventListener("submit",function(e){
e.preventDefault()
var Input=document.getElementById("input").value
console.log(Input)
crear(Input)
Guardar()
FormularioUnico.reset()
// if(Input===""){
// console.log("SAD")
// }else{
//    Alertas.innerHTML+=`<div role="alert" class=" text-dark  alert alert-light"><b>${Input}</b></div>`
   
// }
})
document.addEventListener('DOMContentLoaded',Pinta)
 
//  var Input=document.getElementById("input");
// const boton=document.getElementById("boton");
// const Alertas=document.getElementById("alertas");
// // addEventListener("click",function(e){
// //     console.log(e.target)
// // })
//  Input.addEventListener("submit",function Todo (e){
//      e.preventDefault() ;
//      var Input=document.getElementById("input").value
//      Input.onkeyup()
//      console.log(Input)
//      Input.reset();
     
//      if(Input===""){
//      console.log("S")
//      }else{
//      Alertas.innerHTML+=' <div role="alert" class=" text-dark  alert alert-light">${Input}</div>'
//      }
//  })
// addEventListener("keyup",function sad(){
     
//     var Input
// })

