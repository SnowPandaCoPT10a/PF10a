import React from "react";
import './Terms.css'
import { Link } from 'react-router-dom';

function Terms (){
    return(
        <div className="preguntas-frecuentes">
        <h3 class="freq-title">TERMS AND CONDITIONS</h3>
        <div className="pregunta">
            <h3>Introducción</h3>
            <p >¡Bienvenido a SnowpandaCo! Estos Términos y Condiciones regulan el uso del sitio web de nuestra empresa y los servicios que ofrecemos. Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos Términos y Condiciones y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con estos Términos y Condiciones, no utilices nuestro sitio web.</p>
        </div>
        <div className="pregunta">
            <h3 >Uso del Sitio Web</h3>
            <p >El uso de nuestro sitio web está destinado a personas mayores de 18 años. Al utilizar nuestro sitio web, garantizas que tienes al menos 18 años. Nos reservamos el derecho de restringir el acceso a nuestro sitio web a cualquier persona en cualquier momento y por cualquier motivo.</p>
        </div>
        <div className="pregunta">
            <h3 >Propiedad Intelectual</h3>
            <p>Todos los contenidos de nuestro sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, iconos de botones, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, son propiedad de nuestra empresa o de nuestros proveedores de contenidos y están protegidos por las leyes de propiedad intelectual aplicables. No puedes copiar, reproducir, modificar, distribuir, transmitir, mostrar públicamente ni utilizar de ninguna manera los contenidos de nuestro sitio web sin nuestro previo consentimiento por escrito.</p>
        </div>  
        <div className="pregunta">
            <h3 >Responsabilidad del Usuario</h3>
            <p>Eres responsable de mantener la confidencialidad de tu cuenta de usuario y de cualquier información relacionada con ella, incluyendo tu contraseña. Eres responsable de todas las actividades que se lleven a cabo en tu cuenta de usuario. Si sospechas que alguien ha obtenido acceso no autorizado a tu cuenta de usuario, debes informarnos inmediatamente. No eres responsable de ninguna pérdida o daño causado por el uso no autorizado de tu cuenta de usuario, a menos que la pérdida o daño se deba a tu propia negligencia o incumplimiento de estos Términos y Condiciones.</p>
        </div>  
        <div className="pregunta">
            <h3 >Modificaciones de los Términos y Condiciones</h3>
            <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento y sin previo aviso. La versión actualizada de los Términos y Condiciones se publicará en nuestro sitio web y entrará en vigor inmediatamente después de su publicación. El uso continuado de nuestro sitio web después de la publicación de los Términos y Condiciones actualizados constituye tu aceptación de dichos cambios.</p>
        </div>  
        <div className="pregunta">
            <h3 >Ley Aplicable</h3>
            <p>Estos Términos y Condiciones se regirán e interpretarán de acuerdo con la <a href="https://www.argentina.gob.ar/normativa/nacional/ley-24240-638">Ley de Defensa al Consumidor, Ley 24.240</a></p>
        </div>  

         
    </div>
    )
    }
    export default Terms
