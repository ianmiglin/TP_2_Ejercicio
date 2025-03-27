let tarea
let listaTareas 
let i 


tarea = document.getElementById("Tarea")
const boton = document.getElementById("button")

function AgregarTarea()
{
    
    if(nombre.value.length<0)
    {

        console.log("Entro")
        alert("You need more than 3 characters")
        DisableButton()
    }
    else
    {
        AbleButton()
    }
}

function DisableButton()
{
    boton.disabled = true;
}

function AbleButton()
{
    boton.disabled = false;
}