import './LegalPage.css';

function ReturnsPolicy() {
  return (
    <section className="legal-page">
      <span className="legal-page__eyebrow">LEGAL</span>
      <h1 className="legal-page__title">Política de Devoluciones</h1>
      <p className="legal-page__updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

      <div className="legal-page__content">
        <h2>1. Plazo de devolución</h2>
        <p>
          Tienes 14 días naturales desde que recibes tu pedido para solicitar la devolución,
          sin necesidad de justificar el motivo.
        </p>

        <h2>2. Condiciones del producto</h2>
        <p>
          El producto debe devolverse sin usar, en su embalaje original y con todas las etiquetas.
          Por razones de higiene, los calcetines y accesorios de contacto directo con la piel solo
          se aceptan si el embalaje no ha sido abierto.
        </p>

        <h2>3. Cómo solicitar una devolución</h2>
        <p>
          Escríbenos a <span className="legal-page__placeholder">[tu@email.com]</span> indicando tu
          número de pedido y el motivo. Te facilitaremos las instrucciones para el envío.
        </p>

        <h2>4. Gastos de devolución</h2>
        <p>
          Los gastos de envío de la devolución corren a cargo del cliente, salvo que el producto
          esté defectuoso o el error sea nuestro.
        </p>

        <h2>5. Reembolso</h2>
        <p>
          Una vez recibida y verificada la devolución, procesaremos el reembolso en un plazo máximo
          de 14 días, utilizando el mismo método de pago que usaste en la compra.
        </p>
      </div>
    </section>
  );
}

export default ReturnsPolicy;