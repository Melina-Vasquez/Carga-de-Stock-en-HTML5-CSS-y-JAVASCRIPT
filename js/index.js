let NumeroDeArticulos =[];
let NombreDelArticulo =[];
let CantidadDisponible =[];

let i =0;

let CantidadTotalDeRegistros =0;
let PromedioDeCantidadTotal =0;
let NumeroArticuloMayorCantidad =0;
let NombreArticuloMayorCantidad =0;
let CantidadDeArticuloMayorCantidad =0;

function Agregar (){


var numeroarticulo = document.getElementById("txtNumeroDeArticulo");
var nombrearticulo = document.getElementById("txtNombreDeArticulo");
var cantidaddisponibles = document.getElementById("txtCantidadDisponible");

NumeroDeArticulos [i] = numeroarticulo.value;
NombreDelArticulo [i] = nombrearticulo.value;
CantidadDisponible [i] = cantidaddisponibles.value;

numeroarticulo.value="";
nombrearticulo.value="";
cantidaddisponibles.value="";

    var td0 = document.createElement ("td");
    td0.textContent = NumeroDeArticulos[i];

    var td1 = document.createElement ("td");
    td1.innerHTML = NombreDelArticulo[i];

    var td2 = document.createElement ("td");
    td2.textContent = CantidadDisponible[i];

    var tr = document.createElement ("tr");
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    
    var tbody = document.querySelector("tbody");
    tbody.appendChild(tr);


    i++;

  VerEstadisticas();
  ArticuloMayorCantidad();

}

function VerEstadisticas(){

    CantidadTotalDeRegistros =0;
    PromedioDeCantidadTotal =0;
    acumCantidadTotalDeRegistros =0;

    for(let i =0; i<CantidadDisponible.length; i ++){

        CantidadTotalDeRegistros++;

        acumCantidadTotalDeRegistros = acumCantidadTotalDeRegistros + parseInt(CantidadDisponible[i]); 
    }

    PromedioDeCantidadTotal = acumCantidadTotalDeRegistros / CantidadTotalDeRegistros;

    document.getElementById("lblCantidadTotalDeRegistros").textContent = CantidadTotalDeRegistros; 
    document.getElementById("lblPromedioDeCantidadTotal").innerText = PromedioDeCantidadTotal;
}

function ArticuloMayorCantidad(){

    let valorMax = Math.max(...CantidadDisponible);
    
    let indice = 0;
    for ( let i = 0; i <CantidadDisponible.length; i++){
        if(valorMax == CantidadDisponible[i]){
            indice = i;
        }
    }
    
    document.getElementById("lblNumeroDeArticuloMayorCantidadDisponible").innerText = NumeroDeArticulos[indice];
    document.getElementById("lblNombreDeArticuloMayorCantidadDisponible").textContent = NombreDelArticulo [indice];
    document.getElementById("lblCantidadDeArticuloMayorCantidadDisponible").innerText = CantidadDisponible[indice];
}