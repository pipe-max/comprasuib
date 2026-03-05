/**
 * Contabilidad UIB — App v2.0
 * Panel de Contabilidad — Unión Israelita de Beneficencia
 */

// ─── Base de datos de proveedores ───
let PROVIDERS_DB = JSON.parse(localStorage.getItem('cth_providers') || 'null') || [
    { "Nombre": "ACUACULTURA CALYPSO S.A.S.", "NIT": "800.009.219-9", "Tel": "3183471022", "Email": "acuaculturacalypso@hotmail.com", "Contacto": "Nancy" },
    { "Nombre": "AINOX S.A.S.", "NIT": "800092608", "Tel": "3162288543", "Email": "comercial@ainoxsas.com", "Contacto": "Arcesio Gutierrez" },
    { "Nombre": "ALAMOS MOBILIARIO Y CREACIONES S.A.S.", "NIT": "901542080", "Tel": "3218301307", "Email": "administracion@alamosmobiliario.com.co", "Contacto": "Claudia Patiño" },
    { "Nombre": "ALFA CONSULTORES PROFESIONALES.", "NIT": "1.128.423.183-0", "Tel": "3012209774", "Email": "lamicrobiologa@gmail.com", "Contacto": "Izabel Betancur Higuita" },
    { "Nombre": "ALKLIMA GROUP S.A.S", "NIT": "900.833.609-4", "Tel": "3013684020", "Email": "ventas@alklima.com.co", "Contacto": "Laura Rosa Marin" },
    { "Nombre": "ALMACEN EL DEPORTISTA S.A.S.", "NIT": "811.005.267-4", "Tel": "3113391042", "Email": "luz.montoya@almaceneldeportista.com", "Contacto": "Luz Montoya" },
    { "Nombre": "ALPHA HOME AND OFFICE DESIGNS S.A.S.", "NIT": "901.530.901-3", "Tel": "3245860689", "Email": "ejecutiva2@alphaoffice.com.co", "Contacto": "Alejandra Zapata" },
    { "Nombre": "ASERTIVA DIGITAL S.A.S.", "NIT": "900.337.147-6", "Tel": "3012915527", "Email": "julianm@asertivadigital.com", "Contacto": "Julian Fernando Martinez" },
    { "Nombre": "AULAS INNOVAR", "NIT": "901.421.721-7", "Tel": "3016569182", "Email": "aulasinnovar@gmail.com", "Contacto": "Jose Ramirez" },
    { "Nombre": "BIOESTRUCTURAS S.A.S", "NIT": "", "Tel": "", "Email": "" },
    { "Nombre": "C.S.I. SERVICIOS INTEGRALES S.A.S.", "NIT": "900.359.243-1", "Tel": "3183476161", "Email": "monica.montoya@csiconsultores.com", "Contacto": "Monica Montoya" },
    { "Nombre": "CAMILO ALBERTO RUBIO VALENCIA", "NIT": "1.039.447.832-3", "Tel": "3007559813", "Email": "interruedas.ventas03@gmail.com", "Contacto": "Camilo Alberto Rubio" },
    { "Nombre": "CAMILO SIERRA PEREZ", "NIT": "1.128.270.519-3", "Tel": "3042730231", "Email": "csp870416@gmail.com", "Contacto": "Camilo Sierra" },
    { "Nombre": "CARLOS ARTURO MEJIA GONZALEZ.", "NIT": "70547797", "Tel": "3192539374", "Email": "marke5912@hotmail.com", "Contacto": "Carlos Mejia" },
    { "Nombre": "CASTELROMA S.A.S", "NIT": "901.629.583-1", "Tel": "3042139530", "Email": "facturacioncastelroma@gmail.com", "Contacto": "Holman" },
    { "Nombre": "CATAÑO PALACIO JOHAN ALBERTO.", "NIT": "1035418636", "Tel": "3163012242", "Email": "tecnibombeo@gmail.com", "Contacto": "Johan Cataño" },
    { "Nombre": "CENTRO COLOMBO AMERICANO DE MEDELLIN", "NIT": "890.900.913-0", "Tel": "", "Email": "direccionacademica@colombomedellin.edu.co", "Contacto": "Claudia Villa" },
    { "Nombre": "CLASE ALPHA S.A.S.", "NIT": "901.153.061-4", "Tel": "3053224418", "Email": "info@sistevot.com", "Contacto": "Diana Valencia" },
    { "Nombre": "COMPURENT S.A.S.", "NIT": "800.015.163-1", "Tel": "3017857022", "Email": "john.montoya@compurent.com.co", "Contacto": "John Montoya" },
    { "Nombre": "CONEXIÓN MUSICAL PV ZOMAC S.A.S.", "NIT": "901.444.162-9", "Tel": "3105930528", "Email": "contabilidad@conexionmusical.co", "Contacto": "Paula Vélez." },
    { "Nombre": "CONSTRUCCIONES Y CIELOS DE COLOMBIA S.A.S.", "NIT": "811.019.747-9", "Tel": "6044075689", "Email": "bernardoreyestirado@gmail.com", "Contacto": "Bernardo Reyes" },
    { "Nombre": "COOPERATIVA DE TRABAJO ASOCIADO ZONAS VERDES DE ANTIOQUIA", "NIT": "811.031.722-4", "Tel": "", "Email": "contador@zonasverdes.com.co", "Contacto": "Juan Diego Sanchez" },
    { "Nombre": "CORPORACION PARA EL MANEJO SOSTENIBLE DE LOS BOSQUES MAS BOSQUES.", "NIT": "811.043.476-9", "Tel": "6043221881", "Email": "dgomez@masbosques.org", "Contacto": "Daily Gomez" },
    { "Nombre": "CREATICO ESTUDIO DE DISEÑO.", "NIT": "1037599979", "Tel": "3012089445", "Email": "tororojasdiego@gmail.com", "Contacto": "Diego Toro Rojas" },
    { "Nombre": "CRISTIAN FELIPE GOMEZ VASQUEZ", "NIT": "1.152.685.071-5", "Tel": "3005057122", "Email": "cristianfelipegv14@gmail.com", "Contacto": "Cristian Gomez" },
    { "Nombre": "CRUZ ROJA COLOMBIANA SECCIONAL ANTIOQUIA", "NIT": "890.980.074-8", "Tel": "3213242463", "Email": "nalzate@crantioquia.org.co", "Contacto": "Nancy Alzate Jiménez" },
    { "Nombre": "CUERPO DE BOMBEROS VOLUNTARIOS DE EL RETIRO", "NIT": "811.016.448-8", "Tel": "3136232057", "Email": "comandante@bomberoselretiro.org", "Contacto": "Andres Garcia" },
    { "Nombre": "CUERPO DE BOMBEROS VOLUNTARIOS DEL MUNICIPIO DE ENVIGADO", "NIT": "811.004.546-1", "Tel": "3113410685", "Email": "soat@bomberosenvigado.org", "Contacto": "Gabriela Cadavid" },
    { "Nombre": "CYC ESPECIALES S.A.S", "NIT": "901.100.333-5", "Tel": "3152747664", "Email": "info@cycespeciales.com" },
    { "Nombre": "DEISON WBER MUÑOZ  VELASQUEZ.", "NIT": "98.707.568-3", "Tel": "3207723375", "Email": "publicidad@deixon.com", "Contacto": "Deison Muñoz" },
    { "Nombre": "DESTELLO DE SABOR S.A.S.", "NIT": "901.121.728-0", "Tel": "3176564889", "Email": "destellodesabor@gmail.com", "Contacto": "Yeny Jimenez" },
    { "Nombre": "DISDEPORTES CMG S.A.S.", "NIT": "900.243.839-1", "Tel": "3146314109", "Email": "disdeportescmg@gmail.com" },
    { "Nombre": "DISEÑOS Y REFORMAS INTEGRALES S.A.S.", "NIT": "901.726.083-6", "Tel": "3148289295", "Email": "giovanyarquitectonico@hotmail.com", "Contacto": "Giovanny Londoño" },
    { "Nombre": "DISETE COMUNICACIONES S.A.S.", "NIT": "811.001.001-4", "Tel": "3104169871", "Email": "proyectos@disete.com", "Contacto": "Mariana Henao" },
    { "Nombre": "DORIELA MARIA GONZALEZ PINEDA.", "NIT": "43.748.260-6", "Tel": "3007854964", "Email": "dorielag1974@hotmail.com", "Contacto": "Doriela Gonzalez" },
    { "Nombre": "DUCON S.A.S.", "NIT": "800.014.574-9", "Tel": "3014311021", "Email": "claragomez@ducon.com.co", "Contacto": "Clara Gomez" },
    { "Nombre": "EDWIN OCTAVIO ZAPATA GOMEZ.", "NIT": "71.744.434-4", "Tel": "3008487159", "Email": "ezapatag7@hotmail.com", "Contacto": "Edwin Octavio Zapata Gomez." },
    { "Nombre": "EDYCON CUBIERTAS S.A.S.", "NIT": "800.096.053-4", "Tel": "3104646746", "Email": "contabilidad@edycon.com.co", "Contacto": "Luz Myriam Henao" },
    { "Nombre": "EL COLOMBIANO S.A.S.", "NIT": "890.901.352-3", "Tel": "3206643029", "Email": "Magalyc@elcolombiano.com.co", "Contacto": "Magaly Celis" },
    { "Nombre": "EL PUNTO DE LA IMPRESORA S.A.S.", "NIT": "900.535.078-5", "Tel": "3014117548", "Email": "ventasvictor@elpuntodelaimpresora.com", "Contacto": "Victor Roldan" },
    { "Nombre": "EMMAE S.A.S.", "NIT": "901.401.796-3", "Tel": "3105800571", "Email": "mantenimiento.emmae@gmail.com", "Contacto": "Karla Medina" },
    { "Nombre": "ESTRUCTURAS INFANTILES S.A.S", "NIT": "811.002.132-5", "Tel": "3146897911", "Email": "director@estructurasinfantiles.com", "Contacto": "Anderson Velez" },
    { "Nombre": "F ́C CONTROL Y DISEÑO DE ESTRUCTURAS S.A.S.", "NIT": "900.065.152-5", "Tel": "3042926770", "Email": "contabilidad@efeprimace.co", "Contacto": "Paula Uribe" },
    { "Nombre": "FERRETERIA SAN HILL.", "NIT": "713.741.177-8", "Tel": "3104282864", "Email": "vidalesss7@gmail.com", "Contacto": "Jesus Arteaga Quiceno" },
    { "Nombre": "GABRIEL ALBERTO MEJIA RESTREPO.", "NIT": "71635389", "Tel": "3187252288", "Email": "gabrielmejiar2@gmail.com", "Contacto": "Gabriel Mejia" },
    { "Nombre": "GALILEO DIDACTICOS S.A.S.", "NIT": "900.470.240-1", "Tel": "3134239720", "Email": "infogalileo2008@gmail.com", "Contacto": "Cesar Álvarez Galeano" },
    { "Nombre": "GLORIA EMILCE MUÑOZ OBANDO.", "NIT": "43.569.759-0", "Tel": "3147042041", "Email": "gloriaegemos8911@gmail.com", "Contacto": "Gloria Muñoz" },
    { "Nombre": "GOMEZ & MUÑOZ IMPORTACIONES S.A.S.", "NIT": "900.703.697-5", "Tel": "3113353507", "Email": "tiendaspineapplecol@gmail.com" },
    { "Nombre": "GRAFICAS DIAMANTES.", "NIT": "", "Tel": "6043394300", "Email": "servicioalcliente@graficasdiamante.com", "Contacto": "Fabian Ruiz" },
    { "Nombre": "GRUPO CARPINI S.A.S", "NIT": "900.382.679-3", "Tel": "3007020256", "Email": "ventas1@grupocarpini.com", "Contacto": "Bibiana Ramirez" },
    { "Nombre": "GUSTAVO MORALES TORO.", "NIT": "98.455.488-1", "Tel": "3206067339", "Email": "diegomoragal@gmail.com", "Contacto": "Gustavo Morales" },
    { "Nombre": "HABLARTESANA S.A.S", "NIT": "901.620.602-2", "Tel": "", "Email": "hablartesana@gmail.com", "Contacto": "Juan Hincapie" },
    { "Nombre": "HERMETIKPRO S.A.S.", "NIT": "901.056.029-2", "Tel": "3017840157", "Email": "gerenciaventas@hermetikpro.com", "Contacto": "Carolina Yepes" },
    { "Nombre": "HIGH TECH EDUCATION S.A.S.", "NIT": "900.886.441-1", "Tel": "3505878861", "Email": "auxiliar@hti.com.co", "Contacto": "Natalia Arango" },
    { "Nombre": "HUMBERTO MARIO CORREA HURTADO.", "NIT": "71.607.785-8", "Tel": "3177345988", "Email": "mariomasajes@yahoo.com", "Contacto": "Humberto Correa" },
    { "Nombre": "IMPORTACIONES JORGE LEON VALLEJO.", "NIT": "3308529", "Tel": "3176450676", "Email": "vallejorendon@gmail.com", "Contacto": "Jorge Vallejo" },
    { "Nombre": "IMPRIDEAS S.A.S.", "NIT": "900.305.563-1", "Tel": "3206657273", "Email": "comercial1@imprideas.com", "Contacto": "Edwin Padilla" },
    { "Nombre": "INCORDI S.A.S.", "NIT": "900.133.649-5", "Tel": "3154848167", "Email": "comercial@incordi.com.co", "Contacto": "Milleth Roldan" },
    { "Nombre": "INVERSIONES OMV S . A . S .", "NIT": "900.465.807-7", "Tel": "3042017166", "Email": "info@omvdeco.co", "Contacto": "Natalia Mejia" },
    { "Nombre": "JARDINES RENOVADOS S.A.S.", "NIT": "901.770.237-1", "Tel": "3113958354", "Email": "jardinesrenovadosjxsas@gmail.com", "Contacto": "Cesar Arango" },
    { "Nombre": "JAVIER FRANCISCO GALLEGO ERAZO.", "NIT": "71700635", "Tel": "3217587634", "Email": "frankojavier2006@yahoo.es", "Contacto": "Francisco Gallego" },
    { "Nombre": "JOHN JAIRO MUÑOZ MOSQUERA", "NIT": "71.294.167-0", "Tel": "3002396086", "Email": "jhon.fray@hotmail.com", "Contacto": "John Jairo Muñoz" },
    { "Nombre": "JOSE SADY CASTAÑO VELASQUEZ.", "NIT": "4.499.562-4", "Tel": "3206711917", "Email": "artessadypublicidad@gmail.com", "Contacto": "Jose Sady Castaño" },
    { "Nombre": "KASSANI DISEÑO S.A.S.", "NIT": "860.524.772-7", "Tel": "3106840853", "Email": "ventasantioquia3@kassani.com", "Contacto": "Juan Pablo Serna" },
    { "Nombre": "LA PATURRA SAS", "NIT": "901.571.490-3", "Tel": "3014024973", "Email": "viviana.correa0305@gmail.com", "Contacto": "Viviana Correa" },
    { "Nombre": "LAURA DANIELA ANGARITA GALVIS", "NIT": "1098798145-1", "Tel": "3196571890", "Email": "novaprojectsmde@gmail.com", "Contacto": "Laura Angarita" },
    { "Nombre": "LIGA ANTIOQUEÑA DE BALONCESTO.", "NIT": "890.906.297-9", "Tel": "3122474318", "Email": "direccionejecutiva@lanba.co", "Contacto": "Jorge Saldarria" },
    { "Nombre": "LOGISTICA TRUCKS SAS", "NIT": "901672034", "Tel": "3155555545", "Email": "logisticatrucks593@gmail.com" },
    { "Nombre": "LOGROS ECOLOGICOS EXTINTORES Y FUMIGACIONES.", "NIT": "43.089.173-5", "Tel": "3007637157", "Email": "logros_am_fumigaciones@hotmail.com", "Contacto": "Angela María Merino Cortés" },
    { "Nombre": "MAAKAL COLOMBIA S.A.", "NIT": "900096520", "Tel": "3165859284", "Email": "durley.arboleda@maakal.com", "Contacto": "Durley Arboleda" },
    { "Nombre": "MANEJO PROFESIONAL DE AGUAS S.A.S.", "NIT": "900668489", "Tel": "3136553177", "Email": "facturacionmaproaguas@gmail.com", "Contacto": "Patricia Monsalve" },
    { "Nombre": "MARGARITA M. FLOREZ.", "NIT": "42876832", "Tel": "3146204658", "Email": "margaritamflorez@hotmail.com", "Contacto": "Margarita Florez" },
    { "Nombre": "MARIA DE LAS MERCEDES HENAO CARMONA", "NIT": "42.888.249-0", "Tel": "3122575089", "Email": "maxitkritmos@hotmail.com", "Contacto": "Nelson Carmona" },
    { "Nombre": "MARIELA DEL SOCORRO VANEGAS VELEZ.", "NIT": "32.333.038-5", "Tel": "3176382192", "Email": "mariela.vanegasvelez@gmail.com", "Contacto": "Mariela Vanegas" },
    { "Nombre": "MARLENY OSORIO MONSALVE", "NIT": "43.503.276-1", "Tel": "3113367829", "Email": "marleosorio12@hotmail.com", "Contacto": "Marleny Osoro" },
    { "Nombre": "MECATRONIC CENTRO DE SOLUCIONES S.A.S.", "NIT": "901,576,312-3", "Tel": "3183933430", "Email": "mecatronicsolucionessas@gmail.com", "Contacto": "Lina Solarte" },
    { "Nombre": "METALICAS & SERVICIOS J.F.O.S. S.A.S.", "NIT": "901.555.652-2", "Tel": "3182743439", "Email": "metalicasyserviciosjf@gmail.com", "Contacto": "Franklin Otalvaro" },
    { "Nombre": "MONTAJES ELECTRICOS WILL S.A.S.", "NIT": "900863355", "Tel": "3122425001", "Email": "montajeswill@hotmail.com", "Contacto": "William Zapata Sanchez" },
    { "Nombre": "MUNDIAL DE MERCANCIAS S.A.S.", "NIT": "900.997.817-3", "Tel": "3136373800", "Email": "contabilidadmundialdm@gmail.com", "Contacto": "Juan Jose Vasquez" },
    { "Nombre": "MUÑOZ AGUDELO Y CIA S.A.S.", "NIT": "811.003.079-1", "Tel": "3113409931", "Email": "felipem@munozag.com", "Contacto": "Felipe Muñoz" },
    { "Nombre": "OLMEDO ALEJANDRO AREIZA GARCIA", "NIT": "1.022.097.375-4", "Tel": "3207433054", "Email": "Olmedito1993@hotmail.es", "Contacto": "Alejandro Olmedo Papayera" },
    { "Nombre": "ONOVATEC S.A.S.", "NIT": "901.578.493-7", "Tel": "3044126041", "Email": "mauricio.osorio@onovatec.com", "Contacto": "Mauricio Osorio" },
    { "Nombre": "PAJON TORRES EDWIN RODRIGO.", "NIT": "3400499", "Tel": "3005967572", "Email": "pajonproduccion@gmail.com", "Contacto": "Edwin Pajón" },
    { "Nombre": "PINTUGREEN S.A.S", "NIT": "901.337.421-3", "Tel": "3122451004", "Email": "comercialobras@pintugreen.com", "Contacto": "David Andrés Yepes" },
    { "Nombre": "PLASTICOS CREATIVOS S.A.S", "NIT": "811.004.496-1", "Tel": "3103892313", "Email": "mercadeocreaplast@gmail.com", "Contacto": "Camilo Arroyave" },
    { "Nombre": "PREMIACIONES MUNDO HERRAJES S.A.S.", "NIT": "900.260.343-0", "Tel": "3007779007", "Email": "ventas@mundoherrajes.com", "Contacto": "Alexander Cañas Castro" },
    { "Nombre": "PROCEZZO 360 SAS", "NIT": "901.354.057-7", "Tel": "3145545040", "Email": "facturacionporcezzo@gmail.com", "Contacto": "Juan Rodrigo Mejia" },
    { "Nombre": "PURO CHOCOLATE BAKERY S.A.S.", "NIT": "901.732.217-0", "Tel": "3218299636", "Email": "contabilidad@purochocolatebakery.com", "Contacto": "Natalia Arango" },
    { "Nombre": "REINALDO DE JESUS RODRIGUEZ QUICENO.", "NIT": "71.420.636-4", "Tel": "3113962049", "Email": "rey902@outlook.es", "Contacto": "Reinaldo Rodriguez" },
    { "Nombre": "RISKS INTERNATIONAL S.A.S", "NIT": "900.352.786-5", "Tel": "3044069240", "Email": "yina.quintero@risksint.com", "Contacto": "Yina Maritza Quintero" },
    { "Nombre": "SECURETEC S.A.S.", "NIT": "900.789.617-5", "Tel": "3014111727", "Email": "ascomercial2@securetec.com.co", "Contacto": "Yenny Castrillon" },
    { "Nombre": "SILVIA AMPARO OBANDO DE MUÑOZ", "NIT": "32.532.237-8", "Tel": "3147042041", "Email": "gloriaegemos8911@gmail.com", "Contacto": "Gloria Muñoz" },
    { "Nombre": "SIN BICHOS S.A.S.", "NIT": "901.057.862-6", "Tel": "3155137753", "Email": "sinbichoscp@gmail.com", "Contacto": "Adriana Escalante" },
    { "Nombre": "SISTEMAS DE SEGURIDAD ELECTRONICA Y MONITOREO DE AMERICA S.A.", "NIT": "800.194.984-6", "Tel": "3004396506", "Email": "soportecomercial@sema.com.co", "Contacto": "Jesus Mosquera" },
    { "Nombre": "SMART LEARNING S.A.S.", "NIT": "901.083.391-9", "Tel": "3185480397", "Email": "andres.alvarez@pearson.com", "Contacto": "Andrés Alvarez" },
    { "Nombre": "SOLUCIONES INTEGRALES PARA LA CONSTRUCCION C.B SAS", "NIT": "900.811.075-7", "Tel": "3175751631", "Email": "facturacion@sincocb.com", "Contacto": "Maribel Botero" },
    { "Nombre": "SOLUENVASES EU.", "NIT": "901.218.692-2", "Tel": "3108864049", "Email": "soluenvases@hotmail.com", "Contacto": "Nataly Ramirez" },
    { "Nombre": "SONIDO26 DIGITAL S.A.S", "NIT": "901.099.265-9", "Tel": "3246325832", "Email": "comercialsonidos26@gmail.com", "Contacto": "Paola Aguirre" },
    { "Nombre": "SUMMIT MEDELLIN 1 S.A.S.", "NIT": "901.154.917-8", "Tel": "3183310179", "Email": "Eventos@summitmedellin.com", "Contacto": "Ishwar López" },
    { "Nombre": "TECNOMEDICA MD S.A.S.", "NIT": "900494362", "Tel": "6044449870", "Email": "domicilios152@tecnomedica.com.co", "Contacto": "Yaneth Hernández" },
    { "Nombre": "TERRASER SAS", "NIT": "901.264.745-1", "Tel": "3108485650", "Email": "terraserinfo@gmail.com.", "Contacto": "Carlos Mario" },
    { "Nombre": "UIGESS COLOMBIA S.A.S", "NIT": "900.725.393-6", "Tel": "3009839529", "Email": "uigess.comercial2@gmail.com", "Contacto": "Sara Melisa Muñoz" },
    { "Nombre": "UNO-A ASEO INTEGRADO S.A.", "NIT": "800.037.129-3", "Tel": "3008004292", "Email": "comercialunoa@gmail.com", "Contacto": "Jenny Giraldo" },
    { "Nombre": "VAGONES DE SONRISAS S.A.S.", "NIT": "901.555.822-8", "Tel": "3052382057", "Email": "vagonescomercial@gmail.com", "Contacto": "Carolina" },
    { "Nombre": "VIVALDI INGENIERIA HOSPITALARIA S.A.S. EN PROCESO DE REORGANIZACION.", "NIT": "811.044.610-4", "Tel": "3007565287", "Email": "diana.gonzalez@inghospitalaria.com", "Contacto": "Diana Carolina Correa" },
    { "Nombre": "VIVERO TIERRA NEGRA.", "NIT": "900.305.698-5", "Tel": "3102682418", "Email": "comercial@viverotierranegra.com", "Contacto": "Cristian Lopez" },
    { "Nombre": "VOLTAJE TOTAL EVENTOS Y ESPECTACULOS.", "NIT": "900.840.289-1", "Tel": "3017883085", "Email": "gerenciavoltajetotal@gmail.com", "Contacto": "Byron Perez" },
    { "Nombre": "WHEE S.A.S.", "NIT": "901.237.622-8", "Tel": "3042484715", "Email": "laura@whee-educacion.com", "Contacto": "Laura Michel" },
    { "Nombre": "SANCHO PAISA S.A.S.", "NIT": "901.665.537-5", "Tel": "6044440752", "Email": "info@sanchopaisa.co", "Contacto": "Astrid" },
    { "Nombre": "YETSABE ESCALONA RIVERO", "NIT": "700.419.122-1", "Tel": "3204339534", "Email": "yescalona@gmail.com", "Contacto": "Yetsabe Escalona" },
    { "Nombre": "HECTOR FABIAN JARAMILLO TANGARIFE", "NIT": "1.033.337.507-0", "Tel": "3165288144", "Email": "", "Contacto": "Hector Jaramillo" },
    { "Nombre": "PROSOLAR SAS", "NIT": "901.039.724-1", "Tel": "3104363303", "Email": "Admon@prosolar.com.co", "Contacto": "Elizabeth Monsalve" },
    { "Nombre": "YONI ESTIVEN ESTRADA MONTOYA", "NIT": "1.216.714.800-5", "Tel": "3123314754", "Email": "estivenestrada26@gmail.com", "Contacto": "Yoni Estrada" },
    { "Nombre": "MAYOR DIVERSIÓN S.A.S.", "NIT": "901.120.630-3", "Tel": "6043204210", "Email": "yasminr@boleramayorca.com", "Contacto": "Yasmin Romero" },
    { "Nombre": "TRUE BRANDING S.A.S.", "NIT": "901.383.477-0", "Tel": "3046593700", "Email": "truecompany.info@gmail.com", "Contacto": "Milton Charry" },
    { "Nombre": "IDEAS CIVILES S.A.S", "NIT": "811.001.550-6", "Tel": "3104470031", "Email": "administracion@ideasciviles.com", "Contacto": "Jorge Mario Villegas" },
    { "Nombre": "XP PUBLICITARIOS SAS", "NIT": "901.242.782-8", "Tel": "3137470431", "Email": "ventas@xppublicitarios.com", "Contacto": "Sandra Echeverri" },
    { "Nombre": "ELECTRONICA I+D S.A.S", "NIT": "900.034.424-0", "Tel": "3014537930", "Email": "administrativo@didacticaselectronicas.com", "Contacto": "Sandra Bermudez" }
];

// ─── Base de datos de sedes de envío ───
const SEDES_ENVIO = {
    "Colegio Theodoro Hertzl": {
        ciudad: "Envigado",
        direccion: "Carrera 1 # 36 D Sur 515",
        barrio: "Alto de Palmas",
        telefono: "(604) 3220180",
        persona: ""
    },
    "UIB": {
        ciudad: "Medellín",
        direccion: "Carrera 43 A # 14 - 143",
        barrio: "Castropol",
        telefono: "(604) 3220180",
        persona: ""
    },
    "Jardín Infantil El Encuentro": {
        ciudad: "Medellín",
        direccion: "Carrera 18 # 12 Sur 09",
        barrio: "Los Balsos",
        telefono: "(604) 5609757",
        persona: ""
    },
    "Cementerio": {
        ciudad: "Medellín",
        direccion: "Calle 80 # 67 - 22",
        barrio: "Cordoba",
        telefono: "(604) 2572802",
        persona: ""
    },
    "N/A": {
        ciudad: "",
        direccion: "",
        barrio: "",
        telefono: "",
        persona: ""
    }
};

// ─── Firebase Config ───
const firebaseConfig = {
    apiKey: "AIzaSyBHVEbagEIJ5WDklRyyXvh5DjDsNrLbMSc",
    authDomain: "compras-cth.firebaseapp.com",
    projectId: "compras-cth",
    storageBucket: "compras-cth.firebasestorage.app",
    messagingSenderId: "928554603193",
    appId: "1:928554603193:web:568043d2b10291101a4168"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// ─── Correos autorizados ───
const ALLOWED_EMAILS = [
    'gestionhumana@uibmedellin.org',
    'administracion@theodoro.edu.co',
    'rectoria@theodoro.edu.co',
    'secretaria@theodoro.edu.co',
    'sistemagestion@theodoro.edu.co',
    'mantenimiento@theodoro.edu.co',
    'direccionadministrativa@uibmedellin.org',
    'comunicaciones@theodoro.edu.co',
    'direccion@elencuentro.edu.co',
    'secretaria@uibmedellin.org',
    'gerencia@uibmedellin.org',
    'analistatesoreria@uibmedellin.org',
    'pipe@theodoro.edu.co'
];

function isEmailAllowed(email) {
    if (!email) return false;
    return ALLOWED_EMAILS.includes(email.toLowerCase());
}

// ─── Auth: Login con Google ───
function initAuth() {
    const loginScreen = document.getElementById('login-screen');
    const btnLogin = document.getElementById('btn-google-login');
    const loginError = document.getElementById('login-error');

    btnLogin.addEventListener('click', async () => {
        btnLogin.disabled = true;
        btnLogin.textContent = 'Conectando...';
        loginError.style.display = 'none';

        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({ hd: '' }); // permite seleccionar cualquier cuenta
            const result = await auth.signInWithPopup(provider);
            const email = result.user.email;

            if (!isEmailAllowed(email)) {
                await auth.signOut();
                loginError.textContent = `El correo ${email} no está autorizado para acceder. Contacta al administrador si necesitas acceso.`;
                loginError.style.display = 'block';
                btnLogin.disabled = false;
                btnLogin.innerHTML = `<svg class="google-icon" viewBox="0 0 24 24" width="22" height="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Iniciar sesión con Google`;
                return;
            }
            // Login exitoso — onAuthStateChanged se encarga del resto
        } catch (err) {
            console.error('Error en login:', err);
            if (err.code !== 'auth/popup-closed-by-user') {
                loginError.textContent = 'Error al iniciar sesión: ' + (err.message || 'Intenta de nuevo');
                loginError.style.display = 'block';
            }
            btnLogin.disabled = false;
            btnLogin.innerHTML = `<svg class="google-icon" viewBox="0 0 24 24" width="22" height="22"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Iniciar sesión con Google`;
        }
    });

    // Escuchar cambios de autenticación
    auth.onAuthStateChanged((user) => {
        if (user && isEmailAllowed(user.email)) {
            // Usuario autenticado con dominio válido
            loginScreen.classList.add('hidden');
            document.querySelector('.app-container').classList.add('visible');
            APP_STATE.userEmail = user.email;
            updateUserProfile(user);
            initApp();
        } else {
            // No autenticado — mostrar login
            loginScreen.classList.remove('hidden');
            document.querySelector('.app-container').classList.remove('visible');
        }
    });

    // Botón logout
    document.getElementById('btn-logout').addEventListener('click', () => {
        showConfirm('Cerrar Sesión', '¿Seguro que deseas cerrar sesión?', () => {
            auth.signOut().then(() => {
                location.reload();
            });
        }, 'Cerrar Sesión', 'danger');
    });
}

function updateUserProfile(user) {
    const nameEl = document.getElementById('user-display-name');
    const avatarImg = document.getElementById('user-avatar-img');
    const avatarFallback = document.getElementById('user-avatar-fallback');

    // Nombre
    const displayName = user.displayName || user.email.split('@')[0];
    nameEl.textContent = displayName;

    // Avatar
    if (user.photoURL) {
        avatarImg.src = user.photoURL;
        avatarImg.alt = displayName;
        avatarImg.style.display = 'block';
        avatarFallback.style.display = 'none';
    } else {
        const initials = displayName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
        avatarFallback.textContent = initials;
        avatarImg.style.display = 'none';
        avatarFallback.style.display = 'flex';
    }
}

// ─── Estado de la app ───
const APP_STATE = {
    requests: JSON.parse(localStorage.getItem('cth_requests') || '[]'),
    currentView: 'dashboard',
    firestoreReady: false,
    userEmail: ''
};

// Correos autorizados para marcar pagos
const PAYMENT_AUTHORIZED_EMAILS = ['analistacontable@theodoro.edu.co', 'contabilidad@uibmedellin.org', 'pipe@theodoro.edu.co'];

// ─── Cola de escrituras pendientes (si Firestore aún no está listo) ───
const _pendingWrites = [];
const _pendingOrderIds = new Set();

// ─── Limpiar datos pesados (base64) para no exceder límite de 1MB de Firestore ───
function stripHeavyData(order) {
    const light = JSON.parse(JSON.stringify(order));
    // Quitar cotizaciones base64
    if (light.quotations && light.quotations.length > 0) {
        light.quotations = light.quotations.map(q => ({
            name: q.name || 'Cotización',
            type: q.type || '',
            _stripped: true
        }));
    }
    // Quitar evidencias base64
    if (light.evidencias && light.evidencias.length > 0) {
        light.evidencias = light.evidencias.map(e => ({
            name: e.name || 'Evidencia',
            _stripped: true
        }));
    }
    // Las firmas NO se eliminan (son pequeñas, ~15-50KB)
    return light;
}

// ─── Firestore: guardar una orden ───
function saveOrderToDB(order) {
    const cleanOrder = JSON.parse(JSON.stringify(order));
    if (!APP_STATE.firestoreReady) {
        _pendingWrites.push({ type: 'set', id: order.id, data: cleanOrder });
        _pendingOrderIds.add(order.id);
        console.log('⏳ Orden encolada para Firestore:', order.id);
        return;
    }
    _pendingOrderIds.add(order.id);
    db.collection('orders').doc(order.id).set(cleanOrder)
        .then(() => {
            _pendingOrderIds.delete(order.id);
            console.log('✅ Orden guardada en Firestore:', order.id);
        })
        .catch(err => {
            console.warn('⚠️ Error guardando orden completa, reintentando sin datos pesados:', order.id, err.message);
            // Reintentar sin base64 (fotos/firmas) para no perder los datos de la orden
            const lightOrder = stripHeavyData(cleanOrder);
            db.collection('orders').doc(order.id).set(lightOrder)
                .then(() => {
                    _pendingOrderIds.delete(order.id);
                    console.log('✅ Orden guardada en Firestore (sin adjuntos):', order.id);
                })
                .catch(err2 => {
                    console.error('❌ Error definitivo guardando orden:', order.id, err2);
                    // Mantener en pendientes para que no se borre del estado local
                });
        });
}

// ─── Procesar escrituras pendientes ───
function flushPendingWrites() {
    if (_pendingWrites.length === 0) return;
    console.log('📤 Procesando', _pendingWrites.length, 'escrituras pendientes...');
    while (_pendingWrites.length > 0) {
        const op = _pendingWrites.shift();
        if (op.type === 'set') {
            _pendingOrderIds.add(op.id);
            db.collection('orders').doc(op.id).set(op.data)
                .then(() => _pendingOrderIds.delete(op.id))
                .catch(err => {
                    console.warn('⚠️ Reintentando sin datos pesados:', op.id);
                    const light = stripHeavyData(op.data);
                    db.collection('orders').doc(op.id).set(light)
                        .then(() => _pendingOrderIds.delete(op.id))
                        .catch(err2 => console.error('Error en escritura pendiente:', err2));
                });
        } else if (op.type === 'delete') {
            db.collection('orders').doc(op.id).delete()
                .catch(err => console.error('Error en eliminación pendiente:', err));
        }
    }
}

// ─── Firestore: eliminar una orden ───
function deleteOrderFromDB(orderId) {
    _pendingOrderIds.delete(orderId);
    if (!APP_STATE.firestoreReady) {
        _pendingWrites.push({ type: 'delete', id: orderId });
        return;
    }
    db.collection('orders').doc(orderId).delete()
        .catch(err => console.error('Error eliminando orden de Firestore:', err));
}

// ─── Firestore: guardar proveedores ───
// Genera un ID estable basado en el nombre del proveedor
function providerDocId(name) {
    return (name || 'unknown').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 60);
}

function saveProvidersToDB() {
    // Guardar cada proveedor como documento individual
    PROVIDERS_DB.forEach(p => {
        const id = providerDocId(p.Nombre);
        db.collection('providers').doc(id).set(JSON.parse(JSON.stringify(p)))
            .catch(err => {
                // Si falla por tamaño (archivos pesados), reintentar sin docs
                if (err.message && err.message.includes('exceeds')) {
                    const light = { ...p, RUT: null, CertBancaria: null };
                    db.collection('providers').doc(id).set(light)
                        .catch(err2 => console.error('Error guardando proveedor:', id, err2));
                } else {
                    console.error('Error guardando proveedor:', id, err);
                }
            });
    });
}

// Guardar un solo proveedor (más eficiente para ediciones individuales)
function saveOneProviderToDB(provider) {
    const id = providerDocId(provider.Nombre);
    db.collection('providers').doc(id).set(JSON.parse(JSON.stringify(provider)))
        .catch(err => {
            if (err.message && err.message.includes('exceeds')) {
                const light = { ...provider, RUT: null, CertBancaria: null };
                db.collection('providers').doc(id).set(light)
                    .catch(err2 => console.error('Error guardando proveedor:', id, err2));
            } else {
                console.error('Error guardando proveedor:', id, err);
            }
        });
}

// Eliminar un proveedor de Firestore
function deleteProviderFromDB(providerName) {
    const id = providerDocId(providerName);
    db.collection('providers').doc(id).delete()
        .catch(err => console.error('Error eliminando proveedor de Firestore:', err));
}

// ─── Firestore: importar backup completo (reescribe todo) ───
async function syncAllToFirestore() {
    try {
        const batch = db.batch();
        // Escribir cada orden
        APP_STATE.requests.forEach(order => {
            const ref = db.collection('orders').doc(order.id);
            batch.set(ref, JSON.parse(JSON.stringify(order)));
        });
        // Escribir proveedores individualmente
        PROVIDERS_DB.forEach(p => {
            const id = providerDocId(p.Nombre);
            const ref = db.collection('providers').doc(id);
            batch.set(ref, JSON.parse(JSON.stringify(p)));
        });
        await batch.commit();
        console.log('✅ Backup sincronizado a Firestore');
    } catch (err) {
        // Si el batch falla (puede exceder límite con docs pesados), intentar sin archivos
        console.warn('⚠️ Batch falló, reintentando proveedores sin archivos:', err.message);
        try {
            const batch2 = db.batch();
            APP_STATE.requests.forEach(order => {
                batch2.set(db.collection('orders').doc(order.id), JSON.parse(JSON.stringify(order)));
            });
            PROVIDERS_DB.forEach(p => {
                const light = { ...p, RUT: null, CertBancaria: null };
                batch2.set(db.collection('providers').doc(providerDocId(p.Nombre)), light);
            });
            await batch2.commit();
            console.log('✅ Backup sincronizado (sin archivos de proveedores)');
            // Subir archivos individualmente fuera del batch
            PROVIDERS_DB.filter(p => p.RUT || p.CertBancaria).forEach(p => saveOneProviderToDB(p));
        } catch (err2) {
            console.error('Error sincronizando a Firestore:', err2);
        }
    }
}

// ─── Firestore: cargar datos desde la nube (carga inicial + tiempo real) ───

// Migrar estados antiguos (rejected→pending, in-payment→approved, delivered→paid)
function migrateOrderStatuses(orders) {
    const statusMap = { 'rejected': 'pending', 'in-payment': 'approved', 'delivered': 'paid' };
    const validStatuses = new Set(['pending', 'approved', 'sent', 'paid', 'voucher']);
    let migrated = 0;
    orders.forEach(order => {
        if (statusMap[order.status]) {
            order.status = statusMap[order.status];
            migrated++;
        }
    });
    if (migrated > 0) console.log(`🔄 Migrados ${migrated} estados antiguos`);
    return migrated;
}

async function loadFromFirestore(silent = false) {
    try {
        // ── Verificar autenticación ──
        let currentUser = auth.currentUser;
        console.log('🔐 Auth:', currentUser ? currentUser.email : 'NO AUTENTICADO');
        if (!currentUser) {
            // Esperar brevemente por auth (máx 1.5s)
            await new Promise((resolve) => {
                const unsub = auth.onAuthStateChanged((user) => {
                    if (user) { unsub(); resolve(); }
                });
                setTimeout(() => resolve(), 1500);
            });
            currentUser = auth.currentUser;
            if (!currentUser) {
                console.warn('⚠️ Sin autenticación después de espera');
                showToast('Aviso', 'Sin conexión a la nube. Usando datos locales.', 'warning');
                return;
            }
        }

        // ── Carga inicial única ──
        const ordersSnap = await db.collection('orders').get();
        const firestoreOrders = [];
        ordersSnap.forEach(doc => firestoreOrders.push(doc.data()));

        const provSnap = await db.collection('config').doc('providers').get();

        // Cargar proveedores individuales (nueva colección)
        const provIndividualSnap = await db.collection('providers').get();
        const firestoreProvidersIndividual = [];
        provIndividualSnap.forEach(doc => firestoreProvidersIndividual.push(doc.data()));

        // Guardar referencia de órdenes locales antes de sobreescribir
        const localOrders = [...APP_STATE.requests];

        if (firestoreOrders.length > 0 || provSnap.exists) {
            if (firestoreOrders.length > 0) {
                // Merge: órdenes de Firestore + órdenes locales que no estén en Firestore
                const firestoreIds = new Set(firestoreOrders.map(o => o.id));
                const localOnly = localOrders.filter(o => o.id && !firestoreIds.has(o.id));
                // Preservar datos locales completos (firmas, cotizaciones, evidencias)
                const localMap = new Map(localOrders.map(o => [o.id, o]));
                const mergedFirestore = firestoreOrders.map(order => {
                    const local = localMap.get(order.id);
                    if (local) {
                        if (local.signatureSolicitante && !order.signatureSolicitante) {
                            order.signatureSolicitante = local.signatureSolicitante;
                        }
                        if (local.signatureAprobacion && !order.signatureAprobacion) {
                            order.signatureAprobacion = local.signatureAprobacion;
                        }
                        if (local.quotations && local.quotations.length > 0 && local.quotations.some(q => q.data)) {
                            order.quotations = local.quotations;
                        }
                        if (local.evidencias && local.evidencias.length > 0 && local.evidencias.some(e => e.data)) {
                            order.evidencias = local.evidencias;
                        }
                    }
                    return order;
                });
                APP_STATE.requests = [...mergedFirestore, ...localOnly];
                // Subir órdenes que solo existían en local
                if (localOnly.length > 0) {
                    console.log('📤 Subiendo', localOnly.length, 'órdenes locales huérfanas a Firestore...');
                    localOnly.forEach(order => {
                        const cleanOrder = JSON.parse(JSON.stringify(order));
                        db.collection('orders').doc(order.id).set(cleanOrder)
                            .catch(err => console.error('Error subiendo orden local:', err));
                    });
                }
                APP_STATE.requests.sort((a, b) => new Date(a.date) - new Date(b.date));
                // Migrar estados antiguos al nuevo esquema de 3 estados
                if (migrateOrderStatuses(APP_STATE.requests) > 0) {
                    APP_STATE.requests.forEach(o => {
                        db.collection('orders').doc(o.id).set(JSON.parse(JSON.stringify(o)))
                            .catch(err => console.error('Error migrando estado:', err));
                    });
                }
            } else {
                // Firestore no tiene órdenes pero sí config: migrar locales
                if (localOrders.length > 0) {
                    console.log('📤 Migrando órdenes locales a Firestore...');
                    await syncAllToFirestore();
                }
            }
            // ── Cargar proveedores ──
            // Prioridad: colección individual 'providers' > viejo 'config/providers' > local
            let firestoreProviders = [];
            if (firestoreProvidersIndividual.length > 0) {
                firestoreProviders = firestoreProvidersIndividual;
                console.log('☁️ Proveedores cargados (colección individual):', firestoreProviders.length);
            } else if (provSnap.exists && provSnap.data().items) {
                firestoreProviders = provSnap.data().items;
                console.log('☁️ Proveedores cargados (config legacy):', firestoreProviders.length);
                // Migrar al nuevo formato individual
                console.log('📤 Migrando proveedores al formato individual...');
                firestoreProviders.forEach(p => saveOneProviderToDB(p));
            }

            if (firestoreProviders.length > 0) {
                const firestoreNames = new Set(firestoreProviders.map(p => p.Nombre.toLowerCase()));
                const localOnlyProv = PROVIDERS_DB.filter(p => !firestoreNames.has(p.Nombre.toLowerCase()));
                if (localOnlyProv.length > 0) {
                    PROVIDERS_DB = [...firestoreProviders, ...localOnlyProv];
                    localOnlyProv.forEach(p => saveOneProviderToDB(p));
                } else {
                    // Preservar archivos locales si Firestore no los tiene
                    const localMap = new Map(PROVIDERS_DB.map(p => [p.Nombre.toLowerCase(), p]));
                    PROVIDERS_DB = firestoreProviders.map(fp => {
                        const local = localMap.get(fp.Nombre.toLowerCase());
                        if (local) {
                            if (local.RUT && !fp.RUT) fp.RUT = local.RUT;
                            if (local.CertBancaria && !fp.CertBancaria) fp.CertBancaria = local.CertBancaria;
                        }
                        return fp;
                    });
                }
            } else {
                // Firestore no tiene proveedores: subir locales
                saveProvidersToDB();
            }
            localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
            localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
            console.log('☁️ Datos cargados desde Firestore:', firestoreOrders.length, 'órdenes');
        } else {
            // Firestore completamente vacío: migrar todos los datos locales
            console.log('📤 Migrando datos locales a Firestore...');
            await syncAllToFirestore();
        }

        APP_STATE.firestoreReady = true;
        flushPendingWrites();
        console.log('☁️ Firestore OK —', APP_STATE.requests.length, 'órdenes cargadas');

        // ── Listener en tiempo real para órdenes ──
        db.collection('orders').onSnapshot((snapshot) => {
            if (!APP_STATE.firestoreReady) return;
            const updatedOrders = [];
            snapshot.forEach(doc => updatedOrders.push(doc.data()));

            // Preservar órdenes locales cuya escritura a Firestore está pendiente o falló
            const firestoreIds = new Set(updatedOrders.map(o => o.id));
            const localPendingOrders = APP_STATE.requests.filter(o => 
                o.id && !firestoreIds.has(o.id) && _pendingOrderIds.has(o.id)
            );

            const merged = [...updatedOrders, ...localPendingOrders];

            // Verificar si realmente cambiaron los datos
            const currentSorted = APP_STATE.requests.map(r => r.id).sort().join(',');
            const newSorted = merged.map(r => r.id).sort().join(',');
            const currentStatuses = APP_STATE.requests.map(r => r.id + ':' + r.status).sort().join(',');
            const newStatuses = merged.map(r => r.id + ':' + r.status).sort().join(',');

            if (currentSorted !== newSorted || currentStatuses !== newStatuses) {
                // Preservar datos locales completos (con fotos) si Firestore tiene versión reducida
                const localMap = new Map(APP_STATE.requests.map(r => [r.id, r]));
                const finalOrders = merged.map(order => {
                    const local = localMap.get(order.id);
                    if (local) {
                        // Si la versión local tiene cotizaciones/evidencias completas, mantenerlas
                        if (local.quotations && local.quotations.length > 0 && local.quotations.some(q => q.data)) {
                            order.quotations = local.quotations;
                        }
                        if (local.evidencias && local.evidencias.length > 0 && local.evidencias.some(e => e.data)) {
                            order.evidencias = local.evidencias;
                        }
                        if (local.signatureSolicitante && !order.signatureSolicitante) {
                            order.signatureSolicitante = local.signatureSolicitante;
                        }
                        if (local.signatureAprobacion && !order.signatureAprobacion) {
                            order.signatureAprobacion = local.signatureAprobacion;
                        }
                    }
                    return order;
                });

                APP_STATE.requests = finalOrders;
                migrateOrderStatuses(APP_STATE.requests);
                APP_STATE.requests.sort((a, b) => new Date(a.date) - new Date(b.date));
                localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
                console.log('🔄 Datos actualizados en tiempo real:', updatedOrders.length, 'órdenes de Firestore +', localPendingOrders.length, 'pendientes locales');
                requestAnimationFrame(() => renderView(APP_STATE.currentView));
            }
        }, (err) => {
            console.error('Error en listener de tiempo real:', err);
        });

        // ── Listener en tiempo real para proveedores (colección individual) ──
        db.collection('providers').onSnapshot((snapshot) => {
            if (!APP_STATE.firestoreReady) return;
            const newProviders = [];
            snapshot.forEach(doc => newProviders.push(doc.data()));

            if (newProviders.length > 0) {
                // Preservar archivos locales que Firestore no tenga
                const localMap = new Map(PROVIDERS_DB.map(p => [p.Nombre.toLowerCase(), p]));
                const merged = newProviders.map(fp => {
                    const local = localMap.get(fp.Nombre.toLowerCase());
                    if (local) {
                        if (local.RUT && !fp.RUT) fp.RUT = local.RUT;
                        if (local.CertBancaria && !fp.CertBancaria) fp.CertBancaria = local.CertBancaria;
                    }
                    return fp;
                });

                const oldNames = PROVIDERS_DB.map(p => p.Nombre).sort().join(',');
                const newNames = merged.map(p => p.Nombre).sort().join(',');
                if (oldNames !== newNames || merged.some((p, i) => p.RUT !== PROVIDERS_DB[i]?.RUT || p.CertBancaria !== PROVIDERS_DB[i]?.CertBancaria)) {
                    PROVIDERS_DB = merged;
                    localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
                    console.log('🔄 Proveedores actualizados en tiempo real:', PROVIDERS_DB.length);
                    if (APP_STATE.currentView === 'providers') {
                        requestAnimationFrame(() => renderView('providers'));
                    }
                }
            }
        }, (err) => {
            console.error('Error en listener de proveedores:', err);
        });

    } catch (err) {
        console.error('Error cargando desde Firestore:', err);
        APP_STATE.firestoreReady = true;
        flushPendingWrites();
        const errMsg = err.code || err.message || String(err);
        const userAuth = auth.currentUser;
        console.error('🔍 DIAGNÓSTICO COMPLETO:', {
            error: errMsg,
            authenticated: !!userAuth,
            email: userAuth?.email || 'N/A',
            uid: userAuth?.uid || 'N/A',
            projectId: firebaseConfig.projectId,
            authDomain: firebaseConfig.authDomain
        });
        if (errMsg.includes('permission-denied') || errMsg.includes('PERMISSION_DENIED')) {
            if (!userAuth) {
                showToast('⚠️ Error Auth', `No hay sesión activa. Firestore requiere autenticación. Recarga la página e inicia sesión de nuevo.`, 'error');
            } else {
                showToast('⚠️ Permisos', `Acceso denegado para ${userAuth.email} (UID: ${userAuth.uid?.slice(0,8)}...). Verifica las Security Rules en Firebase Console.`, 'error');
            }
        } else if (errMsg.includes('unavailable') || errMsg.includes('Failed to fetch') || errMsg.includes('network')) {
            showToast('Aviso', 'Sin conexión a la nube. Usando datos locales.', 'warning');
        } else {
            showToast('Aviso', `Error de Firestore: ${errMsg}. Usando datos locales.`, 'warning');
        }
        console.warn('📋 Detalle del error Firestore:', errMsg);
    }
}

function saveState() {
    try {
        localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
    } catch (e) {
        console.warn('⚠️ localStorage lleno, guardando sin adjuntos pesados...');
        try {
            const lightRequests = APP_STATE.requests.map(r => {
                const copy = { ...r };
                if (copy.quotations) copy.quotations = copy.quotations.map(q => ({ name: q.name, type: q.type, _stripped: true }));
                if (copy.evidencias) copy.evidencias = copy.evidencias.map(ev => ({ name: ev.name, _stripped: true }));
                delete copy.signatureSolicitante;
                delete copy.signatureAprobacion;
                return copy;
            });
            localStorage.setItem('cth_requests', JSON.stringify(lightRequests));
        } catch (e2) {
            console.error('❌ No se pudo guardar en localStorage:', e2);
        }
    }
}

// ─── Pagos Parciales: construir plan de pagos según forma y % ───
function buildPaymentPlan(pago, pagoPerc, total) {
    const numTotal = parseFloat(total) || 0;

    // Si es 100%, N/A, vacío o Contado sin split → pago único
    if (!pagoPerc || pagoPerc === '100%' || pagoPerc === 'N/A' || pago === 'Contado') {
        return [{ label: 'Pago total', percent: 100, amount: numTotal, paid: false, date: null }];
    }

    // Parsear porcentajes (ej: "50% - 50%", "70% - 30%")
    const parts = pagoPerc.split('-').map(s => parseInt(s.trim()));
    if (parts.length < 2 || parts.some(isNaN)) {
        return [{ label: 'Pago total', percent: 100, amount: numTotal, paid: false, date: null }];
    }

    // Determinar etiquetas según forma de pago
    let labels;
    if (pago === 'Anticipo - Contado') {
        labels = ['Anticipo', 'Contado'];
    } else if (pago === 'Anticipo') {
        labels = ['Anticipo', 'Saldo'];
    } else if (pago === 'Credito') {
        labels = ['Primer pago', 'Segundo pago'];
    } else {
        labels = ['Pago 1', 'Pago 2'];
    }

    return parts.map((p, i) => ({
        label: `${labels[i] || 'Pago ' + (i + 1)} (${p}%)`,
        percent: p,
        amount: Math.round(numTotal * p / 100),
        paid: false,
        date: null
    }));
}

function saveProviders() {
    localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
    saveProvidersToDB();
}

// ─── Utilidades ───
function formatCOP(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const fecha = d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'p.m' : 'a.m';
    hours = hours % 12 || 12;
    return `${fecha} - ${hours}:${minutes} ${ampm}`;
}

function generateId() {
    return 'OC-' + Date.now().toString(36).toUpperCase();
}

// ─── Elegant Confirm Modal ───
function showConfirm(title, message, onConfirm, confirmText = 'Confirmar', type = 'danger') {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
    overlay.innerHTML = `
        <div class="confirm-modal">
            <div class="cm-icon">${type === 'danger' ? '⚠️' : 'ℹ️'}</div>
            <h3 class="cm-title">${title}</h3>
            <p class="cm-message">${message}</p>
            <div class="cm-actions">
                <button class="cm-btn cm-cancel">Cancelar</button>
                <button class="cm-btn cm-confirm ${type}">${confirmText}</button>
            </div>
        </div>
    `;
    overlay.querySelector('.cm-cancel').onclick = () => overlay.remove();
    overlay.querySelector('.cm-confirm').onclick = () => { overlay.remove(); onConfirm(); };
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
    document.body.appendChild(overlay);
}

// ─── Backup: Exportar / Importar ───
window.exportBackup = () => {
    const data = {
        version: '2.1',
        exportDate: new Date().toISOString(),
        requests: APP_STATE.requests,
        providers: PROVIDERS_DB
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_contabilidad_uib_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup descargado', 'El archivo de respaldo fue generado correctamente.', 'success');
};

window.importBackup = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.requests || !Array.isArray(data.requests)) {
                showToast('Error', 'El archivo no tiene un formato válido de backup.', 'error');
                return;
            }
            showConfirm(
                'Importar Backup',
                `Se importarán <strong>${data.requests.length}</strong> órdenes y <strong>${(data.providers || []).length}</strong> proveedores.<br>Esto <strong>reemplazará</strong> todos los datos actuales.`,
                () => {
                    APP_STATE.requests = data.requests;
                    saveState();
                    if (data.providers && Array.isArray(data.providers)) {
                        PROVIDERS_DB = data.providers;
                        saveProviders();
                    }
                    syncAllToFirestore().then(() => {
                        showToast('Backup importado', 'Datos restaurados y sincronizados con la nube.', 'success');
                        setTimeout(() => location.reload(), 1200);
                    });
                },
                'Importar',
                'info'
            );
        } catch (err) {
            showToast('Error', 'No se pudo leer el archivo: ' + err.message, 'error');
        }
    };
    reader.readAsText(file);
    // Reset the file input so the same file can be re-selected
    document.getElementById('import-backup').value = '';
};

// ─── Toast Notifications ───
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    const icons = { success: '✅', warning: '⚠️', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3800);
}

// ─── Init ───
let appInitialized = false;
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});

function initApp() {
    if (appInitialized) return;
    appInitialized = true;

    const navItems = document.querySelectorAll('.nav-item');
    const viewTitle = document.getElementById('view-title');

    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;
            navItems.forEach(i => {
                i.classList.remove('active');
                i.removeAttribute('aria-current');
            });
            item.classList.add('active');
            item.setAttribute('aria-current', 'page');

            const labels = {
                'dashboard': 'Panel General',
                'new-request': 'Nueva Solicitud de Compra',
                'history': 'Historial de Órdenes',
                'evidence': 'Evidencias de Entrega',
                'providers': 'Gestión de Proveedores',
                'inventory': 'Inventario de Activos'
            };
            viewTitle.textContent = labels[view];
            APP_STATE.currentView = view;
            renderView(view);

            // Cerrar sidebar en móvil
            closeMobileSidebar();
        });
    });

    // Delegación de eventos globales
    document.addEventListener('click', (e) => {
        if (e.target.id === 'btn-create-start' || e.target.closest('#btn-create-start')) {
            document.querySelector('[data-view="new-request"]').click();
        }
        if (e.target.id === 'btn-cancel' || e.target.closest('#btn-cancel')) {
            document.querySelector('[data-view="dashboard"]').click();
        }
    });

    // Mobile menu
    initMobileMenu();

    // Renderizar dashboard inmediatamente con datos locales
    renderView('dashboard');

    // Cargar datos desde Firestore en paralelo
    const localCount = APP_STATE.requests.length;
    loadFromFirestore(true).then(() => {
        // Solo re-renderizar si los datos cambiaron
        if (APP_STATE.requests.length !== localCount) {
            renderView('dashboard');
        }
        // Cargar inventario desde Firestore
        loadInventoryFromFirestore();
    }).catch(() => {
        // Si falla, el dashboard ya está renderizado con datos locales
    });
}

// ─── Mobile Menu ───
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!toggle || !sidebar || !overlay) return;

    toggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('open');
        if (isOpen) {
            closeMobileSidebar();
        } else {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            toggle.classList.add('active');
        }
    });

    overlay.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggle = document.getElementById('menu-toggle');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    if (toggle) toggle.classList.remove('active');
}

// ─── Helper: indicador visual de pagos parciales ───
function getPaymentIndicator(r) {
    if (!r.payments || r.payments.length <= 1) return '';
    const paidCount = r.payments.filter(p => p.paid).length;
    const total = r.payments.length;
    if (paidCount === total) return ''; // ya está 100% pagada
    const pct = Math.round(paidCount / total * 100);
    return `<span class="payment-pill ${paidCount > 0 ? 'partial' : 'none'}" title="${paidCount} de ${total} pagos">
        <span class="payment-pill-bar" style="width:${pct}%"></span>
        <span class="payment-pill-text">${paidCount}/${total} pagos</span>
    </span>`;
}

// ─── Dashboard ───
function renderDashboard() {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };

    // Recent list
    const recentList = document.getElementById('recent-list');
    const emptyState = document.getElementById('empty-state');

    if (recentList && emptyState) {
        if (requests.length === 0) {
            recentList.innerHTML = '';
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
            const last5 = [...requests].reverse().slice(0, 5);
            recentList.innerHTML = last5.map(r => `
                <div class="recent-item clickable" onclick="window.openOrderDetail('${r.id}')">
                    <span class="ri-icon">📋</span>
                    <div class="ri-info">
                        <div class="ri-title">${r.provider || 'Sin proveedor'}</div>
                        <div class="ri-desc">${(r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : 'Sin descripción'}</div>
                        <div class="ri-meta">${r.id} · ${formatDate(r.date)}</div>
                    </div>
                    <span class="ri-amount ${r.status}">${formatCOP(r.total || 0)}</span>
                    <span class="ri-status-wrap">
                        <span class="ri-status ${r.status}">${statusLabels[r.status] || r.status}</span>
                        ${getPaymentIndicator(r)}
                    </span>
                    <button class="ri-delete" onclick="event.stopPropagation(); window.deleteOrder('${r.id}')" title="Eliminar orden">✕</button>
                </div>
            `).join('');
        }
    }
}

// ─── Render Views ───
function renderView(view) {
    const container = document.getElementById('view-dashboard');

    if (view === 'dashboard') {
        // Calcular datos para el dashboard
        const requests = APP_STATE.requests;
        const now = new Date();
        const pending = requests.filter(r => r.status === 'pending').length;
        const approved = requests.filter(r => r.status === 'approved').length;
        const sent = requests.filter(r => r.status === 'sent').length;
        const paid = requests.filter(r => r.status === 'paid').length;

        // Contar órdenes de este mes
        const thisMonthCount = requests.filter(r => {
            const d = new Date(r.date);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).length;

        const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };

        container.innerHTML = `
            <div class="stats-grid animate-in">
                <div class="stat-card">
                    <h3>Total Órdenes</h3>
                    <div class="value">${requests.length}</div>
                    <div class="trend blue">Este mes: ${thisMonthCount}</div>
                </div>
                <div class="stat-card">
                    <h3>Pendientes de Firma</h3>
                    <div class="value">${pending}</div>
                    <div class="trend ${pending > 0 ? 'blue' : 'green'}">${pending > 0 ? 'Sin aprobar' : 'Todo al día ✓'}</div>
                </div>
                <div class="stat-card">
                    <h3>Por Pagar</h3>
                    <div class="value">${sent}</div>
                    ${(() => {
                        if (sent === 0) return '<div class="trend green">Sin pendientes</div>';
                        const withPartial = requests.filter(r => r.status === 'sent' && r.payments && r.payments.length > 1 && r.payments.some(p => p.paid)).length;
                        if (withPartial > 0) return `<div class="trend orange">Con pago parcial</div>`;
                        return '<div class="trend orange">Pendientes de pago</div>';
                    })()}
                </div>
                <div class="stat-card">
                    <h3>Pagadas</h3>
                    <div class="value">${paid}</div>
                    <div class="trend green">Pagos realizados</div>
                </div>
                <div class="stat-card stat-card-inversion">
                    <h3>Inversión Total</h3>
                    <div class="value">${formatCOP(requests.reduce((s, r) => s + (r.total || 0), 0))}</div>
                    <div class="trend red">Acumulado</div>
                </div>
            </div>

            <!-- Historial completo -->
            <div class="recent-requests animate-in">
                <div class="section-header">
                    <h2>Historial de Órdenes</h2>
                    <div style="display:flex;gap:10px;align-items:center;">
                        <button class="btn-excel" onclick="window.exportToExcel()" title="Exportar a Excel">📊 Exportar Excel</button>
                        <button class="btn-primary" id="btn-create-start">
                            <span class="btn-icon">➕</span> Nueva Solicitud
                        </button>
                    </div>
                </div>

                <div class="history-toolbar" style="margin-bottom:12px;">
                    <div class="history-search-bar" style="flex:1;">
                        <input type="text" id="dash-history-search" class="providers-search-input" placeholder="🔍  Buscar por N° orden, proveedor, sede o fecha...">
                    </div>
                </div>

                <div class="history-filters" id="dash-history-filters">
                    <button class="filter-chip active" data-filter="all">Todas</button>
                    <button class="filter-chip" data-filter="pending">Pendientes de firma</button>
                    <button class="filter-chip" data-filter="approved">Aprobadas</button>
                    <button class="filter-chip" data-filter="sent">Por Pagar</button>
                    <button class="filter-chip" data-filter="paid">Pagadas</button>
                </div>

                ${requests.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-icon">📁</div>
                        <p>No hay órdenes aún.</p>
                        <p class="empty-sub">Crea tu primera solicitud.</p>
                    </div>
                ` : `
                    <div class="table-scroll">
                        <table class="history-table">
                            <thead>
                                <tr>
                                    <th>N° Orden</th>
                                    <th>Fecha</th>
                                    <th>Proveedor</th>
                                    <th>Sede</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th style="width:44px;"></th>
                                </tr>
                            </thead>
                            <tbody id="dash-history-tbody">
                                ${[...requests].reverse().map(r => {
                                    const itemsDesc = (r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : '';
                                    return `
                                    <tr data-status="${r.status}" class="clickable" onclick="window.openOrderDetail('${r.id}')">
                                        <td><strong>${r.id}</strong></td>
                                        <td>${formatDate(r.date)}</td>
                                        <td>
                                            <div class="cell-provider-name">${r.provider}</div>
                                            ${itemsDesc ? `<div class="cell-items-desc">${itemsDesc}</div>` : ''}
                                            ${r.obs ? `<div class="cell-obs-desc">(${r.obs})</div>` : ''}
                                        </td>
                                        <td>${r.sede || 'CTH'}</td>
                                        <td><strong>${formatCOP(r.total || 0)}</strong></td>
                                        <td>
                                            <span class="status-badge ${r.status}">${statusLabels[r.status] || r.status}</span>
                                            ${getPaymentIndicator(r)}
                                        </td>
                                        <td class="cell-delete"><button class="ri-delete" onclick="event.stopPropagation(); window.deleteOrder('${r.id}')" title="Eliminar orden">✕</button></td>
                                    </tr>`;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `}
            </div>
        `;
        // Filtros del historial en dashboard
        const dashFilters = document.getElementById('dash-history-filters');
        if (dashFilters) {
            dashFilters.querySelectorAll('.filter-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    dashFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    const filter = chip.dataset.filter;
                    document.querySelectorAll('#dash-history-tbody tr').forEach(row => {
                        row.style.display = (filter === 'all' || row.dataset.status === filter) ? '' : 'none';
                    });
                });
            });
        }
        // Búsqueda del historial en dashboard
        const dashSearch = document.getElementById('dash-history-search');
        if (dashSearch) {
            dashSearch.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                document.querySelectorAll('#dash-history-tbody tr').forEach(row => {
                    row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
                });
                if (dashFilters) {
                    dashFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                    dashFilters.querySelector('[data-filter=all]')?.classList.add('active');
                }
            });
        }

    } else if (view === 'new-request') {
        const todayStr = new Date().toISOString().split('T')[0];
        const nextOrderNum = (APP_STATE.requests.length + 1).toString().padStart(3, '0');

        container.innerHTML = `
            <div class="card-form animate-in full-sheet">
                <div class="order-header-official">
                    <img src="assets/encabezado orden de compra.png" alt="Encabezado Orden de Compra – Colegio Theodoro Herzl" class="order-header-img">
                </div>

                <div class="order-title-bar">ORDEN DE COMPRA N°.</div>

                <div class="order-meta-row">
                    <div class="order-meta-item">
                        <span class="meta-label">FECHA</span>
                        <input type="date" id="sheet-fecha" class="meta-input" value="${todayStr}">
                    </div>
                    <div class="order-meta-item">
                        <span class="meta-label">N° ORDEN</span>
                        <input type="text" id="sheet-orden-num" class="meta-input" value="${nextOrderNum}" placeholder="001">
                    </div>
                    <div class="order-meta-item">
                        <span class="meta-label">SEDE</span>
                        <select id="sheet-sede" class="meta-input">
                            <option value="CTH" selected>CTH</option>
                            <option value="ENC">ENC</option>
                            <option value="UIB">UIB</option>
                            <option value="CTH/UIB">CTH/UIB</option>
                            <option value="CTH/ENC">CTH/ENC</option>
                            <option value="CTH/ENC/UIB">CTH/ENC/UIB</option>
                            <option value="UIB/ENC">UIB/ENC</option>
                        </select>
                    </div>
                    <div class="order-meta-item">
                        <span class="meta-label">PAGO</span>
                        <select id="sheet-pago" class="meta-input">
                            <option value="Anticipo - Contado" selected>Anticipo - Contado</option>
                            <option value="Contado">Contado</option>
                            <option value="Anticipo">Anticipo</option>
                            <option value="Credito">Credito</option>
                        </select>
                    </div>
                    <div class="order-meta-item">
                        <span class="meta-label">% PAGO</span>
                        <select id="sheet-pago-perc" class="meta-input">
                            <option value="50% - 50%" selected>50% - 50%</option>
                            <option value="100%">100%</option>
                            <option value="70% - 30%">70% - 30%</option>
                            <option value="60% - 40%">60% - 40%</option>
                            <option value="20% - 80%">20% - 80%</option>
                            <option value="80% - 20%">80% - 20%</option>
                            <option value="30% - 70%">30% - 70%</option>
                            <option value="40% - 60%">40% - 60%</option>
                            <option value="N/A">N/A</option>
                        </select>
                    </div>
                </div>

                <div class="billing-info-box">
                    <div class="billing-title">FACTURAR A</div>
                    <div class="billing-details">
                        <span><strong>Nombre de la empresa:</strong> Unión Israelita De Beneficencia De Medellín</span>
                        <span><strong>NIT:</strong> 890.902.916-1</span>
                        <span><strong>Teléfono:</strong> (604) 560-97-54</span>
                        <span><strong>Correo electrónico:</strong> buzonfacturaelectronica@uibmedellin.org</span>
                    </div>
                    <div class="billing-note">
                        <strong>Enviar: Factura, RUT del año actual y Certificación bancaria.</strong>
                    </div>
                </div>

                <div class="sheet-section">
                    <div class="section-title">ENVÍO</div>
                    <div class="form-row-grid six-cols">
                        <div class="field-group">
                            <label>Sede</label>
                            <select id="sheet-envio-sede">
                                <option value="" disabled>— Selecciona —</option>
                                <option value="Colegio Theodoro Hertzl" selected>Colegio Theodoro Hertzl</option>
                                <option value="UIB">UIB</option>
                                <option value="Jardín Infantil El Encuentro">Jardín Infantil El Encuentro</option>
                                <option value="Cementerio">Cementerio</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                        <div class="field-group">
                            <label>Ciudad</label>
                            <input type="text" id="sheet-envio-ciudad" placeholder="Ciudad" value="Envigado">
                        </div>
                        <div class="field-group">
                            <label>Dirección</label>
                            <input type="text" id="sheet-envio-dir" placeholder="Dirección" value="Carrera 1 # 36 D Sur 515">
                        </div>
                        <div class="field-group">
                            <label>Barrio</label>
                            <input type="text" id="sheet-envio-barrio" placeholder="Barrio" value="Alto de Palmas">
                        </div>
                        <div class="field-group">
                            <label>Teléfono</label>
                            <input type="text" id="sheet-envio-tel" placeholder="Teléfono" value="(604) 3220180">
                        </div>
                        <div class="field-group">
                            <label>Persona que recibe</label>
                            <input type="text" id="sheet-envio-resp" placeholder="Persona que recibe" value="">
                        </div>
                    </div>
                </div>

                <div class="sheet-section">
                    <div class="section-title">Información del Proveedor</div>
                    <div class="form-row-grid two-cols">
                        <div class="field-group custom-autocomplete">
                            <label>Nombre de la empresa</label>
                            <div class="input-with-icon">
                                <input type="text" id="sheet-prov-name" placeholder="Ej: AINOX S.A.S." autocomplete="off" required>
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
                    <div class="section-title">Ítems de la Compra</div>
                    <div class="table-scroll">
                        <table class="items-table-sheet">
                            <thead>
                                <tr>
                                    <th width="50">N°</th>
                                    <th>Descripción</th>
                                    <th width="100">Cantidad</th>
                                    <th width="150">Precio Uni</th>
                                    <th width="150">Total</th>
                                    <th width="50"></th>
                                </tr>
                            </thead>
                            <tbody id="sheet-table-body">
                                <tr>
                                    <td>1</td>
                                    <td><input type="text" class="sheet-input-cell" placeholder="Ej: Tableros imantados"></td>
                                    <td><input type="number" class="sheet-input-cell" value="1" min="1" onchange="window.updateSheetCalculations()" oninput="window.updateSheetCalculations()"></td>
                                    <td><input type="text" class="sheet-input-cell price-input" placeholder="0" oninput="window.formatPriceInput(this); window.updateSheetCalculations()"></td>
                                    <td class="cell-total">${formatCOP(0)}</td>
                                    <td class="row-actions"></td>
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
                        <div class="order-contact-info">
                            <p class="contact-title"><em>Si tiene preguntas sobre esta factura, póngase en contacto con</em></p>
                            <p class="contact-line"><strong>Pagos:</strong> analistatesoreria@uibmedellin.org - Tel (604) 5609754 Ext 7200</p>
                            <p class="contact-line"><strong>Recepción de documentos:</strong> buzonfacturaelectronica@uibmedellin.org - Tel (604) 5609754 Ext 7209</p>
                            <p class="contact-line"><strong>Compras:</strong> analistafinanciera@uibmedellin.org - Tel (604) 3220180 Ext 7114</p>
                        </div>
                    </div>
                    <div class="totals-panel totals-table">
                        <div class="total-row">
                            <span class="total-label">SUBTOTAL</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-sub" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                        <div class="total-row">
                            <span class="total-label">DESCUENTO</span>
                            <span class="total-currency" id="desc-currency"></span>
                            <input type="text" id="sheet-descuento" class="total-input" value="" placeholder="% o $" oninput="window.handleDescuentoInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row subtotal-neto">
                            <span class="total-label">SUBT. - DESC.</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-sub-desc" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                        <div class="total-row">
                            <span class="total-label">IVA (19%)</span>
                            <span class="total-currency">$</span>
                            <div class="iva-input-wrap">
                                <input type="text" id="sheet-iva" class="total-input" value="" placeholder="0" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                                <button type="button" class="btn-recalc-iva" id="btn-recalc-iva" title="Recalcular IVA 19%" onclick="window.recalcIva()">↻</button>
                            </div>
                        </div>
                        <div class="total-row">
                            <span class="total-label">FLETE</span>
                            <span class="total-currency">$</span>
                            <input type="text" id="sheet-flete" class="total-input" value="" placeholder="0" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row">
                            <span class="total-label">OTRO</span>
                            <span class="total-currency">$</span>
                            <input type="text" id="sheet-otro" class="total-input" value="" placeholder="0" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row grand-total">
                            <span class="total-label">TOTAL</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-total" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                    </div>
                </div>

                <div class="order-signatures">
                    <div class="signature-row single">
                        <div class="signature-block">
                            <div class="signature-pad-wrap">
                                <canvas id="sig-canvas-1" class="signature-canvas"></canvas>
                                <button type="button" class="sig-clear-btn" onclick="window.clearSignature(1)" title="Limpiar firma">✕</button>
                                <div class="sig-placeholder" id="sig-placeholder-1">Firme aquí</div>
                            </div>
                            <p class="signature-label">FIRMA SOLICITANTE</p>
                        </div>
                    </div>
                </div>

                <div class="form-actions-footer">
                    <button class="btn-secondary" id="btn-cancel">Cancelar</button>
                    <button class="btn-primary" onclick="window.proceedToQuotes()">Continuar a Cotizaciones</button>
                </div>
            </div>
        `;

        initProviderAutocomplete();
        initSedeAutofill();
        initSignaturePads();

    } else if (view === 'history') {
        renderHistory(container);
    } else if (view === 'evidence') {
        renderEvidenceView(container);
    } else if (view === 'providers') {
        renderProvidersView(container);
    } else if (view === 'inventory') {
        renderInventoryView(container);
    }
}

// ─── Providers Management View ───
function renderProvidersView(container) {
    const providers = PROVIDERS_DB;

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="providers-header">
                <div>
                    <h2 class="providers-title">📋 Base de Datos de Proveedores</h2>
                    <p class="providers-subtitle">${providers.length} proveedores registrados</p>
                </div>
                <button class="btn-primary" onclick="window.openProviderForm()">
                    <span class="btn-icon">➕</span> Nuevo Proveedor
                </button>
            </div>

            <div class="providers-search-bar">
                <input type="text" id="prov-search" class="providers-search-input" placeholder="🔍  Buscar por nombre, NIT, correo o contacto...">
            </div>

            <div class="providers-table-wrap">
                <table class="providers-table" id="providers-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>NIT</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Contacto</th>
                            <th style="text-align:center;">RUT</th>
                            <th style="text-align:center;">Cert. Bancaria</th>
                            <th style="width:100px;text-align:center;">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="providers-tbody">
                        ${providers.map((p, i) => `
                            <tr data-index="${i}">
                                <td class="prov-cell-name">${p.Nombre}</td>
                                <td>${p.NIT || '—'}</td>
                                <td>${p.Tel || '—'}</td>
                                <td class="prov-cell-email">${p.Email || '—'}</td>
                                <td>${p.Contacto || '—'}</td>
                                <td class="prov-cell-doc" style="text-align:center;">
                                    ${p.RUT ? `<button class="prov-doc-btn has-doc" onclick="event.stopPropagation(); window.viewProviderDoc(${i}, 'RUT')" title="Ver RUT">📄</button>` : `<span class="prov-doc-empty">—</span>`}
                                </td>
                                <td class="prov-cell-doc" style="text-align:center;">
                                    ${p.CertBancaria ? `<button class="prov-doc-btn has-doc" onclick="event.stopPropagation(); window.viewProviderDoc(${i}, 'CertBancaria')" title="Ver Cert. Bancaria">📄</button>` : `<span class="prov-doc-empty">—</span>`}
                                </td>
                                <td class="prov-cell-actions">
                                    <button class="prov-btn-edit" onclick="window.openProviderForm(${i})" title="Editar">✏️</button>
                                    <button class="prov-btn-delete" onclick="window.deleteProvider(${i})" title="Eliminar">🗑️</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // Search filter
    const searchInput = document.getElementById('prov-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('#providers-tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
        searchInput.focus();
    }
}

// ─── Provider Form (Add / Edit) ───
window.openProviderForm = (index = null) => {
    const isEdit = index !== null && index !== undefined;
    const p = isEdit ? PROVIDERS_DB[index] : { Nombre: '', NIT: '', Tel: '', Email: '', Contacto: '', RUT: null, CertBancaria: null };
    const title = isEdit ? 'Editar Proveedor' : 'Nuevo Proveedor';

    const container = document.getElementById('view-dashboard');
    const viewTitle = document.getElementById('view-title');
    if (viewTitle) viewTitle.textContent = title;

    container.innerHTML = `
        <div class="card-form animate-in" style="max-width:700px;">
            <h2 class="prov-form-title">${isEdit ? '✏️' : '➕'} ${title}</h2>

            <div class="prov-form-grid">
                <div class="field-group full-span">
                    <label>Nombre del Proveedor *</label>
                    <input type="text" id="pf-nombre" value="${p.Nombre}" placeholder="Nombre o razón social">
                </div>
                <div class="field-group">
                    <label>NIT</label>
                    <input type="text" id="pf-nit" value="${p.NIT || ''}" placeholder="NIT o cédula">
                </div>
                <div class="field-group">
                    <label>Teléfono</label>
                    <input type="text" id="pf-tel" value="${p.Tel || ''}" placeholder="Teléfono de contacto">
                </div>
                <div class="field-group full-span">
                    <label>Correo Electrónico</label>
                    <input type="email" id="pf-email" value="${p.Email || ''}" placeholder="correo@ejemplo.com">
                </div>
                <div class="field-group full-span">
                    <label>Persona de Contacto</label>
                    <input type="text" id="pf-contacto" value="${p.Contacto || ''}" placeholder="Nombre de la persona de contacto">
                </div>

                <div class="field-group">
                    <label>📄 RUT</label>
                    <div class="prov-doc-upload-wrap">
                        <input type="file" id="pf-rut" accept=".pdf,image/*" hidden>
                        <button type="button" class="prov-upload-btn" onclick="document.getElementById('pf-rut').click()">
                            ${p.RUT ? '🔄 Cambiar archivo' : '📎 Subir RUT'}
                        </button>
                        <span class="prov-doc-status" id="pf-rut-status">${p.RUT ? '✅ Archivo cargado' : 'Sin archivo'}</span>
                        ${p.RUT ? `<button type="button" class="prov-doc-view-btn" onclick="window.viewProviderDocData(window._provFormRUT, 'RUT')" id="pf-rut-view">👁️ Ver</button>
                        <button type="button" class="prov-doc-remove-btn" onclick="window._provFormRemoveDoc('rut')">✕</button>` : ''}
                    </div>
                </div>
                <div class="field-group">
                    <label>📄 Certificación Bancaria</label>
                    <div class="prov-doc-upload-wrap">
                        <input type="file" id="pf-cert" accept=".pdf,image/*" hidden>
                        <button type="button" class="prov-upload-btn" onclick="document.getElementById('pf-cert').click()">
                            ${p.CertBancaria ? '🔄 Cambiar archivo' : '📎 Subir Certificación'}
                        </button>
                        <span class="prov-doc-status" id="pf-cert-status">${p.CertBancaria ? '✅ Archivo cargado' : 'Sin archivo'}</span>
                        ${p.CertBancaria ? `<button type="button" class="prov-doc-view-btn" onclick="window.viewProviderDocData(window._provFormCert, 'Cert. Bancaria')" id="pf-cert-view">👁️ Ver</button>
                        <button type="button" class="prov-doc-remove-btn" onclick="window._provFormRemoveDoc('cert')">✕</button>` : ''}
                    </div>
                </div>
            </div>

            <div class="form-actions-footer" style="margin-top:24px;">
                <button class="btn-secondary" onclick="document.querySelector('[data-view=providers]').click()">← Cancelar</button>
                <button class="btn-primary" onclick="window.saveProvider(${isEdit ? index : 'null'})">
                    💾 ${isEdit ? 'Guardar Cambios' : 'Agregar Proveedor'}
                </button>
            </div>
        </div>
    `;

    // Store existing docs in temp vars for the form
    window._provFormRUT = p.RUT || null;
    window._provFormCert = p.CertBancaria || null;

    // File upload handlers
    document.getElementById('pf-rut').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            window._provFormRUT = ev.target.result;
            document.getElementById('pf-rut-status').textContent = '✅ ' + file.name;
            // Re-render upload area to show view/remove buttons
            const wrap = document.getElementById('pf-rut').closest('.prov-doc-upload-wrap');
            const viewBtn = document.getElementById('pf-rut-view');
            if (!viewBtn) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'prov-doc-view-btn';
                btn.id = 'pf-rut-view';
                btn.textContent = '👁️ Ver';
                btn.onclick = () => window.viewProviderDocData(window._provFormRUT, 'RUT');
                wrap.appendChild(btn);
                const rmBtn = document.createElement('button');
                rmBtn.type = 'button';
                rmBtn.className = 'prov-doc-remove-btn';
                rmBtn.textContent = '✕';
                rmBtn.onclick = () => window._provFormRemoveDoc('rut');
                wrap.appendChild(rmBtn);
            }
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('pf-cert').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            window._provFormCert = ev.target.result;
            document.getElementById('pf-cert-status').textContent = '✅ ' + file.name;
            const wrap = document.getElementById('pf-cert').closest('.prov-doc-upload-wrap');
            const viewBtn = document.getElementById('pf-cert-view');
            if (!viewBtn) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'prov-doc-view-btn';
                btn.id = 'pf-cert-view';
                btn.textContent = '👁️ Ver';
                btn.onclick = () => window.viewProviderDocData(window._provFormCert, 'Cert. Bancaria');
                wrap.appendChild(btn);
                const rmBtn = document.createElement('button');
                rmBtn.type = 'button';
                rmBtn.className = 'prov-doc-remove-btn';
                rmBtn.textContent = '✕';
                rmBtn.onclick = () => window._provFormRemoveDoc('cert');
                wrap.appendChild(rmBtn);
            }
        };
        reader.readAsDataURL(file);
    });
};

// ─── Save Provider ───
window.saveProvider = (index) => {
    const nombre = document.getElementById('pf-nombre').value.trim();
    if (!nombre) {
        showToast('Campo requerido', 'El nombre del proveedor es obligatorio', 'warning');
        return;
    }

    const data = {
        Nombre: nombre,
        NIT: document.getElementById('pf-nit').value.trim(),
        Tel: document.getElementById('pf-tel').value.trim(),
        Email: document.getElementById('pf-email').value.trim(),
        Contacto: document.getElementById('pf-contacto').value.trim(),
        RUT: window._provFormRUT || null,
        CertBancaria: window._provFormCert || null
    };

    if (index !== null) {
        // Editar existente — si cambió el nombre, eliminar el doc viejo
        const oldName = PROVIDERS_DB[index].Nombre;
        PROVIDERS_DB[index] = data;
        if (oldName.toLowerCase() !== data.Nombre.toLowerCase()) {
            deleteProviderFromDB(oldName);
        }
        showToast('Proveedor actualizado', data.Nombre, 'success');
        localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
        saveOneProviderToDB(data);
        document.querySelector('[data-view=providers]').click();
    } else {
        // Verificar duplicado por nombre
        const exists = PROVIDERS_DB.some(p => p.Nombre.toLowerCase() === nombre.toLowerCase());
        if (exists) {
            showConfirm(
                'Proveedor duplicado',
                `Ya existe un proveedor con el nombre <strong>${nombre}</strong>. ¿Deseas agregarlo de todas formas?`,
                () => {
                    PROVIDERS_DB.push(data);
                    localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
                    saveOneProviderToDB(data);
                    showToast('Proveedor agregado', data.Nombre, 'success');
                    document.querySelector('[data-view=providers]').click();
                },
                'Agregar de todos modos',
                'info'
            );
            return;
        }
        PROVIDERS_DB.push(data);
        showToast('Proveedor agregado', data.Nombre, 'success');
        localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
        saveOneProviderToDB(data);
        document.querySelector('[data-view=providers]').click();
    }
};

// ─── View Provider Document ───
window.viewProviderDoc = (index, field) => {
    const p = PROVIDERS_DB[index];
    if (!p || !p[field]) {
        showToast('Sin archivo', 'Este proveedor no tiene este documento cargado', 'warning');
        return;
    }
    window.viewProviderDocData(p[field], field === 'RUT' ? 'RUT' : 'Cert. Bancaria');
};

window.viewProviderDocData = (dataUrl, title) => {
    if (!dataUrl || typeof dataUrl !== 'string' || dataUrl.length < 50) {
        showToast('Sin archivo', 'No hay documento para mostrar', 'warning');
        return;
    }
    if (dataUrl.startsWith('data:application/pdf')) {
        // Abrir PDF en nueva pestaña
        const win = window.open('', '_blank');
        win.document.write(`<html><head><title>${title}</title></head><body style="margin:0;"><iframe src="${dataUrl}" style="width:100%;height:100vh;border:none;"></iframe></body></html>`);
    } else {
        // Imagen: abrir en nueva pestaña
        const win = window.open('', '_blank');
        win.document.write(`<html><head><title>${title}</title><style>body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#1e293b;}img{max-width:95vw;max-height:95vh;border-radius:8px;box-shadow:0 4px 24px rgba(0,0,0,.4);}</style></head><body><img src="${dataUrl}" alt="${title}"></body></html>`);
    }
};

window._provFormRemoveDoc = (type) => {
    if (type === 'rut') {
        window._provFormRUT = null;
        document.getElementById('pf-rut-status').textContent = 'Sin archivo';
        const viewBtn = document.getElementById('pf-rut-view');
        if (viewBtn) viewBtn.remove();
        const wrap = document.getElementById('pf-rut').closest('.prov-doc-upload-wrap');
        wrap.querySelectorAll('.prov-doc-remove-btn').forEach(b => b.remove());
    } else {
        window._provFormCert = null;
        document.getElementById('pf-cert-status').textContent = 'Sin archivo';
        const viewBtn = document.getElementById('pf-cert-view');
        if (viewBtn) viewBtn.remove();
        const wrap = document.getElementById('pf-cert').closest('.prov-doc-upload-wrap');
        wrap.querySelectorAll('.prov-doc-remove-btn').forEach(b => b.remove());
    }
};

// ─── Delete Provider ───
window.deleteProvider = (index) => {
    const p = PROVIDERS_DB[index];
    if (!p) return;
    showConfirm(
        'Eliminar Proveedor',
        `¿Eliminar al proveedor <strong>${p.Nombre}</strong>?<br>Esta acción no se puede deshacer.`,
        () => {
            const provName = p.Nombre;
            PROVIDERS_DB.splice(index, 1);
            localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
            deleteProviderFromDB(provName);
            showToast('Proveedor eliminado', provName, 'warning');
            document.querySelector('[data-view=providers]').click();
        },
        'Eliminar',
        'danger'
    );
};

// ─── Sede Envío Auto-fill ───
function initSedeAutofill() {
    const sedeSelect = document.getElementById('sheet-envio-sede');
    if (!sedeSelect) return;

    sedeSelect.addEventListener('change', () => {
        const sede = SEDES_ENVIO[sedeSelect.value];
        if (!sede) return;

        document.getElementById('sheet-envio-ciudad').value = sede.ciudad;
        document.getElementById('sheet-envio-dir').value = sede.direccion;
        document.getElementById('sheet-envio-barrio').value = sede.barrio;
        document.getElementById('sheet-envio-tel').value = sede.telefono;
        document.getElementById('sheet-envio-resp').value = sede.persona;
    });
}

// ─── Provider Autocomplete ───
function initProviderAutocomplete() {
    const providerInput = document.getElementById('sheet-prov-name');
    const dropdown = document.getElementById('providers-dropdown');
    if (!providerInput || !dropdown) return;

    const renderDropdown = (searchText = '') => {
        dropdown.innerHTML = '';
        const filtered = searchText
            ? PROVIDERS_DB.filter(p => p.Nombre.toLowerCase().includes(searchText.toLowerCase()))
            : PROVIDERS_DB;

        if (filtered.length === 0) {
            dropdown.innerHTML = '<div class="dropdown-item empty">No se encontraron proveedores...</div>';
            dropdown.classList.remove('hidden');
            return;
        }

        const toShow = filtered.slice(0, 50);
        toShow.forEach(p => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';

            let highlightedName = p.Nombre;
            if (searchText) {
                const safeSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
                const contactoField = document.getElementById('sheet-prov-contacto');
                contactoField.value = p.Contacto || '';
                contactoField.placeholder = p.Contacto ? 'Nombre del contacto' : 'No registrado — ingresa manualmente';
                dropdown.classList.add('hidden');
                showToast('Proveedor seleccionado', p.Nombre, 'success');
            });
            dropdown.appendChild(item);
        });
        dropdown.classList.remove('hidden');
    };

    providerInput.addEventListener('input', (e) => {
        renderDropdown(e.target.value);
        const selected = PROVIDERS_DB.find(p => p.Nombre.toLowerCase() === e.target.value.toLowerCase());
        if (selected) {
            document.getElementById('sheet-prov-nit').value = selected.NIT;
            document.getElementById('sheet-prov-tel').value = selected.Tel;
            document.getElementById('sheet-prov-email').value = selected.Email;
            const contactoField = document.getElementById('sheet-prov-contacto');
            contactoField.value = selected.Contacto || '';
            contactoField.placeholder = selected.Contacto ? 'Nombre del contacto' : 'No registrado — ingresa manualmente';
        }
    });

    providerInput.addEventListener('focus', (e) => renderDropdown(e.target.value));
    providerInput.addEventListener('click', (e) => renderDropdown(e.target.value));

    const dropdownIcon = document.querySelector('.dropdown-icon');
    if (dropdownIcon) {
        dropdownIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdown.classList.contains('hidden')) {
                providerInput.focus();
                renderDropdown(providerInput.value);
            } else {
                dropdown.classList.add('hidden');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-autocomplete')) {
            dropdown.classList.add('hidden');
        }
    });
}

// ─── Table Row Management ───
window.addSheetRow = () => {
    const tbody = document.getElementById('sheet-table-body');
    if (!tbody) return;
    const rowCount = tbody.rows.length + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" class="sheet-input-cell" placeholder="Descripción del ítem"></td>
        <td><input type="number" class="sheet-input-cell" value="1" min="1" onchange="window.updateSheetCalculations()" oninput="window.updateSheetCalculations()"></td>
        <td><input type="text" class="sheet-input-cell price-input" placeholder="0" oninput="window.formatPriceInput(this); window.updateSheetCalculations()"></td>
        <td class="cell-total">${formatCOP(0)}</td>
        <td class="row-actions"><button class="btn-danger" onclick="window.removeSheetRow(this)" title="Eliminar fila">✕</button></td>
    `;
    tbody.appendChild(tr);
    tr.querySelector('input').focus();
};

window.removeSheetRow = (btn) => {
    const tbody = document.getElementById('sheet-table-body');
    if (!tbody || tbody.rows.length <= 1) {
        showToast('Atención', 'Debe haber al menos un ítem', 'warning');
        return;
    }
    btn.closest('tr').remove();
    // Renumerar filas
    [...tbody.rows].forEach((row, i) => {
        row.cells[0].textContent = i + 1;
    });
    window.updateSheetCalculations();
};

window.updateSheetCalculations = () => {
    const rows = document.getElementById('sheet-table-body')?.rows;
    if (!rows) return;
    let subtotal = 0;

    for (let i = 0; i < rows.length; i++) {
        const qty = parseFloat(rows[i].cells[2].querySelector('input')?.value) || 0;
        const rawPrice = rows[i].cells[3].querySelector('input')?.value || '0';
        const price = parseCOP(rawPrice);
        const total = qty * price;
        subtotal += total;
        rows[i].cells[4].textContent = formatCOP(total);
    }

    // Descuento (soporta % o valor absoluto)
    const descuentoRaw = document.getElementById('sheet-descuento')?.value || '0';
    const descuento = calcDescuento(descuentoRaw, subtotal);

    // Subtotal - Descuento
    const subtotalNeto = subtotal - descuento;

    // IVA: auto-calcular 19% SOLO si el usuario NUNCA ha tocado el campo
    const elIva = document.getElementById('sheet-iva');
    let ivaAmount = 0;
    if (elIva) {
        const ivaFocused = (document.activeElement === elIva);
        const wasManuallyEdited = elIva.dataset.auto === '0';

        if (ivaFocused) {
            // Campo enfocado: marcar como editado manualmente
            const ivaRaw = elIva.value;
            ivaAmount = (ivaRaw === '-' || ivaRaw.trim() === '') ? 0 : parseCOP(ivaRaw);
            elIva.dataset.auto = '0';
        } else if (wasManuallyEdited) {
            // Usuario ya lo editó antes → respetar su valor (incluso vacío = 0)
            const ivaRaw = elIva.value;
            ivaAmount = (ivaRaw === '-' || ivaRaw.trim() === '') ? 0 : parseCOP(ivaRaw);
        } else {
            // Nunca tocado → auto-llenar 19%
            const ivaCalc = subtotalNeto * 0.19;
            const fmt19 = (v) => formatCOP(v).replace(/^\$\s*/, '');
            elIva.value = subtotalNeto > 0 ? fmt19(ivaCalc) : '';
            elIva.dataset.auto = '1';
            ivaAmount = subtotalNeto > 0 ? ivaCalc : 0;
        }
    }

    // Flete
    const fleteRaw = document.getElementById('sheet-flete')?.value || '0';
    const flete = (fleteRaw === '-' || fleteRaw.trim() === '') ? 0 : parseCOP(fleteRaw);

    // Otro
    const otroRaw = document.getElementById('sheet-otro')?.value || '0';
    const otro = (otroRaw === '-' || otroRaw.trim() === '') ? 0 : parseCOP(otroRaw);

    // Total general
    const totalGeneral = subtotalNeto + ivaAmount + flete + otro;

    // Formatear sin el símbolo $ (ya está en el HTML)
    const fmt = (v) => formatCOP(v).replace(/^\$\s*/, '');

    const elSub = document.getElementById('sheet-sub');
    const elSubDesc = document.getElementById('sheet-sub-desc');
    const elTotal = document.getElementById('sheet-total');

    if (elSub) elSub.textContent = fmt(subtotal);
    if (elSubDesc) elSubDesc.textContent = fmt(subtotalNeto);
    if (elTotal) elTotal.textContent = fmt(totalGeneral);

    // Actualizar el símbolo dinámico del descuento
    const descCurrSpan = document.getElementById('desc-currency');
    if (descCurrSpan) {
        if (descuentoRaw.includes('%')) {
            descCurrSpan.textContent = '%';
        } else if (descuento > 0) {
            descCurrSpan.textContent = '$';
        } else {
            descCurrSpan.textContent = '';
        }
    }
};

// ─── Recalcular IVA 19% (resetea el flag manual) ───
window.recalcIva = () => {
    const elIva = document.getElementById('sheet-iva');
    if (!elIva) return;
    elIva.value = '';
    elIva.dataset.auto = '1';   // volver a modo automático
    window.updateSheetCalculations();
};

// ─── Parsear valor COP (quita puntos de miles, acepta coma decimal) ───
function parseCOP(str) {
    if (!str) return 0;
    // Quitar todo excepto dígitos y coma
    let clean = str.replace(/\./g, '').replace(/,/g, '.');
    return parseFloat(clean) || 0;
}

// ─── Auto-formatear precio con puntos de miles mientras se escribe ───
// ─── Descuento: soporta "10%" (porcentaje) o "130.000" (valor absoluto) ───
window.handleDescuentoInput = (input) => {
    const raw = input.value;
    const currencySpan = document.getElementById('desc-currency');
    // Si contiene %, dejar que escriba libre (solo dígitos y %)
    if (raw.includes('%')) {
        // Limpiar: solo dígitos, coma, punto y %
        let clean = raw.replace(/[^\d.,% ]/g, '');
        // Solo un % al final
        clean = clean.replace(/%/g, '');
        const nums = clean.replace(/[^\d.,]/g, '');
        input.value = nums ? nums + '%' : '';
        if (currencySpan) currencySpan.textContent = '%';
    } else if (raw === '-' || raw.trim() === '') {
        if (currencySpan) currencySpan.textContent = '';
    } else {
        // Valor absoluto: formatear como precio
        window.formatPriceInput(input);
        if (currencySpan) currencySpan.textContent = '$';
    }
};

// Función para calcular el descuento (% o absoluto) dado un subtotal
function calcDescuento(descuentoRaw, subtotal) {
    if (!descuentoRaw || descuentoRaw === '-' || descuentoRaw.trim() === '') return 0;
    if (descuentoRaw.includes('%')) {
        const pct = parseFloat(descuentoRaw.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
        return subtotal * (pct / 100);
    }
    return parseCOP(descuentoRaw);
}

window.formatPriceInput = (input) => {
    const cursorPos = input.selectionStart;
    const oldLen = input.value.length;
    // Quitar todo excepto dígitos
    let digits = input.value.replace(/\D/g, '');
    if (!digits) { input.value = ''; return; }
    // Formatear con puntos de miles
    let formatted = parseInt(digits, 10).toLocaleString('es-CO');
    input.value = formatted;
    // Ajustar cursor
    const newLen = formatted.length;
    const diff = newLen - oldLen;
    input.setSelectionRange(cursorPos + diff, cursorPos + diff);
};

// ─── Proceed to Quotes ───
window.proceedToQuotes = () => {
    // Validar proveedor
    const provName = document.getElementById('sheet-prov-name')?.value.trim();
    if (!provName) {
        showToast('Campo requerido', 'Ingresa el nombre del proveedor', 'error');
        document.getElementById('sheet-prov-name')?.focus();
        return;
    }

    // Validar firma del solicitante
    const sigCanvas = document.getElementById('sig-canvas-1');
    if (sigCanvas) {
        const ctx = sigCanvas.getContext('2d');
        const pixelData = ctx.getImageData(0, 0, sigCanvas.width, sigCanvas.height).data;
        let hasContent = false;
        for (let i = 3; i < pixelData.length; i += 4) {
            if (pixelData[i] > 0) { hasContent = true; break; }
        }
        if (!hasContent) {
            showToast('Firma requerida', 'Debe firmar como solicitante para continuar', 'error');
            sigCanvas.scrollIntoView({ behavior: 'smooth', block: 'center' });
            sigCanvas.style.borderColor = '#ef4444';
            setTimeout(() => { sigCanvas.style.borderColor = ''; }, 3000);
            return;
        }
    }

    // Guardar datos del formulario en memoria temporal
    window._currentFormData = {
        provider: provName,
        nit: document.getElementById('sheet-prov-nit')?.value || '',
        tel: document.getElementById('sheet-prov-tel')?.value || '',
        email: document.getElementById('sheet-prov-email')?.value || '',
        contacto: document.getElementById('sheet-prov-contacto')?.value || '',
        fecha: document.getElementById('sheet-fecha')?.value || '',
        ordenNum: document.getElementById('sheet-orden-num')?.value || '',
        sede: document.getElementById('sheet-sede')?.value || 'CTH',
        pago: document.getElementById('sheet-pago')?.value || '',
        pagoPerc: document.getElementById('sheet-pago-perc')?.value || '',
        envioSede: document.getElementById('sheet-envio-sede')?.value || '',
        envioCiudad: document.getElementById('sheet-envio-ciudad')?.value || '',
        dir: document.getElementById('sheet-envio-dir')?.value || '',
        barrio: document.getElementById('sheet-envio-barrio')?.value || '',
        envioTel: document.getElementById('sheet-envio-tel')?.value || '',
        resp: document.getElementById('sheet-envio-resp')?.value || '',
        obs: document.getElementById('sheet-obs')?.value || '',
        subtotal: document.getElementById('sheet-sub')?.textContent || '',
        descuento: document.getElementById('sheet-descuento')?.value || '',
        subtotalDesc: document.getElementById('sheet-sub-desc')?.textContent || '',
        iva: document.getElementById('sheet-iva')?.value || '',
        flete: document.getElementById('sheet-flete')?.value || '',
        otro: document.getElementById('sheet-otro')?.value || '',
        total: document.getElementById('sheet-total')?.textContent || '',
    };

    // Obtener total numérico (misma lógica que updateSheetCalculations)
    const rows = document.getElementById('sheet-table-body')?.rows;
    let subtotal = 0;
    if (rows) {
        for (let i = 0; i < rows.length; i++) {
            const qty = parseFloat(rows[i].cells[2].querySelector('input')?.value) || 0;
            const rawPrice = rows[i].cells[3].querySelector('input')?.value || '0';
            const price = parseCOP(rawPrice);
            subtotal += qty * price;
        }
    }
    const descuentoRaw = document.getElementById('sheet-descuento')?.value || '0';
    const descuento = calcDescuento(descuentoRaw, subtotal);
    const subtotalNeto = subtotal - descuento;

    // IVA: leer del input (puede ser auto 19% o editado/borrado por el usuario)
    const ivaRaw = document.getElementById('sheet-iva')?.value || '0';
    const ivaAmount = (ivaRaw === '-' || ivaRaw.trim() === '') ? 0 : parseCOP(ivaRaw);

    const fleteRaw = document.getElementById('sheet-flete')?.value || '0';
    const flete = (fleteRaw === '-' || fleteRaw.trim() === '') ? 0 : parseCOP(fleteRaw);
    const otroRaw = document.getElementById('sheet-otro')?.value || '0';
    const otro = (otroRaw === '-' || otroRaw.trim() === '') ? 0 : parseCOP(otroRaw);

    window._currentFormData.totalNumeric = subtotalNeto + ivaAmount + flete + otro;

    // Capturar ítems de la tabla
    const itemRows = document.getElementById('sheet-table-body')?.rows;
    const items = [];
    if (itemRows) {
        for (let i = 0; i < itemRows.length; i++) {
            const desc = itemRows[i].cells[1].querySelector('input')?.value || '';
            const qty = parseFloat(itemRows[i].cells[2].querySelector('input')?.value) || 0;
            const rawP = itemRows[i].cells[3].querySelector('input')?.value || '0';
            const price = parseCOP(rawP);
            items.push({ desc, qty, price, total: qty * price });
        }
    }
    window._currentFormData.items = items;

    // Capturar firma del solicitante como imagen base64
    const sig1 = document.getElementById('sig-canvas-1');
    window._currentFormData.signatureSolicitante = sig1 ? sig1.toDataURL('image/png') : '';
    window._currentFormData.signatureAprobacion = '';

    const container = document.getElementById('view-dashboard');
    container.innerHTML = `
        <div class="card-form animate-in">
            <div class="order-header-official">
                <img src="assets/encabezado orden de compra.png" alt="Encabezado Orden de Compra – Colegio Theodoro Herzl" class="order-header-img">
            </div>
            <div class="quote-single-upload">
                <div class="quote-card" id="quote-1">
                    <div class="quote-header">📎 Cotización de Soporte</div>
                    <div class="drop-zone" id="drop-1" onclick="this.querySelector('input').click()">
                        <span class="drop-icon">📄</span>
                        <p>Arrastra o haz clic para adjuntar la cotización</p>
                        <input type="file" hidden id="file-1" accept=".pdf,image/*" onchange="window.handleQuickUpload(1, this.files[0])">
                    </div>
                </div>
            </div>

            <p class="quotes-caption">Adjunta la cotización en la que se basó esta orden de compra (opcional).</p>

            <div class="form-actions-footer">
                <button class="btn-secondary" onclick="document.querySelector('[data-view=\\'new-request\\']').click()">Volver al Formulario</button>
                <button class="btn-primary" id="btn-next-step" onclick="window.submitRequest()">Enviar Solicitud Completa</button>
            </div>
        </div>
    `;
};

// Almacenamiento temporal de cotizaciones
window._uploadedQuotes = window._uploadedQuotes || [];

window.handleQuickUpload = (n, file) => {
    if (!file) return;
    const dz = document.getElementById('drop-' + n);
    if (!dz) return;

    const isImage = file.type.startsWith('image/');
    const icon = isImage ? '🖼️' : '📄';

    // Preservar el input file para que no se pierda al re-subir
    const existingInput = dz.querySelector('input[type="file"]');
    dz.innerHTML = `<span class="drop-icon">${icon}</span><p>${file.name}</p>`;
    if (existingInput) dz.appendChild(existingInput);
    dz.style.background = '#f0fdf4';
    dz.classList.add('uploaded');

    // Convertir archivo a base64 y guardar
    const reader = new FileReader();
    reader.onload = (e) => {
        window._uploadedQuotes[n - 1] = {
            name: file.name,
            type: file.type,
            data: e.target.result
        };
        console.log('✅ Cotización cargada:', file.name, '(' + Math.round(e.target.result.length / 1024) + 'KB)');
    };
    reader.onerror = () => {
        console.error('Error leyendo archivo:', file.name);
        showToast('Error', 'No se pudo leer el archivo', 'error');
    };
    reader.readAsDataURL(file);

    showToast('Archivo cargado', file.name, 'success');
};

// ─── Submit Request ───
window.submitRequest = () => {
    try {
    const data = window._currentFormData || {};
    const ordenNum = data.ordenNum ? 'OC-' + data.ordenNum : generateId();
    const request = {
        id: ordenNum,
        date: data.fecha ? (() => { const now = new Date(); const [y,m,d] = data.fecha.split('-'); return new Date(y, m-1, d, now.getHours(), now.getMinutes(), now.getSeconds()).toISOString(); })() : new Date().toISOString(),
        provider: data.provider || 'Sin proveedor',
        nit: data.nit || '',
        tel: data.tel || '',
        email: data.email || '',
        contacto: data.contacto || '',
        total: data.totalNumeric || 0,
        status: 'pending',
        sede: data.sede || 'CTH',
        pago: data.pago || '',
        pagoPerc: data.pagoPerc || '',
        envioSede: data.envioSede || '',
        envioCiudad: data.envioCiudad || '',
        dir: data.dir || '',
        barrio: data.barrio || '',
        envioTel: data.envioTel || '',
        resp: data.resp || '',
        obs: data.obs || '',
        items: data.items || [],
        subtotal: data.subtotal || '',
        descuento: data.descuento || '',
        subtotalDesc: data.subtotalDesc || '',
        iva: data.iva || '',
        flete: data.flete || '',
        otro: data.otro || '',
        totalFmt: data.total || '',
        signatureSolicitante: data.signatureSolicitante || '',
        signatureAprobacion: data.signatureAprobacion || '',
        quotations: (window._uploadedQuotes || []).filter(Boolean),
        payments: buildPaymentPlan(data.pago, data.pagoPerc, data.totalNumeric || 0)
    };

    window._uploadedQuotes = [];
    APP_STATE.requests.push(request);
    saveState();
    saveOrderToDB(request);

    showToast('¡Solicitud enviada!', 'La orden ' + request.id + ' fue enviada a Gerencia', 'success');

    // Volver al dashboard
    setTimeout(() => {
        document.querySelector('[data-view="dashboard"]').click();
    }, 800);
    } catch (err) {
        console.error('❌ Error al enviar solicitud:', err);
        showToast('Error', 'No se pudo enviar la solicitud: ' + err.message, 'error');
    }
};

// ─── Signature Pads ───
function initSignaturePads(ids) {
    (ids || [1]).forEach(id => {
        const canvas = document.getElementById('sig-canvas-' + id);
        const placeholder = document.getElementById('sig-placeholder-' + id);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let drawing = false;
        let hasSigned = false;

        // Ajustar resolución del canvas
        function resizeCanvas() {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        }
        resizeCanvas();

        function getPos(e) {
            const rect = canvas.getBoundingClientRect();
            if (e.touches && e.touches.length > 0) {
                return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
            }
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }

        function startDraw(e) {
            e.preventDefault();
            drawing = true;
            const pos = getPos(e);
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            if (!hasSigned && placeholder) {
                placeholder.style.opacity = '0';
                hasSigned = true;
            }
        }

        function draw(e) {
            if (!drawing) return;
            e.preventDefault();
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }

        function stopDraw(e) {
            if (!drawing) return;
            e.preventDefault();
            drawing = false;
            ctx.closePath();
        }

        // Mouse events
        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDraw);
        canvas.addEventListener('mouseleave', stopDraw);

        // Touch events
        canvas.addEventListener('touchstart', startDraw, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDraw);
        canvas.addEventListener('touchcancel', stopDraw);

        // Guardar referencia
        canvas._sigCtx = ctx;
        canvas._sigResize = resizeCanvas;
        canvas._sigPlaceholder = placeholder;
    });
}

window.clearSignature = (id) => {
    const canvas = document.getElementById('sig-canvas-' + id);
    const placeholder = document.getElementById('sig-placeholder-' + id);
    if (!canvas) return;
    const ctx = canvas._sigCtx || canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (placeholder) placeholder.style.opacity = '1';
};

// ═══════════════════════════════════════════════════════════════════
// ─── INVENTARIO DE ACTIVOS — Base de Datos y Vista ───
// ═══════════════════════════════════════════════════════════════════

let INVENTORY_DB = JSON.parse(localStorage.getItem('cth_inventory') || 'null') || {
    "CTH": {
        nombre: "Colegio Theodoro Herzl",
        icono: "🏫",
        color: "#0c84ff",
        inventario: [
            {
                area: "BIBLIOTECA",
                codigoArea: "100",
                responsable: "LUZ MARITZA TORO",
                items: [
                    { id: "CTH-101", nombre: "Estanteria de madera de 6 peldaños", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-102", nombre: "Estanteria metalica de 4 peldaños", cantidad: 4, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-103", nombre: "Mesa redonda tipo escritorio", cantidad: 2, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-104", nombre: "Mesa tipo nube", cantidad: 3, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-105", nombre: "Puff curvo 45°", cantidad: 8, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-106", nombre: "sofa rectangular sin espaldar", cantidad: 3, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-107", nombre: "sofa rectangular con espaldar", cantidad: 2, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-108", nombre: "Mesa auxiliar tipo BARDI", cantidad: 4, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-109", nombre: "Silla Suma Talla 6", cantidad: 12, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-110", nombre: "Silla Suma talla 4", cantidad: 12, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-111", nombre: "puf pera", cantidad: 5, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-112", nombre: "Cojines de piso rectangulares", cantidad: 3, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-113", nombre: "Mesa rectangular tipo barra", cantidad: 1, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-114", nombre: "Butaco sin espaldar en madera", cantidad: 6, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-115", nombre: "Gabinete de almacenamiento con puertas", cantidad: 1, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-116", nombre: "Árbol tipo estanteria", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-117", nombre: "Maquinas de escribir", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-118", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-119", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-120", nombre: "Estateria de madera 6 puestos blanca", cantidad: 2, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-121", nombre: "Mesa trapezoidal talla 6", cantidad: 6, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-122", nombre: "Papeleras 46x46", cantidad: 2, estado: "Bueno", fechaCompra: "7/15/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULAS BACHILLERATO",
                codigoArea: "200",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-201", nombre: "Silla suma # 6", cantidad: 262, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-202", nombre: "Escritorio Kassani # 6", cantidad: 262, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-203", nombre: "Escritorios profesores", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-204", nombre: "Sillas auxiliares para profesores", cantidad: 18, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AUDITORIO BACHILLERATO",
                codigoArea: "300",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-301", nombre: "Sillas universitaria con base metalica, pasta y madera", cantidad: 75, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-302", nombre: "Mesa rectangular de 1,20 x 2,10", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-303", nombre: "Sillas rimax blanca", cantidad: 100, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-304", nombre: "Tarimas de madera de 1,78x 3,00", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA SISTEMAS",
                codigoArea: "400",
                responsable: "COORDINADOR SISTEMAS",
                items: [
                    { id: "CTH-401", nombre: "Mesas rectangulares", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-402", nombre: "Sillas de base metalica y pasta", cantidad: 27, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-403", nombre: "Pantalla interactiva", cantidad: 1, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-404", nombre: "Escritorios profesores", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-405", nombre: "Archivador de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-406", nombre: "Cajones de madera 2 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-407", nombre: "Silla ergonomica administrativa", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-408", nombre: "Tablero movil", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-409", nombre: "Impresora 3 D", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "OFICINA ANTI BULLYING",
                codigoArea: "500",
                responsable: "NOVER RUIZ",
                items: [
                    { id: "CTH-501", nombre: "Estanteria de madera de 2 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-502", nombre: "Mesa de madera de 1x2 metros", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-503", nombre: "Sillas auxiliares de profesores", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-504", nombre: "Escritorios profesores", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-505", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-506", nombre: "Estanteria de madera de 6 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-507", nombre: "sofa rectangular con espaldar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-508", nombre: "Closet madera 6 divisiones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALA DE PROFESORES",
                codigoArea: "600",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-601", nombre: "Escritorios profesores", cantidad: 24, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-602", nombre: "Sillas auxiliares de profesores", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-603", nombre: "Estanteria madera 3 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-604", nombre: "Archivadores de pared", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-605", nombre: "Bases de repisa pared", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-606", nombre: "Archivador 3 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-607", nombre: "Dispensador de agua con refrigeracion", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COORDINACION BACHILLERATO",
                codigoArea: "700",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-701", nombre: "Archivador de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-702", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-703", nombre: "Sillas auxiliares de profesores", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-704", nombre: "Mueble con espaldar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-705", nombre: "Estanterias en madera de 6 peldaños", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-706", nombre: "Cajon de madera 2 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-707", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MATEMATICAS",
                codigoArea: "800",
                responsable: "LILIANA CASTRILLON",
                items: [
                    { id: "CTH-801", nombre: "Estanterias en madera de 6 peldaños", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-802", nombre: "Mesa trapezoidal en madera", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-803", nombre: "Mesa rectangular en madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-804", nombre: "Escritorio profesores", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-805", nombre: "Silla auxiliar profesores", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-806", nombre: "Estanteria en madera de 3 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-807", nombre: "Reloj Kadio", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-808", nombre: "Sillas de base metalica y pasta", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "OFICINA T.I",
                codigoArea: "900",
                responsable: "JUAN CAMILO RAMIREZ",
                items: [
                    { id: "CTH-901", nombre: "Archivador en madera de 6 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-902", nombre: "Silla ergonomica administrativa", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-903", nombre: "Sillas auxiliares administrativas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-904", nombre: "Escritorio administrativo con cajones", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-905", nombre: "Escritorio administrativo sin cajones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PSICOLOGIA BACHILLERATO",
                codigoArea: "1100",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-1100", nombre: "Archivadores de pared", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1101", nombre: "Estanteria espiral de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1102", nombre: "sofa rectangular con espaldar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1103", nombre: "Puf rectangular", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1104", nombre: "Escritorio administrativo con cajones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1105", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1106", nombre: "Sillas auxiliares administrativas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1107", nombre: "Locker de 2 modulos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CORREDORES BACHILLERATO",
                codigoArea: "1200",
                responsable: "COORDINADOR BACHILLERATO",
                items: [
                    { id: "CTH-1201", nombre: "locker metalicos de 12 modulos", cantidad: 22, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1202", nombre: "Silla de madera con espaldar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1203", nombre: "Mesas rectangulares de 1,20x2,10", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1204", nombre: "Sillas auxiliares de profesores", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULAS PRIMARIA",
                codigoArea: "1300",
                responsable: "COORDINADORA PRIMARIA",
                items: [
                    { id: "CTH-1301", nombre: "Silla suma # 4", cantidad: 251, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1302", nombre: "Escritorio Kassani # 4", cantidad: 251, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1303", nombre: "Escritorios profesores", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1304", nombre: "Estanteria metalica de 6 peldaños", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1305", nombre: "Estanteria plastica de 3 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1306", nombre: "Sillas auxiliares para profesores", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALA DE PROFESORES PRIMARIA",
                codigoArea: "1400",
                responsable: "COORDINADORA PRIMARIA",
                items: [
                    { id: "CTH-1401", nombre: "Escritorios profesores", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1402", nombre: "Sillas auxiliares de profesores", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1403", nombre: "Estanteria madera 3 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1404", nombre: "Archivadores de pared", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1405", nombre: "Bases de repisa pared", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1406", nombre: "Archivador 3 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1407", nombre: "Mesa de 60x60", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1408", nombre: "Dispensador de agua con refrigeracion", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COORDINACION PRIMARIA",
                codigoArea: "1500",
                responsable: "COORDINADORA PRIMARIA",
                items: [
                    { id: "CTH-1501", nombre: "Archivador de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1502", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1503", nombre: "Sillas auxiliares de profesores", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1504", nombre: "Mesa redonda tipo escritorio", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1505", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PSICOLOGIA PRIMARIA",
                codigoArea: "1600",
                responsable: "COORDINADORA PRIMARIA",
                items: [
                    { id: "CTH-1601", nombre: "Archivadores de pared", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1602", nombre: "sofa cuadrado con espaldar", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1603", nombre: "Repisa flotante", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1604", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1605", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CORREDORES PRIMARIA",
                codigoArea: "1700",
                responsable: "COORDINACION PRIMARIA",
                items: [
                    { id: "CTH-1701", nombre: "locker metalicos de 12 modulos", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "OFICINA ÁREA JUDAICA",
                codigoArea: "1800",
                responsable: "MORA STIBERMAN",
                items: [
                    { id: "CTH-1801", nombre: "Mueble de madera pared", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1802", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1803", nombre: "Sillas auxiliares de profesores", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1804", nombre: "Mesa redonda tipo escritorio", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1805", nombre: "Mueble", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1806", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "RESTAURANTE",
                codigoArea: "1900",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-1901", nombre: "Microondas", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1902", nombre: "Mesas auxiliares con base metalica", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-1903", nombre: "Puff media luna", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MUSICA PREESCOLAR",
                codigoArea: "2000",
                responsable: "HUFFINGTON WEBSTER GEORGIE BEL",
                items: [
                    { id: "CTH-2001", nombre: "PIANO YAMAHA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2002", nombre: "Cabina de sonido", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2003", nombre: "claves", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2004", nombre: "Panderos", cantidad: 17, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2005", nombre: "maracas", cantidad: 26, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2006", nombre: "maderas didacticas de sonido", cantidad: 16, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2007", nombre: "chinchines", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2008", nombre: "sonajeros", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2009", nombre: "organetas", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2010", nombre: "MUEBLE REPISA amarillo", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2011", nombre: "platillos", cantidad: 16, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2012", nombre: "TABLERO PENTAGRAMADO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2013", nombre: "ESCRITORIO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2014", nombre: "Metalofono Cromático Bajo 2 piezas", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2015", nombre: "Metalofono Cromático Contra Alto 2 piezas", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2016", nombre: "Metalofono Cromático Soprano 2 piezas", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2017", nombre: "Xilófono Cromático Bajo 2 piezas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2018", nombre: "Xilófono Cromático Contra Alto 2 piezas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2019", nombre: "Xilófono Cromático Soprano 2 piezas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2020", nombre: "Carrillon Contra Alto", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2021", nombre: "Carrillon Soprano", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2022", nombre: "Caja de Instrumentos Orff", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2023", nombre: "XILOFONO MALETA NEGRA", cantidad: 22, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2024", nombre: "JUEGO DE CAMPANAS DORADAS (2 OCTAVAS)", cantidad: 26, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2025", nombre: "Juego de Campanas de Colores (1 octava)", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON MUSICA PISO 1",
                codigoArea: "2100",
                responsable: "JAVIER DIAZ",
                items: [
                    { id: "CTH-2101", nombre: "Piano yamaha DGX 660", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2102", nombre: "Organeta Yamaha PSR 333", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2104", nombre: "Bajo Eléctrico fender squier", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2105", nombre: "Guitarra Eléctrica DMG", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2106", nombre: "Guitarras Acusticas la gran española", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2107", nombre: "Timbal latino Meinl", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2108", nombre: "Bongós Meinl", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2109", nombre: "Güira metálica LP", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2110", nombre: "Güiro tipo calabazo LP", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2111", nombre: "Campana de mano Meinl", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2112", nombre: "Cencerro Pequeño Meinl", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2113", nombre: "Guazá metalico", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2114", nombre: "Güira Guazá", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2115", nombre: "Cajón Flamenco/Peruano Afrika", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2116", nombre: "Amplificador de Bajo SWR", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2117", nombre: "Amplificadores de Guitarra Laney", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2118", nombre: "MIXER Behringer XENYX Q802USB", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2119", nombre: "MIXER Behringer XENYX Q802USB", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2120", nombre: "Batería acústica Jimbao", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2121", nombre: "Batería Electrónica Medeli", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2122", nombre: "Cabinas de Sonido B3", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2123", nombre: "Ukelele MAKALA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2124", nombre: "Caja Vallenata MC musical cedar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2125", nombre: "Metalofono Cromático Bajo 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2126", nombre: "Metalofono Cromático Contra Alto 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2127", nombre: "Metalofono Cromático Soprano 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2128", nombre: "Xilófono Cromático Bajo 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2129", nombre: "Xilófono Cromático Contra Alto 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2130", nombre: "Xilófono Cromático Soprano 2 piezas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2131", nombre: "Carrillon Contra Alto", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2132", nombre: "Carrillon Soprano", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2133", nombre: "TamborA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2134", nombre: "Caja de Instrumentos Orff", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2135", nombre: "Percusión Folklorica", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2136", nombre: "Micrófonos", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2137", nombre: "Cables de Micrófono", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2138", nombre: "Cables de linea", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2139", nombre: "Kit micrófonos de solapa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2140", nombre: "Escritorio", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2141", nombre: "Tablero Móvil Pentagramado", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2142", nombre: "Mueble Closet angosto", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2143", nombre: "Mueble Closet Ancho", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2144", nombre: "Stand para guitarras de pared", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2145", nombre: "Silla piano", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2146", nombre: "Medusa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2147", nombre: "Cables de microfono", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2148", nombre: "Cables plug 1/4", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2149", nombre: "Cajas directas activas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2150", nombre: "CAjas directas pasivas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2151", nombre: "Cables 2x1 10 metros", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2152", nombre: "Cables canon-plug3/4", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2153", nombre: "Cable Canon hembra-plug1/4 stereo", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2154", nombre: "Cables de poder", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2155", nombre: "Bases de microfono", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2156", nombre: "Silla bateria", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2157", nombre: "Cabinas bluetooth pro DJ", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2158", nombre: "Bases de organeta", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2159", nombre: "Bases de bafles", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2160", nombre: "Base de Guitarra", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2161", nombre: "Amplificador de audifonos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2162", nombre: "Diadema AKG A72", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2163", nombre: "in ear", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2164", nombre: "cable extension audifono", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2165", nombre: "convertidor 6.3 a 3.5", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON MÚSICA HATIKVAH VERDE",
                codigoArea: "2200",
                responsable: "ELIANA",
                items: [
                    { id: "CTH-2201", nombre: "VIOLÍN 1/2 -3 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2202", nombre: "VIOLÍN 1/2 -4 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2203", nombre: "VIOLÍN 1/2 -5 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2204", nombre: "VIOLÍN 1/2 -6 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2205", nombre: "VIOLÍN 1/2 -7 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2206", nombre: "VIOLÍN 1/2 -8 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2207", nombre: "VIOLÍN 1/2 -9 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2208", nombre: "VIOLÍN 1/2 -10 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2209", nombre: "VIOLÍN 1/2 -11 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2210", nombre: "VIOLÍN 1/2-12 GREKO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2211", nombre: "VIOLIN 3/4 -6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2212", nombre: "VIOLIN 3/4 -8", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2213", nombre: "VIOLIN 3/4 -12", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2214", nombre: "VIOLA 4/4 1", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2215", nombre: "VIOLA 4/4 2", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2216", nombre: "VIOLA 4 3/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2217", nombre: "VIOLA 5 3/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2218", nombre: "CELLO 1 1/2", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2219", nombre: "CELLO 2 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2220", nombre: "CELLO 3 3/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2221", nombre: "CELLO 4 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2222", nombre: "CELLO 5 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2223", nombre: "CELLO 6 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2224", nombre: "CELLO 7 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2225", nombre: "CELLO 8 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2226", nombre: "CELLO 9 4/4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2227", nombre: "BAJOS 1", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2228", nombre: "BAJOS 2", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2229", nombre: "BAJOS 3", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2230", nombre: "BAJOS 4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2231", nombre: "BAJO ELECTRICO 4", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2232", nombre: "BAJO ELECTRICO 5", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2233", nombre: "Arco 3/4 LB 10", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2234", nombre: "Arco 1/2 LB 10", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2235", nombre: "Arco 1/2", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2236", nombre: "Organeta YAMAHA PSR 313", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2237", nombre: "Estante para violines", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2238", nombre: "Guitarra LA GRAN ESPAÑOLA", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2239", nombre: "Encordado violín 3/4prelude d addario", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2240", nombre: "Encordado violín 1/2 prelude d adriario", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2241", nombre: "Encordado alice a 703", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2242", nombre: "Escritorio computador practimac", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2243", nombre: "Base para organeta", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2244", nombre: "Base para organeta", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2245", nombre: "ATRILES hamilton", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2246", nombre: "Encordado Viola anton breton", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2247", nombre: "Encordado viola prelude d addrario", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2248", nombre: "Cuerdas A viola Prelude d Addriario", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2249", nombre: "cuerdas G Viola Prelude D addario", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2250", nombre: "Cuerdas D viola Anton Breton", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2251", nombre: "cuerdas C viola Prelude D Addario", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2252", nombre: "Encordados Contrabajo AEGEAN", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2253", nombre: "Encordados cello Anton breton", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2254", nombre: "Encordado cello Alice A 303", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2255", nombre: "Cuerdas A CELLO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2256", nombre: "Cuerdas G CELLO", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2257", nombre: "Cuerdas C CELLO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2258", nombre: "Encordados violín 1/2 Prelude D Addario", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2259", nombre: "Encordados violín 1/2 Alice", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2260", nombre: "Encordados violín 3/4 Prelude D Addario", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2261", nombre: "Encordados violín 3/4 Alice", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2262", nombre: "Encordados violín 4/4 Prelude D Addario", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2263", nombre: "Encordados violín 4/4 Alice", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2264", nombre: "cuerdas E violín", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2265", nombre: "cuerdas A violín", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2266", nombre: "Cuerdas D violín", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2267", nombre: "Cuerdas G violín", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2268", nombre: "ESCRITORIO Cajones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2269", nombre: "ESCRITORIO BLANCO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2270", nombre: "SILLA PLASTICA RODACHINES", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2271", nombre: "SILLAS (AZULES)", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2272", nombre: "SILLA ALTA PARA DIRECTOR (AZUL)", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2273", nombre: "TELEVISOR", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2274", nombre: "CAJONERA PARA LAS COLOFONIAS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2275", nombre: "ESTANTES DE MADERA CARPETAS", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON MÚSICA HATIKVAH ROJO",
                codigoArea: "2300",
                responsable: "SAID HURTADO",
                items: [
                    { id: "CTH-2301", nombre: "TROMPETA BRAHNER", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2302", nombre: "TROMPETA JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2303", nombre: "TROMPETA ARISTON", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2304", nombre: "CORNO FRANCES JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2305", nombre: "CORNO FRANCES ARISTON", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2306", nombre: "EUFONIO JIMBAO 3 pistones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2307", nombre: "EUFONIO JIMBAO 4 pistones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2308", nombre: "TROMBON DE VARA WINDCR", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2309", nombre: "TUBA JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2310", nombre: "TUBA JIMBAO", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2311", nombre: "BOMBO SINFONICO MAJEST", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2312", nombre: "REDOBLANTE JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2313", nombre: "PLATILOS SINFONICOS (PAR) PLANET Z", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2314", nombre: "BATERÍA COMPLETA (Azul) TAMA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2315", nombre: "CONGAS LP ASPIRE", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2316", nombre: "BAJO ELECTRICO SQUIER fender", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2317", nombre: "Guitarra Eléctrica PEAVEY", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2318", nombre: "Guitarra Eléctrica VORSON", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2319", nombre: "Güiro tipo calabazo lp", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2320", nombre: "Campana de mano MEINL", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2321", nombre: "Cajón Flamenco/Peruano AFRIKA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2322", nombre: "Guazá metalico", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2323", nombre: "Güira Guazá", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2324", nombre: "AMPLIFICADOR DE BAJO LANEY", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2325", nombre: "AMPLIFICADOR DE GUITARRA LANEY", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2326", nombre: "BASE PARA TUBA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2327", nombre: "BASE PARA REDOBLANTE", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2328", nombre: "GLOCKENSPIEL JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2329", nombre: "CELESTA (Wind Shine) MEIN", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2330", nombre: "CABINAS DE AUDIO DG PRO AUDIO", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2331", nombre: "ORGANETA ARTESA P88", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2332", nombre: "ATRILES HAMILTON", cantidad: 17, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2333", nombre: "MUEBLE PARA INSTRUMENTOS", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2334", nombre: "MUEBLE REPISA CAJONERA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2335", nombre: "ESCRITORIO BLANCO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2336", nombre: "SILLA PLASTICA RODACHINES", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2337", nombre: "SILLAS (AZULES)", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2338", nombre: "SILLA ALTA PARA DIRECTOR (AZUL)", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2339", nombre: "TELEVISOR SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2340", nombre: "IMPRESORA EPSON L 220", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2341", nombre: "MESAS LARGAS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2342", nombre: "TABLEROS PENTAGRAMADOS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2346", nombre: "BOQUILLA TROMPETA", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2349", nombre: "BOQUILLA TUBA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2350", nombre: "TAPETE CAUCHO ARMADO CON BORDES", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2351", nombre: "JHORN NUVO - BLANCO/AZUL N610JHWBL", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2352", nombre: "TOOT NUVO - BLANCO AZUL", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2353", nombre: "DOOD NUVO - BLANCO AZUL", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2354", nombre: "BASE PARA PLATILLOS - DE CHOQUE", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2355", nombre: "GOLPEADOR PARA TIMBAL SINFONICO", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2356", nombre: "MAZO GOLPEADOR PARA BOMBO SINFONICO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2357", nombre: "GOLPEADOR MULTI PURPUSE PROMARK", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2358", nombre: "PIANO DIGITAL ARTESIA PE-88 BLACK", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON MÚSICA HATIKVAH AMARILLO",
                codigoArea: "2400",
                responsable: "JUAN CAMILO CORREA",
                items: [
                    { id: "CTH-2401", nombre: "FLAUTA TRAVERSA JIMBAO", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2402", nombre: "FLAUTA TRAVERSA JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2403", nombre: "FLAUTA TRAVERSA CONDUCTOR", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2404", nombre: "CLARINETE SOPRANO EAGLE", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2405", nombre: "CLARINETE SOPRANO CONDUCTOR", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2406", nombre: "SAXOFON SOPRANO RECTO JIMBAO", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2407", nombre: "SAXOFON ALTO WINDCRAR", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2408", nombre: "SAXOFON ALTO CONDUCTOR", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2409", nombre: "SAXOFON TENOR WINDCRAF", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2410", nombre: "SAXOFON TENOR CONDUCTOR", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2411", nombre: "SAXOFON BARITONO JIMBAO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2412", nombre: "INSTRUMENTO JHORN - BLANCO/AZUL N610JHWBL NUVO", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2413", nombre: "INSTTRUMENTO TOOT - BLANCO AZUL NUVO", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2414", nombre: "INSTRUMENTO DOOD - BLANCO AZUL NUVO", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2415", nombre: "BOQUILLA SAXOFON ALTO YAMAHA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2416", nombre: "BOQUILLA CLARINETE SOPRANO YAMAHA", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2417", nombre: "BOQUILLA TROMBON CAÑO PEQUEÑO", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2418", nombre: "BOQUILLA TROMPETA", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2419", nombre: "BOQUILLA SAXOFON TENOR YAMAHA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2420", nombre: "BOQUILLA CORNO FRANCÉS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2421", nombre: "BOQUILLA TUBA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2422", nombre: "CABINAS DE AUDIO DJ PROAUDIO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2423", nombre: "ATRILES HAMILTON", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2424", nombre: "ATRILES MC ART LISO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2425", nombre: "ATRILES MC ART HUECOS", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2426", nombre: "MUEBLE REPISA CAJONERA", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2427", nombre: "ESCRITORIO BLANCO", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2428", nombre: "SILLA PLASTICA RODACHINES", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2429", nombre: "SILLAS (AZULES)", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2430", nombre: "SILLA ALTA PARA DIRECTOR (AZUL)", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2431", nombre: "TELEVISOR SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2432", nombre: "TABLERO PENTAGRAMADO", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2433", nombre: "REVISTEROS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2434", nombre: "REVISTEROS", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2435", nombre: "MUEBLE CAJONERO VERTICAL IKEA 5 PUESTOS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON MÚSICA KADIMA",
                codigoArea: "2500",
                responsable: "LORENA TORO",
                items: [
                    { id: "CTH-2501", nombre: "Escritorio blanco", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2502", nombre: "Cajonera de plástico de tres niveles", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2503", nombre: "Revisteros", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2504", nombre: "Sillas azules de plástico", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2505", nombre: "Escritorio de madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2506", nombre: "Silla amarilla", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2507", nombre: "Televisor SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2508", nombre: "Tablero movil", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2509", nombre: "Tablero fijo pentagramado", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2510", nombre: "Violín 4/4 - 1 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2511", nombre: "Violín 4/4 - 2 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2512", nombre: "Violín 4/4 - 3 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2513", nombre: "Violín 4/4 - 4 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2514", nombre: "Violín 4/4 - 5 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2515", nombre: "Violín 4/4 - 6 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2516", nombre: "Violín 4/4 - 7 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2517", nombre: "Violín 4/4 - 8 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2518", nombre: "Violín 4/4 - 9 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2519", nombre: "Violín 4/4 - 10 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2520", nombre: "Violín 4/4 - 11 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2521", nombre: "Violín 4/4 - 12 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2522", nombre: "Violín 4/4 - 13 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2523", nombre: "Violín 4/4 - 14 greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2524", nombre: "Violín 4/4 - 15 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2525", nombre: "Violín 4/4 - 16 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2526", nombre: "Violín 4/4 - 17 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2527", nombre: "Violin 3/4 - 1 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2528", nombre: "Violin 3/4 - 2 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2529", nombre: "Violin 3/4 - 4 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2530", nombre: "Violin 3/4 - 5 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2531", nombre: "Violin 3/4 - 7 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2532", nombre: "Violin 3/4 - 9 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2533", nombre: "Violin 3/4 - 10 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2534", nombre: "Violin 1/2 - 2 Greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2535", nombre: "Violin 1/2 - 4 greko", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2536", nombre: "Viola 3", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2537", nombre: "Viola 6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2538", nombre: "Viola 8", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2539", nombre: "Viola 9", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "MATERIAL DEPORTIVO",
                codigoArea: "2600",
                responsable: "CARLOS VELAZQUEZ",
                items: [
                    { id: "CTH-2601", nombre: "Balón de Fútbol Molten # 3 laminado", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2602", nombre: "Balón de Fútbol Golty # 3 azul y blanco", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2603", nombre: "Balón de Fútbol Golty # 3 negro y blanco", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2604", nombre: "Balón de Fútbol Golty # 3 amarillo y negro", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2605", nombre: "Balón de Fútbol Golty # 4 azul y verde", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2606", nombre: "Balón de Fútbol Golty # 4 amarillo negro", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2607", nombre: "Balón de Fútbol # 4 laminado negro y blanco", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2608", nombre: "Balón de Fútbol # 4 laminado Negro y blanco", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2609", nombre: "Balón de Fútbol # 5 laminado negro y amarillo", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2610", nombre: "Balon de Baloncesto molten # 6 rosado y negro", cantidad: 18, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2611", nombre: "Balon de Baloncesto Molten # 7 Verde y negro", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2612", nombre: "Balon de Baloncesto Molten # 7 rojo y negro", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2613", nombre: "Balon de Baloncesto # 7 competition", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2614", nombre: "Balon de Baloncesto Golty cuero #7 profesional", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2615", nombre: "Balon de Baloncesto Golty Nylon #6 competition", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2616", nombre: "Balon de Baloncesto Golty Nylon #6 training", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2617", nombre: "Balon de Baloncesto Golty nylon # 7 BCV 7", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2618", nombre: "Balon de Baloncesto Golty Nylon # 7 rojo blanco", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2619", nombre: "Balón de Balónmano ZENITH #2", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2620", nombre: "Balón de Microfútbol golty laminado Azul verde", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2621", nombre: "Balón de Microfútbol Golty competition laminado Azul blanco", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2622", nombre: "Balon de Voleibol Colty competition VST%", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2623", nombre: "Balon de Voleibol molten", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2624", nombre: "Balon de Rugby", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2625", nombre: "Estaca Miyagui 160 con punta", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2626", nombre: "Antenas de Voleibol 1,80 x 90", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2627", nombre: "Bastones 1,20 mt", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2628", nombre: "Escalerilla de Coordinación naranjas", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2629", nombre: "Tulas Baloneras capacidad 15 balones", cantidad: 28, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2630", nombre: "Raquetas Tenis de Campo Artengo talla 23", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2631", nombre: "Raquetas Tenis de Campo artengo tala 25", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2632", nombre: "Raquetas Tenis de Campo babolar R26", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2633", nombre: "Raquetas Tenis de Campo Wilson R 23", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2634", nombre: "Raquetas Tenis de Badminton Pro 5328", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2635", nombre: "Raquetas Tenis de Badminton clasical 316", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2636", nombre: "Plumas de Badminton", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2637", nombre: "Vallas Grandes Miyagui", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2638", nombre: "Vallas Medianas Miyagui", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2639", nombre: "Vallas Pequeñas Miyagui", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2640", nombre: "Bosu", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2641", nombre: "Steps Sportfitness", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2642", nombre: "Aros planos amarillos", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2643", nombre: "Aros medianos redondos", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2644", nombre: "Aros grandes redondos", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2645", nombre: "Aros pequeños redondos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2646", nombre: "Cojin Inestable", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2647", nombre: "Robo-Pong Newgy", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2648", nombre: "Esterillas Yoga", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2649", nombre: "Tablas de Natación", cantidad: 16, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2650", nombre: "Barriletes", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2651", nombre: "Platillos Demarcatorios", cantidad: 241, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2652", nombre: "Cuerdas", cantidad: 51, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2653", nombre: "Tableros de Ajedrez en tubo", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2654", nombre: "Tableros de Ajedrez caja madera", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2655", nombre: "Cajas Fichas de Ajedrez WE Games", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2656", nombre: "Soportes Mallas Tenis de Mesa DHS P106", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2657", nombre: "Mallas de Baloncesto", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2658", nombre: "Compresor", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2659", nombre: "Palotas de Letras", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2660", nombre: "Conos", cantidad: 81, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2661", nombre: "Teratubos", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2662", nombre: "Bandas Cerradas Negras everlast", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2663", nombre: "Bandas Cerradas moradas everlast", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2664", nombre: "Bandas Cerradas rojas everlast", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2665", nombre: "Bandas de Poder naranjas everlast", cantidad: 17, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2666", nombre: "Colchonteas negras", cantidad: 31, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2667", nombre: "Guarda pelotas de Tenis", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2668", nombre: "Discos ULTIMATE", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2669", nombre: "Mancuernas", cantidad: 22, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COMPUTADORES",
                codigoArea: "2700",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "CTH-2701", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2702", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "2/21/2019", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2703", nombre: "Windows 11 Pro Education", cantidad: 1, estado: "Bueno", fechaCompra: "9/27/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2704", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "2/20/2019", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2705", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "2/25/2019", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2706", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "12/19/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2707", nombre: "Windows 10", cantidad: 1, estado: "Bueno", fechaCompra: "12/12/2016", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2708", nombre: "Windows 11", cantidad: 1, estado: "Bueno", fechaCompra: "12/12/2016", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2709", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "9/10/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2711", nombre: "Chrome OS flex", cantidad: 1, estado: "Bueno", fechaCompra: "-", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2712", nombre: "Chrome OS flex", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2713", nombre: "MacOS sonoma 14.6.1", cantidad: 1, estado: "Bueno", fechaCompra: "12/18/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2714", nombre: "MAC-OS", cantidad: 1, estado: "Bueno", fechaCompra: "5/30/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2715", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "11/10/2017", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2716", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2717", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2718", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2719", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2720", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "1/2/2019", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2721", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2722", nombre: "Windows 10 Education", cantidad: 1, estado: "Bueno", fechaCompra: "1/2/2021", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2723", nombre: "Windows 11 education", cantidad: 1, estado: "Bueno", fechaCompra: "1/2/2021", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2724", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "1/4/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2725", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "1/2/2021", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2726", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "10/24/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2727", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "7/8/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2728", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "9/26/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2729", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "3/5/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2730", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "6/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2731", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "3/5/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2732", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "11/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2733", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "11/9/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2734", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "9/30/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2736", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "1/24/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2737", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "7/27/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2738", nombre: "Windows 11 Pro", cantidad: 1, estado: "Bueno", fechaCompra: "2/25/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2739", nombre: "Windows 11 Education", cantidad: 1, estado: "Bueno", fechaCompra: "3/5/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-2740", nombre: "IpadOS 18.4.1", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SISTEMAS",
                codigoArea: "2800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-2801", nombre: "Portatiles marca Lenovo", cantidad: 27, estado: "Bueno", fechaCompra: "12/10/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SISTEMAS",
                codigoArea: "2900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-2901", nombre: "Portatiles marca DELL", cantidad: 30, estado: "Bueno", fechaCompra: "5/3/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "IMPRESORAS SISTEMAS",
                codigoArea: "3000",
                responsable: "Oficina de sistemas",
                items: [
                    { id: "CTH-3001", nombre: "HP", cantidad: 1, estado: "Bueno", fechaCompra: "April 28, 2021", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3002", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3003", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3004", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "6/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3005", nombre: "3NSTAR", cantidad: 1, estado: "Bueno", fechaCompra: "1/20/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3006", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3007", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3008", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3009", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3010", nombre: "ZEBRA", cantidad: 1, estado: "Bueno", fechaCompra: "6/3/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3011", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "3/1/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3012", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3013", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3014", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3015", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3016", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2023", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3017", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3018", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3019", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2015", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3020", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2018", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3021", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2015", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-3022", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2015", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MOVIL 1",
                codigoArea: "3100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3101", nombre: "NOVOTECHNO MARCA DELL", cantidad: 30, estado: "Bueno", fechaCompra: "13-Jan-21", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MOVIL 2",
                codigoArea: "3200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3201", nombre: "DELL", cantidad: 30, estado: "Bueno", fechaCompra: "6-Apr-21", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MOVIL 3",
                codigoArea: "3300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3301", nombre: "NOVOTECHNO MARCA DELL", cantidad: 30, estado: "Bueno", fechaCompra: "3-Mar-23", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ALA MOVIL 4",
                codigoArea: "3400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3401", nombre: "NOVOTECHNO MARCA DELL", cantidad: 30, estado: "Bueno", fechaCompra: "23-Jun-23", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AULA MOVIL 5",
                codigoArea: "3500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3501", nombre: "LENOVO ACERTIVA DIGITAL", cantidad: 30, estado: "Bueno", fechaCompra: "11/13/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BIBLIOTECA",
                codigoArea: "3600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3601", nombre: "LENOVO ACERTIVA DIGITAL", cantidad: 7, estado: "Bueno", fechaCompra: "8/14/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "NU PREESCOLAR",
                codigoArea: "3700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3701", nombre: "Intel Celeron N5105", cantidad: 8, estado: "Bueno", fechaCompra: "8/2/2023", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "NU PRIMARIA",
                codigoArea: "3800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3801", nombre: "Intel Celeron N5105", cantidad: 10, estado: "Bueno", fechaCompra: "09/13/2023", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "UN BACHILLERATO",
                codigoArea: "3900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3901", nombre: "Intel Celeron N5105", cantidad: 12, estado: "Bueno", fechaCompra: "09/13/2023", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COLISEO HATIKVAH",
                codigoArea: "4000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4001", nombre: "PROYECTOR EPSON", cantidad: 5, estado: "Bueno", fechaCompra: "2/5/2021", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-4101", nombre: "LENTE ULTRA TIRO CORTO EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "2/5/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA HATIKVAH",
                codigoArea: "4200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4201", nombre: "Proyector ViewSonic", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PREESCOLAR",
                codigoArea: "4300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4301", nombre: "Proyector NEC", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PRIMARIA",
                codigoArea: "4400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4401", nombre: "Proyector NEC", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BACHILLERATO",
                codigoArea: "4500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4501", nombre: "Proyector NEC", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON ARTES",
                codigoArea: "4600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4601", nombre: "Proyector NEC", cantidad: 1, estado: "Bueno", fechaCompra: "6/5/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sexto Bet",
                codigoArea: "4700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4701", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sexto Alef",
                codigoArea: "4800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4801", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Quinto Bet",
                codigoArea: "4900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-4901", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "3/1/2018", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Quinto Alef",
                codigoArea: "5000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5001", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Cuarto Bet",
                codigoArea: "5100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5101", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Cuarto Alef",
                codigoArea: "5200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5201", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Tercero Bet",
                codigoArea: "5300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5301", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Tercero Alef",
                codigoArea: "5400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5401", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Segundo Bet",
                codigoArea: "5500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5501", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Segundo Alef",
                codigoArea: "5600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5601", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Laboratorio de fisica",
                codigoArea: "5700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5701", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2022", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Laboratorio de biologia",
                codigoArea: "5800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5801", nombre: "LG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Laboratorio de quimica",
                codigoArea: "5900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-5901", nombre: "LG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Laboratorio de quimica",
                codigoArea: "6000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6001", nombre: "ONESCREEN", cantidad: 1, estado: "Bueno", fechaCompra: "5/21/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon de musica",
                codigoArea: "6100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6101", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "10/2/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "12 BET",
                codigoArea: "6200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6201", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "2/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "12 ALEF",
                codigoArea: "6300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6301", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "9/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "11 BET",
                codigoArea: "6400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6401", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "11 ALEF",
                codigoArea: "6500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6501", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "10 BET",
                codigoArea: "6600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6601", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "2/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "10 ALEF",
                codigoArea: "6700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6701", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "9 BET",
                codigoArea: "6800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6801", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "9 ALEF",
                codigoArea: "6900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-6901", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "2/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "8 BET",
                codigoArea: "7000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7001", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "6/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "8 ALEF",
                codigoArea: "7100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7101", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "12/29/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "7 BET",
                codigoArea: "7200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7201", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "7 ALEF",
                codigoArea: "7300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7301", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "8/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Porteria",
                codigoArea: "7400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7401", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2019", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Aula taller",
                codigoArea: "7500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7501", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "7/1/2016", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon de religion",
                codigoArea: "7600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7601", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "3/3/2022", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salón de arte",
                codigoArea: "7700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7701", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "10/2/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sala de sistemas",
                codigoArea: "7800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7801", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sala de sistemas",
                codigoArea: "7900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-7901", nombre: "ONESCREEN", cantidad: 1, estado: "Bueno", fechaCompra: "5/21/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Biblioteca",
                codigoArea: "8000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8001", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Rectoria",
                codigoArea: "8100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8101", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "6/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sinagoga",
                codigoArea: "8200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8201", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "3/3/2022", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sala de juntas",
                codigoArea: "8300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8301", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Hall",
                codigoArea: "8400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8401", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon Kadima",
                codigoArea: "8500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8501", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2020", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon musica kadima",
                codigoArea: "8600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8601", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "5/1/2018", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Sala de proyección",
                codigoArea: "8700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8701", nombre: "LG", cantidad: 1, estado: "Bueno", fechaCompra: "2/5/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon musica/Rojo",
                codigoArea: "8800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8801", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "10/2/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon musica/Amarillo",
                codigoArea: "8900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-8901", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "5/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon musica/Verde",
                codigoArea: "9000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-9001", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "5/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon de teatro",
                codigoArea: "9100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-9101", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "5/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Salon de danza",
                codigoArea: "9200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-9201", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "5/1/2021", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "Bodega de mantenimiento",
                codigoArea: "9300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-9301", nombre: "VIZIO", cantidad: 1, estado: "Bueno", fechaCompra: "2/1/2018", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CABAÑAS DE MADERA PREESCOLAR.",
                codigoArea: "9400",
                responsable: "PAOLA CATALINA CARDONA",
                items: [
                    { id: "CTH-9401", nombre: "Sillas estudiantes Kassani # 3", cantidad: 175, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9402", nombre: "Sillas Docentes", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9403", nombre: "Sillas auxiliares docentes", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9404", nombre: "Escritorio docente tipo L con Cajones", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9405", nombre: "Mesa auxiliare docente", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9406", nombre: "Mesas estudiantes Kassani 5 puestos", cantidad: 47, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9407", nombre: "Casilleros 6 puestos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9408", nombre: "Mueble organizador de 12 puestos", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9409", nombre: "Theos de decoracion en madera", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9410", nombre: "Tableros blancos de silicona", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9411", nombre: "Tableros hablantes azules", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9412", nombre: "Espejos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9413", nombre: "Colchoneta azul", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9414", nombre: "Nubes decorativas de madera", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9415", nombre: "Estrellas decorativas de madera", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9416", nombre: "Sol decorativo de madera", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9417", nombre: "Cambiadores", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "GIMNACIO PREESCOLAR",
                codigoArea: "9500",
                responsable: "PAOLA CATALINA CARDONA",
                items: [
                    { id: "CTH-9501", nombre: "Colchones Azules", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9502", nombre: "Sillas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9503", nombre: "Bafle", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9504", nombre: "Colchonetas Gimnasia", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9505", nombre: "Colchonetas de protección", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9506", nombre: "Colchonetas de cilindro", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9507", nombre: "Saco de Boxeo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9508", nombre: "Donas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9509", nombre: "Colchonetas en forma de C", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9510", nombre: "Triangulo", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9511", nombre: "Escaleras", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9512", nombre: "Espaldares", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9513", nombre: "camas de niños", cantidad: 22, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "AUDITORIO PREESCOLAR",
                codigoArea: "9600",
                responsable: "PAOLA CATALINA CARDONA",
                items: [
                    { id: "CTH-9601", nombre: "Sillas universitaria", cantidad: 25, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9602", nombre: "Bafles", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9603", nombre: "planta de sonido", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9604", nombre: "Tablero blanco pared", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9605", nombre: "control", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9606", nombre: "mesa escritorio", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9607", nombre: "regulador", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9608", nombre: "Vidrieras", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ZONA ADMINISTRATIVA PREESCOLAR",
                codigoArea: "9700",
                responsable: "PAOLA CATALINA CARDONA",
                items: [
                    { id: "CTH-9701", nombre: "Escritorios tipo L con cajones", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9702", nombre: "Mesas auxiliares de profesores", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9703", nombre: "Sillas administrativas ergonomicas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9704", nombre: "Sofas dos puestos", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9705", nombre: "Sillas auxiliares administrativas", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9706", nombre: "sillas auxiliares profesores", cantidad: 21, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9707", nombre: "mueble de almacenamiento 2 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9708", nombre: "estanteria 6 peldaños madera", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COCINA PREESCOLAR",
                codigoArea: "9800",
                responsable: "PAOLA CATALINA CARDONA",
                items: [
                    { id: "CTH-9801", nombre: "Microondas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9802", nombre: "Cafeteran Hamilton Beah", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9803", nombre: "Horno tostador", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9804", nombre: "Nevera Mabe 2 puestos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9805", nombre: "Mesa madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SALON DE ARTES",
                codigoArea: "9900",
                responsable: "CAMILO GOMEZ",
                items: [
                    { id: "CTH-9901", nombre: "Escritorio de madera graduable artes", cantidad: 24, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9902", nombre: "silla tipo butaco madera base metalica", cantidad: 32, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9903", nombre: "escritorio profesor", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9904", nombre: "mesas auxiliares de profesores", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-9905", nombre: "closet madera 8 divisiones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ADMINISTRACION 1",
                codigoArea: "10000",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10001", nombre: "Escritorio administrativo tipo l con cajones", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10002", nombre: "Escritorio administrativo sencillo con cajones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10003", nombre: "silla ergonomica administrativa", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10004", nombre: "Sofas base madera sin espaldar", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10005", nombre: "Mesas auxiliares administrativas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10006", nombre: "estanteria de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10007", nombre: "archivadores con rieles guia", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10008", nombre: "cajon de madera 6 divisiones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10009", nombre: "cajon madera 2 divisiones", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10010", nombre: "Mesa rectangular", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10011", nombre: "archivadores de pared", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CAFETIN ADMINISTRACION 1",
                codigoArea: "10100",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10101", nombre: "cafeteria hamilton beach", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10102", nombre: "closet madera 8 divisiones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10103", nombre: "mesa redonda", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10104", nombre: "sillas auxilires cafeteria", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10105", nombre: "nevera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ADMINISTRACION 2",
                codigoArea: "10200",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10201", nombre: "Escritorio administrativo tipo l con cajones", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10202", nombre: "Escritorio administrativo sencillo con cajones", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10203", nombre: "Sillas tipo sofa", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10204", nombre: "mesa redonda", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10205", nombre: "Sillas auxiliares administrativas", cantidad: 18, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10206", nombre: "mesa rectangular 1,20m x 4 mts", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10207", nombre: "sillas ergonomicas administrativas", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10208", nombre: "camillas de enfermeria", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CAFETIN ADMINISTRACION 2",
                codigoArea: "10300",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10301", nombre: "cafetera oster", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10302", nombre: "cajoneras pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10303", nombre: "nevera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "RESTAURANTE",
                codigoArea: "10400",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10401", nombre: "microondas", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10402", nombre: "mesas de madera base metalica", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10403", nombre: "mesas rectangular auxiliar", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ZONA ASADOS",
                codigoArea: "10500",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10501", nombre: "Sombrillas tipo parasol", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10502", nombre: "Mesa rectangular metalica", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10503", nombre: "Silla tipo banca en madera base metalica sin espaldar", cantidad: 24, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CANCHA PRIMARIA",
                codigoArea: "10600",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10601", nombre: "porterias en aluminio de 3x2", cantidad: 2, estado: "Bueno", fechaCompra: "8/10/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10602", nombre: "Grama sintetica 160 metros cuadrados", cantidad: 1, estado: "Bueno", fechaCompra: "8/10/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CANCHA BACHILLERATO",
                codigoArea: "10700",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10701", nombre: "porterias en aluminio de 3x2", cantidad: 2, estado: "Bueno", fechaCompra: "1/12/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10702", nombre: "Grama sintetica 288 metros cuadrados", cantidad: 1, estado: "Bueno", fechaCompra: "1/12/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CANCHA PREESCOLAR",
                codigoArea: "10800",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10801", nombre: "Porterias metalicas de 1,20 x 1,50", cantidad: 2, estado: "Bueno", fechaCompra: "8/10/2024", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10802", nombre: "Grama sintetica 40 metros", cantidad: 1, estado: "Bueno", fechaCompra: "8/10/2024", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "CANCHA KADIMA",
                codigoArea: "10900",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-10901", nombre: "Porterias metalicas de 7x 2", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-10902", nombre: "porterias metalicas de 3x2", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "JARDINERIA",
                codigoArea: "11100",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11101", nombre: "Tijera de poda grande", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11102", nombre: "tijera de mano", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11103", nombre: "bombas de fumigacion royal condor", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11104", nombre: "escalera de 6 peldaños aluminio", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11105", nombre: "escaleras de aluminio 2 cuerpos", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11106", nombre: "tractor jhon deeere", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11107", nombre: "2 carretas metalicas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11108", nombre: "azadones incolma", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11109", nombre: "palas incolma", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11110", nombre: "palacoca herragro", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11111", nombre: "palines incolma", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11112", nombre: "acha", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11113", nombre: "machetes aguila corneta", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11114", nombre: "cerrucho de poda", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11115", nombre: "guadaña stihl fs 280", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11116", nombre: "guadaña maruyama b43", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11117", nombre: "seteadora stilh fs 120", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "SINAGOGA",
                codigoArea: "11200",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11201", nombre: "Closeth de madera de almacenamiento tora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11202", nombre: "Mesas rectangulares", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11203", nombre: "sillas rimax", cantidad: 23, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11204", nombre: "Base de madera tipo atril", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11205", nombre: "silla tandem de espera", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11206", nombre: "desumificador", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11207", nombre: "archivador de pared", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COLISEO HATIKVAH",
                codigoArea: "11300",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11301", nombre: "Estructuras colgantes de baloncesto", cantidad: 2, estado: "Bueno", fechaCompra: "11/20/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11302", nombre: "cerramiento metalico de graderias", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11303", nombre: "mallas voleybol con tuberia metalica", cantidad: 2, estado: "Bueno", fechaCompra: "11/20/2020", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11304", nombre: "Rack de sonido", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11305", nombre: "Parlantes de amplificacion", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA DE SILLETERIA HATIKVAH",
                codigoArea: "11400",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11401", nombre: "sillas rimax", cantidad: 350, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11402", nombre: "sillas muma", cantidad: 240, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11403", nombre: "carreta de carga", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11404", nombre: "biombos moviles", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA DE MESAS HATIKVAH",
                codigoArea: "11500",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11501", nombre: "Mesas rectangulares tipo maleta", cantidad: 38, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11502", nombre: "mesas redondas", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "OFICINA DEPORTES Y EXTRACURRICULARES",
                codigoArea: "11600",
                responsable: "CARLOS VELAZQUES",
                items: [
                    { id: "CTH-11601", nombre: "Mesa rectangular tipo reuniones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11602", nombre: "sillas auxiliares administrativas", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11603", nombre: "archivadores de áred", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11604", nombre: "estanteria de madera 4 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11605", nombre: "Silla administrativa ergonomica", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11606", nombre: "Escritorio tipo L con cajoneras", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA 1 HATIKVAH",
                codigoArea: "11700",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11701", nombre: "Estanteria metalica 6 peldaños", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11702", nombre: "mesa rectangular", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11703", nombre: "silla auxiliar administrativa", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11704", nombre: "closeth madera 6 puestos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA 5 HATIKVAH",
                codigoArea: "11800",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11801", nombre: "Closet madera 6 puestos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11802", nombre: "estanteria de madera4 peldaños", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "COLISEO MOLKALE",
                codigoArea: "11900",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-11901", nombre: "Canchas baloncesto medianas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11902", nombre: "canchas baloncesto grandes", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11903", nombre: "porterias metalicas de 3x2", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11904", nombre: "aros baloncesto", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-11905", nombre: "graderias madera con base metalica de 6 bases", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PISCINA",
                codigoArea: "12000",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12001", nombre: "Cerramiento principal", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12002", nombre: "bomba de calefaccion", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12003", nombre: "motor de impulso bomba", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12004", nombre: "filtro desarenador", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12005", nombre: "valvula multipor", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12006", nombre: "camillla de seguridad", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12007", nombre: "manguera conica", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12008", nombre: "baston de seguridad", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12009", nombre: "calentador a gas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "MANTENIMIENTO",
                codigoArea: "12100",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12101", nombre: "Hidrolavadora a 110W", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12102", nombre: "Hidrolavadora a 220w", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12103", nombre: "Bomba sumergible de 110W", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12104", nombre: "Tanque Hidrofloo", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12105", nombre: "Variadores de presion", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12106", nombre: "bombas de impulso", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12107", nombre: "taladro percutor stanley", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12108", nombre: "taladro sencillo", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12109", nombre: "maquina radial stanley", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12110", nombre: "compresor a 110W", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12111", nombre: "pistola electrica de pintura", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12112", nombre: "juego de llaves de boca fija 12 und", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12113", nombre: "cierra stanley", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12114", nombre: "destornilladores de pala y estrella", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12115", nombre: "alicate truper", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12116", nombre: "llave de tubo", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12117", nombre: "llave es expansión", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12118", nombre: "llave de cortar tubos truper", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12119", nombre: "manguera conica", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12120", nombre: "extenciones electricas", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12121", nombre: "serruchos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12122", nombre: "almadanas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12123", nombre: "martillo", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12124", nombre: "martillo de goma", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PORTERIA",
                codigoArea: "12200",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12201", nombre: "Escritorio madera sencillo con cajones", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12202", nombre: "silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12203", nombre: "silla auxiliar administrativa", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12204", nombre: "Puertas vehiculares con brazo electronico", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12205", nombre: "Puerta vehicular con motor tipo cadena de apertura", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12206", nombre: "talanqueras vehiculares", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "LABORATORIO QUIMICA",
                codigoArea: "12300",
                responsable: "GIOVANNI AUGUSTO TORRES",
                items: [
                    { id: "CTH-12301", nombre: "Embudo de vidrio pequeño", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12302", nombre: "Embudo de vidrio grande", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12303", nombre: "Kitasato de 500 ml", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12304", nombre: "Vidrio de reloj", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12305", nombre: "Tubos de ensayo", cantidad: 144, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12306", nombre: "Probetas", cantidad: 24, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12307", nombre: "Buretas", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12308", nombre: "Embudo de cantacion", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12309", nombre: "Condensador", cantidad: 19, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12310", nombre: "Matraz de aforo", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12311", nombre: "Balon de aforado", cantidad: 18, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12312", nombre: "Erlenmeyer", cantidad: 42, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12313", nombre: "Morteros", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12314", nombre: "Ducha lavaojos y ducho libre", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12315", nombre: "Mesones en acero inoxidable", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12316", nombre: "Silla tipo butaco plastica con cilindro", cantidad: 30, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12317", nombre: "Estanteria plastica 5 peldaños", cantidad: 6, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12318", nombre: "carreteros electricos de techo", cantidad: 4, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12319", nombre: "cajon metalico almacenador de quimicos", cantidad: 1, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12320", nombre: "Kit cotra derrames", cantidad: 1, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "LABORATORIO FÍSICA",
                codigoArea: "12400",
                responsable: "GIOVANNI AUGUSTO TORRES",
                items: [
                    { id: "CTH-12401", nombre: "Mesones en acero inoxidable", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12402", nombre: "pantalla interactiva", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12403", nombre: "Silla tipo butaco plastica con cilindro", cantidad: 30, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12404", nombre: "tablero con rodachines", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12405", nombre: "silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12406", nombre: "mueble de almacenamiento de 6 puestos co puertas", cantidad: 1, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12407", nombre: "estanteria metalica 5 peldaños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12408", nombre: "Estanteria plastica 5 peldaños", cantidad: 6, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12409", nombre: "cajas de equipos azul", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12410", nombre: "caja de equipos amarilla", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12411", nombre: "caja de equipos roja", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12412", nombre: "balancines", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12413", nombre: "pistas de aceleracion", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12414", nombre: "carreteros electricos de techo", cantidad: 4, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12415", nombre: "cajones de piso para pistas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "LABORATORIO BIOLOGÍA",
                codigoArea: "12500",
                responsable: "GIOVANNI AUGUSTO TORRES",
                items: [
                    { id: "CTH-12501", nombre: "Estanteria plastica 5 peldaños", cantidad: 6, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12502", nombre: "Silla tipo butaco plastica con cilindro", cantidad: 30, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12503", nombre: "Mesones en madera con base metalica", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12504", nombre: "Estanteria de madera y vidrio de 6 peldaños", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12505", nombre: "nevera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12506", nombre: "Probetas", cantidad: 24, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12507", nombre: "equipos de red de gas con valvula", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12508", nombre: "carreteros electricos de techo", cantidad: 4, estado: "Bueno", fechaCompra: "6/6/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12509", nombre: "Equipo de alamcenamiento bacterias", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12510", nombre: "llave de flujo", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12511", nombre: "basculas de peso", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12512", nombre: "frascos de muestreo", cantidad: 30, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12513", nombre: "Vidrio de reloj", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12514", nombre: "Tubos de ensayo", cantidad: 89, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "PARQUES INFANTILES",
                codigoArea: "12600",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12601", nombre: "Muro de escalar naranjado", cantidad: 1, estado: "Bueno", fechaCompra: "4/9/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12602", nombre: "Pasamanos beige y rojo", cantidad: 1, estado: "Bueno", fechaCompra: "4/9/2025", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12603", nombre: "tobogan doble color con rampa", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12604", nombre: "Parque infantil PI 025A", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12605", nombre: "Malla de escalar", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12606", nombre: "culumpio tipo H", cantidad: 3, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12607", nombre: "Mataculin Referencia M115157", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12608", nombre: "Parque infantil tipo jungla", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12609", nombre: "Playground PG 109 morado y verde", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12610", nombre: "Malla escalar negra M A 117", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12611", nombre: "Balancin verde dos puestos", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12612", nombre: "Mataculin 2 puestos gris", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12613", nombre: "rueda de giro con eje cental flotante", cantidad: 1, estado: "Bueno", fechaCompra: "5/10/2022", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12614", nombre: "Playground rojo y azul de 3 bases", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12615", nombre: "Culumpio tipo H con cadenas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12616", nombre: "Tobogan plastico cerrado", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12617", nombre: "Lisaderos en cementos con esmalte blanco", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12618", nombre: "Malla tipo telaraña gris", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12619", nombre: "Playground de dos bases con tunel en malla y tobogan cerrado de 4 bases", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12620", nombre: "Culumpios de madera con cadena y base de caucho", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12621", nombre: "Mesa de tekball", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12622", nombre: "Pasamanos metalico naranja", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12623", nombre: "Pasamanos metalicos azul claro", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12624", nombre: "Pasamanos metalicos azul oscuro", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12625", nombre: "Cabaña de muñecas madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "BODEGA 8",
                codigoArea: "12700",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12701", nombre: "Escritorios alumnos Kassani", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12702", nombre: "Sillas Kassani # 6", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12702", nombre: "Sillas Kassani # 4", cantidad: 35, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "ÁREAS EN GENERAL",
                codigoArea: "12800",
                responsable: "ANDRES BETANCUR",
                items: [
                    { id: "CTH-12801", nombre: "Percianas enrrollables", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-12802", nombre: "Percianas corredizas", cantidad: 0, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            }
        ],
        depuracion: [],
        adiciones: []
    },
    "ENC": {
        nombre: "Centro Infantil El Encuentro",
        icono: "🏠",
        color: "#16a34a",
        inventario: [
            {
                area: "ÁREAS EN GENERAL",
                codigoArea: "100",
                responsable: "LINA MARIA RUIZ RIVERA",
                items: [
                    { id: "ENC-101", nombre: "escritorios administrativos", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-102", nombre: "sillas ergonomica administrativa", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-103", nombre: "silla plasticas espera", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-104", nombre: "sofa cuerina", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-105", nombre: "sillas rimaxa adulto", cantidad: 46, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-106", nombre: "sillas auxiliares profesores", cantidad: 30, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-107", nombre: "sillas sin brazos niños", cantidad: 87, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-108", nombre: "sillas riimax niños", cantidad: 93, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-109", nombre: "mesas trapesoidales", cantidad: 48, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-110", nombre: "mesa triangular individual", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-111", nombre: "mesas flores niños", cantidad: 22, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-112", nombre: "mesas redondas adultos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-113", nombre: "muebles circulares biblioteca", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-114", nombre: "mobiliario gimnasio", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-115", nombre: "repisas rimax", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-116", nombre: "muebles rimax", cantidad: 18, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-117", nombre: "muebles madera", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-118", nombre: "cojines", cantidad: 54, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-119", nombre: "nevera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-120", nombre: "microhondas", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-121", nombre: "camas plasticas", cantidad: 32, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-122", nombre: "juego de alcoba madera niños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-123", nombre: "juego de comedor madera niños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-124", nombre: "juego de sala madera niños", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-125", nombre: "cocinita madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-126", nombre: "lamparas", cantidad: 38, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-127", nombre: "basurera aluminio oficina", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-128", nombre: "basureras pequeñas negras", cantidad: 12, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-129", nombre: "basureras pequeñas blancas", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-130", nombre: "basureras grandes", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-131", nombre: "basureras pañales", cantidad: 8, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-132", nombre: "espejo 6 mtrs cuadrados", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-133", nombre: "espejos marco de colores", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-134", nombre: "teatrino", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-135", nombre: "repisas flotantes madera", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-136", nombre: "corcho", cantidad: 28, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-137", nombre: "letrero rectangular", cantidad: 42, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-138", nombre: "calendarios madera", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-139", nombre: "tableros", cantidad: 15, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-140", nombre: "archivadores oficina", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-141", nombre: "black out", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-142", nombre: "tablero informativo", cantidad: 7, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-143", nombre: "colchonetas", cantidad: 42, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-144", nombre: "cambiadores plasticos", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-145", nombre: "pecera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-146", nombre: "Caballetes dobles", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-147", nombre: "corrales", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-148", nombre: "mesas rimax niños", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "JUEGOS EXTERIORES",
                codigoArea: "200",
                responsable: "LINA MARIA RUIZ RIVERA",
                items: [
                    { id: "ENC-201", nombre: "Casa plasticas", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-202", nombre: "lizaderos", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-203", nombre: "balancines", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-204", nombre: "columpios `para bebes", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-205", nombre: "castillos", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-206", nombre: "carros", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-207", nombre: "piscina de pelotas", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-208", nombre: "Lona de bricar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-209", nombre: "Estructura de madera", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-210", nombre: "Carpas", cantidad: 11, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-211", nombre: "Valdes y palas juego", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-212", nombre: "Balancines plasticos", cantidad: 10, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-213", nombre: "Bicicletas sin pedal", cantidad: 20, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-214", nombre: "Triciclos", cantidad: 13, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-215", nombre: "carros de montar bebes", cantidad: 6, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-216", nombre: "Pared de escalar", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-217", nombre: "Red de escalar", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-218", nombre: "Parque magico", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-219", nombre: "Juegos de aventura", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-220", nombre: "Carros de empujar para bebes", cantidad: 3, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-221", nombre: "Barra de equilibrio compleja", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-222", nombre: "Casa del arbol", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-224", nombre: "arenero", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-225", nombre: "PARQUE DE HAMACAS ( 5 HAMACAS)", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            },
            {
                area: "EQUIPOS TECNOLOGICOS",
                codigoArea: "300",
                responsable: "LINA MARIA RUIZ RIVERA",
                items: [
                    { id: "ENC-301", nombre: "Impresoras", cantidad: 5, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-302", nombre: "Video Beam", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-303", nombre: "Televisor", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-304", nombre: "Parlantes bluetooth", cantidad: 14, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-305", nombre: "Amplificador", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-306", nombre: "Computadores", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-307", nombre: "Aparatos telefónicos", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-308", nombre: "Fotocopiadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-309", nombre: "camaras de seguridad", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-310", nombre: "parlantes randes con soporte", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-311", nombre: "pantalla para proyeccion", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-312", nombre: "Equipo de calefaccion", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-313", nombre: "lavadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-314", nombre: "secadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-315", nombre: "walkie talkie", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" }
                ]
            }
        ],
        depuracion: [],
        adiciones: []
    },
    "UIB": {
        nombre: "UIB — Oficinas Administrativas",
        icono: "🏛️",
        color: "#7c3aed",
        inventario: [
            {
                area: "Pendiente de Inventario",
                codigoArea: "0",
                responsable: "",
                items: [
                    { id: "UIB-INV-001", nombre: "Información pendiente de carga", cantidad: 0, estado: "Pendiente", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Pendiente levantamiento de inventario sede UIB" }
                ]
            }
        ],
        depuracion: [],
        adiciones: []
    }
};

function saveInventory() {
    localStorage.setItem('cth_inventory', JSON.stringify(INVENTORY_DB));
    saveInventoryToDB();
}

function saveInventoryToDB() {
    if (!APP_STATE.firestoreReady) return;
    db.collection('config').doc('inventory').set({ data: INVENTORY_DB })
        .then(() => console.log('✅ Inventario guardado en Firestore'))
        .catch(err => console.error('Error guardando inventario:', err));
}

async function loadInventoryFromFirestore() {
    try {
        const snap = await db.collection('config').doc('inventory').get();
        if (snap.exists && snap.data().data) {
            INVENTORY_DB = snap.data().data;
            localStorage.setItem('cth_inventory', JSON.stringify(INVENTORY_DB));
            console.log('☁️ Inventario cargado desde Firestore');
        } else {
            saveInventoryToDB();
        }
    } catch (err) {
        console.warn('⚠️ Error cargando inventario desde Firestore:', err);
    }
}

// ─── Render: Vista de Inventario ───
function renderInventoryView(container) {
    const sedes = Object.keys(INVENTORY_DB);
    const sedeActiva = window._invSedeActiva || sedes[0];
    const tabActivo = window._invTabActivo || 'inventario';

    let totalItems = 0, totalDepurados = 0, totalAdiciones = 0;
    sedes.forEach(s => {
        const sede = INVENTORY_DB[s];
        (sede.inventario || []).forEach(a => totalItems += a.items.length);
        (sede.depuracion || []).forEach(a => totalDepurados += a.items.length);
        (sede.adiciones || []).forEach(a => totalAdiciones += a.items.length);
    });

    const sede = INVENTORY_DB[sedeActiva];
    const categorias = {
        inventario: { label: '📋 Inventario Activo', data: sede.inventario || [], color: '#0c84ff' },
        depuracion: { label: '🗑️ Depuración (Retirados)', data: sede.depuracion || [], color: '#ef4444' },
        adiciones: { label: '🆕 Adiciones (Nuevas Compras)', data: sede.adiciones || [], color: '#16a34a' }
    };
    const cat = categorias[tabActivo];
    const areas = cat.data;

    let catItemCount = 0;
    areas.forEach(a => catItemCount += a.items.length);

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="inv-header">
                <div>
                    <h2 class="inv-title">📦 Inventario de Activos — UIB</h2>
                    <p class="inv-subtitle">Control de activos fijos por sede · Para Revisoría Fiscal</p>
                </div>
                <div class="inv-header-actions">
                    <button class="btn-excel" onclick="window.exportInventoryExcel()" title="Exportar inventario a Excel">📊 Exportar Excel</button>
                    <button class="btn-primary" onclick="window.openInventoryItemForm('${sedeActiva}', '${tabActivo}')">
                        <span class="btn-icon">➕</span> Agregar Ítem
                    </button>
                </div>
            </div>

            <div class="inv-stats-row">
                <div class="inv-stat-card">
                    <span class="inv-stat-icon">📋</span>
                    <div class="inv-stat-info">
                        <div class="inv-stat-value">${totalItems}</div>
                        <div class="inv-stat-label">Activos Vigentes</div>
                    </div>
                </div>
                <div class="inv-stat-card inv-stat-danger">
                    <span class="inv-stat-icon">🗑️</span>
                    <div class="inv-stat-info">
                        <div class="inv-stat-value">${totalDepurados}</div>
                        <div class="inv-stat-label">Depurados</div>
                    </div>
                </div>
                <div class="inv-stat-card inv-stat-success">
                    <span class="inv-stat-icon">🆕</span>
                    <div class="inv-stat-info">
                        <div class="inv-stat-value">${totalAdiciones}</div>
                        <div class="inv-stat-label">Adiciones</div>
                    </div>
                </div>
                <div class="inv-stat-card inv-stat-purple">
                    <span class="inv-stat-icon">🏢</span>
                    <div class="inv-stat-info">
                        <div class="inv-stat-value">${sedes.length}</div>
                        <div class="inv-stat-label">Sedes</div>
                    </div>
                </div>
            </div>

            <div class="inv-sede-selector">
                ${sedes.map(s => {
                    const sd = INVENTORY_DB[s];
                    let sedeItems = 0, sedeUnits = 0, sedeAreas = 0;
                    (sd.inventario || []).forEach(a => { sedeItems += a.items.length; sedeUnits += a.items.reduce((sum, i) => sum + (parseInt(i.cantidad) || 0), 0); });
                    sedeAreas = (sd.inventario || []).length;
                    return `<button class="inv-sede-btn ${s === sedeActiva ? 'active' : ''}" onclick="window._invSedeActiva='${s}'; window._invTabActivo='inventario'; renderInventoryView(document.getElementById('view-dashboard'))" style="${s === sedeActiva ? 'border-color:' + sd.color + ';color:' + sd.color : ''}">
                        <span class="inv-sede-name"><span>${sd.icono}</span> ${sd.nombre}</span>
                        <span class="inv-sede-stats">${sedeItems} ítems · ${sedeUnits.toLocaleString()} uds · ${sedeAreas} áreas</span>
                    </button>`;
                }).join('')}
            </div>

            <div class="inv-tabs">
                <button class="inv-tab ${tabActivo === 'inventario' ? 'active' : ''}" onclick="window._invTabActivo='inventario'; renderInventoryView(document.getElementById('view-dashboard'))">
                    📋 Inventario Activo
                </button>
                <button class="inv-tab ${tabActivo === 'depuracion' ? 'active' : ''}" onclick="window._invTabActivo='depuracion'; renderInventoryView(document.getElementById('view-dashboard'))">
                    🗑️ Depuración
                </button>
                <button class="inv-tab ${tabActivo === 'adiciones' ? 'active' : ''}" onclick="window._invTabActivo='adiciones'; renderInventoryView(document.getElementById('view-dashboard'))">
                    🆕 Adiciones
                </button>
            </div>

            <div class="inv-search-bar">
                <input type="text" id="inv-search" class="providers-search-input" placeholder="🔍  Buscar ítem por nombre, ID o área...">
                <span class="inv-results-count">${catItemCount} ítems en ${areas.length} áreas</span>
            </div>

            <div class="inv-areas-container" id="inv-areas-container">
                ${areas.length === 0 ? `
                    <div class="inv-empty">
                        <div class="inv-empty-icon">📭</div>
                        <p>No hay registros en esta categoría para ${sede.nombre}</p>
                    </div>
                ` : `
                    <div class="inv-grid" id="inv-grid">
                        ${areas.map((area, areaIdx) => {
                            const totalQty = area.items.reduce((s, it) => s + (it.cantidad || 0), 0);
                            return `
                            <div class="inv-grid-card" data-area="${area.area.toLowerCase()}" data-idx="${areaIdx}" onclick="window.toggleAreaDetail('${sedeActiva}','${tabActivo}',${areaIdx}, this)">
                                <div class="inv-grid-card-top">
                                    ${area.codigoArea ? '<span class="inv-grid-code">' + area.codigoArea + '</span>' : ''}
                                    <span class="inv-grid-items">${area.items.length} ítems</span>
                                </div>
                                <div class="inv-grid-card-name">${area.area}</div>
                                <div class="inv-grid-card-bottom">
                                    <span class="inv-grid-qty">${totalQty} uds.</span>
                                    ${area.responsable ? '<span class="inv-grid-resp">👤 ' + area.responsable + '</span>' : ''}
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                    <div class="inv-detail-panel" id="inv-detail-panel" style="display:none;"></div>
                `}
            </div>

            <div class="inv-footer-audit">
                <p>📌 <strong>Informe de Inventario de Activos Fijos</strong> — Unión Israelita de Beneficencia</p>
                <p>Generado para Revisoría Fiscal · Fecha de consulta: ${new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            </div>
        </div>
    `;

    const searchInput = document.getElementById('inv-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            let visibleCards = 0;
            document.querySelectorAll('.inv-grid-card').forEach(card => {
                const match = card.dataset.area.includes(term);
                card.style.display = match ? '' : 'none';
                if (match) visibleCards++;
            });
            const countEl = document.querySelector('.inv-results-count');
            if (countEl) countEl.textContent = term ? `${visibleCards} áreas encontradas` : `${catItemCount} ítems en ${areas.length} áreas`;
            // Si hay búsqueda, cerrar panel detalle
            if (term) {
                const panel = document.getElementById('inv-detail-panel');
                if (panel) panel.style.display = 'none';
                document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));
            }
        });
    }
}

// ─── Toggle detalle de área (grid cards) ───
window.toggleAreaDetail = (sedeKey, tab, areaIdx, cardEl) => {
    const panel = document.getElementById('inv-detail-panel');
    const wasActive = cardEl.classList.contains('active');

    // Desactivar todas las tarjetas
    document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));

    if (wasActive) {
        panel.style.display = 'none';
        return;
    }

    cardEl.classList.add('active');

    const sede = INVENTORY_DB[sedeKey];
    const area = sede[tab][areaIdx];
    const tabActivo = tab;
    const totalQty = area.items.reduce((s, it) => s + (it.cantidad || 0), 0);

    panel.innerHTML = `
        <div class="inv-detail-header">
            <div class="inv-detail-info">
                ${area.codigoArea ? '<span class="inv-area-code">' + area.codigoArea + '</span>' : ''}
                <strong>${area.area}</strong>
                <span class="inv-area-badge">${area.items.length} ítems</span>
                <span class="inv-area-badge" style="background:#dcfce7;color:#16a34a;">${totalQty} uds.</span>
                ${area.responsable ? '<span class="inv-area-responsible">👤 ' + area.responsable + '</span>' : ''}
            </div>
            <div class="inv-detail-actions">
                <button class="inv-pdf-btn" onclick="event.stopPropagation(); window.exportAreaPDF('${sedeKey}','${tab}',${areaIdx})" title="Exportar PDF">📄 PDF</button>
                <button class="inv-detail-close" onclick="document.getElementById('inv-detail-panel').style.display='none'; document.querySelectorAll('.inv-grid-card.active').forEach(c=>c.classList.remove('active'))">✕</button>
            </div>
        </div>
        <div class="table-scroll">
            <table class="inv-table">
                <thead>
                    <tr>
                        <th style="width:100px;">ID</th>
                        <th style="width:120px;">Serial</th>
                        <th>Descripción del Activo</th>
                        <th style="width:60px;text-align:center;">Cant.</th>
                        <th style="width:90px;">Estado</th>
                        ${tabActivo === 'inventario' ? '<th style="width:100px;">Fecha Compra</th><th style="width:90px;">Act. Contable</th><th style="width:90px;">Act. No Contable</th><th>Observaciones</th>' : ''}
                        ${tabActivo === 'depuracion' ? '<th style="width:110px;">Fecha Retiro</th><th>Motivo</th>' : ''}
                        ${tabActivo === 'adiciones' ? '<th style="width:110px;">Fecha Compra</th><th>Proveedor</th><th style="width:120px;">Valor</th><th style="width:90px;">O.C.</th>' : ''}
                        <th style="width:70px;text-align:center;">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${area.items.map((item, itemIdx) => `
                        <tr class="inv-item-row">
                            <td><code class="inv-id">${item.id}</code></td>
                            <td><code class="inv-serial">${item.serial || '—'}</code></td>
                            <td><strong>${item.nombre}</strong></td>
                            <td style="text-align:center;">${item.cantidad}</td>
                            <td><span class="inv-estado inv-estado-${(item.estado || '').toLowerCase().replace(/\s+/g, '-')}">${item.estado}</span></td>
                            ${tabActivo === 'inventario' ? `<td>${item.fechaCompra || '—'}</td><td>${item.activoContable || '—'}</td><td>${item.activoNoContable || '—'}</td><td class="inv-obs">${item.observaciones || '—'}</td>` : ''}
                            ${tabActivo === 'depuracion' ? `<td>${item.fechaRetiro || '—'}</td><td>${item.motivo || '—'}</td>` : ''}
                            ${tabActivo === 'adiciones' ? `<td>${item.fechaCompra || '—'}</td><td>${item.proveedor || '—'}</td><td>${item.valor ? formatCOP(item.valor) : '—'}</td><td>${item.ordenCompra ? '<code>' + item.ordenCompra + '</code>' : '—'}</td>` : ''}
                            <td style="text-align:center;">
                                <button class="prov-btn-edit" onclick="window.openEditInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" title="Editar">✏️</button>
                                <button class="prov-btn-delete" onclick="window.deleteInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" title="Eliminar">🗑️</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// ─── Exportar Inventario a Excel ───
window.exportInventoryExcel = () => {
    if (typeof XLSX === 'undefined') {
        showToast('Error', 'La librería XLSX no está disponible.', 'error');
        return;
    }
    const wb = XLSX.utils.book_new();

    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];

        const invRows = [['ID', 'Serial', 'Área', 'Descripción del Activo', 'Cantidad', 'Estado', 'Fecha Compra', 'Activo Contable', 'Activo No Contable', 'Observaciones']];
        (sede.inventario || []).forEach(area => {
            area.items.forEach(item => {
                invRows.push([item.id, item.serial || '', area.area, item.nombre, item.cantidad, item.estado, item.fechaCompra || '', item.activoContable || '', item.activoNoContable || '', item.observaciones || '']);
            });
        });
        const wsInv = XLSX.utils.aoa_to_sheet(invRows);
        wsInv['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 25 }, { wch: 40 }, { wch: 8 }, { wch: 12 }, { wch: 14 }, { wch: 16 }, { wch: 18 }, { wch: 35 }];
        XLSX.utils.book_append_sheet(wb, wsInv, `${sedeKey} - Inventario`);

        if (sede.depuracion && sede.depuracion.length > 0) {
            const depRows = [['ID', 'Serial', 'Área', 'Descripción', 'Cantidad', 'Estado', 'Fecha Retiro', 'Motivo']];
            sede.depuracion.forEach(area => {
                area.items.forEach(item => {
                    depRows.push([item.id, item.serial || '', area.area, item.nombre, item.cantidad, item.estado, item.fechaRetiro || '', item.motivo || '']);
                });
            });
            const wsDep = XLSX.utils.aoa_to_sheet(depRows);
            wsDep['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 25 }, { wch: 40 }, { wch: 8 }, { wch: 14 }, { wch: 12 }, { wch: 35 }];
            XLSX.utils.book_append_sheet(wb, wsDep, `${sedeKey} - Depuración`);
        }

        if (sede.adiciones && sede.adiciones.length > 0) {
            const addRows = [['ID', 'Serial', 'Área', 'Descripción', 'Cantidad', 'Estado', 'Fecha Compra', 'Proveedor', 'Valor', 'O.C.']];
            sede.adiciones.forEach(area => {
                area.items.forEach(item => {
                    addRows.push([item.id, item.serial || '', area.area, item.nombre, item.cantidad, item.estado, item.fechaCompra || '', item.proveedor || '', item.valor || '', item.ordenCompra || '']);
                });
            });
            const wsAdd = XLSX.utils.aoa_to_sheet(addRows);
            wsAdd['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 20 }, { wch: 40 }, { wch: 8 }, { wch: 10 }, { wch: 12 }, { wch: 25 }, { wch: 14 }, { wch: 10 }];
            XLSX.utils.book_append_sheet(wb, wsAdd, `${sedeKey} - Adiciones`);
        }
    });

    XLSX.writeFile(wb, `Inventario_Activos_UIB_${new Date().toISOString().slice(0, 10)}.xlsx`);
    showToast('Excel generado', 'El inventario ha sido exportado exitosamente.', 'success');
};

// ─── Exportar PDF por Área (para firma del responsable) ───
window.exportAreaPDF = (sedeKey, tab, areaIdx) => {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) {
        showToast('Error', 'La librería jsPDF no está disponible.', 'error');
        return;
    }

    const sede = INVENTORY_DB[sedeKey];
    const area = sede[tab][areaIdx];
    if (!area) {
        showToast('Error', 'Área no encontrada.', 'error');
        return;
    }

    const doc = new jsPDF('l', 'mm', 'letter');
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 12;
    const contentW = pageW - margin * 2;
    const fechaHoy = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' });
    const tabLabels = { inventario: 'INVENTARIO ACTIVO', depuracion: 'DEPURACION', adiciones: 'ADICIONES' };

    // Nombres de sede sin emojis
    const sedeNombres = { CTH: 'Colegio Theodoro Herzl', ENC: 'Centro Infantil El Encuentro', UIB: 'UIB - Oficinas Administrativas' };
    const sedeNombre = sedeNombres[sedeKey] || sede.nombre;

    // ── Colores corporativos ──
    const azulOscuro = [12, 40, 80];
    const azulMedio = [12, 132, 255];
    const grisClaro = [241, 245, 249];
    const grisTexto = [51, 65, 85];

    // ── Encabezado ──
    doc.setFillColor(...azulOscuro);
    doc.rect(0, 0, pageW, 22, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('UNION ISRAELITA DE BENEFICENCIA', margin, 10);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Inventario de Activos Fijos - Revisoria Fiscal', margin, 16);
    doc.text(fechaHoy, pageW - margin, 16, { align: 'right' });

    // Linea decorativa
    doc.setFillColor(...azulMedio);
    doc.rect(0, 22, pageW, 1, 'F');

    // ── Info del area ──
    let y = 28;
    doc.setFillColor(...grisClaro);
    doc.roundedRect(margin, y, contentW, 16, 2, 2, 'F');

    doc.setTextColor(...azulOscuro);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(sedeNombre, margin + 4, y + 6);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grisTexto);
    const areaLabel = area.codigoArea ? '[' + area.codigoArea + '] ' + area.area : area.area;
    doc.text('Area: ' + areaLabel, margin + 4, y + 12);
    doc.text('Categoria: ' + (tabLabels[tab] || tab), pageW / 2 - 10, y + 12);
    if (area.responsable) {
        doc.text('Responsable: ' + area.responsable, pageW - margin - 4, y + 12, { align: 'right' });
    }

    y += 20;

    // ── Resumen rapido ──
    const totalItems = area.items.length;
    const totalUnidades = area.items.reduce((sum, it) => sum + (it.cantidad || 0), 0);

    doc.setFillColor(...azulMedio);
    doc.roundedRect(margin, y, 52, 8, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(totalItems + ' items  |  ' + totalUnidades + ' unidades', margin + 4, y + 5.5);

    y += 12;

    // ── Tabla de items ──
    let head, body, colStyles;

    if (tab === 'inventario') {
        head = [['#', 'Codigo', 'Serial', 'Descripcion del Activo', 'Cant.', 'Estado', 'F. Compra', 'Act. Contable', 'Act. No Contable', 'Observaciones']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            item.serial || '',
            item.nombre,
            String(item.cantidad),
            item.estado || 'Bueno',
            item.fechaCompra || '',
            item.activoContable || '',
            item.activoNoContable || '',
            item.observaciones || ''
        ]);
        colStyles = {
            0: { halign: 'center', cellWidth: 8 },
            1: { halign: 'center', cellWidth: 16, font: 'courier', fontSize: 5.5 },
            2: { cellWidth: 20, font: 'courier', fontSize: 5.5 },
            3: { cellWidth: 'auto' },
            4: { halign: 'center', cellWidth: 10 },
            5: { cellWidth: 13 },
            6: { cellWidth: 15, fontSize: 5.5 },
            7: { cellWidth: 14, fontSize: 5.5 },
            8: { cellWidth: 16, fontSize: 5.5 },
            9: { cellWidth: 20, fontSize: 5.5 }
        };
    } else if (tab === 'depuracion') {
        head = [['#', 'Codigo', 'Serial', 'Descripcion', 'Cant.', 'Estado', 'Fecha Retiro', 'Motivo']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            item.serial || '',
            item.nombre,
            String(item.cantidad),
            item.estado || '',
            item.fechaRetiro || '',
            item.motivo || ''
        ]);
        colStyles = {
            0: { halign: 'center', cellWidth: 10 },
            1: { halign: 'center', cellWidth: 18, font: 'courier', fontSize: 6 },
            2: { cellWidth: 20, font: 'courier', fontSize: 5.5 },
            3: { cellWidth: 'auto' },
            4: { halign: 'center', cellWidth: 11 }
        };
    } else {
        head = [['#', 'Codigo', 'Serial', 'Descripcion', 'Cant.', 'Fecha Compra', 'Proveedor', 'Valor']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            item.serial || '',
            item.nombre,
            String(item.cantidad),
            item.fechaCompra || '',
            item.proveedor || '',
            item.valor ? '$' + Number(item.valor).toLocaleString('es-CO') : ''
        ]);
        colStyles = {
            0: { halign: 'center', cellWidth: 10 },
            1: { halign: 'center', cellWidth: 18, font: 'courier', fontSize: 6 },
            2: { cellWidth: 20, font: 'courier', fontSize: 5.5 },
            3: { cellWidth: 'auto' },
            4: { halign: 'center', cellWidth: 11 }
        };
    }

    doc.autoTable({
        startY: y,
        head: head,
        body: body,
        margin: { left: margin, right: margin, bottom: 14 },
        styles: {
            fontSize: 6.5,
            cellPadding: 1.5,
            lineColor: [226, 232, 240],
            lineWidth: 0.2,
            textColor: grisTexto,
            font: 'helvetica',
            overflow: 'linebreak',
            minCellHeight: 5
        },
        headStyles: {
            fillColor: azulOscuro,
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 6.5,
            halign: 'center',
            cellPadding: 2
        },
        alternateRowStyles: {
            fillColor: [248, 250, 252]
        },
        columnStyles: colStyles,
        didDrawPage: (data) => {
            // Pie de pagina en cada pagina
            doc.setFillColor(...azulOscuro);
            doc.rect(0, pageH - 10, pageW, 10, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(6);
            doc.setFont('helvetica', 'normal');
            doc.text('Union Israelita de Beneficencia - Inventario de Activos Fijos', margin, pageH - 4);
            doc.text('Pagina ' + doc.internal.getCurrentPageInfo().pageNumber, pageW - margin, pageH - 4, { align: 'right' });
        }
    });

    // ── Seccion de firmas al final ──
    let finalY = doc.lastAutoTable.finalY + 10;

    // Verificar si hay espacio para la seccion de firma (~55mm)
    if (finalY + 55 > pageH - 14) {
        doc.addPage();
        finalY = 25;
        // Encabezado ligero en la nueva pagina
        doc.setFillColor(...azulOscuro);
        doc.rect(0, 0, pageW, 10, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'bold');
        doc.text(sedeNombre + ' - ' + area.area + ' (continuacion)', margin, 7);
        doc.setFillColor(...azulMedio);
        doc.rect(0, 10, pageW, 0.8, 'F');
    }

    // Linea separadora
    doc.setDrawColor(...azulMedio);
    doc.setLineWidth(0.4);
    doc.line(margin, finalY, pageW - margin, finalY);
    finalY += 6;

    // Titulo de la seccion
    doc.setTextColor(...azulOscuro);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('CONSTANCIA DE VERIFICACION Y CONFORMIDAD', pageW / 2, finalY, { align: 'center' });
    finalY += 6;

    // Texto de declaracion
    doc.setTextColor(...grisTexto);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    const declaracion = 'Certifico que he verificado el inventario de activos fijos correspondiente al area "' + area.area + '" ' + (area.codigoArea ? '(Codigo ' + area.codigoArea + ') ' : '') + 'de la sede ' + sedeNombre + ', el cual consta de ' + totalItems + ' items por un total de ' + totalUnidades + ' unidades. Los activos listados en este documento se encuentran bajo mi responsabilidad y custodia.';
    const splitText = doc.splitTextToSize(declaracion, contentW - 8);
    doc.text(splitText, margin + 4, finalY);
    finalY += splitText.length * 3.5 + 8;

    // Firma del responsable
    const firmaW = 75;
    const firmaX = (pageW - firmaW) / 2;

    doc.setDrawColor(...azulOscuro);
    doc.setLineWidth(0.3);
    doc.line(firmaX, finalY + 14, firmaX + firmaW, finalY + 14);

    doc.setTextColor(...azulOscuro);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(area.responsable || 'RESPONSABLE DEL AREA', pageW / 2, finalY + 19, { align: 'center' });

    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grisTexto);
    doc.text('Responsable del Area', pageW / 2, finalY + 23, { align: 'center' });
    doc.text('Firma y Cedula', pageW / 2, finalY + 27, { align: 'center' });

    finalY += 34;

    // Firma del auditor / revisor fiscal
    doc.setDrawColor(...azulOscuro);
    doc.line(firmaX, finalY, firmaX + firmaW, finalY);

    doc.setTextColor(...azulOscuro);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('REVISOR FISCAL / AUDITOR', pageW / 2, finalY + 5, { align: 'center' });

    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grisTexto);
    doc.text('Firma y Cedula', pageW / 2, finalY + 9, { align: 'center' });

    finalY += 14;

    // Fecha de verificacion
    doc.setTextColor(...grisTexto);
    doc.setFontSize(6.5);
    doc.text('Fecha de verificacion: _______ / _______ / _______', pageW / 2, finalY + 3, { align: 'center' });

    // ── Guardar PDF ──
    const fileName = `Inventario_${sedeKey}_${area.area.replace(/[^a-zA-Z0-9áéíóúñÁÉÍÓÚÑ ]/g, '').replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
    showToast('PDF generado', `Se descargó el inventario de "${area.area}" con espacio para firma.`, 'success');
};

// ─── CRUD de ítems de inventario ───
window.openInventoryItemForm = (sedeKey, tab, editAreaIdx = null, editItemIdx = null) => {
    const isEdit = editAreaIdx !== null && editItemIdx !== null;
    const sede = INVENTORY_DB[sedeKey];
    const areas = sede[tab] || [];
    const existingAreas = areas.map(a => a.area);

    let itemData = { id: '', nombre: '', cantidad: 1, estado: 'Bueno', serial: '', observaciones: '', fechaCompra: '', activoContable: '', activoNoContable: '' };
    let selectedArea = existingAreas[0] || '';

    if (isEdit) {
        itemData = { ...areas[editAreaIdx].items[editItemIdx] };
        selectedArea = areas[editAreaIdx].area;
    }

    // Función para calcular siguiente ID del área
    const getNextIdForArea = (areaName) => {
        const area = areas.find(a => a.area === areaName);
        if (!area || area.items.length === 0) return `${sedeKey.toUpperCase()}-001`;
        // Buscar el número más alto entre los IDs del área
        let maxNum = 0;
        area.items.forEach(item => {
            const match = item.id.match(/(\d+)$/);
            if (match) {
                const num = parseInt(match[1]);
                if (num > maxNum) maxNum = num;
            }
        });
        return `${sedeKey.toUpperCase()}-${String(maxNum + 1).padStart(3, '0')}`;
    };

    const autoId = isEdit ? itemData.id : getNextIdForArea(selectedArea);

    const tabLabels = { inventario: 'Inventario Activo', depuracion: 'Depuración', adiciones: 'Adiciones' };
    const tabIcons = { inventario: '📋', depuracion: '🗑️', adiciones: '🆕' };

    // Remover modal previo si existe
    const prev = document.getElementById('inv-modal-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.id = 'inv-modal-overlay';
    overlay.className = 'inv-modal-overlay';
    overlay.innerHTML = `
        <div class="inv-modal" onclick="event.stopPropagation()">
            <div class="inv-modal-header">
                <div class="inv-modal-header-left">
                    <div class="inv-modal-icon">${isEdit ? '✏️' : '📦'}</div>
                    <div>
                        <h2 class="inv-modal-title">${isEdit ? 'Editar Ítem' : 'Nuevo Ítem de Inventario'}</h2>
                        <p class="inv-modal-subtitle">${sede.nombre} · ${tabIcons[tab]} ${tabLabels[tab]}</p>
                    </div>
                </div>
                <button class="inv-modal-close" onclick="document.getElementById('inv-modal-overlay').remove()" title="Cerrar">&times;</button>
            </div>

            <div class="inv-modal-body">
                <div class="inv-modal-grid-2x2">
                    <!-- Fila 1, Col 1: Ubicación del Activo -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">📍</span> Ubicación del Activo
                        </div>
                        <div class="inv-modal-field">
                            <label>Área *</label>
                            <div class="inv-area-dropdown" id="inv-area-dropdown">
                                <div class="inv-area-dropdown-trigger" id="inv-area-trigger" onclick="document.getElementById('inv-area-dropdown').classList.toggle('open')">
                                    <span class="inv-area-dropdown-value" id="inv-area-value">${selectedArea || 'Seleccionar área...'}</span>
                                    <svg class="inv-area-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none"/></svg>
                                </div>
                                <div class="inv-area-dropdown-menu" id="inv-area-menu">
                                    <div class="inv-area-dropdown-search">
                                        <input type="text" id="inv-area-search" placeholder="Buscar área..." autocomplete="off">
                                    </div>
                                    <div class="inv-area-dropdown-list" id="inv-area-list">
                                        ${existingAreas.map(a => `<div class="inv-area-dropdown-item ${a === selectedArea ? 'selected' : ''}" data-value="${a}" onclick="window._selectInvArea(this)">${a}</div>`).join('')}
                                        <div class="inv-area-dropdown-item inv-area-new-opt" data-value="__new__" onclick="window._selectInvArea(this)">
                                            <span style="color:var(--primary);font-weight:700;">+ Nueva área...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="inv-area-select-value" value="${selectedArea}">
                            <input type="text" id="inv-area-new" class="inv-modal-input" placeholder="Nombre de la nueva área" style="display:none;margin-top:8px;">
                        </div>
                        <div class="inv-modal-field">
                            <label>ID del Activo</label>
                            <input type="text" id="inv-item-id" class="inv-modal-input inv-modal-input-id" value="${autoId}" placeholder="Auto-generado" ${!isEdit ? 'readonly' : ''}>
                            <span class="inv-id-hint">${!isEdit ? 'Se genera automáticamente al seleccionar área' : ''}</span>
                        </div>
                    </div>

                    <!-- Fila 1, Col 2: Información del Activo -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">📝</span> Información del Activo
                        </div>
                        <div class="inv-modal-field">
                            <label>Descripción del Activo *</label>
                            <input type="text" id="inv-item-nombre" class="inv-modal-input" value="${itemData.nombre}" placeholder="Ej: Escritorio ejecutivo en madera">
                        </div>
                        <div class="inv-modal-row inv-modal-row-3">
                            <div class="inv-modal-field">
                                <label>Cantidad</label>
                                <input type="number" id="inv-item-cantidad" class="inv-modal-input" value="${itemData.cantidad}" min="0">
                            </div>
                            <div class="inv-modal-field">
                                <label>Estado</label>
                                <select id="inv-item-estado" class="inv-modal-select">
                                    ${['Bueno', 'Regular', 'Malo', 'Nuevo', 'Dado de baja', 'Pendiente'].map(e => `<option value="${e}" ${e === itemData.estado ? 'selected' : ''}>${e}</option>`).join('')}
                                </select>
                            </div>
                            <div class="inv-modal-field">
                                <label>Fecha Compra</label>
                                <input type="month" id="inv-item-fecha-compra" class="inv-modal-input" value="${itemData.fechaCompra || ''}">
                            </div>
                        </div>
                        <div class="inv-modal-field" style="margin-top:4px;">
                            <label>Serial <span style="font-weight:400;color:var(--text-muted);text-transform:none;">(solo equipos tecnológicos)</span></label>
                            <input type="text" id="inv-item-serial" class="inv-modal-input inv-modal-input-serial" value="${itemData.serial || ''}" placeholder="Ej: SN-ABC123XYZ (dejar vacío si no aplica)">
                        </div>
                    </div>

                    <!-- Fila 2, Col 1: Información Contable -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">💰</span> Información Contable
                        </div>
                        <div class="inv-modal-row">
                            <div class="inv-modal-field">
                                <label>Activo Contable</label>
                                <input type="text" id="inv-item-activo-contable" class="inv-modal-input" value="${itemData.activoContable || ''}" placeholder="Ej: Sí / No / N/A">
                            </div>
                            <div class="inv-modal-field">
                                <label>Activo No Contable</label>
                                <input type="text" id="inv-item-activo-no-contable" class="inv-modal-input" value="${itemData.activoNoContable || ''}" placeholder="Ej: Sí / No / N/A">
                            </div>
                        </div>
                    </div>

                    <!-- Fila 2, Col 2: Notas -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">💬</span> Notas
                        </div>
                        <div class="inv-modal-field">
                            <textarea id="inv-item-obs" class="inv-modal-textarea" rows="3" placeholder="Observaciones adicionales...">${itemData.observaciones || ''}</textarea>
                        </div>
                    </div>
                </div>

                ${tab === 'depuracion' ? `
                <div class="inv-modal-section inv-modal-section-danger" style="margin-top:8px;">
                    <div class="inv-modal-section-title">
                        <span class="inv-modal-section-icon">⚠️</span> Información de Retiro
                    </div>
                    <div class="inv-modal-row">
                        <div class="inv-modal-field">
                            <label>Fecha de Retiro</label>
                            <input type="month" id="inv-item-fecha-retiro" class="inv-modal-input" value="${itemData.fechaRetiro || ''}">
                        </div>
                        <div class="inv-modal-field">
                            <label>Motivo del Retiro</label>
                            <input type="text" id="inv-item-motivo" class="inv-modal-input" value="${itemData.motivo || ''}" placeholder="Ej: Deterioro por uso">
                        </div>
                    </div>
                </div>` : ''}

                ${tab === 'adiciones' ? `
                <div class="inv-modal-section inv-modal-section-success" style="margin-top:8px;">
                    <div class="inv-modal-section-title">
                        <span class="inv-modal-section-icon">🛒</span> Información de Compra
                    </div>
                    <div class="inv-modal-row">
                        <div class="inv-modal-field">
                            <label>Proveedor</label>
                            <input type="text" id="inv-item-proveedor" class="inv-modal-input" value="${itemData.proveedor || ''}" placeholder="Nombre del proveedor">
                        </div>
                        <div class="inv-modal-field">
                            <label>Valor</label>
                            <input type="text" id="inv-item-valor" class="inv-modal-input" value="${itemData.valor || ''}" placeholder="$0" oninput="window.formatPriceInput && window.formatPriceInput(this)">
                        </div>
                    </div>
                    <div class="inv-modal-field">
                        <label>Orden de Compra</label>
                        <input type="text" id="inv-item-oc" class="inv-modal-input" value="${itemData.ordenCompra || ''}" placeholder="Ej: OC-001">
                    </div>
                </div>` : ''}
            </div>

            <div class="inv-modal-footer">
                <button class="inv-modal-btn-cancel" onclick="document.getElementById('inv-modal-overlay').remove()">Cancelar</button>
                <button class="inv-modal-btn-save" onclick="window.saveInventoryItem('${sedeKey}','${tab}',${isEdit ? editAreaIdx : 'null'},${isEdit ? editItemIdx : 'null'})">
                    ${isEdit ? '💾 Guardar Cambios' : '➕ Agregar Ítem'}
                </button>
            </div>
        </div>
    `;

    // Cerrar overlay al hacer clic fuera
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);

    // Forzar animación
    requestAnimationFrame(() => overlay.classList.add('visible'));

    // Setup del dropdown de área con búsqueda
    const searchInput = document.getElementById('inv-area-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase();
            document.querySelectorAll('#inv-area-list .inv-area-dropdown-item:not(.inv-area-new-opt)').forEach(item => {
                item.style.display = item.dataset.value.toLowerCase().includes(q) ? '' : 'none';
            });
        });
        // Focus search al abrir dropdown
        const trigger = document.getElementById('inv-area-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                setTimeout(() => searchInput.focus(), 50);
            });
        }
    }

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function closeDropdown(e) {
        const dd = document.getElementById('inv-area-dropdown');
        if (dd && !dd.contains(e.target)) {
            dd.classList.remove('open');
        }
        if (!document.getElementById('inv-modal-overlay')) {
            document.removeEventListener('click', closeDropdown);
        }
    });

    // Guardar contexto para auto-ID desde _selectInvArea
    window._invFormContext = { sedeKey, areas, isEdit };

    // Cerrar con Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('inv-modal-overlay');
            if (modal) modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
};

// Seleccionar área del dropdown custom
window._selectInvArea = (el) => {
    const val = el.dataset.value;
    const dropdown = document.getElementById('inv-area-dropdown');
    const valueSpan = document.getElementById('inv-area-value');
    const hiddenInput = document.getElementById('inv-area-select-value');
    const newInput = document.getElementById('inv-area-new');
    const idInput = document.getElementById('inv-item-id');

    if (val === '__new__') {
        valueSpan.textContent = '+ Nueva área...';
        hiddenInput.value = '__new__';
        newInput.style.display = '';
        newInput.focus();
        // Para nueva área, generar ID basado en el número más alto global
        if (idInput && window._invFormContext && !window._invFormContext.isEdit) {
            const ctx = window._invFormContext;
            let maxNum = 0;
            ctx.areas.forEach(a => {
                a.items.forEach(item => {
                    const match = item.id.match(/(\d+)$/);
                    if (match) { const num = parseInt(match[1]); if (num > maxNum) maxNum = num; }
                });
            });
            idInput.value = `${ctx.sedeKey.toUpperCase()}-${String(maxNum + 1).padStart(3, '0')}`;
        }
    } else {
        valueSpan.textContent = val;
        hiddenInput.value = val;
        newInput.style.display = 'none';
        // Auto-generar ID basado en el último del área seleccionada
        if (idInput && window._invFormContext && !window._invFormContext.isEdit) {
            const ctx = window._invFormContext;
            const area = ctx.areas.find(a => a.area === val);
            if (area && area.items.length > 0) {
                let maxNum = 0;
                area.items.forEach(item => {
                    const match = item.id.match(/(\d+)$/);
                    if (match) { const num = parseInt(match[1]); if (num > maxNum) maxNum = num; }
                });
                idInput.value = `${ctx.sedeKey.toUpperCase()}-${String(maxNum + 1).padStart(3, '0')}`;
            } else {
                idInput.value = `${ctx.sedeKey.toUpperCase()}-001`;
            }
        }
    }

    // Marcar seleccionado
    dropdown.querySelectorAll('.inv-area-dropdown-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    dropdown.classList.remove('open');
};

window.openEditInventoryItem = (sedeKey, tab, areaIdx, itemIdx) => {
    window.openInventoryItemForm(sedeKey, tab, areaIdx, itemIdx);
};

window.saveInventoryItem = (sedeKey, tab, editAreaIdx, editItemIdx) => {
    const nombre = document.getElementById('inv-item-nombre')?.value.trim();
    if (!nombre) { showToast('Error', 'La descripción del activo es obligatoria.', 'error'); return; }

    let areaName = document.getElementById('inv-area-select-value')?.value;
    if (areaName === '__new__') {
        areaName = document.getElementById('inv-area-new')?.value.trim();
        if (!areaName) { showToast('Error', 'Debes escribir el nombre de la nueva área.', 'error'); return; }
    }

    const sede = INVENTORY_DB[sedeKey];
    if (!sede[tab]) sede[tab] = [];

    const item = {
        id: document.getElementById('inv-item-id')?.value.trim() || `${sedeKey}-${tab.substring(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`,
        nombre: nombre,
        cantidad: parseInt(document.getElementById('inv-item-cantidad')?.value) || 0,
        estado: document.getElementById('inv-item-estado')?.value || 'Bueno',
        serial: document.getElementById('inv-item-serial')?.value.trim() || '',
        fechaCompra: document.getElementById('inv-item-fecha-compra')?.value || '',
        activoContable: document.getElementById('inv-item-activo-contable')?.value || '',
        activoNoContable: document.getElementById('inv-item-activo-no-contable')?.value || '',
        observaciones: document.getElementById('inv-item-obs')?.value || ''
    };

    if (tab === 'depuracion') {
        item.fechaRetiro = document.getElementById('inv-item-fecha-retiro')?.value || '';
        item.motivo = document.getElementById('inv-item-motivo')?.value || '';
    }
    if (tab === 'adiciones') {
        item.proveedor = document.getElementById('inv-item-proveedor')?.value || '';
        const valorEl = document.getElementById('inv-item-valor');
        item.valor = valorEl ? parseInt(valorEl.value.replace(/[^\d]/g, '')) || 0 : 0;
        item.ordenCompra = document.getElementById('inv-item-oc')?.value || '';
    }

    const isEdit = editAreaIdx !== null && editAreaIdx !== 'null';

    if (isEdit) {
        const oldArea = sede[tab][editAreaIdx];
        if (oldArea.area === areaName) {
            oldArea.items[editItemIdx] = item;
        } else {
            oldArea.items.splice(editItemIdx, 1);
            if (oldArea.items.length === 0) sede[tab].splice(editAreaIdx, 1);
            let targetArea = sede[tab].find(a => a.area === areaName);
            if (!targetArea) { targetArea = { area: areaName, items: [] }; sede[tab].push(targetArea); }
            targetArea.items.push(item);
        }
    } else {
        let targetArea = sede[tab].find(a => a.area === areaName);
        if (!targetArea) { targetArea = { area: areaName, items: [] }; sede[tab].push(targetArea); }
        targetArea.items.push(item);
    }

    saveInventory();
    showToast('Inventario', isEdit ? 'Ítem actualizado correctamente.' : 'Nuevo ítem agregado al inventario.', 'success');

    // Cerrar modal
    const modal = document.getElementById('inv-modal-overlay');
    if (modal) modal.remove();

    window._invSedeActiva = sedeKey;
    window._invTabActivo = tab;
    const viewTitle = document.getElementById('view-title');
    if (viewTitle) viewTitle.textContent = 'Inventario de Activos';
    renderInventoryView(document.getElementById('view-dashboard'));
};

window.deleteInventoryItem = (sedeKey, tab, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede[tab][areaIdx];
    const item = area.items[itemIdx];

    showConfirm(
        'Eliminar Ítem',
        `¿Eliminar <strong>${item.nombre}</strong> del inventario?<br><small>${item.id} · ${area.area}</small>`,
        () => {
            area.items.splice(itemIdx, 1);
            if (area.items.length === 0) sede[tab].splice(areaIdx, 1);
            saveInventory();
            showToast('Eliminado', 'Ítem eliminado del inventario.', 'success');
            renderInventoryView(document.getElementById('view-dashboard'));
        },
        'Eliminar',
        'danger'
    );
};

// ─── History View ───
function renderHistory(container) {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="form-header-main">
                <h2>Historial de Órdenes</h2>
                <p class="subtitle">Consulta todas las solicitudes de compra registradas.</p>
            </div>

            <div class="history-toolbar">
                <div class="history-search-bar" style="flex:1;">
                    <input type="text" id="history-search" class="providers-search-input" placeholder="🔍  Buscar por N° orden, proveedor, sede o fecha...">
                </div>
                <button class="btn-excel" onclick="window.exportToExcel()" title="Exportar a Excel">
                    📊 Exportar Excel
                </button>
            </div>

            <div class="history-filters">
                <button class="filter-chip active" data-filter="all">Todas</button>
                <button class="filter-chip" data-filter="pending">Pendientes de firma</button>
                <button class="filter-chip" data-filter="approved">Aprobadas</button>
                <button class="filter-chip" data-filter="sent">Por Pagar</button>
                <button class="filter-chip" data-filter="paid">Pagadas</button>
            </div>

            ${requests.length === 0 ? `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <p>No hay solicitudes registradas aún.</p>
                    <p class="empty-sub">Las solicitudes que crees aparecerán aquí.</p>
                </div>
            ` : `
                <div class="table-scroll">
                    <table class="history-table">
                        <thead>
                            <tr>
                                <th>N° Orden</th>
                                <th>Fecha</th>
                                <th>Proveedor</th>
                                <th>Sede</th>
                                <th>Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody id="history-tbody">
                            ${[...requests].reverse().map(r => `
                                <tr data-status="${r.status}" class="clickable" onclick="window.openOrderDetail('${r.id}')">
                                    <td><strong>${r.id}</strong></td>
                                    <td>${formatDate(r.date)}</td>
                                    <td>${r.provider}</td>
                                    <td>${r.sede || 'CTH'}</td>
                                    <td><strong>${formatCOP(r.total || 0)}</strong></td>
                                    <td>
                                        <span class="status-badge ${r.status}">${statusLabels[r.status] || r.status}</span>
                                        ${getPaymentIndicator(r)}
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `;

    // Filtros
    container.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filter = chip.dataset.filter;
            const rows = container.querySelectorAll('#history-tbody tr');
            rows.forEach(row => {
                if (filter === 'all' || row.dataset.status === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // Búsqueda
    const searchInput = container.querySelector('#history-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const rows = container.querySelectorAll('#history-tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
            // Reset filter chips
            container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            container.querySelector('[data-filter=all]')?.classList.add('active');
        });
    }
}

// ─── Open Order Detail ───
window.openOrderDetail = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) {
        showToast('Error', 'Orden no encontrada', 'error');
        return;
    }

    const viewTitle = document.getElementById('view-title');
    if (viewTitle) viewTitle.textContent = 'Detalle de Orden';

    const container = document.getElementById('view-dashboard');
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const statusLabel = statusLabels[request.status] || request.status;

    const itemsHTML = (request.items && request.items.length > 0) ? `
        <table class="detail-items-table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio Uni</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${request.items.map((item, i) => `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${item.desc || '—'}</td>
                        <td>${item.qty}</td>
                        <td>${formatCOP(item.price)}</td>
                        <td><strong>${formatCOP(item.total)}</strong></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    ` : '<p class="detail-no-items">No se registraron ítems detallados para esta orden.</p>';

    const sigSolHTML = request.signatureSolicitante
        ? `<img src="${request.signatureSolicitante}" alt="Firma Solicitante" class="sig-preview-img">`
        : '<p class="sig-empty">Sin firma</p>';
    const sigAproHTML = request.signatureAprobacion
        ? `<img src="${request.signatureAprobacion}" alt="Firma Aprobación" class="sig-preview-img">`
        : '<p class="sig-empty">Sin firma</p>';

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="order-header-official">
                <img src="assets/encabezado orden de compra.png" alt="Encabezado Orden de Compra" class="order-header-img">
            </div>

            <div class="detail-status-bar">
                <div class="detail-order-id">
                    <span class="detail-label">Orden</span>
                    <strong>${request.id}</strong>
                </div>
                <span class="status-badge large ${request.status}">${statusLabel}</span>
            </div>

            <div class="detail-grid">
                <div class="detail-section">
                    <h3 class="detail-section-title">📅 Información General</h3>
                    <div class="detail-fields">
                        <div class="detail-field"><span class="df-label">Fecha</span><span class="df-value">${formatDate(request.date)}</span></div>
                        <div class="detail-field"><span class="df-label">Sede</span><span class="df-value">${request.sede || 'CTH'}</span></div>
                        <div class="detail-field"><span class="df-label">Forma de pago</span><span class="df-value">${request.pago || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">% Pago</span><span class="df-value">${request.pagoPerc || '—'}</span></div>
                    </div>
                </div>

                <div class="detail-section">
                    <h3 class="detail-section-title">🏢 Proveedor</h3>
                    <div class="detail-fields">
                        <div class="detail-field"><span class="df-label">Nombre</span><span class="df-value">${request.provider}</span></div>
                        <div class="detail-field"><span class="df-label">NIT</span><span class="df-value">${request.nit || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Teléfono</span><span class="df-value">${request.tel || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Correo</span><span class="df-value">${request.email || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Contacto</span><span class="df-value">${request.contacto || '—'}</span></div>
                    </div>
                </div>

                <div class="detail-section">
                    <h3 class="detail-section-title">🚚 Envío</h3>
                    <div class="detail-fields">
                        <div class="detail-field"><span class="df-label">Sede envío</span><span class="df-value">${request.envioSede || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Ciudad</span><span class="df-value">${request.envioCiudad || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Dirección</span><span class="df-value">${request.dir || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Barrio</span><span class="df-value">${request.barrio || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Teléfono</span><span class="df-value">${request.envioTel || '—'}</span></div>
                        <div class="detail-field"><span class="df-label">Recibe</span><span class="df-value">${request.resp || '—'}</span></div>
                    </div>
                </div>
            </div>

            <div class="detail-section full-width">
                <h3 class="detail-section-title">📦 Ítems de la Compra</h3>
                <div class="table-scroll">${itemsHTML}</div>
            </div>

            <div class="detail-totals-row">
                <div class="detail-obs">
                    <h3 class="detail-section-title">📝 Observaciones</h3>
                    <p>${request.obs || 'Sin observaciones.'}</p>
                </div>
                <div class="detail-totals-panel">
                    <div class="dt-row"><span>Subtotal</span><strong>$ ${request.subtotal || '0'}</strong></div>
                    ${request.descuento ? `<div class="dt-row"><span>Descuento</span><strong>${request.descuento}</strong></div>` : ''}
                    <div class="dt-row"><span>Subt. - Desc.</span><strong>$ ${request.subtotalDesc || '0'}</strong></div>
                    <div class="dt-row"><span>IVA (19%)</span><strong>$ ${request.iva || '0'}</strong></div>
                    ${request.flete ? `<div class="dt-row"><span>Flete</span><strong>$ ${request.flete}</strong></div>` : ''}
                    ${request.otro ? `<div class="dt-row"><span>Otro</span><strong>$ ${request.otro}</strong></div>` : ''}
                    <div class="dt-row grand"><span>TOTAL</span><strong>$ ${request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '')}</strong></div>
                </div>
            </div>

            ${(request.quotations && request.quotations.length > 0) ? `
            <div class="detail-quote-link">
                <span class="dql-icon">📎</span>
                <a href="#" onclick="event.preventDefault(); window.previewQuotation('${request.id}')" class="dql-text">Ver cotización de soporte</a>
                <span class="dql-filename">${request.quotations[0].name}</span>
            </div>
            ` : ''}

            <div class="detail-signatures">
                <div class="detail-sig-block">
                    ${sigSolHTML}
                    <p class="signature-label">FIRMA SOLICITANTE</p>
                </div>
                <div class="detail-sig-block">
                    ${request.status === 'pending' ? `
                        <div class="signature-pad-wrap">
                            <canvas id="sig-canvas-approve" class="signature-canvas"></canvas>
                            <button type="button" class="sig-clear-btn" onclick="window.clearSignature('approve')" title="Limpiar firma">✕</button>
                            <div class="sig-placeholder" id="sig-placeholder-approve">Firme aquí para aprobar</div>
                        </div>
                    ` : sigAproHTML}
                    <p class="signature-label">FIRMA DE APROBACIÓN</p>
                </div>
            </div>

            ${(request.evidencias && request.evidencias.length > 0) ? `
            <div class="detail-section full-width" style="margin-top:20px;">
                <h3 class="detail-section-title">📸 Evidencias de Entrega</h3>
                <div class="evidence-gallery">
                    ${request.evidencias.map((ev, i) => `
                        <div class="evidence-thumb" onclick="window.previewEvidence('${request.id}', ${i})">
                            <img src="${ev.data}" alt="Evidencia ${i + 1}">
                            <span class="ev-label">${ev.name || 'Foto ' + (i + 1)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            <!-- Workflow de estados -->
            <div class="order-workflow">
                <h3 class="detail-section-title">📋 Estado del Proceso</h3>
                <div class="workflow-track">
                    <div class="workflow-step ${['pending','approved','sent','paid','voucher'].indexOf(request.status) >= 0 ? 'active' : ''}">
                        <div class="step-dot">1</div>
                        <span>Pendiente de firma</span>
                        ${request.date ? `<span class="step-date">${new Date(request.date).toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''}
                    </div>
                    <div class="workflow-line ${['approved','sent','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['approved','sent','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">2</div>
                        <span>Aprobada</span>
                        ${(request.approvedDate || (request.sentDate && ['sent','paid','voucher'].includes(request.status))) ? `<span class="step-date">${new Date(request.approvedDate || request.sentDate).toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''}
                    </div>
                    <div class="workflow-line ${['sent','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['sent','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">3</div>
                        <span>Enviada al Proveedor</span>
                        ${request.sentDate ? `<span class="step-date">${new Date(request.sentDate).toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''}
                    </div>
                    <div class="workflow-line ${['paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">4</div>
                        <span>Pagada</span>
                        ${request.paidDate ? `<span class="step-date">${new Date(request.paidDate).toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''}
                    </div>
                    <div class="workflow-line ${request.status === 'voucher' ? 'active' : ''}"></div>
                    <div class="workflow-step ${request.status === 'voucher' ? 'active' : ''}">
                        <div class="step-dot">5</div>
                        <span>Comprobante Enviado</span>
                        ${request.voucherDate ? `<span class="step-date">${new Date(request.voucherDate).toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''}
                    </div>
                </div>
            </div>

            ${(() => {
                // Generar payments si no existen (ordenes existentes)
                if (!request.payments) {
                    request.payments = buildPaymentPlan(request.pago, request.pagoPerc, parseFloat(String(request.total).replace(/[^0-9.-]/g,'')) || 0);
                }
                const payments = request.payments;
                const isMultiPay = payments.length > 1;
                const paidCount = payments.filter(p => p.paid).length;
                const showTracker = isMultiPay && ['sent','paid'].includes(request.status);

                if (!showTracker) return '';

                return `
            <div class="detail-section full-width payment-tracker-section">
                <h3 class="detail-section-title">💳 Control de Pagos</h3>
                <p class="payment-progress-text">${paidCount} de ${payments.length} pagos completados</p>
                <div class="payment-progress-bar">
                    <div class="payment-progress-fill" style="width: ${Math.round(paidCount / payments.length * 100)}%"></div>
                </div>
                <div class="payment-items">
                    ${payments.map((p, i) => `
                    <div class="payment-item ${p.paid ? 'payment-paid' : 'payment-pending'}">
                        <div class="payment-item-icon">${p.paid ? '✅' : '⏳'}</div>
                        <div class="payment-item-info">
                            <span class="payment-item-label">${p.label}</span>
                            <span class="payment-item-amount">${formatCOP(p.amount)}</span>
                            ${p.paid && p.date ? `<span class="payment-item-date">Pagado: ${new Date(p.date).toLocaleDateString('es-CO')}</span>` : '<span class="payment-item-date">Pendiente</span>'}
                        </div>
                        <div class="payment-item-action">
                            ${!p.paid && request.status === 'sent' && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `<button class="btn-mark-payment" onclick="window.markPartialPayment('${request.id}', ${i})">Marcar Pagado</button>` : ''}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>`;
            })()}

            <div class="form-actions-footer detail-actions">
                <button class="btn-secondary" onclick="document.querySelector('[data-view=dashboard]').click()">← Volver al Panel</button>

                ${request.status !== 'pending' ? `
                    <button class="btn-print" onclick="window.printOrder('${request.id}')">
                        🖨️ Imprimir
                    </button>
                    <button class="btn-pdf" onclick="window.generateOrderPDF('${request.id}')">
                        📄 Descargar PDF
                    </button>
                ` : ''}

                ${request.status === 'pending' ? `
                    <button class="btn-success" onclick="window.approveOrder('${request.id}')">
                        ✅ Aprobar Orden
                    </button>
                ` : ''}

                ${request.status === 'approved' ? `
                    <button class="btn-send-provider" onclick="window.sendToProvider('${request.id}')">
                        📧 Enviar
                    </button>
                ` : ''}

                ${request.status === 'sent' && (!request.payments || request.payments.length <= 1) && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
                    <button class="btn-status-next" onclick="window.changeOrderStatus('${request.id}', 'paid')">
                        💳 Marcar como Pagada
                    </button>
                ` : ''}

                ${request.status === 'paid' && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
                    <button class="btn-status-next" onclick="window.sendVoucherToProvider('${request.id}')">
                        📨 Enviar Comprobante
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    // Inicializar canvas de firma de aprobación si la orden está pendiente
    if (request.status === 'pending') {
        setTimeout(() => initSignaturePads(['approve']), 100);
    }
};

// ─── Delete Order ───
window.deleteOrder = (orderId) => {
    showConfirm(
        'Eliminar Orden',
        `¿Seguro que deseas eliminar la orden <strong>${orderId}</strong>?<br>Esta acción no se puede deshacer.`,
        () => {
            const idx = APP_STATE.requests.findIndex(r => r.id === orderId);
            if (idx === -1) return;
            APP_STATE.requests.splice(idx, 1);
            saveState();
            deleteOrderFromDB(orderId);
            showToast('Orden eliminada', 'La orden ' + orderId + ' fue eliminada', 'warning');
            const activeNav = document.querySelector('.nav-item.active');
            if (activeNav) activeNav.click();
        },
        'Eliminar',
        'danger'
    );
};

// ─── Preview Quotation ───
window.previewQuotation = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request || !request.quotations || !request.quotations.length) return;

    const q = request.quotations[0];
    const isImage = q.type && q.type.startsWith('image/');

    // Crear modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'quote-modal-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    overlay.innerHTML = `
        <div class="quote-modal">
            <div class="qm-header">
                <span>📎 ${q.name}</span>
                <button class="qm-close" onclick="this.closest('.quote-modal-overlay').remove()">✕</button>
            </div>
            <div class="qm-body">
                ${isImage
                    ? `<img src="${q.data}" alt="${q.name}" style="max-width:100%;max-height:75vh;border-radius:8px;">`
                    : `<iframe src="${q.data}" style="width:100%;height:75vh;border:none;border-radius:8px;"></iframe>`
                }
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
};

// ─── Approve Order ───
window.approveOrder = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    // Validar firma de aprobación
    const sigCanvas = document.getElementById('sig-canvas-approve');
    if (sigCanvas) {
        const ctx = sigCanvas.getContext('2d');
        const pixelData = ctx.getImageData(0, 0, sigCanvas.width, sigCanvas.height).data;
        let hasContent = false;
        for (let i = 3; i < pixelData.length; i += 4) {
            if (pixelData[i] > 0) { hasContent = true; break; }
        }
        if (!hasContent) {
            showToast('Firma requerida', 'Debe firmar para aprobar la orden', 'error');
            sigCanvas.scrollIntoView({ behavior: 'smooth', block: 'center' });
            sigCanvas.style.borderColor = '#ef4444';
            setTimeout(() => { sigCanvas.style.borderColor = ''; }, 3000);
            return;
        }
        request.signatureAprobacion = sigCanvas.toDataURL('image/png');
    }

    request.status = 'approved';
    request.approvedDate = new Date().toISOString();
    saveState();
    saveOrderToDB(request);
    showToast('¡Orden aprobada!', 'La orden ' + orderId + ' fue aprobada exitosamente', 'success');
    setTimeout(() => window.openOrderDetail(orderId), 400);
};

// ─── Change Order Status (workflow) ───
window.changeOrderStatus = (orderId, newStatus) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const statusNames = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const label = statusNames[newStatus] || newStatus;
    const totalStr = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');
    const extraInfo = newStatus === 'paid'
        ? `<br><span style="font-size:0.85rem;color:#64748b;">Monto total: <strong style="color:#0c84ff;">$ ${totalStr}</strong></span>`
        : '';

    showConfirm(
        'Cambiar Estado',
        `¿Cambiar la orden <strong>${orderId}</strong> a <strong>${label}</strong>?${extraInfo}`,
        () => {
            request.status = newStatus;
            if (newStatus === 'paid') request.paidDate = new Date().toISOString();
            saveState();
            saveOrderToDB(request);
            showToast('Estado actualizado', `Orden ${orderId} → ${label}`, 'success');
            setTimeout(() => window.openOrderDetail(orderId), 400);
        },
        'Confirmar',
        'info'
    );
};

// ─── Marcar pago parcial individual ───
window.markPartialPayment = (orderId, paymentIndex) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request || !request.payments) return;

    const payment = request.payments[paymentIndex];
    if (!payment || payment.paid) return;

    showConfirm(
        'Confirmar Pago',
        `¿Marcar <strong>${payment.label}</strong> como pagado?<br>Monto: <strong>${formatCOP(payment.amount)}</strong>`,
        () => {
            payment.paid = true;
            payment.date = new Date().toISOString();

            // Si todos los pagos están marcados → transicionar a Pagada
            const allPaid = request.payments.every(p => p.paid);
            if (allPaid) {
                request.status = 'paid';
                request.paidDate = new Date().toISOString();
                showToast('¡Orden pagada!', `Todos los pagos de ${orderId} completados`, 'success');
            } else {
                showToast('Pago registrado', `${payment.label} de ${orderId} marcado como pagado`, 'success');
            }

            saveState();
            saveOrderToDB(request);
            setTimeout(() => window.openOrderDetail(orderId), 400);
        },
        'Confirmar Pago',
        'info'
    );
};

// ─── Evidence Upload (fotos de entrega) ───
window.openEvidenceUpload = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const viewTitle = document.getElementById('view-title');
    if (viewTitle) viewTitle.textContent = 'Adjuntar Evidencia — ' + orderId;

    const container = document.getElementById('view-dashboard');
    const existingEvidences = request.evidencias || [];

    container.innerHTML = `
        <div class="card-form animate-in" style="max-width:800px;">
            <h2 class="prov-form-title">📸 Adjuntar Evidencia de Entrega</h2>
            <p class="subtitle">Orden: <strong>${orderId}</strong> — ${request.provider}</p>

            ${existingEvidences.length > 0 ? `
                <div class="evidence-existing">
                    <h3>Evidencias ya adjuntadas (${existingEvidences.length})</h3>
                    <div class="evidence-gallery">
                        ${existingEvidences.map((ev, i) => `
                            <div class="evidence-thumb">
                                <img src="${ev.data}" alt="Evidencia ${i + 1}">
                                <span class="ev-label">${ev.name}</span>
                                <button class="ev-delete" onclick="window.removeEvidence('${orderId}', ${i})" title="Eliminar">✕</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="evidence-upload-zone" id="ev-drop-zone">
                <div class="drop-zone" onclick="document.getElementById('ev-file-input').click()">
                    <span class="drop-icon">📷</span>
                    <p>Arrastra fotos o haz clic para seleccionar</p>
                    <p class="drop-hint">Puedes subir varias fotos a la vez</p>
                    <input type="file" hidden id="ev-file-input" accept="image/*" multiple onchange="window.handleEvidenceFiles(this.files, '${orderId}')">
                </div>
            </div>

            <div id="ev-preview-list" class="evidence-preview-list"></div>

            <div class="form-actions-footer" style="margin-top:24px;">
                <button class="btn-secondary" onclick="window.openOrderDetail('${orderId}')">← Volver a la Orden</button>
                <button class="btn-primary" id="btn-save-evidence" style="display:none;" onclick="window.saveEvidences('${orderId}')">
                    💾 Guardar Evidencias
                </button>
            </div>
        </div>
    `;
};

// Almacenar temporalmente las fotos nuevas
window._pendingEvidences = [];

window.handleEvidenceFiles = (files, orderId) => {
    if (!files || files.length === 0) return;

    const previewList = document.getElementById('ev-preview-list');
    const btnSave = document.getElementById('btn-save-evidence');

    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) {
            showToast('Archivo no válido', 'Solo se permiten imágenes', 'warning');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            window._pendingEvidences.push({
                name: file.name,
                type: file.type,
                data: e.target.result,
                date: new Date().toISOString()
            });

            // Mostrar preview
            const thumb = document.createElement('div');
            thumb.className = 'evidence-thumb new';
            thumb.innerHTML = `
                <img src="${e.target.result}" alt="${file.name}">
                <span class="ev-label">${file.name}</span>
            `;
            previewList.appendChild(thumb);

            if (btnSave) btnSave.style.display = '';
        };
        reader.readAsDataURL(file);
    });
};

window.saveEvidences = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    if (!request.evidencias) request.evidencias = [];
    request.evidencias.push(...window._pendingEvidences);
    window._pendingEvidences = [];

    saveState();
    saveOrderToDB(request);
    showToast('Evidencias guardadas', `${request.evidencias.length} foto(s) adjuntadas a ${orderId}`, 'success');
    setTimeout(() => window.openOrderDetail(orderId), 400);
};

window.removeEvidence = (orderId, index) => {
    showConfirm(
        'Eliminar Evidencia',
        '¿Seguro que deseas eliminar esta foto de evidencia?',
        () => {
            const request = APP_STATE.requests.find(r => r.id === orderId);
            if (!request || !request.evidencias) return;
            request.evidencias.splice(index, 1);
            saveState();
            saveOrderToDB(request);
            showToast('Evidencia eliminada', 'Foto removida correctamente', 'warning');
            window.openEvidenceUpload(orderId);
        },
        'Eliminar',
        'danger'
    );
};

window.previewEvidence = (orderId, index) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request || !request.evidencias || !request.evidencias[index]) return;

    const ev = request.evidencias[index];
    const overlay = document.createElement('div');
    overlay.className = 'quote-modal-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    overlay.innerHTML = `
        <div class="quote-modal">
            <div class="qm-header">
                <span>📸 ${ev.name} — ${orderId}</span>
                <button class="qm-close" onclick="this.closest('.quote-modal-overlay').remove()">✕</button>
            </div>
            <div class="qm-body">
                <img src="${ev.data}" alt="${ev.name}" style="max-width:100%;max-height:75vh;border-radius:8px;">
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
};

// ─── Evidence View (sección principal de evidencias) ───
function renderEvidenceView(container) {
    const requests = APP_STATE.requests;
    const withEvidence = requests.filter(r => r.evidencias && r.evidencias.length > 0);
    const needsEvidence = requests.filter(r => r.status === 'paid' && (!r.evidencias || r.evidencias.length === 0));

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="form-header-main">
                <h2>📸 Evidencias de Entrega</h2>
                <p class="subtitle">Adjunta fotos de recepción a satisfacción por número de orden.</p>
            </div>

            <div class="evidence-search-section">
                <div class="evidence-search-box">
                    <label>Buscar orden por número</label>
                    <div class="evidence-search-row">
                        <input type="text" id="ev-search-order" class="providers-search-input" placeholder="Ej: OC-001" style="flex:1;">
                        <button class="btn-primary" onclick="window.searchOrderForEvidence()">🔍 Buscar</button>
                    </div>
                </div>
                <div id="ev-search-result"></div>
            </div>

            ${needsEvidence.length > 0 ? `
                <div class="evidence-pending-section" style="margin-top:28px;">
                    <h3>⚠️ Órdenes sin evidencia (${needsEvidence.length})</h3>
                    <div class="recent-list">
                        ${needsEvidence.map(r => `
                            <div class="recent-item clickable" onclick="window.openEvidenceUpload('${r.id}')">
                                <span class="ri-icon">📷</span>
                                <div class="ri-info">
                                    <div class="ri-title">${r.provider}</div>
                                    <div class="ri-desc">${(r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : 'Sin descripción'}</div>
                                    <div class="ri-meta">${r.id} · ${formatDate(r.date)}</div>
                                </div>
                                <span class="ri-amount ${r.status}">${formatCOP(r.total || 0)}</span>
                                <span class="ri-status ${r.status}">Pagada</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${withEvidence.length > 0 ? `
                <div class="evidence-completed-section" style="margin-top:28px;">
                    <h3>✅ Órdenes con evidencia (${withEvidence.length})</h3>
                    <div class="recent-list">
                        ${withEvidence.map(r => `
                            <div class="recent-item clickable" onclick="window.openOrderDetail('${r.id}')">
                                <span class="ri-icon">✅</span>
                                <div class="ri-info">
                                    <div class="ri-title">${r.provider}</div>
                                    <div class="ri-desc">${(r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : 'Sin descripción'}</div>
                                    <div class="ri-meta">${r.id} · ${r.evidencias.length} foto(s)</div>
                                </div>
                                <span class="ri-amount paid">${formatCOP(r.total || 0)}</span>
                                <span class="ri-status paid">Con evidencia</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${withEvidence.length === 0 && needsEvidence.length === 0 ? `
                <div class="empty-state" style="margin-top:40px;">
                    <div class="empty-icon">📷</div>
                    <p>No hay evidencias aún.</p>
                    <p class="empty-sub">Las evidencias aparecerán cuando las órdenes estén pagadas.</p>
                </div>
            ` : ''}
        </div>
    `;
}

window.searchOrderForEvidence = () => {
    const input = document.getElementById('ev-search-order');
    const resultDiv = document.getElementById('ev-search-result');
    if (!input || !resultDiv) return;

    const term = input.value.trim().toUpperCase();
    if (!term) {
        showToast('Campo vacío', 'Ingresa un número de orden', 'warning');
        input.focus();
        return;
    }

    const request = APP_STATE.requests.find(r => r.id.toUpperCase() === term);
    if (!request) {
        resultDiv.innerHTML = `
            <div class="ev-search-not-found">
                <p>❌ No se encontró la orden <strong>${term}</strong></p>
            </div>
        `;
        return;
    }

    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const evCount = (request.evidencias || []).length;

    resultDiv.innerHTML = `
        <div class="ev-search-found">
            <div class="ev-found-info">
                <strong>${request.id}</strong> — ${request.provider}
                <span class="status-badge ${request.status}">${statusLabels[request.status]}</span>
            </div>
            <div class="ev-found-meta">
                ${formatDate(request.date)} · ${formatCOP(request.total || 0)} · ${evCount} evidencia(s)
            </div>
            <div class="ev-found-actions">
                <button class="btn-evidence" onclick="window.openEvidenceUpload('${request.id}')">
                    📸 ${evCount > 0 ? 'Ver/Agregar Evidencias' : 'Adjuntar Evidencia'}
                </button>
                <button class="btn-secondary" onclick="window.openOrderDetail('${request.id}')">
                    👁️ Ver Orden
                </button>
            </div>
        </div>
    `;
};

// ─── Send to Provider (mailto) ───
window.sendToProvider = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const providerEmail = request.email || '';
    const providerName = request.provider || 'Proveedor';
    const total = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');

    // Construir línea de forma de pago con detalle de cuotas si existen
    let pagoLine = '';
    if (request.pago) {
        pagoLine = `• Forma de pago: ${request.pago}`;
        if (request.pagoPerc) pagoLine += ` (${request.pagoPerc})`;
        pagoLine += '\n';

        // Si hay plan de pagos con más de una cuota, detallar cada una
        if (request.payments && request.payments.length > 1) {
            request.payments.forEach(p => {
                const monto = formatCOP(p.amount).replace(/^\$\s*/, '');
                pagoLine += `  - ${p.label}: $ ${monto}\n`;
            });
        }
    }

    const subject = `Orden de Compra ${orderId} - ${providerName}`;
    const bodyText =
        `Estimado/a ${providerName},\n\n` +
        `Reciba un cordial saludo de parte de la Unión Israelita de Beneficencia.\n\n` +
        `Adjunto encontrará la Orden de Compra N° ${orderId} por un valor total de $ ${total}.\n\n` +
        `Por favor confirmar la recepción de este correo y la aceptación de la orden.\n\n` +
        `Condiciones de pago:\n` +
        pagoLine +
        `\n` +
        `Datos de facturación:\n` +
        `• Razón social: Unión Israelita De Beneficencia De Medellín\n` +
        `• NIT: 890.902.916-1\n` +
        `• Correos de facturación: buzonfacturaelectronica@uibmedellin.org y contabilidad@uibmedellin.org\n\n` +
        `Enviar: Factura, RUT del año actual y Certificación bancaria.\n` +
        `(Si ya envió esta documentación actualizada del año en curso, no es necesario enviarla nuevamente).\n\n` +
        `⚠️ Importante: Contabilidad recibe facturas únicamente hasta el día 25 de cada mes.\n\n` +
        `Quedamos atentos a cualquier inquietud.`;

    const ccEmails = 'analistacontable@theodoro.edu.co,contabilidad@uibmedellin.org';

    // Cambiar estado a 'sent' (Enviada)
    request.status = 'sent';
    request.sentDate = new Date().toISOString();
    saveState();
    saveOrderToDB(request);

    // Refrescar la vista de detalle de inmediato (sin esperar el PDF ni Gmail)
    window.openOrderDetail(orderId);

    // Descargar PDF
    showToast('📄 Descargando PDF...', 'Adjúntalo al correo que se abrirá', 'info');
    window.generateOrderPDF(orderId);

    // Abrir Gmail en paralelo tras un instante mínimo
    setTimeout(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(providerEmail)}` +
            `&cc=${encodeURIComponent(ccEmails)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(bodyText)}`;

        const emailWindow = window.open(gmailUrl, '_blank');

        if (!emailWindow || emailWindow.closed) {
            window.location.href = `mailto:${providerEmail}?cc=${encodeURIComponent(ccEmails)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        }

        showToast('📧 Correo abierto', `Se abrió Gmail. Adjunta el PDF y envíalo a ${providerName}`, 'success');
    }, 300);
};

// ─── Enviar Comprobante de Pago al Proveedor ───
window.sendVoucherToProvider = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const providerEmail = request.email || '';
    const providerName = request.provider || 'Proveedor';
    const total = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');

    const subject = `Comprobante de Pago — Orden ${orderId} · ${providerName}`;
    const bodyText =
        `Estimado/a ${providerName},\n\n` +
        `Nos complace informarle que el pago correspondiente a la Orden de Compra N° ${orderId} ` +
        `por un valor de $ ${total} ha sido procesado satisfactoriamente.\n\n` +
        `Adjunto encontrará el comprobante de pago emitido por nuestra entidad bancaria ` +
        `para su registro y confirmación.\n\n` +
        `Agradecemos su gestión y la confianza depositada en la Unión Israelita de Beneficencia.\n\n` +
        `Quedamos a su disposición para cualquier consulta.`;

    const ccEmails = 'analistacontable@theodoro.edu.co,contabilidad@uibmedellin.org';

    showConfirm(
        'Enviar Comprobante de Pago',
        `¿Confirmas que el pago de la orden <strong>${orderId}</strong> por <strong>$ ${total}</strong> ya fue realizado y deseas notificar al proveedor <strong>${providerName}</strong>?`,
        () => {
            // Cambiar estado a 'voucher' (Comprobante Enviado)
            request.status = 'voucher';
            request.voucherDate = new Date().toISOString();
            saveState();
            saveOrderToDB(request);

            // Abrir Gmail directamente (sin descargar PDF — ya se descargó al enviar la orden)
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1` +
                `&to=${encodeURIComponent(providerEmail)}` +
                `&cc=${encodeURIComponent(ccEmails)}` +
                `&su=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(bodyText)}`;

            const emailWindow = window.open(gmailUrl, '_blank');

            if (!emailWindow || emailWindow.closed) {
                window.location.href = `mailto:${providerEmail}?cc=${encodeURIComponent(ccEmails)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
            }

            showToast('📧 Gmail abierto', `Adjunta el comprobante bancario y envíalo a ${providerName}`, 'success');
            setTimeout(() => window.openOrderDetail(orderId), 500);
        },
        'Sí, enviar',
        'info'
    );
};

// ─── Generate PDF (html2canvas + jsPDF) ───
window.generateOrderPDF = async (orderId) => {
    const r = APP_STATE.requests.find(req => req.id === orderId);
    if (!r) { showToast('Error', 'Orden no encontrada', 'error'); return; }

    showToast('Generando PDF', 'Espera un momento...', 'info');

    // Convertir imagen encabezado a base64 para que html2canvas la capture
    let headerBase64 = '';
    try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = 'assets/encabezado orden de compra.png';
        });
        const cvs = document.createElement('canvas');
        cvs.width = img.naturalWidth;
        cvs.height = img.naturalHeight;
        cvs.getContext('2d').drawImage(img, 0, 0);
        headerBase64 = cvs.toDataURL('image/png');
    } catch (e) { console.warn('No se pudo cargar encabezado', e); }

    // Construir ítems
    const itemsRows = (r.items && r.items.length > 0)
        ? r.items.map((item, i) => `
            <tr>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:11px;">${i + 1}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:11px;">${item.desc || '—'}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:11px;">${item.qty}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:11px;">${formatCOP(item.price)}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:11px;font-weight:600;">${formatCOP(item.total)}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="5" style="padding:12px;text-align:center;color:#94a3b8;font-size:11px;">Sin ítems registrados</td></tr>';

    // Firmas
    const sigSolHTML = r.signatureSolicitante
        ? `<img src="${r.signatureSolicitante}" style="height:70px;display:block;margin:0 auto 4px;">`
        : '<div style="height:70px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';
    const sigAproHTML = r.signatureAprobacion
        ? `<img src="${r.signatureAprobacion}" style="height:70px;display:block;margin:0 auto 4px;">`
        : '<div style="height:70px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';

    // Totales
    let totalesRows = `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Subtotal</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.subtotal || '0'}</td></tr>`;
    if (r.descuento) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Descuento</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">${r.descuento}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Subt. - Desc.</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.subtotalDesc || '0'}</td></tr>
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">IVA (19%)</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.iva || '0'}</td></tr>`;
    if (r.flete) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Flete</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.flete}</td></tr>`;
    if (r.otro) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Otro</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.otro}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:6px 8px;font-size:12px;font-weight:700;border-top:2px solid #1e293b;">TOTAL</td><td style="padding:6px 8px;text-align:right;font-size:14px;font-weight:700;color:#0c84ff;border-top:2px solid #1e293b;">$ ${r.totalFmt || formatCOP(r.total).replace(/^\$\s*/, '')}</td></tr>`;

    // Crear el contenedor PDF (HTML limpio, solo estilos inline, sin CSS externo)
    const pdfDiv = document.createElement('div');
    pdfDiv.id = 'pdf-render-container';
    pdfDiv.style.cssText = 'position:fixed;left:-9999px;top:0;width:800px;background:#ffffff;color:#1e293b;font-family:Helvetica,Arial,sans-serif;padding:25px 30px;box-sizing:border-box;z-index:99999;';

    pdfDiv.innerHTML = `
        <!-- Encabezado -->
        ${headerBase64 ? `<img src="${headerBase64}" style="width:100%;margin-bottom:10px;">` : ''}

        <!-- Número de Orden -->
        <div style="text-align:center;margin-bottom:14px;padding:8px 0;border-bottom:2px solid #1e293b;">
            <span style="font-size:16px;font-weight:800;color:#1e293b;letter-spacing:1.5px;">ORDEN DE COMPRA N° ${r.id}</span>
        </div>

        <!-- 3 columnas: Info General | Proveedor | Envío -->
        <table style="width:100%;border-collapse:collapse;margin-bottom:14px;">
            <tr>
                <td style="width:33%;vertical-align:top;padding:10px;background:#f1f5f9;border:1px solid #d1d5db;border-radius:6px 0 0 6px;">
                    <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📅 Información General</div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Fecha</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${formatDate(r.date)}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Sede</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.sede || 'CTH'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Forma de pago</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.pago || '—'}</span></div>
                    <div><span style="font-size:10px;color:#64748b;">% Pago</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.pagoPerc || '—'}</span></div>
                </td>
                <td style="width:33%;vertical-align:top;padding:10px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;">
                    <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">🏢 Proveedor</div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Nombre</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.provider}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">NIT</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.nit || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Teléfono</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.tel || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Correo</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.email || '—'}</span></div>
                    <div><span style="font-size:10px;color:#64748b;">Contacto</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.contacto || '—'}</span></div>
                </td>
                <td style="width:33%;vertical-align:top;padding:10px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;border-radius:0 6px 6px 0;">
                    <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">🚚 Envío</div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Sede envío</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioSede || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Ciudad</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioCiudad || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Dirección</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.dir || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Barrio</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.barrio || '—'}</span></div>
                    <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Teléfono</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioTel || '—'}</span></div>
                    <div><span style="font-size:10px;color:#64748b;">Recibe</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.resp || '—'}</span></div>
                </td>
            </tr>
        </table>

        <!-- Ítems -->
        <div style="margin-bottom:14px;">
            <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📦 Ítems de la Compra</div>
            <table style="width:100%;border-collapse:collapse;">
                <thead>
                    <tr style="background:#1e293b;">
                        <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:center;font-weight:600;">N°</th>
                        <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:left;font-weight:600;">Descripción</th>
                        <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:center;font-weight:600;">Cant.</th>
                        <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:right;font-weight:600;">P. Unitario</th>
                        <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:right;font-weight:600;">Total</th>
                    </tr>
                </thead>
                <tbody>${itemsRows}</tbody>
            </table>
        </div>

        <!-- Observaciones + Totales -->
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr>
                <td style="width:55%;vertical-align:top;padding:10px;background:#f1f5f9;border:1px solid #d1d5db;border-radius:6px 0 0 6px;">
                    <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:6px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📝 Observaciones</div>
                    <p style="font-size:11px;color:#334155;margin:0;line-height:1.5;">${r.obs || 'Sin observaciones.'}</p>
                </td>
                <td style="width:45%;vertical-align:top;padding:10px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;border-radius:0 6px 6px 0;">
                    <table style="width:100%;border-collapse:collapse;">${totalesRows}</table>
                </td>
            </tr>
        </table>

        <!-- Firmas -->
        <table style="width:100%;border-collapse:collapse;">
            <tr>
                <td style="width:50%;text-align:center;padding:10px 20px;vertical-align:bottom;">
                    ${sigSolHTML}
                    <div style="border-top:2px solid #1e293b;padding-top:6px;font-size:11px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma Solicitante</div>
                </td>
                <td style="width:50%;text-align:center;padding:10px 20px;vertical-align:bottom;">
                    ${sigAproHTML}
                    <div style="border-top:2px solid #1e293b;padding-top:6px;font-size:11px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma de Aprobación</div>
                </td>
            </tr>
        </table>

        <!-- Footer contacto -->
        <div style="margin-top:24px;padding-top:12px;text-align:center;">
            <p style="font-size:11px;font-weight:700;font-style:italic;color:#334155;margin:0 0 6px;">Si tiene preguntas sobre esta factura, póngase en contacto con</p>
            <p style="font-size:10px;color:#334155;margin:0 0 3px;"><strong style="color:#1e293b;">Pagos:</strong> analistatesoreria@uibmedellin.org - Tel (604) 5609754 Ext 7200</p>
            <p style="font-size:10px;color:#334155;margin:0 0 3px;"><strong style="color:#1e293b;">Recepción de documentos:</strong> buzonfacturaelectronica@uibmedellin.org - Tel (604) 5609754 Ext 7209</p>
            <p style="font-size:10px;color:#334155;margin:0;"><strong style="color:#1e293b;">Compras:</strong> analistafinanciera@uibmedellin.org - Tel (604) 3220180 Ext 7114</p>
        </div>

        <!-- Mensaje de agradecimiento -->
        <div style="margin-top:16px;padding:12px 20px;background:linear-gradient(135deg,#f0f7ff,#e8f4f8);border:1px solid #bdd8f1;border-radius:6px;text-align:center;">
            <p style="font-size:11px;font-weight:700;color:#1e3a5f;margin:0 0 4px;letter-spacing:0.5px;">Gracias por ser parte de nuestra red de proveedores.</p>
            <p style="font-size:10px;color:#3b6b8a;margin:0 0 2px;line-height:1.5;">En la Unión Israelita de Beneficencia valoramos su confianza y compromiso.</p>
            <p style="font-size:10px;color:#3b6b8a;margin:0;line-height:1.5;">Trabajamos juntos para construir relaciones comerciales sólidas, transparentes y de largo plazo.</p>
        </div>
    `;

    document.body.appendChild(pdfDiv);

    try {
        // Esperar a que las imágenes carguen
        await new Promise(res => setTimeout(res, 300));

        const canvas = await html2canvas(pdfDiv, {
            scale: 2.5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 800,
            windowWidth: 800
        });

        document.body.removeChild(pdfDiv);

        const jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
        if (!jsPDFClass) throw new Error('La librería jsPDF no se cargó.');

        const pdf = new jsPDFClass('p', 'mm', 'letter');
        const pageW = 215.9;
        const pageH = 279.4;
        const margin = 8;
        const usableW = pageW - margin * 2;
        const usableH = pageH - margin * 2;

        const imgRatio = canvas.height / canvas.width;
        let imgW = usableW;
        let imgH = imgW * imgRatio;

        if (imgH > usableH) {
            imgH = usableH;
            imgW = imgH / imgRatio;
        }

        const offsetX = margin + (usableW - imgW) / 2;
        const offsetY = margin;

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        pdf.addImage(imgData, 'JPEG', offsetX, offsetY, imgW, imgH);
        pdf.save(r.id + '_Orden_de_Compra.pdf');
        showToast('PDF descargado', r.id + '_Orden_de_Compra.pdf', 'success');

    } catch (err) {
        console.error('Error generando PDF:', err);
        if (document.getElementById('pdf-render-container')) {
            document.body.removeChild(pdfDiv);
        }
        showToast('Error', 'No se pudo generar el PDF: ' + err.message, 'error');
    }
};

// ─── Exportar a Excel ───
window.exportToExcel = () => {
    const requests = APP_STATE.requests;
    if (requests.length === 0) {
        showToast('Sin datos', 'No hay órdenes para exportar.', 'warning');
        return;
    }

    try {
        const excelStatusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', paid: 'Pagada', voucher: 'Comprobante Enviado' };
        const data = requests.map(r => ({
            'N° Orden': r.id,
            'Fecha': formatDate(r.date),
            'Estado': excelStatusLabels[r.status] || r.status,
            'Proveedor': r.provider || '',
            'NIT': r.nit || '',
            'Teléfono Proveedor': r.tel || '',
            'Email Proveedor': r.email || '',
            'Contacto': r.contacto || '',
            'Sede': r.sede || '',
            'Sede Envío': r.envioSede || '',
            'Ciudad': r.envioCiudad || '',
            'Dirección': r.dir || '',
            'Forma de Pago': r.pago || '',
            'Subtotal': r.subtotal || 0,
            'IVA': r.iva || 0,
            'Total': r.total || 0,
            'Observaciones': r.obs || '',
            'Ítems': (r.items || []).map(it => `${it.desc} x${it.qty}`).join(' | ')
        }));

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);

        // Auto-ajustar ancho de columnas
        const colWidths = Object.keys(data[0]).map(key => ({
            wch: Math.max(key.length, ...data.map(row => String(row[key] || '').length)).toString().length + 5
        }));
        ws['!cols'] = colWidths;

        XLSX.utils.book_append_sheet(wb, ws, 'Órdenes de Compra');
        XLSX.writeFile(wb, `Contabilidad_UIB_${new Date().toISOString().slice(0, 10)}.xlsx`);
        showToast('Excel descargado', `${requests.length} órdenes exportadas correctamente.`, 'success');
    } catch (err) {
        console.error('Error exportando a Excel:', err);
        showToast('Error', 'No se pudo exportar: ' + err.message, 'error');
    }
};

// ─── Impresión directa (idéntica al PDF) ───
window.printOrder = (orderId) => {
    const r = APP_STATE.requests.find(req => req.id === orderId);
    if (!r) return;

    // Construir ítems — MISMO formato que el PDF
    const itemsRows = (r.items && r.items.length > 0)
        ? r.items.map((item, i) => `
            <tr>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:11px;">${i + 1}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:11px;">${item.desc || '—'}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:11px;">${item.qty}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:11px;">${formatCOP(item.price)}</td>
                <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:11px;font-weight:600;">${formatCOP(item.total)}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="5" style="padding:12px;text-align:center;color:#94a3b8;font-size:11px;">Sin ítems registrados</td></tr>';

    // Firmas
    const sigSolHTML = r.signatureSolicitante
        ? `<img src="${r.signatureSolicitante}" style="height:70px;display:block;margin:0 auto 4px;">`
        : '<div style="height:70px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';
    const sigAproHTML = r.signatureAprobacion
        ? `<img src="${r.signatureAprobacion}" style="height:70px;display:block;margin:0 auto 4px;">`
        : '<div style="height:70px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';

    // Totales
    let totalesRows = `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Subtotal</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.subtotal || '0'}</td></tr>`;
    if (r.descuento) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Descuento</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">${r.descuento}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Subt. - Desc.</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.subtotalDesc || '0'}</td></tr>
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">IVA (19%)</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.iva || '0'}</td></tr>`;
    if (r.flete) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Flete</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.flete}</td></tr>`;
    if (r.otro) totalesRows += `
        <tr><td style="padding:4px 8px;font-size:11px;color:#64748b;">Otro</td><td style="padding:4px 8px;text-align:right;font-size:11px;font-weight:600;">$ ${r.otro}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:6px 8px;font-size:12px;font-weight:700;border-top:2px solid #1e293b;">TOTAL</td><td style="padding:6px 8px;text-align:right;font-size:14px;font-weight:700;color:#0c84ff;border-top:2px solid #1e293b;">$ ${r.totalFmt || formatCOP(r.total).replace(/^\$\s*/, '')}</td></tr>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${r.id} — Orden de Compra</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                @page {
                    size: letter portrait;
                    margin: 0;
                }
                html, body {
                    width: 100%;
                    height: 100%;
                    background: #fff;
                }
                body {
                    font-family: Helvetica, Arial, sans-serif;
                    color: #1e293b;
                }
                .print-page {
                    width: 800px;
                    padding: 22px 28px;
                    margin: 0 auto;
                    background: #fff;
                    transform-origin: top center;
                }
                @media print {
                    .print-page {
                        width: 800px;
                        padding: 18px 26px;
                        transform: scale(0.99);
                        transform-origin: top center;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-page">
                <!-- Encabezado -->
                <img src="${window.location.origin}/assets/encabezado orden de compra.png" style="width:100%;margin-bottom:8px;">

                <!-- Número de Orden -->
                <div style="text-align:center;margin-bottom:12px;padding:7px 0;border-bottom:2px solid #1e293b;">
                    <span style="font-size:16px;font-weight:800;color:#1e293b;letter-spacing:1.5px;">ORDEN DE COMPRA N° ${r.id}</span>
                </div>

                <!-- 3 columnas: Info General | Proveedor | Envío -->
                <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
                    <tr>
                        <td style="width:33%;vertical-align:top;padding:9px;background:#f1f5f9;border:1px solid #d1d5db;border-radius:6px 0 0 6px;">
                            <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📅 Información General</div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Fecha</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${formatDate(r.date)}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Sede</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.sede || 'CTH'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Forma de pago</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.pago || '—'}</span></div>
                            <div><span style="font-size:10px;color:#64748b;">% Pago</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.pagoPerc || '—'}</span></div>
                        </td>
                        <td style="width:33%;vertical-align:top;padding:9px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;">
                            <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">🏢 Proveedor</div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Nombre</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.provider}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">NIT</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.nit || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Teléfono</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.tel || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Correo</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.email || '—'}</span></div>
                            <div><span style="font-size:10px;color:#64748b;">Contacto</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.contacto || '—'}</span></div>
                        </td>
                        <td style="width:33%;vertical-align:top;padding:9px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;border-radius:0 6px 6px 0;">
                            <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">🚚 Envío</div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Sede envío</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioSede || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Ciudad</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioCiudad || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Dirección</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.dir || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Barrio</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.barrio || '—'}</span></div>
                            <div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Teléfono</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.envioTel || '—'}</span></div>
                            <div><span style="font-size:10px;color:#64748b;">Recibe</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.resp || '—'}</span></div>
                        </td>
                    </tr>
                </table>

                <!-- Ítems -->
                <div style="margin-bottom:12px;">
                    <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:7px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📦 Ítems de la Compra</div>
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr style="background:#1e293b;">
                                <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:center;font-weight:600;">N°</th>
                                <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:left;font-weight:600;">Descripción</th>
                                <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:center;font-weight:600;">Cant.</th>
                                <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:right;font-weight:600;">P. Unitario</th>
                                <th style="padding:7px 8px;color:#ffffff;font-size:10px;text-transform:uppercase;text-align:right;font-weight:600;">Total</th>
                            </tr>
                        </thead>
                        <tbody>${itemsRows}</tbody>
                    </table>
                </div>

                <!-- Observaciones + Totales -->
                <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                    <tr>
                        <td style="width:55%;vertical-align:top;padding:9px;background:#f1f5f9;border:1px solid #d1d5db;border-radius:6px 0 0 6px;">
                            <div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:6px;padding-bottom:5px;border-bottom:2px solid #3b82f6;">📝 Observaciones</div>
                            <p style="font-size:11px;color:#334155;margin:0;line-height:1.5;">${r.obs || 'Sin observaciones.'}</p>
                        </td>
                        <td style="width:45%;vertical-align:top;padding:9px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;border-radius:0 6px 6px 0;">
                            <table style="width:100%;border-collapse:collapse;">${totalesRows}</table>
                        </td>
                    </tr>
                </table>

                <!-- Firmas -->
                <table style="width:100%;border-collapse:collapse;">
                    <tr>
                        <td style="width:50%;text-align:center;padding:8px 20px;vertical-align:bottom;">
                            ${sigSolHTML}
                            <div style="border-top:2px solid #1e293b;padding-top:5px;font-size:11px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma Solicitante</div>
                        </td>
                        <td style="width:50%;text-align:center;padding:8px 20px;vertical-align:bottom;">
                            ${sigAproHTML}
                            <div style="border-top:2px solid #1e293b;padding-top:5px;font-size:11px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma de Aprobación</div>
                        </td>
                    </tr>
                </table>

                <!-- Footer contacto -->
                <div style="margin-top:18px;padding-top:10px;text-align:center;">
                    <p style="font-size:11px;font-weight:700;font-style:italic;color:#334155;margin:0 0 6px;">Si tiene preguntas sobre esta factura, póngase en contacto con</p>
                    <p style="font-size:10px;color:#334155;margin:0 0 3px;"><strong style="color:#1e293b;">Pagos:</strong> analistatesoreria@uibmedellin.org - Tel (604) 5609754 Ext 7200</p>
                    <p style="font-size:10px;color:#334155;margin:0 0 3px;"><strong style="color:#1e293b;">Recepción de documentos:</strong> buzonfacturaelectronica@uibmedellin.org - Tel (604) 5609754 Ext 7209</p>
                    <p style="font-size:10px;color:#334155;margin:0;"><strong style="color:#1e293b;">Compras:</strong> analistafinanciera@uibmedellin.org - Tel (604) 3220180 Ext 7114</p>
                </div>

                <!-- Mensaje de agradecimiento -->
                <div style="margin-top:14px;padding:10px 18px;background:linear-gradient(135deg,#f0f7ff,#e8f4f8);border:1px solid #bdd8f1;border-radius:6px;text-align:center;">
                    <p style="font-size:11px;font-weight:700;color:#1e3a5f;margin:0 0 4px;letter-spacing:0.5px;">Gracias por ser parte de nuestra red de proveedores.</p>
                    <p style="font-size:10px;color:#3b6b8a;margin:0 0 2px;line-height:1.5;">En la Unión Israelita de Beneficencia valoramos su confianza y compromiso.</p>
                    <p style="font-size:10px;color:#3b6b8a;margin:0;line-height:1.5;">Trabajamos juntos para construir relaciones comerciales sólidas, transparentes y de largo plazo.</p>
                </div>
            </div>

            <script>
                window.onload = function() {
                    // Escalar automáticamente para que quepa en 1 página carta
                    var page = document.querySelector('.print-page');
                    var pageHeight = 279.4 * 3.7795; // mm a px (letter height)
                    var contentHeight = page.scrollHeight;
                    if (contentHeight > pageHeight) {
                        var scale = (pageHeight - 40) / contentHeight;
                        page.style.transform = 'scale(' + scale + ')';
                        page.style.transformOrigin = 'top center';
                    }
                    setTimeout(function() { window.print(); }, 600);
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
};

// ─── PWA: Registrar Service Worker ───
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker registrado:', reg.scope))
            .catch(err => console.log('SW registro fallido:', err));
    });
}
