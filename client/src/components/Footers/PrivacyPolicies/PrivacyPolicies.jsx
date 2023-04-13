import React from "react";
import './PrivacyPolicies.css'



function PrivacyPolicies() {

    const handleClick = () => {
        window.location.href = `mailto:snowpandaco@gmail.com?subject=Consulta&body=Mi%20consulta%20es%20:`;
    };
    return (
        <div className="preguntas-frecuentes">
            <h3 class="freq-title">POLÍTICAS DE PRIVACIDAD</h3>
            <div className="pregunta">
                <h3>Información que recopilamos</h3>
                <p >Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, información de pago, información de envío y cualquier otra información que proporciones al realizar una compra o registrarte en nuestro sitio web.</p>
            </div>
            <div className="pregunta">
                <h3 >Cómo utilizamos tu información</h3>
                <p >Utilizamos la información que recopilamos para procesar tus compras, comunicarnos contigo sobre tus pedidos y proporcionarte información sobre nuestros productos y promociones.</p>
            </div>
            <div className="pregunta">
                <h3 >Cómo compartimos tu información</h3>
                <p>No vendemos ni alquilamos tu información a terceros. Compartimos tu información solo con proveedores de servicios que necesitan acceder a ella para brindarte servicios en nuestro nombre, como procesar pagos y enviar paquetes.</p>
            </div>
            <div className="pregunta">
                <h3 >Cómo protegemos tu información</h3>
                <p >Tomamos medidas de seguridad razonables para proteger tu información contra el acceso no autorizado o la divulgación. Utilizamos tecnología de cifrado SSL para proteger la información de pago.</p>
            </div>
            <div className="pregunta">
                <h3 >Cambios en nuestras políticas de privacidad</h3>
                <p >Podemos actualizar nuestras políticas de privacidad de vez en cuando. Te notificaremos cualquier cambio importante en nuestras políticas de privacidad enviándote un correo electrónico a la dirección que nos proporcionaste o publicando un aviso en nuestro sitio web.</p>
            </div>
            <div className="pregunta">
                <h3 >Contacto</h3>
                <p >Si tienes alguna pregunta o inquietud sobre nuestras políticas de privacidad, contáctanos a través del correo electrónico snowpandaco@gmail.com</p>
                <button className='correo-button' onClick={handleClick}>Enviar correo </button>
            </div>
        </div>
    )
}
export default PrivacyPolicies