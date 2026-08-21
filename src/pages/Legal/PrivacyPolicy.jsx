import './LegalPage.css';
import { usePageMeta } from '../../hooks/usePageMeta';

function PrivacyPolicy() {
  return (
    <section className="legal-page">
      <span className="legal-page__eyebrow">LEGAL</span>
      <h1 className="legal-page__title">Política de Privacidad</h1>
      <p className="legal-page__updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

      <div className="legal-page__content">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <span className="legal-page__placeholder">[Tu nombre o razón social]</span>, con email de
          contacto <span className="legal-page__placeholder">[tu@email.com]</span>, es responsable
          del tratamiento de los datos personales que nos facilites a través de este sitio web.
        </p>

        <h2>2. Datos que recogemos</h2>
        <ul>
          <li>Datos de contacto: nombre, email, dirección de envío, teléfono</li>
          <li>Datos de pago: procesados directamente por Stripe, no almacenamos números de tarjeta</li>
          <li>Datos de navegación: mediante cookies (ver Política de Cookies)</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <ul>
          <li>Gestionar y enviar tus pedidos</li>
          <li>Responder a tus consultas de contacto</li>
          <li>Enviarte comunicaciones comerciales, solo si te has suscrito voluntariamente a la newsletter</li>
        </ul>

        <h2>4. Base legal</h2>
        <p>
          El tratamiento se basa en la ejecución de un contrato (tu pedido), tu consentimiento
          (newsletter) y el cumplimiento de obligaciones legales (facturación).
        </p>

        <h2>5. Conservación de datos</h2>
        <p>
          Tus datos se conservarán mientras exista una relación comercial y, posteriormente,
          durante los plazos legalmente exigidos (fiscales, contables).
        </p>

        <h2>6. Terceros con acceso a tus datos</h2>
        <p>
          Compartimos datos estrictamente necesarios con: <strong>Stripe</strong> (procesamiento de
          pagos), <strong>Vercel</strong> (alojamiento web) y <strong>Resend</strong> (envío de emails
          transaccionales). Ninguno de ellos utiliza tus datos con fines propios.
        </p>

        <h2>7. Tus derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
          portabilidad escribiendo a{' '}
          <span className="legal-page__placeholder">[tu@email.com]</span>. También puedes reclamar
          ante la Agencia Española de Protección de Datos (aepd.es).
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;