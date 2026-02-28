/**
 * CTH Compras — App v2.0
 * Panel de Control de Compras — Colegio Theodoro Herzl
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
            updateUserProfile(user);
            initApp();
        } else {
            // No autenticado — mostrar login
            loginScreen.classList.remove('hidden');
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
    firestoreReady: false
};

// Migrar órdenes "sent" a "approved"
APP_STATE.requests.forEach(r => { if (r.status === 'sent') r.status = 'approved'; });

// ─── Firestore: guardar una orden ───
function saveOrderToDB(order) {
    if (!APP_STATE.firestoreReady) return;
    const cleanOrder = JSON.parse(JSON.stringify(order));
    db.collection('orders').doc(order.id).set(cleanOrder)
        .catch(err => console.error('Error guardando orden en Firestore:', err));
}

// ─── Firestore: eliminar una orden ───
function deleteOrderFromDB(orderId) {
    db.collection('orders').doc(orderId).delete()
        .catch(err => console.error('Error eliminando orden de Firestore:', err));
}

// ─── Firestore: guardar proveedores ───
function saveProvidersToDB() {
    db.collection('config').doc('providers').set({ items: PROVIDERS_DB })
        .catch(err => console.error('Error guardando proveedores en Firestore:', err));
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
        // Escribir proveedores
        batch.set(db.collection('config').doc('providers'), { items: PROVIDERS_DB });
        await batch.commit();
        console.log('✅ Backup sincronizado a Firestore');
    } catch (err) {
        console.error('Error sincronizando a Firestore:', err);
    }
}

// ─── Firestore: cargar datos desde la nube ───
async function loadFromFirestore() {
    try {
        // Cargar órdenes
        const ordersSnap = await db.collection('orders').get();
        const firestoreOrders = [];
        ordersSnap.forEach(doc => firestoreOrders.push(doc.data()));

        // Cargar proveedores
        const provSnap = await db.collection('config').doc('providers').get();

        // Solo actualizar si Firestore tiene datos
        if (firestoreOrders.length > 0 || provSnap.exists) {
            if (firestoreOrders.length > 0) {
                APP_STATE.requests = firestoreOrders;
                // Ordenar por fecha
                APP_STATE.requests.sort((a, b) => new Date(a.date) - new Date(b.date));
            }
            if (provSnap.exists && provSnap.data().items) {
                // Merge: proveedores de Firestore + locales que no estén en Firestore
                const firestoreProviders = provSnap.data().items;
                const firestoreNames = new Set(firestoreProviders.map(p => p.Nombre.toLowerCase()));
                const localOnly = PROVIDERS_DB.filter(p => !firestoreNames.has(p.Nombre.toLowerCase()));
                if (localOnly.length > 0) {
                    // Hay proveedores locales nuevos que no están en la nube: mergeamos
                    PROVIDERS_DB = [...firestoreProviders, ...localOnly];
                    saveProvidersToDB(); // subir la versión mergeada
                } else {
                    PROVIDERS_DB = firestoreProviders;
                }
            } else {
                // Proveedores no están en Firestore aún: subirlos
                saveProvidersToDB();
            }
            // Actualizar caché local
            localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
            localStorage.setItem('cth_providers', JSON.stringify(PROVIDERS_DB));
            // Re-renderizar la vista actual
            renderView(APP_STATE.currentView);
            console.log('☁️ Datos cargados desde Firestore:', firestoreOrders.length, 'órdenes');
        } else {
            // Firestore vacío: migrar datos locales
            console.log('📤 Migrando datos locales a Firestore...');
            await syncAllToFirestore();
        }

        APP_STATE.firestoreReady = true;
    } catch (err) {
        console.error('Error cargando desde Firestore:', err);
        APP_STATE.firestoreReady = true;
        showToast('Aviso', 'Sin conexión a la nube. Usando datos locales.', 'warning');
    }
}

function saveState() {
    localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
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
    return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
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
    a.download = `backup_compras_cth_${new Date().toISOString().slice(0, 10)}.json`;
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
                'providers': 'Gestión de Proveedores'
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

    // Render dashboard con datos locales (rápido)
    renderView('dashboard');

    // Cargar datos desde Firestore (en background)
    loadFromFirestore();
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

// ─── Dashboard ───
function renderDashboard() {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente', approved: 'Aprobada' };

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
                        <div class="ri-meta">${r.id} · ${formatDate(r.date)}</div>
                    </div>
                    <span class="ri-amount">${formatCOP(r.total || 0)}</span>
                    <span class="ri-status ${r.status}">${statusLabels[r.status] || r.status}</span>
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
        const approved = requests.filter(r => r.status === 'approved').length;
        const pending = requests.filter(r => r.status === 'pending').length;

        // Contar órdenes de este mes
        const thisMonthCount = requests.filter(r => {
            const d = new Date(r.date);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).length;

        container.innerHTML = `
            <div class="stats-grid animate-in">
                <div class="stat-card">
                    <h3>Total Órdenes</h3>
                    <div class="value">${requests.length}</div>
                    <div class="trend blue">Este mes: ${thisMonthCount}</div>
                </div>
                <div class="stat-card">
                    <h3>Pendientes</h3>
                    <div class="value">${pending}</div>
                    <div class="trend ${pending > 0 ? 'orange' : 'green'}">${pending > 0 ? 'Requieren aprobación' : 'Todo al día ✓'}</div>
                </div>
                <div class="stat-card">
                    <h3>Aprobadas</h3>
                    <div class="value">${approved}</div>
                    <div class="trend green">Órdenes firmadas</div>
                </div>
                <div class="stat-card">
                    <h3>Inversión Total</h3>
                    <div class="value">${formatCOP(requests.reduce((s, r) => s + (r.total || 0), 0))}</div>
                    <div class="trend blue">Acumulado general</div>
                </div>
            </div>

            <!-- Solicitudes Recientes -->
            <div class="recent-requests animate-in">
                <div class="section-header">
                    <h2>Solicitudes Recientes</h2>
                    <button class="btn-primary" id="btn-create-start">
                        <span class="btn-icon">➕</span> Nueva Solicitud
                    </button>
                </div>
                <div id="recent-list" class="recent-list"></div>
                <div id="empty-state" class="empty-state">
                    <div class="empty-icon">📁</div>
                    <p>No hay órdenes aún.</p>
                    <p class="empty-sub">Crea tu primera solicitud.</p>
                </div>
            </div>
        `;
        renderDashboard();

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
    } else if (view === 'providers') {
        renderProvidersView(container);
    }
}

// ─── Providers Management View ───
function renderProvidersView(container) {
    const providers = PROVIDERS_DB;

    container.innerHTML = `
        <div class="card-form animate-in" style="max-width:1100px;">
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
    const p = isEdit ? PROVIDERS_DB[index] : { Nombre: '', NIT: '', Tel: '', Email: '', Contacto: '' };
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
            </div>

            <div class="form-actions-footer" style="margin-top:24px;">
                <button class="btn-secondary" onclick="document.querySelector('[data-view=providers]').click()">← Cancelar</button>
                <button class="btn-primary" onclick="window.saveProvider(${isEdit ? index : 'null'})">
                    💾 ${isEdit ? 'Guardar Cambios' : 'Agregar Proveedor'}
                </button>
            </div>
        </div>
    `;
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
        Contacto: document.getElementById('pf-contacto').value.trim()
    };

    if (index !== null) {
        // Editar existente
        PROVIDERS_DB[index] = data;
        showToast('Proveedor actualizado', data.Nombre, 'success');
        saveProviders();
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
                    saveProviders();
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
        saveProviders();
        document.querySelector('[data-view=providers]').click();
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
            PROVIDERS_DB.splice(index, 1);
            saveProviders();
            showToast('Proveedor eliminado', p.Nombre, 'warning');
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

            <p class="quotes-caption">Adjunta la cotización en la que se basó esta orden de compra.</p>

            <div class="form-actions-footer">
                <button class="btn-secondary" onclick="document.querySelector('[data-view=\\'new-request\\']').click()">Volver al Formulario</button>
                <button class="btn-primary" id="btn-next-step" disabled onclick="window.submitRequest()">Enviar Solicitud Completa</button>
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

    dz.innerHTML = `<span class="drop-icon">${icon}</span><p>${file.name}</p>`;
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
    };
    reader.readAsDataURL(file);

    showToast('Archivo cargado', file.name, 'success');

    const all = document.querySelectorAll('.drop-zone.uploaded').length;
    const btn = document.getElementById('btn-next-step');
    if (btn && all >= 1) btn.disabled = false;
};

// ─── Submit Request ───
window.submitRequest = () => {
    const data = window._currentFormData || {};
    const ordenNum = data.ordenNum ? 'OC-' + data.ordenNum : generateId();
    const request = {
        id: ordenNum,
        date: data.fecha ? new Date(data.fecha + 'T12:00:00').toISOString() : new Date().toISOString(),
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
        quotations: (window._uploadedQuotes || []).filter(Boolean)
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

// ─── History View ───
function renderHistory(container) {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente', approved: 'Aprobada' };

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
                <button class="filter-chip" data-filter="pending">Pendientes</button>
                <button class="filter-chip" data-filter="approved">Aprobadas</button>
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
                                    <td><span class="status-badge ${r.status}">${statusLabels[r.status] || r.status}</span></td>
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
    const statusLabels = { pending: 'Pendiente', approved: 'Aprobada' };
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
    saveState();
    saveOrderToDB(request);
    showToast('¡Orden aprobada!', 'La orden ' + orderId + ' fue aprobada exitosamente', 'success');
    setTimeout(() => window.openOrderDetail(orderId), 400);
};

// ─── Send to Provider (mailto) ───
window.sendToProvider = (orderId) => {
    const request = APP_STATE.requests.find(r => r.id === orderId);
    if (!request) return;

    const providerEmail = request.email || '';
    const providerName = request.provider || 'Proveedor';
    const total = request.totalFmt || formatCOP(request.total).replace(/^\$\s*/, '');

    const subject = encodeURIComponent(`Orden de Compra ${orderId} - Colegio Theodoro Herzl / UIB`);
    const body = encodeURIComponent(
        `Estimado/a ${providerName},\n\n` +
        `Reciba un cordial saludo de parte del Colegio Theodoro Herzl - Unión Israelita de Beneficencia.\n\n` +
        `Adjunto encontrará la Orden de Compra N° ${orderId} por un valor total de $ ${total}.\n\n` +
        `Por favor confirmar la recepción de este correo y la aceptación de la orden.\n\n` +
        `Quedamos atentos a cualquier inquietud.\n\n` +
        `Cordialmente,\n` +
        `Departamento de Compras\n` +
        `Colegio Theodoro Herzl - UIB\n` +
        `Tel: (604) 3220180 Ext 7114\n` +
        `analistafinanciera@uibmedellin.org`
    );

    // Abrir cliente de correo
    window.open(`mailto:${providerEmail}?subject=${subject}&body=${body}`, '_self');

    showToast('📧 Correo preparado', 'Adjunta el PDF descargado al correo y envíalo.', 'success');
    // Recargar vista detalle después de un momento
    setTimeout(() => window.openOrderDetail(orderId), 1000);
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
        const data = requests.map(r => ({
            'N° Orden': r.id,
            'Fecha': formatDate(r.date),
            'Estado': r.status === 'approved' ? 'Aprobada' : 'Pendiente',
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
        XLSX.writeFile(wb, `Compras_CTH_${new Date().toISOString().slice(0, 10)}.xlsx`);
        showToast('Excel descargado', `${requests.length} órdenes exportadas correctamente.`, 'success');
    } catch (err) {
        console.error('Error exportando a Excel:', err);
        showToast('Error', 'No se pudo exportar: ' + err.message, 'error');
    }
};

// ─── Impresión directa (mismo formato que el PDF, 1 sola página carta) ───
window.printOrder = (orderId) => {
    const r = APP_STATE.requests.find(req => req.id === orderId);
    if (!r) return;

    // Construir ítems
    const itemsRows = (r.items && r.items.length > 0)
        ? r.items.map((item, i) => `
            <tr>
                <td style="padding:3px 6px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:9px;">${i + 1}</td>
                <td style="padding:3px 6px;border-bottom:1px solid #e2e8f0;font-size:9px;">${item.desc || '—'}</td>
                <td style="padding:3px 6px;border-bottom:1px solid #e2e8f0;text-align:center;font-size:9px;">${item.qty}</td>
                <td style="padding:3px 6px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:9px;">${formatCOP(item.price)}</td>
                <td style="padding:3px 6px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:9px;font-weight:600;">${formatCOP(item.total)}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="5" style="padding:8px;text-align:center;color:#94a3b8;font-size:9px;">Sin ítems registrados</td></tr>';

    // Firmas
    const sigSolHTML = r.signatureSolicitante
        ? `<img src="${r.signatureSolicitante}" style="height:50px;display:block;margin:0 auto 2px;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:9px;">Sin firma</div>';
    const sigAproHTML = r.signatureAprobacion
        ? `<img src="${r.signatureAprobacion}" style="height:50px;display:block;margin:0 auto 2px;">`
        : '<div style="height:50px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:9px;">Sin firma</div>';

    // Totales
    let totalesRows = `
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">Subtotal</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">$ ${r.subtotal || '0'}</td></tr>`;
    if (r.descuento) totalesRows += `
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">Descuento</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">${r.descuento}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">Subt. - Desc.</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">$ ${r.subtotalDesc || '0'}</td></tr>
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">IVA (19%)</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">$ ${r.iva || '0'}</td></tr>`;
    if (r.flete) totalesRows += `
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">Flete</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">$ ${r.flete}</td></tr>`;
    if (r.otro) totalesRows += `
        <tr><td style="padding:2px 6px;font-size:9px;color:#64748b;">Otro</td><td style="padding:2px 6px;text-align:right;font-size:9px;font-weight:600;">$ ${r.otro}</td></tr>`;
    totalesRows += `
        <tr><td style="padding:3px 6px;font-size:10px;font-weight:700;border-top:2px solid #1e293b;">TOTAL</td><td style="padding:3px 6px;text-align:right;font-size:12px;font-weight:700;color:#0c84ff;border-top:2px solid #1e293b;">$ ${r.totalFmt || formatCOP(r.total).replace(/^\$\s*/, '')}</td></tr>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${r.id} — Orden de Compra</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body {
                    font-family: Helvetica, Arial, sans-serif;
                    color: #1e293b;
                    background: #fff;
                    width: 215.9mm;
                    height: 279.4mm;
                    overflow: hidden;
                }
                body {
                    padding: 8mm 10mm;
                }
                @media print {
                    html, body {
                        width: 215.9mm;
                        height: 279.4mm;
                        overflow: hidden;
                    }
                    body { padding: 6mm 8mm; }
                    @page {
                        size: letter portrait;
                        margin: 6mm;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Encabezado -->
            <img src="${window.location.origin}/assets/encabezado orden de compra.png" style="width:100%;max-height:65px;object-fit:contain;margin-bottom:6px;">

            <!-- Número de Orden -->
            <div style="text-align:center;margin-bottom:8px;padding:4px 0;border-bottom:2px solid #1e293b;">
                <span style="font-size:13px;font-weight:800;color:#1e293b;letter-spacing:1.5px;">ORDEN DE COMPRA N° ${r.id}</span>
            </div>

            <!-- 3 columnas: Info General | Proveedor | Envío -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:8px;">
                <tr>
                    <td style="width:33%;vertical-align:top;padding:6px;background:#f1f5f9;border:1px solid #d1d5db;">
                        <div style="font-size:9px;font-weight:700;color:#1e293b;margin-bottom:4px;padding-bottom:3px;border-bottom:2px solid #3b82f6;">📅 Información General</div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Fecha</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${formatDate(r.date)}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Sede</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.sede || 'CTH'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Forma de pago</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.pago || '—'}</span></div>
                        <div><span style="font-size:8px;color:#64748b;">% Pago</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.pagoPerc || '—'}</span></div>
                    </td>
                    <td style="width:33%;vertical-align:top;padding:6px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;">
                        <div style="font-size:9px;font-weight:700;color:#1e293b;margin-bottom:4px;padding-bottom:3px;border-bottom:2px solid #3b82f6;">🏢 Proveedor</div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Nombre</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.provider}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">NIT</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.nit || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Teléfono</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.tel || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Correo</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.email || '—'}</span></div>
                        <div><span style="font-size:8px;color:#64748b;">Contacto</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.contacto || '—'}</span></div>
                    </td>
                    <td style="width:33%;vertical-align:top;padding:6px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;">
                        <div style="font-size:9px;font-weight:700;color:#1e293b;margin-bottom:4px;padding-bottom:3px;border-bottom:2px solid #3b82f6;">🚚 Envío</div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Sede envío</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.envioSede || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Ciudad</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.envioCiudad || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Dirección</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.dir || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Barrio</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.barrio || '—'}</span></div>
                        <div style="margin-bottom:2px;"><span style="font-size:8px;color:#64748b;">Teléfono</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.envioTel || '—'}</span></div>
                        <div><span style="font-size:8px;color:#64748b;">Recibe</span><br><span style="font-size:9px;font-weight:600;color:#1e293b;">${r.resp || '—'}</span></div>
                    </td>
                </tr>
            </table>

            <!-- Ítems -->
            <div style="margin-bottom:8px;">
                <div style="font-size:9px;font-weight:700;color:#1e293b;margin-bottom:4px;padding-bottom:3px;border-bottom:2px solid #3b82f6;">📦 Ítems de la Compra</div>
                <table style="width:100%;border-collapse:collapse;">
                    <thead>
                        <tr style="background:#1e293b;">
                            <th style="padding:4px 6px;color:#fff;font-size:8px;text-transform:uppercase;text-align:center;font-weight:600;">N°</th>
                            <th style="padding:4px 6px;color:#fff;font-size:8px;text-transform:uppercase;text-align:left;font-weight:600;">Descripción</th>
                            <th style="padding:4px 6px;color:#fff;font-size:8px;text-transform:uppercase;text-align:center;font-weight:600;">Cant.</th>
                            <th style="padding:4px 6px;color:#fff;font-size:8px;text-transform:uppercase;text-align:right;font-weight:600;">P. Unitario</th>
                            <th style="padding:4px 6px;color:#fff;font-size:8px;text-transform:uppercase;text-align:right;font-weight:600;">Total</th>
                        </tr>
                    </thead>
                    <tbody>${itemsRows}</tbody>
                </table>
            </div>

            <!-- Observaciones + Totales -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:10px;">
                <tr>
                    <td style="width:55%;vertical-align:top;padding:6px;background:#f1f5f9;border:1px solid #d1d5db;">
                        <div style="font-size:9px;font-weight:700;color:#1e293b;margin-bottom:4px;padding-bottom:3px;border-bottom:2px solid #3b82f6;">📝 Observaciones</div>
                        <p style="font-size:9px;color:#334155;margin:0;line-height:1.4;">${r.obs || 'Sin observaciones.'}</p>
                    </td>
                    <td style="width:45%;vertical-align:top;padding:6px;background:#f1f5f9;border:1px solid #d1d5db;border-left:none;">
                        <table style="width:100%;border-collapse:collapse;">${totalesRows}</table>
                    </td>
                </tr>
            </table>

            <!-- Firmas -->
            <table style="width:100%;border-collapse:collapse;">
                <tr>
                    <td style="width:50%;text-align:center;padding:4px 15px;vertical-align:bottom;">
                        ${sigSolHTML}
                        <div style="border-top:2px solid #1e293b;padding-top:4px;font-size:9px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma Solicitante</div>
                    </td>
                    <td style="width:50%;text-align:center;padding:4px 15px;vertical-align:bottom;">
                        ${sigAproHTML}
                        <div style="border-top:2px solid #1e293b;padding-top:4px;font-size:9px;font-weight:700;color:#1e293b;text-transform:uppercase;letter-spacing:1px;">Firma de Aprobación</div>
                    </td>
                </tr>
            </table>

            <!-- Footer contacto -->
            <div style="margin-top:10px;padding-top:6px;text-align:center;">
                <p style="font-size:8px;font-weight:700;font-style:italic;color:#334155;margin:0 0 3px;">Si tiene preguntas sobre esta factura, póngase en contacto con</p>
                <p style="font-size:7.5px;color:#334155;margin:0 0 1px;"><strong>Pagos:</strong> analistatesoreria@uibmedellin.org - Tel (604) 5609754 Ext 7200</p>
                <p style="font-size:7.5px;color:#334155;margin:0 0 1px;"><strong>Recepción de documentos:</strong> buzonfacturaelectronica@uibmedellin.org - Tel (604) 5609754 Ext 7209</p>
                <p style="font-size:7.5px;color:#334155;margin:0;"><strong>Compras:</strong> analistafinanciera@uibmedellin.org - Tel (604) 3220180 Ext 7114</p>
            </div>

            <!-- Mensaje de agradecimiento -->
            <div style="margin-top:8px;padding:6px 12px;background:linear-gradient(135deg,#f0f7ff,#e8f4f8);border:1px solid #bdd8f1;border-radius:4px;text-align:center;">
                <p style="font-size:8px;font-weight:700;color:#1e3a5f;margin:0 0 2px;letter-spacing:0.5px;">Gracias por ser parte de nuestra red de proveedores.</p>
                <p style="font-size:7.5px;color:#3b6b8a;margin:0 0 1px;line-height:1.3;">En la Unión Israelita de Beneficencia valoramos su confianza y compromiso.</p>
                <p style="font-size:7.5px;color:#3b6b8a;margin:0;line-height:1.3;">Trabajamos juntos para construir relaciones comerciales sólidas, transparentes y de largo plazo.</p>
            </div>

            <script>
                window.onload = function() {
                    setTimeout(function() { window.print(); }, 500);
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
