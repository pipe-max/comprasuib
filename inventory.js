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
                    { id: "CTH-102", nombre: "Estanteria metalica de 4 peldaños", cantidad: 4, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-103", nombre: "Mesa redonda tipo escritorio", cantidad: 2, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-104", nombre: "Mesa tipo nube", cantidad: 3, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-105", nombre: "Puff curvo 45°", cantidad: 8, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-106", nombre: "sofa rectangular sin espaldar", cantidad: 3, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-107", nombre: "sofa rectangular con espaldar", cantidad: 2, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-108", nombre: "Mesa auxiliar tipo BARDI", cantidad: 4, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-109", nombre: "Silla Suma Talla 6", cantidad: 12, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-110", nombre: "Silla Suma talla 4", cantidad: 12, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-111", nombre: "puf pera", cantidad: 5, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-112", nombre: "Cojines de piso rectangulares", cantidad: 3, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-113", nombre: "Mesa rectangular tipo barra", cantidad: 1, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-114", nombre: "Butaco sin espaldar en madera", cantidad: 6, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-115", nombre: "Gabinete de almacenamiento con puertas", cantidad: 1, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-116", nombre: "Árbol tipo estanteria", cantidad: 1, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-117", nombre: "Maquinas de escribir", cantidad: 2, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-118", nombre: "Escritorio administrativo", cantidad: 1, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-119", nombre: "Silla ergonomica administrativa", cantidad: 1, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-120", nombre: "Estateria de madera 6 puestos blanca", cantidad: 2, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-121", nombre: "Mesa trapezoidal talla 6", cantidad: 6, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-122", nombre: "Papeleras 46x46", cantidad: 2, estado: "Bueno", fechaCompra: "2025-07-15", activoContable: "", activoNoContable: "", observaciones: "" }
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
                    { id: "CTH-123", nombre: "LENOVO ACERTIVA DIGITAL", cantidad: 7, estado: "Bueno", fechaCompra: "8/14/2025", activoContable: "", activoNoContable: "", observaciones: "" }
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
                    { id: "CTH-124", nombre: "SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "4/1/2017", activoContable: "", activoNoContable: "", observaciones: "" }
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
            // Migración automática: fusionar áreas 3600 y 8000 (Biblioteca tecnológica) en área 100
            migrateLibraryAreas();
            // Migración automática: renombrar IDs CTH-3601 → CTH-123 y CTH-8001 → CTH-124
            migrateLibraryItemIds();
            // Migración automática: mover "Compra: fecha" de observaciones → fechaCompra
            migrateFechaCompraFromObservaciones();
            // Migración automática: corregir fechas legacy de ítems de Maritza
            migrateMaritzaFechas();
        } else {
            saveInventoryToDB();
        }
    } catch (err) {
        console.warn('⚠️ Error cargando inventario desde Firestore:', err);
    }
}

// ─── Migración: Fusionar áreas 3600 y 8000 de Biblioteca en área 100 ───
function migrateLibraryAreas() {
    // Aplica a todas las sedes que tengan áreas con codigoArea 3600 u 8000 llamadas "BIBLIOTECA" o "Biblioteca"
    let changed = false;
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        if (!sede.inventario) return;

        const MERGE_CODES = ['3600', '8000'];
        const MERGE_NAMES = ['biblioteca'];

        const areasToMerge = sede.inventario.filter(a =>
            MERGE_CODES.includes(a.codigoArea) ||
            MERGE_NAMES.includes((a.area || '').toLowerCase().trim())
            && a.codigoArea !== '100'
        );

        if (areasToMerge.length === 0) return;

        // Encontrar área destino (código 100)
        const targetArea = sede.inventario.find(a => a.codigoArea === '100');
        if (!targetArea) return;

        areasToMerge.forEach(srcArea => {
            srcArea.items.forEach(item => {
                // Marcar cada ítem con el responsable del área de origen
                const migratedItem = {
                    ...item,
                    responsable: item.responsable || srcArea.responsable || ''
                };
                // Evitar duplicados por ID
                const alreadyExists = targetArea.items.some(i => i.id === migratedItem.id);
                if (!alreadyExists) {
                    targetArea.items.push(migratedItem);
                    changed = true;
                }
            });
            // Eliminar área origen
            const idx = sede.inventario.indexOf(srcArea);
            if (idx !== -1) { sede.inventario.splice(idx, 1); changed = true; }
        });
    });

    if (changed) {
        console.log('🔀 Migración: áreas de Biblioteca tecnológica fusionadas en área 100');
        saveInventory();
    }
}

// ─── Migración: Renombrar IDs de ítems fusionados al consecutivo correcto ───
function migrateLibraryItemIds() {
    const ID_MAP = { 'CTH-3601': 'CTH-123', 'CTH-8001': 'CTH-124' };
    let changed = false;
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        (sede.inventario || []).forEach(area => {
            area.items.forEach(item => {
                if (ID_MAP[item.id]) {
                    console.log(`🔁 Renombrando ${item.id} → ${ID_MAP[item.id]}`);
                    item.id = ID_MAP[item.id];
                    changed = true;
                }
            });
        });
    });
    if (changed) {
        console.log('✅ Migración: IDs de Biblioteca renombrados al consecutivo correcto');
        saveInventory();
    }
}

// ─── Migración: Mover "Compra: fecha" de observaciones → fechaCompra ───
function migrateFechaCompraFromObservaciones() {
    let changed = false;
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        ['inventario', 'depuracion', 'adiciones'].forEach(tab => {
            (sede[tab] || []).forEach(area => {
                area.items.forEach(item => {
                    if (!item.observaciones) return;
                    // Detectar patrón "Compra: M/D/YYYY" o "Compra: MM/DD/YYYY"
                    const match = item.observaciones.match(/^Compra:\s*(\S+)/i);
                    if (match) {
                        const rawDate = match[1]; // ej: "7/15/2025"
                        // Convertir a formato YYYY-MM para input type="month"
                        const parts = rawDate.split('/');
                        if (parts.length === 3) {
                            const month = parts[0].padStart(2, '0');
                            const year = parts[2];
                            const formatted = `${year}-${month}`;
                            // Solo mover si fechaCompra está vacía
                            if (!item.fechaCompra) {
                                item.fechaCompra = formatted;
                            }
                        }
                        // Limpiar observaciones (quitar solo la parte de la fecha)
                        item.observaciones = item.observaciones.replace(/^Compra:\s*\S+\s*/i, '').trim();
                        changed = true;
                    }
                });
            });
        });
    });
    if (changed) {
        console.log('✅ Migración: fechas de compra movidas de observaciones → fechaCompra');
        saveInventory();
    }
}

// ─── Migración: Corregir fechas vacías/legacy de ítems CTH-101 a CTH-122 → 2025-07-15 ───
function migrateMaritzaFechas() {
    const MARITZA_IDS = ['CTH-101','CTH-102','CTH-103','CTH-104','CTH-105','CTH-106','CTH-107','CTH-108','CTH-109','CTH-110','CTH-111','CTH-112','CTH-113','CTH-114','CTH-115','CTH-116','CTH-117','CTH-118','CTH-119','CTH-120','CTH-121','CTH-122'];
    let changed = false;
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        (sede.inventario || []).forEach(area => {
            area.items.forEach(item => {
                if (MARITZA_IDS.includes(item.id) && item.fechaCompra !== '2025-07-15') {
                    item.fechaCompra = '2025-07-15';
                    changed = true;
                }
            });
        });
    });
    if (changed) {
        console.log('✅ Migración: fechas de ítems de Maritza corregidas a 2025-07-15');
        saveInventory();
    }
}

// ─── Helper: Primera letra mayúscula, resto minúscula (Title Case) ───
function titleCase(str) {
    if (!str || str === '—') return str;
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

// ─── Helper: Formatear fecha de compra → formato legible ───
function fmtFechaCompra(val) {
    if (!val) return '—';
    // Formato completo YYYY-MM-DD (input type=date)
    const fullMatch = val.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (fullMatch) {
        const d = new Date(parseInt(fullMatch[1]), parseInt(fullMatch[2]) - 1, parseInt(fullMatch[3]));
        return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    // Formato solo mes YYYY-MM (input type=month, datos antiguos)
    const mMatch = val.match(/^(\d{4})-(\d{2})$/);
    if (mMatch) {
        const d = new Date(parseInt(mMatch[1]), parseInt(mMatch[2]) - 1, 1);
        return d.toLocaleDateString('es-CO', { month: 'short', year: 'numeric' });
    }
    // Formato legacy M/D/YYYY
    const lMatch = val.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (lMatch) {
        const d = new Date(parseInt(lMatch[3]), parseInt(lMatch[1]) - 1, parseInt(lMatch[2]));
        return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    return val;
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
                        <th style="width:90px;">ID</th>
                        <th>Descripción del Activo</th>
                        <th style="width:50px;text-align:center;">Cant.</th>
                        <th style="width:80px;">Estado</th>
                        <th style="width:120px;">Responsable</th>
                        ${tabActivo === 'inventario' ? '<th style="width:110px;">Fecha Compra</th><th style="width:70px;text-align:center;">Act.<br>Contable</th><th style="width:70px;text-align:center;">Act. No<br>Contable</th>' : ''}
                        ${tabActivo === 'depuracion' ? '<th style="width:100px;">Fecha Retiro</th><th>Motivo</th>' : ''}
                        ${tabActivo === 'adiciones' ? '<th style="width:100px;">Fecha Compra</th><th>Proveedor</th><th style="width:100px;">Valor</th><th style="width:75px;">O.C.</th>' : ''}
                        <th style="width:90px;text-align:center;">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${area.items.map((item, itemIdx) => `
                        <tr class="inv-item-row">
                            <td><code class="inv-id">${item.id}</code></td>
                            <td><strong>${titleCase(item.nombre)}</strong></td>
                            <td style="text-align:center;">${item.cantidad}</td>
                            <td><span class="inv-estado inv-estado-${(item.estado || '').toLowerCase().replace(/\s+/g, '-')}">${item.estado}</span></td>
                            <td style="font-size:0.78rem;color:var(--text-main);white-space:nowrap;">${titleCase(item.responsable || area.responsable || '—')}</td>
                            ${tabActivo === 'inventario' ? `<td style="white-space:nowrap;">${fmtFechaCompra(item.fechaCompra)}</td><td style="text-align:center;">${['X','Sí','Si','SI','si','sí','1',true].includes(item.activoContable) ? '<span style="color:#16a34a;font-size:1.1rem;">✅</span>' : ['NO','No','no'].includes(item.activoContable) ? '<span style="color:#ef4444;font-size:1.1rem;">❌</span>' : '—'}</td><td style="text-align:center;">${['X','Sí','Si','SI','si','sí','1',true].includes(item.activoNoContable) ? '<span style="color:#16a34a;font-size:1.1rem;">✅</span>' : ['NO','No','no'].includes(item.activoNoContable) ? '<span style="color:#ef4444;font-size:1.1rem;">❌</span>' : '—'}</td>` : ''}
                            ${tabActivo === 'depuracion' ? `<td>${item.fechaRetiro || '—'}</td><td>${item.motivo || '—'}</td>` : ''}
                            ${tabActivo === 'adiciones' ? `<td style="white-space:nowrap;">${fmtFechaCompra(item.fechaCompra)}</td><td>${item.proveedor || '—'}</td><td>${item.valor ? formatCOP(item.valor) : '—'}</td><td>${item.ordenCompra ? '<code>' + item.ordenCompra + '</code>' : '—'}</td>` : ''}
                            <td style="text-align:center;white-space:nowrap;">
                                <button class="prov-btn-edit" onclick="window.openEditInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" title="Editar">✏️</button>${tabActivo === 'inventario' ? `<button class="inv-btn-transfer" onclick="window.openTransferItem('${sedeKey}',${areaIdx},${itemIdx})" title="Trasladar a otra área">🔀</button>` : ''}<button class="prov-btn-delete" onclick="window.deleteInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" title="Eliminar">🗑️</button>
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

        const invRows = [['ID', 'N° de Serie', 'Área', 'Descripción del Activo', 'Cantidad', 'Estado', 'Responsable', 'Fecha Compra', 'Activo Contable', 'Activo No Contable', 'Observaciones']];
        (sede.inventario || []).forEach(area => {
            area.items.forEach(item => {
                invRows.push([item.id, (Array.isArray(item.seriales) ? item.seriales.filter(Boolean).join(' / ') : item.serial || ''), area.area, item.nombre, item.cantidad, item.estado, titleCase(item.responsable || area.responsable || ''), item.fechaCompra || '', item.activoContable || '', item.activoNoContable || '', item.observaciones || '']);
            });
        });
        const wsInv = XLSX.utils.aoa_to_sheet(invRows);
        wsInv['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 25 }, { wch: 40 }, { wch: 8 }, { wch: 12 }, { wch: 25 }, { wch: 14 }, { wch: 16 }, { wch: 18 }, { wch: 35 }];
        XLSX.utils.book_append_sheet(wb, wsInv, `${sedeKey} - Inventario`);

        if (sede.depuracion && sede.depuracion.length > 0) {
            const depRows = [['ID', 'N° de Serie', 'Área', 'Descripción', 'Cantidad', 'Estado', 'Fecha Retiro', 'Motivo']];
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
            const addRows = [['ID', 'N° de Serie', 'Área', 'Descripción', 'Cantidad', 'Estado', 'Fecha Compra', 'Proveedor', 'Valor', 'O.C.']];
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
        head = [['#', 'Codigo', 'N° Serie', 'Descripcion del Activo', 'Cant.', 'Estado', 'F. Compra', 'Act. Contable', 'Act. No Contable', 'Observaciones']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            Array.isArray(item.seriales) ? item.seriales.filter(Boolean).join('\n') : (item.serial || ''),
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
        head = [['#', 'Codigo', 'N° Serie', 'Descripcion', 'Cant.', 'Estado', 'Fecha Retiro', 'Motivo']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            Array.isArray(item.seriales) ? item.seriales.filter(Boolean).join('\n') : (item.serial || ''),
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
        head = [['#', 'Codigo', 'N° Serie', 'Descripcion', 'Cant.', 'Fecha Compra', 'Proveedor', 'Valor']];
        body = area.items.map((item, i) => [
            String(i + 1),
            item.id,
            Array.isArray(item.seriales) ? item.seriales.filter(Boolean).join('\n') : (item.serial || ''),
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

    let itemData = { id: '', nombre: '', cantidad: 1, estado: 'Bueno', serial: '', observaciones: '', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: '' };
    let selectedArea = existingAreas[0] || '';

    if (isEdit) {
        itemData = { ...areas[editAreaIdx].items[editItemIdx] };
        selectedArea = areas[editAreaIdx].area;
        // Pre-llenar responsable desde el área si el ítem no lo tiene
        if (!itemData.responsable) {
            itemData.responsable = areas[editAreaIdx].responsable || '';
        }
    } else {
        // Pre-llenar responsable del área al crear nuevo ítem
        const firstArea = areas.find(a => a.area === selectedArea);
        if (firstArea) itemData.responsable = firstArea.responsable || '';
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
                <div class="inv-modal-2col">
                    <div class="inv-modal-col-left">
                    <!-- Col izq 1: Ubicación del Activo -->
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

                    <!-- Información Contable -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">💰</span> Información Contable
                        </div>
                        <div style="display:flex;gap:12px;align-items:stretch;padding:4px 0;">
                            <label class="inv-checkbox-label">
                                <input type="checkbox" id="inv-item-activo-contable" ${['X','Sí','Si','SI','si','sí','1',true].includes(itemData.activoContable) ? 'checked' : ''}>
                                <span class="inv-checkbox-text">✅ Activo Contable</span>
                            </label>
                            <label class="inv-checkbox-label">
                                <input type="checkbox" id="inv-item-activo-no-contable" ${['X','Sí','Si','SI','si','sí','1',true].includes(itemData.activoNoContable) ? 'checked' : ''}>
                                <span class="inv-checkbox-text">📋 Activo No Contable</span>
                            </label>
                        </div>
                    </div>

                    <!-- Notas -->
                    <div class="inv-modal-section">
                        <div class="inv-modal-section-title">
                            <span class="inv-modal-section-icon">💬</span> Notas
                        </div>
                        <div class="inv-modal-field">
                            <textarea id="inv-item-obs" class="inv-modal-textarea" rows="4" placeholder="Observaciones adicionales...">${itemData.observaciones || ''}</textarea>
                        </div>
                    </div>

                    </div><!-- /inv-modal-col-left -->
                    <div class="inv-modal-col-right">
                    <!-- Col der: Información del Activo -->
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
                                <input type="number" id="inv-item-cantidad" class="inv-modal-input" value="${itemData.cantidad}" min="0" oninput="window._refreshSerialInputs(this.value)">
                            </div>
                            <div class="inv-modal-field">
                                <label>Estado</label>
                                <select id="inv-item-estado" class="inv-modal-select">
                                    ${['Bueno', 'Regular', 'Malo', 'Nuevo', 'Dado de baja', 'Pendiente'].map(e => `<option value="${e}" ${e === itemData.estado ? 'selected' : ''}>${e}</option>`).join('')}
                                </select>
                            </div>
                            <div class="inv-modal-field">
                                <label>Fecha Compra</label>
                                <input type="date" id="inv-item-fecha-compra" class="inv-modal-input" value="${itemData.fechaCompra || ''}">
                            </div>
                        </div>
                        <div class="inv-modal-field" style="margin-top:4px;">
                            <label>Responsable del Activo</label>
                            <input type="text" id="inv-item-responsable" class="inv-modal-input" value="${itemData.responsable || ''}" placeholder="Ej: LUZ MARITZA TORO">
                        </div>
                        <div class="inv-modal-field" style="margin-top:4px;" id="inv-serial-block">
                            <label>N° de Serie <span style="font-weight:400;color:var(--text-muted);text-transform:none;">(uno por unidad — solo equipos tecnológicos)</span></label>
                            <div id="inv-seriales-list">
                                ${(() => {
                                    const qty = itemData.cantidad || 1;
                                    const seriales = Array.isArray(itemData.seriales) ? itemData.seriales : (itemData.serial ? [itemData.serial] : []);
                                    let inputs = '';
                                    for (let i = 0; i < qty; i++) {
                                        inputs += `<div class="inv-serial-row">
                                            <span class="inv-serial-num">U${i+1}</span>
                                            <input type="text" class="inv-modal-input inv-serial-input" data-idx="${i}" value="${seriales[i] || ''}" placeholder="N° serie unidad ${i+1} (vacío si no aplica)">
                                        </div>`;
                                    }
                                    return inputs;
                                })()}
                            </div>
                        </div>
                    </div>

                    </div><!-- /inv-modal-col-right -->
                    </div><!-- /inv-modal-2col -->

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
        serial: '',  // legacy, reemplazado por seriales[]
        seriales: Array.from(document.querySelectorAll('#inv-seriales-list .inv-serial-input')).map(i => i.value.trim()),
        fechaCompra: document.getElementById('inv-item-fecha-compra')?.value || '',
        activoContable: document.getElementById('inv-item-activo-contable')?.checked ? 'X' : '',
        activoNoContable: document.getElementById('inv-item-activo-no-contable')?.checked ? 'X' : '',
        responsable: document.getElementById('inv-item-responsable')?.value.trim() || '',
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
// ─── Regenerar inputs de serial al cambiar la cantidad ───
window._refreshSerialInputs = (newQty) => {
    const qty = parseInt(newQty) || 1;
    const container = document.getElementById('inv-seriales-list');
    if (!container) return;
    // Preservar valores ya escritos
    const existing = Array.from(container.querySelectorAll('.inv-serial-input')).map(i => i.value.trim());
    let html = '';
    for (let i = 0; i < qty; i++) {
        html += `<div class="inv-serial-row">
            <span class="inv-serial-num">U${i+1}</span>
            <input type="text" class="inv-modal-input inv-serial-input" data-idx="${i}" value="${existing[i] || ''}" placeholder="N° serie unidad ${i+1} (vacío si no aplica)">
        </div>`;
    }
    container.innerHTML = html;
};

// ─── Traslado de unidad individual entre áreas ───
window.openTransferItem = (sedeKey, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];
    const seriales = Array.isArray(item.seriales) ? item.seriales.filter(Boolean) : (item.serial ? [item.serial] : []);
    const todasLasAreas = sede.inventario.filter((_, i) => i !== areaIdx).map(a => a.area);

    // Opciones de unidades a trasladar
    const unidadesOptions = seriales.length > 0
        ? seriales.map((s, i) => `<label class="inv-transfer-unit-label">
                <input type="checkbox" class="inv-transfer-unit-cb" value="${i}" data-serial="${s}">
                <span class="inv-serial-num">U${i+1}</span>
                <code>${s}</code>
            </label>`).join('')
        : Array.from({length: item.cantidad}, (_, i) => `<label class="inv-transfer-unit-label">
                <input type="checkbox" class="inv-transfer-unit-cb" value="${i}" data-serial="">
                <span class="inv-serial-num">U${i+1}</span>
                <span style="color:#94a3b8;font-size:0.8rem;">Sin serial</span>
            </label>`).join('');

    const areaOptions = todasLasAreas.map(a =>
        `<option value="${a}">${a}</option>`
    ).join('');

    const prev = document.getElementById('inv-transfer-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.id = 'inv-transfer-overlay';
    overlay.className = 'inv-modal-overlay';
    overlay.innerHTML = `
        <div class="inv-modal" style="max-width:480px;" onclick="event.stopPropagation()">
            <div class="inv-modal-header">
                <div class="inv-modal-header-left">
                    <div class="inv-modal-icon">🔀</div>
                    <div>
                        <h2 class="inv-modal-title">Trasladar Unidad(es)</h2>
                        <p class="inv-modal-subtitle">${item.nombre} · ${area.area}</p>
                    </div>
                </div>
                <button class="inv-modal-close" onclick="document.getElementById('inv-transfer-overlay').remove()">&times;</button>
            </div>
            <div class="inv-modal-body">
                <div class="inv-modal-section">
                    <div class="inv-modal-section-title"><span class="inv-modal-section-icon">📦</span> Selecciona las unidades a trasladar</div>
                    <div class="inv-transfer-units">${unidadesOptions}</div>
                </div>
                <div class="inv-modal-section" style="margin-top:12px;">
                    <div class="inv-modal-section-title"><span class="inv-modal-section-icon">📍</span> Área destino</div>
                    <div class="inv-modal-field">
                        <select id="inv-transfer-dest" class="inv-modal-select">
                            <option value="">— Seleccionar área —</option>
                            ${areaOptions}
                            <option value="__nueva__">➕ Nueva área...</option>
                        </select>
                        <input type="text" id="inv-transfer-dest-nueva" class="inv-modal-input" placeholder="Nombre de la nueva área" style="display:none;margin-top:8px;">
                    </div>
                    <div class="inv-modal-field" style="margin-top:8px;">
                        <label>Responsable en el área destino</label>
                        <input type="text" id="inv-transfer-responsable" class="inv-modal-input" placeholder="Ej: Juan Camilo Ramírez" value="${titleCase(item.responsable || area.responsable || '')}">
                    </div>
                </div>
            </div>
            <div class="inv-modal-footer">
                <button class="inv-modal-btn-cancel" onclick="document.getElementById('inv-transfer-overlay').remove()">Cancelar</button>
                <button class="inv-modal-btn-save" onclick="window.executeTransfer('${sedeKey}',${areaIdx},${itemIdx})">🔀 Confirmar Traslado</button>
            </div>
        </div>
    `;
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));

    // Mostrar input de nueva área si se selecciona
    document.getElementById('inv-transfer-dest').addEventListener('change', function() {
        const input = document.getElementById('inv-transfer-dest-nueva');
        input.style.display = this.value === '__nueva__' ? '' : 'none';
    });
};

window.executeTransfer = (sedeKey, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const srcArea = sede.inventario[areaIdx];
    const item = srcArea.items[itemIdx];

    // Unidades seleccionadas
    const checked = Array.from(document.querySelectorAll('.inv-transfer-unit-cb:checked'));
    if (checked.length === 0) {
        showToast('Error', 'Selecciona al menos una unidad a trasladar', 'error');
        return;
    }

    // Área destino
    let destAreaName = document.getElementById('inv-transfer-dest').value;
    if (destAreaName === '__nueva__') {
        destAreaName = document.getElementById('inv-transfer-dest-nueva').value.trim();
    }
    if (!destAreaName) {
        showToast('Error', 'Selecciona el área destino', 'error');
        return;
    }

    const responsableDest = document.getElementById('inv-transfer-responsable').value.trim();
    const fechaHoy = new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'short', year:'numeric'});
    const indices = checked.map(cb => parseInt(cb.value));
    const seriales = Array.isArray(item.seriales) ? [...item.seriales] : (item.serial ? [item.serial] : Array(item.cantidad).fill(''));

    // Crear ítem nuevo en el área destino
    let destArea = sede.inventario.find(a => a.area === destAreaName);
    if (!destArea) {
        destArea = { area: destAreaName, codigoArea: '', responsable: responsableDest, items: [] };
        sede.inventario.push(destArea);
    }

    // Calcular siguiente ID para el área destino
    let maxNum = 0;
    sede.inventario.forEach(a => a.items.forEach(it => {
        const m = it.id.match(/(\d+)$/);
        if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
    }));
    const newId = `${sedeKey.toUpperCase()}-${String(maxNum + 1).padStart(3, '0')}`;

    const serialesTransladados = indices.map(i => seriales[i]).filter(Boolean);

    destArea.items.push({
        ...item,
        id: newId,
        cantidad: indices.length,
        seriales: serialesTransladados,
        serial: '',
        responsable: responsableDest,
        observaciones: `Traslado desde ${srcArea.area} · ${fechaHoy}${item.observaciones ? ' | ' + item.observaciones : ''}`
    });

    // Actualizar ítem origen: quitar unidades trasladadas
    const serialesRestantes = seriales.filter((_, i) => !indices.includes(i));
    item.cantidad -= indices.length;
    item.seriales = serialesRestantes;
    item.serial = '';

    // Si quedó en 0, eliminar el ítem origen
    if (item.cantidad <= 0) {
        srcArea.items.splice(itemIdx, 1);
        if (srcArea.items.length === 0) sede.inventario.splice(areaIdx, 1);
    }

    saveInventory();
    document.getElementById('inv-transfer-overlay').remove();
    showToast('✅ Traslado realizado',
        `${indices.length} unidad(es) de "${item.nombre}" trasladada(s) a ${destAreaName} (ID: ${newId})`,
        'success');

    window._invSedeActiva = sedeKey;
    renderInventoryView(document.getElementById('view-dashboard'));
};