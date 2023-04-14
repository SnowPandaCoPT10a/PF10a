import React from "react";
import './PagosRetiros.css'

function PagosRetiros() {
    return (
        <div className="preguntas-frecuentes">
        <h2 class="freq-title">Payments and Withdrawals</h2>
            <div className="pregunta">
                <h3 className="payment-title">Tarjeta de Crédito o Débito</h3>
                <p className="payment-text">Aceptamos pagos con tarjeta de crédito y débito a través de
            MercadoPago, una plataforma de pagos en línea segura y confiable.
            Puedes pagar con cualquier tarjeta de crédito o débito emitida en
            Argentina</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">Transferencia Bancaria</h3>
                <p className="payment-text">También aceptamos pagos por transferencia bancaria. Para hacer una
            transferencia, por favor contáctanos a través de nuestro correo
            electrónico y te proporcionaremos los detalles de nuestra cuenta
            bancaria.</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">Pagos en Efectivo</h3>
                <p className="payment-text">Si prefieres pagar en efectivo, puedes hacerlo a través de
            MercadoPago utilizando un cupón de pago en cualquier punto de pago
            adherido, como Pago Fácil, Rapipago, Cobro Express, entre otros.
            Una vez que hayamos recibido el pago, enviaremos tu pedido.</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">Retiros</h3>
                <p className="payment-text"> Actualmente, los retiros se realizan por correo. Por favor, contáctanos a través de nuestro correo electrónico y te proporcionaremos los detalles necesarios para realizar el retiro.</p>
            </div>
        </div>
    );
}
export default PagosRetiros