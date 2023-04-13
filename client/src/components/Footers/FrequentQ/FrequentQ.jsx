import React from 'react';
import './FrequentQ.css'

function FrequentQ (){
return(
    <div className="preguntas-frecuentes">
    <h2 class="freq-title">Frequent Questions</h2>
    <div className="pregunta">
      <h3>¿Cuáles son los plazos de entrega?</h3>
      <p>
        Los plazos de entrega dependen del lugar de envío y el tipo de envío
        seleccionado. Generalmente, los pedidos tardan entre 3 y 7 días
        hábiles en llegar después de que se haya confirmado el pago.
      </p>
    </div>
    <div className="pregunta">
      <h3>¿Qué hago si no me gusta lo que compré?</h3>
      <p>
        Si no estás satisfecho con tu compra, puedes devolverla en un plazo de
        15 días después de recibirla. Para más información sobre el proceso de
        devolución, por favor consulta nuestra sección de devoluciones.
      </p>
    </div>
    <div className="pregunta">
      <h3>¿Qué métodos de pago aceptan?</h3>
      <p>
        Aceptamos pagos con tarjeta de crédito y débito, transferencias
        bancarias y pagos en efectivo a través de plataformas de pago en línea
        como MercadoPago.
      </p>
    </div>
    <div className="pregunta">
      <h3>¿Cómo puedo hacer seguimiento de mi pedido?</h3>
      <p>
        Cuando tu pedido sea enviado, te enviaremos un correo electrónico con
        un número de seguimiento y un enlace para que puedas hacer seguimiento
        en línea. También puedes hacer seguimiento de tu pedido iniciando
        sesión en tu cuenta en nuestro sitio web.
      </p>
    </div>
  </div>
);
};
export default FrequentQ