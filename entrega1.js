//Entrega 1


//Funciones
function validacionCategoria (categoriaAvalidar){
    if(categorias.includes(categoriaAvalidar)){
        return 1;
    }else{
        return 0;
    }
}

function validacionProductos (productoAvalidar){
    if(productos.includes(productoAvalidar)){
        return 1;
    }else{
        return 0;
    }
}

function ingresoOjos (){
    let productosOjos
    let existeProductoOjos
    do{
        productosOjos= prompt("Tenemos estos productos disponbles: sombra, delineador. ¿Que necesitas?")
        existeProductoOjos= validacionProductos(productosOjos)
    }while(existeProductoOjos==0)
    productosPedidos.push(productosOjos)
    return ;
}

function ingresoLabios (){
    let productosLabios
    let existeProductoLabios
    do{
        productosLabios= prompt("Tenemos estos productos disponbles: labial, gloss. ¿Que necesitas?")
        existeProductoLabios= validacionProductos(productosLabios)
    }while(existeProductoLabios==0)
    productosPedidos.push(productosLabios)
    return ;
}

function ingresoCara (){
    let productosCara
    let existeProductoCara
    do{
        productosCara= prompt("Tenemos estos productos disponbles: base, corrector, polvo. ¿Que necesitas?")
        existeProductoCara=validacionProductos(productosCara);
    }while(existeProductoCara==0)
    productosPedidos.push(productosCara)
    return ;
}

// Globales
const productos =["sombra","delineador","labial","gloss","base","corrector","polvo"]
const categorias =["ojos","labios","cara"]
const productosPedidos =[]


//Main
let existeCategoria
let categoriaPedida
let sigueCompra= confirm("¿Quiere comprar algun producto de maquillaje?")
while(sigueCompra==true){
    do{
        categoriaPedida= prompt("Que categoria: ojos, labios, cara")  
        existeCategoria= validacionCategoria(categoriaPedida);  
    }while(existeCategoria==0);

    switch (categoriaPedida){
        case "ojos":
            ingresoOjos()
        break;
        case "labios":
            ingresoLabios()
        break;
        case "cara":
            ingresoCara()
        break;
        default:
    }
    sigueCompra= confirm("¿Quiere volver a comprar algun producto de maquillaje?")
}
if( sigueCompra==false){
    alert("Gracias por su tiempo")
}else{
    alert("Este seria su pedido" + productosPedidos)
}

