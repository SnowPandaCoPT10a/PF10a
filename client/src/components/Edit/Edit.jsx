import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postProducts, getAllProducts } from "../../Redux/actions/index";
import { Link, useNavigate } from "react-router-dom";

const validate = (input) => {
  let errors = {};

  const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

  if (!regex.test(input.name)) {
    errors.name = "Cannot be completed with numbers";
  }
  if (input.name === "") {
    errors.name = "Complete field";
  }
  if (input.category === "") {
    errors.category = "Complete field";
  }
  if (input.description === "") {
    errors.description = "Complete field";
  }
  if (input.price === "") {
    errors.price = "Complete field";
  }
  if (input.material === "") {
    errors.material = "Complete field";
  }
  if (input.activity === "") {
    errors.activity = "Complete field";
  }
  if (input.brand === "") {
    errors.brand = "Complete field";
  }
  if (input.model === "") {
    errors.model = "Complete field";
  }

  return errors;
};

//!!
function Create() {
    // Dadas la division que contiene todas las pestañas y la de la pestaña que se 
// quiere mostrar, la funcion oculta todas las pestañas a excepcion de esa.
function cambiarPestanna(pestannas, pestanna) {

    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);

    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c' + pestanna.id);
    listacPestannas = document.getElementById('contenido' + pestannas.id);

    i = 0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo 
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined') {
        $(document).ready(function () {
            $(listacPestannas.getElementsByTagName('div')[i]).css('display', 'none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background', '');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom', '');
        });
        i += 1;
    }

    $(document).ready(function () {
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el  
        // borde superior del contenido que esta juesto debajo y se vea de este 
        // modo que esta seleccionada.
        $(cpestanna).css('display', '');
        $(pestanna).css('background', 'dimgray');
        $(pestanna).css('padding-bottom', '2px');
    });

}

    //!-----------------------------------------------------------------------
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const numberSizes = useSelector((state) => state.allProducts);
  const sizeNumber = numberSizes?.filter((size) => size.numbersizes);
  const sizeLeter = numberSizes?.filter((size) => size.sizes);
  const [errors, setErrors] = useState({});
  const [newBrand, setNewBrand] = useState(false)

  //! aca traigo los numeros de los talles
  const sizes = sizeNumber?.reduce((acc, curr) => {
    curr.numbersizes.forEach((item) => {
      if (!acc.includes(item.size)) {
        acc.push(item.size);
      }
    });
    return acc.sort();
  }, []);

  //! aca traigo las palabras de los talles(s,l, x , xl)
  const sizesLeter = ["small", "medium", "large", "extraLarge", "one size"];

  //! aca traigo los talles de boards
  const sizesboard = ["one size"];

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    img: "",
    description: "",
    category: "",
    price: "",
    material: "",
    activity: "",
    brand: "",
    model: "",
    numbersizes: [],
    sizes: [],
    boardsizes: [],
    featuredProduct: false,
  });

  const handleFeaturedProduct = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked      
    });
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input));
    alert("Producto creado correctamente");
    setInput({
      name: "",
      img: "",
      description: "",
      category: "",
      price: "",
      material: "",
      activity: "",
      brand: "",
      model: "",
      numbersizes: [],
      sizes: [],
      boardsizes: [],
      featuredProduct: "",
    });
    dispatch(getAllProducts());
    navigate("/home");
  }
  function handleClickCategory(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInput({
      name: "",
      img: "",
      description: "",
      category: e.target.value,
      price: "",
      material: "",
      activity: "",
      brand: "",
      model: "",
      numbersizes: [],
      sizes: [],
      boardsizes: [],
      featuredProduct: "",
    });
    document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  //!checkbox BoardSizes
  function handleBoardStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.boardsizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        boardsizes: [
          ...input.boardsizes,
          {
            size: e.target.name,
            stock: e.target.value,
          },
        ],
      });
    } else {
      const newSizes = [...input.boardsizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        boardsizes: newSizes,
      });
    }
  }

  //!checkbox NumberSizes
  function handleNumberStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.numbersizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        numbersizes: [
          ...input.numbersizes,
          {
            size: e.target.name,
            stock: e.target.value,
          },
        ],
      });
    } else {
      const newSizes = [...input.numbersizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        numbersizes: newSizes,
      });
    }
  }

  //!checkbox Sizes

  function handleStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.sizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        sizes: [
          ...input.sizes,
          {
            size: e.target.name,
            stock: nuevoNumero,
          },
        ],
      });
    } else {
      const newSizes = [...input.sizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        sizes: newSizes,
      });
    }
  }

  console.log(input.category, "CATEGORY");
  //!!!!!

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  console.log("acac", input);

  return (
    
    <div class="contenedor">
            <div class="titulo">¿Sobre que escribiré en el blog?</div>
            <div id="pestanas">
                <ul id='lista'>
                    <li id="pestana1"><a href={onclick="cambiarPestanna('pestannas', 'pestanna1')"}>HTML</a>
                    </li>
                    <li id="pestana2"><a href={onclick="cambiarPestanna('pestannas', 'cpestana2')"}>CSS</a>
                    </li>
                    <li id="pestana3"><a href={onclick="cambiarPestanna('pestannas', 'cpestana2')"}>JavaScript</a>
                    </li>
                    <li id="pestana4"><a href={onclick="cambiarPestanna('pestannas', 'pestanna1')"}>PHP</a>
                    </li>
                    <li id="pestana5"><a href={onclick="cambiarPestanna('pestannas', 'pestanna1')"}>Java EE</a>
                    </li>
                    <li id="pestana6"><a href={onclick="cambiarPestanna('pestannas', 'pestanna1')"}>Android</a>
                    </li>
                </ul>
            </div>
            
            <body onload="javascript:cambiarPestanna(pestanas,pestana6);">
                <div id="contenidopestanas">
                    <div id="cpestana1">HTML, siglas de HyperText Markup Language («lenguaje de marcado de hipertexto»), hace referencia al lenguaje de marcado predominante para la elaboración de páginas web que se utiliza para describir y traducir la estructura y la información en forma de texto, así como para complementar el texto con objetos tales como imágenes. El HTML se escribe en forma de «etiquetas», rodeadas por corchetes angulares (
                        ). HTML también puede describir, hasta un cierto punto, la apariencia de un documento, y puede incluir un script (por ejemplo JavaScript), el cual puede afectar el comportamiento de navegadores web y otros procesadores de HTML.</div>
                    <div id="cpestana2">El nombre hojas de estilo en cascada viene del inglés Cascading Style Sheets, del que toma sus siglas. CSS es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML2 (y por extensión en XHTML). El W3C (World Wide Web Consortium) es el encargado de formular la especificación de las hojas de estilo que servirán de estándar para los agentes de usuario o navegadores.</div>
                    <div id="cpestana3">JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3 basado en prototipos, imperativo, débilmente tipado y dinámico.</div>
                    <div id="cpestana4">PHP es un lenguaje de programación de uso general de script del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico. Fue uno de los primeros lenguajes de programación del lado del servidor que se podían incorporar directamente en el documento HTML en lugar de llamar a un archivo externo que procese los datos. El código es interpretado por un servidor web con un módulo de procesador de PHP que genera la página Web resultante. PHP ha evolucionado por lo que ahora incluye también una interfaz de línea de comandos que puede ser usada en aplicaciones gráficas independientes. PHP puede ser usado en la mayoría de los servidores web al igual que en casi todos los sistemas operativos y plataformas sin ningún costo.</div>
                    <div id="cpestana5">Java Platform, Enterprise Edition o Java EE (anteriormente conocido como Java 2 Platform, Enterprise Edition o J2EE hasta la versión 1.4; traducido informalmente como Java Empresarial), es una plataforma de programación—parte de la Plataforma Java—para desarrollar y ejecutar software de aplicaciones en el lenguaje de programación Java. Permite utilizar arquitecturas de N capas distribuidas y se apoya ampliamente en componentes de software modulares ejecutándose sobre un servidor de aplicaciones. La plataforma Java EE está definida por una especificación. Similar a otras especificaciones del Java Community Process, Java EE es también considerada informalmente como un estándar debido a que los proveedores deben cumplir ciertos requisitos de conformidad para declarar que sus productos son conformes a Java EE; estandarizado por The Java Community Process / JCP.</div>
                    <div id="cpestana6">Android es un sistema operativo móvil basado en Linux, que junto con aplicaciones middleware8 está enfocado para ser utilizado en dispositivos móviles como teléfonos inteligentes, tabletas, Google TV y otros dispositivos.9 Es desarrollado por la Open Handset Alliance, la cual es liderada por Google. Este sistema por lo general maneja aplicaciones como Google Play.</div>
                </div>
            </body>
        </div>
    
  );
}
export default Create;