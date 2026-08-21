import './LegalPage.css';
import { usePageMeta } from '../../hooks/usePageMeta';

function LegalNotice() {
  return (
    <section className="legal-page">
      <span className="legal-page__eyebrow">LEGAL</span>
      <h1 className="legal-page__title">Aviso Legal</h1>
      <p className="legal-page__updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

      <div className="legal-page__content">
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
          Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
        </p>
        <ul>
          <li>Titular: <span className="legal-page__placeholder">[Tu nombre o razón social]</span></li>
          <li>NIF/CIF: <span className="legal-page__placeholder">[Tu NIF/CIF]</span></li>
          <li>Domicilio: <span className="legal-page__placeholder">[Dirección fiscal]</span></li>
          <li>Email de contacto: <span className="legal-page__placeholder">[tu@email.com]</span></li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          CTRL-GRIP es una tienda online dedicada a la venta de calcetines antideslizantes,
          espinilleras, cinta adhesiva deportiva y accesorios relacionados con el fútbol.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario y supone la
          aceptación de todas las condiciones incluidas en este Aviso Legal. El usuario se
          compromete a hacer un uso adecuado del sitio y a no emplearlo para actividades
          ilícitas o contrarias a la buena fe.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todos los contenidos del sitio (textos, imágenes, logotipos, diseño) son propiedad de{' '}
          <span className="legal-page__placeholder">[Tu nombre o razón social]</span> o de terceros
          que han autorizado su uso, quedando prohibida su reproducción sin autorización expresa.
        </p>

        <h2>5. Legislación aplicable</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier
          controversia, las partes se someten a los juzgados y tribunales del domicilio del
          titular, salvo que la normativa de consumidores establezca otro fuero.
        </p>
      </div>
    </section>
  );
}

export default LegalNotice;