const arreglo=[
    {
      Id:1,
  titulo: "Inicio",
  href: "home.php"
    },
    {
      Id:7,
  titulo: "Contacto",
  href: "contact.php"
    },
    {
      Id:6,
  titulo: "Empresa",
  href: "about.php"
    },
    {
      Id:2,
  titulo: "Laboratorio",
  href: "laboratory.php"
    },
    {
      Id:4,
  titulo: "Alimentos",
  href: "foods.php",
  subitme: [
      
  ]
    },
    {
      Id:5,
  titulo: "Diagnóstico Clínico",
  href: "clinical-diagnostic.php"
    },
    {
      Id:8,
  titulo: "Productos",
  href: "products.php"
    },
    {
      Id:3,
  titulo: "Software",
  href: "software.php"
    }
  ]

// Se ordena el arreglo
  const arregloOrdenado = arreglo.sort((a,b)=>{
    if (a.Id<b.Id){
        return -1;
    }
    if (a.Id>b.Id){
        return 1;
    }
    if (a.Id == b.Id){
        return 0;
    }
})
//Se obtienen todas las etiquetas 'a' para su proxima modificación
const enlace_menu = document.querySelectorAll('a')


//Se recorre todo el arreglo
arregloOrdenado.map((i,a)=>{
    console.log(a)
    //Se modifica el href del enlace dinamicamente
    enlace_menu[a].href = i.href
    //Se modifica el titulo del enlace dinamicamente
    enlace_menu[a].textContent= i.titulo
})