import './LegalPage.css';

function TermsConditions() {
  return (
    <section className="legal-page">
      <span className="legal-page__eyebrow">LEGAL</span>
      <h1 className="legal-page__title">Términos y Condiciones</h1>
      <p className="legal-page__updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

      <div className="legal-page__content">
        <h2>1. Objeto</h2>
        <p>
          Estas condiciones regulan la compra de productos a través de CTRL-GRIP, operado por{' '}
          <span className="legal-page__placeholder">[Tu nombre o razón social]</span>.
        </p>

        <h2>2. Proceso de compra</h2>
        <p>
          Al realizar un pedido, recibirás un email de confirmación. El contrato de compraventa se
          entiende perfeccionado en el momento en que se confirma el pago a través de nuestra
          pasarela de pago (Stripe).
        </p>

        <h2>3. Precios y pago</h2>
        <p>
          Todos los precios se muestran en euros (€) e incluyen IVA cuando sea aplicable. El pago se
          procesa de forma segura a través de Stripe. No almacenamos los datos de tu tarjeta.
        </p>

        <h2>4. Envíos</h2>
        <p>
          Los plazos y costes de envío se muestran antes de finalizar la compra. Enviamos a{' '}
          <span className="legal-page__placeholder">[países/zonas a las que envías]</span>.
        </p>

        <h2>5. Derecho de desistimiento</h2>
        <p>
          Dispones de <strong>14 días naturales</strong> desde la recepción del pedido para
          desistir de la compra sin necesidad de justificación, conforme al Real Decreto
          Legislativo 1/2007. Consulta nuestra Política de Devoluciones para el procedimiento.
        </p>

        <h2>6. Garantía</h2>
        <p>
          Todos los productos cuentan con garantía legal de conformidad de 3 años desde la entrega,
          conforme a la normativa española de consumo.
        </p>
      </div>
    </section>
  );
}

export default TermsConditions;