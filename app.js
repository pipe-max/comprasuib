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
const storage = firebase.storage();

// ─── Firebase Storage: subir/descargar archivos ───
async function uploadFileToStorage(path, base64Data) {
    try {
        const ref = storage.ref(path);
        // base64Data viene como "data:image/png;base64,xxxxx"
        await ref.putString(base64Data, 'data_url');
        const url = await ref.getDownloadURL();
        return url;
    } catch (err) {
        console.error('❌ Error subiendo archivo a Storage:', path, err.message);
        return null;
    }
}

async function deleteFileFromStorage(path) {
    try {
        await storage.ref(path).delete();
    } catch (err) {
        // Ignorar si no existe
        if (err.code !== 'storage/object-not-found') {
            console.warn('⚠️ Error eliminando de Storage:', path, err.message);
        }
    }
}

// Subir evidencias de una orden a Storage y reemplazar base64 por URL
async function uploadOrderEvidences(order) {
    if (!order.evidencias || order.evidencias.length === 0) return;
    let changed = false;
    for (let i = 0; i < order.evidencias.length; i++) {
        const ev = order.evidencias[i];
        // Solo subir si tiene data base64 (no si ya es URL de Storage)
        if (ev.data && ev.data.startsWith('data:')) {
            const path = `orders/${order.id}/evidencias/${i}_${Date.now()}_${(ev.name || 'foto').replace(/[^a-zA-Z0-9._-]/g, '_')}`;
            const url = await uploadFileToStorage(path, ev.data);
            if (url) {
                ev.storageUrl = url;
                ev.storagePath = path;
                delete ev.data; // Liberar base64 de memoria
                changed = true;
                console.log('☁️ Evidencia subida:', ev.name, '→', path);
            }
        }
    }
    if (changed) {
        saveState(); // Guardar estado con URLs en vez de base64
    }
}

// Subir cotizaciones de una orden a Storage
async function uploadOrderQuotations(order) {
    if (!order.quotations || order.quotations.length === 0) return;
    let changed = false;
    for (let i = 0; i < order.quotations.length; i++) {
        const q = order.quotations[i];
        if (q.data && q.data.startsWith('data:')) {
            const path = `orders/${order.id}/cotizaciones/${i}_${(q.name || 'cotizacion').replace(/[^a-zA-Z0-9._-]/g, '_')}`;
            const url = await uploadFileToStorage(path, q.data);
            if (url) {
                q.storageUrl = url;
                q.storagePath = path;
                delete q.data;
                changed = true;
                console.log('☁️ Cotización subida:', q.name, '→', path);
            }
        }
    }
    if (changed) {
        saveState();
    }
}

// Subir firmas de una orden a Storage
async function uploadOrderSignatures(order) {
    let changed = false;
    if (order.signatureSolicitante && order.signatureSolicitante.startsWith('data:')) {
        const path = `orders/${order.id}/firmas/solicitante.png`;
        const url = await uploadFileToStorage(path, order.signatureSolicitante);
        if (url) {
            order.signatureSolicitanteUrl = url;
            order.signatureSolicitantePath = path;
            // NO borrar base64 de memoria — se necesita para generar PDF sin problemas de CORS
            // Se excluye de Firestore/localStorage en stripHeavyData()
            changed = true;
        }
    }
    if (order.signatureAprobacion && order.signatureAprobacion.startsWith('data:')) {
        const path = `orders/${order.id}/firmas/aprobacion.png`;
        const url = await uploadFileToStorage(path, order.signatureAprobacion);
        if (url) {
            order.signatureAprobacionUrl = url;
            order.signatureAprobacionPath = path;
            // NO borrar base64 de memoria
            changed = true;
        }
    }
    if (changed) saveState();
}

// Subir TODOS los archivos pesados de una orden
async function uploadOrderFiles(order) {
    await uploadOrderEvidences(order);
    await uploadOrderQuotations(order);
    await uploadOrderSignatures(order);
}

// Subir archivos de proveedores a Storage
async function uploadProviderFiles(provider) {
    let changed = false;
    const id = providerDocId(provider.Nombre);
    if (provider.RUT && provider.RUT.startsWith('data:')) {
        const path = `providers/${id}/rut`;
        const url = await uploadFileToStorage(path, provider.RUT);
        if (url) {
            provider.RUT_url = url;
            provider.RUT_path = path;
            delete provider.RUT;
            changed = true;
        }
    }
    if (provider.CertBancaria && provider.CertBancaria.startsWith('data:')) {
        const path = `providers/${id}/cert_bancaria`;
        const url = await uploadFileToStorage(path, provider.CertBancaria);
        if (url) {
            provider.CertBancaria_url = url;
            provider.CertBancaria_path = path;
            delete provider.CertBancaria;
            changed = true;
        }
    }
    if (changed) {
        localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
    }
    return changed;
}

// Obtener data de un archivo (URL de Storage o base64 directo)
function getFileData(item, dataKey, urlKey) {
    if (item[dataKey] && item[dataKey].startsWith('data:')) return item[dataKey];
    if (item[urlKey]) return item[urlKey];
    if (item.storageUrl) return item.storageUrl;
    return null;
}

// ─── Migrar archivos base64 locales existentes a Firebase Storage ───
async function migrateLocalFilesToStorage() {
    let totalMigrated = 0;
    for (const order of APP_STATE.requests) {
        let orderChanged = false;

        // Evidencias
        if (order.evidencias) {
            for (const ev of order.evidencias) {
                if (ev.data && ev.data.startsWith('data:') && !ev.storageUrl) {
                    const path = `orders/${order.id}/evidencias/${Date.now()}_${(ev.name || 'foto').replace(/[^a-zA-Z0-9._-]/g, '_')}`;
                    const url = await uploadFileToStorage(path, ev.data);
                    if (url) {
                        ev.storageUrl = url;
                        ev.storagePath = path;
                        delete ev.data;
                        orderChanged = true;
                        totalMigrated++;
                    }
                }
            }
        }
        // Cotizaciones
        if (order.quotations) {
            for (const q of order.quotations) {
                if (q.data && q.data.startsWith('data:') && !q.storageUrl) {
                    const path = `orders/${order.id}/cotizaciones/${(q.name || 'cotizacion').replace(/[^a-zA-Z0-9._-]/g, '_')}`;
                    const url = await uploadFileToStorage(path, q.data);
                    if (url) {
                        q.storageUrl = url;
                        q.storagePath = path;
                        delete q.data;
                        orderChanged = true;
                        totalMigrated++;
                    }
                }
            }
        }
        // Firmas
        if (order.signatureSolicitante && order.signatureSolicitante.startsWith('data:') && !order.signatureSolicitanteUrl) {
            const path = `orders/${order.id}/firmas/solicitante.png`;
            const url = await uploadFileToStorage(path, order.signatureSolicitante);
            if (url) {
                order.signatureSolicitanteUrl = url;
                order.signatureSolicitantePath = path;
                // NO borrar base64 de memoria
                orderChanged = true;
                totalMigrated++;
            }
        }
        if (order.signatureAprobacion && order.signatureAprobacion.startsWith('data:') && !order.signatureAprobacionUrl) {
            const path = `orders/${order.id}/firmas/aprobacion.png`;
            const url = await uploadFileToStorage(path, order.signatureAprobacion);
            if (url) {
                order.signatureAprobacionUrl = url;
                order.signatureAprobacionPath = path;
                // NO borrar base64 de memoria
                orderChanged = true;
                totalMigrated++;
            }
        }

        if (orderChanged) {
            // Guardar la orden actualizada a Firestore, incluyendo base64 de firmas
            const cleanOrder = stripHeavyData(order);
            if (order.evidencias) cleanOrder.evidencias = order.evidencias.map(e => ({ name: e.name, storageUrl: e.storageUrl, storagePath: e.storagePath, date: e.date }));
            if (order.quotations) cleanOrder.quotations = order.quotations.map(q => ({ name: q.name, type: q.type, storageUrl: q.storageUrl, storagePath: q.storagePath }));
            if (order.signatureSolicitanteUrl) cleanOrder.signatureSolicitanteUrl = order.signatureSolicitanteUrl;
            if (order.signatureSolicitantePath) cleanOrder.signatureSolicitantePath = order.signatureSolicitantePath;
            if (order.signatureSolicitante && order.signatureSolicitante.startsWith('data:')) cleanOrder.signatureSolicitante = order.signatureSolicitante;
            if (order.signatureAprobacionUrl) cleanOrder.signatureAprobacionUrl = order.signatureAprobacionUrl;
            if (order.signatureAprobacionPath) cleanOrder.signatureAprobacionPath = order.signatureAprobacionPath;
            if (order.signatureAprobacion && order.signatureAprobacion.startsWith('data:')) cleanOrder.signatureAprobacion = order.signatureAprobacion;
            if (order.signatureAprobacionDigital) cleanOrder.signatureAprobacionDigital = order.signatureAprobacionDigital;
            db.collection('orders').doc(order.id).set(cleanOrder).catch(err => console.warn('Error actualizando orden migrada:', err));
        }
    }

    if (totalMigrated > 0) {
        saveState(); // Guardar en localStorage sin base64
        console.log(`☁️ Migración completada: ${totalMigrated} archivo(s) subidos a Firebase Storage`);
        showToast('☁️ Sincronización', `${totalMigrated} archivo(s) migrados a la nube`, 'success');
    }
}

// ─── Correos autorizados para acceder a la app ───
const ALLOWED_EMAILS = [
    'secretaria@theodoro.edu.co',
    'comunicaciones@theodoro.edu.co',
    'comunicaciones@uibmedellin.org',
    'gestionhumana@uibmedellin.org',
    'gestionhumana@theodoro.edu.co',
    'sistemagestion@theodoro.edu.co',
    'sistemas@theodoro.edu.co',
    'coordinaciontransporte@theodoro.edu.co',
    'mantenimiento@theodoro.edu.co',
    'soporte@theodoro.edu.co',
    'enfermeria@theodoro.edu.co',
    'camilo.correa@theodoro.edu.co',
    'deporteyextracurricular@theodoro.edu.co',
    'coordinacionpreescolar@theodoro.edu.co',
    'coordinacionbachillerato@theodoro.edu.co',
    'coordinacionprimaria@theodoro.edu.co',
    'administracion@theodoro.edu.co',
    'ricardo.alvarez@theodoro.edu.co',
    'secretaria@uibmedellin.org',
    'analistatesoreria@uibmedellin.org',
    'analistacontable@theodoro.edu.co',
    'pipe@theodoro.edu.co',
    'direccionadministrativa@uibmedellin.org',
    'rectoria@theodoro.edu.co',
    'gerencia@uibmedellin.org',
    'andresgonzalezcordoba@gmail.com'
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

// Correos autorizados para marcar pagos y enviar comprobantes
const PAYMENT_AUTHORIZED_EMAILS = [
    'secretaria@uibmedellin.org',
    'analistatesoreria@uibmedellin.org',
    'analistacontable@theodoro.edu.co',
    'pipe@theodoro.edu.co'
];

// Correos con acceso a secciones de Proveedores, Métricas e Inventario
const ADMIN_SECTION_EMAILS = [
    'direccionadministrativa@uibmedellin.org',
    'rectoria@theodoro.edu.co',
    'gerencia@uibmedellin.org',
    'secretaria@uibmedellin.org',
    'analistatesoreria@uibmedellin.org',
    'analistacontable@theodoro.edu.co',
    'pipe@theodoro.edu.co'
];

// Correos con acceso SOLO al módulo de Inventario (sin Proveedores ni Métricas)
const INVENTORY_ONLY_EMAILS = [
    'sistemas@theodoro.edu.co',
    'soporte@theodoro.edu.co'
];

// Correos con acceso a Inventario + Proveedores (sin Métricas)
const INVENTORY_PROVIDERS_EMAILS = [
    'mantenimiento@theodoro.edu.co'
];

// Correos autorizados para firmar aprobación de órdenes
const APPROVAL_AUTHORIZED_EMAILS = [
    'direccionadministrativa@uibmedellin.org',
    'rectoria@theodoro.edu.co',
    'gerencia@uibmedellin.org',
    'pipe@theodoro.edu.co'
];

// Firmas digitales (imagen) para correos que las tienen
const DIGITAL_SIGNATURES = {
    'direccionadministrativa@uibmedellin.org': { image: 'assets/andrea-toledo.png', name: 'Andrea Toledo — Dir. Administrativa' },
    'rectoria@theodoro.edu.co': { image: 'assets/nidia-londono.png', name: 'Nidia Londoño — Rectoría' }
};

// Correos que pueden usar CUALQUIER firma digital (administradores)
const APPROVAL_ADMIN_EMAILS = ['pipe@theodoro.edu.co'];

// Correos autorizados para ELIMINAR órdenes de compra
const DELETE_AUTHORIZED_EMAILS = [
    'pipe@theodoro.edu.co',
    'direccionadministrativa@uibmedellin.org',
    'gerencia@uibmedellin.org',
    'analistatesoreria@uibmedellin.org',
    'analistacontable@theodoro.edu.co',
    'analistafinanciera@uibmedellin.org'
];

// ─── Categorías de gasto ───
const CATEGORIAS_GASTO = [
    'Administrativo',
    'Académico',
    'Gestión Humana',
    'Mantenimiento',
    'Sistemas',
    'Comunicaciones'
];

// ─── Historial de auditoría ───
function addAuditEntry(request, action, detail = '') {
    if (!request.auditLog) request.auditLog = [];
    request.auditLog.push({
        date: new Date().toISOString(),
        user: APP_STATE.userEmail || 'Sistema',
        action,
        detail
    });
}

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
    // Las firmas SE CONSERVAN en Firestore (son pequeñas ~15-50KB, necesarias para PDF desde cualquier dispositivo)
    return light;
}

// ─── Firestore: guardar una orden ───
function saveOrderToDB(order) {
    // Primero subir archivos pesados a Storage en segundo plano
    uploadOrderFiles(order).then(() => {
        // Ahora guardar en Firestore sin base64 (solo URLs)
        const cleanOrder = stripHeavyData(order);
        // Preservar URLs de Storage en el doc de Firestore
        if (order.evidencias) {
            cleanOrder.evidencias = order.evidencias.map(e => ({
                name: e.name || 'Evidencia',
                storageUrl: e.storageUrl || null,
                storagePath: e.storagePath || null,
                date: e.date || null
            }));
        }
        if (order.quotations) {
            cleanOrder.quotations = order.quotations.map(q => ({
                name: q.name || 'Cotización',
                type: q.type || '',
                storageUrl: q.storageUrl || null,
                storagePath: q.storagePath || null
            }));
        }
        if (order.signatureSolicitanteUrl) cleanOrder.signatureSolicitanteUrl = order.signatureSolicitanteUrl;
        if (order.signatureSolicitantePath) cleanOrder.signatureSolicitantePath = order.signatureSolicitantePath;
        // Guardar base64 de firmas en Firestore para que el PDF funcione desde cualquier dispositivo
        if (order.signatureSolicitante && order.signatureSolicitante.startsWith('data:')) cleanOrder.signatureSolicitante = order.signatureSolicitante;
        if (order.signatureAprobacionUrl) cleanOrder.signatureAprobacionUrl = order.signatureAprobacionUrl;
        if (order.signatureAprobacionPath) cleanOrder.signatureAprobacionPath = order.signatureAprobacionPath;
        if (order.signatureAprobacion && order.signatureAprobacion.startsWith('data:')) cleanOrder.signatureAprobacion = order.signatureAprobacion;
        if (order.signatureAprobacionDigital) cleanOrder.signatureAprobacionDigital = order.signatureAprobacionDigital;

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
                console.warn('⚠️ Error guardando orden, reintentando light:', order.id, err.message);
                const lightOrder = stripHeavyData(cleanOrder);
                db.collection('orders').doc(order.id).set(lightOrder)
                    .then(() => {
                        _pendingOrderIds.delete(order.id);
                        console.log('✅ Orden guardada en Firestore (light):', order.id);
                    })
                    .catch(err2 => {
                        console.error('❌ Error definitivo guardando orden:', order.id, err2);
                    });
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
    // Guardar el ID en la lista de eliminados localmente (respaldo)
    try {
        const deleted = JSON.parse(localStorage.getItem('cth_deleted_orders') || '[]');
        if (!deleted.includes(orderId)) {
            deleted.push(orderId);
            localStorage.setItem('cth_deleted_orders', JSON.stringify(deleted));
        }
    } catch(e) {}

    if (!APP_STATE.firestoreReady) {
        _pendingWrites.push({ type: 'delete', id: orderId });
        return;
    }
    // Marcar como eliminada en Firestore (no borrar el doc) para que todos los dispositivos lo respeten
    db.collection('orders').doc(orderId).update({ deleted: true })
        .catch(() => {
            // Si el doc no existe, intentar set para registrar la eliminación
            db.collection('orders').doc(orderId).set({ id: orderId, deleted: true }, { merge: true })
                .catch(err => console.error('Error marcando orden eliminada:', err));
        });
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
    const validStatuses = new Set(['pending', 'approved', 'sent', 'conformidad', 'paid', 'voucher']);
    let migrated = 0;
    orders.forEach(order => {
        if (statusMap[order.status]) {
            order.status = statusMap[order.status];
            migrated++;
        }
    });

    // ── Migración de IDs cortos (OC-001…OC-006) → consecutivo desde 1249 ──
    // Mapeo fijo: cada ID antiguo se convierte al nuevo número
    const ID_REMAP = {
        'OC-001': 'OC-1247',
        'OC-002': 'OC-1248',
        'OC-003': 'OC-1249',
        'OC-004': 'OC-1250',
        'OC-005': 'OC-1251',
        'OC-006': 'OC-1252',
    };
    let remapped = 0;
    orders.forEach(order => {
        if (ID_REMAP[order.id]) {
            const oldId = order.id;
            order.id = ID_REMAP[oldId];
            remapped++;
        }
    });
    if (remapped > 0) {
        console.log(`🔢 Renumerados ${remapped} IDs al nuevo consecutivo (desde 1249)`);
        // Persistir los nuevos IDs en Firestore en segundo plano
        orders.forEach(order => {
            const oldId = Object.keys(ID_REMAP).find(k => ID_REMAP[k] === order.id);
            if (oldId) {
                try {
                    db.collection('orders').doc(order.id).set(order)
                        .then(() => db.collection('orders').doc(oldId).delete())
                        .catch(e => console.warn('Remap Firestore:', e.message));
                } catch(e) {}
            }
        });
    }

    if (migrated > 0) console.log(`🔄 Migrados ${migrated} estados antiguos`);
    return migrated + remapped;
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
        ordersSnap.forEach(doc => {
            const data = doc.data();
            // Ignorar órdenes marcadas como eliminadas en Firestore
            if (!data.deleted) firestoreOrders.push(data);
        });

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
                // Leer lista de órdenes eliminadas por el usuario para no re-subirlas
                let deletedIds = [];
                try { deletedIds = JSON.parse(localStorage.getItem('cth_deleted_orders') || '[]'); } catch(e) {}
                const localOnly = localOrders.filter(o => o.id && !o.deleted && !firestoreIds.has(o.id) && !deletedIds.includes(o.id));
                // Preservar datos locales con base64 pendiente de subir a Storage
                const localMap = new Map(localOrders.map(o => [o.id, o]));
                const mergedFirestore = firestoreOrders.map(order => {
                    const local = localMap.get(order.id);
                    if (local) {
                        if (local.signatureSolicitante && local.signatureSolicitante.startsWith('data:') && !order.signatureSolicitanteUrl) {
                            order.signatureSolicitante = local.signatureSolicitante;
                        }
                        if (local.signatureAprobacion && local.signatureAprobacion.startsWith('data:') && !order.signatureAprobacionUrl) {
                            order.signatureAprobacion = local.signatureAprobacion;
                        }
                        if (local.quotations && local.quotations.length > 0 && local.quotations.some(q => q.data && q.data.startsWith('data:'))) {
                            order.quotations = local.quotations;
                        }
                        if (local.evidencias && local.evidencias.length > 0 && local.evidencias.some(e => e.data && e.data.startsWith('data:'))) {
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

        // ── Migrar archivos locales base64 a Firebase Storage ──
        migrateLocalFilesToStorage();

        // ── Listener en tiempo real para órdenes ──
        db.collection('orders').onSnapshot((snapshot) => {
            if (!APP_STATE.firestoreReady) return;
            const updatedOrders = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                // Ignorar órdenes marcadas como eliminadas
                if (!data.deleted) updatedOrders.push(data);
            });

            // Preservar órdenes locales cuya escritura a Firestore está pendiente o falló
            const firestoreIds = new Set(updatedOrders.map(o => o.id));
            const localPendingOrders = APP_STATE.requests.filter(o => 
                o.id && !o.deleted && !firestoreIds.has(o.id) && _pendingOrderIds.has(o.id)
            );

            const merged = [...updatedOrders, ...localPendingOrders];

            // Verificar si realmente cambiaron los datos (incluye deleted para evitar titilado)
            const currentSorted = APP_STATE.requests.map(r => r.id).sort().join(',');
            const newSorted = merged.map(r => r.id).sort().join(',');
            const currentStatuses = APP_STATE.requests.map(r => r.id + ':' + r.status).sort().join(',');
            const newStatuses = merged.map(r => r.id + ':' + r.status).sort().join(',');

            if (currentSorted !== newSorted || currentStatuses !== newStatuses) {
                // Preservar datos locales que aún tienen base64 pendiente de subir a Storage
                const localMap = new Map(APP_STATE.requests.map(r => [r.id, r]));
                const finalOrders = merged.map(order => {
                    const local = localMap.get(order.id);
                    if (local) {
                        // Si la versión local tiene base64 pendiente de subir, mantenerla
                        if (local.quotations && local.quotations.length > 0 && local.quotations.some(q => q.data && q.data.startsWith('data:'))) {
                            order.quotations = local.quotations;
                        }
                        if (local.evidencias && local.evidencias.length > 0 && local.evidencias.some(e => e.data && e.data.startsWith('data:'))) {
                            order.evidencias = local.evidencias;
                        }
                        if (local.signatureSolicitante && local.signatureSolicitante.startsWith('data:') && !order.signatureSolicitanteUrl) {
                            order.signatureSolicitante = local.signatureSolicitante;
                        }
                        if (local.signatureAprobacion && local.signatureAprobacion.startsWith('data:') && !order.signatureAprobacionUrl) {
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
        console.warn('⚠️ localStorage lleno, quitando cotizaciones/evidencias pero conservando firmas...');
        try {
            // Quitar solo cotizaciones y evidencias (pesadas), conservar firmas (pequeñas y críticas para el PDF)
            const lightRequests = APP_STATE.requests.map(r => {
                const copy = { ...r };
                if (copy.quotations) copy.quotations = copy.quotations.map(q => ({ name: q.name, type: q.type, _stripped: true }));
                if (copy.evidencias) copy.evidencias = copy.evidencias.map(ev => ({ name: ev.name, _stripped: true }));
                // NO borrar firmas: son pequeñas (~15-50KB) y necesarias para el PDF
                return copy;
            });
            localStorage.setItem('cth_requests', JSON.stringify(lightRequests));
        } catch (e2) {
            // Si aún no cabe, intentar sin firmas como último recurso (Firestore las tendrá)
            try {
                const minimalRequests = APP_STATE.requests.map(r => {
                    const copy = { ...r };
                    if (copy.quotations) copy.quotations = copy.quotations.map(q => ({ name: q.name, type: q.type, _stripped: true }));
                    if (copy.evidencias) copy.evidencias = copy.evidencias.map(ev => ({ name: ev.name, _stripped: true }));
                    delete copy.signatureSolicitante;
                    delete copy.signatureAprobacion;
                    return copy;
                });
                localStorage.setItem('cth_requests', JSON.stringify(minimalRequests));
                console.warn('⚠️ Firmas no guardadas en localStorage (lleno), pero están en Firestore');
            } catch (e3) {
                console.error('❌ No se pudo guardar en localStorage:', e3);
            }
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
    const TZ = 'America/Bogota';
    const fecha = d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric', timeZone: TZ });
    // Extraer hora y minutos en zona Colombia para no depender del reloj del sistema
    const bogotaDate = new Date(d.toLocaleString('en-US', { timeZone: TZ }));
    let hours = bogotaDate.getHours();
    const minutes = bogotaDate.getMinutes().toString().padStart(2, '0');
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
// ─── Helpers de cifrado AES-GCM para backup ───
async function _encryptBackup(plaintext, password) {
    const enc = new TextEncoder();
    const keyMat = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const key  = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
        keyMat, { name: 'AES-GCM', length: 256 }, false, ['encrypt']
    );
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));
    const combined = new Uint8Array(salt.byteLength + iv.byteLength + encrypted.byteLength);
    combined.set(salt, 0); combined.set(iv, 16); combined.set(new Uint8Array(encrypted), 28);
    return btoa(String.fromCharCode(...combined));
}
async function _decryptBackup(encB64, password) {
    const enc  = new TextEncoder();
    const combined = Uint8Array.from(atob(encB64), c => c.charCodeAt(0));
    const salt = combined.slice(0, 16), iv = combined.slice(16, 28), data = combined.slice(28);
    const keyMat = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
        keyMat, { name: 'AES-GCM', length: 256 }, false, ['decrypt']
    );
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
    return new TextDecoder().decode(decrypted);
}

window.exportBackup = () => {
    // Mostrar modal para contraseña opcional
    const overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
    overlay.innerHTML = `
        <div class="confirm-modal">
            <h3>📦 Exportar Backup</h3>
            <p style="margin-bottom:14px;font-size:14px;color:#475569;">Puedes proteger el respaldo con una contraseña (cifrado AES-256). Déjalo vacío para exportar sin cifrado.</p>
            <div style="margin-bottom:6px;">
                <input type="password" id="backup-pwd-input" class="providers-search-input" placeholder="Contraseña (opcional)" style="width:100%;margin-bottom:8px;">
                <input type="password" id="backup-pwd-confirm" class="providers-search-input" placeholder="Confirmar contraseña" style="width:100%;">
            </div>
            <div class="confirm-actions" style="margin-top:16px;">
                <button class="btn-secondary" onclick="this.closest('.confirm-modal-overlay').remove()">Cancelar</button>
                <button class="btn-primary" onclick="window._doExportBackup()">📥 Descargar</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => document.getElementById('backup-pwd-input')?.focus(), 100);
};

window._doExportBackup = async () => {
    const pwd     = document.getElementById('backup-pwd-input')?.value || '';
    const pwdConf = document.getElementById('backup-pwd-confirm')?.value || '';
    if (pwd && pwd !== pwdConf) {
        showToast('Contraseñas distintas', 'Las contraseñas no coinciden', 'error');
        return;
    }
    document.querySelector('.confirm-modal-overlay')?.remove();
    const inventoryData = (typeof INVENTORY_DB !== 'undefined') ? INVENTORY_DB : JSON.parse(localStorage.getItem('cth_inventory') || 'null');
    const data = { version: '2.2', exportDate: new Date().toISOString(), requests: APP_STATE.requests, providers: PROVIDERS_DB, inventory: inventoryData };
    let fileContent, filename = `backup_uib_${new Date().toISOString().slice(0, 10)}.json`;
    if (pwd) {
        try {
            const enc = await _encryptBackup(JSON.stringify(data, null, 2), pwd);
            fileContent = JSON.stringify({ _encrypted: true, _v: 1, data: enc });
            filename = `backup_uib_enc_${new Date().toISOString().slice(0, 10)}.json`;
        } catch(e) { showToast('Error', 'No se pudo cifrar: ' + e.message, 'error'); return; }
    } else {
        fileContent = JSON.stringify(data, null, 2);
    }
    const blob = new Blob([fileContent], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
    showToast('Backup descargado', pwd ? '🔒 Backup cifrado con contraseña AES-256' : 'Órdenes, proveedores e inventario incluidos', 'success');
};

window.importBackup = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            let parsed = JSON.parse(e.target.result);
            // Si está cifrado, pedir contraseña
            if (parsed._encrypted) {
                const pwd = window.prompt('🔒 Este backup está cifrado. Ingresa la contraseña para descifrar:');
                if (!pwd) { showToast('Cancelado', 'Importación cancelada', 'info'); return; }
                try {
                    const plain = await _decryptBackup(parsed.data, pwd);
                    parsed = JSON.parse(plain);
                } catch(e) {
                    showToast('Error', 'Contraseña incorrecta o archivo corrupto', 'error'); return;
                }
            }
            const data = parsed;
            if (!data.requests || !Array.isArray(data.requests)) {
                showToast('Error', 'El archivo no tiene un formato válido de backup.', 'error');
                return;
            }
            const invCount = data.inventory ? Object.keys(data.inventory).reduce((s, k) => {
                    const sede = data.inventory[k];
                    return s + (sede.inventario || []).reduce((ss, a) => ss + (a.items || []).length, 0);
                }, 0) : 0;
            showConfirm(
                'Importar Backup',
                `Se importarán <strong>${data.requests.length}</strong> órdenes, <strong>${(data.providers || []).length}</strong> proveedores${invCount > 0 ? ` y <strong>${invCount}</strong> activos de inventario` : ''}.<br>Esto <strong>reemplazará</strong> todos los datos actuales.`,
                () => {
                    APP_STATE.requests = data.requests;
                    saveState();
                    if (data.providers && Array.isArray(data.providers)) {
                        PROVIDERS_DB = data.providers;
                        saveProviders();
                    }
                    if (data.inventory && typeof data.inventory === 'object') {
                        localStorage.setItem('cth_inventory', JSON.stringify(data.inventory));
                        // Sincronizar inventario con Firestore si está disponible (esquema por sede)
                        if (typeof db !== 'undefined') {
                            const batchInv = db.batch();
                            Object.keys(data.inventory).forEach(sk => {
                                batchInv.set(db.collection('config').doc(`inventory_${sk}`), { sedeKey: sk, data: data.inventory[sk] });
                            });
                            batchInv.commit().catch(err => console.warn('No se pudo sincronizar inventario:', err));
                        }
                    }
                    syncAllToFirestore().then(() => {
                        showToast('Backup importado', 'Órdenes, proveedores e inventario restaurados.', 'success');
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

    // ─── Filtrar secciones según el rol del usuario ───
    const userEmail = APP_STATE.userEmail;
    const canSeeAdminSections = ADMIN_SECTION_EMAILS.includes(userEmail);
    const canSeeInventoryOnly = INVENTORY_ONLY_EMAILS.includes(userEmail);
    const canSeeInventoryAndProviders = INVENTORY_PROVIDERS_EMAILS.includes(userEmail);

    // Ocultar proveedores, métricas e inventario si no tiene permiso
    navItems.forEach(item => {
        const view = item.dataset.view;
        if (view === 'inventory') {
            if (!canSeeAdminSections && !canSeeInventoryOnly && !canSeeInventoryAndProviders) item.style.display = 'none';
        } else if (view === 'providers') {
            if (!canSeeAdminSections && !canSeeInventoryAndProviders) item.style.display = 'none';
        } else if (view === 'metricas') {
            if (!canSeeAdminSections) item.style.display = 'none';
        }
    });

    // Ocultar Backup, Importar, y otras funciones admin para usuarios sin permiso
    if (!canSeeAdminSections) {
        const backupArea = document.querySelector('.sidebar-backup-btns');
        if (backupArea) backupArea.style.display = 'none';
    }

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
                'metricas': 'Métricas',
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
            _clearDraft();
            document.querySelector('[data-view="dashboard"]').click();
        }
    });

    // Mobile menu
    initMobileMenu();

    // Renderizar dashboard con datos locales (puede estar vacío la primera vez)
    APP_STATE._firestoreLoaded = false;
    renderView('dashboard');

    // Cargar datos desde Firestore en paralelo
    const localCount = APP_STATE.requests.length;
    loadFromFirestore(true).then(() => {
        APP_STATE._firestoreLoaded = true;
        // Re-render si: (a) hubo cambios, o (b) arrancó sin datos locales
        if (APP_STATE.requests.length !== localCount || localCount === 0) {
            renderView(APP_STATE.currentView);
        }
        loadInventoryFromFirestore();
    }).catch(() => {
        APP_STATE._firestoreLoaded = true;
        // Si falla Firestore pero no hay datos locales, actualizar el empty state
        if (localCount === 0) renderView(APP_STATE.currentView);
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
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };

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
                    ${DELETE_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `<button class="ri-delete" onclick="event.stopPropagation(); window.deleteOrder('${r.id}')" title="Eliminar orden">✕</button>` : ''}
                </div>
            `).join('');
        }
    }
}

// ─── Paginación del historial ───
const DASH_PAGE_SIZE = 25;

function renderDashHistoryPage() {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const showCheckbox = APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail);
    const colCount = showCheckbox ? 8 : 7;

    // ── Aplicar filtros ──────────────────────────────────────
    let filtered = [...requests].reverse();
    const filter   = APP_STATE._dashFilter || 'all';
    const search   = (APP_STATE._dashSearch || '').toLowerCase().trim();
    const dateFrom = APP_STATE._dashDateFrom ? new Date(APP_STATE._dashDateFrom + 'T00:00:00') : null;
    const dateTo   = APP_STATE._dashDateTo   ? new Date(APP_STATE._dashDateTo   + 'T23:59:59') : null;

    if (filter !== 'all') filtered = filtered.filter(r => r.status === filter);
    if (search) filtered = filtered.filter(r =>
        (r.id       || '').toLowerCase().includes(search) ||
        (r.provider || '').toLowerCase().includes(search) ||
        (r.sede     || '').toLowerCase().includes(search) ||
        formatDate(r.date).toLowerCase().includes(search) ||
        (r.categoria || '').toLowerCase().includes(search) ||
        (r.obs       || '').toLowerCase().includes(search)
    );
    if (dateFrom || dateTo) {
        filtered = filtered.filter(r => {
            const d = new Date(r.date);
            if (dateFrom && d < dateFrom) return false;
            if (dateTo   && d > dateTo)   return false;
            return true;
        });
    }

    // ── Paginación ──────────────────────────────────────────
    const totalPages = Math.max(1, Math.ceil(filtered.length / DASH_PAGE_SIZE));
    APP_STATE._dashPage = Math.min(APP_STATE._dashPage || 0, totalPages - 1);
    const page     = APP_STATE._dashPage;
    const pageRows = filtered.slice(page * DASH_PAGE_SIZE, (page + 1) * DASH_PAGE_SIZE);

    // ── Render tbody ─────────────────────────────────────────
    const tbody = document.getElementById('dash-history-tbody');
    if (!tbody) return;

    tbody.innerHTML = pageRows.length === 0
        ? `<tr><td colspan="${colCount}" style="text-align:center;padding:28px;color:#94a3b8;">Sin resultados para los filtros aplicados</td></tr>`
        : pageRows.map(r => {
            const itemsDesc = (r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : '';
            const isPending = r.status === 'pending';
            return `
            <tr data-status="${r.status}" data-date="${r.date}" data-id="${r.id}" class="clickable" onclick="window.openOrderDetail('${r.id}')">
                ${showCheckbox ? `
                <td class="cell-checkbox" onclick="event.stopPropagation();">
                    ${isPending ? `<input type="checkbox" class="bulk-check" data-order-id="${r.id}" onchange="window.updateBulkBar()">` : ''}
                </td>` : ''}
                <td><strong>${r.id}</strong></td>
                <td>${formatDate(r.date)}</td>
                <td>
                    <div class="cell-provider-name">${r.provider}</div>
                    ${itemsDesc ? `<div class="cell-items-desc">${itemsDesc}</div>` : ''}
                    ${r.categoria ? `<span class="cell-category-tag">${r.categoria}</span>` : ''}
                    ${r.obs ? `<div class="cell-obs-desc">(${r.obs})</div>` : ''}
                </td>
                <td>${r.sede || 'CTH'}</td>
                <td><strong>${formatCOP(r.total || 0)}</strong></td>
                <td>
                    <span class="status-badge ${r.status}">${statusLabels[r.status] || r.status}</span>
                    ${getPaymentIndicator(r)}
                </td>
                <td class="cell-delete">${DELETE_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `<button class="ri-delete" onclick="event.stopPropagation(); window.deleteOrder('${r.id}')" title="Eliminar orden">✕</button>` : ''}</td>
            </tr>`;
        }).join('');

    // ── Render controles de paginación ──────────────────────
    const paginationEl = document.getElementById('dash-pagination');
    if (!paginationEl) return;
    const start = filtered.length === 0 ? 0 : page * DASH_PAGE_SIZE + 1;
    const end   = Math.min((page + 1) * DASH_PAGE_SIZE, filtered.length);
    if (totalPages <= 1) {
        paginationEl.innerHTML = filtered.length > 0
            ? `<span class="dash-page-info">${filtered.length} orden${filtered.length !== 1 ? 'es' : ''}</span>`
            : '';
        return;
    }
    paginationEl.innerHTML = `
        <div class="dash-pagination-controls">
            <button class="dash-page-btn" onclick="APP_STATE._dashPage=0;renderDashHistoryPage()" ${page === 0 ? 'disabled' : ''}>«</button>
            <button class="dash-page-btn" onclick="APP_STATE._dashPage=Math.max(0,APP_STATE._dashPage-1);renderDashHistoryPage()" ${page === 0 ? 'disabled' : ''}>‹ Anterior</button>
            <span class="dash-page-info">${start}–${end} de ${filtered.length} órdenes</span>
            <button class="dash-page-btn" onclick="APP_STATE._dashPage=Math.min(${totalPages - 1},APP_STATE._dashPage+1);renderDashHistoryPage()" ${page >= totalPages - 1 ? 'disabled' : ''}>Siguiente ›</button>
            <button class="dash-page-btn" onclick="APP_STATE._dashPage=${totalPages - 1};renderDashHistoryPage()" ${page >= totalPages - 1 ? 'disabled' : ''}>»</button>
        </div>
    `;
}

// ─── Render Views ───
function renderView(view) {
    const container = document.getElementById('view-dashboard');

    // Siempre actualizar badge de evidencias pendientes
    const evPending = APP_STATE.requests.filter(r => (r.status === 'paid' || r.status === 'voucher') && (!r.evidencias || r.evidencias.length === 0));
    updateEvidenceBadge(evPending.length);

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

        const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };

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
                ${ADMIN_SECTION_EMAILS.includes(APP_STATE.userEmail) ? `
                <div class="stat-card stat-card-inversion">
                    <h3>Inversión Total</h3>
                    <div class="value">${formatCOP(requests.reduce((s, r) => s + (r.total || 0), 0))}</div>
                    <div class="trend red">Acumulado</div>
                </div>` : ''}
            </div>

            <!-- Historial completo -->
            <div class="recent-requests animate-in">
                <div class="section-header">
                    <h2>Historial de Órdenes</h2>
                    <div style="display:flex;gap:10px;align-items:center;">
                        ${ADMIN_SECTION_EMAILS.includes(APP_STATE.userEmail) ? `<button class="btn-excel" onclick="window.exportToExcel()" title="Exportar a Excel">📊 Exportar Excel</button>` : ''}
                        <button class="btn-primary" id="btn-create-start">
                            <span class="btn-icon">➕</span> Nueva Solicitud
                        </button>
                    </div>
                </div>

                ${(() => {
                    // Calcular alertas de órdenes estancadas
                    const stalledAlerts = [];
                    const nowMs = Date.now();
                    const DAY_MS = 86400000;
                    requests.forEach(r => {
                        const dateRef = r.approvedDate || r.date;
                        const days = Math.floor((nowMs - new Date(dateRef).getTime()) / DAY_MS);
                        if (r.status === 'approved' && days >= 3) {
                            stalledAlerts.push({ id: r.id, provider: r.provider, status: 'Aprobada sin enviar', days, type: 'orange' });
                        }
                        if (r.status === 'sent') {
                            const sentRef = r.sentDate || r.approvedDate || r.date;
                            const sentDays = Math.floor((nowMs - new Date(sentRef).getTime()) / DAY_MS);
                            if (sentDays >= 7) {
                                stalledAlerts.push({ id: r.id, provider: r.provider, status: 'Enviada sin pagar', days: sentDays, type: 'red' });
                            }
                        }
                        if (r.status === 'pending' && days >= 2) {
                            stalledAlerts.push({ id: r.id, provider: r.provider, status: 'Pendiente de firma', days, type: 'yellow' });
                        }
                    });
                    if (stalledAlerts.length === 0) return '';
                    return `
                    <div class="stalled-alerts-box">
                        <h3 class="stalled-alerts-title">⚠️ Órdenes que requieren atención (${stalledAlerts.length})</h3>
                        <div class="stalled-alerts-list">
                            ${stalledAlerts.map(a => `
                                <div class="stalled-alert-item stalled-${a.type}" onclick="window.openOrderDetail('${a.id}')">
                                    <span class="stalled-id">${a.id}</span>
                                    <span class="stalled-provider">${a.provider}</span>
                                    <span class="stalled-reason">${a.status}</span>
                                    <span class="stalled-days">${a.days} días</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                })()}

                <div class="history-toolbar" style="margin-bottom:12px;">
                    <div class="history-search-bar" style="flex:1;">
                        <input type="text" id="dash-history-search" class="providers-search-input" placeholder="🔍  Buscar por N° orden, proveedor, sede o fecha...">
                    </div>
                    <div class="date-range-filter">
                        <input type="date" id="dash-date-from" class="date-filter-input" title="Desde">
                        <span class="date-range-sep">→</span>
                        <input type="date" id="dash-date-to" class="date-filter-input" title="Hasta">
                        <button class="btn-clear-dates" id="btn-clear-dates" title="Limpiar filtro de fechas">✕</button>
                    </div>
                </div>

                <div class="history-filters" id="dash-history-filters">
                    <button class="filter-chip active" data-filter="all">Todas</button>
                    <button class="filter-chip" data-filter="pending">Pendientes de firma</button>
                    <button class="filter-chip" data-filter="approved">Aprobadas</button>
                    <button class="filter-chip" data-filter="sent">Por Pagar</button>
                    <button class="filter-chip" data-filter="paid">Pagadas</button>
                    <button class="filter-chip" data-filter="voucher">Completadas</button>
                </div>

                ${requests.length === 0 ? `
                    <div class="empty-state" id="dash-empty-state">
                        ${!APP_STATE._firestoreLoaded ? `
                            <div class="empty-icon sync-spin">⏳</div>
                            <p>Sincronizando con la nube...</p>
                            <p class="empty-sub">Cargando órdenes, un momento.</p>
                        ` : `
                            <div class="empty-icon">📁</div>
                            <p>No hay órdenes aún.</p>
                            <p class="empty-sub">Crea tu primera solicitud.</p>
                        `}
                    </div>
                ` : `
                    ${APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) && requests.some(r => r.status === 'pending') ? `
                    <div class="bulk-approve-bar" id="bulk-approve-bar" style="display:none;">
                        <span id="bulk-approve-count">0 órdenes seleccionadas</span>
                        <div class="bulk-approve-actions">
                            <button class="btn-secondary btn-sm" onclick="window.bulkToggleAll(false)">Deseleccionar</button>
                            <button class="btn-success btn-sm" onclick="window.openBulkApproveModal()">✅ Aprobar seleccionadas</button>
                        </div>
                    </div>
                    ` : ''}
                    <div class="table-scroll">
                        <table class="history-table">
                            <thead>
                                <tr>
                                    ${APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
                                    <th style="width:40px;text-align:center;">
                                        <input type="checkbox" id="bulk-select-all" onchange="window.bulkToggleAll(this.checked)" title="Seleccionar todas las pendientes">
                                    </th>
                                    ` : ''}
                                    <th>N° Orden</th>
                                    <th>Fecha</th>
                                    <th>Proveedor</th>
                                    <th>Sede</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th style="width:44px;"></th>
                                </tr>
                            </thead>
                            <tbody id="dash-history-tbody"></tbody>
                        </table>
                    </div>
                    <div id="dash-pagination" class="dash-pagination-wrap"></div>
                `}
            </div>
        `;
        // ── Filtros / búsqueda / fechas → delegan en renderDashHistoryPage ──
        APP_STATE._dashFilter = APP_STATE._dashFilter || 'all';
        APP_STATE._dashPage   = APP_STATE._dashPage   || 0;

        const dashFilters = document.getElementById('dash-history-filters');
        if (dashFilters) {
            dashFilters.querySelectorAll('.filter-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    dashFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    APP_STATE._dashFilter = chip.dataset.filter;
                    APP_STATE._dashPage   = 0;
                    renderDashHistoryPage();
                });
                // Restaurar chip activo tras re-render
                if (chip.dataset.filter === APP_STATE._dashFilter) chip.classList.add('active');
                else chip.classList.remove('active');
            });
        }

        const dashSearch = document.getElementById('dash-history-search');
        if (dashSearch) {
            dashSearch.value = APP_STATE._dashSearch || '';
            dashSearch.addEventListener('input', (e) => {
                APP_STATE._dashSearch = e.target.value;
                APP_STATE._dashPage   = 0;
                renderDashHistoryPage();
            });
        }

        const dateFrom     = document.getElementById('dash-date-from');
        const dateTo       = document.getElementById('dash-date-to');
        const btnClearDates = document.getElementById('btn-clear-dates');

        if (dateFrom) {
            dateFrom.value = APP_STATE._dashDateFrom || '';
            dateFrom.addEventListener('change', () => {
                APP_STATE._dashDateFrom = dateFrom.value;
                APP_STATE._dashPage = 0;
                renderDashHistoryPage();
            });
        }
        if (dateTo) {
            dateTo.value = APP_STATE._dashDateTo || '';
            dateTo.addEventListener('change', () => {
                APP_STATE._dashDateTo = dateTo.value;
                APP_STATE._dashPage = 0;
                renderDashHistoryPage();
            });
        }
        if (btnClearDates) {
            btnClearDates.addEventListener('click', () => {
                if (dateFrom) dateFrom.value = '';
                if (dateTo)   dateTo.value   = '';
                APP_STATE._dashDateFrom = '';
                APP_STATE._dashDateTo   = '';
                APP_STATE._dashPage     = 0;
                renderDashHistoryPage();
            });
        }

        // Render inicial de la tabla paginada
        renderDashHistoryPage();

    } else if (view === 'metricas') {
        // ═══════════════════════════════════════════════════
        //  MÉTRICAS
        // ═══════════════════════════════════════════════════
        const requests = APP_STATE.requests;
        const now = new Date();
        const selectedYear = APP_STATE._consumoYear ? parseInt(APP_STATE._consumoYear) : now.getFullYear();
        const prevYear = selectedYear - 1;
        const currentMonth = selectedYear === now.getFullYear() ? now.getMonth() : 11;
        const monthNames = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

        // Sedes principales
        const SEDES_BASE = ['CTH', 'ENC', 'UIB'];
        const SEDE_FULL_NAMES = { CTH: 'Colegio Theodoro Herzl', ENC: 'Jardín Infantil El Encuentro', UIB: 'Unión Israelita de Beneficencia' };
        const SEDE_ICONS = { CTH: '🏫', ENC: '🌱', UIB: '🏛️' };
        const SEDE_COLORS = { CTH: '#3b82f6', ENC: '#10b981', UIB: '#f59e0b' };

        const years = [...new Set(requests.map(r => new Date(r.date).getFullYear()))].sort((a, b) => b - a);
        if (!years.includes(selectedYear)) years.unshift(selectedYear);

        // Filtrar por año seleccionado y año anterior
        const yearRequests = requests.filter(r => new Date(r.date).getFullYear() === selectedYear);
        const prevYearRequests = requests.filter(r => new Date(r.date).getFullYear() === prevYear);

        // ─── 1) Gasto mensual ───
        const monthlyTotals = Array(12).fill(0);
        yearRequests.forEach(r => { monthlyTotals[new Date(r.date).getMonth()] += (r.total || 0); });
        const maxMonthVal = Math.max(...monthlyTotals, 1);

        // ─── 2) Distribución por categoría ───
        const catData = {};
        yearRequests.forEach(r => {
            const cat = r.categoria || 'Sin categoría';
            catData[cat] = (catData[cat] || 0) + (r.total || 0);
        });
        const catEntries = Object.entries(catData).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const totalCat = catEntries.reduce((s, e) => s + e[1], 0) || 1;
        const catColors = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#06b6d4','#84cc16'];

        // ─── 3) Distribución por sede (datos detallados) ───
        function distributeToSedes(sedeStr, total) {
            const result = {};
            const parts = (sedeStr || 'CTH').split('/').filter(s => SEDES_BASE.includes(s));
            if (parts.length === 0) parts.push('CTH');
            const share = total / parts.length;
            parts.forEach(s => { result[s] = share; });
            return result;
        }

        function calcSedeData(year) {
            const data = {};
            SEDES_BASE.forEach(s => {
                data[s] = { total: 0, months: Array(12).fill(0), orders: [], categories: {} };
            });
            requests.forEach(r => {
                const d = new Date(r.date);
                if (d.getFullYear() !== year) return;
                const month = d.getMonth();
                const dist = distributeToSedes(r.sede, r.total || 0);
                Object.entries(dist).forEach(([sede, amount]) => {
                    data[sede].total += amount;
                    data[sede].months[month] += amount;
                    data[sede].orders.push({ ...r, _assignedAmount: amount });
                    const cat = r.categoria || 'Sin categoría';
                    data[sede].categories[cat] = (data[sede].categories[cat] || 0) + amount;
                });
            });
            return data;
        }

        const initialData = calcSedeData(selectedYear);
        const prevData = calcSedeData(prevYear);
        const grandTotal = SEDES_BASE.reduce((s, sede) => s + initialData[sede].total, 0) || 0;
        const grandTotalPrev = SEDES_BASE.reduce((s, sede) => s + prevData[sede].total, 0) || 0;

        // ─── KPI: ticket promedio y proveedores únicos ───
        const ticketPromedio = yearRequests.length > 0 ? grandTotal / yearRequests.length : 0;
        const proveedoresUnicos = new Set(yearRequests.map(r => r.provider).filter(Boolean)).size;
        const prevProveedoresUnicos = new Set(prevYearRequests.map(r => r.provider).filter(Boolean)).size;

        function deltaPct(curr, prev) {
            if (prev === 0 && curr === 0) return null;
            if (prev === 0) return null;
            return ((curr - prev) / prev * 100).toFixed(1);
        }
        function deltaTag(curr, prev, invertido = false) {
            const d = deltaPct(curr, prev);
            if (d === null) return `<span style="font-size:0.72rem;color:#94a3b8;">Sin datos año anterior</span>`;
            const up = parseFloat(d) >= 0;
            const color = (up && !invertido) || (!up && invertido) ? '#10b981' : '#ef4444';
            const arrow = up ? '▲' : '▼';
            return `<span style="font-size:0.72rem;color:${color};font-weight:700;">${arrow} ${Math.abs(d)}% vs ${prevYear}</span>`;
        }

        // ─── Pipeline de estados ───
        const STATUS_LABELS = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Conformidad', paid: 'Pagada', voucher: 'Completada' };
        const STATUS_COLORS = { pending: '#f59e0b', approved: '#3b82f6', sent: '#8b5cf6', conformidad: '#06b6d4', paid: '#10b981', voucher: '#64748b' };
        const statusCounts = {};
        yearRequests.forEach(r => { statusCounts[r.status] = (statusCounts[r.status] || 0) + 1; });
        const statusEntries = Object.entries(STATUS_LABELS).map(([k, label]) => ({
            key: k, label, count: statusCounts[k] || 0, color: STATUS_COLORS[k]
        })).filter(e => e.count > 0);
        const maxStatusCount = Math.max(...statusEntries.map(e => e.count), 1);

        // ─── Top proveedores ───
        const provMap = {};
        yearRequests.forEach(r => {
            if (!r.provider) return;
            provMap[r.provider] = provMap[r.provider] || { total: 0, count: 0 };
            provMap[r.provider].total += (r.total || 0);
            provMap[r.provider].count++;
        });
        const topProveedores = Object.entries(provMap)
            .sort((a, b) => b[1].total - a[1].total)
            .slice(0, 5);
        const maxProvTotal = topProveedores.length > 0 ? topProveedores[0][1].total : 1;

        container.innerHTML = `
            <div class="consumo-sede-view animate-in">
                <div class="consumo-header">
                    <div class="consumo-header-left">
                        <h2 class="consumo-main-title">📈 Métricas ${selectedYear}</h2>
                        <p class="consumo-subtitle">Análisis de gastos, categorías y distribución por sede</p>
                    </div>
                    <div class="consumo-header-right">
                        <button class="btn-excel" onclick="window.exportMetricasExcel()" title="Exportar métricas a Excel" style="font-size:12px;padding:6px 12px;">📊 Excel</button>
                        <button class="btn-metricas-pdf" onclick="window.exportMetricasPDF()" title="Exportar informe PDF">📄 PDF</button>
                        <select id="consumo-year-select" class="consumo-year-select">
                            ${years.map(y => `<option value="${y}" ${y === selectedYear ? 'selected' : ''}>${y}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <!-- ═══ KPI CARDS ═══ -->
                <div class="met-kpi-grid">
                    <div class="met-kpi-card">
                        <div class="met-kpi-icon" style="background:#eff6ff;color:#3b82f6;">💰</div>
                        <div class="met-kpi-body">
                            <div class="met-kpi-label">Inversión Total</div>
                            <div class="met-kpi-value">${formatCOP(grandTotal)}</div>
                            <div class="met-kpi-sub">${deltaTag(grandTotal, grandTotalPrev)}</div>
                        </div>
                    </div>
                    <div class="met-kpi-card">
                        <div class="met-kpi-icon" style="background:#f0fdf4;color:#10b981;">📋</div>
                        <div class="met-kpi-body">
                            <div class="met-kpi-label">Órdenes Emitidas</div>
                            <div class="met-kpi-value">${yearRequests.length}</div>
                            <div class="met-kpi-sub">${deltaTag(yearRequests.length, prevYearRequests.length)}</div>
                        </div>
                    </div>
                    <div class="met-kpi-card">
                        <div class="met-kpi-icon" style="background:#fefce8;color:#f59e0b;">🧾</div>
                        <div class="met-kpi-body">
                            <div class="met-kpi-label">Ticket Promedio</div>
                            <div class="met-kpi-value">${formatCOP(ticketPromedio)}</div>
                            <div class="met-kpi-sub"><span style="font-size:0.72rem;color:#94a3b8;">Por orden en ${selectedYear}</span></div>
                        </div>
                    </div>
                    <div class="met-kpi-card">
                        <div class="met-kpi-icon" style="background:#fdf4ff;color:#a855f7;">🏪</div>
                        <div class="met-kpi-body">
                            <div class="met-kpi-label">Proveedores Únicos</div>
                            <div class="met-kpi-value">${proveedoresUnicos}</div>
                            <div class="met-kpi-sub">${deltaTag(proveedoresUnicos, prevProveedoresUnicos)}</div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PIPELINE DE ESTADOS + TOP PROVEEDORES (2 columnas) ═══ -->
                <div class="met-row-2col">
                    <!-- Pipeline -->
                    <div class="chart-card" style="flex:1;min-width:0;">
                        <h3 class="chart-title">🔄 Estado de Órdenes ${selectedYear}</h3>
                        ${statusEntries.length === 0 ? '<p class="consumo-empty">Sin órdenes este año</p>' : `
                        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
                            ${statusEntries.map(e => {
                                const pct = Math.round(e.count / maxStatusCount * 100);
                                const pctOfTotal = Math.round(e.count / yearRequests.length * 100);
                                return `
                                <div>
                                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                        <span style="font-size:0.8rem;font-weight:600;color:#334155;">${e.label}</span>
                                        <span style="font-size:0.78rem;color:#64748b;">${e.count} orden${e.count !== 1 ? 'es' : ''} · <strong>${pctOfTotal}%</strong></span>
                                    </div>
                                    <div style="height:10px;background:#f1f5f9;border-radius:6px;overflow:hidden;">
                                        <div style="height:100%;width:${pct}%;background:${e.color};border-radius:6px;transition:width 0.4s ease;"></div>
                                    </div>
                                </div>`;
                            }).join('')}
                        </div>`}
                    </div>

                    <!-- Top Proveedores -->
                    <div class="chart-card" style="flex:1;min-width:0;">
                        <h3 class="chart-title">🏆 Top Proveedores ${selectedYear}</h3>
                        ${topProveedores.length === 0 ? '<p class="consumo-empty">Sin datos</p>' : `
                        <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px;">
                            ${topProveedores.map(([prov, info], idx) => {
                                const pct = Math.round(info.total / maxProvTotal * 100);
                                const pctOfTotal = grandTotal > 0 ? Math.round(info.total / grandTotal * 100) : 0;
                                const medals = ['🥇','🥈','🥉','4️⃣','5️⃣'];
                                return `
                                <div>
                                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                        <span style="font-size:0.8rem;font-weight:600;color:#334155;">${medals[idx]} ${prov}</span>
                                        <span style="font-size:0.78rem;color:#64748b;">${formatCOP(info.total)} · <strong>${pctOfTotal}%</strong></span>
                                    </div>
                                    <div style="height:10px;background:#f1f5f9;border-radius:6px;overflow:hidden;">
                                        <div style="height:100%;width:${pct}%;background:#6366f1;border-radius:6px;transition:width 0.4s ease;"></div>
                                    </div>
                                    <div style="font-size:0.7rem;color:#94a3b8;margin-top:2px;">${info.count} orden${info.count !== 1 ? 'es' : ''}</div>
                                </div>`;
                            }).join('')}
                        </div>`}
                    </div>
                </div>

                <!-- ═══ GRÁFICOS GENERALES (gasto mensual + categorías) ═══ -->
                <div class="chart-card">
                    <h3 class="chart-title">📊 Gasto Mensual ${selectedYear}</h3>
                    <div class="bar-chart">
                        ${monthNames.map((m, i) => {
                            const pct = Math.round(monthlyTotals[i] / maxMonthVal * 100);
                            const isCurrent = i === currentMonth;
                            return `
                            <div class="bar-col">
                                <div class="bar-value">${monthlyTotals[i] > 0 ? formatCOP(monthlyTotals[i]) : ''}</div>
                                <div class="bar-track"><div class="bar-fill" style="height:${Math.max(pct, 2)}%"></div></div>
                                <div class="bar-label" style="${isCurrent ? 'font-weight:800;color:#1e293b' : ''}">${m}</div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>

                <div class="chart-card">
                    <h3 class="chart-title">🏷️ Distribución por Categoría</h3>
                    <div class="dist-chart">
                        ${catEntries.length === 0 ? '<p class="consumo-empty">Sin datos</p>' : catEntries.map((e, i) => {
                            const pct = Math.round(e[1] / totalCat * 100);
                            return `
                            <div class="dist-row">
                                <span class="dist-label" title="${e[0]}">${e[0]}</span>
                                <div class="dist-bar-track"><div class="dist-bar-fill" style="width:${pct}%;background:${catColors[i % catColors.length]}"></div></div>
                                <span class="dist-pct">${pct}%</span>
                                <span class="dist-amount">${formatCOP(e[1])}</span>
                            </div>`;
                        }).join('')}
                    </div>
                </div>

                <!-- ═══ DISTRIBUCIÓN POR SEDE (barra + leyenda) ═══ -->
                <div class="consumo-summary-bar">
                    <h3 class="chart-title" style="margin-bottom:12px;">🏫 Distribución por Sede</h3>
                    <div class="consumo-summary-distribution">
                        ${SEDES_BASE.map(s => {
                            const pct = grandTotal > 0 ? Math.round(initialData[s].total / grandTotal * 100) : 0;
                            return `<div class="consumo-dist-segment" style="width:${Math.max(pct, 2)}%;background:${SEDE_COLORS[s]}" title="${s}: ${pct}%"></div>`;
                        }).join('')}
                    </div>
                    <div class="consumo-summary-legend">
                        ${SEDES_BASE.map(s => {
                            const pct = grandTotal > 0 ? Math.round(initialData[s].total / grandTotal * 100) : 0;
                            return `
                            <span class="consumo-legend-item">
                                <span class="consumo-legend-dot" style="background:${SEDE_COLORS[s]}"></span>
                                ${s}: ${formatCOP(initialData[s].total)} (${pct}%)
                            </span>`;
                        }).join('')}
                    </div>
                </div>

                <!-- ═══ TARJETAS POR SEDE ═══ -->
                ${SEDES_BASE.map(s => {
                    const sd = initialData[s];
                    const sdPrev = prevData[s];
                    const sedeGrandPct = grandTotal > 0 ? Math.round(sd.total / grandTotal * 100) : 0;
                    const maxMonth = Math.max(...sd.months, 1);
                    const catEntriesSede = Object.entries(sd.categories).sort((a, b) => b[1] - a[1]).slice(0, 5);
                    const catTotalSede = catEntriesSede.reduce((sum, e) => sum + e[1], 0) || 1;
                    const catColorsSede = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899'];

                    // Delta año anterior para esta sede
                    const deltaSede = deltaPct(sd.total, sdPrev.total);
                    const deltaSedeTag = deltaSede === null
                        ? `<span style="font-size:0.7rem;color:#94a3b8;">Sin datos ${prevYear}</span>`
                        : (() => {
                            const up = parseFloat(deltaSede) >= 0;
                            const color = up ? '#ef4444' : '#10b981'; // gasto subió = rojo, bajó = verde
                            return `<span style="font-size:0.7rem;color:${color};font-weight:700;">${up ? '▲' : '▼'} ${Math.abs(deltaSede)}% vs ${prevYear} (${formatCOP(sdPrev.total)})</span>`;
                        })();

                    return `
                <div class="consumo-card" data-sede="${s}">
                    <div class="consumo-card-header" style="border-left: 4px solid ${SEDE_COLORS[s]}">
                        <div class="consumo-card-title-row">
                            <span class="consumo-card-icon">${SEDE_ICONS[s]}</span>
                            <div>
                                <h3 class="consumo-card-name">${s}</h3>
                                <span class="consumo-card-fullname">${SEDE_FULL_NAMES[s]}</span>
                            </div>
                        </div>
                        <div class="consumo-card-totals">
                            <div class="consumo-card-amount">${formatCOP(sd.total)}</div>
                            <div class="consumo-card-pct">${sedeGrandPct}% del total</div>
                            <div style="margin-top:3px;">${deltaSedeTag}</div>
                        </div>
                    </div>

                    <div class="consumo-card-body">
                        <h4 class="consumo-section-title">Gasto Mensual</h4>
                        <div class="consumo-mini-chart">
                            ${sd.months.map((val, mi) => {
                                const pct = Math.round(val / maxMonth * 100);
                                const isCurrentMonth = mi === currentMonth;
                                return `
                                <div class="consumo-mini-bar ${isCurrentMonth ? 'current' : ''}">
                                    <div class="consumo-mini-track">
                                        <div class="consumo-mini-fill" style="height:${Math.max(pct, 2)}%;background:${SEDE_COLORS[s]}${val === 0 ? '33' : ''}" title="${monthNames[mi]}: ${formatCOP(val)}"></div>
                                    </div>
                                    <span class="consumo-mini-label">${monthNames[mi]}</span>
                                </div>`;
                            }).join('')}
                        </div>

                        ${catEntriesSede.length > 0 ? `
                        <h4 class="consumo-section-title" style="margin-top:12px;">Top Categorías</h4>
                        <div class="consumo-cat-list">
                            ${catEntriesSede.map((e, i) => {
                                const pct = Math.round(e[1] / catTotalSede * 100);
                                return `
                                <div class="consumo-cat-row">
                                    <span class="consumo-cat-name">${e[0]}</span>
                                    <div class="consumo-cat-bar-track"><div class="consumo-cat-bar-fill" style="width:${pct}%;background:${catColorsSede[i % catColorsSede.length]}"></div></div>
                                    <span class="consumo-cat-amount">${formatCOP(e[1])}</span>
                                </div>`;
                            }).join('')}
                        </div>` : ''}

                        <h4 class="consumo-section-title" style="margin-top:12px;">Últimas Órdenes (${sd.orders.length})</h4>
                        <div class="consumo-orders-list">
                            ${sd.orders.length === 0 ? '<p class="consumo-empty">Sin órdenes este año</p>' :
                            sd.orders.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).map(o => `
                                <div class="consumo-order-row" onclick="window.openOrderDetail('${o.id}')">
                                    <span class="consumo-order-id">${o.id}</span>
                                    <span class="consumo-order-provider">${o.provider}</span>
                                    <span class="consumo-order-amount">${formatCOP(o._assignedAmount)}</span>
                                    <span class="status-badge ${o.status}" style="font-size:0.62rem;padding:2px 6px;">${o.status === 'pending' ? 'Pendiente' : o.status === 'approved' ? 'Aprobada' : o.status === 'sent' ? 'Enviada' : o.status === 'conformidad' ? 'Conformidad' : o.status === 'paid' ? 'Pagada' : 'Completada'}</span>
                                </div>
                            `).join('')}
                            ${sd.orders.length > 5 ? `<p class="consumo-more">… y ${sd.orders.length - 5} más</p>` : ''}
                        </div>
                    </div>
                </div>`;
                }).join('')}

                <!-- Tabla comparativa mensual -->
                <div class="consumo-table-section">
                    <h3 class="consumo-table-title">📅 Comparativa Mensual</h3>
                    <div class="table-scroll">
                        <table class="consumo-comp-table">
                            <thead>
                                <tr>
                                    <th>Mes</th>
                                    ${SEDES_BASE.map(s => `<th style="color:${SEDE_COLORS[s]}">${s}</th>`).join('')}
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody id="consumo-comp-tbody">
                                ${monthNames.map((m, mi) => {
                                    const rowTotal = SEDES_BASE.reduce((sum, s) => sum + initialData[s].months[mi], 0);
                                    const isFuture = mi > currentMonth;
                                    return `
                                    <tr class="${isFuture ? 'consumo-future' : ''} ${mi === currentMonth ? 'consumo-current-row' : ''}">
                                        <td><strong>${m}</strong></td>
                                        ${SEDES_BASE.map(s => `<td>${initialData[s].months[mi] > 0 ? formatCOP(initialData[s].months[mi]) : '—'}</td>`).join('')}
                                        <td><strong>${rowTotal > 0 ? formatCOP(rowTotal) : '—'}</strong></td>
                                    </tr>`;
                                }).join('')}
                                <tr class="consumo-total-row">
                                    <td><strong>TOTAL</strong></td>
                                    ${SEDES_BASE.map(s => `<td><strong>${formatCOP(initialData[s].total)}</strong></td>`).join('')}
                                    <td><strong>${formatCOP(grandTotal)}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        // Listener para cambio de año — reconstruir vista
        const yearSelect = document.getElementById('consumo-year-select');
        if (yearSelect) {
            if (APP_STATE._consumoYear) yearSelect.value = APP_STATE._consumoYear;
            yearSelect.addEventListener('change', () => {
                APP_STATE._consumoYear = yearSelect.value;
                renderView('metricas');
            });
        }

    } else if (view === 'new-request') {
        const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' }); // YYYY-MM-DD en hora Colombia
        const BASE_ORDER_NUM = 1247; // Las 2 órdenes existentes (OC-003, OC-004) se renombrarán manualmente; el siguiente es 1249
        // Calcular el siguiente número: el mayor número existente + 1, con mínimo BASE_ORDER_NUM + 1
        const maxExisting = APP_STATE.requests.reduce((max, r) => {
            const n = parseInt((r.id || '').replace('OC-', ''), 10);
            return isNaN(n) ? max : Math.max(max, n);
        }, BASE_ORDER_NUM);
        const nextOrderNum = (maxExisting + 1).toString();

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
                        <input type="text" id="sheet-orden-num" class="meta-input" value="${nextOrderNum}" placeholder="1249">
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
                            <option value="Anticipo - Contado">Anticipo - Contado</option>
                            <option value="Contado" selected>Contado</option>
                            <option value="Anticipo">Anticipo</option>
                            <option value="Credito">Credito</option>
                        </select>
                    </div>
                    <div class="order-meta-item">
                        <span class="meta-label">% PAGO</span>
                        <select id="sheet-pago-perc" class="meta-input">
                            <option value="50% - 50%">50% - 50%</option>
                            <option value="100%" selected>100%</option>
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
                        <div class="category-select-row">
                            <label>🏷️ Categoría de Gasto <span class="field-required">*Obligatorio</span></label>
                            <div class="category-select-wrapper">
                                <select id="sheet-categoria" class="category-dropdown" required>
                                    <option value="" disabled selected>Selecciona una categoría...</option>
                                    ${CATEGORIAS_GASTO.map(c => `<option value="${c}">${c}</option>`).join('')}
                                </select>
                                <span class="category-select-icon">▾</span>
                            </div>
                        </div>
                        <div class="field-group" style="margin-top:14px;">
                            <label style="font-size:0.82rem;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.3px;display:block;margin-bottom:6px;">👤 Persona que genera la necesidad</label>
                            <input type="text" id="sheet-necesidad-persona" class="form-input" placeholder="Nombre de quien solicita o genera la necesidad..." style="width:100%;padding:10px 14px;border:2px solid #e2e8f0;border-radius:10px;font-size:0.9rem;font-family:inherit;transition:border-color 0.2s;" onfocus="this.style.borderColor='#0c84ff'" onblur="this.style.borderColor='#e2e8f0'">
                        </div>
                        <label style="margin-top:14px;display:block;">Observaciones / Uso de compra</label>
                        <textarea id="sheet-obs" placeholder="Describe el propósito de esta compra..."></textarea>
                        <div class="order-policy-note">
                            <p class="policy-note-icon">📋</p>
                            <div class="policy-note-text">
                                <p>Si el ítem o servicio es mayor a <strong>$3.000.000</strong> debe presentar <strong>3 cotizaciones.</strong></p>
                                <p>Si el valor es mayor a <strong>$15.000.000</strong>, debe tener <strong>contrato y póliza de aseguramiento.</strong></p>
                            </div>
                        </div>
                        <div class="order-contact-info">
                            <p class="contact-title"><em>Si tiene preguntas sobre esta factura, póngase en contacto con:</em></p>
                            <p class="contact-line"><strong>Pagos:</strong> contabilidad@uibmedellin.org - Tel (604) 5609754 Ext 7200</p>
                            <p class="contact-line"><strong>Recepción de documentos:</strong> buzonfacturaelectronica@uibmedellin.org y contabilidad@uibmedellin.org - Tel (604) 5609754 Ext 7209</p>
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
        _initDraftAutosave();

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
                <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
                    <button class="btn-excel" onclick="window.exportProvidersExcel()" title="Exportar proveedores a Excel">📊 Exportar Excel</button>
                    <button class="btn-metricas-pdf" onclick="window.exportProvidersPDF()" title="Exportar proveedores a PDF">📄 Informe PDF</button>
                    <button class="btn-primary" onclick="window.openProviderForm()">
                        <span class="btn-icon">➕</span> Nuevo Proveedor
                    </button>
                </div>
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
                    <input type="text" id="pf-nombre" value="${p.Nombre}" placeholder="Nombre o razón social" style="text-transform:uppercase;">
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
        Nombre: nombre.toUpperCase(),
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

// ─── Exportar Proveedores a Excel ───
window.exportProvidersExcel = () => {
    const providers = PROVIDERS_DB;
    if (providers.length === 0) { showToast('Sin datos', 'No hay proveedores registrados', 'warning'); return; }
    try {
        const wb = XLSX.utils.book_new();
        const data = providers.map(p => ({
            'Nombre':               p.Nombre || '',
            'NIT':                  p.NIT || '',
            'Teléfono':             p.Tel || '',
            'Correo':               p.Email || '',
            'Contacto':             p.Contacto || '',
            'RUT':                  p.RUT ? 'Sí' : 'No',
            'Certificación Bancaria': p.CertBancaria ? 'Sí' : 'No'
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        // Ajustar ancho de columnas
        ws['!cols'] = [{ wch: 40 }, { wch: 18 }, { wch: 18 }, { wch: 36 }, { wch: 24 }, { wch: 8 }, { wch: 20 }];
        XLSX.utils.book_append_sheet(wb, ws, 'Proveedores');
        const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });
        XLSX.writeFile(wb, `Proveedores_UIB_${today}.xlsx`);
        showToast('Excel descargado', `${providers.length} proveedores exportados correctamente`, 'success');
    } catch(err) { showToast('Error', 'No se pudo exportar: ' + err.message, 'error'); }
};

// ─── Exportar Proveedores a PDF ───
window.exportProvidersPDF = () => {
    const providers = PROVIDERS_DB;
    if (providers.length === 0) { showToast('Sin datos', 'No hay proveedores registrados', 'warning'); return; }
    try {
        const jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
        if (!jsPDFClass) throw new Error('jsPDF no disponible');
        const doc = new jsPDFClass('l', 'mm', 'letter'); // landscape
        const W = 279.4, M = 14;
        // Cabecera
        doc.setFillColor(14, 30, 52);
        doc.rect(0, 0, W, 30, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(16); doc.setFont('helvetica', 'bold');
        doc.text('BASE DE DATOS DE PROVEEDORES', W / 2, 12, { align: 'center' });
        doc.setFontSize(10); doc.setFont('helvetica', 'normal');
        doc.text('Unión Israelita de Beneficencia de Medellín — NIT 890.902.916-1', W / 2, 20, { align: 'center' });
        doc.text('Generado: ' + new Date().toLocaleDateString('es-CO', { timeZone: 'America/Bogota', dateStyle: 'long' }), W / 2, 26, { align: 'center' });
        doc.setTextColor(30, 41, 59);
        // Tabla
        const head = [['#', 'Nombre', 'NIT', 'Teléfono', 'Correo', 'Contacto', 'RUT', 'Cert. Bancaria']];
        const body = providers.map((p, i) => [
            i + 1,
            p.Nombre || '',
            p.NIT || '—',
            p.Tel || '—',
            p.Email || '—',
            p.Contacto || '—',
            p.RUT ? 'X' : '—',
            p.CertBancaria ? 'X' : '—'
        ]);
        doc.autoTable({
            head, body,
            startY: 36,
            margin: { left: M, right: M },
            styles: { fontSize: 8, cellPadding: 3, overflow: 'linebreak' },
            headStyles: { fillColor: [14, 30, 52], textColor: 255, fontStyle: 'bold' },
            alternateRowStyles: { fillColor: [245, 248, 255] },
            columnStyles: {
                0: { cellWidth: 12, halign: 'center', overflow: 'visible' },
                1: { cellWidth: 56 },
                2: { cellWidth: 28, overflow: 'visible' },
                3: { cellWidth: 26, overflow: 'visible' },
                4: { cellWidth: 54 },
                5: { cellWidth: 36 },
                6: { cellWidth: 14, halign: 'center' },
                7: { cellWidth: 22, halign: 'center' }
            },
            didDrawPage: (data) => {
                const pageCount = doc.internal.getNumberOfPages();
                doc.setFontSize(8); doc.setTextColor(150);
                doc.text(`Página ${data.pageNumber} de ${pageCount}  |  ${providers.length} proveedores`, W / 2, doc.internal.pageSize.height - 6, { align: 'center' });
            }
        });
        const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });
        doc.save(`Proveedores_UIB_${today}.pdf`);
        showToast('PDF descargado', `${providers.length} proveedores exportados correctamente`, 'success');
    } catch(err) { showToast('Error', 'No se pudo exportar: ' + err.message, 'error'); }
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

// ─── Exportar Métricas ───
window.exportMetricasExcel = () => {
    const requests = APP_STATE.requests;
    const selectedYear = APP_STATE._consumoYear ? parseInt(APP_STATE._consumoYear) : new Date().getFullYear();
    const prevYear = selectedYear - 1;
    const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const SEDES = ['CTH','ENC','UIB'];
    const SEDE_FULL = { CTH: 'Colegio Theodoro Herzl', ENC: 'Jardín Infantil El Encuentro', UIB: 'Unión Israelita de Beneficencia' };
    const yearReqs = requests.filter(r => new Date(r.date).getFullYear() === selectedYear);
    const prevReqs = requests.filter(r => new Date(r.date).getFullYear() === prevYear);
    if (yearReqs.length === 0) { showToast('Sin datos', `No hay órdenes en ${selectedYear}`, 'warning'); return; }
    try {
        const wb = XLSX.utils.book_new();

        // ── Hoja 1: KPIs generales ────────────────────────────────────────────
        const grandTotal = yearReqs.reduce((s, r) => s + (r.total || 0), 0);
        const grandTotalPrev = prevReqs.reduce((s, r) => s + (r.total || 0), 0);
        const ticketProm = yearReqs.length > 0 ? grandTotal / yearReqs.length : 0;
        const provUnicos = new Set(yearReqs.map(r => r.provider).filter(Boolean)).size;
        const deltaTotal = grandTotalPrev > 0 ? ((grandTotal - grandTotalPrev) / grandTotalPrev * 100).toFixed(1) + '%' : 'N/A';
        const h0 = [
            { 'Indicador': 'Inversión Total', 'Valor': Math.round(grandTotal), 'Año Anterior': Math.round(grandTotalPrev), 'Δ% vs año anterior': deltaTotal },
            { 'Indicador': 'N° Órdenes', 'Valor': yearReqs.length, 'Año Anterior': prevReqs.length, 'Δ% vs año anterior': prevReqs.length > 0 ? ((yearReqs.length - prevReqs.length) / prevReqs.length * 100).toFixed(1) + '%' : 'N/A' },
            { 'Indicador': 'Ticket Promedio', 'Valor': Math.round(ticketProm), 'Año Anterior': '', 'Δ% vs año anterior': '' },
            { 'Indicador': 'Proveedores Únicos', 'Valor': provUnicos, 'Año Anterior': new Set(prevReqs.map(r => r.provider).filter(Boolean)).size, 'Δ% vs año anterior': '' },
            { 'Indicador': 'Categorías', 'Valor': new Set(yearReqs.map(r => r.categoria || 'Sin categoría')).size, 'Año Anterior': '', 'Δ% vs año anterior': '' },
            { 'Indicador': 'Sedes Activas', 'Valor': SEDES.filter(s => yearReqs.some(r => (r.sede || 'CTH').includes(s))).length, 'Año Anterior': '', 'Δ% vs año anterior': '' }
        ];
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h0), `KPIs ${selectedYear}`);

        // ── Hoja 2: Comparativa mensual por sede ─────────────────────────────
        const mData = SEDES.reduce((a, s) => { a[s] = Array(12).fill(0); return a; }, {});
        yearReqs.forEach(r => {
            const m = new Date(r.date).getMonth();
            const parts = (r.sede || 'CTH').split('/').filter(s => SEDES.includes(s));
            if (!parts.length) parts.push('CTH');
            const share = (r.total || 0) / parts.length;
            parts.forEach(s => { mData[s][m] += share; });
        });
        const h1 = MESES.map((mes, i) => {
            const row = { 'Mes': mes };
            SEDES.forEach(s => { row[SEDE_FULL[s]] = Math.round(mData[s][i]); });
            row['Total'] = SEDES.reduce((sum, s) => sum + Math.round(mData[s][i]), 0);
            return row;
        });
        const totRow = { 'Mes': 'TOTAL' };
        SEDES.forEach(s => { totRow[SEDE_FULL[s]] = Math.round(mData[s].reduce((a, b) => a + b, 0)); });
        totRow['Total'] = h1.reduce((sum, r) => sum + r['Total'], 0);
        h1.push(totRow);
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h1), 'Comparativa Mensual');

        // ── Hoja 3: Por categoría ─────────────────────────────────────────────
        const catMap = {};
        yearReqs.forEach(r => { const c = r.categoria || 'Sin categoría'; catMap[c] = (catMap[c] || 0) + (r.total || 0); });
        const h2 = Object.entries(catMap).sort((a, b) => b[1] - a[1]).map(([cat, total]) => ({
            'Categoría': cat,
            'Total COP': Math.round(total),
            'N° Órdenes': yearReqs.filter(r => (r.categoria || 'Sin categoría') === cat).length,
            '% del Gasto': grandTotal > 0 ? (total / grandTotal * 100).toFixed(1) + '%' : '0%'
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h2), 'Por Categoría');

        // ── Hoja 4: Top Proveedores ───────────────────────────────────────────
        const provMap = {};
        yearReqs.forEach(r => {
            if (!r.provider) return;
            provMap[r.provider] = provMap[r.provider] || { total: 0, count: 0 };
            provMap[r.provider].total += (r.total || 0);
            provMap[r.provider].count++;
        });
        const h4 = Object.entries(provMap).sort((a, b) => b[1].total - a[1].total).map(([prov, info], idx) => ({
            'Posición': idx + 1,
            'Proveedor': prov,
            'Total COP': Math.round(info.total),
            'N° Órdenes': info.count,
            '% del Gasto': grandTotal > 0 ? (info.total / grandTotal * 100).toFixed(1) + '%' : '0%'
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h4), 'Top Proveedores');

        // ── Hoja 5: Pipeline de estados ───────────────────────────────────────
        const STATUS_LABELS = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Conformidad', paid: 'Pagada', voucher: 'Completada' };
        const statusCounts = {};
        yearReqs.forEach(r => { statusCounts[r.status] = (statusCounts[r.status] || 0) + 1; });
        const h5 = Object.entries(STATUS_LABELS).map(([k, label]) => ({
            'Estado': label,
            'N° Órdenes': statusCounts[k] || 0,
            '% del Total': yearReqs.length > 0 ? ((statusCounts[k] || 0) / yearReqs.length * 100).toFixed(1) + '%' : '0%'
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h5), 'Estado de Órdenes');

        // ── Hoja 6: Detalle órdenes ───────────────────────────────────────────
        const sl = { pending:'Pendiente', approved:'Aprobada', sent:'Enviada', conformidad:'Conformidad', paid:'Pagada', voucher:'Completada' };
        const h3 = yearReqs.map(r => ({ 'N° Orden': r.id, 'Fecha': formatDate(r.date), 'Proveedor': r.provider || '', 'Sede': r.sede || '', 'Categoría': r.categoria || '', 'Total': r.total || 0, 'Estado': sl[r.status] || r.status }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(h3), `Órdenes ${selectedYear}`);

        XLSX.writeFile(wb, `Metricas_UIB_${selectedYear}.xlsx`);
        showToast('Excel descargado', `Métricas ${selectedYear} exportadas (6 hojas)`, 'success');
    } catch(err) { showToast('Error', 'No se pudo exportar: ' + err.message, 'error'); }
};

window.exportMetricasPDF = () => {
    const requests = APP_STATE.requests;
    const selectedYear = APP_STATE._consumoYear ? parseInt(APP_STATE._consumoYear) : new Date().getFullYear();
    const prevYear = selectedYear - 1;
    const MESES_FULL = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const SEDES = ['CTH','ENC','UIB'];
    const SEDE_FULL = { CTH: 'Colegio Theodoro Herzl', ENC: 'Jardín Infantil El Encuentro', UIB: 'Unión Israelita de Beneficencia' };
    const yearReqs = requests.filter(r => new Date(r.date).getFullYear() === selectedYear);
    const prevReqs = requests.filter(r => new Date(r.date).getFullYear() === prevYear);
    if (yearReqs.length === 0) { showToast('Sin datos', `No hay órdenes en ${selectedYear}`, 'warning'); return; }
    try {
        const jsPDFClass = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
        if (!jsPDFClass) throw new Error('jsPDF no disponible');
        const doc = new jsPDFClass('p', 'mm', 'letter');
        const W = 215.9, M = 15;

        // ── Encabezado ────────────────────────────────────────────────────────
        doc.setFillColor(14, 30, 52);
        doc.rect(0, 0, W, 34, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(17); doc.setFont('helvetica', 'bold');
        doc.text(`INFORME DE MÉTRICAS ${selectedYear}`, W / 2, 13, { align: 'center' });
        doc.setFontSize(10); doc.setFont('helvetica', 'normal');
        doc.text('Unión Israelita de Beneficencia de Medellín — NIT 890.902.916-1', W / 2, 21, { align: 'center' });
        doc.text('Generado: ' + new Date().toLocaleDateString('es-CO', { dateStyle: 'long' }), W / 2, 27, { align: 'center' });
        let y = 44;
        doc.setTextColor(30, 41, 59);

        // ── KPIs generales ────────────────────────────────────────────────────
        const grandTotal = yearReqs.reduce((s, r) => s + (r.total || 0), 0);
        const grandTotalPrev = prevReqs.reduce((s, r) => s + (r.total || 0), 0);
        const ticketProm = yearReqs.length > 0 ? grandTotal / yearReqs.length : 0;
        const provUnicos = new Set(yearReqs.map(r => r.provider).filter(Boolean)).size;
        const prevProvUnicos = new Set(prevReqs.map(r => r.provider).filter(Boolean)).size;

        function fmtDelta(curr, prev) {
            if (prev === 0) return '—';
            const d = ((curr - prev) / prev * 100).toFixed(1);
            return (parseFloat(d) >= 0 ? '▲ ' : '▼ ') + Math.abs(d) + '%';
        }

        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('Indicadores Clave de Desempeño (KPIs)', M, y); y += 5;
        const kpiRows = [
            ['Inversión Total', formatCOP(grandTotal), formatCOP(grandTotalPrev), fmtDelta(grandTotal, grandTotalPrev)],
            ['N° Órdenes', String(yearReqs.length), String(prevReqs.length), fmtDelta(yearReqs.length, prevReqs.length)],
            ['Ticket Promedio', formatCOP(ticketProm), '—', '—'],
            ['Proveedores Únicos', String(provUnicos), String(prevProvUnicos), fmtDelta(provUnicos, prevProvUnicos)]
        ];
        doc.autoTable({ startY: y, head: [['Indicador', selectedYear, prevYear, 'Δ% vs año anterior']], body: kpiRows, styles: { fontSize: 9, cellPadding: 2.5 }, headStyles: { fillColor: [14,30,52], textColor: 255 }, alternateRowStyles: { fillColor: [241,245,249] }, margin: { left: M, right: M } });
        y = doc.lastAutoTable.finalY + 10;

        // ── Pipeline de estados ───────────────────────────────────────────────
        const STATUS_LABELS = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Conformidad', paid: 'Pagada', voucher: 'Completada' };
        const statusCounts = {};
        yearReqs.forEach(r => { statusCounts[r.status] = (statusCounts[r.status] || 0) + 1; });
        const statusRows = Object.entries(STATUS_LABELS).map(([k, label]) => {
            const cnt = statusCounts[k] || 0;
            return [label, String(cnt), yearReqs.length > 0 ? (cnt / yearReqs.length * 100).toFixed(1) + '%' : '0%'];
        }).filter(r => r[1] !== '0');
        if (statusRows.length > 0) {
            if (y > 220) { doc.addPage(); y = M; }
            doc.setFontSize(11); doc.setFont('helvetica', 'bold');
            doc.text('Estado de Órdenes', M, y); y += 4;
            doc.autoTable({ startY: y, head: [['Estado', 'N° Órdenes', '% del Total']], body: statusRows, styles: { fontSize: 9, cellPadding: 2.5 }, headStyles: { fillColor: [14,30,52], textColor: 255 }, alternateRowStyles: { fillColor: [241,245,249] }, margin: { left: M, right: M } });
            y = doc.lastAutoTable.finalY + 10;
        }

        // ── Top proveedores ───────────────────────────────────────────────────
        const provMap = {};
        yearReqs.forEach(r => {
            if (!r.provider) return;
            provMap[r.provider] = provMap[r.provider] || { total: 0, count: 0 };
            provMap[r.provider].total += (r.total || 0);
            provMap[r.provider].count++;
        });
        const topProv = Object.entries(provMap).sort((a, b) => b[1].total - a[1].total).slice(0, 10);
        if (topProv.length > 0) {
            if (y > 220) { doc.addPage(); y = M; }
            doc.setFontSize(11); doc.setFont('helvetica', 'bold');
            doc.text('Top Proveedores por Gasto', M, y); y += 4;
            const provRows = topProv.map(([prov, info], idx) => [
                String(idx + 1), prov, formatCOP(info.total), String(info.count),
                grandTotal > 0 ? (info.total / grandTotal * 100).toFixed(1) + '%' : '0%'
            ]);
            doc.autoTable({ startY: y, head: [['#', 'Proveedor', 'Total COP', 'Órdenes', '% Gasto']], body: provRows, styles: { fontSize: 8.5, cellPadding: 2 }, headStyles: { fillColor: [14,30,52], textColor: 255 }, alternateRowStyles: { fillColor: [241,245,249] }, margin: { left: M, right: M } });
            y = doc.lastAutoTable.finalY + 10;
        }

        // ── Tabla comparativa mensual ─────────────────────────────────────────
        const mData = SEDES.reduce((a, s) => { a[s] = Array(12).fill(0); return a; }, {});
        yearReqs.forEach(r => {
            const m = new Date(r.date).getMonth();
            const parts = (r.sede || 'CTH').split('/').filter(s => SEDES.includes(s));
            if (!parts.length) parts.push('CTH');
            const share = (r.total || 0) / parts.length;
            parts.forEach(s => { mData[s][m] += share; });
        });
        const tableRows = MESES_FULL.map((mes, i) => {
            const rowTot = SEDES.reduce((sum, s) => sum + mData[s][i], 0);
            return [mes, ...SEDES.map(s => mData[s][i] > 0 ? formatCOP(mData[s][i]) : '—'), formatCOP(rowTot)];
        });
        tableRows.push(['TOTAL', ...SEDES.map(s => formatCOP(mData[s].reduce((a,b)=>a+b,0))), formatCOP(grandTotal)]);
        if (y > 180) { doc.addPage(); y = M; }
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('Comparativa Mensual por Sede', M, y); y += 4;
        doc.autoTable({ startY: y, head: [['Mes','CTH','ENC','UIB','Total']], body: tableRows, styles: { fontSize: 8, cellPadding: 2 }, headStyles: { fillColor: [14,30,52], textColor: 255 }, alternateRowStyles: { fillColor: [241,245,249] }, margin: { left: M, right: M } });
        y = doc.lastAutoTable.finalY + 10;

        // ── Tabla por categoría ───────────────────────────────────────────────
        const catMap = {};
        yearReqs.forEach(r => { const c = r.categoria || 'Sin categoría'; catMap[c] = (catMap[c] || 0) + (r.total || 0); });
        const catRows = Object.entries(catMap).sort((a, b) => b[1] - a[1]).map(([cat, total]) => [
            cat,
            yearReqs.filter(r => (r.categoria || 'Sin categoría') === cat).length.toString(),
            formatCOP(total),
            ((total / grandTotal) * 100).toFixed(1) + '%'
        ]);
        if (y > 220) { doc.addPage(); y = M; }
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('Distribución por Categoría', M, y); y += 4;
        doc.autoTable({ startY: y, head: [['Categoría','N° Órdenes','Total','% Gasto']], body: catRows, styles: { fontSize: 8, cellPadding: 2 }, headStyles: { fillColor: [14,30,52], textColor: 255 }, alternateRowStyles: { fillColor: [241,245,249] }, margin: { left: M, right: M } });

        doc.save(`Metricas_UIB_${selectedYear}.pdf`);
        showToast('PDF descargado', `Informe de métricas ${selectedYear} generado`, 'success');
    } catch(err) { console.error(err); showToast('Error', 'No se pudo generar el PDF: ' + err.message, 'error'); }
};

// ─── Autosave de borrador en nueva solicitud ───
const DRAFT_KEY = 'cth_draft_new_request';

function _initDraftAutosave() {
    const draft = _loadDraft();
    if (draft) {
        _showDraftBanner(draft);
    }

    // Guardar borrador en cada cambio de cualquier input/select/textarea del formulario
    const form = document.querySelector('.card-form.full-sheet');
    if (!form) return;
    form.addEventListener('input', _saveDraft, { passive: true });
    form.addEventListener('change', _saveDraft, { passive: true });
}

function _collectDraftData() {
    const rows = [];
    document.querySelectorAll('#sheet-table-body tr').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if (inputs.length >= 3) {
            rows.push({
                desc: inputs[0]?.value || '',
                qty: inputs[1]?.value || '',
                price: inputs[2]?.value || ''
            });
        }
    });
    return {
        fecha: document.getElementById('sheet-fecha')?.value || '',
        ordenNum: document.getElementById('sheet-orden-num')?.value || '',
        sede: document.getElementById('sheet-sede')?.value || '',
        pago: document.getElementById('sheet-pago')?.value || '',
        pagoPerc: document.getElementById('sheet-pago-perc')?.value || '',
        envioSede: document.getElementById('sheet-envio-sede')?.value || '',
        envioCiudad: document.getElementById('sheet-envio-ciudad')?.value || '',
        dir: document.getElementById('sheet-envio-dir')?.value || '',
        barrio: document.getElementById('sheet-envio-barrio')?.value || '',
        envioTel: document.getElementById('sheet-envio-tel')?.value || '',
        resp: document.getElementById('sheet-envio-resp')?.value || '',
        provName: document.getElementById('sheet-prov-name')?.value || '',
        provNit: document.getElementById('sheet-prov-nit')?.value || '',
        provTel: document.getElementById('sheet-prov-tel')?.value || '',
        provEmail: document.getElementById('sheet-prov-email')?.value || '',
        provContacto: document.getElementById('sheet-prov-contacto')?.value || '',
        categoria: document.getElementById('sheet-categoria')?.value || '',
        necesidadPersona: document.getElementById('sheet-necesidad-persona')?.value || '',
        obs: document.getElementById('sheet-obs')?.value || '',
        iva: document.getElementById('sheet-iva')?.value || '',
        flete: document.getElementById('sheet-flete')?.value || '',
        otro: document.getElementById('sheet-otro')?.value || '',
        descuento: document.getElementById('sheet-descuento')?.value || '',
        rows,
        _savedAt: new Date().toISOString()
    };
}

function _saveDraft() {
    try {
        const d = _collectDraftData();
        // Solo guardar si hay algo relevante escrito
        if (!d.provName && !d.obs && d.rows.every(r => !r.desc)) return;
        localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
        // Mostrar indicador sutil de guardado
        let ind = document.getElementById('draft-saved-indicator');
        if (!ind) {
            ind = document.createElement('span');
            ind.id = 'draft-saved-indicator';
            ind.style.cssText = 'position:fixed;bottom:72px;right:20px;background:#1e293b;color:#94a3b8;font-size:11px;padding:4px 10px;border-radius:20px;z-index:9000;pointer-events:none;opacity:0;transition:opacity 0.3s';
            document.body.appendChild(ind);
        }
        ind.textContent = '💾 Borrador guardado';
        ind.style.opacity = '1';
        clearTimeout(ind._timer);
        ind._timer = setTimeout(() => { ind.style.opacity = '0'; }, 2000);
    } catch(e) {}
}

function _loadDraft() {
    try {
        const raw = localStorage.getItem(DRAFT_KEY);
        if (!raw) return null;
        const d = JSON.parse(raw);
        if (!d || (!d.provName && !d.obs && (!d.rows || d.rows.every(r => !r.desc)))) return null;
        return d;
    } catch(e) { return null; }
}

function _clearDraft() {
    localStorage.removeItem(DRAFT_KEY);
    const ind = document.getElementById('draft-saved-indicator');
    if (ind) ind.remove();
}

function _showDraftBanner(draft) {
    const savedAt = draft._savedAt ? new Date(draft._savedAt).toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' }) : '';
    const prov = draft.provName ? ` — ${draft.provName}` : '';
    const banner = document.createElement('div');
    banner.id = 'draft-restore-banner';
    banner.style.cssText = 'position:sticky;top:0;z-index:800;background:#1e3a5f;color:#e2e8f0;padding:10px 18px;display:flex;align-items:center;gap:12px;border-radius:0 0 10px 10px;box-shadow:0 2px 12px rgba(0,0,0,0.2);font-size:13px;';
    banner.innerHTML = `
        <span style="font-size:16px;">💾</span>
        <span style="flex:1;">Hay un borrador guardado${prov} (${savedAt}). ¿Quieres recuperarlo?</span>
        <button onclick="window._restoreDraft()" style="background:#0c84ff;color:#fff;border:none;padding:5px 14px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;">Restaurar</button>
        <button onclick="window._discardDraft()" style="background:transparent;color:#94a3b8;border:1px solid #334155;padding:5px 12px;border-radius:6px;cursor:pointer;font-size:12px;">Descartar</button>
    `;
    const form = document.querySelector('.card-form.full-sheet');
    if (form) form.prepend(banner);
}

window._restoreDraft = () => {
    const draft = _loadDraft();
    if (!draft) return;
    document.getElementById('draft-restore-banner')?.remove();

    // Restaurar campos simples
    const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
    set('sheet-fecha', draft.fecha);
    set('sheet-orden-num', draft.ordenNum);
    set('sheet-sede', draft.sede);
    set('sheet-pago', draft.pago);
    set('sheet-pago-perc', draft.pagoPerc);
    set('sheet-envio-sede', draft.envioSede);
    set('sheet-envio-ciudad', draft.envioCiudad);
    set('sheet-envio-dir', draft.dir);
    set('sheet-envio-barrio', draft.barrio);
    set('sheet-envio-tel', draft.envioTel);
    set('sheet-envio-resp', draft.resp);
    set('sheet-prov-name', draft.provName);
    set('sheet-prov-nit', draft.provNit);
    set('sheet-prov-tel', draft.provTel);
    set('sheet-prov-email', draft.provEmail);
    set('sheet-prov-contacto', draft.provContacto);
    set('sheet-categoria', draft.categoria);
    set('sheet-necesidad-persona', draft.necesidadPersona);
    set('sheet-obs', draft.obs);
    set('sheet-iva', draft.iva);
    set('sheet-flete', draft.flete);
    set('sheet-otro', draft.otro);
    set('sheet-descuento', draft.descuento);

    // Restaurar filas de ítems
    if (draft.rows && draft.rows.length > 0) {
        const tbody = document.getElementById('sheet-table-body');
        if (tbody) {
            tbody.innerHTML = '';
            draft.rows.forEach((row, i) => {
                window.addSheetRow && i > 0 && window.addSheetRow();
                setTimeout(() => {
                    const rows = tbody.querySelectorAll('tr');
                    const tr = rows[i];
                    if (!tr) return;
                    const inputs = tr.querySelectorAll('input');
                    if (inputs[0]) inputs[0].value = row.desc || '';
                    if (inputs[1]) { inputs[1].value = row.qty || '1'; }
                    if (inputs[2]) { inputs[2].value = row.price || ''; }
                    window.updateSheetCalculations && window.updateSheetCalculations();
                }, 50 * i);
            });
        }
    }

    window.updateSheetCalculations && window.updateSheetCalculations();
    showToast('Borrador restaurado', 'El formulario fue recuperado correctamente', 'success');
};

window._discardDraft = () => {
    _clearDraft();
    document.getElementById('draft-restore-banner')?.remove();
    showToast('Borrador descartado', 'Se eliminó el borrador guardado', 'info');
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

    // Validar N° de orden no duplicado
    const ordenNumInput = document.getElementById('sheet-orden-num')?.value.trim();
    if (ordenNumInput) {
        const candidateId = 'OC-' + ordenNumInput;
        const exists = APP_STATE.requests.some(r => r.id === candidateId);
        if (exists) {
            showToast('N° orden duplicado', `Ya existe una orden con el número ${candidateId}. Usa otro número.`, 'error');
            document.getElementById('sheet-orden-num')?.focus();
            document.getElementById('sheet-orden-num').style.borderColor = '#ef4444';
            setTimeout(() => { document.getElementById('sheet-orden-num').style.borderColor = ''; }, 3000);
            return;
        }
    }

    // Validar categoría de gasto
    const categoriaSelect = document.getElementById('sheet-categoria');
    if (!categoriaSelect || !categoriaSelect.value) {
        showToast('Campo requerido', 'Selecciona una categoría de gasto', 'error');
        categoriaSelect?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        categoriaSelect?.focus();
        if (categoriaSelect) {
            categoriaSelect.style.borderColor = '#ef4444';
            categoriaSelect.classList.add('shake-field');
            setTimeout(() => { categoriaSelect.style.borderColor = ''; categoriaSelect.classList.remove('shake-field'); }, 3000);
        }
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
        categoria: document.getElementById('sheet-categoria')?.value || '',
        necesidadPersona: document.getElementById('sheet-necesidad-persona')?.value || '',
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
        categoria: data.categoria || '',
        necesidadPersona: data.necesidadPersona || '',
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

    addAuditEntry(request, 'Orden creada', `Creada por ${APP_STATE.userEmail}`);
    APP_STATE.requests.push(request);
    saveState();
    saveOrderToDB(request);
    _clearDraft(); // Limpiar borrador al enviar con éxito
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

// ─── Cambiar modo de firma de aprobación (digital ↔ manual) ───
window.switchApprovalMode = (mode) => {
    const digitalPanel = document.getElementById('sig-mode-digital');
    const manualPanel = document.getElementById('sig-mode-manual');
    const modeInput = document.getElementById('sig-approval-mode');
    const tabs = document.querySelectorAll('.sig-option-tabs .sig-tab');

    if (!modeInput) return;
    modeInput.value = mode;

    tabs.forEach(tab => tab.classList.remove('active'));
    if (mode === 'digital') {
        if (digitalPanel) digitalPanel.style.display = '';
        if (manualPanel) manualPanel.style.display = 'none';
        tabs[0]?.classList.add('active');
    } else {
        if (digitalPanel) digitalPanel.style.display = 'none';
        if (manualPanel) manualPanel.style.display = '';
        tabs[1]?.classList.add('active');
        // Inicializar canvas después de hacerlo visible (necesita dimensiones reales)
        const canvas = document.getElementById('sig-canvas-approve');
        if (canvas) {
            setTimeout(() => {
                if (!canvas._sigCtx) {
                    initSignaturePads(['approve']);
                } else {
                    // Re-ajustar tamaño si ya fue inicializado
                    if (canvas._sigResize) canvas._sigResize();
                }
            }, 50);
        }
    }
};

// ─── Seleccionar firma digital (admin con múltiples opciones) ───
window.selectDigitalSignature = (label, imageSrc, name) => {
    // Desmarcar todas las opciones
    document.querySelectorAll('.sig-digital-option').forEach(el => el.classList.remove('selected'));
    // Marcar la seleccionada
    label.classList.add('selected');
    // Guardar en los inputs hidden
    const selectedInput = document.getElementById('sig-digital-selected');
    const nameInput = document.getElementById('sig-digital-selected-name');
    if (selectedInput) selectedInput.value = imageSrc;
    if (nameInput) nameInput.value = name;
};


// ─── History View ───
function renderHistory(container) {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };

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
                                <th class="col-fecha">Fecha</th>
                                <th>Proveedor</th>
                                <th class="col-sede">Sede</th>
                                <th>Total</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody id="history-tbody">
                            ${[...requests].reverse().map(r => `
                                <tr data-status="${r.status}" class="clickable" onclick="window.openOrderDetail('${r.id}')">
                                    <td><strong>${r.id}</strong></td>
                                    <td class="col-fecha">${formatDate(r.date)}</td>
                                    <td>${r.provider}</td>
                                    <td class="col-sede">${r.sede || 'CTH'}</td>
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
    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
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

    const sigSolSrc = request.signatureSolicitante || request.signatureSolicitanteUrl || null;
    const sigAproSrc = request.signatureAprobacion || request.signatureAprobacionUrl || request.signatureAprobacionDigital || null;
    const sigSolHTML = sigSolSrc
        ? `<img src="${sigSolSrc}" alt="Firma Solicitante" class="sig-preview-img">`
        : '<p class="sig-empty">Sin firma</p>';
    const sigAproHTML = sigAproSrc
        ? `<img src="${sigAproSrc}" alt="Firma Aprobación" class="sig-preview-img">`
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
                        <div class="detail-field"><span class="df-label">Categoría</span><span class="df-value"><span class="category-badge">${request.categoria || 'Sin categoría'}</span></span></div>
                        ${request.necesidadPersona ? `<div class="detail-field"><span class="df-label">Genera la necesidad</span><span class="df-value">${request.necesidadPersona}</span></div>` : ''}
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
                    ${request.status === 'pending' ? (() => {
                        const userEmail = APP_STATE.userEmail;
                        const isAuthorized = APPROVAL_AUTHORIZED_EMAILS.includes(userEmail);
                        const isAdmin = APPROVAL_ADMIN_EMAILS.includes(userEmail);
                        const digitalSig = DIGITAL_SIGNATURES[userEmail];

                        if (!isAuthorized) {
                            return `<div class="sig-not-authorized">
                                <p>⚠️ Solo personal autorizado puede firmar la aprobación.</p>
                            </div>`;
                        }

                        if (isAdmin) {
                            // Admin: puede escoger entre TODAS las firmas digitales o firma manual
                            const allSigs = Object.entries(DIGITAL_SIGNATURES);
                            return `<div class="sig-approval-options" id="sig-approval-options">
                                <div class="sig-option-tabs">
                                    <button type="button" class="sig-tab active" onclick="window.switchApprovalMode('digital')">🖼️ Firma Digital</button>
                                    <button type="button" class="sig-tab" onclick="window.switchApprovalMode('manual')">✍️ Firma Manual</button>
                                </div>
                                <div id="sig-mode-digital" class="sig-mode-panel active">
                                    <div class="sig-digital-selector">
                                        ${allSigs.map(([email, sig], idx) => `
                                            <label class="sig-digital-option ${idx === 0 ? 'selected' : ''}" onclick="window.selectDigitalSignature(this, '${sig.image}', '${sig.name}')">
                                                <input type="radio" name="sig-digital-choice" value="${sig.image}" ${idx === 0 ? 'checked' : ''} hidden>
                                                <img src="${sig.image}" alt="${sig.name}" class="sig-digital-img-sm">
                                                <span class="sig-digital-name">${sig.name}</span>
                                            </label>
                                        `).join('')}
                                    </div>
                                </div>
                                <div id="sig-mode-manual" class="sig-mode-panel" style="display:none;">
                                    <div class="signature-pad-wrap">
                                        <canvas id="sig-canvas-approve" class="signature-canvas"></canvas>
                                        <button type="button" class="sig-clear-btn" onclick="window.clearSignature('approve')" title="Limpiar firma">✕</button>
                                        <div class="sig-placeholder" id="sig-placeholder-approve">Firme aquí para aprobar</div>
                                    </div>
                                </div>
                                <input type="hidden" id="sig-approval-mode" value="digital">
                                <input type="hidden" id="sig-digital-selected" value="${allSigs[0][1].image}">
                                <input type="hidden" id="sig-digital-selected-name" value="${allSigs[0][1].name}">
                            </div>`;
                        } else if (digitalSig) {
                            // Usuario con su propia firma digital
                            return `<div class="sig-approval-options" id="sig-approval-options">
                                <div class="sig-option-tabs">
                                    <button type="button" class="sig-tab active" onclick="window.switchApprovalMode('digital')">🖼️ Firma Digital</button>
                                    <button type="button" class="sig-tab" onclick="window.switchApprovalMode('manual')">✍️ Firma Manual</button>
                                </div>
                                <div id="sig-mode-digital" class="sig-mode-panel active">
                                    <div class="sig-digital-preview">
                                        <img src="${digitalSig.image}" alt="${digitalSig.name}" class="sig-digital-img" id="sig-digital-img">
                                        <p class="sig-digital-name">${digitalSig.name}</p>
                                    </div>
                                </div>
                                <div id="sig-mode-manual" class="sig-mode-panel" style="display:none;">
                                    <div class="signature-pad-wrap">
                                        <canvas id="sig-canvas-approve" class="signature-canvas"></canvas>
                                        <button type="button" class="sig-clear-btn" onclick="window.clearSignature('approve')" title="Limpiar firma">✕</button>
                                        <div class="sig-placeholder" id="sig-placeholder-approve">Firme aquí para aprobar</div>
                                    </div>
                                </div>
                                <input type="hidden" id="sig-approval-mode" value="digital">
                                <input type="hidden" id="sig-digital-selected" value="${digitalSig.image}">
                                <input type="hidden" id="sig-digital-selected-name" value="${digitalSig.name}">
                            </div>`;
                        } else {
                            // Autorizado sin firma digital → solo canvas manual
                            return `<div class="sig-approval-options">
                                <div class="signature-pad-wrap">
                                    <canvas id="sig-canvas-approve" class="signature-canvas"></canvas>
                                    <button type="button" class="sig-clear-btn" onclick="window.clearSignature('approve')" title="Limpiar firma">✕</button>
                                    <div class="sig-placeholder" id="sig-placeholder-approve">Firme aquí para aprobar</div>
                                </div>
                                <input type="hidden" id="sig-approval-mode" value="manual">
                            </div>`;
                        }
                    })() : sigAproHTML}
                    <p class="signature-label">FIRMA DE APROBACIÓN</p>
                </div>
            </div>

            ${(request.evidencias && request.evidencias.length > 0) ? `
            <div class="detail-section full-width" style="margin-top:20px;">
                <h3 class="detail-section-title">📸 Evidencias de Entrega</h3>
                <div class="evidence-gallery">
                    ${request.evidencias.map((ev, i) => `
                        <div class="evidence-thumb" onclick="window.previewEvidence('${request.id}', ${i})">
                            <img src="${ev.data || ev.storageUrl || ''}" alt="Evidencia ${i + 1}">
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
                    ${(() => {
                        // Calcular fechas efectivas en cadena: cada paso es como mínimo la fecha efectiva del paso anterior
                        function toD(str) { if (!str) return null; const d = new Date(str); return isNaN(d.getTime()) ? null : d; }
                        function maxD(a, b) { if (!a) return b; if (!b) return a; return a >= b ? a : b; }
                        function fmtD(d) { return d ? `<span class="step-date">${d.toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})}</span>` : ''; }

                        const raw1 = toD(request.date);
                        const raw2 = toD(request.approvedDate);
                        const raw3 = toD(request.sentDate);
                        const rawC = toD(request.conformidadDate);
                        const raw4 = toD(request.paidDate);
                        const raw5 = toD(request.voucherDate);

                        // Cada fecha efectiva nunca es menor que la efectiva del paso anterior
                        const eff1 = raw1;
                        const eff2 = raw2 ? maxD(raw2, eff1) : null;
                        const eff3 = raw3 ? maxD(raw3, eff2 || eff1) : null;

                        // ¿Es pago doble?
                        const isMultiPay = request.payments && request.payments.length > 1;

                        if (isMultiPay) {
                            const effC = rawC ? maxD(rawC, eff3 || eff2 || eff1) : null;
                            const eff4 = raw4 ? maxD(raw4, effC || eff3 || eff2 || eff1) : null;
                            const eff5 = raw5 ? maxD(raw5, eff4 || effC || eff3 || eff2 || eff1) : null;
                            const stConf = ['conformidad','paid','voucher'].includes(request.status);
                            const stPaid = ['paid','voucher'].includes(request.status);
                            return `
                    <div class="workflow-step active">
                        <div class="step-dot">1</div>
                        <span>Pendiente de firma</span>
                        ${fmtD(eff1)}
                    </div>
                    <div class="workflow-line ${['approved','sent','conformidad','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['approved','sent','conformidad','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">2</div>
                        <span>Aprobada</span>
                        ${fmtD(eff2)}
                    </div>
                    <div class="workflow-line ${['sent','conformidad','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['sent','conformidad','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">3</div>
                        <span>Enviada al Proveedor</span>
                        ${fmtD(eff3)}
                    </div>
                    <div class="workflow-line ${stConf ? 'active' : ''}"></div>
                    <div class="workflow-step ${stConf ? 'active' : ''}">
                        <div class="step-dot${request.status === 'conformidad' ? ' step-dot-conformidad' : ''}" style="${request.status === 'conformidad' ? 'background:#f59e0b;' : ''}">${request.conformidadAprobada ? '✔' : '4'}</div>
                        <span>Conformidad<br><small style="font-size:9px;color:#64748b;">Evidencia del trabajo</small></span>
                        ${fmtD(effC)}
                    </div>
                    <div class="workflow-line ${stPaid ? 'active' : ''}"></div>
                    <div class="workflow-step ${stPaid ? 'active' : ''}">
                        <div class="step-dot">5</div>
                        <span>Pagada</span>
                        ${fmtD(eff4)}
                    </div>
                    <div class="workflow-line ${request.status === 'voucher' ? 'active' : ''}"></div>
                    <div class="workflow-step ${request.status === 'voucher' ? 'active' : ''}">
                        <div class="step-dot">6</div>
                        <span>Comprobante Enviado</span>
                        ${fmtD(eff5)}
                    </div>`;
                        }

                        // Pago simple — línea de tiempo original
                        const eff4 = raw4 ? maxD(raw4, eff3 || eff2 || eff1) : null;
                        const eff5 = raw5 ? maxD(raw5, eff4 || eff3 || eff2 || eff1) : null;

                        return `
                    <div class="workflow-step ${['pending','approved','sent','paid','voucher'].indexOf(request.status) >= 0 ? 'active' : ''}">
                        <div class="step-dot">1</div>
                        <span>Pendiente de firma</span>
                        ${fmtD(eff1)}
                    </div>
                    <div class="workflow-line ${['approved','sent','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['approved','sent','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">2</div>
                        <span>Aprobada</span>
                        ${fmtD(eff2)}
                    </div>
                    <div class="workflow-line ${['sent','paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['sent','paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">3</div>
                        <span>Enviada al Proveedor</span>
                        ${fmtD(eff3)}
                    </div>
                    <div class="workflow-line ${['paid','voucher'].includes(request.status) ? 'active' : ''}"></div>
                    <div class="workflow-step ${['paid','voucher'].includes(request.status) ? 'active' : ''}">
                        <div class="step-dot">4</div>
                        <span>Pagada</span>
                        ${fmtD(eff4)}
                    </div>
                    <div class="workflow-line ${request.status === 'voucher' ? 'active' : ''}"></div>
                    <div class="workflow-step ${request.status === 'voucher' ? 'active' : ''}">
                        <div class="step-dot">5</div>
                        <span>Comprobante Enviado</span>
                        ${fmtD(eff5)}
                    </div>`;
                    })()}
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

                // Auto-corregir: si es multi-pago, todos pagados y aún está en 'paid', promover a 'voucher'
                if (isMultiPay && paidCount === payments.length && request.status === 'paid') {
                    request.status = 'voucher';
                    request.voucherDate = request.voucherDate || new Date().toISOString();
                    saveState();
                    saveOrderToDB(request);
                    // Re-renderizar para que el workflow refleje el cambio
                    setTimeout(() => window.openOrderDetail(request.id), 50);
                    return '';
                }

                const showTracker = isMultiPay && ['sent','paid','voucher'].includes(request.status);

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
                            ${!p.paid && (request.status === 'sent' || (request.status === 'conformidad' && request.conformidadAprobada && i === 1)) && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `<button class="btn-mark-payment" onclick="window.markPartialPayment('${request.id}', ${i})">Marcar Pagado</button>` : ''}
                            ${p.paid && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `<button class="btn-notify-payment" onclick="window.sendPartialPaymentEmail('${request.id}', ${i})">📧 Notificar</button>` : ''}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>`;
            })()}

            <div class="form-actions-footer detail-actions">
                <button class="btn-secondary" onclick="_clearDraft(); document.querySelector('[data-view=dashboard]').click()">← Volver al Panel</button>

                ${request.status !== 'pending' ? `
                    <button class="btn-print" onclick="window.printOrder('${request.id}')">
                        🖨️ Imprimir
                    </button>
                    <button class="btn-pdf" onclick="window.generateOrderPDF('${request.id}')">
                        📄 Descargar PDF
                    </button>
                ` : ''}

                ${request.status === 'pending' && APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
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

                ${request.status === 'conformidad' && !request.conformidadEvidencia ? `
                    <button class="btn-conformidad-upload" onclick="window.subirConformidad('${request.id}')">
                        📸 Subir evidencia de conformidad
                    </button>
                ` : ''}

                ${request.status === 'conformidad' && request.conformidadEvidencia && !request.conformidadAprobada && PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
                    <button class="btn-conformidad-approve" onclick="window.aprobarConformidad('${request.id}')">
                        ✅ Aprobar conformidad
                    </button>
                ` : ''}

                ${request.status === 'conformidad' && request.conformidadEvidencia && !request.conformidadAprobada && !PAYMENT_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail) ? `
                    <span style="font-size:12px;color:#f59e0b;padding:8px 12px;background:#fef3c7;border-radius:8px;border:1px solid #fcd34d;">
                        ⏳ Evidencia enviada — Esperando aprobación de contabilidad
                    </span>
                ` : ''}

                ${request.status === 'conformidad' && request.conformidadAprobada ? `
                    <span style="font-size:12px;color:#16a34a;padding:8px 12px;background:#dcfce7;border-radius:8px;border:1px solid #86efac;">
                        ✅ Conformidad aprobada — Contabilidad puede registrar el 2° pago
                    </span>
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
        const isAuthorized = APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail);
        const hasDigitalSig = DIGITAL_SIGNATURES[APP_STATE.userEmail];
        if (isAuthorized) {
            if (hasDigitalSig) {
                // Modo digital por defecto, canvas se inicializa al cambiar a manual
            } else {
                // Solo canvas manual
                setTimeout(() => initSignaturePads(['approve']), 100);
            }
        }
    }
};

// ─── Delete Order ───
window.deleteOrder = (orderId) => {
    if (!DELETE_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail)) {
        showToast('Sin permisos', 'No tienes permisos para eliminar órdenes de compra', 'error');
        return;
    }
    showConfirm(
        'Eliminar Orden',
        `¿Seguro que deseas eliminar la orden <strong>${orderId}</strong>?<br>Esta acción no se puede deshacer.`,
        () => {
            const idx = APP_STATE.requests.findIndex(r => r.id === orderId);
            if (idx === -1) return;
            const order = APP_STATE.requests[idx];
            // Eliminar archivos de Storage
            if (order.evidencias) order.evidencias.forEach(ev => { if (ev.storagePath) deleteFileFromStorage(ev.storagePath); });
            if (order.quotations) order.quotations.forEach(q => { if (q.storagePath) deleteFileFromStorage(q.storagePath); });
            if (order.signatureSolicitantePath) deleteFileFromStorage(order.signatureSolicitantePath);
            if (order.signatureAprobacionPath) deleteFileFromStorage(order.signatureAprobacionPath);
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
                    ? `<img src="${q.data || q.storageUrl || ''}" alt="${q.name}" style="max-width:100%;max-height:75vh;border-radius:8px;">`
                    : `<iframe src="${q.data || q.storageUrl || ''}" style="width:100%;height:75vh;border:none;border-radius:8px;"></iframe>`
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

    // Validar que el usuario esté autorizado para aprobar
    if (!APPROVAL_AUTHORIZED_EMAILS.includes(APP_STATE.userEmail)) {
        showToast('No autorizado', 'Solo personal autorizado puede aprobar órdenes', 'error');
        return;
    }

    const approvalMode = document.getElementById('sig-approval-mode');
    const mode = approvalMode ? approvalMode.value : 'manual';

    if (mode === 'digital') {
        // Firma digital: guardar el path de la imagen directamente (sin canvas para evitar error CORS)
        const selectedInput = document.getElementById('sig-digital-selected');
        const selectedNameInput = document.getElementById('sig-digital-selected-name');
        const sigImageSrc = selectedInput ? selectedInput.value : '';
        const sigName = selectedNameInput ? selectedNameInput.value : '';

        if (!sigImageSrc) {
            showToast('Error', 'No se encontró firma digital seleccionada', 'error');
            return;
        }

        request.signatureAprobacionDigital = sigImageSrc; // path tipo 'assets/andrea-toledo.png'
        delete request.signatureAprobacion;               // limpiar canvas anterior si existía
        request.approvedBy = APP_STATE.userEmail;
        request.approvedBySignature = sigName;

        request.status = 'approved';
        request.approvedDate = new Date().toISOString();
        addAuditEntry(request, 'Orden aprobada', `Aprobada por ${APP_STATE.userEmail} (firma digital: ${sigName})`);
        saveState();
        saveOrderToDB(request);
        showToast('¡Orden aprobada!', 'La orden ' + orderId + ' fue aprobada exitosamente', 'success');
        setTimeout(() => window.openOrderDetail(orderId), 400);
    } else {
        // Firma manual: validar canvas
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
        request.approvedBy = APP_STATE.userEmail;

        request.status = 'approved';
        request.approvedDate = new Date().toISOString();
        addAuditEntry(request, 'Orden aprobada', `Aprobada por ${APP_STATE.userEmail} (firma manual)`);
        saveState();
        saveOrderToDB(request);
        showToast('¡Orden aprobada!', 'La orden ' + orderId + ' fue aprobada exitosamente', 'success');
        setTimeout(() => window.openOrderDetail(orderId), 400);
    }
};

// ─── Aprobación Masiva — Funciones auxiliares ───
window.updateBulkBar = () => {
    const checked = document.querySelectorAll('.bulk-check:checked');
    const bar = document.getElementById('bulk-approve-bar');
    const countEl = document.getElementById('bulk-approve-count');
    if (!bar) return;
    if (checked.length > 0) {
        bar.style.display = 'flex';
        countEl.textContent = `${checked.length} orden${checked.length > 1 ? 'es' : ''} seleccionada${checked.length > 1 ? 's' : ''}`;
    } else {
        bar.style.display = 'none';
    }
    // Actualizar estado del checkbox "select all"
    const allCheckboxes = document.querySelectorAll('.bulk-check');
    const selectAll = document.getElementById('bulk-select-all');
    if (selectAll) {
        selectAll.checked = allCheckboxes.length > 0 && checked.length === allCheckboxes.length;
        selectAll.indeterminate = checked.length > 0 && checked.length < allCheckboxes.length;
    }
};

window.bulkToggleAll = (checked) => {
    document.querySelectorAll('.bulk-check').forEach(cb => {
        // Solo seleccionar los que están visibles (no filtrados)
        const row = cb.closest('tr');
        if (row && row.style.display !== 'none') {
            cb.checked = checked;
        }
    });
    window.updateBulkBar();
};

window.openBulkApproveModal = () => {
    const checkedIds = [...document.querySelectorAll('.bulk-check:checked')].map(cb => cb.dataset.orderId);
    if (checkedIds.length === 0) {
        showToast('Sin selección', 'Selecciona al menos una orden pendiente', 'error');
        return;
    }

    const userEmail = APP_STATE.userEmail;
    const isAdmin = APPROVAL_ADMIN_EMAILS.includes(userEmail);
    const digitalSig = DIGITAL_SIGNATURES[userEmail];
    const allSigs = Object.entries(DIGITAL_SIGNATURES);

    // Construir lista de órdenes seleccionadas
    const ordersInfo = checkedIds.map(id => {
        const r = APP_STATE.requests.find(req => req.id === id);
        return r ? `<div class="bulk-order-item"><strong>${r.id}</strong> — ${r.provider} — ${formatCOP(r.total || 0)}</div>` : '';
    }).join('');

    // Construir sección de firma según tipo de usuario
    let sigSection = '';
    if (isAdmin || digitalSig) {
        const sigOptions = isAdmin
            ? allSigs.map(([email, sig], idx) => `
                <label class="sig-digital-option ${idx === 0 ? 'selected' : ''}" onclick="window.selectDigitalSignature(this, '${sig.image}', '${sig.name}')">
                    <input type="radio" name="bulk-sig-choice" value="${sig.image}" ${idx === 0 ? 'checked' : ''} hidden>
                    <img src="${sig.image}" alt="${sig.name}" class="sig-digital-img-sm">
                    <span class="sig-digital-name">${sig.name}</span>
                </label>
            `).join('')
            : `<div class="sig-digital-preview">
                <img src="${digitalSig.image}" alt="${digitalSig.name}" class="sig-digital-img">
                <p class="sig-digital-name">${digitalSig.name}</p>
              </div>`;

        sigSection = `
            <div class="sig-option-tabs">
                <button type="button" class="sig-tab active" onclick="window.switchBulkApprovalMode('digital')">🖼️ Firma Digital</button>
                <button type="button" class="sig-tab" onclick="window.switchBulkApprovalMode('manual')">✍️ Firma Manual</button>
            </div>
            <div id="bulk-sig-mode-digital" class="sig-mode-panel active">
                <div class="sig-digital-selector">${sigOptions}</div>
            </div>
            <div id="bulk-sig-mode-manual" class="sig-mode-panel" style="display:none;">
                <div class="signature-pad-wrap">
                    <canvas id="sig-canvas-bulk" class="signature-canvas"></canvas>
                    <button type="button" class="sig-clear-btn" onclick="window.clearSignature('bulk')" title="Limpiar firma">✕</button>
                    <div class="sig-placeholder" id="sig-placeholder-bulk">Firme aquí para aprobar</div>
                </div>
            </div>
            <input type="hidden" id="bulk-approval-mode" value="digital">
            <input type="hidden" id="bulk-sig-selected" value="${isAdmin ? allSigs[0][1].image : digitalSig.image}">
            <input type="hidden" id="bulk-sig-selected-name" value="${isAdmin ? allSigs[0][1].name : digitalSig.name}">
        `;
    } else {
        sigSection = `
            <div class="signature-pad-wrap">
                <canvas id="sig-canvas-bulk" class="signature-canvas"></canvas>
                <button type="button" class="sig-clear-btn" onclick="window.clearSignature('bulk')" title="Limpiar firma">✕</button>
                <div class="sig-placeholder" id="sig-placeholder-bulk">Firme aquí para aprobar</div>
            </div>
            <input type="hidden" id="bulk-approval-mode" value="manual">
        `;
    }

    const overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
    overlay.id = 'bulk-approve-overlay';
    overlay.innerHTML = `
        <div class="confirm-modal bulk-approve-modal">
            <div class="cm-icon">✅</div>
            <h3 class="cm-title">Aprobar ${checkedIds.length} orden${checkedIds.length > 1 ? 'es' : ''}</h3>
            <div class="bulk-orders-list">${ordersInfo}</div>
            <div class="bulk-sig-section">
                <h4 style="margin:0 0 10px;font-size:0.9rem;color:var(--text-main);">Firma de Aprobación</h4>
                ${sigSection}
            </div>
            <div class="cm-actions">
                <button class="cm-btn cm-cancel" onclick="document.getElementById('bulk-approve-overlay').remove()">Cancelar</button>
                <button class="cm-btn cm-confirm info" onclick="window.executeBulkApprove()">✅ Aprobar todas</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    // Inicializar canvas si es solo manual
    if (!isAdmin && !digitalSig) {
        setTimeout(() => initSignaturePads(['bulk']), 100);
    }
};

window.switchBulkApprovalMode = (mode) => {
    const digitalPanel = document.getElementById('bulk-sig-mode-digital');
    const manualPanel = document.getElementById('bulk-sig-mode-manual');
    const modeInput = document.getElementById('bulk-approval-mode');
    const tabs = document.querySelectorAll('#bulk-approve-overlay .sig-option-tabs .sig-tab');

    if (!modeInput) return;
    modeInput.value = mode;

    tabs.forEach(tab => tab.classList.remove('active'));
    if (mode === 'digital') {
        if (digitalPanel) digitalPanel.style.display = '';
        if (manualPanel) manualPanel.style.display = 'none';
        tabs[0]?.classList.add('active');
    } else {
        if (digitalPanel) digitalPanel.style.display = 'none';
        if (manualPanel) manualPanel.style.display = '';
        tabs[1]?.classList.add('active');
        const canvas = document.getElementById('sig-canvas-bulk');
        if (canvas) {
            setTimeout(() => {
                if (!canvas._sigCtx) initSignaturePads(['bulk']);
                else if (canvas._sigResize) canvas._sigResize();
            }, 50);
        }
    }
};

window.executeBulkApprove = () => {
    const checkedIds = [...document.querySelectorAll('.bulk-check:checked')].map(cb => cb.dataset.orderId);
    if (checkedIds.length === 0) return;

    const modeInput = document.getElementById('bulk-approval-mode');
    const mode = modeInput ? modeInput.value : 'manual';

    const finalize = (signatureData, isDigitalPath = false) => {
        let approved = 0;
        checkedIds.forEach(id => {
            const request = APP_STATE.requests.find(r => r.id === id);
            if (!request || request.status !== 'pending') return;
            if (isDigitalPath) {
                request.signatureAprobacionDigital = signatureData;
                delete request.signatureAprobacion;
            } else {
                request.signatureAprobacion = signatureData;
            }
            request.approvedBy = APP_STATE.userEmail;
            request.status = 'approved';
            request.approvedDate = new Date().toISOString();
            addAuditEntry(request, 'Orden aprobada (masiva)', `Aprobada por ${APP_STATE.userEmail}`);
            saveOrderToDB(request);
            approved++;
        });
        saveState();
        document.getElementById('bulk-approve-overlay')?.remove();
        showToast('¡Órdenes aprobadas!', `${approved} orden${approved > 1 ? 'es' : ''} aprobada${approved > 1 ? 's' : ''} exitosamente`, 'success');
        // Refrescar vista
        const activeNav = document.querySelector('.nav-item.active');
        if (activeNav) activeNav.click();
    };

    if (mode === 'digital') {
        const selectedInput = document.getElementById('bulk-sig-selected');
        const sigImageSrc = selectedInput ? selectedInput.value : '';
        if (!sigImageSrc) {
            showToast('Error', 'No se seleccionó firma digital', 'error');
            return;
        }
        // Guardar el path directamente sin convertir a canvas (evita error CORS)
        finalize(sigImageSrc, true);
    } else {
        const sigCanvas = document.getElementById('sig-canvas-bulk');
        if (!sigCanvas) return;
        const ctx = sigCanvas.getContext('2d');
        const pixelData = ctx.getImageData(0, 0, sigCanvas.width, sigCanvas.height).data;
        let hasContent = false;
        for (let i = 3; i < pixelData.length; i += 4) {
            if (pixelData[i] > 0) { hasContent = true; break; }
        }
        if (!hasContent) {
            showToast('Firma requerida', 'Debe firmar para aprobar las órdenes', 'error');
            return;
        }
        finalize(sigCanvas.toDataURL('image/png'));
    }
};

// ─── Change Order Status (workflow) ───
window.changeOrderStatus = (orderId, newStatus) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const statusNames = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const label = statusNames[newStatus] || newStatus;
    const totalStr = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');
    const extraInfo = newStatus === 'paid'
        ? `<br><span style="font-size:0.85rem;color:#64748b;">Monto total: <strong style="color:#0c84ff;">$ ${totalStr}</strong></span>`
        : '';

    showConfirm(
        'Cambiar Estado',
        `¿Cambiar la orden <strong>${orderId}</strong> a <strong>${label}</strong>?${extraInfo}`,
        () => {
            const _now = new Date().toISOString();
            request.status = newStatus;
            if (newStatus === 'approved' && !request.approvedDate) request.approvedDate = _now;
            if (newStatus === 'sent')    request.sentDate    = _now;
            if (newStatus === 'paid')   request.paidDate    = _now;
            if (newStatus === 'voucher') request.voucherDate = _now;
            addAuditEntry(request, `Estado → ${label}`, `Cambiado por ${APP_STATE.userEmail}`);
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

    // Bloquear el 2do pago si no hay conformidad aprobada
    const isSecondPayment = paymentIndex === 1;
    if (isSecondPayment && !request.conformidadAprobada) {
        showToast('⚠️ Conformidad requerida', 'El solicitante debe subir la evidencia de conformidad y contabilidad debe aprobarla antes de registrar el segundo pago.', 'error');
        return;
    }

    showConfirm(
        'Confirmar Pago',
        `¿Marcar <strong>${payment.label}</strong> como pagado?<br>Monto: <strong>${formatCOP(payment.amount)}</strong>`,
        () => {
            payment.paid = true;
            payment.date = new Date().toISOString();

            const allPaid = request.payments.every(p => p.paid);
            const isMultiPay = request.payments.length > 1;

            if (allPaid) {
                request.status = 'voucher';
                request.paidDate = new Date().toISOString();
                request.voucherDate = new Date().toISOString();
                addAuditEntry(request, 'Pago completado', `${payment.label} — Todos los pagos completados por ${APP_STATE.userEmail}`);
                showToast('¡Orden completada!', `Todos los pagos de ${orderId} completados. Abriendo Gmail para enviar comprobante final...`, 'success');
            } else if (isMultiPay && paymentIndex === 0) {
                // Primer pago de orden doble → esperar conformidad del solicitante
                request.status = 'conformidad';
                request.conformidadDate = null;
                request.conformidadAprobada = false;
                addAuditEntry(request, 'Pago parcial', `${payment.label} marcado por ${APP_STATE.userEmail}. Esperando conformidad del solicitante.`);
                showToast('✅ Primer pago registrado', 'El solicitante debe subir la evidencia de conformidad del trabajo para habilitar el segundo pago.', 'success');
            } else {
                addAuditEntry(request, 'Pago parcial', `${payment.label} marcado por ${APP_STATE.userEmail}`);
                showToast('Pago registrado', `${payment.label} marcado como pagado. Abriendo Gmail para notificar...`, 'success');
            }

            saveState();
            saveOrderToDB(request);

            // Solo abrir Gmail si NO estamos esperando conformidad
            if (request.status !== 'conformidad') {
                setTimeout(() => {
                    window.sendPartialPaymentEmail(orderId, paymentIndex);
                }, 500);
            } else {
                // Recargar vista para mostrar el nuevo paso
                setTimeout(() => window.openOrderDetail(orderId), 400);
            }
        },
        'Confirmar Pago',
        'info'
    );
};

// ─── Enviar correo de pago parcial al proveedor ───
window.sendPartialPaymentEmail = (orderId, paymentIndex) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request || !request.payments) return;

    const payment = request.payments[paymentIndex];
    if (!payment) return;

    const providerEmail = request.email || '';
    const providerName = request.provider || 'Proveedor';
    const montoStr = formatCOP(payment.amount).replace(/^\$\s*/, '');
    const totalStr = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');
    const allPaid = request.payments.every(p => p.paid);

    // Calcular saldo pendiente (cuotas aún no pagadas, excluyendo la actual si ya se marcó)
    const pendientes = request.payments.filter(p => !p.paid);
    const saldoPendiente = pendientes.reduce((acc, p) => acc + (parseFloat(p.amount) || 0), 0);
    const saldoStr = formatCOP(saldoPendiente).replace(/^\$\s*/, '');

    let pendientesLine = '';
    if (pendientes.length > 0) {
        pendientesLine = `\nPagos pendientes:\n` +
            pendientes.map(p => `  - ${p.label}: $ ${formatCOP(p.amount).replace(/^\$\s*/, '')}`).join('\n') + '\n';
    }

    const subject = allPaid
        ? `Comprobante de Pago — Orden ${orderId} · ${providerName}`
        : `Pago parcial registrado — Orden ${orderId} · ${providerName}`;

    const bodyText = allPaid
        ? `Estimado/a ${providerName},\n\n` +
          `Nos complace informarle que el pago correspondiente a la Orden de Compra N° ${orderId} ` +
          `por un valor de $ ${totalStr} ha sido procesado satisfactoriamente.\n\n` +
          `Adjunto encontrará el comprobante de pago emitido por nuestra entidad bancaria ` +
          `para su registro y confirmación.\n\n` +
          `Agradecemos su gestión y la confianza depositada en la Unión Israelita de Beneficencia.\n\n` +
          `Quedamos a su disposición para cualquier consulta.`
        : `Estimado/a ${providerName},\n\n` +
          `Le informamos que se ha registrado el siguiente pago correspondiente a la Orden de Compra N° ${orderId}:\n\n` +
          `  • Concepto: ${payment.label}\n` +
          `  • Monto pagado: $ ${montoStr}\n` +
          `  • Saldo pendiente: $ ${saldoStr}\n` +
          `  • Total de la orden: $ ${totalStr}\n` +
          (pendientesLine ? pendientesLine : '') +
          `\n` +
          `En cuanto se procesen los pagos restantes, le notificaremos nuevamente.\n\n` +
          `Agradecemos su gestión y la confianza depositada en la Unión Israelita de Beneficencia.\n\n` +
          `Quedamos a su disposición para cualquier consulta.`;

    const ccEmails = 'analistacontable@theodoro.edu.co,contabilidad@uibmedellin.org';

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(providerEmail)}` +
        `&cc=${encodeURIComponent(ccEmails)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyText)}`;

    // Abrir en nueva pestaña; si el navegador lo bloquea, intentar de nuevo
    const emailWindow = window.open(gmailUrl, '_blank');
    if (!emailWindow || emailWindow.closed) {
        window.open(gmailUrl, '_blank', 'noopener');
    }

    showToast('📧 Gmail abierto', `Notificación de ${payment.label} lista para enviar a ${providerName}`, 'success');
    // Refrescar vista para mostrar el estado actualizado
    setTimeout(() => window.openOrderDetail(orderId), 400);
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
                                <img src="${ev.data || ev.storageUrl || ''}" alt="Evidencia ${i + 1}">
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
            const removed = request.evidencias.splice(index, 1)[0];
            // Eliminar archivo de Storage si existe
            if (removed && removed.storagePath) {
                deleteFileFromStorage(removed.storagePath);
            }
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
                <img src="${ev.data || ev.storageUrl || ''}" alt="${ev.name}" style="max-width:100%;max-height:75vh;border-radius:8px;">
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
};

// ─── Evidence View (sección principal de evidencias) ───
function renderEvidenceView(container) {
    const requests = APP_STATE.requests;
    const statusLabelsEv = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
    const withEvidence = requests.filter(r => r.evidencias && r.evidencias.length > 0);
    const needsEvidence = requests.filter(r => (r.status === 'paid' || r.status === 'voucher') && (!r.evidencias || r.evidencias.length === 0));

    // Actualizar badge del sidebar
    updateEvidenceBadge(needsEvidence.length);

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
                    <h3>🚨 Órdenes pendientes de evidencia (${needsEvidence.length})</h3>
                    <div class="recent-list">
                        ${needsEvidence.map(r => `
                            <div class="recent-item clickable ev-needs-evidence" onclick="window.openEvidenceUpload('${r.id}')">
                                <span class="ri-icon ev-alert-icon" title="Falta evidencia">⚠️</span>
                                <div class="ri-info">
                                    <div class="ri-title">${r.provider} <span class="ev-alert-tag">Falta evidencia</span></div>
                                    <div class="ri-desc">${(r.items && r.items.length > 0) ? r.items.map(it => it.desc).filter(Boolean).join(', ') : 'Sin descripción'}</div>
                                    <div class="ri-meta">${r.id} · ${formatDate(r.date)}</div>
                                </div>
                                <span class="ri-amount ${r.status}">${formatCOP(r.total || 0)}</span>
                                <span class="ri-status ${r.status}">${statusLabelsEv[r.status] || r.status}</span>
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
                    <p class="empty-sub">Las evidencias aparecerán cuando las órdenes tengan comprobante enviado o estén pagadas.</p>
                </div>
            ` : ''}
        </div>
    `;
}

// ─── Actualizar badge de evidencias pendientes en sidebar ───
function updateEvidenceBadge(count) {
    const evNav = document.querySelector('[data-view="evidence"]');
    if (!evNav) return;
    let badge = evNav.querySelector('.nav-badge');
    if (count > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'nav-badge';
            evNav.appendChild(badge);
        }
        badge.textContent = count;
    } else if (badge) {
        badge.remove();
    }
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

    const statusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
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
    addAuditEntry(request, 'Enviada al proveedor', `Enviada por ${APP_STATE.userEmail} a ${providerName}`);
    saveState();
    saveOrderToDB(request);

    // Refrescar la vista de detalle de inmediato (sin esperar el PDF ni Gmail)
    window.openOrderDetail(orderId);

    // Descargar PDF
    showToast('📄 Descargando PDF...', 'Adjúntalo al correo que se abrirá', 'info');
    window.generateOrderPDF(orderId);

    // Abrir Gmail en paralelo tras un instante para que el PDF empiece a generarse
    setTimeout(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(providerEmail)}` +
            `&cc=${encodeURIComponent(ccEmails)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(bodyText)}`;

        const emailWindow = window.open(gmailUrl, '_blank');

        if (!emailWindow || emailWindow.closed) {
            // Si el navegador bloqueó el popup, usar mailto como fallback
            window.location.href = `mailto:${providerEmail}?cc=${encodeURIComponent(ccEmails)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        }

        showToast('📧 Correo abierto', `Se abrió Gmail. Adjunta el PDF y envíalo a ${providerName}`, 'success');
    }, 800);
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
                // Si el navegador bloqueó el popup, usar mailto como fallback
                window.location.href = `mailto:${providerEmail}?cc=${encodeURIComponent(ccEmails)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
            }

            showToast('📧 Gmail abierto', `Adjunta el comprobante bancario y envíalo a ${providerName}`, 'success');
            setTimeout(() => window.openOrderDetail(orderId), 500);
        },
        'Sí, enviar',
        'info'
    );
};

// ─── Subir evidencia de conformidad (cualquier usuario) ───
window.subirConformidad = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    // Crear modal de subida de foto
    const overlay = document.createElement('div');
    overlay.className = 'confirm-modal-overlay';
    overlay.id = 'conformidad-modal';
    overlay.innerHTML = `
        <div class="confirm-modal" style="max-width:460px;">
            <div class="cm-icon">📸</div>
            <h3 class="cm-title">Evidencia de Conformidad</h3>
            <p class="cm-message" style="margin-bottom:16px;">
                Sube la foto o imagen que confirma que el trabajo fue realizado a satisfacción.<br>
                Contabilidad la revisará para autorizar el segundo pago.
            </p>
            <div style="margin-bottom:16px;">
                <label style="display:block;font-size:12px;font-weight:600;color:#64748b;margin-bottom:8px;text-transform:uppercase;">Imagen de evidencia *</label>
                <input type="file" id="conformidad-file-input" accept="image/*,.pdf" style="width:100%;padding:8px;border:2px dashed #cbd5e1;border-radius:8px;font-size:13px;cursor:pointer;">
                <div id="conformidad-preview" style="margin-top:10px;display:none;text-align:center;">
                    <img id="conformidad-preview-img" style="max-width:100%;max-height:200px;border-radius:8px;border:1px solid #e2e8f0;">
                </div>
            </div>
            <div style="margin-bottom:16px;">
                <label style="display:block;font-size:12px;font-weight:600;color:#64748b;margin-bottom:8px;text-transform:uppercase;">Comentario (opcional)</label>
                <textarea id="conformidad-comentario" rows="3" style="width:100%;padding:10px;border:2px solid #e2e8f0;border-radius:8px;font-size:13px;font-family:inherit;resize:vertical;" placeholder="Describe brevemente el trabajo realizado..."></textarea>
            </div>
            <div class="cm-actions">
                <button class="cm-btn cm-cancel" onclick="document.getElementById('conformidad-modal').remove()">Cancelar</button>
                <button class="cm-btn cm-confirm info" onclick="window._guardarConformidad('${orderId}')">📤 Enviar evidencia</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Preview de imagen al seleccionar
    document.getElementById('conformidad-file-input').addEventListener('change', function() {
        const file = this.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = e => {
                document.getElementById('conformidad-preview-img').src = e.target.result;
                document.getElementById('conformidad-preview').style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
};

window._guardarConformidad = async (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const fileInput = document.getElementById('conformidad-file-input');
    const comentario = document.getElementById('conformidad-comentario')?.value.trim() || '';

    if (!fileInput || !fileInput.files[0]) {
        showToast('⚠️ Archivo requerido', 'Debes seleccionar una imagen de evidencia', 'error');
        return;
    }

    const file = fileInput.files[0];
    const btn = document.querySelector('#conformidad-modal .cm-confirm');
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Subiendo...'; }

    try {
        // Convertir a base64 para guardar
        const reader = new FileReader();
        reader.onload = async (e) => {
            const base64 = e.target.result;

            // Guardar en Storage si está disponible
            let storageUrl = null;
            try {
                const storageRef = firebase.storage().ref(`conformidad/${orderId}/${Date.now()}_${file.name}`);
                const snapshot = await storageRef.put(file);
                storageUrl = await snapshot.ref.getDownloadURL();
            } catch(err) {
                console.warn('Storage no disponible, guardando base64:', err.message);
            }

            request.conformidadEvidencia = storageUrl || base64;
            request.conformidadEvidenciaNombre = file.name;
            request.conformidadComentario = comentario;
            request.conformidadSubidaPor = APP_STATE.userEmail;
            request.conformidadSubidaDate = new Date().toISOString();

            addAuditEntry(request, 'Conformidad subida', `Evidencia "${file.name}" subida por ${APP_STATE.userEmail}. Pendiente aprobación de contabilidad.`);
            saveState();
            saveOrderToDB(request);

            document.getElementById('conformidad-modal')?.remove();
            showToast('✅ Evidencia enviada', 'Contabilidad recibirá la notificación para aprobar el segundo pago.', 'success');

            // Notificar por email a contabilidad
            const ccEmails = 'analistacontable@theodoro.edu.co,contabilidad@uibmedellin.org';
            const subject = `Conformidad pendiente de aprobación — Orden ${orderId} · ${request.provider}`;
            const body = `Estimado equipo de contabilidad,\n\n` +
                `El solicitante ha subido la evidencia de conformidad para la Orden de Compra N° ${orderId} (${request.provider}).\n\n` +
                `Comentario del solicitante: ${comentario || 'Sin comentario'}\n\n` +
                `Por favor ingresen al sistema y aprueben la conformidad para habilitar el segundo pago.\n\n` +
                `Subido por: ${APP_STATE.userEmail}\n` +
                `Fecha: ${new Date().toLocaleString('es-CO')}`;
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ccEmails)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setTimeout(() => { window.open(gmailUrl, '_blank'); }, 600);
            setTimeout(() => window.openOrderDetail(orderId), 400);
        };
        reader.readAsDataURL(file);
    } catch(err) {
        showToast('Error', 'No se pudo subir la evidencia: ' + err.message, 'error');
        if (btn) { btn.disabled = false; btn.textContent = '📤 Enviar evidencia'; }
    }
};

// ─── Aprobar conformidad (solo contabilidad) ───
window.aprobarConformidad = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    // Mostrar la evidencia antes de aprobar
    const evidenciaHtml = request.conformidadEvidencia && request.conformidadEvidencia.startsWith('data:image')
        ? `<div style="margin:12px 0;text-align:center;"><img src="${request.conformidadEvidencia}" style="max-width:100%;max-height:200px;border-radius:8px;border:1px solid #e2e8f0;"></div>`
        : request.conformidadEvidencia
            ? `<p style="font-size:12px;color:#64748b;margin:8px 0;">📎 Evidencia: <a href="${request.conformidadEvidencia}" target="_blank" style="color:#0c84ff;">${request.conformidadEvidenciaNombre || 'Ver archivo'}</a></p>`
            : '';

    const comentarioHtml = request.conformidadComentario
        ? `<p style="font-size:12px;color:#64748b;margin:8px 0;padding:8px;background:#f8fafc;border-radius:6px;">💬 "${request.conformidadComentario}"</p>`
        : '';

    showConfirm(
        'Aprobar Conformidad',
        `¿Confirmar que el trabajo de <strong>${request.provider}</strong> fue realizado a satisfacción?${evidenciaHtml}${comentarioHtml}<br>Esto habilitará el segundo pago.`,
        () => {
            request.conformidadAprobada = true;
            request.conformidadDate = new Date().toISOString();
            request.conformidadAprobadaPor = APP_STATE.userEmail;
            // Volver a 'sent' para que el tracker permita marcar el 2do pago
            request.status = 'sent';

            addAuditEntry(request, 'Conformidad aprobada', `Aprobada por ${APP_STATE.userEmail}. Segundo pago habilitado.`);
            saveState();
            saveOrderToDB(request);

            showToast('✅ Conformidad aprobada', 'El segundo pago ya está disponible para registrar.', 'success');
            setTimeout(() => window.openOrderDetail(orderId), 400);
        },
        '✅ Aprobar y habilitar 2° pago',
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

    // Helper: convertir cualquier URL/path de imagen a data URL para que html2canvas la renderice
    async function ensureDataUrl(src) {
        if (!src) return null;
        if (src.startsWith('data:')) return src;

        // Método 1: fetch + blob → dataURL
        try {
            const absUrl = src.startsWith('http') ? src : new URL(src, window.location.href).href;
            const resp = await fetch(absUrl, { mode: 'cors', cache: 'no-store' });
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            const blob = await resp.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (err) {
            console.warn('⚠️ fetch falló para firma, intentando método Image:', src, err.message);
        }

        // Método 2: Image + Canvas (funciona mejor con Firebase Storage CORS)
        try {
            return await new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => {
                    try {
                        const cvs = document.createElement('canvas');
                        cvs.width = img.naturalWidth;
                        cvs.height = img.naturalHeight;
                        cvs.getContext('2d').drawImage(img, 0, 0);
                        resolve(cvs.toDataURL('image/png'));
                    } catch (e) { reject(e); }
                };
                img.onerror = () => reject(new Error('Image load failed'));
                img.src = src.startsWith('http') ? src : new URL(src, window.location.href).href;
                // Timeout de seguridad
                setTimeout(() => reject(new Error('Image load timeout')), 8000);
            });
        } catch (err2) {
            console.warn('⚠️ Método Image también falló para firma:', src, err2.message);
            return src; // devolver original como último fallback
        }
    }

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

    // Firmas — convertir a dataURL para que html2canvas las capture correctamente
    const _pdfSigSol = await ensureDataUrl(r.signatureSolicitante || r.signatureSolicitanteUrl || null);
    const _pdfSigApro = await ensureDataUrl(r.signatureAprobacion || r.signatureAprobacionUrl || r.signatureAprobacionDigital || null);
    const sigSolHTML = _pdfSigSol
        ? `<img src="${_pdfSigSol}" style="max-height:50px;max-width:180px;display:block;margin:0 auto 4px;object-fit:contain;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';
    const sigAproHTML = _pdfSigApro
        ? `<img src="${_pdfSigApro}" style="max-height:50px;max-width:180px;display:block;margin:0 auto 4px;object-fit:contain;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';

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
                    ${r.categoria ? `<div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Categoría</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.categoria}</span></div>` : ''}
                    ${r.necesidadPersona ? `<div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Genera la necesidad</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.necesidadPersona}</span></div>` : ''}
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
        // Esperar a que TODAS las imágenes del contenedor carguen antes de capturar
        const pdfImages = pdfDiv.querySelectorAll('img');
        if (pdfImages.length > 0) {
            await Promise.all(Array.from(pdfImages).map(img => {
                if (img.complete && img.naturalWidth > 0) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = () => { console.warn('⚠️ Imagen no cargó en PDF:', img.src?.substring(0, 80)); resolve(); };
                    // Timeout de seguridad por si la imagen no carga
                    setTimeout(resolve, 5000);
                });
            }));
        }
        // Dar un breve instante extra para el rendering del DOM
        await new Promise(res => setTimeout(res, 200));

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
        const excelStatusLabels = { pending: 'Pendiente de firma', approved: 'Aprobada', sent: 'Enviada al Proveedor', conformidad: 'Esperando Conformidad', paid: 'Pagada', voucher: 'Comprobante Enviado' };
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
    const _printSigSol = r.signatureSolicitante || r.signatureSolicitanteUrl || null;
    const _printSigApro = r.signatureAprobacion || r.signatureAprobacionUrl || r.signatureAprobacionDigital || null;
    const sigSolHTML = _printSigSol
        ? `<img src="${_printSigSol}" style="max-height:50px;max-width:180px;display:block;margin:0 auto 4px;object-fit:contain;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';
    const sigAproHTML = _printSigApro
        ? `<img src="${_printSigApro}" style="max-height:50px;max-width:180px;display:block;margin:0 auto 4px;object-fit:contain;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:11px;">Sin firma</div>';

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
                            ${r.categoria ? `<div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Categoría</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.categoria}</span></div>` : ''}
                            ${r.necesidadPersona ? `<div style="margin-bottom:4px;"><span style="font-size:10px;color:#64748b;">Genera la necesidad</span><br><span style="font-size:11px;font-weight:600;color:#1e293b;">${r.necesidadPersona}</span></div>` : ''}
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
