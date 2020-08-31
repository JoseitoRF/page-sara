var encabezado=document.getElementById("reloj");

const timerid=null
function TimeNow() {
   var fecha=new Date();
// const Dia=fecha.getDate();
// const Mes= fecha.getMonth()+1;
// const año=fecha.getFullYear();
const Hora= fecha.getHours();
const minutos=fecha.getMinutes();
const segundos= fecha.getSeconds();  
var general= ""+((Hora>12)? Hora-12:Hora)
general+= ((minutos<10)?":0": ":")+minutos
general+= ((segundos<10)?":0": ":")+segundos
general+= (Hora>=12)?"PM":"AM"
return general
};


function Inicia() {
    encabezado.innerHTML=TimeNow()
    timerid=setTimeout("Inicia()",1000)
    clearTimeout()
};

  function Pb(){
   window.open("AJA.html","temp","width=900,height=900,top=900,left=900,menubar=no,scrollbar=no,location=no,resizable=no");
  }

// 


Fecha=()=>{

 document.addEventListener("click",function(e){
e.preventDefault()
console.log(e.target.innerHTML)
 var prueba=e.target
switch(prueba.innerHTML){
case "1":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "2":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "3":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "4":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "5":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "6":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "7":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "8":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "9":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "10":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "11":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "12":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "13":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "14":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "15":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "16":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "17":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "18":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "19":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "20":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "21":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "22":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "23":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "24":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "25":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "26":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "27":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "28":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "29":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "30":{
  prueba.style.backgroundColor="#c81912"
  break;
}
case "31":{
  prueba.style.backgroundColor="#c81912"
  break;
}

}

 })

 document.addEventListener("dblclick",function(e){
    e.preventDefault()
     var prueba1=e.target
     prueba1.style.backgroundColor=""
  })


    
}

DateC=()=>{
    var Calendario=document.getElementById("Calendario").value;
    var numeros=document.getElementById("Numeros")
    console.log(numeros)
    switch(Calendario){
        case "Enero":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Febrero":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>`
        break;
        case "Marzo":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Abril":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          `
        break;
        case "Mayo":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Junio":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
         `
        break;
        case "Julio":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Agosto":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Septiembre":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
        `
        break;
        case "Octubre":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;
        case "Noviembre":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
         `
        break;
        case "Diciembre":
            console.log(Calendario)
            numeros.innerHTML=`<tr>
            <td onclick="Fecha()" class="queta">1</td>
            <td onclick="Fecha()" class="queta">2</td>
            <td onclick="Fecha()" class="queta">3</td>
            <td onclick="Fecha()" class="queta">4</td>
            <td onclick="Fecha()" class="queta">5</td>
            <td onclick="Fecha()" class="queta">6</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">7</td>
            <td onclick="Fecha()" class="queta">8</td>
            <td onclick="Fecha()" class="queta">9</td>
            <td onclick="Fecha()" class="queta">10</td>
            <td onclick="Fecha()" class="queta">11</td>
            <td onclick="Fecha()" class="queta">12</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">13</td>
            <td onclick="Fecha()" class="queta">14</td>
            <td onclick="Fecha()" class="queta">15</td>
            <td onclick="Fecha()" class="queta">16</td>
            <td onclick="Fecha()" class="queta">17</td>
            <td onclick="Fecha()" class="queta">18</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">19</td>
            <td onclick="Fecha()" class="queta">20</td>
            <td onclick="Fecha()" class="queta">21</td>
            <td onclick="Fecha()" class="queta">22</td>
            <td onclick="Fecha()" class="queta">23</td>
            <td onclick="Fecha()" class="queta">24</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">25</td>
            <td onclick="Fecha()" class="queta">26</td>
            <td onclick="Fecha()" class="queta">27</td>
            <td onclick="Fecha()" class="queta">28</td>
            <td onclick="Fecha()" class="queta">29</td>
            <td onclick="Fecha()" class="queta">30</td>
          </tr>
          <tr>
            <td onclick="Fecha()" class="queta">31</td>
          </tr>`
        break;

    }
}
const logo=document.getElementById("logo");
const opciones=document.getElementsByClassName("Borde3")
console.log(opciones[0])
logo.addEventListener("click",function(){
// for(var i=0;i<opciones.length;i++){
//   console.log(opciones[i])
//  opciones[i].classList.toggle("Borde3")
// }
   console.log(opciones.length)
   for(var i=0;i<opciones.length;i++){
    console.log(opciones[i])
  opciones[i].classList.toggle("desaparece")
   }
})
const cate=document.getElementsByClassName("categoria");
const cate1=document.getElementsByClassName("CT1");
// console.log(cate[0].checked)
console.log(cate)
 console.log(cate1)

 addEventListener("load",function(){
   for(var ñ=0;ñ<cate1.length;ñ++){
     console.log(cate1[ñ].children[0].classList)
     cate1[ñ].children[0].classList="none"
    
   }
 })



// let produc = {
//     tipo:"pantalon",
// };
 var Producto=document.getElementsByClassName("Productos");


 
addEventListener("keyup",function(){
  var lupa=document.getElementsByClassName("buscador1")[0].value;
  console.log(lupa.toLowerCase())
  var asd2=document.getElementsByClassName("anuncios");
 
  
  for(var i=0;i<asd2.length;i++){
    var arr= new String(asd2[i].childNodes[3].innerHTML)
    
    console.log(arr.indexOf(lupa.toLowerCase()))

    var motor= lupa.toLowerCase()===asd2[i].childNodes[3].innerHTML

    if(arr.indexOf(lupa.toLowerCase())===-1){
      asd2[i].style.display="none"
    }else {
      asd2[i].style.display="grid"
    }

  
         }
})

  CT=()=>{
    var asd3=document.getElementsByClassName("anuncios");
   
    for(var w=0;w<asd3.length;w++){
       var arr= new String(asd3[w].childNodes[3].innerHTML) 
      //  console.log(cate1[w].children[0].children[0].value)
       console.log(cate1[w].children[0].children[0].value===arr)
       if(cate1[w].children[0].children[0].value=arr){
         asd3[w].style.display="grid"
       }
    }
      for(var u=0;u<cate1.length;u++){
        
        // console.log(cate1[u].children[0].children[0].checked)
        // console.log(cate1[u].children[0].children[0].value) 
       
        if(cate1[u].children[0].children[0].checked===true){
     cate1[u].children[0].classList="categoria"
   
         }else{
          cate1[u].children[0].classList="none"
         }
    
  
 
  }
  

}


