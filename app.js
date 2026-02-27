/**
 * CTH Compras - Logic v1.2
 * Adaptado al formato oficial de Google Sheets
 */

const PROVIDERS_DB = [
    { "Nombre": "ACUACULTURA CALYPSO S.A.S.", "NIT": "800.009.219-9", "Tel": "3183471022", "Email": "acuaculturacalypso@hotmail.com" },
    { "Nombre": "AINOX S.A.S.", "NIT": "800092608", "Tel": "3162288543", "Email": "comercial@ainoxsas.com", "Contacto": "Arcesio Gutierrez" },
    { "Nombre": "ALAMOS MOBILIARIO Y CREACIONES S.A.S.", "NIT": "901542080", "Tel": "3218301307", "Email": "administracion@alamosmobiliario.com.co" },
    { "Nombre": "ALFA CONSULTORES PROFESIONALES.", "NIT": "1.128.423.183-0", "Tel": "3012209774", "Email": "lamicrobiologa@gmail.com" },
    { "Nombre": "ALKLIMA GROUP S.A.S", "NIT": "900.833.609-4", "Tel": "3013684020", "Email": "ventas@alklima.com.co" },
    { "Nombre": "ALMACEN EL DEPORTISTA S.A.S.", "NIT": "811.005.267-4", "Tel": "3113391042", "Email": "luz.montoya@almaceneldeportista.com" },
    { "Nombre": "ALPHA HOME AND OFFICE DESIGNS S.A.S.", "NIT": "901.530.901-3", "Tel": "3245860689", "Email": "ejecutiva2@alphaoffice.com.co" },
    { "Nombre": "ASERTIVA DIGITAL S.A.S.", "NIT": "900.337.147-6", "Tel": "3012915527", "Email": "julianm@asertivadigital.com" },
    { "Nombre": "AULAS INNOVAR", "NIT": "901.421.721-7", "Tel": "3016569182", "Email": "aulasinnovar@gmail.com" },
    { "Nombre": "C.S.I. SERVICIOS INTEGRALES S.A.S.", "NIT": "900.359.243-1", "Tel": "3183476161", "Email": "monica.montoya@csiconsultores.com" },
    { "Nombre": "CAMILO ALBERTO RUBIO VALENCIA", "NIT": "1.039.447.832-3", "Tel": "3007559813", "Email": "interruedas.ventas03@gmail.com" },
    { "Nombre": "CAMILO SIERRA PEREZ", "NIT": "1.128.270.519-3", "Tel": "3042730231", "Email": "csp870416@gmail.com" },
    { "Nombre": "CARLOS ARTURO MEJIA GONZALEZ.", "NIT": "70547797", "Tel": "3192539374", "Email": "marke5912@hotmail.com" },
    { "Nombre": "CASTELROMA S.A.S", "NIT": "901.629.583-1", "Tel": "3042139530", "Email": "facturacioncastelroma@gmail.com" },
    { "Nombre": "CATAÑO PALACIO JOHAN ALBERTO.", "NIT": "1035418636", "Tel": "3163012242", "Email": "tecnibombeo@gmail.com" },
    { "Nombre": "CENTRO COLOMBO AMERICANO DE MEDELLIN", "NIT": "890.900.913-0", "Tel": "6042040404 ext.100", "Email": "direccionacademica@colombomedellin.edu.co" },
    { "Nombre": "CLASE ALPHA S.A.S.", "NIT": "901.153.061-4", "Tel": "3053224418", "Email": "info@sistevot.com" },
    { "Nombre": "COMPURENT S.A.S.", "NIT": "800.015.163-1", "Tel": "3017857022", "Email": "john.montoya@compurent.com.co" },
    { "Nombre": "CONEXIÓN MUSICAL PV ZOMAC S.A.S.", "NIT": "901.444.162-9", "Tel": "3105930528", "Email": "contabilidad@conexionmusical.co" },
    { "Nombre": "CONSTRUCCIONES Y CIELOS DE COLOMBIA S.A.S.", "NIT": "811.019.747-9", "Tel": "6044075689", "Email": "bernardoreyestirado@gmail.com" },
    { "Nombre": "COOPERATIVA DE TRABAJO ASOCIADO ZONAS VERDES DE ANTIOQUIA", "NIT": "811.031.722-4", "Tel": "", "Email": "contador@zonasverdes.com.co" },
    { "Nombre": "CORPORACION PARA EL MANEJO SOSTENIBLE DE LOS BOSQUES MAS", "NIT": "811.043.476-9", "Tel": "6043221881", "Email": "dgomez@masbosques.org" },
    { "Nombre": "CREATICO ESTUDIO DE DISEÑO.", "NIT": "1037599979", "Tel": "3012089445", "Email": "tororojasdiego@gmail.com" },
    { "Nombre": "CRISTIAN FELIPE GOMEZ VASQUEZ", "NIT": "1.152.685.071-5", "Tel": "300507122", "Email": "cristianfelipegv14@gmail.com" },
    { "Nombre": "CRUZ ROJA COLOMBIANA SECCIONAL ANTIOQUIA", "NIT": "890.980.074-8", "Tel": "3213242463", "Email": "nalzate@crantioquia.org.co" },
    { "Nombre": "CUERPO DE BOMBEROS VOLUNTARIOS DE EL RETIRO", "NIT": "811.016.448-8", "Tel": "3136232257", "Email": "comandante@bomberoselretiro.org" },
    { "Nombre": "CUERPO DE BOMBEROS VOLUNTARIOS DEL MUNICIPIO DE ENVIGADO", "NIT": "811.004.346-1", "Tel": "3113410683", "Email": "soa@bomberosenvigado.org" },
    { "Nombre": "CYC ESPECIALES S.A.S", "NIT": "901.100.333-5", "Tel": "3152747664", "Email": "info@cycespeciales.com" },
    { "Nombre": "DEISON WBER MUÑOZ VELASQUEZ.", "NIT": "98.707.568-3", "Tel": "3207723375", "Email": "publicidad@deixon.com" },
    { "Nombre": "DESTELLO DE SABOR S.A.S.", "NIT": "901.121.728-0", "Tel": "3176564889", "Email": "destellodesabor@gmail.com" },
    { "Nombre": "DISDEPORTES CMG S.A.S.", "NIT": "900.243.839-1", "Tel": "3146314109", "Email": "disdeportescmg@gmail.com" },
    { "Nombre": "DISEÑOS Y REFORMAS INTEGRALES S.A.S.", "NIT": "901.726.083-6", "Tel": "3148289295", "Email": "giovanyarquitectonico@hotmail.com" },
    { "Nombre": "DISETE COMUNICACIONES S.A.S.", "NIT": "811.001.001-4", "Tel": "3104169871", "Email": "proyectos@disete.com" },
    { "Nombre": "DORIELA MARIA GONZALEZ PINEDA.", "NIT": "43.748.260-6", "Tel": "3007854964", "Email": "dorielag1974@hotmail.com" },
    { "Nombre": "DUCON S.A.S.", "NIT": "800.014.574-9", "Tel": "3014311021", "Email": "claragomez@ducon.com.co" },
    { "Nombre": "EDWIN OCTAVIO ZAPATA GOMEZ.", "NIT": "71.744.434-4", "Tel": "3008487159", "Email": "ezapatag7@hotmail.com" },
    { "Nombre": "EDYCON CUBIERTAS S.A.S.", "NIT": "800.096.053-4", "Tel": "3104646746", "Email": "contabilidad@edycon.com.co" },
    { "Nombre": "EL COLOMBIANO S.A.S.", "NIT": "890.901.352-3", "Tel": "3206643029", "Email": "Magalyc@elcolombiano.com.co" },
    { "Nombre": "EL PUNTO DE LA IMPRESORA S.A.S.", "NIT": "900.535.078-5", "Tel": "3014117548", "Email": "ventasvictor@elpuntodelaimpresora.com" },
    { "Nombre": "EMMAE S.A.S.", "NIT": "901.401.796-3", "Tel": "3105800571", "Email": "mantenimiento.emmae@gmail.com" },
    { "Nombre": "ESTRUCTURAS INFANTILES S.A.S", "NIT": "811.002.132-5", "Tel": "3146897911", "Email": "director@estructurasinfantiles.com" },
    { "Nombre": "F C CONTROL Y DISEÑO DE ESTRUCTURAS S.A.S.", "NIT": "900.065.152-5", "Tel": "3042926770", "Email": "contabilidad@efeprimace.co" },
    { "Nombre": "FERRETERIA SAN HILL.", "NIT": "713.741.177-8", "Tel": "3104282864", "Email": "vidalesss7@gmail.com" },
    { "Nombre": "GABRIEL ALBERTO MEJIA RESTREPO.", "NIT": "71635389", "Tel": "3187252288", "Email": "gabrielmejiar2@gmail.com" },
    { "Nombre": "GALILEO DIDACTICOS S.A.S.", "NIT": "900.470.240-1", "Tel": "3134239720", "Email": "infogalileo2008@gmail.com" },
    { "Nombre": "GLORIA EMILCE MUÑOZ OBANDO.", "NIT": "43.569.759-0", "Tel": "3147042041", "Email": "gloriaegemos8911@gmail.com" },
    { "Nombre": "GOMEZ & MUÑOZ IMPORTACIONES S.A.S.", "NIT": "900.703.697-5", "Tel": "3113353507", "Email": "tiendaspineapplecol@gmail.com" },
    { "Nombre": "GRUPO CARPINI S.A.S", "NIT": "900.382.679-3", "Tel": "3007020256", "Email": "ventas1@grupocarpini.com" },
    { "Nombre": "GUSTAVO MORALES TORO.", "NIT": "98.455.488-1", "Tel": "3206067339", "Email": "diegomoragal@gmail.com" },
    { "Nombre": "HERMETIKPRO S.A.S.", "NIT": "901.056.029-2", "Tel": "3017840157", "Email": "gerenciaventas@hermetikpro.com" },
    { "Nombre": "HIGH TECH EDUCATION S.A.S.", "NIT": "900.886.441-1", "Tel": "3505878861", "Email": "auxiliar@hti.com.co" },
    { "Nombre": "HUMBERTO MARIO CORREA HURTADO.", "NIT": "71.607.785-8", "Tel": "3177345988", "Email": "mariomasajes@yahoo.com" },
    { "Nombre": "IMPORTACIONES JORGE LEON VALLEJO.", "NIT": "3308529", "Tel": "3176450676", "Email": "vallejorendon@gmail.com" },
    { "Nombre": "IMPRIDEAS S.A.S.", "NIT": "900.305.563-1", "Tel": "3206657273", "Email": "comercial1@imprideas.com" },
    { "Nombre": "INCORDI S.A.S.", "NIT": "900.133.649-5", "Tel": "3154848167", "Email": "comercial@incordi.com.co" },
    { "Nombre": "INVERSIONES OMV S . A . S .", "NIT": "900.465.807-7", "Tel": "3042017166", "Email": "info@omvdeco.co" },
    { "Nombre": "JARDINES RENOVADOS S.A.S.", "NIT": "901.770.237-1", "Tel": "3113958354", "Email": "jardinesrenovadosjxsas@gmail.com" },
    { "Nombre": "JAVIER FRANCISCO GALLEGO ERAZO.", "NIT": "71700635", "Tel": "3217587634", "Email": "frankojavier2006@yahoo.es" },
    { "Nombre": "JOHN JAIRO MUÑOZ MOSQUERA", "NIT": "71.294.167-0", "Tel": "3002396086", "Email": "jhon.fray@hotmail.com" },
    { "Nombre": "JOSE SADY CASTAÑO VELASQUEZ.", "NIT": "4.499.562-4", "Tel": "3206711917", "Email": "artessadypublicidad@gmail.com" },
    { "Nombre": "KASSANI DISEÑO S.A.S.", "NIT": "860.524.772-7", "Tel": "3106840853", "Email": "ventasantioquia3@kassani.com" },
    { "Nombre": "LA PATURRA SAS", "NIT": "901.571.490-3", "Tel": "3014024973", "Email": "viviana.correa0305@gmail.com" },
    { "Nombre": "LAURA DANIELA ANGARITA GALVIS", "NIT": "1098798145-1", "Tel": "3196571890", "Email": "novaprojectsmde@gmail.com" },
    { "Nombre": "LIGA ANTIOQUEÑA DE BALONCESTO.", "NIT": "890.906.297-9", "Tel": "3122474318", "Email": "direccionejecutiva@lanba.co" },
    { "Nombre": "LOGISTICA TRUCKS SAS", "NIT": "901672034", "Tel": "3155555545", "Email": "logisticatrucks593@gmail.com" },
    { "Nombre": "LOGROS ECOLOGICOS EXTINTORES Y FUMIGACIONES.", "NIT": "43.089.173-5", "Tel": "3007637157", "Email": "logros_am_fumigaciones@hotmail.com" },
    { "Nombre": "MAAKAL COLOMBIA S.A.", "NIT": "900096520", "Tel": "3165859284", "Email": "durley.arboleda@maakal.com" },
    { "Nombre": "MANEJO PROFESIONAL DE AGUAS S.A.S.", "NIT": "900668489", "Tel": "3136553177", "Email": "facturacionmaproaguas@gmail.com" },
    { "Nombre": "MARGARITA M. FLOREZ.", "NIT": "42876832", "Tel": "3146204658", "Email": "margaritamflorez@hotmail.com" },
    { "Nombre": "MARIA DE LAS MERCEDES HENAO CARMONA", "NIT": "42.888.249-0", "Tel": "3122575089", "Email": "maxitkritmos@hotmail.com" },
    { "Nombre": "MARIELA DEL SOCORRO VANEGAS VELEZ.", "NIT": "32.333.038-5", "Tel": "3176382192", "Email": "mariela.vanegasvelez@gmail.com" },
    { "Nombre": "MARLENY OSORIO MONSALVE", "NIT": "43.503.276-1", "Tel": "3113367829", "Email": "marleosorio12@hotmail.com" },
    { "Nombre": "MECATRONIC CENTRO DE SOLUCIONES S.A.S.", "NIT": "901,576,312-3", "Tel": "3183933430", "Email": "mecatronicsolucionessas@gmail.com" },
    { "Nombre": "METALICAS & SERVICIOS J.F.O.S. S.A.S.", "NIT": "901.555.652-2", "Tel": "3182743439", "Email": "metalicasyserviciosjf@gmail.com" },
    { "Nombre": "MONTAJES ELECTRICOS WILL S.A.S.", "NIT": "900863355", "Tel": "3122425001", "Email": "montajeswill@hotmail.com" },
    { "Nombre": "MUNDIAL DE MERCANCIAS S.A.S.", "NIT": "900.997.817-3", "Tel": "3136373800", "Email": "contabilidadmundialdm@gmail.com" },
    { "Nombre": "MUÑOZ AGUDELO Y CIA S.A.S.", "NIT": "811.003.078-1", "Tel": "3113409931", "Email": "felipem@munozag.com" },
    { "Nombre": "OLMEDO ALEJANDRO AREIZA GARCIA", "NIT": "1.022.097.375-4", "Tel": "3207433054", "Email": "Olmedito1993@hotmail.es" },
    { "Nombre": "ONOVATEC S.A.S.", "NIT": "901.578.493-7", "Tel": "3044126041", "Email": "mauricio.osorio@onovatec.com" },
    { "Nombre": "PAJON TORRES EDWIN RODRIGO.", "NIT": "3400499", "Tel": "3005967572", "Email": "pajonproduccion@gmail.com" },
    { "Nombre": "PINTUGREEN S.A.S", "NIT": "901.337.421-3", "Tel": "3122451004", "Email": "comercialobras@pintugreen.com" },
    { "Nombre": "PLASTICOS CREATIVOS S.A.S", "NIT": "811.004.496-1", "Tel": "3103892313", "Email": "mercadeocreaplast@gmail.com" },
    { "Nombre": "PREMIACIONES MUNDO HERRAJES S.A.S.", "NIT": "900.260.343-0", "Tel": "3007779007", "Email": "ventas@mundoherrajes.com" },
    { "Nombre": "PROCEZZO 360 SAS", "NIT": "901.354.057-7", "Tel": "3145545040", "Email": "facturacionporcezzo@gmail.com" },
    { "Nombre": "PURO CHOCOLATE BAKERY S.A.S.", "NIT": "901.732.217-0", "Tel": "3218299636", "Email": "contabilidad@purochocolatebakery.com" },
    { "Nombre": "REINALDO DE JESUS RODRIGUEZ QUICENO.", "NIT": "71.420.636-4", "Tel": "3113962049", "Email": "rey902@outlook.es" },
    { "Nombre": "RISKS INTERNATIONAL S.A.S", "NIT": "900.352.786-5", "Tel": "3044069240", "Email": "yina.quintero@risksint.com" },
    { "Nombre": "SECURETEC S.A.S.", "NIT": "900.789.617-5", "Tel": "3014111727", "Email": "ascomercial2@securetec.com.co" },
    { "Nombre": "SILVIA AMPARO OBANDO DE MUÑOZ", "NIT": "32.532.237-8", "Tel": "3147042041", "Email": "gloriaegemos8911@gmail.com" },
    { "Nombre": "SIN BICHOS S.A.S.", "NIT": "901.057.862-6", "Tel": "3155137753", "Email": "sinbichoscp@gmail.com" },
    { "Nombre": "SISTEMAS DE SEGURIDAD ELECTRONICA Y MONITOREO DE AMERICA", "NIT": "800.194.984-6", "Tel": "3004396506", "Email": "soportecomercial@sema.com.co" },
    { "Nombre": "SMART LEARNING S.A.S.", "NIT": "901.083.391-9", "Tel": "3185480397", "Email": "andres.alvarez@pearson.com" },
    { "Nombre": "SOLUCIONES INTEGRALES PARA LA CONSTRUCCION C.B SAS", "NIT": "900.811.075-7", "Tel": "3175751631", "Email": "facturacion@sincocb.com" },
    { "Nombre": "SOLUENVASES EU.", "NIT": "901.218.692-2", "Tel": "3108864049", "Email": "soluenvases@hotmail.com" },
    { "Nombre": "SONIDO26 DIGITAL S.A.S", "NIT": "901.099.265-9", "Tel": "3246325832", "Email": "comercialsonidos26@gmail.com" },
    { "Nombre": "SUMMIT MEDELLIN 1 S.A.S.", "NIT": "901.154.917-8", "Tel": "3183310179", "Email": "Eventos@summitmedellin.com" },
    { "Nombre": "TECNOMEDICA MD S.A.S.", "NIT": "900494362", "Tel": "6044449870", "Email": "domicilios152@tecnomedica.com.co" },
    { "Nombre": "TERRASER SAS", "NIT": "901.264.745-1", "Tel": "3108485650", "Email": "terraserinfo@gmail.com." },
    { "Nombre": "UIGESS COLOMBIA S.A.S", "NIT": "900.725.393-6", "Tel": "3009839529", "Email": "uigess.comercial2@gmail.com" },
    { "Nombre": "UNO-A ASEO INTEGRADO S.A.", "NIT": "800.037.129-3", "Tel": "3008004292", "Email": "comercialunoa@gmail.com" },
    { "Nombre": "VAGONES DE SONRISAS S.A.S.", "NIT": "901.555.822-8", "Tel": "3052382057", "Email": "vagonescomercial@gmail.com" },
    { "Nombre": "VIVALDI INGENIERIA HOSPITALARIA S.A.S. EN PROCESO DE REORGAN", "NIT": "811.044.610-4", "Tel": "3007565287", "Email": "diana.gonzalez@inghospitalaria.com" },
    { "Nombre": "VIVERO TIERRA NEGRA", "NIT": "900.305.698-5", "Tel": "3102682418", "Email": "comercial@viverotierranegra.com" },
    { "Nombre": "VOLTAJE TOTAL EVENTOS Y ESPECTACULOS", "NIT": "900.840.289-1", "Tel": "3017883085", "Email": "gerenciavoltajetotal@gmail.com" },
    { "Nombre": "WHEE S.A.S.", "NIT": "901.237.622-8", "Tel": "3042484715", "Email": "laura@whee-educacion.com" },
    { "Nombre": "SANCHO PAISA S.A.S.", "NIT": "901.665.537-5", "Tel": "6044440752", "Email": "info@sanchopaisa.co" },
    { "Nombre": "YETSABE ESCALONA RIVERO", "NIT": "700.419.122-1", "Tel": "3204339534", "Email": "yescalona@gmail.com" },
    { "Nombre": "HECTOR FABIAN JARAMILLO TANGARIFE", "NIT": "1.033.337.507-0", "Tel": "3165288144", "Email": "" },
    { "Nombre": "PROSOLAR SAS", "NIT": "901.039.724-1", "Tel": "3104363303", "Email": "Admon@prosolar.com.co" },
    { "Nombre": "YONI ESTIVEN ESTRADA MONTOYA", "NIT": "1.216.714.800-5", "Tel": "3123314754", "Email": "estivenestrada26@gmail.com" },
    { "Nombre": "MAYOR DIVERSIÓN S.A.S.", "NIT": "901.120.630-3", "Tel": "6043204210", "Email": "yasminr@boleramayorca.com" },
    { "Nombre": "TRUE BRANDING S.A.S.", "NIT": "901.383.477-0", "Tel": "3046593700", "Email": "truecompany.info@gmail.com" },
    { "Nombre": "IDEAS CIVILES S.A.S", "NIT": "811.001.550-6", "Tel": "3104470031", "Email": "administracion@ideasciviles.com" },
    { "Nombre": "XP PUBLICITARIOS SAS", "NIT": "901.242.782-8", "Tel": "3137470431", "Email": "ventas@xppublicitarios.com" },
    { "Nombre": "ELECTRONICA I+D S.A.S", "NIT": "900.034.424-0", "Tel": "3014537930", "Email": "administrativo@didacticaselectronicas.com", "Contacto": "Sandra Bermudez" }
];

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    const navItems = document.querySelectorAll('.nav-item');
    const viewTitle = document.getElementById('view-title');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;

            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const labels = {
                'dashboard': 'Panel General',
                'new-request': 'Nueva Solicitud de Compra',
                'history': 'Historial de Órdenes'
            };
            viewTitle.textContent = labels[view];

            renderView(view);
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.id === 'btn-create-start') {
            document.querySelector('[data-view="new-request"]').click();
        }
        if (e.target.id === 'btn-cancel') {
            document.querySelector('[data-view="dashboard"]').click();
        }
    });
}

function renderView(view) {
    const container = document.getElementById('view-dashboard');

    if (view === 'new-request') {
        container.innerHTML = `
            <div class="card-form animate-in full-sheet">
                <div class="form-header-main">
                    <h2>Nueva Solicitud de Compra</h2>
                    <p class="subtitle">Diligencia los datos base para generar la solicitud y adjuntar las cotizaciones.</p>
                </div>

                <div class="sheet-section">
                    <div class="section-title">Información del Proveedor</div>
                    <div class="form-row-grid two-cols">
                        <div class="field-group custom-autocomplete">
                            <label>Nombre de la empresa</label>
                            <div class="input-with-icon">
                                <input type="text" id="sheet-prov-name" placeholder="Ej: AINOX S.A.S." autocomplete="off">
                                <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                            <div id="providers-dropdown" class="autocomplete-dropdown hidden"></div>
                        </div>
                        <div class="field-group">
                            <label>NIT o RUT</label>
                            <input type="text" id="sheet-prov-nit" placeholder="890.911.452-4">
                        </div>
                    </div>
                    <div class="form-row-grid three-cols">
                        <div class="field-group">
                            <label>Teléfono</label>
                            <input type="text" id="sheet-prov-tel" placeholder="314 620 4658">
                        </div>
                        <div class="field-group">
                            <label>Correo electrónico</label>
                            <input type="email" id="sheet-prov-email" placeholder="proveedor@mail.com">
                        </div>
                        <div class="field-group">
                            <label>Contacto</label>
                            <input type="text" id="sheet-prov-contacto" placeholder="Nombre del contacto">
                        </div>
                    </div>
                </div>

                <div class="sheet-section">
                    <div class="section-title">Logística y Pago</div>
                    <div class="form-row-grid three-cols">
                        <div class="field-group">
                            <label>Sede Solicitante</label>
                            <select id="sheet-sede">
                                <option value="CTH">Campus CTH</option>
                                <option value="ADMIN">Administrativa</option>
                            </select>
                        </div>
                        <div class="field-group">
                            <label>Método de Pago</label>
                            <input type="text" id="sheet-pago" placeholder="Anticipo / Contado">
                        </div>
                        <div class="field-group">
                            <label>% Pago</label>
                            <input type="text" id="sheet-pago-perc" placeholder="100%">
                        </div>
                    </div>
                </div>

                <div class="sheet-section">
                    <div class="section-title">Detalles de Envío</div>
                    <div class="form-row-grid three-cols">
                        <div class="field-group">
                            <label>Dirección</label>
                            <input type="text" id="sheet-envio-dir" placeholder="Carrera 1 # 36 D Sur 515" value="Carrera 1 # 36 D Sur 515">
                        </div>
                        <div class="field-group">
                            <label>Barrio / Ciudad</label>
                            <input type="text" id="sheet-envio-barrio" placeholder="Alto de Palmas / Envigado" value="Alto de Palmas / Envigado">
                        </div>
                        <div class="field-group">
                            <label>Persona que recibe</label>
                            <input type="text" id="sheet-envio-resp" placeholder="Felipe González" value="Felipe González">
                        </div>
                    </div>
                </div>

                <div class="sheet-section">
                    <div class="section-title">Ítems de la Compra</div>
                    <div class="table-scroll">
                        <table class="items-table-sheet">
                            <thead>
                                <tr>
                                    <th width="50">N°</th>
                                    <th>Descripción</th>
                                    <th width="100">Cantidad</th>
                                    <th width="150">Precio Uni ($)</th>
                                    <th width="150">Total</th>
                                </tr>
                            </thead>
                            <tbody id="sheet-table-body">
                                <tr>
                                    <td>1</td>
                                    <td><input type="text" class="sheet-input-cell" placeholder="Ej: Tableros imantados"></td>
                                    <td><input type="number" class="sheet-input-cell" value="1" onchange="window.updateSheetCalculations()"></td>
                                    <td><input type="number" class="sheet-input-cell" value="0" onchange="window.updateSheetCalculations()"></td>
                                    <td class="cell-total">$ 0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button class="btn-text" onclick="window.addSheetRow()">+ Agregar otro ítem</button>
                </div>

                <div class="sheet-footer">
                    <div class="observations-box">
                        <label>Observaciones / Uso de compra</label>
                        <textarea id="sheet-obs" placeholder="Describe el propósito de esta compra..."></textarea>
                    </div>
                    <div class="totals-panel">
                        <div class="total-row"><span>Subtotal:</span> <strong id="sheet-sub">$ 0</strong></div>
                        <div class="total-row"><span>IVA (19%):</span> <strong id="sheet-iva">$ 0</strong></div>
                        <div class="total-row grand-total"><span>TOTAL GENERAL:</span> <strong id="sheet-total">$ 0</strong></div>
                    </div>
                </div>

                <div class="form-actions-footer">
                    <button class="btn-secondary" id="btn-cancel">Cancelar</button>
                    <button class="btn-primary" onclick="window.proceedToQuotes()">Continuar a Cotizaciones</button>
                </div>
            </div>
        `;

        // Lógica para autocompletado premium
        const providerInput = document.getElementById('sheet-prov-name');
        const dropdown = document.getElementById('providers-dropdown');

        const renderDropdown = (searchText = '') => {
            dropdown.innerHTML = '';

            const filtered = searchText
                ? PROVIDERS_DB.filter(p => p.Nombre.toLowerCase().includes(searchText.toLowerCase()))
                : PROVIDERS_DB; // Mostrar todos si está vacío

            if (filtered.length === 0) {
                dropdown.innerHTML = '<div class="dropdown-item empty">No se encontraron proveedores...</div>';
                dropdown.classList.remove('hidden');
                return;
            }

            // Limitar a los primeros 50 para no sobrecargar el DOM si no hay búsqueda
            const toShow = filtered.slice(0, 50);

            toShow.forEach(p => {
                const item = document.createElement('div');
                item.className = 'dropdown-item';

                // Resaltar búsqueda solo si hay texto
                let highlightedName = p.Nombre;
                if (searchText) {
                    const safeSearch = searchText.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
                    const regex = new RegExp(`(${safeSearch})`, 'gi');
                    highlightedName = p.Nombre.replace(regex, '<span class="highlight">$1</span>');
                }

                item.innerHTML = `
                    <div class="prov-name">${highlightedName}</div>
                    <div class="prov-nit">NIT: ${p.NIT}</div>
                `;

                item.addEventListener('click', () => {
                    providerInput.value = p.Nombre;
                    document.getElementById('sheet-prov-nit').value = p.NIT;
                    document.getElementById('sheet-prov-tel').value = p.Tel;
                    document.getElementById('sheet-prov-email').value = p.Email;
                    document.getElementById('sheet-prov-contacto').value = p.Contacto || '';
                    dropdown.classList.add('hidden');
                });
                dropdown.appendChild(item);
            });
            dropdown.classList.remove('hidden');
        };

        providerInput.addEventListener('input', (e) => {
            renderDropdown(e.target.value);
            dropdown.classList.remove('hidden');
        });

        providerInput.addEventListener('focus', (e) => {
            renderDropdown(e.target.value);
            dropdown.classList.remove('hidden');
        });

        providerInput.addEventListener('click', (e) => {
            renderDropdown(e.target.value);
            dropdown.classList.remove('hidden');
        });

        document.querySelector('.dropdown-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdown.classList.contains('hidden')) {
                providerInput.focus();
                renderDropdown(providerInput.value);
                dropdown.classList.remove('hidden');
            } else {
                dropdown.classList.add('hidden');
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-autocomplete')) {
                dropdown.classList.add('hidden');
            }
        });

        injectViewStyles();
    } else if (view === 'dashboard') {
        location.reload();
    }
}

// Funciones Globales para el interactivo
window.addSheetRow = () => {
    const tbody = document.getElementById('sheet-table-body');
    const rowCount = tbody.rows.length + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" class="sheet-input-cell"></td>
        <td><input type="number" class="sheet-input-cell" value="1" onchange="window.updateSheetCalculations()"></td>
        <td><input type="number" class="sheet-input-cell" value="0" onchange="window.updateSheetCalculations()"></td>
        <td class="cell-total">$ 0</td>
    `;
    tbody.appendChild(tr);
};

window.updateSheetCalculations = () => {
    const rows = document.getElementById('sheet-table-body').rows;
    let subtotal = 0;

    for (let i = 0; i < rows.length; i++) {
        const qty = rows[i].cells[2].querySelector('input').value || 0;
        const price = rows[i].cells[3].querySelector('input').value || 0;
        const total = qty * price;
        subtotal += total;
        rows[i].cells[4].textContent = `$ ${total.toLocaleString()}`;
    }

    const iva = subtotal * 0.19;
    const totalGeneral = subtotal + iva;

    document.getElementById('sheet-sub').textContent = `$ ${subtotal.toLocaleString()}`;
    document.getElementById('sheet-iva').textContent = `$ ${iva.toLocaleString()}`;
    document.getElementById('sheet-total').textContent = `$ ${totalGeneral.toLocaleString()}`;
};

window.proceedToQuotes = () => {
    const container = document.getElementById('view-dashboard');
    container.innerHTML = `
        <div class="card-form animate-in">
            <div class="form-header-main">
                <h2>Carga de Cotizaciones de Respaldo</h2>
                <p class="subtitle">Para finalizar, adjunta las 3 cotizaciones requeridas por Gerencia.</p>
            </div>
            
            <div class="quotes-uploader-grid">
                ${[1, 2, 3].map(n => `
                    <div class="quote-card" id="quote-${n}">
                        <div class="quote-header">Cotización #${n}</div>
                        <div class="drop-zone" id="drop-${n}" onclick="this.querySelector('input').click()">
                            <span class="drop-icon">📄</span>
                            <p>Arrastra PDF o Imagen</p>
                            <input type="file" hidden id="file-${n}" accept=".pdf,image/*" onchange="window.handleQuickUpload(${n}, this.files[0])">
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="form-actions-footer">
                <button class="btn-secondary" onclick="renderView('new-request')">Volver al Formulario</button>
                <button class="btn-primary" id="btn-next-step" disabled onclick="alert('Solicitud enviada a Gerencia')">Enviar Solicitud Completa</button>
            </div>
        </div>
    `;
};

window.handleQuickUpload = (n, file) => {
    if (!file) return;
    const dz = document.getElementById(`drop-${n}`);
    dz.innerHTML = `<span class="drop-icon">✅</span><p>${file.name}</p>`;
    dz.style.background = "#f0fdf4";
    dz.classList.add('uploaded');

    const all = document.querySelectorAll('.drop-zone.uploaded').length;
    if (all === 3) document.getElementById('btn-next-step').disabled = false;
};

function injectViewStyles() {
    if (document.getElementById('view-styles')) return;
    const style = document.createElement('style');
    style.id = 'view-styles';
    style.textContent = `
        .card-form { background: white; padding: 40px; border-radius: 28px; box-shadow: var(--shadow); max-width: 1100px; margin: 0 auto; position: relative;}
        .full-sheet { max-width: 1200px; }
        .form-header-main { margin-bottom: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px; }
        .sheet-section { margin-bottom: 40px; }
        .section-title { font-weight: 800; font-size: 0.9rem; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .section-title::after { content: ''; flex: 1; height: 1px; background: #e2e8f0; }
        
        .form-row-grid { display: grid; gap: 20px; margin-bottom: 20px; }
        .four-cols { grid-template-columns: repeat(4, 1fr); }
        .three-cols { grid-template-columns: repeat(3, 1fr); }
        .two-cols { grid-template-columns: repeat(2, 1fr); }
        
        /* Premium Autocomplete Styles */
        .custom-autocomplete { position: relative; }
        .autocomplete-dropdown { position: absolute; top: calc(100% + 5px); left: 0; right: 0; background: white; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); max-height: 250px; overflow-y: auto; z-index: 1000; }
        .autocomplete-dropdown::-webkit-scrollbar { width: 6px; }
        .autocomplete-dropdown::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .autocomplete-dropdown.hidden { display: none; }
        .dropdown-item { padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f8fafc; transition: all 0.2s; }
        .dropdown-item:last-child { border-bottom: none; }
        .dropdown-item:hover { background: #f0f7ff; padding-left: 20px; }
        .dropdown-item.empty { color: #94a3b8; font-style: italic; cursor: default; }
        .dropdown-item.empty:hover { background: white; padding-left: 16px; }
        .dropdown-item .prov-name { font-weight: 600; color: #1e293b; margin-bottom: 4px; font-size: 0.9rem; }
        .dropdown-item .prov-nit { font-size: 0.75rem; color: #64748b; font-weight: 500; }
        .dropdown-item .highlight { color: var(--primary); font-weight: 900; background: #e0f2fe; padding: 0 4px; border-radius: 4px; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05)); }
        
        .field-group label { display: block; font-size: 0.8rem; font-weight: 700; color: #64748b; margin-bottom: 8px; }
        .input-with-icon { position: relative; }
        .field-group input, .field-group select { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 0.95rem; font-family: inherit; transition: all 0.3s; }
        .field-group input:focus { border-color: var(--primary); background: #f0f7ff; outline: none; }
        .dropdown-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; color: #94a3b8; pointer-events: auto; cursor: pointer; transition: color 0.2s; }
        .dropdown-icon:hover { color: var(--primary); }
        .input-with-icon input { padding-right: 40px; }
        
        .table-scroll { overflow-x: auto; margin-bottom: 20px; border-radius: 16px; border: 1px solid #e2e8f0; }
        .items-table-sheet { width: 100%; border-collapse: collapse; background: #fff; }
        .items-table-sheet th { background: #f8fafc; padding: 15px; text-align: left; font-size: 0.8rem; font-weight: 800; border-bottom: 2px solid #e2e8f0; }
        .items-table-sheet td { padding: 10px; border-bottom: 1px solid #f1f5f9; }
        .sheet-input-cell { width: 100%; border: none; padding: 8px; outline: none; background: transparent; font-size: 0.95rem; }
        .sheet-input-cell:focus { background: #f8fafc; border-radius: 8px; }
        .cell-total { font-weight: 700; color: var(--primary); text-align: right; }
        
        .sheet-footer { display: grid; grid-template-columns: 1fr 350px; gap: 40px; margin-top: 30px; }
        .observations-box label { display: block; font-weight: 700; margin-bottom: 10px; color: #475569; }
        .observations-box textarea { width: 100%; height: 100px; border: 1px solid #e2e8f0; border-radius: 16px; padding: 15px; font-family: inherit; resize: none; outline: none; transition: 0.3s; }
        .observations-box textarea:focus { border-color: var(--primary); }
        
        .totals-panel { background: #f8fafc; padding: 25px; border-radius: 20px; border: 1px solid #e2e8f0; }
        .total-row { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.95rem; }
        .total-row.grand-total { border-top: 2px solid #e2e8f0; margin-top: 15px; padding-top: 15px; }
        .grand-total strong { font-size: 1.4rem; color: var(--primary); }
        
        .btn-text { background: transparent; border: none; color: var(--primary); font-weight: 700; cursor: pointer; padding: 10px; font-size: 0.9rem; }
        .btn-text:hover { text-decoration: underline; }
        
        .quotes-uploader-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 40px; }
        .quote-card { border: 2px dashed #e2e8f0; border-radius: 20px; transition: all 0.3s ease; background: #fbfcfe; }
        .quote-card:hover { border-color: var(--primary); background: #f0f7ff; transform: translateY(-3px); }
        .quote-header { padding: 14px; text-align: center; font-weight: 800; color: var(--bg-dark); }
        .drop-zone { height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; text-align: center; }
        .drop-zone.uploaded { border: none; background: #f0fdf4; height: 100px; }
        .drop-icon { font-size: 2.8rem; margin-bottom: 12px; }
    `;
    document.head.appendChild(style);
}
