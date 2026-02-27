/**
 * CTH Compras — App v2.0
 * Panel de Control de Compras — Colegio Theodoro Herzl
 */

// ─── Base de datos de proveedores ───
const PROVIDERS_DB = [
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

// ─── Estado de la app (en memoria, persiste con localStorage) ───
const APP_STATE = {
    requests: JSON.parse(localStorage.getItem('cth_requests') || '[]'),
    currentView: 'dashboard'
};

function saveState() {
    localStorage.setItem('cth_requests', JSON.stringify(APP_STATE.requests));
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
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
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
                'history': 'Historial de Órdenes'
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

    // Render dashboard
    renderDashboard();
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
    const now = new Date();
    const thisMonth = requests.filter(r => {
        const d = new Date(r.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });

    const today = requests.filter(r => {
        const d = new Date(r.date);
        return d.toDateString() === now.toDateString();
    });

    const pending = requests.filter(r => r.status === 'pending');
    const totalInvestment = requests.reduce((acc, r) => acc + (r.total || 0), 0);

    // Update stats
    const elRequests = document.getElementById('stat-requests');
    const elToday = document.getElementById('stat-today');
    const elPending = document.getElementById('stat-pending');
    const elTotal = document.getElementById('stat-total');

    if (elRequests) elRequests.textContent = thisMonth.length;
    if (elToday) elToday.textContent = 'Hoy: ' + today.length;
    if (elPending) elPending.textContent = pending.length;
    if (elTotal) elTotal.textContent = formatCOP(totalInvestment);

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
            recentList.innerHTML = last5.map(r => {
                const statusLabels = { pending: 'Pendiente', approved: 'Aprobada', sent: 'Enviada' };
                return `
                    <div class="recent-item">
                        <span class="ri-icon">📋</span>
                        <div class="ri-info">
                            <div class="ri-title">${r.provider || 'Sin proveedor'}</div>
                            <div class="ri-meta">${r.id} · ${formatDate(r.date)}</div>
                        </div>
                        <span class="ri-amount">${formatCOP(r.total || 0)}</span>
                        <span class="ri-status ${r.status}">${statusLabels[r.status] || r.status}</span>
                    </div>
                `;
            }).join('');
        }
    }
}

// ─── Render Views ───
function renderView(view) {
    const container = document.getElementById('view-dashboard');

    if (view === 'dashboard') {
        // Restaurar el dashboard HTML original
        container.innerHTML = `
            <div class="stats-grid animate-in">
                <div class="stat-card">
                    <h3>Solicitudes este mes</h3>
                    <div class="value" id="stat-requests">0</div>
                    <div class="trend blue" id="stat-today">Hoy: 0</div>
                </div>
                <div class="stat-card">
                    <h3>En proceso de firma</h3>
                    <div class="value" id="stat-pending">0</div>
                    <div class="trend">Pendientes</div>
                </div>
                <div class="stat-card">
                    <h3>Inversión Total</h3>
                    <div class="value" id="stat-total">$ 0</div>
                    <div class="trend green">Presupuesto OK</div>
                </div>
            </div>

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
                    <p>No hay órdenes recientes para mostrar.</p>
                    <p class="empty-sub">Comienza creando una nueva solicitud de compra.</p>
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

                <div class="form-header-main">
                    <p class="subtitle">Diligencia los datos base para generar la solicitud y adjuntar las cotizaciones.</p>
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
                    </div>
                    <div class="totals-panel totals-table">
                        <div class="total-row">
                            <span class="total-label">SUBTOTAL</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-sub" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                        <div class="total-row">
                            <span class="total-label">DESCUENTO</span>
                            <span class="total-currency">$</span>
                            <input type="text" id="sheet-descuento" class="total-input" value="-" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row subtotal-neto">
                            <span class="total-label">SUBTOTAL - DESCUENTO</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-sub-desc" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                        <div class="total-row">
                            <span class="total-label">IVA (19%)</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-iva" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
                        </div>
                        <div class="total-row">
                            <span class="total-label">FLETE</span>
                            <span class="total-currency">$</span>
                            <input type="text" id="sheet-flete" class="total-input" value="-" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row">
                            <span class="total-label">OTRO</span>
                            <span class="total-currency">$</span>
                            <input type="text" id="sheet-otro" class="total-input" value="-" oninput="window.formatPriceInput(this); window.updateSheetCalculations()">
                        </div>
                        <div class="total-row grand-total">
                            <span class="total-label">TOTAL</span>
                            <span class="total-currency">$</span>
                            <strong id="sheet-total" class="total-value">${formatCOP(0).replace(/^\$\s*/, '')}</strong>
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

    } else if (view === 'history') {
        renderHistory(container);
    }
}

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

    // Descuento
    const descuentoRaw = document.getElementById('sheet-descuento')?.value || '0';
    const descuento = (descuentoRaw === '-' || descuentoRaw.trim() === '') ? 0 : parseCOP(descuentoRaw);

    // Subtotal - Descuento
    const subtotalNeto = subtotal - descuento;

    // IVA fijo 19%
    const ivaAmount = subtotalNeto * 0.19;

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
    const elIva = document.getElementById('sheet-iva');
    const elTotal = document.getElementById('sheet-total');

    if (elSub) elSub.textContent = fmt(subtotal);
    if (elSubDesc) elSubDesc.textContent = fmt(subtotalNeto);
    if (elIva) elIva.textContent = fmt(ivaAmount);
    if (elTotal) elTotal.textContent = fmt(totalGeneral);
};

// ─── Parsear valor COP (quita puntos de miles, acepta coma decimal) ───
function parseCOP(str) {
    if (!str) return 0;
    // Quitar todo excepto dígitos y coma
    let clean = str.replace(/\./g, '').replace(/,/g, '.');
    return parseFloat(clean) || 0;
}

// ─── Auto-formatear precio con puntos de miles mientras se escribe ───
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
        iva: document.getElementById('sheet-iva')?.textContent || '',
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
    const descuento = (descuentoRaw === '-' || descuentoRaw.trim() === '') ? 0 : parseCOP(descuentoRaw);
    const subtotalNeto = subtotal - descuento;

    // IVA fijo 19%
    const ivaAmount = subtotalNeto * 0.19;

    const fleteRaw = document.getElementById('sheet-flete')?.value || '0';
    const flete = (fleteRaw === '-' || fleteRaw.trim() === '') ? 0 : parseCOP(fleteRaw);
    const otroRaw = document.getElementById('sheet-otro')?.value || '0';
    const otro = (otroRaw === '-' || otroRaw.trim() === '') ? 0 : parseCOP(otroRaw);

    window._currentFormData.totalNumeric = subtotalNeto + ivaAmount + flete + otro;

    const container = document.getElementById('view-dashboard');
    container.innerHTML = `
        <div class="card-form animate-in">
            <div class="order-header-official">
                <img src="assets/encabezado orden de compra.png" alt="Encabezado Orden de Compra – Colegio Theodoro Herzl" class="order-header-img">
            </div>
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
                <button class="btn-secondary" onclick="document.querySelector('[data-view=\\'new-request\\']').click()">Volver al Formulario</button>
                <button class="btn-primary" id="btn-next-step" disabled onclick="window.submitRequest()">Enviar Solicitud Completa</button>
            </div>
        </div>
    `;
};

window.handleQuickUpload = (n, file) => {
    if (!file) return;
    const dz = document.getElementById('drop-' + n);
    if (!dz) return;

    const isImage = file.type.startsWith('image/');
    const icon = isImage ? '🖼️' : '📄';

    dz.innerHTML = `<span class="drop-icon">${icon}</span><p>${file.name}</p>`;
    dz.style.background = '#f0fdf4';
    dz.classList.add('uploaded');

    showToast('Archivo cargado', file.name, 'success');

    const all = document.querySelectorAll('.drop-zone.uploaded').length;
    const btn = document.getElementById('btn-next-step');
    if (btn && all >= 3) btn.disabled = false;
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
        total: data.totalNumeric || 0,
        status: 'pending',
        sede: data.sede || 'CTH',
        pago: data.pago || '',
        pagoPerc: data.pagoPerc || '',
        obs: data.obs || ''
    };

    APP_STATE.requests.push(request);
    saveState();

    showToast('¡Solicitud enviada!', 'La orden ' + request.id + ' fue enviada a Gerencia', 'success');

    // Volver al dashboard
    setTimeout(() => {
        document.querySelector('[data-view="dashboard"]').click();
    }, 800);
};

// ─── History View ───
function renderHistory(container) {
    const requests = APP_STATE.requests;
    const statusLabels = { pending: 'Pendiente', approved: 'Aprobada', sent: 'Enviada' };

    container.innerHTML = `
        <div class="card-form animate-in full-sheet">
            <div class="form-header-main">
                <h2>Historial de Órdenes</h2>
                <p class="subtitle">Consulta todas las solicitudes de compra registradas.</p>
            </div>

            <div class="history-filters">
                <button class="filter-chip active" data-filter="all">Todas</button>
                <button class="filter-chip" data-filter="pending">Pendientes</button>
                <button class="filter-chip" data-filter="approved">Aprobadas</button>
                <button class="filter-chip" data-filter="sent">Enviadas</button>
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
                                <tr data-status="${r.status}">
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
}
