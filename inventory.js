// ═══════════════════════════════════════════════════════════════════
// ─── INVENTARIO DE ACTIVOS — Base de Datos y Vista ───
// ═══════════════════════════════════════════════════════════════════

// Versión de datos — al cambiar este número se fuerza recarga desde el código fuente
const INVENTORY_DATA_VERSION = '2026-03-24-v1';
if (localStorage.getItem('cth_inventory_version') !== INVENTORY_DATA_VERSION) {
    localStorage.removeItem('cth_inventory');
    localStorage.setItem('cth_inventory_version', INVENTORY_DATA_VERSION);
}

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
                    { id: "CTH-2539", nombre: "Viola 9", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "CTH-PROY-2500", nombre: "PROYECTOR NEC NP-P501X", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: 4Y00140FK | KADIMA" }
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
                    { id: "CTH-TEC-001", nombre: "All01-CTH Lenovo M90a Gen 3", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-06", activoContable: "", activoNoContable: "", observaciones: "Tesoreria | Todo en uno | Lenovo | M90a Gen 3 | Windows 11 Pro | RAM: 16 GB | Resp: Luz Dary Criollo | S/N: MJ0LLVYG" },
                    { id: "CTH-TEC-002", nombre: "All02-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "2019-02-21", activoContable: "", activoNoContable: "", observaciones: "Salón de artes | Todo en uno | Lenovo | 000KLS | Windows 11 Education | RAM: 4 GB | Resp: Camilo Gomez | S/N: S1H063PA" },
                    { id: "CTH-TEC-003", nombre: "All03-CTH Lenovo 12B3-007CLS", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-27", activoContable: "", activoNoContable: "", observaciones: "Oficina de psicologia | Todo en uno | Lenovo | 12B3-007CLS | Windows 11 Pro Education | RAM: 16 GB | Resp: Mariana Tamayo | S/N: MP2DP55V" },
                    { id: "CTH-TEC-004", nombre: "All04-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "2019-02-20", activoContable: "", activoNoContable: "", observaciones: "O. Psicología de bachillerato | Todo en uno | Lenovo | 000KLS | Windows 11 Pro | RAM: 4 GB Tipo: DDR4 (SO-DIMM) Vel: 2400 MHz Canales usados:1 | Resp: Estefania Ordoñez Arango | S/N: S1H063VJ" },
                    { id: "CTH-TEC-005", nombre: "All05-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "2019-02-25", activoContable: "", activoNoContable: "", observaciones: "O. Coordinación de bachillerato | Todo en uno | Lenovo | 000KLS | Windows 11 Pro | RAM: 4 GB Tipo: DDR4 (SO-DIMM) Vel: 2666 MHz Canales usados:1 | Resp: Alexander Zuluaga | S/N: S1H063SB" },
                    { id: "CTH-TEC-006", nombre: "All06-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "2018-12-19", activoContable: "", activoNoContable: "", observaciones: "O. Coordinación de primaria | Todo en uno | Lenovo | 000KLS | Windows 11 Pro | RAM: 4 GB Tipo: DDR4 (SO-DIMM) Vel: 2666 MHz Canales usados:1 | Resp: Olga Lucia Amar | S/N: S1H06345" },
                    { id: "CTH-TEC-007", nombre: "All08-CTH Lenovo F0CB00EALD", cantidad: 1, estado: "Bueno", fechaCompra: "2016-12-12", activoContable: "", activoNoContable: "", observaciones: "O. Coordinación de Preescolar | Todo en uno | Lenovo | F0CB00EALD | Windows 10 | RAM: 4 GB Tipo:DDR4 (SO-DIMM) Vel: 2400 MHz Canales usados: 1 | Resp: Paola Cardona | S/N: MP157YYS" },
                    { id: "CTH-TEC-008", nombre: "All09-CTH Lenovo F0CB00EALD", cantidad: 1, estado: "Bueno", fechaCompra: "2016-12-12", activoContable: "", activoNoContable: "", observaciones: "Admisiones | Todo en uno | Lenovo | F0CB00EALD | Windows 11 | RAM: 4 GB Tipo:DDR4 (SO-DIMM) Vel: 2400 MHz Canales usados: 1 | Resp: Luz Helena Restrepo | S/N: MP157YYL" },
                    { id: "CTH-TEC-009", nombre: "All11-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "2018-10-09", activoContable: "", activoNoContable: "", observaciones: "O. Coor deportes | Todo en uno | Lenovo | 000KLS | Windows 11 Pro | RAM: 4 GB Tipo: DDR4 (SO-DIMM) Vel: 2666 MHz Canales usados:1 | Resp: Carlos Velasquez | S/N: S1H063AG" },
                    { id: "CTH-TEC-010", nombre: "All13-CTH Lenovo 000KLS", cantidad: 1, estado: "Bueno", fechaCompra: "-", activoContable: "", activoNoContable: "", observaciones: "Aula de Danza Hatikvah | Todo en uno | Lenovo | 000KLS | Chrome OS flex | RAM: 4 GB Tipo:DDR4 (SO-DIMM) Vel: 2400 MHz Canales usados: 1 | Resp: Christian Giraldo | S/N: S1H06392" },
                    { id: "CTH-TEC-011", nombre: "Mac01-CTH Apple 24', M1 2021", cantidad: 1, estado: "Bueno", fechaCompra: "18/12/2022", activoContable: "", activoNoContable: "", observaciones: "Oficina auxiliar comunicaciones | Mac | Apple | 24', M1 2021 | MacOS sonoma 14.6.1 | RAM: 8 GB | Resp: Valentina Cañas | S/N: C02J36N8Q7GN" },
                    { id: "CTH-TEC-012", nombre: "Mac02-CTH Apple 24', M3 2023", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-30", activoContable: "", activoNoContable: "", observaciones: "Oficina de comunicaciones | Mac | Apple | 24', M3 2023 | MAC-OS | RAM: 16 GB | Resp: Felipe Gonzalez | S/N: DF7F4WXF3G" },
                    { id: "CTH-TEC-013", nombre: "NUC01-CTH Acer", cantidad: 1, estado: "Bueno", fechaCompra: "2017-10-11", activoContable: "", activoNoContable: "", observaciones: "Portería | NUC | Acer | Windows 11 Pro | RAM: 8 GB | Resp: Guardas de seguridad | S/N: DTVW7AL00122502DCC3000" },
                    { id: "CTH-TEC-014", nombre: "N/A LENOVO LENOVO 500E YOGA", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | chorme | LENOVO | LENOVO 500E YOGA | Chrome OS flex | RAM: 8 GB | Resp: Tomas Gonzalez | S/N: PF5NYH00" },
                    { id: "CTH-TEC-015", nombre: "PC01-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Biblioteca  de bachillerato | PC | Compumax | 1042-900-0072 | Windows 11 Education | RAM: 8 GB | Resp: Mariza Velasquez | S/N: 300SN51690" },
                    { id: "CTH-TEC-016", nombre: "PC02-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Oficina psicologia | PC | Compumax | 1042-900-0072 | Windows 11 Education | RAM: 8 GB | Resp: Paula Monsalve | S/N: 300SN51689" },
                    { id: "CTH-TEC-017", nombre: "PC03-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Sala de Proyección | PC | Compumax | 1042-900-0072 | Windows 11 Pro | RAM: 8 GB | Resp: Carlos Giraldo | S/N: 300SN51687" },
                    { id: "CTH-TEC-018", nombre: "PC04-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Recepción | PC | Compumax | 1042-900-0072 | Windows 11 Pro | RAM: 8 GB | Resp: Sonia Franco | S/N: 300SN51683" },
                    { id: "CTH-TEC-019", nombre: "PC05-CTH Compumax 1042-900-00072", cantidad: 1, estado: "Bueno", fechaCompra: "2019-02-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de administración | PC | Compumax | 1042-900-00072 | Windows 11 Education | RAM: 8 GB | Resp: Maria Stella Farveroff | S/N: 200SN82903" },
                    { id: "CTH-TEC-020", nombre: "PC06-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Sala de proyección | PC | Compumax | 1042-900-0072 | Windows 11 Pro | RAM: 8 GB | Resp: Carlos Giraldo | S/N: 300SN51686" },
                    { id: "CTH-TEC-021", nombre: "PC07-CTH Power Group", cantidad: 1, estado: "Bueno", fechaCompra: "2021-02-01", activoContable: "", activoNoContable: "", observaciones: "Bodega de Sistemas | PC | Power Group | Windows 10 Education | RAM: 8 GB | Resp: Area de sistemas | S/N: G9580FSLIMP12 19S08" },
                    { id: "CTH-TEC-022", nombre: "PC08-CTH Power Group RMA-COMP 01435", cantidad: 1, estado: "Bueno", fechaCompra: "2021-02-01", activoContable: "", activoNoContable: "", observaciones: "Oficina coordinador mantenimiento | PC | Power Group | RMA-COMP 01435 | Windows 11 education | RAM: 16 GB | Resp: Andres Felipe Betancur | S/N: G9580F2IMP1319M82" },
                    { id: "CTH-TEC-023", nombre: "PC09-CTH Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de Comunicaciones | PC | Compumax | 1042-900-0072 | Windows 11 Pro | RAM: 8 GB | Resp: Laura Lince | S/N: 300SN51682" },
                    { id: "CTH-TEC-024", nombre: "PC10-CTH Power Group RMA-COMP 01435", cantidad: 1, estado: "Bueno", fechaCompra: "2021-02-01", activoContable: "", activoNoContable: "", observaciones: "Enfermería | PC | Power Group | RMA-COMP 01435 | Windows 11 Education | RAM: 8 GB | Resp: Veronica Hoyos | S/N: G9580F2IMP1319M80" },
                    { id: "CTH-TEC-025", nombre: "Portatil01-CTH HP HP 245 G7", cantidad: 1, estado: "Bueno", fechaCompra: "2020-10-24", activoContable: "", activoNoContable: "", observaciones: "Oficina de Sistemas | Portatil | HP | HP 245 G7 | Windows 11 Education | RAM: 4 GB Tipo: DDR4 (SO-DIMM) Vel: 2666 MHz Canales usados:1 | Resp: Carlos Giraldo | S/N: 5CG03481QN" },
                    { id: "CTH-TEC-026", nombre: "Portatil02-CTH Lenovo 81YB", cantidad: 1, estado: "Bueno", fechaCompra: "2020-08-07", activoContable: "", activoNoContable: "", observaciones: "Oficina de Learning Center | Portatil | Lenovo | 81YB | Windows 11 Pro | RAM: 8 GB | Resp: Diana Marcela Montoya | S/N: PF1TTJ3Y" },
                    { id: "CTH-TEC-027", nombre: "Portatil03-CTH Lenovo 21E40023LM", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-26", activoContable: "", activoNoContable: "", observaciones: "Oficina Propuesta de valor | Portatil | Lenovo | 21E40023LM | Windows 11 Pro | RAM: 16 GB | Resp: Andrea Toledo | S/N: PF-4FM4CX" },
                    { id: "CTH-TEC-028", nombre: "Portatil04-CTH Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "O. Director Academico | Portatil | Dell | LATITUDE 3440 | Windows 11 Education | RAM: 16 GB | Resp: Jose Devis | S/N: 56FDC24" },
                    { id: "CTH-TEC-029", nombre: "Portatil05-CTH Lenovo L14 Gen 1", cantidad: 1, estado: "Bueno", fechaCompra: "2022-01-06", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | Portatil | Lenovo | L14 Gen 1 | Windows 11 Pro | RAM: 20 GB | Resp: Juan Camilo Ramírez | S/N: PF38TJF2" },
                    { id: "CTH-TEC-030", nombre: "Portatil06-CTH Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Oficina de Riesgos y Seguridad | Portatil | Dell | LATITUDE 3440 | Windows 11 Education | RAM: 16 GB | Resp: James Gonzalez | S/N: 8GHDC24" },
                    { id: "CTH-TEC-031", nombre: "Portatil08-CTH Lenovo E14 Gen 2", cantidad: 1, estado: "Bueno", fechaCompra: "2022-01-11", activoContable: "", activoNoContable: "", observaciones: "Oficina de Rectoria | Portatil | Lenovo | E14 Gen 2 | Windows 11 Pro | RAM: 8 GB | Resp: Nidia Londoño | S/N: PF-35VDDG" },
                    { id: "CTH-TEC-032", nombre: "Portatil10-CTH Lenovo 33014IGM", cantidad: 1, estado: "Bueno", fechaCompra: "2018-09-11", activoContable: "", activoNoContable: "", observaciones: "Oficina Gestion Humana | Portatil | Lenovo | 33014IGM | Windows 11 Education | RAM: 16 GB | Resp: Sandra Agudelo | S/N: PF15VRJM" },
                    { id: "CTH-TEC-033", nombre: "Portatil11-CTH Lenovo 81F4", cantidad: 1, estado: "Bueno", fechaCompra: "2018-09-30", activoContable: "", activoNoContable: "", observaciones: "Oficina analista de gestion humana | Portatil | Lenovo | 81F4 | Windows 11 Education | RAM: 8 GB | Resp: Laura Torres | S/N: YD05N2SR" },
                    { id: "CTH-TEC-034", nombre: "Portatil13-CTH Lenovo 82DQ", cantidad: 1, estado: "Bueno", fechaCompra: "2022-01-24", activoContable: "", activoNoContable: "", observaciones: "Oficina SST | Portatil | Lenovo | 82DQ | Windows 11 Pro | RAM: 8 GB | Resp: Sara Henao | S/N: PF39MXVW" },
                    { id: "CTH-TEC-035", nombre: "Portatil14-CTH Asus FX516P", cantidad: 1, estado: "Bueno", fechaCompra: "27/07/2023", activoContable: "", activoNoContable: "", observaciones: "Sala de sistemas | Portatil | Asus | FX516P | Windows 11 Education | RAM: 16 GB | Resp: Darwin Mercado | S/N: MCNRKD017346503" },
                    { id: "CTH-TEC-036", nombre: "Portatil15-CTH Lenovo S145-14", cantidad: 1, estado: "Bueno", fechaCompra: "2020-02-25", activoContable: "", activoNoContable: "", observaciones: "Transporte | Portatil | Lenovo | S145-14 | Windows 11 Pro | RAM: 12 GB | Resp: Camilo López | S/N: PF2181Q9" },
                    { id: "CTH-TEC-037", nombre: "Portatil16-CTH Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "O. Secretaría A | Portatil | Dell | LATITUDE 3440 | Windows 11 Education | RAM: 16 GB | Resp: Diana Restrepo | S/N: 4FDC24" },
                    { id: "CTH-TEC-038", nombre: "Ipad01-CTH Apple Ipad(Octava generacion)", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina de Sistemas | Ipad | Apple | Ipad(Octava generacion) | IpadOS 18.4.1 | RAM: 8 GB | Resp: Carlos Giraldo | S/N: DMPF10SHQ11GC" },
                    { id: "CTH-TEC-039", nombre: "All12-CTH Lenovo Lenovo C260", cantidad: 1, estado: "Bueno", fechaCompra: "2015-09-19", activoContable: "", activoNoContable: "", observaciones: "Bodega | Todo en uno | Lenovo | Lenovo C260 | Windows 10 Education | RAM: 4 GB | Resp: Camilo Gómez | S/N: CS02868546" }
                ]
            },
            {
                area: "SISTEMAS",
                codigoArea: "2800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-ROB-001", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LDPB | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-002", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEHB | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-003", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEEC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-004", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LBAM | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-005", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB93 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-006", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFD | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-007", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFM | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-008", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB8D | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-009", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21lLE4W | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-010", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEH1 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-011", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NA3A | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-012", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NA17 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-013", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L903 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-014", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21M9ZQ | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-015", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21MA1X | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-016", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21MQ01 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-017", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEDK | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-018", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L8YY | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-019", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB8J | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-020", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFW | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-021", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LSK0 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-022", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB6G | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-023", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L8YC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-024", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21N5QF | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-025", nombre: "Portatil Lenovo 81W6", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LDNC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-026", nombre: "Portatil Lenovo 81B0", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: MP1EGVMH | Windows 11 Education | RAM: 4 RAM | Disco: 220 GB SSD" },
                    { id: "CTH-ROB-027", nombre: "Portatil Lenovo 81B0", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-10", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: MP1EGVQN | Windows 11 Education | RAM: 4 RAM | Disco: 220 GB SSD" },
                    { id: "CTH-ROB-028", nombre: "2023-2024", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | | RAM:" },
                    { id: "CTH-ROB-029", nombre: "Dispositivo Marca Modelo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: serial | Sistema Operativo | RAM: RAM | Disco: Disco 1" },
                    { id: "CTH-ROB-030", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LDPB | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-031", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEHB | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-032", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEEC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-033", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LBAM | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-034", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB93 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-035", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFD | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-036", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFM | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-037", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB8D | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-038", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21lLE4W | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-039", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEH1 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-040", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NA3A | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-041", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NA17 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-042", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L903 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-043", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21M9ZQ | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-044", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21MA1X | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-045", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21MQ01 | Windows 11 Education | RAM: 4 RAM | Disco:" },
                    { id: "CTH-ROB-046", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEDK | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-047", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L8YY | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-048", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB8J | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-049", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21NEFW | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-050", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LSK0 | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-051", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LB6G | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-052", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21L8YC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-053", nombre: "Portatil Lenovo 81w6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21N5QF | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-054", nombre: "Portatil Lenovo 81W6", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: PF21LDNC | Windows 11 Education | RAM: 4 RAM | Disco: 120 GB SSD" },
                    { id: "CTH-ROB-055", nombre: "Portatil Lenovo 81B0", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: MP1EGVMH | Windows 11 Education | RAM: 4 RAM | Disco: 240 GB SSD" },
                    { id: "CTH-ROB-056", nombre: "Portatil Lenovo 81B0", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Robótica (424) | S/N: MP1EGVQN | Windows 11 Pro | RAM: 4 RAM | Disco: 240 GB SSD" }
                ]
            },
            {
                area: "SISTEMAS",
                codigoArea: "2900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-SS-001", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: DCCDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-002", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 2JHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-003", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: BJHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-004", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 50FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-005", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 7TBDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-006", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: F0FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-007", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: H2FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-008", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 1RKDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-009", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 46FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-010", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: BHHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-011", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 16FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-012", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 66FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-013", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 55FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-014", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 7RKDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-015", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 13FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-016", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 7GHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-017", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: C1FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-018", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: CJHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-019", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: GGHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-020", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: HRKDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-021", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: HSKDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-022", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 5HHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-023", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 36FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-024", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: F5FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-025", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 4HHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-026", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 95FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-027", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 1TBDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-028", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 56FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-029", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: J4FDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" },
                    { id: "CTH-SS-030", nombre: "Portatil Dell LATITUDE 3440", cantidad: 1, estado: "Bueno", fechaCompra: "2024-05-03", activoContable: "", activoNoContable: "", observaciones: "Sala de Sistemas (225) | S/N: 8GHDC24 | Windows 11 Education | RAM: 16 GB DDR4 Vel 3.200 MHz | SSD: 256 GB" }
                ]
            },
            {
                area: "IMPRESORAS SISTEMAS",
                codigoArea: "3000",
                responsable: "Oficina de sistemas",
                items: [
                    { id: "CTH-IMP-001", nombre: "Impresora HP Neverstop laser", cantidad: 1, estado: "Bueno", fechaCompra: "2021-04-28", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | S/N: CNBRNC55DV" },
                    { id: "CTH-IMP-002", nombre: "Impresora EPSON L3251", cantidad: 1, estado: "Bueno", fechaCompra: "Agosto/2024", activoContable: "", activoNoContable: "", observaciones: "Oficinas administrativas | S/N: XAH2202188 | Resp: Laura Torres" },
                    { id: "CTH-IMP-003", nombre: "Impresora EPSON L3110", cantidad: 1, estado: "Bueno", fechaCompra: "2022-09-01", activoContable: "", activoNoContable: "", observaciones: "Rectoria | S/N: X5DN171537 | Resp: Nidia Londoño" },
                    { id: "CTH-IMP-004", nombre: "Impresora EPSON L3260", cantidad: 1, estado: "Bueno", fechaCompra: "2022-06-01", activoContable: "", activoNoContable: "", observaciones: "Internacionalizaión | S/N: X8KL000694 | Resp: Corolina Lezer" },
                    { id: "CTH-IMP-005", nombre: "Impresora 3NSTAR LTT334", cantidad: 1, estado: "Bueno", fechaCompra: "20/01/2025", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | S/N: 00008532110051247611" },
                    { id: "CTH-IMP-006", nombre: "Impresora EPSON L380", cantidad: 1, estado: "Bueno", fechaCompra: "2018-04-01", activoContable: "", activoNoContable: "", observaciones: "O. Coordinacion de transporte | S/N: X34N518479 | Resp: Camilo Lopez" },
                    { id: "CTH-IMP-007", nombre: "Impresora EPSON L220", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "O. Tesoreria | S/N: VGNK382282 | Resp: Luz Dary Criollo" },
                    { id: "CTH-IMP-008", nombre: "Impresora EPSON L3110", cantidad: 1, estado: "Bueno", fechaCompra: "2022-09-01", activoContable: "", activoNoContable: "", observaciones: "Direccion administrativa y financiera | S/N: X5DN170759 | Resp: Andrea Toledo" },
                    { id: "CTH-IMP-009", nombre: "Impresora EPSON L380", cantidad: 1, estado: "Bueno", fechaCompra: "2018-04-01", activoContable: "", activoNoContable: "", observaciones: "O. Comunicaciones | S/N: X34N152964 | Resp: Laura Lince" },
                    { id: "CTH-IMP-010", nombre: "Impresora ZEBRA ZC300", cantidad: 1, estado: "Bueno", fechaCompra: "2025-03-06", activoContable: "", activoNoContable: "", observaciones: "O. Comunicaciones | S/N: ZC32-C3J251300097 | Resp: Felipe Gonzalez" },
                    { id: "CTH-IMP-011", nombre: "Impresora EPSON L8180", cantidad: 1, estado: "Bueno", fechaCompra: "2023-03-01", activoContable: "", activoNoContable: "", observaciones: "O. Comunicaciones | S/N: 000CQ00LA00 | Resp: Felipe Gonzalez" },
                    { id: "CTH-IMP-012", nombre: "Impresora EPSON L380", cantidad: 1, estado: "Bueno", fechaCompra: "2018-04-01", activoContable: "", activoNoContable: "", observaciones: "O. Coordinacion de primaria | S/N: X34N191694 | Resp: Olga L. Amar" },
                    { id: "CTH-IMP-013", nombre: "Impresora EPSON L3110", cantidad: 1, estado: "Bueno", fechaCompra: "2022-09-01", activoContable: "", activoNoContable: "", observaciones: "O. Gestion humana | S/N: X644027326 | Resp: Sandra Agudelo" },
                    { id: "CTH-IMP-014", nombre: "Impresora EPSON L3110", cantidad: 1, estado: "Bueno", fechaCompra: "2022-09-01", activoContable: "", activoNoContable: "", observaciones: "O. Coordinacion de bachillerato | S/N: X644002666 | Resp: Alexander Zuluaga" },
                    { id: "CTH-IMP-015", nombre: "Impresora EPSON L3210", cantidad: 1, estado: "Bueno", fechaCompra: "2023-04-01", activoContable: "", activoNoContable: "", observaciones: "O. Coordinacion de preescolar | S/N: XAGB021111 | Resp: Paola Cardona" },
                    { id: "CTH-IMP-016", nombre: "Impresora EPSON L3210", cantidad: 1, estado: "Bueno", fechaCompra: "2023-04-01", activoContable: "", activoNoContable: "", observaciones: "O. Psicologia de preescolar | S/N: XAGB020706 | Resp: Paula Andrea  Monsalve" },
                    { id: "CTH-IMP-017", nombre: "Impresora EPSON L3110", cantidad: 1, estado: "Bueno", fechaCompra: "2022-09-01", activoContable: "", activoNoContable: "", observaciones: "Recepción | S/N: X644159636 | Resp: Sonia Franco" },
                    { id: "CTH-IMP-018", nombre: "Impresora EPSON L220", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "Salon rojo-Hatikva | S/N: VHNK160306 | Resp: Said Hurtado" },
                    { id: "CTH-IMP-019", nombre: "Impresora EPSON L210", cantidad: 1, estado: "Bueno", fechaCompra: "2015-08-01", activoContable: "", activoNoContable: "", observaciones: "O. coordinación deportes | S/N: S25K178275 | Resp: Carlos Velásquez" },
                    { id: "CTH-IMP-020", nombre: "Impresora EPSON L380", cantidad: 1, estado: "Bueno", fechaCompra: "2018-04-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de secretaria academica | S/N: X34N197830 | Resp: Diana Yorley Restrepo" },
                    { id: "CTH-IMP-021", nombre: "Impresora EPSON L220", cantidad: 1, estado: "Bueno", fechaCompra: "2015-08-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | S/N: GNK382303" },
                    { id: "CTH-IMP-022", nombre: "Impresora EPSON L210", cantidad: 1, estado: "Bueno", fechaCompra: "2015-08-01", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | S/N: S25K139682" },
                    { id: "CTH-IMP-023", nombre: "Impresora EPSON L575", cantidad: 1, estado: "Bueno", fechaCompra: "2025-08-09", activoContable: "", activoNoContable: "", observaciones: "OFICINA CONTADORA | S/N: W98Y138173 | Resp: Paula Benitez" },
                    { id: "CTH-IMP-024", nombre: "Impresora Marca Modelo", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Ubicación | S/N: Serial | Resp: Responsable" },
                    { id: "CTH-IMP-025", nombre: "Impresora Epson L220", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salon de Musica Coliseo | S/N: VGNK382303 | Resp: Camilo correa" },
                    { id: "CTH-IMP-026", nombre: "Impresora Epson L220", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Coordinador de transporte | S/N: VGNK160306" },
                    { id: "CTH-IMP-027", nombre: "Impresora Epson L3110", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Secretaria UIB MEDELLIN | S/N: X644153876 | Resp: Paula Benitez" },
                    { id: "CTH-IMP-028", nombre: "Impresora Epson L5590", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "UIB MEDELLIN | S/N: XBBV027498 | Resp: Sandra Milena Zapata" },
                    { id: "CTH-IMP-029", nombre: "Impresora Epson LX350", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "UIB MEDELLIN | S/N: Q75Y112736 | Resp: Sandra Milena Zapata" },
                    { id: "CTH-IMP-030", nombre: "Impresora Epson LX350", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "UIB MEDELLIN | S/N: Q75Y094147" },
                    { id: "CTH-IMP-031", nombre: "Impresora Epson J382D", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "UIB MEDELLIN | S/N: X8QC00909" },
                    { id: "CTH-IMP-032", nombre: "Impresora Epson L210", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "UIB MEDELLIN | S/N: S25K194023 | Resp: Arie Eidelman" },
                    { id: "CTH-IMP-033", nombre: "Impresora Epson L3350", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "EL ENCUENTRO | S/N: X5DN171537 | Resp: Secretaria ENC" },
                    { id: "CTH-IMP-034", nombre: "Impresora Epson L3110", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "EL ENCUENTRO | S/N: X644005623 | Resp: Lina Ruiz" },
                    { id: "CTH-IMP-035", nombre: "Impresora Epson L220", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "EL ENCUENTRO | S/N: VGNK172748 | Resp: Profesoras" },
                    { id: "CTH-IMP-036", nombre: "Impresora Epson L3110", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "EL ENCUENTRO | S/N: X5DN171537 | Resp: Secretaria ENC" },
                    { id: "CTH-IMP-037", nombre: "Impresora SAMSUNG ML-1660", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "O. Sistemas | S/N: Z4VOBKCZ502885Z | Resp: no funcional" }
                ]
            },
            {
                area: "AULA MOVIL 1",
                codigoArea: "3100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3101", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "DCJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 1 | S/N: DCJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3102", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "7H9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 2 | S/N: 7H9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3103", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "CP9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 3 | S/N: CP9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3104", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "6N5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 4 | S/N: 6N5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3105", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "HN5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 5 | S/N: HN5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3106", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FQ9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 6 | S/N: FQ9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3107", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "2R5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 7 | S/N: 2R5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3108", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "8K9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 8 | S/N: 8K9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3109", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "1HJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 9 | S/N: 1HJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3110", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "6CJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 10 | S/N: 6CJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3111", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "3XMZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 11 | S/N: 3XMZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3112", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FP5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 12 | S/N: FP5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3113", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "7FJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 13 | S/N: 7FJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3114", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "DP5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 14 | S/N: DP5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3115", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "CT5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 15 | S/N: CT5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3116", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "9P9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 16 | S/N: 9P9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3117", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FQ5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 17 | S/N: FQ5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3118", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "CCJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 18 | S/N: CCJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3119", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "6F9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 19 | S/N: 6F9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3120", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FDJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 20 | S/N: FDJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3121", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "5P5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 21 | S/N: 5P5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3122", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "BL9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 22 | S/N: BL9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3123", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "8J9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 23 | S/N: 8J9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3124", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "HN5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 24 | S/N: HN5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3125", nombre: "CHROMEBOOK DELL 3101 2 EN 1", cantidad: 1, serial: "3M9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 25 | S/N: 3M9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3126", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FG9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 26 | S/N: FG9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3127", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "3T5ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 27 | S/N: 3T5ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3128", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "4L9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 28 | S/N: 4L9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3129", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "3HJZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 29 | S/N: 3HJZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3130", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "JK9ZZK3", estado: "Bueno", fechaCompra: "2022-01-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 01 | Sticker: CB 30 | S/N: JK9ZZK3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" }
                ]
            },
            {
                area: "AULA MOVIL 2",
                codigoArea: "3200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3201", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "8VYG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 1 | S/N: 8VYG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3202", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "9QLG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 2 | S/N: 9QLG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3203", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "3GWJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 3 | S/N: 3GWJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3204", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "BYXJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 4 | S/N: BYXJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3205", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "CR8H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 5 | S/N: CR8H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3206", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FPWY9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 6 | S/N: FPWY9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3207", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "4D7G9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 7 | S/N: 4D7G9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3208", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "79WJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 8 | S/N: 79WJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3209", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "H8KH9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 9 | S/N: H8KH9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3210", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "20YY9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 10 | S/N: 20YY9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3211", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "65ZG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 11 | S/N: 65ZG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3212", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "G4SF9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 12 | S/N: G4SF9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3213", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "24YY9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 13 | S/N: 24YY9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3214", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "FW6H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 14 | S/N: FW6H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3215", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "B7SF9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 15 | S/N: B7SF9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3216", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "J3ZG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 16 | S/N: J3ZG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3217", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "54SG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 17 | S/N: 54SG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3218", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "2S8H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 18 | S/N: 2S8H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3219", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "85SF9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 19 | S/N: 85SF9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3220", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "6YHJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 20 | S/N: 6YHJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3221", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "J7BJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 21 | S/N: J7BJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3222", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "J6FG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 22 | S/N: J6FG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3223", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "5B2H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 23 | S/N: 5B2H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3224", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "44BJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 24 | S/N: 44BJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3225", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "1YFJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 25 | S/N: 1YFJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3226", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "DZ6H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 26 | S/N: DZ6H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3227", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "9LTJ9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 27 | S/N: 9LTJ9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3228", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "C2ZG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 28 | S/N: C2ZG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3229", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "3XYG9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 29 | S/N: 3XYG9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3230", nombre: "CHROMEBOOK DELL 3100 2 EN 1", cantidad: 1, serial: "209H9C3", estado: "Bueno", fechaCompra: "2021-04-06", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 02 | Sticker: CB 30 | S/N: 209H9C3 | Procesador: INTEL CELERON | Velocidad: 2.8 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" }
                ]
            },
            {
                area: "AULA MOVIL 3",
                codigoArea: "3300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3301", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2BHL4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 01 | S/N: 2BHL4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3302", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "H0HK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 02 | S/N: H0HK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3303", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "JP5K4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 03 | S/N: JP5K4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3304", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "FYGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 04 | S/N: FYGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3305", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "J9CK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 05 | S/N: J9CK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3306", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "F7HL4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 06 | S/N: F7HL4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3307", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "CL9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 07 | S/N: CL9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3308", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "HSGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 08 | S/N: HSGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3309", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "CSDM4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 09 | S/N: CSDM4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3310", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "1Q9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 10 | S/N: 1Q9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3311", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "HQGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 11 | S/N: HQGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3312", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3G9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 12 | S/N: 3G9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3313", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "HXGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 13 | S/N: HXGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3314", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "DKNK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 14 | S/N: DKNK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3315", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2ZGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 15 | S/N: 2ZGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3316", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "1L9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 16 | S/N: 1L9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3317", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "1G1M4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 17 | S/N: 1G1M4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3318", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "9YGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 18 | S/N: 9YGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3319", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "25PL4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 19 | S/N: 25PL4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3320", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2TGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 20 | S/N: 2TGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3321", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "1YRM4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 21 | S/N: 1YRM4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3322", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "8J9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 22 | S/N: 8J9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3323", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "GDCK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 23 | S/N: GDCK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3324", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "CPNK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 24 | S/N: CPNK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3325", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3YGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 25 | S/N: 3YGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3326", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "DG9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 26 | S/N: DG9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3327", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3TGK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 27 | S/N: 3TGK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3328", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "J0HK4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 28 | S/N: J0HK4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3329", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "GP9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 29 | S/N: GP9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3330", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "8P9L4W3", estado: "Bueno", fechaCompra: "3 Marzo 2023", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 03 | Sticker: CB 30 | S/N: 8P9L4W3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" }
                ]
            },
            {
                area: "AULA MOVIL 4",
                codigoArea: "3400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3401", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "7398YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 1 | S/N: 7398YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3402", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2098YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 2 | S/N: 2098YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3403", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "4098YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 3 | S/N: 4098YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3404", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "9PM8YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 4 | S/N: 9PM8YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3405", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "7GJ8YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 5 | S/N: 7GJ8YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3406", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3198YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 6 | S/N: 3198YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3407", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "J7J8YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 7 | S/N: J7J8YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3408", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "8WZ8YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 8 | S/N: 8WZ8YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3409", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "HZ88YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 9 | S/N: HZ88YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3410", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "7M58YM3", estado: "Bueno", fechaCompra: "2023-06-23", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 10 | S/N: 7M58YM3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3411", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "6FNMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 11 | S/N: 6FNMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3412", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "6KTMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 12 | S/N: 6KTMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3413", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2LTMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 13 | S/N: 2LTMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3414", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "39NMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 14 | S/N: 39NMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3415", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3LTMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 15 | S/N: 3LTMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3416", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "J4NMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 16 | S/N: J4NMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3417", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "5STMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 17 | S/N: 5STMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3418", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "29NMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 18 | S/N: 29NMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3419", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "87PNPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 19 | S/N: 87PNPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3420", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "J8NMPZ3", estado: "Bueno", fechaCompra: "2023-11-01", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 20 | S/N: J8NMPZ3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3421", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "632WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 21 | S/N: 632WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3422", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "332WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 22 | S/N: 332WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3423", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "FK7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 23 | S/N: FK7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3424", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2C7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 24 | S/N: 2C7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3425", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "4J7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 25 | S/N: 4J7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3426", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "3L7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 26 | S/N: 3L7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3427", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "1L7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 27 | S/N: 1L7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3428", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "HK7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 28 | S/N: HK7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3429", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "8J7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 29 | S/N: 8J7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" },
                    { id: "CTH-3430", nombre: "CHROMEBOOK DELL 3110 2 EN 1", cantidad: 1, serial: "2L7WRW3", estado: "Bueno", fechaCompra: "2024-02-08", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 04 | Sticker: CB 30 | S/N: 2L7WRW3 | Procesador: INTEL CELERON | Velocidad: 1.10 GHz | RAM: DDR4 8GB | Disco: 32GB SSD" }
                ]
            },
            {
                area: "AULA MOVIL 5",
                codigoArea: "3500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-3501", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGHK", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 01 | S/N: PF56KGHK | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3502", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGKN", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 02 | S/N: PF56KGKN | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3503", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJRR", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 03 | S/N: PF56KJRR | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3504", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJQ3", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 04 | S/N: PF56KJQ3 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3505", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJTB", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 05 | S/N: PF56KJTB | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3506", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJT5", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 06 | S/N: PF56KJT5 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3507", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGK6", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 07 | S/N: PF56KGK6 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3508", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGFV", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 08 | S/N: PF56KGFV | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3509", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGGW", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 09 | S/N: PF56KGGW | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3510", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGHR", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 10 | S/N: PF56KGHR | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3511", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJSW", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 11 | S/N: PF56KJSW | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3512", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGJB", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 12 | S/N: PF56KGJB | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3513", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJSL", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 13 | S/N: PF56KJSL | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3514", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJQN", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 14 | S/N: PF56KJQN | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3515", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJS0", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 15 | S/N: PF56KJS0 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3516", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJRJ", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 16 | S/N: PF56KJRJ | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3517", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJQA", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 17 | S/N: PF56KJQA | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3518", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGG5", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 18 | S/N: PF56KGG5 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3519", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJS6", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 19 | S/N: PF56KJS6 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3520", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGKE", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 20 | S/N: PF56KGKE | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3521", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGJ5", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 21 | S/N: PF56KGJ5 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3522", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJQH", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 22 | S/N: PF56KJQH | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3523", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGGK", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 23 | S/N: PF56KGGK | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3524", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGH4", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 24 | S/N: PF56KGH4 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3525", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGKW", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 25 | S/N: PF56KGKW | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3526", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGJ0", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 26 | S/N: PF56KGJ0 | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3527", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGJZ", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 27 | S/N: PF56KGJZ | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3528", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KGJL", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 28 | S/N: PF56KGJL | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3529", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "PF56KJSD", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 29 | S/N: PF56KJSD | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" },
                    { id: "CTH-3530", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, serial: "FPS56KGHB", estado: "Bueno", fechaCompra: "2024-11-13", activoContable: "", activoNoContable: "", observaciones: "Aula Movil 05 | Sticker: CB 30 | S/N: FPS56KGHB | Procesador: Intel N100 | RAM: 8 GB | Disco: 64 GB EMMC" }
                ]
            },
            {
                area: "BIBLIOTECA",
                codigoArea: "3600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-CB-151", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 01 | S/N: PF5NYGSZ | Asignado: Biblioteca" },
                    { id: "CTH-CB-152", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 02 | S/N: PF5NYH1B | Asignado: Biblioteca" },
                    { id: "CTH-CB-153", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 03 | S/N: PF5NYQ5F | Asignado: Biblioteca" },
                    { id: "CTH-CB-154", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 04 | S/N: PF5NYH12 | Asignado: Biblioteca" },
                    { id: "CTH-CB-155", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 05 | S/N: PF5NYGZK | Asignado: Biblioteca" },
                    { id: "CTH-CB-156", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 06 | S/N: PF5NYGZC | Asignado: Biblioteca" },
                    { id: "CTH-CB-157", nombre: "CHROMEBOOK LENOVO Lenovo 500e yoga", cantidad: 1, estado: "Bueno", fechaCompra: "14/08/2025", activoContable: "", activoNoContable: "", observaciones: "Biblioteca | Sticker: CB 07 | S/N: PF5NYH00 | Asignado: Biblioteca" }
                ]
            },
            {
                area: "NU PREESCOLAR",
                codigoArea: "3700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-NUC-001", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 415 | S/N: G6AT235002EB | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-002", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 416 | S/N: G6AT235002GX | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-003", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 417 | S/N: G6AT2350008C | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-004", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 418 | S/N: G6AT30900BM2 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-005", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 419 | S/N: G6AT2260068N | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-006", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 420 | S/N: G6AT226006G5 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-007", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 421 | S/N: G6AT226006F7 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-008", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 422 | S/N: G6AT235001TZ | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" }
                ]
            },
            {
                area: "NU PRIMARIA",
                codigoArea: "3800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-NUC-009", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 101 | S/N: G6AT3200039U | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-010", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 103 | S/N: G6AT3200030C | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-011", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 104 | S/N: G6AT3200039T | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-012", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 105 | S/N: G6AT320002WB | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-013", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 106 | S/N: G6AT3200035U | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-014", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 108 | S/N: G6AT320002UQ | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-015", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 109 | S/N: G6AT320002VM | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-016", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 110 | S/N: G6AT3200033H | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-017", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 111 | S/N: G6AT2260067K | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-018", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-02-08", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 112 | S/N: G6AT2260068M | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" }
                ]
            },
            {
                area: "UN BACHILLERATO",
                codigoArea: "3900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-NUC-019", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 203 | S/N: G6AT320002X7 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-020", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 204 | S/N: G6AT320003A5 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-021", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 205 | S/N: G6AT3200033R | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-022", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 206 | S/N: G6AT320003GY | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-023", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 209 | S/N: G6AT320003GS | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-024", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 210 | S/N: G6AT320002Y7 | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-025", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 211 | S/N: G6AT3200032M | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-026", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 212 | S/N: G6AT320002YQ | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-027", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 213 | S/N: G6AT320002YU | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-028", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-12", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 215 | S/N: G6AT3200032D | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-029", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 216 | S/N: G6AT3200039K | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-030", nombre: "NUC Intel 9462NGW", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-13", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 217 | S/N: G6AT320002YD | Intel Celeron N5105 | RAM: 8 GB | Disco: 240 GB SSD" },
                    { id: "CTH-NUC-031", nombre: "NUC Asus NUC14MNK", cantidad: 1, estado: "Bueno", fechaCompra: "13/02/2026", activoContable: "", activoNoContable: "", observaciones: "Nomenclatura 201 | S/N: T8ARAC002060DJK | Intel (R) N97 | RAM: 8 GB | Disco: 256 GB SSD" }
                ]
            },
            {
                area: "COLISEO HATIKVAH",
                codigoArea: "4000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-PROY-001", nombre: "PROYECTOR EPSON POWERLITE L615U", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: X83B0800100 | HATIKVÁ" },
                    { id: "CTH-PROY-002", nombre: "PROYECTOR EPSON POWERLITE L615U", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: X83B0Y00180 | HATIKVÁ" },
                    { id: "CTH-PROY-003", nombre: "PROYECTOR EPSON POWERLITE L615U", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: X83B0800086 | HATIKVÁ" },
                    { id: "CTH-PROY-004", nombre: "PROYECTOR EPSON POWERLITE L615U", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: X5S6030083L | HATIKVÁ" },
                    { id: "CTH-PROY-005", nombre: "PROYECTOR EPSON PRO L1755UN NL", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: V11H892820 | HATIKVÁ" },
                    { id: "CTH-PROY-006", nombre: "LENTE ULTRA TIRO CORTO EPSON LENTE ULTRA TIRO CORTO", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: V12H004X02 | HATIKVÁ" }
                ]
            },
            {
                area: "BODEGA HATIKVAH",
                codigoArea: "4200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-PROY-007", nombre: "PROYECTOR ViewSonic V519578", cantidad: 1, estado: "Bueno", fechaCompra: "2025-05-06", activoContable: "", activoNoContable: "", observaciones: "BODEGA DE HATIKVÁ | S/N: XAX244801214" }
                ]
            },
            {
                area: "PREESCOLAR",
                codigoArea: "4300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-PROY-4300", nombre: "PROYECTOR NEC NP-P501X", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "PREESCOLAR" }
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
                    { id: "CTH-PROY-4500", nombre: "PROYECTOR NEC NP-P501X", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: 4Y00154FK | BACHILLERATRO" }
                ]
            },
            {
                area: "SALON ARTES",
                codigoArea: "4600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-PROY-4600", nombre: "EPSON", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "ARTE" }
                ]
            },
            {
                area: "Sexto Bet",
                codigoArea: "4700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-47001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-02", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVHB03912H | Loc: Sexto Bet (101)" }
                ]
            },
            {
                area: "Sexto Alef",
                codigoArea: "4800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-48001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVHB00355L | Loc: Sexto Alef (103)" }
                ]
            },
            {
                area: "Quinto Bet",
                codigoArea: "4900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-49001", nombre: "TV SAMSUNG UN55J5300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2018-03-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04BN3CAJ600492L | Loc: Quinto Bet (104)" }
                ]
            },
            {
                area: "Quinto Alef",
                codigoArea: "5000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-50001", nombre: "TV SAMSUNG UN58TU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-09-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 09PH3CRNA07333A | Loc: Quinto Alef (105)" }
                ]
            },
            {
                area: "Cuarto Bet",
                codigoArea: "5100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-51001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-04", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVH608501Y | Loc: Cuarto Bet (106)" }
                ]
            },
            {
                area: "Cuarto Alef",
                codigoArea: "5200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-52001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-03", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CXH702025X | Loc: Cuarto Alef (108)" }
                ]
            },
            {
                area: "Tercero Bet",
                codigoArea: "5300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-53001", nombre: "TV SAMSUNG", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVH605339N | Loc: Tercero Bet (109)" }
                ]
            },
            {
                area: "Tercero Alef",
                codigoArea: "5400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-54001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVHB00369H | Loc: Tercero Alef (110)" }
                ]
            },
            {
                area: "Segundo Bet",
                codigoArea: "5500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-55001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-02", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVH605354B | Loc: Segundo Bet (111)" }
                ]
            },
            {
                area: "Segundo Alef",
                codigoArea: "5600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-56001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVH605318Y | Loc: Segundo Alef (112)" }
                ]
            },
            {
                area: "Laboratorio de fisica",
                codigoArea: "5700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-57001", nombre: "TV SAMSUNG UN50BU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2022-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 0DFZ3CTT200212A | Nomenclatura: Laboratorio de fisica (114)" }
                ]
            },
            {
                area: "Laboratorio de biologia",
                codigoArea: "5800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-58001", nombre: "TV SAMSUNG UN50BU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2022-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 0DFZ3CTT200212A | Nomenclatura: Laboratorio de fisica (114)" }
                ]
            },
            {
                area: "Laboratorio de quimica",
                codigoArea: "5900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-59001", nombre: "TV SAMSUNG UN50BU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2022-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 0DFZ3CTT200212A | Nomenclatura: Laboratorio de fisica (114)" }
                ]
            },
            {
                area: "Laboratorio de quimica",
                codigoArea: "6000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-60001", nombre: "TV ONESCREEN T7-65", cantidad: 1, estado: "Bueno", fechaCompra: "21/05/2025", activoContable: "", activoNoContable: "", observaciones: "S/N: OS99T7240700415 | Nomenclatura: Cabaña de robotica (424)" }
                ]
            },
            {
                area: "Salon de musica",
                codigoArea: "6100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-61001", nombre: "TV SAMSUNG UN65CU7000K", cantidad: 1, estado: "Bueno", fechaCompra: "2024-02-10", activoContable: "", activoNoContable: "", observaciones: "S/N: 0F403CBW800389T | Nomenclatura: Salon de musica (117)" }
                ]
            },
            {
                area: "12 BET",
                codigoArea: "6200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-62001", nombre: "TV SAMSUNG UN58RU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-02-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 08LH3CUM303291N | Nomenclatura: 12 BET (203)" }
                ]
            },
            {
                area: "12 ALEF",
                codigoArea: "6300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-63001", nombre: "TV SAMSUNG UN58MU6120K", cantidad: 1, estado: "Bueno", fechaCompra: "2017-09-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 0723CSK405305P | Nomenclatura: 12 ALEF (204)" }
                ]
            },
            {
                area: "11 BET",
                codigoArea: "6400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-64001", nombre: "TV SAMSUNG UN55J63300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04BN3CYJ500560A | Nomenclatura: 11 BET (205)" }
                ]
            },
            {
                area: "11 ALEF",
                codigoArea: "6500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-65001", nombre: "TV SAMSUNG UN55J63300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04BN3CYJ501802F | Nomenclatura: 11 ALEF (206)" }
                ]
            },
            {
                area: "10 BET",
                codigoArea: "6600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-66001", nombre: "TV SAMSUNG UN58RU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-02-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 08LH3CUM504189R | Nomenclatura: 10 BET (209)" }
                ]
            },
            {
                area: "10 ALEF",
                codigoArea: "6700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-67001", nombre: "TV SAMSUNG UN46H5303AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-04-02", activoContable: "", activoNoContable: "", observaciones: "S/N: 02WP3CBF600641V | Nomenclatura: 10 ALEF (210)" }
                ]
            },
            {
                area: "9 BET",
                codigoArea: "6800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-68001", nombre: "TV SAMSUNG UN58MU6120K", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 07233CSK405301M | Nomenclatura: 9  BET (211)" }
                ]
            },
            {
                area: "9 ALEF",
                codigoArea: "6900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-69001", nombre: "TV SAMSUNG UN58RU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-02-02", activoContable: "", activoNoContable: "", observaciones: "S/N: 08LH3CUM503215B | Nomenclatura: 9 ALEF (212)" }
                ]
            },
            {
                area: "8 BET",
                codigoArea: "7000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-70001", nombre: "TV SAMSUNG UN65TU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-06-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 07BY3CBM201448B | Nomenclatura: 8 BET (213)" }
                ]
            },
            {
                area: "8 ALEF",
                codigoArea: "7100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-71001", nombre: "TV SAMSUNG UN65TU7000K", cantidad: 1, estado: "Bueno", fechaCompra: "29/12/2020", activoContable: "", activoNoContable: "", observaciones: "S/N: 09LT3CCN902632J | Nomenclatura: 8 ALEF (215)" }
                ]
            },
            {
                area: "7 BET",
                codigoArea: "7200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-72001", nombre: "TV SAMSUNG UN46H5303AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-04-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 02WP3CBF600488W | Nomenclatura: 7 BET (216)" }
                ]
            },
            {
                area: "7 ALEF",
                codigoArea: "7300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-73001", nombre: "TV SAMSUNG UN55J63300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 047A3CXGA01273Y | Nomenclatura: 7 ALEF (217)" }
                ]
            },
            {
                area: "Porteria",
                codigoArea: "7400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-74001", nombre: "TV SAMSUNG UN48J5200AK", cantidad: 1, estado: "Bueno", fechaCompra: "2019-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04PT3CVH605351Y | Nomenclatura: Porteria (100)" }
                ]
            },
            {
                area: "Aula taller",
                codigoArea: "7500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-75001", nombre: "TV SAMSUNG UN55J5300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2016-07-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 04BN3CYJ500567M | Nomenclatura: Aula taller (201)" }
                ]
            },
            {
                area: "Salon de religion",
                codigoArea: "7600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-76001", nombre: "TV SAMSUNG UN55AU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2022-03-03", activoContable: "", activoNoContable: "", observaciones: "S/N: OBVW3CTR500215T | Nomenclatura: Salon de religion (207)" }
                ]
            },
            {
                area: "Salón de arte",
                codigoArea: "7700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-77001", nombre: "TV SAMSUNG UN65CU7000K", cantidad: 1, estado: "Bueno", fechaCompra: "2024-02-10", activoContable: "", activoNoContable: "", observaciones: "S/N: 0F403CBW800392D | Nomenclatura: Salón de arte (218)" }
                ]
            },
            {
                area: "Sala de sistemas",
                codigoArea: "7800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-78001", nombre: "TV SAMSUNG UN65NU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 07BY3CBM201469N | Loc: Sala de sistemas (225)" }
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
                    { id: "CTH-80001", nombre: "TV SAMSUNG UN46H5303AK", cantidad: 1, estado: "Bueno", fechaCompra: "2017-04-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 02WP3CBF600466R | Nomenclatura: Biblioteca (226)" }
                ]
            },
            {
                area: "Rectoria",
                codigoArea: "8100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-81001", nombre: "TV SAMSUNG UN32T4300AK", cantidad: 1, estado: "Bueno", fechaCompra: "2021-06-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 09YW3CJT701461K | Loc: Rectoria (305)" }
                ]
            },
            {
                area: "Sinagoga",
                codigoArea: "8200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-82001", nombre: "TV SAMSUNG UN50AU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2022-03-03", activoContable: "", activoNoContable: "", observaciones: "S/N: 0BSY3CXRB08869F | Nomenclatura: Sinagoga (309)" }
                ]
            },
            {
                area: "Sala de juntas",
                codigoArea: "8300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-83001", nombre: "TV SAMSUNG UN65NU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 07BY3CBM201480J | Nomenclatura: Sala de juntas (318)" }
                ]
            },
            {
                area: "Hall",
                codigoArea: "8400",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-84001", nombre: "TV SAMSUNG UN65NU7100K", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 07BY3CBM201466E | Nomenclatura: Hall" }
                ]
            },
            {
                area: "Salon Kadima",
                codigoArea: "8500",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-85001", nombre: "TV SAMSUNG UN58TU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-04", activoContable: "", activoNoContable: "", observaciones: "S/N: 09PH3CRNB03075J | Nomenclatura: Salon Kadima (504)" }
                ]
            },
            {
                area: "Salon musica kadima",
                codigoArea: "8600",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-86001", nombre: "TV SAMSUNG UN60H6300A3", cantidad: 1, estado: "Bueno", fechaCompra: "2018-05-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 025H3CRFB000111D | Nomenclatura: Salon musica kadima (505)" }
                ]
            },
            {
                area: "Sala de proyección",
                codigoArea: "8700",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-87001", nombre: "TV LG 43UT640S0DA", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-02", activoContable: "", activoNoContable: "", observaciones: "S/N: 102MXHB1V457 | Nomenclatura: Sala de proyección (616)" }
                ]
            },
            {
                area: "Salon musica/Rojo",
                codigoArea: "8800",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-88001", nombre: "TV SAMSUNG UN65CU700k", cantidad: 1, estado: "Bueno", fechaCompra: "2024-02-10", activoContable: "", activoNoContable: "", observaciones: "S/N: 0F403CBW800390W | Loc: Salon musica/Rojo (620)" }
                ]
            },
            {
                area: "Salon musica/Amarillo",
                codigoArea: "8900",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-89001", nombre: "TV SAMSUNG UN58TU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-04", activoContable: "", activoNoContable: "", observaciones: "S/N: 09PH3CRN800151H | Loc: Salon musica/Amarillo (621)" }
                ]
            },
            {
                area: "Salon musica/Verde",
                codigoArea: "9000",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-90001", nombre: "TV SAMSUNG UN58TU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-03", activoContable: "", activoNoContable: "", observaciones: "S/N: 09PH3CUR100916P | Loc: Salon musica/Verde (622)" }
                ]
            },
            {
                area: "Salon de teatro",
                codigoArea: "9100",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-91001", nombre: "TV SAMSUNG UN65CU7000K", cantidad: 1, estado: "Bueno", fechaCompra: "2024-02-10", activoContable: "", activoNoContable: "", observaciones: "S/N: 0F403CBW800392D | Nomenclatura: Salón de arte (218)" }
                ]
            },
            {
                area: "Salon de danza",
                codigoArea: "9200",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-92001", nombre: "TV SAMSUNG UN58TU8000K", cantidad: 1, estado: "Bueno", fechaCompra: "2021-05-01", activoContable: "", activoNoContable: "", observaciones: "S/N: 09PH3CUR100795P | Nomenclatura: Salon de danza (624)" }
                ]
            },
            {
                area: "Bodega de mantenimiento",
                codigoArea: "9300",
                responsable: "Juan Camilo Ramírez",
                items: [
                    { id: "CTH-93001", nombre: "TV VIZIO VIZIOVW32LHDTV40A", cantidad: 1, estado: "Bueno", fechaCompra: "2018-02-01", activoContable: "", activoNoContable: "", observaciones: "S/N: LUPDJAJ5202452 | Nomenclatura: Bodega de mantenimiento" }
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
,
            {
                area: "UPS",
                codigoArea: "13000",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "CTH-UPS-001", nombre: "UPS NETION NETION TF750VA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack primaria | Código: UPS-OO1 | S/N: 202501082187.0" },
                    { id: "CTH-UPS-002", nombre: "UPS UNITEC JNP-U650 SERIES", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficinas administrativas en la fotocopiadora Konica | Código: UPS-OO2" },
                    { id: "CTH-UPS-003", nombre: "UPS STARTEC ST-U650LITE", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | Código: UPS-OO3 | S/N: 122302500491.0" },
                    { id: "CTH-UPS-004", nombre: "UPS NWE NL3000VA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Archivo | Código: UPS-004 | S/N: Se borró" },
                    { id: "CTH-UPS-005", nombre: "UPS NETION EA901ll", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Porteria | Código: UPS-005 | S/N: 900012401040324.0" },
                    { id: "CTH-UPS-006", nombre: "UPS NETION TF2200VA", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack sala de sistemas | Código: UPS-006 | S/N: 202501131283.0" },
                    { id: "CTH-UPS-007", nombre: "UPS MTEK JAL1102S", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack bachillerato | Código: UPS-007 | S/N: UI01242260168" },
                    { id: "CTH-UPS-008", nombre: "UPS CHICAGO DIGITAL POWER R-UPR508", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack Kadima | Código: UPS-008 | S/N: 700-0050050 C03" },
                    { id: "CTH-UPS-009", nombre: "UPS SMARTEK ST-U-3K", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack preescolar | Código: UPA-009 | S/N: 83311204100239.0" },
                    { id: "CTH-UPS-010", nombre: "UPS MTEK JAL1103S-220", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack Hatikva | Código: UPS-010 | S/N: 200821020013.0" },
                    { id: "CTH-UPS-011", nombre: "UPS MTEK JAL1110K", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Rack Hatikva | Código: UPS-011 | S/N: 210602090006.0" }
                ]
            }
,
            {
                area: "REGULADORES DE VOLTAJE",
                codigoArea: "13100",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "CTH-REG-001", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Preescolar K3 Bet" },
                    { id: "CTH-REG-002", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K3 Alef" },
                    { id: "CTH-REG-003", nombre: "Regulador Unitec", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K4 Bet" },
                    { id: "CTH-REG-004", nombre: "Regulador Unitec", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K4 Alef" },
                    { id: "CTH-REG-005", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K5 Bet" },
                    { id: "CTH-REG-006", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K5 Alef" },
                    { id: "CTH-REG-007", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "1 bet" },
                    { id: "CTH-REG-008", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "1 Alef" },
                    { id: "CTH-REG-009", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "robotica" },
                    { id: "CTH-REG-010", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón de Musica" },
                    { id: "CTH-REG-011", nombre: "Regulador de voltaje", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Learning center" }
                ]
            }
,
            {
                area: "TABLETS",
                codigoArea: "13200",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "CTH-TAB-001", nombre: "Tablet Lenovo 1-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZZXX | Tablet01@theodoro.edu.co" },
                    { id: "CTH-TAB-002", nombre: "Tablet Lenovo 2-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WWXNT | Tiene la pantalla reventada | Tablet02@theodoro.edu.co" },
                    { id: "CTH-TAB-003", nombre: "Tablet Lenovo 3-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZG4P | Tablet03@theodoro.edu.co" },
                    { id: "CTH-TAB-004", nombre: "Tablet Lenovo 4-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUP0A | Tablet04@theodoro.edu.co" },
                    { id: "CTH-TAB-005", nombre: "Tablet Lenovo 5-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WV26M | Tablet05@theodoro.edu.co" },
                    { id: "CTH-TAB-006", nombre: "Tablet Lenovo 6-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZA96 | Tablet06@theodoro.edu.co" },
                    { id: "CTH-TAB-007", nombre: "Tablet Lenovo 7-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUV4S | Tablet07@theodoro.edu.co" },
                    { id: "CTH-TAB-008", nombre: "Tablet Lenovo 8-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUTMA | Tablet08@theodoro.edu.co" },
                    { id: "CTH-TAB-009", nombre: "Tablet Lenovo 9-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZHJP | Mala de bateria | Tablet09@theodoro.edu.co" },
                    { id: "CTH-TAB-010", nombre: "Tablet Lenovo 10-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUV81 | Tablet10@theodoro.edu.co" },
                    { id: "CTH-TAB-011", nombre: "Tablet Lenovo 11-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZ75H | Tablet11@theodoro.edu.co" },
                    { id: "CTH-TAB-012", nombre: "Tablet Lenovo 12-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WYVPB | Tablet12@theodoro.edu.co" },
                    { id: "CTH-TAB-013", nombre: "Tablet Lenovo 13-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZ2E1 | Tablet13@theodoro.edu.co" },
                    { id: "CTH-TAB-014", nombre: "Tablet Lenovo 14-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WYVRK | Tablet14@theodoro.edu.co" },
                    { id: "CTH-TAB-015", nombre: "Tablet Lenovo 15-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZ77V | Tablet15@theodoro.edu.co" },
                    { id: "CTH-TAB-016", nombre: "Tablet Lenovo 16-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUNWS | Tablet16@theodoro.edu.co" },
                    { id: "CTH-TAB-017", nombre: "Tablet Lenovo 17-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZCN8 | Tablet17@theodoro.edu.co" },
                    { id: "CTH-TAB-018", nombre: "Tablet Lenovo 18-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUXNM | Tablet18@theodoro.edu.co" },
                    { id: "CTH-TAB-019", nombre: "Tablet Lenovo 19-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZCLQ | Tablet19@theodoro.edu.co" },
                    { id: "CTH-TAB-020", nombre: "Tablet Lenovo 20-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WWZDR | Se observa que la bateria se descarga muy raoido | Tablet20@theodoro.edu.co" },
                    { id: "CTH-TAB-021", nombre: "Tablet Lenovo 21-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WWXQG | Tablet21@theodoro.edu.co" },
                    { id: "CTH-TAB-022", nombre: "Tablet Lenovo 22-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HAOWUXPG | Mala de bateria" },
                    { id: "CTH-TAB-023", nombre: "Tablet Lenovo 23-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZRKP | Tablet23@theodoro.edu.co" },
                    { id: "CTH-TAB-024", nombre: "Tablet Lenovo 24-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUXQR | Tablet24@theodoro.edu.co" },
                    { id: "CTH-TAB-025", nombre: "Tablet Lenovo 25-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WWX8F | Tablet25@theodoro.edu.co" },
                    { id: "CTH-TAB-026", nombre: "Tablet Lenovo 26-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZZY5 | Tablet26@theodoro.edu.co" },
                    { id: "CTH-TAB-027", nombre: "Tablet Lenovo 27-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WWTAQ | Tablet27@theodoro.edu.co" },
                    { id: "CTH-TAB-028", nombre: "Tablet Lenovo 28-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZESG | Tablet28@theodoro.edu.co" },
                    { id: "CTH-TAB-029", nombre: "Tablet Lenovo 29-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WUZFT | Se dio de baja, Aseguradora respondio" },
                    { id: "CTH-TAB-030", nombre: "Tablet Lenovo 30-Lenovo TB-X304F", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "S/N: HA0WZCNF | Se dio de baja, Aseguradora respondio" }
                ]
            }
,
            {
                area: "ACCESS POINTS Y RED",
                codigoArea: "13300",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "CTH-RED-001", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Porteria (1) | IP: 172.29.76.55 | MAC: 94:BF:C4:17:24:E0 | Desc: Rack -Primaria puerto 3 CCR" },
                    { id: "CTH-RED-002", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Recepcion (2) | IP: 172.29.76.28 | MAC: 10:F0:68:30:EF:50 | Desc: N/A" },
                    { id: "CTH-RED-003", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sexto BET (3) | IP: 172.29.76.22 | MAC: C8:08:73:2C:22:F0 | Desc: Rack -Primer-Piso" },
                    { id: "CTH-RED-004", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sexto Alef (4) | IP: 172.29.76.23 | MAC: 10:F0:68:30:EB:80 | Desc: N/A" },
                    { id: "CTH-RED-005", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Quinto Alef (5) | IP: 172.29.76.24 | MAC: 20:58:69:11:1A:30 | Desc: Rack -Primer-Piso" },
                    { id: "CTH-RED-006", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cuarto Bet (6) | IP: 172.29.76.44 | MAC: 1C:3A:60:26:AC:40 | Desc: Colegio Theodoro H." },
                    { id: "CTH-RED-007", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cuarto Alef (7) | IP: 172.29.76.27 | MAC: 10:F0:68:30:C1:40 | Desc: N/A" },
                    { id: "CTH-RED-008", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala Profesores Primaria (8) | IP: 172.29.76.29 | MAC: 20:58:69:12:5D:40 | Desc: Rack -Primer-Piso" },
                    { id: "CTH-RED-009", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Tercero Alef (9) | IP: 172.29.76.26 | MAC: 10:F0:68:30:EF:B0 | Desc: N/A" },
                    { id: "CTH-RED-010", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Segundo Alef (10) | IP: 172.29.76.25 | MAC: 10:F0:68:31:35:00 | Desc: N/A" },
                    { id: "CTH-RED-011", nombre: "Switch/Rack R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Laboratorio biologia (11) | IP: 172.29.76.34 | MAC: 1C:3A:60:2D:6C:10 | Desc: Rack -Primer-Piso" },
                    { id: "CTH-RED-012", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Musica Primaria (12) | IP: 172.29.76.119 | MAC: 10:F0:68:2E:CB:60 | Desc: N/A" },
                    { id: "CTH-RED-013", nombre: "Switch/Rack R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Artes (13) | IP: 172.29.76.35 | MAC: 1C:3A:60:2D:53:D0 | Desc: Rack-2do-Piso" },
                    { id: "CTH-RED-014", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "10 Bet (14) | IP: 172.29.76.14 | MAC: 10:F0:68:30:C6:60 | Desc: N/A" },
                    { id: "CTH-RED-015", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Septimo Alef (15) | IP: 172.29.76.15 | MAC: 20:58:69:12:5D:50 | Desc: Rack-2do-Piso" },
                    { id: "CTH-RED-016", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "8  Bet (16) | IP: 172.29.76.16 | MAC: 10:F0:68:30:95:C0 | Desc: N/A" },
                    { id: "CTH-RED-017", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Octavo Alef (17) | IP: 172.29.76.17 | MAC: 10:F0:68:30:E6:F0 | Desc: N/A" },
                    { id: "CTH-RED-018", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala Profesores Bachillerato (18) | IP: 172.29.76.12 | MAC: 10:F0:68:30:F2:60 | Desc: N/A" },
                    { id: "CTH-RED-019", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala Sistemas (19) | IP: 172.29.76.11 | MAC: C8:08:73:2C:03:20 | Desc: CRS-Rack-Sistemas" },
                    { id: "CTH-RED-020", nombre: "Switch/Rack R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Auditorio bachillerato (20) | IP: 172.29.76.33 | MAC: 1C:3A:60:26:9F:30 | Desc: Rack -Primer-Piso" },
                    { id: "CTH-RED-021", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Aula de Religion (21) | IP: 172.29.76.18 | MAC: 10:F0:68:31:08:50 | Desc: N/A" },
                    { id: "CTH-RED-022", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Once Bet (22) | IP: 172.29.76.19 | MAC: 10:F0:68:30:C6:00 | Desc: N/A" },
                    { id: "CTH-RED-023", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Noveno Alef (23) | IP: 172.29.76.20 | MAC: 10:F0:68:30:EA:50 | Desc: N/A" },
                    { id: "CTH-RED-024", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina Sistemas de Informacion (24) | IP: 172.29.76.13 | MAC: 94:BF:C4:16:D8:70 | Desc: N/A" },
                    { id: "CTH-RED-025", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina Administrativa (25) | IP: 172.29.76.65 | MAC: 1C:3A:60:20:95:F0 | Desc: N/A" },
                    { id: "CTH-RED-026", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Pasillo Rectoria (26) | IP: 172.29.76.32 | MAC: 10:F0:68:30:F5:30 | Desc: N/A" },
                    { id: "CTH-RED-027", nombre: "Equipo de Red R600", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Molkale (27) | IP: 172.29.76.59 | MAC: F0:3E:90:35:88:20 | Desc: N/A" },
                    { id: "CTH-RED-028", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Restaurante (28) | IP: 172.29.76.40 | MAC: 1C:3A:60:26:F1:30 | Desc: N/A" },
                    { id: "CTH-RED-029", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana Robotica (29) | IP: 172.29.76.115 | MAC: 10:F0:68:2E:98:40 | Desc: N/A" },
                    { id: "CTH-RED-030", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana Learning center (30) | IP: 172.29.76.116 | MAC: 10:F0:68:2E:CB:10 | Desc: N/A" },
                    { id: "CTH-RED-031", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana primero Alef (31) | IP: 172.29.76.117 | MAC: 10:F0:68:2E:80:60 | Desc: N/A" },
                    { id: "CTH-RED-032", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana priemro Bet (32) | IP: 172.29.76.120 | MAC: 10:F0:68:2E:56:40 | Desc: N/A" },
                    { id: "CTH-RED-033", nombre: "Equipo de Red R600", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana K3-BET (33) | IP: 172.29.76.62 | MAC: F0:3E:90:35:45:C0 | Desc: N/A" },
                    { id: "CTH-RED-034", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana K4-BET (34) | IP: 172.29.76.38 | MAC: 1C:3A:60:26:7A:D0 | Desc:" },
                    { id: "CTH-RED-035", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabanas K5 Bet (35) | IP: 172.29.76.46 | MAC: 4C:B1:CD:01:68:00 | Desc: N/A" },
                    { id: "CTH-RED-036", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabana K5-ALEF (36) | IP: 172.29.76.42 | MAC: C8:08:73:2C:02:90 | Desc: N/A" },
                    { id: "CTH-RED-037", nombre: "Switch/Rack R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Auditorio Preescolar (37) | IP: 172.29.76.39 | MAC: 1C:3A:60:26:7A:50 | Desc: Rack-Preescolar" },
                    { id: "CTH-RED-038", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "pasillo coordinación (38) | IP: 172.29.76.36 | MAC: 10:F0:68:30:95:30 | Desc: N/A" },
                    { id: "CTH-RED-039", nombre: "Switch/Rack R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Cabaña Musica preescolar (39) | IP: 172.29.76.37 | MAC: 1C:3A:60:26:79:D0 | Desc: Rack-Preescolar" },
                    { id: "CTH-RED-040", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "AP Caseta (40) | IP: 172.29.76.45 | MAC: 94:BF:C4:16:D2:90 | Desc: N/A" },
                    { id: "CTH-RED-041", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Kadima chimenea (41) | IP: 172.29.76.57 | MAC: 1C:3A:60:26:7B:90 | Desc: N/A" },
                    { id: "CTH-RED-042", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Aula Taller  Kadima (42) | IP: 172.29.76.30 | MAC: C8:08:73:2C:42:E0 | Desc: Switche-Cabañas-MK" },
                    { id: "CTH-RED-043", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salon musica Kadima (43) | IP: 172.29.76.41 | MAC: 94:BF:C4:17:A4:80 | Desc: N/A" },
                    { id: "CTH-RED-044", nombre: "Equipo de Red T310C", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Terraza kadima (44) | IP: 172.29.76.58 | MAC: 4C:B1:CD:33:C6:20 | Desc: N/A" },
                    { id: "CTH-RED-045", nombre: "Switch/Rack H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Restaurante Coliseo (45) | IP: 172.29.76.21 | MAC: C8:08:73:2B:BC:10 | Desc: Rack-2do-Piso" },
                    { id: "CTH-RED-046", nombre: "Equipo de Red R600", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Hatikvá entrada principal (46) | IP: 172.29.76.61 | MAC: 24:79:2A:03:0D:30 | Desc: N/A" },
                    { id: "CTH-RED-047", nombre: "Equipo de Red R600", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Hatikvá  salida al restaurante (47) | IP: 172.29.76.60 | MAC: F0:3E:90:35:47:70 | Desc: Salida restaurante" },
                    { id: "CTH-RED-048", nombre: "Equipo de Red R600", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Hatikvá entreda a sala de proyección (48) | IP: 172.29.76.63 | MAC: F0:3E:90:35:4B:80 | Desc: Entrada sala proyeccion" },
                    { id: "CTH-RED-049", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina de comunicaciones (49) | IP: 172.29.76.122 | MAC: 10:F0:68:2E:7A:60 | Desc: N/A" },
                    { id: "CTH-RED-050", nombre: "Equipo de Red R310", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón Azul oscuro (50) | IP: 172.29.76.50 | MAC: 60:D0:2C:28:68:50 | Desc: N/A" },
                    { id: "CTH-RED-051", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón Azul claro (51) | IP: 172.29.76.51 | MAC: 4C:B1:CD:05:03:00 | Desc: N/A" },
                    { id: "CTH-RED-052", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón verde (52) | IP: 172.29.76.52 | MAC: 4C:B1:CD:01:5E:50 | Desc: N/A" },
                    { id: "CTH-RED-053", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón amarillo (53) | IP: 172.29.76.53 | MAC: 4C:B1:CD:04:BC:F0 | Desc: N/A" },
                    { id: "CTH-RED-054", nombre: "Equipo de Red R310", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salón Rojo (54) | IP: 172.29.76.54 | MAC: 60:D0:2C:2B:B7:D0 | Desc: N/A" },
                    { id: "CTH-RED-055", nombre: "Access Point R320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "K4 Alef (55) | IP: 172.29.76.64 | MAC: 10:F0:68:2E:83:D0 | Desc:" },
                    { id: "CTH-RED-056", nombre: "Access Point H320", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Salon Musica | IP: 172.29.76.31 | MAC: C8:08:73:2C:52:E0 | Desc: N/A" },
                    { id: "CTH-RED-057", nombre: "Equipo de Red", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "IP: Usuario y contraseña Rukus | MAC:  | Desc:" },
                    { id: "CTH-RED-058", nombre: "Equipo de Red", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "IP: https://179.50.16.155:8443/wsg/ | MAC:  | Desc:" },
                    { id: "CTH-RED-059", nombre: "Equipo de Red", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "IP: admin@theodoro | MAC:  | Desc:" },
                    { id: "CTH-RED-060", nombre: "Equipo de Red", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "IP: Th30dor0Admin21* | MAC:  | Desc:" }
                ]
            },
            {
                area: "COMUNICACIONES",
                codigoArea: "13500",
                responsable: "Felipe González",
                items: [
                    { id: "CTH-13507", nombre: "COMPUTADOR LG", cantidad: 1, serial: "181TPSL41990", estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 181TPSL41990", componentes: [] },
                    { id: "CTH-13515", nombre: "IMPRESORA EPSON L380", cantidad: 1, serial: "X34N152964", estado: "Bueno", fechaCompra: "2018-04-19", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: X34N152964", componentes: [] },
                    { id: "CTH-13506", nombre: "COMPUTADOR IMAC 24 PULGADAS M3", cantidad: 1, serial: "DF7F4WXF3G", estado: "Bueno", fechaCompra: "2024-05-30", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: DF7F4WXF3G", componentes: [] },
                    { id: "CTH-13502", nombre: "IMPRESORA ZEBRA ZC300 PARA CARNÉS", cantidad: 1, serial: "ZC32-C3J251300097", estado: "Bueno", fechaCompra: "2025-06-03", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: ZC32-C3J251300097", componentes: [] },
                    { id: "CTH-13503", nombre: "IMPRESORA EPSON L8180", cantidad: 1, serial: "000CQ00LA00", estado: "Bueno", fechaCompra: "2023-03-03", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 000CQ00LA00", componentes: [] },
                    { id: "CTH-13505", nombre: "COMPUTADOR IMAC 24 PULGADAS M1", cantidad: 1, serial: "C02J36N807GN", estado: "Bueno", fechaCompra: "2022-12-18", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: C02J36N807GN", componentes: [] },
                    { id: "CTH-13514", nombre: "UPS # 12", cantidad: 1, serial: "3C83331264", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 3C83331264", componentes: [] },
                    { id: "CTH-13509", nombre: "DJI MINI 4 PRO COMBO PLUS RC2", cantidad: 1, serial: "1581F629C248F0032D94", estado: "Bueno", fechaCompra: "2024-12-03", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 1581F629C248F0032D94", componentes: [] },
                    { id: "CTH-13516", nombre: "CAMARA CANON A2455", cantidad: 1, serial: "272158000763", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 272158000763", componentes: [] },
                    { id: "CTH-13517", nombre: "DJI MICROFONO INALÁMBRICO DIGITAL (2TX-1RX)", cantidad: 1, serial: "4VGZM1F0020G69", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones | S/N: 4VGZM1F0020G69", componentes: [] },
                    { id: "CTH-13519", nombre: "IPHONE 13", cantidad: 1, serial: "JTW9K7GXQ7", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "", observaciones: "Comunicaciones | S/N: JTW9K7GXQ7", componentes: [] },
                    { id: "CTH-13520", nombre: "MICROFONO VIDEOMIC PRO+", cantidad: 1, serial: "DU0211112", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "", observaciones: "Comunicaciones | S/N: DU0211112", componentes: [] },
                    { id: "CTH-13518", nombre: "KIT JUEGO DE LUCES GODOX", cantidad: 1, serial: "", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "", observaciones: "Comunicaciones", componentes: [] },
                    { id: "CTH-13508", nombre: "ESCRITORIO ADMINISTRATIVO TIPO L CON CAJONES", cantidad: 1, serial: "", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones", componentes: [] },
                    { id: "CTH-13510", nombre: "ESCRITORIO ADMINISTRATIVO TIPO L CON CAJONES", cantidad: 1, serial: "", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones", componentes: [] },
                    { id: "CTH-13511", nombre: "ESCRITORIO ADMINISTRATIVO SENCILLO CON CAJONES", cantidad: 1, serial: "", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones", componentes: [] },
                    { id: "CTH-13512", nombre: "MUEBLE DE ALMACENAMIENTO EN MADERA (6 DIVISIONES)", cantidad: 1, serial: "", estado: "Bueno", fechaCompra: "2024-11-05", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones", componentes: [] },
                    { id: "CTH-13513", nombre: "ARCHIVADORES DE PARED", cantidad: 2, serial: "", estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", responsable: "Laura Lince", observaciones: "Comunicaciones", componentes: [] }
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
                    { id: "ENC-204", nombre: "columpios para bebes", cantidad: 4, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
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
                    { id: "ENC-307", nombre: "Aparatos telefónicos", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-308", nombre: "Fotocopiadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-309", nombre: "Cámaras de seguridad", cantidad: 9, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-310", nombre: "Parlantes grandes con soporte", cantidad: 2, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-311", nombre: "Pantalla de proyección", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-312", nombre: "Equipo de calefacción", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-313", nombre: "Lavadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-314", nombre: "Secadora", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-315", nombre: "Walkie talkie", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "" },
                    { id: "ENC-TEC-001", nombre: "PC01-Encuentro Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | Compumax | 1042-900-0072 | Resp: Docentes | S/N: 300SN51681" },
                    { id: "ENC-TEC-002", nombre: "PC02-Encuentro Compumax 1042-900-0047", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | Compumax | 1042-900-0047 | Resp: Docentes | S/N: 500SN25655" },
                    { id: "ENC-TEC-003", nombre: "PC03-Encuentro Compumax 1042-900-0047", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | Compumax | 1042-900-0047 | Resp: Docentes | S/N: 500SN25656" },
                    { id: "ENC-TEC-004", nombre: "PC04-Encuentro Compumax 1042-900-0047", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | Compumax | 1042-900-0047 | Resp: Docentes | S/N: 500SN25642" },
                    { id: "ENC-TEC-005", nombre: "PC05-Encuentro Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-12", activoContable: "", activoNoContable: "", observaciones: "Recepción | PC | Compumax | 1042-900-0072 | Resp: Camila Arango | S/N: 300SN51680" },
                    { id: "ENC-TEC-006", nombre: "PC06-Encuentro Compumax 1042-900-0047", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-12", activoContable: "", activoNoContable: "", observaciones: "Comunicaciones | PC | Compumax | 1042-900-0047 | Resp: Catalina castaño | S/N: 500SN25658" },
                    { id: "ENC-TEC-007", nombre: "PC07-Encuentro Compumax 1042-900-0002", cantidad: 1, estado: "Bueno", fechaCompra: "2018-06-07", activoContable: "", activoNoContable: "", observaciones: "Dirección | PC | Compumax | 1042-900-0002 | Resp: Oficina-La Reserva | S/N: 200SN83894" },
                    { id: "ENC-TEC-008", nombre: "PC08-Encuentro Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2019-12-12", activoContable: "", activoNoContable: "", observaciones: "Dirección | PC | Compumax | 1042-900-0072 | Resp: Lina Ruiz | S/N: 300SN51685" },
                    { id: "ENC-TEC-009", nombre: "PC09-Encuentro Compumax 1042-900-0072", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Psicología | PC | Compumax | 1042-900-0072 | Resp: Paula Arango | S/N: 300SN51684" },
                    { id: "ENC-TEC-010", nombre: "Portátil02-ENCUENTRO HP HP 245 G7", cantidad: 1, estado: "Bueno", fechaCompra: "24/08/2020", activoContable: "", activoNoContable: "", observaciones: "Dirección | Portátil | HP | HP 245 G7 | Resp: Lina Ruiz | S/N: 5CG03438Q4" },
                    { id: "ENC-TEC-011", nombre: "PC01-Encuentro Compumax 1019-900-009", cantidad: 1, estado: "Bueno", fechaCompra: "2018-07-01", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | Compumax | 1019-900-009 | Resp: Docentes | S/N: 102SN18334" },
                    { id: "ENC-TEC-012", nombre: "PC02-Encuentro HG", cantidad: 1, estado: "Bueno", fechaCompra: "2016-04-03", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | HG | Resp: Docentes | S/N: 106048.0" },
                    { id: "ENC-TEC-013", nombre: "PC03-Encuentro ARGOM No se encuentra", cantidad: 1, estado: "Bueno", fechaCompra: "2017-08-06", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | ARGOM | No se encuentra | Resp: Docentes | S/N: 2M242L2998GX" },
                    { id: "ENC-TEC-014", nombre: "PC04-Encuentro HG No se encuentra", cantidad: 1, estado: "Bueno", fechaCompra: "2016-04-03", activoContable: "", activoNoContable: "", observaciones: "Sala de profesoras | PC | HG | No se encuentra | Resp: Docentes | S/N: 5036007002806.0" },
                    { id: "ENC-TEC-015", nombre: "Windows 11 PC Si", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Bodega de Sistemas | Area de sistemas | PC | Si | Resp: Completo" },
                    { id: "ENC-TEC-016", nombre: "Sin sistema PC No", cantidad: 1, estado: "Bueno", fechaCompra: "2018-02-01", activoContable: "", activoNoContable: "", observaciones: "Bodega de Sistemas | Area de sistemas | PC | No | Resp: Falta disco" },
                    { id: "ENC-TEC-017", nombre: "Windows 11 Pro PC No", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Bodega de Sistemas | Area de sistemas | PC | No | Resp: Falta fuente y disco" }
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
                area: "EQUIPOS DE CÓMPUTO",
                codigoArea: "100",
                responsable: "Carlos Giraldo",
                items: [
                    { id: "UIB-TEC-001", nombre: "All02-UIB LENOVO", cantidad: 1, estado: "Bueno", fechaCompra: "2018-07-06", activoContable: "", activoNoContable: "", observaciones: "Oficina - Piso 1 | Todo en 1 | LENOVO | Resp: Maria Stella Farberof | S/N: S1H05WTE" },
                    { id: "UIB-TEC-002", nombre: "All03-UIB LENOVO", cantidad: 1, estado: "Bueno", fechaCompra: "2018-03-13", activoContable: "", activoNoContable: "", observaciones: "Oficina/Casa | Todo en 1 | LENOVO | Resp: Luz Helena Restrepo | S/N: S1H05Q3D" },
                    { id: "UIB-TEC-003", nombre: "PC01-UIB COMPUMAX", cantidad: 1, estado: "Bueno", fechaCompra: "2020-04-01", activoContable: "", activoNoContable: "", observaciones: "Oficina/Gerencia | PC | COMPUMAX | Resp: Arie Eidelman | S/N: 300SSN51688" },
                    { id: "UIB-TEC-004", nombre: "Portatil01-UIB DELL INSPIRON 15 3000", cantidad: 1, estado: "Bueno", fechaCompra: "2022-05-03", activoContable: "", activoNoContable: "", observaciones: "Oficina | Portatil | DELL | INSPIRON 15 3000 | Resp: Melissa Cardona | S/N: 702RZK3" },
                    { id: "UIB-TEC-005", nombre: "Portatil02-UIB DELL INSPIRON 15 3000", cantidad: 1, estado: "Bueno", fechaCompra: "30/03/2022", activoContable: "", activoNoContable: "", observaciones: "Oficina analista Tesorería | Portatil | DELL | INSPIRON 15 3000 | Resp: Sandra Zapata | S/N: HK4K4L3" },
                    { id: "UIB-TEC-006", nombre: "Portatil03-UIB DELL iNSPIRON 15 3525", cantidad: 1, estado: "Bueno", fechaCompra: "27/07/2023", activoContable: "", activoNoContable: "", observaciones: "Oficina contadora | Portatil | DELL | iNSPIRON 15 3525 | Resp: Paula Benites | S/N: 7XM16W3" },
                    { id: "UIB-TEC-007", nombre: "All04-UIB LENOVO", cantidad: 1, estado: "Bueno", fechaCompra: "2023-11-22", activoContable: "", activoNoContable: "", observaciones: "Secretaria | Todo en 1 | LENOVO | Resp: Paula Benites | S/N: MP2DN020" },
                    { id: "UIB-TEC-008", nombre: "Portatil04-UIB ASUS", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina/Casa | Portatil | ASUS | Resp: Arie Eidelman" },
                    { id: "UIB-TEC-009", nombre: "Portatil05-UIB LENOVO", cantidad: 1, estado: "Bueno", fechaCompra: "2023-12-11", activoContable: "", activoNoContable: "", observaciones: "Oficina/Casa | Portatil | LENOVO | Resp: Arie Eidelman | S/N: PF4JG2VJ" },
                    { id: "UIB-TEC-010", nombre: "PC02-UIB COMPUMAX", cantidad: 1, estado: "Bueno", fechaCompra: "2017-10-11", activoContable: "", activoNoContable: "", observaciones: "Portería | PC | COMPUMAX | Resp: Edier Mesa | S/N: 2005N83392" },
                    { id: "UIB-TEC-011", nombre: "Windows 11 Pro Portatil Si", cantidad: 1, estado: "Bueno", fechaCompra: "2021-09-03", activoContable: "", activoNoContable: "", observaciones: "Oficina de sistemas | Arie Eidelman | Portatil | Si | Resp: Se uso en la UIB - Reemplazo Melissa | S/N: Portatil07-CTH" },
                    { id: "UIB-TEC-012", nombre: "Windows 11 Pro Portatil Si", cantidad: 1, estado: "Bueno", fechaCompra: "2023-09-26", activoContable: "", activoNoContable: "", observaciones: "OFICINA DE PROPUESTA Y VALOR | Andrea Toledo | Portatil | Si | Resp: Se utilizaba en  Gestión humana | S/N: Portatil09-CTH" },
                    { id: "UIB-TEC-013", nombre: "Windows 10 Pro Portatil Si", cantidad: 1, estado: "Bueno", fechaCompra: "2015-12-18", activoContable: "", activoNoContable: "", observaciones: "Auxiliar SST | Abraham Brejem 'Baby' | Portatil | Si | Resp: Lo utilizaba Deiler Andrés Gómez | S/N: Portatil12-CTH" },
                    { id: "UIB-TEC-014", nombre: "PC03-UIB Compumax", cantidad: 1, estado: "Bueno", fechaCompra: "", activoContable: "", activoNoContable: "", observaciones: "Oficina | PC | Compumax | S/N: 102SN29952" },
                    { id: "UIB-TEC-015", nombre: "All01-UIB LENOVO", cantidad: 1, estado: "Bueno", fechaCompra: "2018-07-06", activoContable: "", activoNoContable: "", observaciones: "Oficina | Todo en 1 | LENOVO | S/N: S1H05WSH" }
                ]
            },
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
    window._suppressInventorySnapshot = true;
    // Limpiar cualquier timeout previo de reset del flag
    if (window._suppressSnapTimeout) clearTimeout(window._suppressSnapTimeout);

    // ── Guardar cada sede como documento separado para evitar límite 1MB ──────
    const sedes = Object.keys(INVENTORY_DB);
    const batch = db.batch();
    sedes.forEach(sedeKey => {
        const docRef = db.collection('config').doc(`inventory_${sedeKey}`);
        batch.set(docRef, { sedeKey, data: INVENTORY_DB[sedeKey], version: INVENTORY_DATA_VERSION });
    });
    batch.commit()
        .then(() => {
            console.log('✅ Inventario guardado en Firestore (por sede)');
            // Esperar 3s para asegurarse de que el onSnapshot ya se disparó y procesó
            // antes de permitir re-renders por cambios externos
            window._suppressSnapTimeout = setTimeout(() => {
                window._suppressInventorySnapshot = false;
                window._suppressSnapTimeout = null;
            }, 3000);
        })
        .catch(err => {
            window._suppressInventorySnapshot = false;
            if (window._suppressSnapTimeout) clearTimeout(window._suppressSnapTimeout);
            console.error('Error guardando inventario:', err);
        });
}

let _inventoryUnsubscribe = null;

function loadInventoryFromFirestore() {
    // Cancelar listeners previos si existen
    if (_inventoryUnsubscribe) {
        if (typeof _inventoryUnsubscribe === 'function') _inventoryUnsubscribe();
        else if (Array.isArray(_inventoryUnsubscribe)) _inventoryUnsubscribe.forEach(u => u && u());
        _inventoryUnsubscribe = null;
    }

    window._suppressInventorySnapshot = false;

    // ── Migración one-time: doc viejo "config/inventory" → docs por sede ──────
    db.collection('config').doc('inventory').get().then(oldSnap => {
        if (oldSnap.exists && oldSnap.data() && oldSnap.data().data) {
            console.log('🔄 Migrando inventario al nuevo esquema por sede…');
            const oldData = oldSnap.data().data;
            const batch = db.batch();
            Object.keys(oldData).forEach(sk => {
                batch.set(db.collection('config').doc(`inventory_${sk}`), { sedeKey: sk, data: oldData[sk] });
            });
            // Borrar el doc viejo para no migrar de nuevo
            batch.delete(db.collection('config').doc('inventory'));
            batch.commit()
                .then(() => console.log('✅ Migración al esquema por sede completada'))
                .catch(err => console.error('Error en migración:', err));
        }
    }).catch(() => {}); // Si no existe o no hay permisos, ignorar

    // ── Suscribirse a cada documento de sede ──────────────────────────────────
    const sedesEsperadas = Object.keys(INVENTORY_DB);
    let _firstLoadCount = sedesEsperadas.length;
    const unsubscribers = [];

    sedesEsperadas.forEach(sedeKey => {
        let _firstLoad = true;
        const unsub = db.collection('config').doc(`inventory_${sedeKey}`).onSnapshot((snap) => {
            try {
                if (snap.exists && snap.data() && snap.data().data) {
                    // Firestore siempre es la fuente de verdad — nunca sobreescribir con seed local
                    INVENTORY_DB[sedeKey] = snap.data().data;

                    if (_firstLoad) {
                        _firstLoad = false;
                        _firstLoadCount--;
                        console.log(`☁️ Sede ${sedeKey} cargada desde Firestore`);

                        // Marcar que el inventario ya vino de Firestore (no datos hardcoded)
                        if (_firstLoadCount === 0) {
                            window._inventoryLoadedFromFirestore = true;
                            // ── Guard de versión: no repetir migraciones ya aplicadas ──────────
                            const MIGRATION_VERSION = 22; // incrementar si se añaden nuevas migraciones
                            const appliedVersion = parseInt(localStorage.getItem('cth_inv_migration_v') || '0');
                            if (appliedVersion < MIGRATION_VERSION) {
                                console.log(`🔧 Aplicando migraciones (v${appliedVersion} → v${MIGRATION_VERSION})…`);
                                migrateLibraryAreas();
                                migrateLibraryItemIds();
                                migrateFechaCompraFromObservaciones();
                                migrateMaritzaFechas();
                                migrateAreaCodesAndItemIds();
                                migrateAulasMovilesIndividual();
                                migrateAulasMovilesIds();
                                migrateFixAlaMovil4();
                                migrateAddComunicaciones();
                                migrateRoboticaItems();
                                migrateSalaSistemasSerials();
                                migrateNombresToUpperCase();
                                migrateAulasMovilesSerials();
                                localStorage.setItem('cth_inv_migration_v', String(MIGRATION_VERSION));
                            } else {
                                console.log(`✅ Migraciones ya aplicadas (v${MIGRATION_VERSION}), omitiendo.`);
                            }
                            // ── Siempre verificar seriales de Aulas Móviles (sin guard) ──────
                            ensureAulasMovilesSerials();
                        }
                    } else {
                        console.log(`🔄 Sede ${sedeKey} actualizada en tiempo real`);
                    }

                    localStorage.setItem('cth_inventory', JSON.stringify(INVENTORY_DB));

                    // Refrescar vista si el cambio NO es local
                    if (!window._suppressInventorySnapshot && typeof APP_STATE !== 'undefined' && APP_STATE.currentView === 'inventory') {
                        if (typeof renderView === 'function') {
                            requestAnimationFrame(() => renderView('inventory'));
                        }
                    }
                    // NO resetear _suppressInventorySnapshot aquí — lo gestiona el timeout en saveInventoryToDB

                } else if (_firstLoad) {
                    _firstLoad = false;
                    _firstLoadCount--;
                    // Documento de esta sede no existe aún → crearlo
                    if (_firstLoadCount === 0) {
                        saveInventoryToDB();
                    }
                }
            } catch (err) {
                console.warn(`⚠️ Error procesando snapshot de inventario (${sedeKey}):`, err);
            }
        }, (err) => {
            console.warn(`⚠️ Error en listener de inventario (${sedeKey}):`, err);
        });
        unsubscribers.push(unsub);
    });

    _inventoryUnsubscribe = unsubscribers;
}

// ─── Migración v6: Convertir ítems consolidados de Aulas Móviles en ítems individuales ───
function migrateAulasMovilesIndividual() {
    const AULAS = {
        'AULA MOVIL 1': {
            nombre: 'CHROMEBOOK DELL 3100 2 EN 1', fechaCompra: '2022-01-13', proveedor: 'NOVOTECHNO',
            seriales: ['DCJZZK3','7H9ZZK3','CP9ZZK3','6N5ZZK3','HN5ZZK3','FQ9ZZK3','2R5ZZK3','8K9ZZK3','1HJZZK3','6CJZZK3','3XMZZK3','FP5ZZK3','7FJZZK3','DP5ZZK3','CT5ZZK3','9P9ZZK3','FQ5ZZK3','CCJZZK3','6F9ZZK3','FDJZZK3','5P5ZZK3','BL9ZZK3','8J9ZZK3','HN5ZZK3','3M9ZZK3','FG9ZZK3','3T5ZZK3','4L9ZZK3','3HJZZK3','JK9ZZK3']
        },
        'AULA MOVIL 2': {
            nombre: 'CHROMEBOOK DELL 3100 2 EN 1', fechaCompra: '2021-04-06', proveedor: 'DELL',
            seriales: ['8VYG9C3','9QLG9C3','3GWJ9C3','BYXJ9C3','CR8H9C3','FPWY9C3','4D7G9C3','79WJ9C3','H8KH9C3','20YY9C3','65ZG9C3','G4SF9C3','24YY9C3','FW6H9C3','B7SF9C3','J3ZG9C3','54SG9C3','2S8H9C3','85SF9C3','6YHJ9C3','J7BJ9C3','J6FG9C3','5B2H9C3','44BJ9C3','1YFJ9C3','DZ6H9C3','9LTJ9C3','C2ZG9C3','3XYG9C3','209H9C3']
        },
        'AULA MOVIL 3': {
            nombre: 'CHROMEBOOK DELL 3110 2 EN 1', fechaCompra: '2023-03-03', proveedor: 'NOVOTECHNO',
            seriales: ['2BHL4W3','H0HK4W3','JP5K4W3','FYGK4W3','J9CK4W3','F7HL4W3','CL9L4W3','HSGK4W3','CSDM4W3','1Q9L4W3','HQGK4W3','3G9L4W3','HXGK4W3','DKNK4W3','2ZGK4W3','1L9L4W3','1G1M4W3','9YGK4W3','25PL4W3','2TGK4W3','1YRM4W3','8J9L4W3','GDCK4W3','CPNK4W3','3YGK4W3','DG9L4W3','3TGK4W3','J0HK4W3','GP9L4W3','8P9L4W3']
        },
        'AULA MOVIL 4': {
            nombre: 'CHROMEBOOK DELL 3110 2 EN 1', fechaCompra: '2023-06-23', proveedor: 'NOVOTECHNO',
            seriales: ['7398YM3','2098YM3','4098YM3','9PM8YM3','7GJ8YM3','3198YM3','J7J8YM3','8WZ8YM3','HZ88YM3','7M58YM3','6FNMPZ3','6KTMPZ3','2LTMPZ3','39NMPZ3','3LTMPZ3','J4NMPZ3','5STMPZ3','29NMPZ3','87PNPZ3','J8NMPZ3','632WRW3','332WRW3','FK7WRW3','2C7WRW3','4J7WRW3','3L7WRW3','1L7WRW3','HK7WRW3','8J7WRW3','2L7WRW3']
        },
        'AULA MOVIL 5': {
            nombre: 'CHROMEBOOK LENOVO 500E YOGA', fechaCompra: '2024-11-13', proveedor: 'ASERTIVA DIGITAL',
            seriales: ['PF56KGHK','PF56KGKN','PF56KJRR','PF56KJQ3','PF56KJTB','PF56KJT5','PF56KGK6','PF56KGFV','PF56KGGW','PF56KGHR','PF56KJSW','PF56KGJB','PF56KJSL','PF56KJQN','PF56KJS0','PF56KJRJ','PF56KJQA','PF56KGG5','PF56KJS6','PF56KGKE','PF56KGJ5','PF56KJQH','PF56KGGK','PF56KGH4','PF56KGKW','PF56KGJ0','PF56KGJZ','PF56KGJL','PF56KJSD','FPS56KGHB']
        }
    };

    let changed = false;

    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        if (!sede || !sede.inventario) return;
        sede.inventario.forEach(area => {
            const aulaData = AULAS[area.area];
            if (!aulaData) return;
            const consolidado = area.items.find(it => it.cantidad >= 20);
            if (!consolidado) return;
            console.log(`🔄 Migrando ${area.area}: convirtiendo ítem consolidado en 30 individuales…`);
            const responsable = consolidado.responsable || area.responsable || 'Juan Camilo Ramírez';
            const prefix = consolidado.id.replace(/\d+$/, '');
            const baseNum = parseInt(consolidado.id.match(/(\d+)$/)?.[1] || '3101');
            area.items = aulaData.seriales.map((serial, i) => ({
                id: `${prefix}${baseNum + i}`,
                nombre: aulaData.nombre,
                cantidad: 1,
                estado: 'Bueno',
                serial: serial,
                seriales: [serial],
                serialesEstado: ['Bueno'],
                fechaCompra: aulaData.fechaCompra,
                activoContable: consolidado.activoContable || '',
                activoNoContable: consolidado.activoNoContable || '',
                responsable: responsable,
                observaciones: `${area.area} | Sticker: CB ${String(i + 1).padStart(2, '0')} | S/N: ${serial} | Proveedor: ${aulaData.proveedor}`,
                componentes: [],
                historial: []
            }));
            changed = true;
        });
    });

    if (changed) {
        saveInventoryToDB();
        console.log('✅ Migración Aulas Móviles completada — 150 chromebooks registrados individualmente');
    }
}

// ─── Migración v8: Renombrar IDs CTH-CB-xxx → CTH-{codigoArea+N} en Aulas Móviles ───
function migrateAulasMovilesIds() {
    let changed = false;
    const TABS = ['inventario', 'depuracion', 'adiciones'];
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        if (!sede) return;
        TABS.forEach(tab => {
            if (!sede[tab]) return;
            sede[tab].forEach(area => {
                if (!/^AULA MOVIL \d+$/i.test(area.area)) return;
                if (!area.codigoArea) return;
                const baseCode = parseInt(area.codigoArea);
                const prefix = sedeKey.toUpperCase();
                const hasOldIds = area.items.some(it => /^CTH-CB-\d+$/i.test(it.id));
                if (!hasOldIds) return;
                console.log(`🔧 Renombrando IDs en ${area.area} (codigoArea: ${area.codigoArea})…`);
                area.items.forEach((it, i) => {
                    if (/^CTH-CB-\d+$/i.test(it.id)) {
                        const newId = `${prefix}-${baseCode + i + 1}`;
                        console.log(`  ${it.id} → ${newId}`);
                        it.id = newId;
                        changed = true;
                    }
                });
            });
        });
    });
    if (changed) {
        saveInventoryToDB();
        console.log('✅ Migración IDs Aulas Móviles completada — CTH-CB-xxx → CTH-{código+N}');
    }
}

// ─── Migración v10a: Corregir "ALA MOVIL 4" → "AULA MOVIL 4" ───
function migrateFixAlaMovil4() {
    let changed = false;
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        if (!sede) return;
        ['inventario', 'depuracion', 'adiciones'].forEach(tab => {
            (sede[tab] || []).forEach(area => {
                if (area.area === 'ALA MOVIL 4') {
                    area.area = 'AULA MOVIL 4';
                    changed = true;
                    console.log('🔧 Corregido: ALA MOVIL 4 → AULA MOVIL 4');
                }
            });
        });
    });
    if (changed) saveInventoryToDB();
}

// ─── Migración v10b: Agregar área COMUNICACIONES si no existe ───
function migrateAddComunicaciones() {
    const sede = INVENTORY_DB['CTH'];
    if (!sede || !sede.inventario) return;
    const ya = sede.inventario.find(a => a.area === 'COMUNICACIONES');
    if (ya) return;
    console.log('🔧 Agregando área COMUNICACIONES a CTH…');
    sede.inventario.push({
        area: 'COMUNICACIONES',
        codigoArea: '13500',
        responsable: 'Felipe González',
        items: [
            { id: 'CTH-13507', nombre: 'COMPUTADOR LG', cantidad: 1, serial: '181TPSL41990', estado: 'Bueno', fechaCompra: '2020-04-01', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 181TPSL41990', componentes: [] },
            { id: 'CTH-13515', nombre: 'IMPRESORA EPSON L380', cantidad: 1, serial: 'X34N152964', estado: 'Bueno', fechaCompra: '2018-04-19', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: X34N152964', componentes: [] },
            { id: 'CTH-13506', nombre: 'COMPUTADOR IMAC 24 PULGADAS M3', cantidad: 1, serial: 'DF7F4WXF3G', estado: 'Bueno', fechaCompra: '2024-05-30', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: DF7F4WXF3G', componentes: [] },
            { id: 'CTH-13502', nombre: 'IMPRESORA ZEBRA ZC300 PARA CARNÉS', cantidad: 1, serial: 'ZC32-C3J251300097', estado: 'Bueno', fechaCompra: '2025-06-03', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: ZC32-C3J251300097', componentes: [] },
            { id: 'CTH-13503', nombre: 'IMPRESORA EPSON L8180', cantidad: 1, serial: '000CQ00LA00', estado: 'Bueno', fechaCompra: '2023-03-03', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 000CQ00LA00', componentes: [] },
            { id: 'CTH-13505', nombre: 'COMPUTADOR IMAC 24 PULGADAS M1', cantidad: 1, serial: 'C02J36N807GN', estado: 'Bueno', fechaCompra: '2022-12-18', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: C02J36N807GN', componentes: [] },
            { id: 'CTH-13514', nombre: 'UPS # 12', cantidad: 1, serial: '3C83331264', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 3C83331264', componentes: [] },
            { id: 'CTH-13509', nombre: 'DJI MINI 4 PRO COMBO PLUS RC2', cantidad: 1, serial: '1581F629C248F0032D94', estado: 'Bueno', fechaCompra: '2024-12-03', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 1581F629C248F0032D94', componentes: [] },
            { id: 'CTH-13516', nombre: 'CAMARA CANON A2455', cantidad: 1, serial: '272158000763', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 272158000763', componentes: [] },
            { id: 'CTH-13517', nombre: 'DJI MICROFONO INALÁMBRICO DIGITAL (2TX-1RX)', cantidad: 1, serial: '4VGZM1F0020G69', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones | S/N: 4VGZM1F0020G69', componentes: [] },
            { id: 'CTH-13519', nombre: 'IPHONE 13', cantidad: 1, serial: 'JTW9K7GXQ7', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: '', observaciones: 'Comunicaciones | S/N: JTW9K7GXQ7', componentes: [] },
            { id: 'CTH-13520', nombre: 'MICROFONO VIDEOMIC PRO+', cantidad: 1, serial: 'DU0211112', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: '', observaciones: 'Comunicaciones | S/N: DU0211112', componentes: [] },
            { id: 'CTH-13518', nombre: 'KIT JUEGO DE LUCES GODOX', cantidad: 1, serial: '', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: '', observaciones: 'Comunicaciones', componentes: [] },
            { id: 'CTH-13508', nombre: 'ESCRITORIO ADMINISTRATIVO TIPO L CON CAJONES', cantidad: 1, serial: '', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones', componentes: [] },
            { id: 'CTH-13510', nombre: 'ESCRITORIO ADMINISTRATIVO TIPO L CON CAJONES', cantidad: 1, serial: '', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones', componentes: [] },
            { id: 'CTH-13511', nombre: 'ESCRITORIO ADMINISTRATIVO SENCILLO CON CAJONES', cantidad: 1, serial: '', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones', componentes: [] },
            { id: 'CTH-13512', nombre: 'MUEBLE DE ALMACENAMIENTO EN MADERA (6 DIVISIONES)', cantidad: 1, serial: '', estado: 'Bueno', fechaCompra: '2024-11-05', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones', componentes: [] },
            { id: 'CTH-13513', nombre: 'ARCHIVADORES DE PARED', cantidad: 2, serial: '', estado: 'Bueno', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: 'Laura Lince', observaciones: 'Comunicaciones', componentes: [] }
        ]
    });
    saveInventoryToDB();
    console.log('✅ Área COMUNICACIONES agregada a CTH');
}

// ─── Migración v13: Convertir todos los nombres de ítems a mayúsculas ─────────
function migrateNombresToUpperCase() {
    let changed = 0;
    const TABS = ['inventario', 'depuracion', 'adiciones'];
    Object.values(INVENTORY_DB).forEach(sede => {
        TABS.forEach(tab => {
            if (!sede[tab]) return;
            sede[tab].forEach(area => {
                (area.items || []).forEach(it => {
                    if (it.nombre && it.nombre !== it.nombre.toUpperCase()) {
                        it.nombre = it.nombre.toUpperCase();
                        changed++;
                    }
                });
            });
        });
    });
    if (changed > 0) {
        console.log(`✅ ${changed} nombres de ítems convertidos a mayúsculas`);
        // Reintentar hasta que Firestore esté listo
        const _trySave = (intentos) => {
            if (typeof APP_STATE !== 'undefined' && APP_STATE.firestoreReady) {
                saveInventory();
            } else if (intentos > 0) {
                setTimeout(() => _trySave(intentos - 1), 2000);
            }
        };
        setTimeout(() => _trySave(10), 1000);
    }
}

// ─── Migración v12: Poblar campo serial en Sala de Sistemas (2900) ────────────
function migrateSalaSistemasSerials() {
    const sede = INVENTORY_DB['CTH'];
    if (!sede || !sede.inventario) return;
    const area = sede.inventario.find(a => a.codigoArea === '2900');
    if (!area) return;

    // Mapa directo serial por ID (tanto nombre antiguo CTH-SS-XXX como nuevo CTH-29XX)
    const serialMap = {
        'CTH-SS-001': 'DCCDC24',  'CTH-2901': 'DCCDC24',
        'CTH-SS-002': '2JHDC24',  'CTH-2902': '2JHDC24',
        'CTH-SS-003': 'BJHDC24',  'CTH-2903': 'BJHDC24',
        'CTH-SS-004': '50FDC24',  'CTH-2904': '50FDC24',
        'CTH-SS-005': '7TBDC24',  'CTH-2905': '7TBDC24',
        'CTH-SS-006': 'F0FDC24',  'CTH-2906': 'F0FDC24',
        'CTH-SS-007': 'H2FDC24',  'CTH-2907': 'H2FDC24',
        'CTH-SS-008': '1RKDC24',  'CTH-2908': '1RKDC24',
        'CTH-SS-009': '46FDC24',  'CTH-2909': '46FDC24',
        'CTH-SS-010': 'BHHDC24',  'CTH-2910': 'BHHDC24',
        'CTH-SS-011': '16FDC24',  'CTH-2911': '16FDC24',
        'CTH-SS-012': '66FDC24',  'CTH-2912': '66FDC24',
        'CTH-SS-013': '55FDC24',  'CTH-2913': '55FDC24',
        'CTH-SS-014': '7RKDC24',  'CTH-2914': '7RKDC24',
        'CTH-SS-015': '13FDC24',  'CTH-2915': '13FDC24',
        'CTH-SS-016': '7GHDC24',  'CTH-2916': '7GHDC24',
        'CTH-SS-017': 'C1FDC24',  'CTH-2917': 'C1FDC24',
        'CTH-SS-018': 'CJHDC24',  'CTH-2918': 'CJHDC24',
        'CTH-SS-019': 'GGHDC24',  'CTH-2919': 'GGHDC24',
        'CTH-SS-020': 'HRKDC24',  'CTH-2920': 'HRKDC24',
        'CTH-SS-021': 'HSKDC24',  'CTH-2921': 'HSKDC24',
        'CTH-SS-022': '5HHDC24',  'CTH-2922': '5HHDC24',
        'CTH-SS-023': '36FDC24',  'CTH-2923': '36FDC24',
        'CTH-SS-024': 'F5FDC24',  'CTH-2924': 'F5FDC24',
        'CTH-SS-025': '4HHDC24',  'CTH-2925': '4HHDC24',
        'CTH-SS-026': '95FDC24',  'CTH-2926': '95FDC24',
        'CTH-SS-027': '1TBDC24',  'CTH-2927': '1TBDC24',
        'CTH-SS-028': '56FDC24',  'CTH-2928': '56FDC24',
        'CTH-SS-029': 'J4FDC24',  'CTH-2929': 'J4FDC24',
        'CTH-SS-030': '8GHDC24',  'CTH-2930': '8GHDC24',
    };

    let changed = 0;
    area.items.forEach(it => {
        if (it.serial) return; // ya tiene serial, no tocar
        // 1) buscar por ID en el mapa
        if (serialMap[it.id]) {
            it.serial = serialMap[it.id];
            changed++;
            return;
        }
        // 2) fallback: extraer del campo observaciones ("S/N: XXXXX")
        if (it.observaciones) {
            const m = it.observaciones.match(/S\/N:\s*([^\s|]+)/);
            if (m && m[1] && m[1] !== 'serial') {
                it.serial = m[1];
                changed++;
            }
        }
    });

    if (changed > 0) {
        console.log(`✅ Sala de Sistemas: ${changed} seriales asignados`);
    }
}

// ─── Verificación continua: Asegurar seriales Aulas Móviles (sin guard) ───────
function ensureAulasMovilesSerials() {
    const sede = INVENTORY_DB['CTH'];
    if (!sede || !sede.inventario) return;

    const serialMap = {
        'CTH-3101':'DCJZZK3','CTH-3102':'7H9ZZK3','CTH-3103':'CP9ZZK3','CTH-3104':'6N5ZZK3',
        'CTH-3105':'HN5ZZK3','CTH-3106':'FQ9ZZK3','CTH-3107':'2R5ZZK3','CTH-3108':'8K9ZZK3',
        'CTH-3109':'1HJZZK3','CTH-3110':'6CJZZK3','CTH-3111':'3XMZZK3','CTH-3112':'FP5ZZK3',
        'CTH-3113':'7FJZZK3','CTH-3114':'DP5ZZK3','CTH-3115':'CT5ZZK3','CTH-3116':'9P9ZZK3',
        'CTH-3117':'FQ5ZZK3','CTH-3118':'CCJZZK3','CTH-3119':'6F9ZZK3','CTH-3120':'FDJZZK3',
        'CTH-3121':'5P5ZZK3','CTH-3122':'BL9ZZK3','CTH-3123':'8J9ZZK3','CTH-3124':'HN5ZZK3',
        'CTH-3125':'3M9ZZK3','CTH-3126':'FG9ZZK3','CTH-3127':'3T5ZZK3','CTH-3128':'4L9ZZK3',
        'CTH-3129':'3HJZZK3','CTH-3130':'JK9ZZK3',
        'CTH-3201':'8VYG9C3','CTH-3202':'9QLG9C3','CTH-3203':'3GWJ9C3','CTH-3204':'BYXJ9C3',
        'CTH-3205':'CR8H9C3','CTH-3206':'FPWY9C3','CTH-3207':'4D7G9C3','CTH-3208':'79WJ9C3',
        'CTH-3209':'H8KH9C3','CTH-3210':'20YY9C3','CTH-3211':'65ZG9C3','CTH-3212':'G4SF9C3',
        'CTH-3213':'24YY9C3','CTH-3214':'FW6H9C3','CTH-3215':'B7SF9C3','CTH-3216':'J3ZG9C3',
        'CTH-3217':'54SG9C3','CTH-3218':'2S8H9C3','CTH-3219':'85SF9C3','CTH-3220':'6YHJ9C3',
        'CTH-3221':'J7BJ9C3','CTH-3222':'J6FG9C3','CTH-3223':'5B2H9C3','CTH-3224':'44BJ9C3',
        'CTH-3225':'1YFJ9C3','CTH-3226':'DZ6H9C3','CTH-3227':'9LTJ9C3','CTH-3228':'C2ZG9C3',
        'CTH-3229':'3XYG9C3','CTH-3230':'209H9C3',
        'CTH-3301':'2BHL4W3','CTH-3302':'H0HK4W3','CTH-3303':'JP5K4W3','CTH-3304':'FYGK4W3',
        'CTH-3305':'J9CK4W3','CTH-3306':'F7HL4W3','CTH-3307':'CL9L4W3','CTH-3308':'HSGK4W3',
        'CTH-3309':'CSDM4W3','CTH-3310':'1Q9L4W3','CTH-3311':'HQGK4W3','CTH-3312':'3G9L4W3',
        'CTH-3313':'HXGK4W3','CTH-3314':'DKNK4W3','CTH-3315':'2ZGK4W3','CTH-3316':'1L9L4W3',
        'CTH-3317':'1G1M4W3','CTH-3318':'9YGK4W3','CTH-3319':'25PL4W3','CTH-3320':'2TGK4W3',
        'CTH-3321':'1YRM4W3','CTH-3322':'8J9L4W3','CTH-3323':'GDCK4W3','CTH-3324':'CPNK4W3',
        'CTH-3325':'3YGK4W3','CTH-3326':'DG9L4W3','CTH-3327':'3TGK4W3','CTH-3328':'J0HK4W3',
        'CTH-3329':'GP9L4W3','CTH-3330':'8P9L4W3',
        'CTH-3401':'7398YM3','CTH-3402':'2098YM3','CTH-3403':'4098YM3','CTH-3404':'9PM8YM3',
        'CTH-3405':'7GJ8YM3','CTH-3406':'3198YM3','CTH-3407':'J7J8YM3','CTH-3408':'8WZ8YM3',
        'CTH-3409':'HZ88YM3','CTH-3410':'7M58YM3','CTH-3411':'6FNMPZ3','CTH-3412':'6KTMPZ3',
        'CTH-3413':'2LTMPZ3','CTH-3414':'39NMPZ3','CTH-3415':'3LTMPZ3','CTH-3416':'J4NMPZ3',
        'CTH-3417':'5STMPZ3','CTH-3418':'29NMPZ3','CTH-3419':'87PNPZ3','CTH-3420':'J8NMPZ3',
        'CTH-3421':'632WRW3','CTH-3422':'332WRW3','CTH-3423':'FK7WRW3','CTH-3424':'2C7WRW3',
        'CTH-3425':'4J7WRW3','CTH-3426':'3L7WRW3','CTH-3427':'1L7WRW3','CTH-3428':'HK7WRW3',
        'CTH-3429':'8J7WRW3','CTH-3430':'2L7WRW3',
        'CTH-3501':'PF56KGHK','CTH-3502':'PF56KGKN','CTH-3503':'PF56KJRR','CTH-3504':'PF56KJQ3',
        'CTH-3505':'PF56KJTB','CTH-3506':'PF56KJT5','CTH-3507':'PF56KGK6','CTH-3508':'PF56KGFV',
        'CTH-3509':'PF56KGGW','CTH-3510':'PF56KGHR','CTH-3511':'PF56KJSW','CTH-3512':'PF56KGJB',
        'CTH-3513':'PF56KJSL','CTH-3514':'PF56KJQN','CTH-3515':'PF56KJS0','CTH-3516':'PF56KJRJ',
        'CTH-3517':'PF56KJQA','CTH-3518':'PF56KGG5','CTH-3519':'PF56KJS6','CTH-3520':'PF56KGKE',
        'CTH-3521':'PF56KGJ5','CTH-3522':'PF56KJQH','CTH-3523':'PF56KGGK','CTH-3524':'PF56KGH4',
        'CTH-3525':'PF56KGKW','CTH-3526':'PF56KGJ0','CTH-3527':'PF56KGJZ','CTH-3528':'PF56KGJL',
        'CTH-3529':'PF56KJSD','CTH-3530':'FPS56KGHB',
    };

    const specMap = {
        '3100': { aulaNum: '01', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3200': { aulaNum: '02', proc: 'INTEL CELERON', vel: '2.8 GHz',  ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3300': { aulaNum: '03', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3400': { aulaNum: '04', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3500': { aulaNum: '05', proc: 'Intel N100',    vel: '',         ram: '8 GB',     disco: '64 GB EMMC' },
    };

    let changed = 0;
    ['3100','3200','3300','3400','3500'].forEach(code => {
        const area = sede.inventario.find(a => String(a.codigoArea) === code);
        if (!area) return;
        const spec = specMap[code];
        area.items.forEach((it, idx) => {
            const expectedSerial = serialMap[it.id];
            if (!expectedSerial) return;
            // Verificar serial
            if (!it.serial || it.serial !== expectedSerial) {
                it.serial = expectedSerial;
                it.seriales = [expectedSerial];
                it.serialesEstado = ['Bueno'];
                changed++;
            } else if (!Array.isArray(it.seriales) || it.seriales[0] !== expectedSerial) {
                it.seriales = [expectedSerial];
                it.serialesEstado = ['Bueno'];
                changed++;
            }
        });
    });

    if (changed > 0) {
        console.log(`🔄 ensureAulasMovilesSerials: ${changed} seriales corregidos`);
        try {
            window._suppressInventorySnapshot = true;
            db.collection('config').doc('inventory_CTH').set({
                sedeKey: 'CTH',
                data: INVENTORY_DB['CTH'],
                version: INVENTORY_DATA_VERSION
            }).then(() => {
                console.log('✅ Seriales verificados y guardados en Firestore');
                setTimeout(() => { window._suppressInventorySnapshot = false; }, 3000);
            }).catch(err => {
                console.error('❌ Error guardando seriales (ensure):', err);
                window._suppressInventorySnapshot = false;
            });
        } catch(e) {
            console.error('❌ Error en ensureAulasMovilesSerials:', e);
        }
        localStorage.setItem('cth_inventory', JSON.stringify(INVENTORY_DB));
    } else {
        console.log('✅ ensureAulasMovilesSerials: todos los seriales OK');
    }
}

// ─── Migración v16: Poblar campo serial en Aulas Móviles (3100–3500) ──────────
function migrateAulasMovilesSerials() {
    const sede = INVENTORY_DB['CTH'];
    if (!sede || !sede.inventario) return;

    // Mapa hardcodeado ID → serial (fuente de verdad física)
    const serialMap = {
        // Aula Movil 1 (3100)
        'CTH-3101':'DCJZZK3',  'CTH-3102':'7H9ZZK3',  'CTH-3103':'CP9ZZK3',  'CTH-3104':'6N5ZZK3',
        'CTH-3105':'HN5ZZK3',  'CTH-3106':'FQ9ZZK3',  'CTH-3107':'2R5ZZK3',  'CTH-3108':'8K9ZZK3',
        'CTH-3109':'1HJZZK3',  'CTH-3110':'6CJZZK3',  'CTH-3111':'3XMZZK3',  'CTH-3112':'FP5ZZK3',
        'CTH-3113':'7FJZZK3',  'CTH-3114':'DP5ZZK3',  'CTH-3115':'CT5ZZK3',  'CTH-3116':'9P9ZZK3',
        'CTH-3117':'FQ5ZZK3',  'CTH-3118':'CCJZZK3',  'CTH-3119':'6F9ZZK3',  'CTH-3120':'FDJZZK3',
        'CTH-3121':'5P5ZZK3',  'CTH-3122':'BL9ZZK3',  'CTH-3123':'8J9ZZK3',  'CTH-3124':'HN5ZZK3',
        'CTH-3125':'3M9ZZK3',  'CTH-3126':'FG9ZZK3',  'CTH-3127':'3T5ZZK3',  'CTH-3128':'4L9ZZK3',
        'CTH-3129':'3HJZZK3',  'CTH-3130':'JK9ZZK3',
        // Aula Movil 2 (3200)
        'CTH-3201':'8VYG9C3',  'CTH-3202':'9QLG9C3',  'CTH-3203':'3GWJ9C3',  'CTH-3204':'BYXJ9C3',
        'CTH-3205':'CR8H9C3',  'CTH-3206':'FPWY9C3',  'CTH-3207':'4D7G9C3',  'CTH-3208':'79WJ9C3',
        'CTH-3209':'H8KH9C3',  'CTH-3210':'20YY9C3',  'CTH-3211':'65ZG9C3',  'CTH-3212':'G4SF9C3',
        'CTH-3213':'24YY9C3',  'CTH-3214':'FW6H9C3',  'CTH-3215':'B7SF9C3',  'CTH-3216':'J3ZG9C3',
        'CTH-3217':'54SG9C3',  'CTH-3218':'2S8H9C3',  'CTH-3219':'85SF9C3',  'CTH-3220':'6YHJ9C3',
        'CTH-3221':'J7BJ9C3',  'CTH-3222':'J6FG9C3',  'CTH-3223':'5B2H9C3',  'CTH-3224':'44BJ9C3',
        'CTH-3225':'1YFJ9C3',  'CTH-3226':'DZ6H9C3',  'CTH-3227':'9LTJ9C3',  'CTH-3228':'C2ZG9C3',
        'CTH-3229':'3XYG9C3',  'CTH-3230':'209H9C3',
        // Aula Movil 3 (3300)
        'CTH-3301':'2BHL4W3',  'CTH-3302':'H0HK4W3',  'CTH-3303':'JP5K4W3',  'CTH-3304':'FYGK4W3',
        'CTH-3305':'J9CK4W3',  'CTH-3306':'F7HL4W3',  'CTH-3307':'CL9L4W3',  'CTH-3308':'HSGK4W3',
        'CTH-3309':'CSDM4W3',  'CTH-3310':'1Q9L4W3',  'CTH-3311':'HQGK4W3',  'CTH-3312':'3G9L4W3',
        'CTH-3313':'HXGK4W3',  'CTH-3314':'DKNK4W3',  'CTH-3315':'2ZGK4W3',  'CTH-3316':'1L9L4W3',
        'CTH-3317':'1G1M4W3',  'CTH-3318':'9YGK4W3',  'CTH-3319':'25PL4W3',  'CTH-3320':'2TGK4W3',
        'CTH-3321':'1YRM4W3',  'CTH-3322':'8J9L4W3',  'CTH-3323':'GDCK4W3',  'CTH-3324':'CPNK4W3',
        'CTH-3325':'3YGK4W3',  'CTH-3326':'DG9L4W3',  'CTH-3327':'3TGK4W3',  'CTH-3328':'J0HK4W3',
        'CTH-3329':'GP9L4W3',  'CTH-3330':'8P9L4W3',
        // Aula Movil 4 (3400)
        'CTH-3401':'7398YM3',  'CTH-3402':'2098YM3',  'CTH-3403':'4098YM3',  'CTH-3404':'9PM8YM3',
        'CTH-3405':'7GJ8YM3',  'CTH-3406':'3198YM3',  'CTH-3407':'J7J8YM3',  'CTH-3408':'8WZ8YM3',
        'CTH-3409':'HZ88YM3',  'CTH-3410':'7M58YM3',  'CTH-3411':'6FNMPZ3',  'CTH-3412':'6KTMPZ3',
        'CTH-3413':'2LTMPZ3',  'CTH-3414':'39NMPZ3',  'CTH-3415':'3LTMPZ3',  'CTH-3416':'J4NMPZ3',
        'CTH-3417':'5STMPZ3',  'CTH-3418':'29NMPZ3',  'CTH-3419':'87PNPZ3',  'CTH-3420':'J8NMPZ3',
        'CTH-3421':'632WRW3',  'CTH-3422':'332WRW3',  'CTH-3423':'FK7WRW3',  'CTH-3424':'2C7WRW3',
        'CTH-3425':'4J7WRW3',  'CTH-3426':'3L7WRW3',  'CTH-3427':'1L7WRW3',  'CTH-3428':'HK7WRW3',
        'CTH-3429':'8J7WRW3',  'CTH-3430':'2L7WRW3',
        // Aula Movil 5 (3500)
        'CTH-3501':'PF56KGHK', 'CTH-3502':'PF56KGKN', 'CTH-3503':'PF56KJRR', 'CTH-3504':'PF56KJQ3',
        'CTH-3505':'PF56KJTB', 'CTH-3506':'PF56KJT5', 'CTH-3507':'PF56KGK6', 'CTH-3508':'PF56KGFV',
        'CTH-3509':'PF56KGGW', 'CTH-3510':'PF56KGHR', 'CTH-3511':'PF56KJSW', 'CTH-3512':'PF56KGJB',
        'CTH-3513':'PF56KJSL', 'CTH-3514':'PF56KJQN', 'CTH-3515':'PF56KJS0', 'CTH-3516':'PF56KJRJ',
        'CTH-3517':'PF56KJQA', 'CTH-3518':'PF56KGG5', 'CTH-3519':'PF56KJS6', 'CTH-3520':'PF56KGKE',
        'CTH-3521':'PF56KGJ5', 'CTH-3522':'PF56KJQH', 'CTH-3523':'PF56KGGK', 'CTH-3524':'PF56KGH4',
        'CTH-3525':'PF56KGKW', 'CTH-3526':'PF56KGJ0', 'CTH-3527':'PF56KGJZ', 'CTH-3528':'PF56KGJL',
        'CTH-3529':'PF56KJSD', 'CTH-3530':'FPS56KGHB',
    };

    // Ficha técnica por aula: { procesador, velocidad, ram, disco }
    const specMap = {
        '3100': { aulaNum: '01', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3200': { aulaNum: '02', proc: 'INTEL CELERON', vel: '2.8 GHz',  ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3300': { aulaNum: '03', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3400': { aulaNum: '04', proc: 'INTEL CELERON', vel: '1.10 GHz', ram: 'DDR4 8GB', disco: '32GB SSD' },
        '3500': { aulaNum: '05', proc: 'Intel N100',    vel: '',         ram: '8 GB',     disco: '64 GB EMMC' },
    };

    let changed = 0;
    const aulaCodes = ['3100', '3200', '3300', '3400', '3500'];
    aulaCodes.forEach(code => {
        const area = sede.inventario.find(a => String(a.codigoArea) === code);
        if (!area) return;
        const spec = specMap[code];
        if (!spec) return;
        area.items.forEach((it, idx) => {
            let itemChanged = false;
            // Serial → campo N° DE SERIE
            const expectedSerial = serialMap[it.id];
            if (expectedSerial) {
                const serialOk = Array.isArray(it.seriales) && it.seriales[0] === expectedSerial;
                if (!serialOk) {
                    it.seriales = [expectedSerial];
                    it.serialesEstado = ['Bueno'];
                    it.serial = expectedSerial;
                    itemChanged = true;
                }
            }
            // Observaciones completas: Aula Movil XX | Sticker: CB XX | S/N: XXX | Procesador: … | …
            const stickerNum = idx + 1;
            const sn = expectedSerial || it.serial || '';
            let expectedObs;
            if (code === '3500') {
                expectedObs = `Aula Movil ${spec.aulaNum} | Sticker: CB ${String(stickerNum).padStart(2,'0')} | S/N: ${sn} | Procesador: ${spec.proc} | RAM: ${spec.ram} | Disco: ${spec.disco}`;
            } else {
                expectedObs = `Aula Movil ${spec.aulaNum} | Sticker: CB ${stickerNum} | S/N: ${sn} | Procesador: ${spec.proc} | Velocidad: ${spec.vel} | RAM: ${spec.ram} | Disco: ${spec.disco}`;
            }
            if (it.observaciones !== expectedObs) {
                it.observaciones = expectedObs;
                itemChanged = true;
            }
            if (itemChanged) changed++;
        });
    });

    if (changed > 0) {
        console.log(`✅ Aulas Móviles: ${changed} ítems actualizados (seriales + fichas técnicas)`);
        localStorage.setItem('cth_inventory', JSON.stringify(INVENTORY_DB));
        // Escribir directamente a Firestore sin pasar por saveInventoryToDB
        // (que tiene un guard 'firestoreReady' que puede ser false dentro del primer onSnapshot)
        try {
            window._suppressInventorySnapshot = true;
            db.collection('config').doc('inventory_CTH').set({
                sedeKey: 'CTH',
                data: INVENTORY_DB['CTH'],
                version: INVENTORY_DATA_VERSION
            }).then(() => {
                console.log('✅ Seriales aulas móviles guardados en Firestore');
                setTimeout(() => { window._suppressInventorySnapshot = false; }, 3000);
            }).catch(err => {
                console.error('❌ Error guardando seriales:', err);
                window._suppressInventorySnapshot = false;
            });
        } catch(e) {
            console.error('❌ Error en migración seriales:', e);
        }
    } else {
        console.log('✅ Aulas Móviles: ya actualizados, sin cambios');
    }
}

// ─── Migración v11: Limpiar ítems duplicados del área Robótica (2800) ─────────
function migrateRoboticaItems() {
    const sede = INVENTORY_DB['CTH'];
    if (!sede || !sede.inventario) return;
    const area = sede.inventario.find(a => a.codigoArea === '2800');
    if (!area) return;
    // Solo ejecutar si tiene más de 27 ítems (señal de duplicados)
    if (area.items.length <= 27) return;
    console.log('🔧 Migrando ítems del área 2800 (Robótica/Sistemas): eliminando duplicados…');
    area.items = [
        { id: 'CTH-2801', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LDPB',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2802', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEHB',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2803', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEEC',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2804', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LBAM',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2805', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LB93',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2806', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEFD',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2807', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEFM',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2808', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LB8D',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2809', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21ILE4W', estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2810', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEH1',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2811', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NA3A',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2812', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NA17',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2813', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21L903',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2814', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21M9ZQ',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2815', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21MA1X',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2816', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21MQ01',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2817', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEDK',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2818', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21L8YY',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2819', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LB8J',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2820', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21NEFW',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2821', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LSK0',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2822', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LB6G',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2823', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21L8YC',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2824', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21N5QF',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81w6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2825', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'PF21LDNC',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81W6 | i5-1035G4 1.10GHz | 4GB RAM | 120GB SSD + 1TB HDD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2826', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'MP1EGVMH',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81B0 | i5-8250U 1.60GHz | 4GB RAM | 240GB SSD | Windows 11 Education', componentes: [], historial: [] },
        { id: 'CTH-2827', nombre: 'Portatil Lenovo', cantidad: 1, serial: 'MP1EGVQN',  estado: 'Bueno', fechaCompra: '2019-12-10', activoContable: '', activoNoContable: '', responsable: 'Juan Camilo Ramírez', observaciones: 'Modelo 81B0 | i5-8250U 1.60GHz | 4GB RAM | 240GB SSD | Windows 11 Pro', componentes: [], historial: [] }
    ];
    console.log('✅ Área 2800 limpiada: 27 portátiles Lenovo cargados correctamente');
}

// ─── Migración: Asignar codigoArea a áreas sin código y corregir IDs de sus ítems ───
function migrateAreaCodesAndItemIds() {
    let changed = false;
    const TABS = ['inventario', 'depuracion', 'adiciones'];
    Object.keys(INVENTORY_DB).forEach(sedeKey => {
        const sede = INVENTORY_DB[sedeKey];
        TABS.forEach(tab => {
            if (!sede[tab]) return;
            sede[tab].forEach(area => {
                if (!area.codigoArea || area.codigoArea === '') {
                    // Calcular el siguiente código disponible en esa sede (máx + 100)
                    const allCodes = TABS.flatMap(t => (sede[t] || []).map(a => parseInt(a.codigoArea || '0')));
                    const maxCode = allCodes.reduce((m, c) => c > m ? c : m, 0);
                    area.codigoArea = String(maxCode + 100);
                    changed = true;
                    console.log(`🔧 Migración: codigoArea ${area.codigoArea} asignado a "${area.area}" en ${sedeKey}`);
                }
                // Corregir IDs de ítems que no coincidan con el patrón del área
                const baseCode = parseInt(area.codigoArea);
                const prefix = sedeKey.toUpperCase();
                const wrongItems = area.items.filter(it => {
                    const m = it.id.match(/(\d+)$/);
                    if (!m) return false;
                    const num = parseInt(m[1]);
                    // El ID debe estar en el rango [baseCode+1, baseCode+999]
                    return num < baseCode + 1 || num > baseCode + 999;
                });
                if (wrongItems.length > 0) {
                    // Reasignar IDs consecutivos a partir de baseCode+1
                    let nextNum = baseCode + 1;
                    // Asegurarse de no pisar IDs ya correctos
                    const usedNums = new Set(
                        area.items
                            .filter(it => { const m = it.id.match(/(\d+)$/); if (!m) return false; const n = parseInt(m[1]); return n >= baseCode + 1 && n <= baseCode + 999; })
                            .map(it => parseInt(it.id.match(/(\d+)$/)[1]))
                    );
                    wrongItems.forEach(it => {
                        while (usedNums.has(nextNum)) nextNum++;
                        const oldId = it.id;
                        it.id = `${prefix}-${nextNum}`;
                        usedNums.add(nextNum);
                        nextNum++;
                        changed = true;
                        console.log(`🔧 Migración: ID ${oldId} → ${it.id} en área "${area.area}"`);
                    });
                }
            });
        });
    });
    if (changed) saveInventoryToDB();
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
    return str.split(' ').map(word => {
        if (word.length === 0) return word;
        // Preserve all-caps words (LG, RC2, iMAC, etc.)
        if (word === word.toUpperCase()) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
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

// ─── Log Global de Movimientos por Sede (Paso 3) ───
function _renderGlobalLog(sedeKey) {
    const sede = INVENTORY_DB[sedeKey];
    const entries = [];

    // Recolectar adiciones
    (sede.adiciones || []).forEach(area => {
        (area.items || []).forEach(item => {
            entries.push({
                tipo: 'adicion',
                fecha: item.fechaRegistro || item.fechaCompra || '',
                por: item.registradoPor || '—',
                area: area.area,
                itemId: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                detalle: [item.proveedor ? `Proveedor: ${item.proveedor}` : '', item.ordenCompra ? `O.C.: ${item.ordenCompra}` : '', item.valor ? `Valor: ${formatCOP(item.valor)}` : ''].filter(Boolean).join(' · ') || '—',
                editadoPor: item.ultimaEdicion || null,
                fechaEdicion: item.fechaUltimaEdicion || null
            });
        });
    });

    // Recolectar depuraciones
    (sede.depuracion || []).forEach(area => {
        (area.items || []).forEach(item => {
            entries.push({
                tipo: 'depuracion',
                fecha: item.fechaRegistro || item.fechaRetiro || '',
                por: item.registradoPor || '—',
                area: area.area,
                itemId: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                detalle: [item.motivo ? `Motivo: ${item.motivo}` : '', item.fechaRetiro ? `Retiro: ${item.fechaRetiro}` : ''].filter(Boolean).join(' · ') || '—',
                editadoPor: item.ultimaEdicion || null,
                fechaEdicion: item.fechaUltimaEdicion || null
            });
        });
    });

    // Recolectar historial de ediciones del inventario activo
    (sede.inventario || []).forEach(area => {
        (area.items || []).forEach(item => {
            (item.historial || []).forEach(h => {
                entries.push({
                    tipo: 'edicion',
                    fecha: h.fecha || '',
                    por: h.por || '—',
                    area: area.area,
                    itemId: item.id,
                    nombre: item.nombre,
                    cantidad: h.cantidad,
                    detalle: [h.estado ? `Estado anterior: ${h.estado}` : '', h.nota ? h.nota : '', h.observaciones ? h.observaciones : ''].filter(Boolean).join(' · ') || '—',
                    editadoPor: null,
                    fechaEdicion: null
                });
            });
        });
    });

    // Ordenar del más reciente al más antiguo
    entries.sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));

    if (entries.length === 0) {
        return `<div class="inv-empty" style="padding:40px 20px;">
            <div class="inv-empty-icon">📭</div>
            <p>No hay movimientos registrados aún para <strong>${sede.nombre}</strong>.<br>
            El historial se construye automáticamente al agregar adiciones, depuraciones y editar ítems.</p>
        </div>`;
    }

    const tipoConfig = {
        adicion:   { label: 'Adición',    badge: 'background:#dcfce7;color:#16a34a;' },
        depuracion:{ label: 'Depuración', badge: 'background:#fee2e2;color:#dc2626;' },
        edicion:   { label: 'Edición',    badge: 'background:#dbeafe;color:#1d4ed8;' }
    };

    // Filtros rápidos
    const filterBar = `
        <div style="display:flex;align-items:center;gap:10px;padding:12px 0 16px;flex-wrap:wrap;">
            <span style="font-size:0.75rem;font-weight:700;color:#64748b;text-transform:uppercase;">Filtrar:</span>
            <button onclick="window._invLogFilter='todos'; renderInventoryView(document.getElementById('view-dashboard'))"
                style="padding:4px 14px;border-radius:20px;border:1.5px solid ${!window._invLogFilter || window._invLogFilter==='todos' ? '#3b82f6' : '#e2e8f0'};background:${!window._invLogFilter || window._invLogFilter==='todos' ? '#eff6ff' : '#fff'};color:${!window._invLogFilter || window._invLogFilter==='todos' ? '#1d4ed8' : '#64748b'};cursor:pointer;font-size:0.78rem;font-weight:600;">
                Todos (${entries.length})
            </button>
            <button onclick="window._invLogFilter='adicion'; renderInventoryView(document.getElementById('view-dashboard'))"
                style="padding:4px 14px;border-radius:20px;border:1.5px solid ${window._invLogFilter==='adicion' ? '#16a34a' : '#e2e8f0'};background:${window._invLogFilter==='adicion' ? '#dcfce7' : '#fff'};color:${window._invLogFilter==='adicion' ? '#16a34a' : '#64748b'};cursor:pointer;font-size:0.78rem;font-weight:600;">
                🆕 Adiciones (${entries.filter(e=>e.tipo==='adicion').length})
            </button>
            <button onclick="window._invLogFilter='depuracion'; renderInventoryView(document.getElementById('view-dashboard'))"
                style="padding:4px 14px;border-radius:20px;border:1.5px solid ${window._invLogFilter==='depuracion' ? '#dc2626' : '#e2e8f0'};background:${window._invLogFilter==='depuracion' ? '#fee2e2' : '#fff'};color:${window._invLogFilter==='depuracion' ? '#dc2626' : '#64748b'};cursor:pointer;font-size:0.78rem;font-weight:600;">
                🗑️ Depuraciones (${entries.filter(e=>e.tipo==='depuracion').length})
            </button>
            <button onclick="window._invLogFilter='edicion'; renderInventoryView(document.getElementById('view-dashboard'))"
                style="padding:4px 14px;border-radius:20px;border:1.5px solid ${window._invLogFilter==='edicion' ? '#1d4ed8' : '#e2e8f0'};background:${window._invLogFilter==='edicion' ? '#dbeafe' : '#fff'};color:${window._invLogFilter==='edicion' ? '#1d4ed8' : '#64748b'};cursor:pointer;font-size:0.78rem;font-weight:600;">
                ✏️ Ediciones (${entries.filter(e=>e.tipo==='edicion').length})
            </button>
        </div>`;

    const activeFilter = window._invLogFilter && window._invLogFilter !== 'todos' ? window._invLogFilter : null;
    const filtered = activeFilter ? entries.filter(e => e.tipo === activeFilter) : entries;

    const rows = filtered.map(e => {
        const cfg = tipoConfig[e.tipo] || tipoConfig.edicion;
        const fechaFmt = e.fecha ? new Date(e.fecha).toLocaleString('es-CO', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) : '—';
        const usuarioFmt = e.por && e.por !== '—' ? e.por.split('@')[0] : e.por;
        const editLine = e.editadoPor ? `<span style="font-size:0.68rem;color:#94a3b8;"> · Editado por ${e.editadoPor.split('@')[0]} · ${e.fechaEdicion ? new Date(e.fechaEdicion).toLocaleDateString('es-CO') : ''}</span>` : '';
        return `<tr style="border-bottom:1px solid #f1f5f9;">
            <td style="padding:8px 14px;white-space:nowrap;font-size:0.78rem;color:#64748b;">${fechaFmt}</td>
            <td style="padding:8px 14px;white-space:nowrap;">
                <span style="font-size:0.72rem;font-weight:700;padding:2px 10px;border-radius:10px;${cfg.badge}">${cfg.label}</span>
            </td>
            <td style="padding:8px 14px;white-space:nowrap;font-size:0.78rem;color:#1e293b;font-weight:600;">${usuarioFmt}</td>
            <td style="padding:8px 14px;white-space:nowrap;font-size:0.78rem;color:#475569;">${e.area}</td>
            <td style="padding:8px 14px;white-space:nowrap;font-size:0.78rem;color:#334155;">
                <code style="font-size:0.72rem;background:#f1f5f9;padding:1px 6px;border-radius:4px;margin-right:6px;">${e.itemId}</code>${titleCase(e.nombre)}
            </td>
            <td style="padding:8px 14px;text-align:center;white-space:nowrap;font-size:0.85rem;font-weight:700;color:#334155;">${e.cantidad ?? '—'}</td>
            <td style="padding:8px 14px;font-size:0.78rem;color:#64748b;">${e.detalle}${editLine}</td>
        </tr>`;
    }).join('');

    return `
        ${filterBar}
        ${filtered.length === 0 ? `<div class="inv-empty"><div class="inv-empty-icon">🔍</div><p>No hay registros del tipo seleccionado.</p></div>` : `
        <div style="overflow-x:auto;border-radius:10px;border:1px solid #e2e8f0;">
            <table style="width:100%;border-collapse:collapse;font-family:inherit;">
                <thead>
                    <tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;white-space:nowrap;">Fecha</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Tipo</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Registrado por</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Área</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Ítem</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:center;">Cant.</th>
                        <th style="padding:10px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Detalle</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`}`;
}

// ─── Render: Vista de Inventario ───
function renderInventoryView(container) {
    // Si Firestore aún no ha cargado el inventario, mostrar spinner en lugar de datos hardcoded
    if (!window._inventoryLoadedFromFirestore) {
        container.innerHTML = `
            <div class="card-form full-width" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:16px;">
                <div style="width:40px;height:40px;border:4px solid #e2e8f0;border-top-color:#3b82f6;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
                <p style="color:#64748b;font-size:0.9rem;font-weight:500;">Sincronizando inventario con la nube…</p>
            </div>`;
        return;
    }
    const sedes = Object.keys(INVENTORY_DB);
    const sedeActiva = window._invSedeActiva || sedes[0];
    const tabActivo = window._invTabActivo || 'inventario';

    let totalItems = 0, totalDepurados = 0, totalAdiciones = 0;
    sedes.forEach(s => {
        const sede = INVENTORY_DB[s];
        (sede.inventario || []).forEach(a => totalItems += (a.items || []).length);
        (sede.depuracion || []).forEach(a => totalDepurados += (a.items || []).length);
        (sede.adiciones || []).forEach(a => totalAdiciones += (a.items || []).length);
    });

    const sede = INVENTORY_DB[sedeActiva];
    const categorias = {
        inventario: { label: '📋 Inventario Activo', data: sede.inventario || [], color: '#0c84ff' },
        depuracion: { label: '🗑️ Depuración (Retirados)', data: sede.depuracion || [], color: '#ef4444' },
        adiciones: { label: '🆕 Adiciones (Nuevas Compras)', data: sede.adiciones || [], color: '#16a34a' }
    };
    const cat = categorias[tabActivo];
    const areas = cat ? cat.data : [];

    let catItemCount = 0;
    areas.forEach(a => catItemCount += (a.items || []).length);

    const _animClass = window._invRendered ? '' : 'animate-in';
    window._invRendered = true;
    container.innerHTML = `
        <div class="card-form ${_animClass} full-width">
            <div class="inv-header">
                <div>
                    <h2 class="inv-title">📦 Inventario de Activos — UIB</h2>
                    <p class="inv-subtitle">Control de activos fijos por sede · Para Revisoría Fiscal</p>
                </div>
                <div class="inv-header-actions">
                    <button class="btn-excel" onclick="window.exportInventoryExcel()" title="Exportar inventario a Excel">📊 Exportar Excel</button>
                    <button class="inv-general-pdf-btn" onclick="window.exportGeneralPDF('${sedeActiva}','${tabActivo}')" title="Exportar informe general para Revisoría Fiscal">📄 Informe PDF</button>
                    <button class="btn-primary" onclick="window.openInventoryItemForm('${sedeActiva}', '${tabActivo}', null, null, '')">
                        <span class="btn-icon">🏷️</span> Agregar Área
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
                    (sd.inventario || []).forEach(a => { sedeItems += (a.items || []).length; sedeUnits += (a.items || []).reduce((sum, i) => sum + (parseInt(i.cantidad) || 0), 0); });
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
                <button class="inv-tab ${tabActivo === 'historial' ? 'active' : ''}" onclick="window._invTabActivo='historial'; renderInventoryView(document.getElementById('view-dashboard'))">
                    📜 Historial
                </button>
            </div>

            ${tabActivo !== 'historial' ? `
            <div class="inv-search-bar">
                <div style="display:flex;border:1.5px solid #e2e8f0;border-radius:8px;overflow:hidden;flex-shrink:0;">
                    <button id="inv-mode-areas" onclick="window._invSearchMode='areas'; document.getElementById('inv-search').value=''; document.getElementById('inv-search').dispatchEvent(new Event('input')); document.getElementById('inv-mode-areas').style.background='#3b82f6'; document.getElementById('inv-mode-areas').style.color='#fff'; document.getElementById('inv-mode-items').style.background='#fff'; document.getElementById('inv-mode-items').style.color='#64748b'; document.getElementById('inv-search').placeholder='🔍  Buscar área...'"
                        style="padding:7px 14px;border:none;font-size:0.78rem;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;background:${(window._invSearchMode||'areas')==='areas'?'#3b82f6':'#fff'};color:${(window._invSearchMode||'areas')==='areas'?'#fff':'#64748b'};">
                        🗂 Áreas
                    </button>
                    <button id="inv-mode-items" onclick="window._invSearchMode='items'; document.getElementById('inv-search').value=''; document.getElementById('inv-search').dispatchEvent(new Event('input')); document.getElementById('inv-mode-items').style.background='#3b82f6'; document.getElementById('inv-mode-items').style.color='#fff'; document.getElementById('inv-mode-areas').style.background='#fff'; document.getElementById('inv-mode-areas').style.color='#64748b'; document.getElementById('inv-search').placeholder='🔍  Buscar ítem por nombre, ID, responsable...'"
                        style="padding:7px 14px;border:none;border-left:1.5px solid #e2e8f0;font-size:0.78rem;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;background:${(window._invSearchMode||'areas')==='items'?'#3b82f6':'#fff'};color:${(window._invSearchMode||'areas')==='items'?'#fff':'#64748b'};">
                        📦 Ítems
                    </button>
                </div>
                <input type="text" id="inv-search" class="providers-search-input"
                    placeholder="${(window._invSearchMode||'areas')==='items' ? '🔍  Buscar ítem por nombre, ID, responsable...' : '🔍  Buscar área...'}">
                <span class="inv-results-count">${catItemCount} ítems en ${areas.length} áreas</span>
            </div>` : ''}

            <div class="inv-areas-container" id="inv-areas-container">
                ${tabActivo === 'historial' ? _renderGlobalLog(sedeActiva) : areas.length === 0 ? `
                    <div class="inv-empty">
                        <div class="inv-empty-icon">📭</div>
                        <p>No hay registros en esta categoría para ${sede.nombre}</p>
                    </div>
                ` : `
                    <div class="inv-grid" id="inv-grid">
                        ${areas.map((area, areaIdx) => {
                            const totalQty = area.items.reduce((s, it) => s + (it.cantidad || 0), 0);
                            let unidadesMalas = 0, unidadesRegular = 0;
                            area.items.forEach(it => {
                                if (Array.isArray(it.serialesEstado)) {
                                    it.serialesEstado.forEach(e => {
                                        if (e === 'Malo' || e === 'Dado de baja') unidadesMalas++;
                                        else if (e === 'Regular') unidadesRegular++;
                                    });
                                } else if (it.estado === 'Malo' || it.estado === 'Dado de baja') {
                                    unidadesMalas += (it.cantidad || 1);
                                } else if (it.estado === 'Regular') {
                                    unidadesRegular += (it.cantidad || 1);
                                }
                            });
                            const alertBadge = unidadesMalas > 0
                                ? `<span class="inv-grid-alert inv-grid-alert-red">${unidadesMalas} ⚠️</span>`
                                : unidadesRegular > 0
                                ? `<span class="inv-grid-alert inv-grid-alert-yellow">${unidadesRegular} ⚠️</span>`
                                : '';
                            const estadoResumen = unidadesMalas > 0
                                ? `<span class="inv-grid-estado-badge inv-grid-estado-mal">${unidadesMalas} en mal estado</span>`
                                : unidadesRegular > 0
                                ? `<span class="inv-grid-estado-badge inv-grid-estado-reg">${unidadesRegular} en estado regular</span>`
                                : '';
                            return `
                            <div class="inv-grid-card${unidadesMalas > 0 ? ' has-alert' : unidadesRegular > 0 ? ' has-warning' : ''}" data-area="${area.area.toLowerCase()}" data-idx="${areaIdx}" onclick="window.toggleAreaDetail('${sedeActiva}','${tabActivo}',${areaIdx}, this)">
                                <div class="inv-grid-card-top">
                                    ${area.codigoArea ? '<span class="inv-grid-code">' + area.codigoArea + '</span>' : ''}
                                    <div style="display:flex;align-items:center;gap:5px;">
                                        ${alertBadge}
                                        <span class="inv-grid-items">${(area.items || []).length} ítems</span>
                                    </div>
                                </div>
                                <div class="inv-grid-card-name">${area.area}</div>
                                <div class="inv-grid-card-bottom">
                                    <span class="inv-grid-qty">${totalQty} uds.</span>
                                    ${estadoResumen || (area.responsable ? '<span class="inv-grid-resp">👤 ' + area.responsable + '</span>' : '')}
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
        // Restaurar término anterior si existía
        if (window._invSearchTerm) { searchInput.value = window._invSearchTerm; }

        const _norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        searchInput.addEventListener('input', (e) => {
            const term = _norm(e.target.value.trim());
            window._invSearchTerm = e.target.value.trim();

            const grid = document.getElementById('inv-grid');
            const panel = document.getElementById('inv-detail-panel');
            const countEl = document.querySelector('.inv-results-count');

            // Si no hay búsqueda, restaurar vista normal
            if (!term) {
                if (grid) { grid.style.display = ''; Array.from(grid.children).forEach(c => c.style.display = ''); }
                const searchResults = document.getElementById('inv-search-results');
                if (searchResults) searchResults.remove();
                if (panel) panel.style.display = 'none';
                document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));
                if (countEl) countEl.textContent = `${catItemCount} ítems en ${areas.length} áreas`;
                return;
            }

            const mode = window._invSearchMode || 'areas';

            // ── MODO ÁREAS: filtrar tarjetas del grid ──
            if (mode === 'areas') {
                if (grid) grid.style.display = '';
                if (panel) panel.style.display = 'none';
                document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));
                const searchResults = document.getElementById('inv-search-results');
                if (searchResults) searchResults.remove();
                let visibles = 0;
                document.querySelectorAll('.inv-grid-card').forEach(card => {
                    const match = _norm(card.dataset.area).includes(term);
                    card.style.display = match ? '' : 'none';
                    if (match) visibles++;
                });
                if (countEl) countEl.textContent = `${visibles} área${visibles !== 1 ? 's' : ''} encontrada${visibles !== 1 ? 's' : ''}`;
                return;
            }

            // ── MODO ÍTEMS: buscar en contenido de todos los ítems ──
            // Ocultar grid y panel de área
            if (grid) grid.style.display = 'none';
            if (panel) panel.style.display = 'none';
            document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));

            // Recopilar todos los ítems que coincidan
            const results = [];
            areas.forEach((area, areaIdx) => {
                (area.items || []).forEach((item, itemIdx) => {
                    const haystack = _norm([
                        item.id || '',
                        item.nombre || '',
                        area.area || '',
                        item.estado || '',
                        item.responsable || area.responsable || '',
                        Array.isArray(item.seriales) ? item.seriales.join(' ') : (item.serial || ''),
                        item.observaciones || ''
                    ].join(' '));

                    // Buscar también en componentes y trackear cuál coincidió
                    let matchedComp = null;
                    if (!haystack.includes(term) && Array.isArray(item.componentes)) {
                        matchedComp = item.componentes.find(c =>
                            _norm(`${c.descripcion || ''} ${c.serial || ''}`).includes(term)
                        ) || null;
                    }

                    if (haystack.includes(term) || matchedComp) {
                        results.push({ area, areaIdx, item, itemIdx, matchedComp });
                    }
                });
            });

            if (countEl) countEl.textContent = `${results.length} ítem${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`;

            // Eliminar resultados anteriores
            const old = document.getElementById('inv-search-results');
            if (old) old.remove();

            const container = document.getElementById('inv-areas-container');

            if (results.length === 0) {
                const empty = document.createElement('div');
                empty.id = 'inv-search-results';
                empty.innerHTML = `<div class="inv-empty"><div class="inv-empty-icon">🔍</div><p>No se encontraron ítems con "<strong>${e.target.value}</strong>"</p></div>`;
                container.appendChild(empty);
                return;
            }

            const rows = results.map(({ area, areaIdx, item, itemIdx, matchedComp }) => {
                const serial = Array.isArray(item.seriales) ? item.seriales.filter(Boolean).join(', ') : (item.serial || '—');
                const estadoColor = item.estado === 'Bueno' || item.estado === 'Nuevo' ? '#16a34a' :
                                    item.estado === 'Regular' ? '#ca8a04' :
                                    item.estado === 'Malo' || item.estado === 'Dado de baja' ? '#dc2626' : '#64748b';
                const estadoBg   = item.estado === 'Bueno' || item.estado === 'Nuevo' ? '#dcfce7' :
                                    item.estado === 'Regular' ? '#fef9c3' :
                                    item.estado === 'Malo' || item.estado === 'Dado de baja' ? '#fee2e2' : '#f1f5f9';
                const _compTag = matchedComp ? `<div style="margin-top:3px;font-size:0.72rem;color:#94a3b8;">🔧 vía componente: <span style="color:#475569;font-weight:600;">${matchedComp.descripcion || ''}${matchedComp.serial ? ' · <code style="font-size:0.7rem;background:#f1f5f9;padding:1px 4px;border-radius:3px;">' + matchedComp.serial + '</code>' : ''}</span></div>` : '';
                return `<tr style="border-bottom:1px solid #f1f5f9;cursor:pointer;" onclick="window.openEditInventoryItem('${sedeActiva}','${tabActivo}',${areaIdx},${itemIdx})">
                    <td style="padding:8px 14px;white-space:nowrap;">
                        <a style="font-weight:700;color:var(--primary);font-size:0.8rem;font-family:monospace;cursor:pointer;" onclick="event.stopPropagation();window.openEditInventoryItem('${sedeActiva}','${tabActivo}',${areaIdx},${itemIdx})">${item.id}</a>
                    </td>
                    <td style="padding:8px 14px;font-size:0.82rem;color:#1e293b;font-weight:600;">${titleCase(item.nombre)}${_compTag}</td>
                    <td style="padding:8px 14px;white-space:nowrap;">
                        <span style="font-size:0.72rem;font-weight:700;padding:2px 10px;border-radius:10px;background:${estadoBg};color:${estadoColor};">${item.estado || '—'}</span>
                    </td>
                    <td style="padding:8px 14px;font-size:0.78rem;color:#475569;white-space:nowrap;">${area.area}</td>
                    <td style="padding:8px 14px;font-size:0.78rem;color:#64748b;white-space:nowrap;">${item.cantidad ?? '—'}</td>
                    <td style="padding:8px 14px;font-size:0.75rem;color:#94a3b8;white-space:nowrap;">${serial}</td>
                    <td style="padding:8px 14px;font-size:0.78rem;color:#64748b;white-space:nowrap;">${titleCase(item.responsable || area.responsable || '—')}</td>
                </tr>`;
            }).join('');

            const wrap = document.createElement('div');
            wrap.id = 'inv-search-results';
            wrap.innerHTML = `
                <div style="overflow-x:auto;border-radius:10px;border:1px solid #e2e8f0;">
                    <table style="width:100%;border-collapse:collapse;font-family:inherit;">
                        <thead>
                            <tr style="background:#f8fafc;border-bottom:2px solid #e2e8f0;">
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;white-space:nowrap;">ID</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Descripción</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Estado</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Área</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:center;">Cant.</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">N° Serie</th>
                                <th style="padding:8px 14px;font-size:0.72rem;color:#64748b;font-weight:700;text-align:left;">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>`;
            container.appendChild(wrap);
        });

        // Disparar búsqueda si ya había término guardado
        if (window._invSearchTerm) searchInput.dispatchEvent(new Event('input'));
    }
}

// ─── Ir directamente al área desde resultado de búsqueda ───
window._invSearchGoToArea = (sedeKey, tab, areaIdx) => {
    // Limpiar búsqueda
    window._invSearchTerm = '';
    const input = document.getElementById('inv-search');
    if (input) input.value = '';
    // Restaurar grid y abrir el área
    const grid = document.getElementById('inv-grid');
    const searchResults = document.getElementById('inv-search-results');
    if (grid) grid.style.display = '';
    if (searchResults) searchResults.remove();
    const countEl = document.querySelector('.inv-results-count');
    const sede = INVENTORY_DB[sedeKey];
    const areas = sede[tab] || [];
    let total = 0; areas.forEach(a => total += (a.items||[]).length);
    if (countEl) countEl.textContent = `${total} ítems en ${areas.length} áreas`;
    // Hacer click en la tarjeta correcta
    setTimeout(() => {
        const card = document.querySelector(`.inv-grid-card[data-idx="${areaIdx}"]`);
        if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); card.click(); }
    }, 50);
};

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

    // Guardar contexto para acciones masivas
    window._bulkContext = { sedeKey, tab, areaIdx };

    const sede = INVENTORY_DB[sedeKey];
    const area = sede[tab][areaIdx];
    const tabActivo = tab;
    const totalQty = area.items.reduce((s, it) => s + (it.cantidad || 0), 0);
    // Calcular alertas
    let uMalas = 0, uRegular = 0;
    area.items.forEach(it => {
        if (Array.isArray(it.serialesEstado)) {
            it.serialesEstado.forEach(e => {
                if (e === 'Malo' || e === 'Dado de baja') uMalas++;
                else if (e === 'Regular') uRegular++;
            });
        } else if (it.estado === 'Malo' || it.estado === 'Dado de baja') uMalas += (it.cantidad || 1);
        else if (it.estado === 'Regular') uRegular += (it.cantidad || 1);
    });
    const alertaSummary = uMalas > 0
        ? `<span class="inv-alerta-pill inv-alerta-red">🔴 ${uMalas} unidad${uMalas > 1 ? 'es' : ''} en mal estado</span>`
        : uRegular > 0
        ? `<span class="inv-alerta-pill inv-alerta-yellow">🟡 ${uRegular} unidad${uRegular > 1 ? 'es' : ''} en estado regular</span>`
        : '';

    panel.innerHTML = `
        <div class="inv-detail-header">
            <div class="inv-detail-info">
                ${area.codigoArea ? '<span class="inv-area-code">' + area.codigoArea + '</span>' : ''}
                <strong id="inv-area-name-display">${area.area}</strong>
                <button class="inv-edit-area-btn" onclick="event.stopPropagation(); window.editAreaName('${sedeKey}','${tab}',${areaIdx})" title="Editar nombre del área">✏️</button>
                <span class="inv-area-badge">${(area.items || []).length} ítems</span>
                <span class="inv-area-badge" style="background:#dcfce7;color:#16a34a;">${totalQty} uds.</span>
                ${area.responsable ? '<span class="inv-area-responsible">👤 ' + area.responsable + '</span>' : ''}
            </div>
            <div class="inv-detail-actions">
                <button class="inv-add-item-btn" onclick="event.stopPropagation(); window.openInventoryItemForm('${sedeKey}','${tab}',null,null,'${area.area}')" title="Agregar ítem a esta área">➕ Agregar Ítem</button>
                ${tab === 'inventario' ? `<button class="inv-merge-area-btn" onclick="event.stopPropagation(); window.openMergeArea('${sedeKey}',${areaIdx})" title="Fusionar esta área con otra">⇄ Fusionar</button>` : ''}
                <button class="inv-pdf-btn" onclick="event.stopPropagation(); window.exportAreaPDF('${sedeKey}','${tab}',${areaIdx})" title="Exportar PDF">📄 PDF</button>
                <button class="inv-detail-close" onclick="document.getElementById('inv-detail-panel').style.display='none'; document.querySelectorAll('.inv-grid-card.active').forEach(c=>c.classList.remove('active'))">✕</button>
            </div>
        </div>
        <div style="padding:8px 16px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;gap:8px;background:#fafbfc;">
            <span style="font-size:0.72rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.4px;">Filtrar:</span>
            <select id="inv-estado-filter" class="inv-filter-select" onchange="window._filterTableByEstado(this.value)">
                <option value="all">Todos los estados</option>
                <option value="Bueno">✅ Bueno</option>
                <option value="Regular">🟡 Regular</option>
                <option value="Malo">🔴 Malo</option>
                <option value="Nuevo">🔵 Nuevo</option>
                <option value="Dado de baja">⚫ Dado de baja</option>
                <option value="Pendiente">🟠 Pendiente</option>
            </select>
            ${uMalas > 0 || uRegular > 0 ? `` : ''}
        </div>
        <div id="inv-bulk-bar" style="display:none;padding:8px 16px;background:#eff6ff;border-bottom:1px solid #bfdbfe;flex-wrap:wrap;align-items:center;gap:10px;"></div>
        <div class="table-scroll">
            <table class="inv-table" id="inv-detail-table">
                <thead>
                    <tr>
                        <th style="width:10px;padding:0;"></th>
                        ${tabActivo === 'inventario' ? '<th style="width:20px;text-align:center;padding:6px 2px;"><input type="checkbox" id="inv-select-all" title="Seleccionar todos"></th>' : ''}
                        <th style="width:72px;">ID</th>
                        <th>Descripción del Activo</th>
                        <th style="width:92px;">N° Serie</th>
                        <th style="width:34px;text-align:center;">Cant.</th>
                        <th style="width:60px;">Estado</th>
                        <th style="width:88px;">Responsable</th>
                        ${tabActivo === 'inventario' ? '<th style="width:86px;">F. Compra</th><th style="width:42px;text-align:center;">Act.<br>Cont.</th><th style="width:42px;text-align:center;">No<br>Cont.</th>' : ''}
                        ${tabActivo === 'depuracion' ? '<th style="width:82px;">F. Retiro</th><th>Motivo</th><th style="width:100px;">Registrado</th><th style="width:76px;">F. Reg.</th>' : ''}
                        ${tabActivo === 'adiciones' ? '<th style="width:82px;">F. Compra</th><th>Proveedor</th><th style="width:82px;">Valor</th><th style="width:54px;">O.C.</th><th style="width:100px;">Registrado</th><th style="width:76px;">F. Reg.</th>' : ''}
                        <th style="width:62px;text-align:center;">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    ${area.items.map((item, itemIdx) => {
                        const _ests = Array.isArray(item.serialesEstado) ? item.serialesEstado : [];
                        const _estad = item.estado || '';
                        const _esMalo = _ests.some(e => e === 'Malo' || e === 'Dado de baja') || _estad === 'Malo' || _estad === 'Dado de baja';
                        const _esReg  = !_esMalo && (_ests.some(e => e === 'Regular') || _estad === 'Regular');
                        const _rowAlert = _esMalo
                            ? `<span class="inv-row-alert inv-row-alert-red" title="Tiene unidades en mal estado">&#9888;</span>`
                            : _esReg
                            ? `<span class="inv-row-alert inv-row-alert-yellow" title="Tiene unidades en estado regular">&#9888;</span>`
                            : '';
                        return `
                        <tr class="inv-item-row inv-item-row-clickable" data-estado="${item.estado || ''}" data-item-idx="${itemIdx}" draggable="true" ondragstart="window._invDragStart(event,'${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" ondragover="window._invDragOver(event)" ondragleave="window._invDragLeave(event)" ondrop="window._invDragDrop(event,'${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" ondragend="window._invDragEnd(event)" onclick="(function(e){if(e.target.closest('button,input,a'))return;window.openEditInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx});})(event)" style="cursor:pointer;">
                            <td style="width:20px;text-align:center;cursor:grab;color:#cbd5e1;font-size:1rem;user-select:none;padding:0 4px;" title="Arrastrar para reordenar" onclick="event.stopPropagation()">⠿</td>
                            ${tabActivo === 'inventario' ? `<td style="text-align:center;"><input type="checkbox" class="inv-item-cb" data-item-idx="${itemIdx}"></td>` : ''}
                            <td style="white-space:nowrap;">${_rowAlert}${tabActivo === 'inventario' && item.componentes && item.componentes.length > 0 ? `<button class="inv-btn-expand-comp" onclick="event.stopPropagation();window.toggleInventoryComponents(this,'inv-comprow-${sedeKey}-${areaIdx}-${itemIdx}')" title="${item.componentes.length} componente(s)" data-expanded="false" style="background:none;border:none;cursor:pointer;font-size:0.85rem;padding:0 3px 0 0;color:#16a34a;font-weight:700;line-height:1;">⊕</button>` : ''}<code class="inv-id">${item.id}</code></td>
                            <td style="max-width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${(item.nombre||'').toUpperCase()}">${(item.nombre||'').toUpperCase()}</td>
                            <td style="font-size:0.72rem;color:#475569;">${(function(sers){ if(sers.length===0) return '<span style="color:#cbd5e1;">\u2014</span>'; return sers.map(function(s){ return '<code style="font-size:0.71rem;background:#f1f5f9;padding:1px 4px;border-radius:4px;display:inline-block;margin:1px 1px 1px 0;">' + s + '</code>'; }).join(''); })(Array.isArray(item.seriales) ? item.seriales.filter(Boolean) : (item.serial ? [item.serial] : []))}</td>
                            <td style="text-align:center;">${item.cantidad}</td>
                            <td><span class="inv-estado inv-estado-${(item.estado || '').toLowerCase().replace(/\s+/g, '-')}">${item.estado}</span></td>
                            <td style="font-size:0.75rem;color:var(--text-main);max-width:88px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${item.responsable || area.responsable || ''}">${titleCase(item.responsable || area.responsable || '—')}</td>
                            ${tabActivo === 'inventario' ? `<td style="white-space:nowrap;">${fmtFechaCompra(item.fechaCompra)}</td><td style="text-align:center;">${['X','Sí','Si','SI','si','sí','1',true].includes(item.activoContable) ? '<span style="color:#16a34a;font-size:1.1rem;">✅</span>' : ['NO','No','no'].includes(item.activoContable) ? '<span style="color:#ef4444;font-size:1.1rem;">❌</span>' : '—'}</td><td style="text-align:center;">${['X','Sí','Si','SI','si','sí','1',true].includes(item.activoNoContable) ? '<span style="color:#16a34a;font-size:1.1rem;">✅</span>' : ['NO','No','no'].includes(item.activoNoContable) ? '<span style="color:#ef4444;font-size:1.1rem;">❌</span>' : '—'}</td>` : ''}
                            ${tabActivo === 'depuracion' ? `<td>${item.fechaRetiro || '—'}</td><td>${item.motivo || '—'}</td><td style="font-size:0.75rem;color:#475569;">${item.registradoPor || '—'}</td><td style="font-size:0.75rem;color:#475569;white-space:nowrap;">${item.fechaRegistro ? new Date(item.fechaRegistro).toLocaleDateString('es-CO') : '—'}${item.ultimaEdicion ? '<br><span style="color:#94a3b8;font-size:0.7rem;">✏️ ' + item.ultimaEdicion.split('@')[0] + '</span>' : ''}</td>` : ''}
                            ${tabActivo === 'adiciones' ? `<td style="white-space:nowrap;">${fmtFechaCompra(item.fechaCompra)}</td><td>${item.proveedor || '—'}</td><td>${item.valor ? formatCOP(item.valor) : '—'}</td><td>${item.ordenCompra ? '<code>' + item.ordenCompra + '</code>' : '—'}</td><td style="font-size:0.75rem;color:#475569;">${item.registradoPor || '—'}</td><td style="font-size:0.75rem;color:#475569;white-space:nowrap;">${item.fechaRegistro ? new Date(item.fechaRegistro).toLocaleDateString('es-CO') : '—'}${item.ultimaEdicion ? '<br><span style="color:#94a3b8;font-size:0.7rem;">✏️ ' + item.ultimaEdicion.split('@')[0] + '</span>' : ''}</td>` : ''}
                            <td style="text-align:center;white-space:nowrap;" onclick="event.stopPropagation()">
                                ${tabActivo === 'inventario' ? `<button class="inv-btn-transfer" onclick="window.openTransferItem('${sedeKey}',${areaIdx},${itemIdx})" title="Trasladar a otra área">🔀</button>${item.componentes && item.componentes.length > 0 ? '' : `<button class="inv-btn-vincular" onclick="window.abrirVincularComponente('${sedeKey}',${areaIdx},${itemIdx})" title="Vincular como componente de otro equipo">🔗</button>`}` : ''}<button class="prov-btn-delete" onclick="window.deleteInventoryItem('${sedeKey}','${tabActivo}',${areaIdx},${itemIdx})" title="Eliminar">🗑️</button>
                            </td>
                        </tr>
                        ${tabActivo === 'inventario' && item.componentes && item.componentes.length > 0 ? `
                        <tr id="inv-comprow-${sedeKey}-${areaIdx}-${itemIdx}" class="inv-comp-expanded-row" style="display:none;">
                            <td colspan="11" style="padding:0 0 0 52px;background:#f8fafc;">
                                <table class="inv-comp-inner-table">
                                    <thead><tr>
                                        <th>Componente</th><th>N° Serie</th><th>Estado</th><th style="width:130px;text-align:center;">Acción</th>
                                    </tr></thead>
                                    <tbody>
                                        ${item.componentes.map((c, ci) => `
                                        <tr>
                                            <td>${c.descripcion || '—'}</td>
                                            <td>${c.serial ? `<code style="font-size:0.72rem;background:#f1f5f9;padding:1px 5px;border-radius:4px;">${c.serial}</code>` : '—'}</td>
                                            <td><span class="inv-estado inv-estado-${(c.estado||'bueno').toLowerCase().replace(/\s+/g,'-')}">${c.estado||'Bueno'}</span></td>
                                            <td style="text-align:center;"><button class="inv-comp-desvincular-btn" onclick="window.desvincularComponente('${sedeKey}',${areaIdx},${itemIdx},${ci})" title="Convertir en ítem independiente">🔓 Desvincular</button></td>
                                        </tr>`).join('')}
                                    </tbody>
                                </table>
                            </td>
                        </tr>` : ''}
                    `; }).join('')}
                </tbody>
            </table>
        </div>
    `;

    // ─── Insertar barra de acciones masivas (evita problemas con template literals anidados) ───
    if (tabActivo === 'inventario') {
        const bulkBar = panel.querySelector('#inv-bulk-bar');
        if (bulkBar) {
            bulkBar.innerHTML = `
                <span id="inv-bulk-count" style="font-weight:700;color:#1e40af;font-size:0.82rem;">0 ítems seleccionados</span>
                <button onclick="window.bulkMarkInventory('contable')" style="background:#16a34a;color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:0.8rem;cursor:pointer;font-weight:600;">&#10003; Activo Contable</button>
                <button onclick="window.bulkMarkInventory('nocontable')" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:0.8rem;cursor:pointer;font-weight:600;">&#128230; Activo No Contable</button>
                <button onclick="window.bulkMarkInventory('limpiar')" style="background:#ef4444;color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:0.8rem;cursor:pointer;font-weight:600;">&#10006; Limpiar marcas</button>
                <button onclick="window.clearBulkSelection()" style="margin-left:auto;background:#f1f5f9;color:#475569;border:1px solid #cbd5e1;border-radius:6px;padding:5px 12px;font-size:0.8rem;cursor:pointer;">Cancelar</button>
            `;
        }

        // ─── Event delegation: remover listener anterior y agregar uno nuevo ───
        // IMPORTANTE: usar función nombrada para poder eliminarla antes de agregar la nueva
        if (panel._bulkChangeHandler) {
            panel.removeEventListener('change', panel._bulkChangeHandler);
        }
        panel._bulkChangeHandler = function(e) {
            if (e.target.id === 'inv-select-all') {
                panel.querySelectorAll('.inv-item-cb').forEach(cb => { cb.checked = e.target.checked; });
            }
            if (e.target.classList.contains('inv-item-cb') || e.target.id === 'inv-select-all') {
                const bar = panel.querySelector('#inv-bulk-bar');
                const countEl = panel.querySelector('#inv-bulk-count');
                const checked = panel.querySelectorAll('.inv-item-cb:checked');
                const total = panel.querySelectorAll('.inv-item-cb').length;
                if (!bar) return;
                if (checked.length > 0) {
                    bar.style.display = 'flex';
                    if (countEl) countEl.textContent = checked.length + ' de ' + total + ' ítem' + (checked.length !== 1 ? 's' : '') + ' seleccionado' + (checked.length !== 1 ? 's' : '');
                } else {
                    bar.style.display = 'none';
                }
                const selectAll = panel.querySelector('#inv-select-all');
                if (selectAll && e.target.id !== 'inv-select-all') {
                    selectAll.checked = checked.length === total && total > 0;
                }
            }
        };
        panel.addEventListener('change', panel._bulkChangeHandler);
    }

    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'auto', block: 'nearest' });
};

// ─── Selección masiva: actualizar barra de acciones ───
window.updateBulkBar = () => {
    const detailPanel = document.getElementById('inv-detail-panel');
    if (!detailPanel) return;
    const bar = detailPanel.querySelector('#inv-bulk-bar');
    const countEl = detailPanel.querySelector('#inv-bulk-count');
    const checked = detailPanel.querySelectorAll('.inv-item-cb:checked');
    const total = detailPanel.querySelectorAll('.inv-item-cb').length;
    if (!bar) return;
    if (checked.length > 0) {
        bar.style.display = 'flex';
        if (countEl) countEl.textContent = checked.length + ' de ' + total + ' ítem' + (checked.length !== 1 ? 's' : '') + ' seleccionado' + (checked.length !== 1 ? 's' : '');
    } else {
        bar.style.display = 'none';
    }
    // Sincronizar el "seleccionar todos"
    const selectAll = detailPanel.querySelector('#inv-select-all');
    if (selectAll) selectAll.checked = checked.length === total && total > 0;
};

// ─── Selección masiva: seleccionar / deseleccionar todos ───
window.toggleBulkSelectAll = (checked) => {
    const detailPanel = document.getElementById('inv-detail-panel');
    if (!detailPanel) return;
    detailPanel.querySelectorAll('.inv-item-cb').forEach(cb => { cb.checked = checked; });
    window.updateBulkBar();
};

// ─── Selección masiva: limpiar selección ───
window.clearBulkSelection = () => {
    const detailPanel = document.getElementById('inv-detail-panel');
    if (!detailPanel) return;
    detailPanel.querySelectorAll('.inv-item-cb').forEach(cb => { cb.checked = false; });
    const selectAll = detailPanel.querySelector('#inv-select-all');
    if (selectAll) selectAll.checked = false;
    const bar = detailPanel.querySelector('#inv-bulk-bar');
    if (bar) bar.style.display = 'none';
};

// ─── Selección masiva: aplicar marcado a los ítems seleccionados ───
window.bulkMarkInventory = (tipo) => {
    const ctx = window._bulkContext;
    if (!ctx) return;
    const detailPanel = document.getElementById('inv-detail-panel');
    const checked = detailPanel ? detailPanel.querySelectorAll('.inv-item-cb:checked') : document.querySelectorAll('.inv-item-cb:checked');
    if (checked.length === 0) { showToast('Sin selección', 'Selecciona al menos un ítem.', 'warning'); return; }

    const area = INVENTORY_DB[ctx.sedeKey][ctx.tab][ctx.areaIdx];
    const indices = Array.from(checked).map(cb => parseInt(cb.dataset.itemIdx));

    indices.forEach(idx => {
        const item = area.items[idx];
        if (!item) return;
        if (tipo === 'contable') {
            item.activoContable = 'X';
            item.activoNoContable = '';
        } else if (tipo === 'nocontable') {
            item.activoContable = '';
            item.activoNoContable = 'X';
        } else if (tipo === 'ambos') {
            item.activoContable = 'X';
            item.activoNoContable = 'X';
        } else if (tipo === 'limpiar') {
            item.activoContable = '';
            item.activoNoContable = '';
        }
    });

    saveInventory();
    const labels = { contable: 'Activo Contable', nocontable: 'Activo No Contable', limpiar: 'marcas limpiadas' };
    showToast('✅ Actualizado', `${indices.length} ítem${indices.length !== 1 ? 's' : ''} marcado${indices.length !== 1 ? 's' : ''} como ${labels[tipo] || tipo}.`, 'success');

    // Actualizar solo las celdas afectadas (sin cerrar el panel)
    const YES = '<span style="color:#16a34a;font-size:1.1rem;">✅</span>';
    const NO  = '—';
    indices.forEach(idx => {
        const item = area.items[idx];
        const row = detailPanel ? detailPanel.querySelector(`tr[data-item-idx="${idx}"]`) : null;
        if (!row || !item) return;
        const cells = row.querySelectorAll('td');
        // checkbox(0), id(1), nombre(2), cant(3), estado(4), responsable(5), fechaCompra(6), contable(7), noContable(8)
        const contableCell   = cells[7];
        const noContableCell = cells[8];
        const isContable   = ['X','Sí','Si','SI','si','sí','1',true].includes(item.activoContable);
        const isNoContable = ['X','Sí','Si','SI','si','sí','1',true].includes(item.activoNoContable);
        if (contableCell)   contableCell.innerHTML   = `<div style="text-align:center">${isContable   ? YES : NO}</div>`;
        if (noContableCell) noContableCell.innerHTML = `<div style="text-align:center">${isNoContable ? YES : NO}</div>`;
        const cb = row.querySelector('.inv-item-cb');
        if (cb) cb.checked = false;
    });

    // Limpiar selección y ocultar barra
    window.clearBulkSelection();
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
        head = [['#', 'Codigo', 'Descripcion del Activo', 'Cant.', 'Estado General', 'Detalle por Unidad', 'F. Compra', 'Act. Contable', 'Act. No Contable', 'Observaciones']];
        body = area.items.map((item, i) => {
            const sers = Array.isArray(item.seriales) ? item.seriales : (item.serial ? [item.serial] : []);
            const ests = Array.isArray(item.serialesEstado) ? item.serialesEstado : [];
            let detalle = '';
            if (sers.filter(Boolean).length > 0) {
                detalle = sers.map((s, idx) => {
                    const est = ests[idx] || 'Bueno';
                    const sLabel = s ? s : '(sin serial)';
                    return `U${idx+1}: ${sLabel} — ${est}`;
                }).join('\n');
            } else if (ests.filter(e => e && e !== 'Bueno').length > 0) {
                detalle = ests.map((e, idx) => `U${idx+1}: ${e || 'Bueno'}`).join('\n');
            }
            return [
                String(i + 1),
                item.id,
                titleCase(item.nombre),
                String(item.cantidad),
                item.estado || 'Bueno',
                detalle || '—',
                item.fechaCompra || '',
                item.activoContable ? 'Sí' : '',
                item.activoNoContable ? 'Sí' : '',
                item.observaciones || ''
            ];
        });
        colStyles = {
            0: { halign: 'center', cellWidth: 8 },
            1: { halign: 'center', cellWidth: 16, font: 'courier', fontSize: 5.5 },
            2: { cellWidth: 'auto' },
            3: { halign: 'center', cellWidth: 10 },
            4: { cellWidth: 14 },
            5: { cellWidth: 28, fontSize: 5.5 },
            6: { cellWidth: 15, fontSize: 5.5 },
            7: { halign: 'center', cellWidth: 13, fontSize: 5.5 },
            8: { halign: 'center', cellWidth: 15, fontSize: 5.5 },
            9: { cellWidth: 20, fontSize: 5.5 }
        };
    } else if (tab === 'depuracion') {
        head = [['#', 'Codigo', 'Descripcion', 'Cant.', 'Estado', 'Detalle por Unidad', 'Fecha Retiro', 'Motivo']];
        body = area.items.map((item, i) => {
            const sers = Array.isArray(item.seriales) ? item.seriales : [];
            const ests = Array.isArray(item.serialesEstado) ? item.serialesEstado : [];
            let detalle = '';
            if (sers.filter(Boolean).length > 0) {
                detalle = sers.map((s, idx) => {
                    const est = ests[idx] || 'Bueno';
                    return `U${idx+1}: ${s || '(sin serial)'} — ${est}`;
                }).join('\n');
            }
            return [
                String(i + 1),
                item.id,
                titleCase(item.nombre),
                String(item.cantidad),
                item.estado || '',
                detalle || '—',
                item.fechaRetiro || '',
                item.motivo || ''
            ];
        });
        colStyles = {
            0: { halign: 'center', cellWidth: 10 },
            1: { halign: 'center', cellWidth: 18, font: 'courier', fontSize: 6 },
            2: { cellWidth: 'auto' },
            3: { halign: 'center', cellWidth: 11 },
            4: { cellWidth: 14 },
            5: { cellWidth: 28, fontSize: 5.5 }
        };
    } else {
        head = [['#', 'Codigo', 'Descripcion', 'Cant.', 'Detalle por Unidad', 'Fecha Compra', 'Proveedor', 'Valor']];
        body = area.items.map((item, i) => {
            const sers = Array.isArray(item.seriales) ? item.seriales : [];
            const ests = Array.isArray(item.serialesEstado) ? item.serialesEstado : [];
            let detalle = '';
            if (sers.filter(Boolean).length > 0) {
                detalle = sers.map((s, idx) => {
                    const est = ests[idx] || 'Bueno';
                    return `U${idx+1}: ${s || '(sin serial)'} — ${est}`;
                }).join('\n');
            }
            return [
                String(i + 1),
                item.id,
                titleCase(item.nombre),
                String(item.cantidad),
                detalle || '—',
                item.fechaCompra || '',
                item.proveedor || '',
                item.valor ? '$' + Number(item.valor).toLocaleString('es-CO') : ''
            ];
        });
        colStyles = {
            0: { halign: 'center', cellWidth: 10 },
            1: { halign: 'center', cellWidth: 18, font: 'courier', fontSize: 6 },
            2: { cellWidth: 'auto' },
            3: { halign: 'center', cellWidth: 11 },
            4: { cellWidth: 30, fontSize: 5.5 },
            5: { cellWidth: 16, fontSize: 5.5 },
            6: { cellWidth: 20, fontSize: 5.5 },
            7: { cellWidth: 18, fontSize: 5.5 }
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
        didParseCell: (data) => {
            // Colorear celda Estado General (col 4) según valor
            if (data.section === 'body' && data.column.index === 4) {
                const val = data.cell.raw;
                if (val === 'Bueno' || val === 'Nuevo')      { data.cell.styles.textColor = [22, 163, 74];  data.cell.styles.fillColor = [240, 253, 244]; }
                else if (val === 'Regular')                   { data.cell.styles.textColor = [202, 138, 4];  data.cell.styles.fillColor = [254, 252, 232]; }
                else if (val === 'Malo')                      { data.cell.styles.textColor = [220, 38, 38];  data.cell.styles.fillColor = [254, 242, 242]; }
                else if (val === 'Dado de baja')              { data.cell.styles.textColor = [100, 116, 139]; data.cell.styles.fillColor = [241, 245, 249]; }
            }
        },
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

// ─── Informe General PDF (todas las áreas de una sede) ────────────────────────
window.exportGeneralPDF = (sedeKey, tab) => {
    const { jsPDF } = window.jspdf;
    if (!jsPDF) { showToast('Error', 'La librería jsPDF no está disponible.', 'error'); return; }

    const sede = INVENTORY_DB[sedeKey];
    const areas = sede[tab] || [];
    if (!areas.length) { showToast('Aviso', 'No hay áreas con datos para exportar.', 'info'); return; }

    const doc = new jsPDF('l', 'mm', 'letter');
    const pageW  = doc.internal.pageSize.getWidth();
    const pageH  = doc.internal.pageSize.getHeight();
    const margin = 12;
    const contentW = pageW - margin * 2;
    const fechaHoy  = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'long', year: 'numeric' });
    const anioHoy   = new Date().getFullYear();
    const tabLabels = { inventario: 'INVENTARIO ACTIVO', depuracion: 'DEPURACION', adiciones: 'ADICIONES' };
    const sedeNombres = { CTH: 'Colegio Theodoro Herzl', ENC: 'Centro Infantil El Encuentro', UIB: 'UIB - Oficinas Administrativas' };
    const sedeNombre  = sedeNombres[sedeKey] || sede.nombre;

    // ── Paleta de colores ──
    const azulOscuro  = [12, 40, 80];
    const azulMedio   = [12, 132, 255];
    const grisClaro   = [241, 245, 249];
    const grisTexto   = [51, 65, 85];
    const verde       = [22, 163, 74];
    const amarillo    = [202, 138, 4];
    const rojo        = [220, 38, 38];
    const grisApagado = [100, 116, 139];

    // ── Helpers ──
    const fmt = n => n > 0 ? '$' + Number(n).toLocaleString('es-CO') : '—';
    const _drawPageFooter = (label) => {
        doc.setFillColor(...azulOscuro);
        doc.rect(0, pageH - 10, pageW, 10, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.text('Union Israelita de Beneficencia — ' + (label || 'Inventario de Activos Fijos'), margin, pageH - 4);
        doc.text('Pag. ' + doc.internal.getCurrentPageInfo().pageNumber, pageW - margin, pageH - 4, { align: 'right' });
    };
    const _drawHeader = (subtitle) => {
        doc.setFillColor(...azulOscuro);
        doc.rect(0, 0, pageW, 22, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(13); doc.setFont('helvetica', 'bold');
        doc.text('UNION ISRAELITA DE BENEFICENCIA', margin, 10);
        doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
        doc.text(subtitle || 'Informe General de Inventario — Revisoria Fiscal', margin, 16);
        doc.text(fechaHoy, pageW - margin, 16, { align: 'right' });
        doc.setFillColor(...azulMedio);
        doc.rect(0, 22, pageW, 1, 'F');
    };

    // ── Totales globales ──
    const totalAreas  = areas.length;
    const totalItems  = areas.reduce((s, a) => s + a.items.length, 0);
    const totalUds    = areas.reduce((s, a) => s + a.items.reduce((ss, it) => ss + (it.cantidad || 0), 0), 0);
    const totalValor  = areas.reduce((s, a) => s + a.items.reduce((ss, it) => ss + (parseFloat(it.valor) || 0), 0), 0);
    const totalContable    = areas.reduce((s, a) => s + a.items.filter(it => ['X','Sí','Si','SI','si','sí','1',true].includes(it.activoContable)).length, 0);
    const totalNoContable  = areas.reduce((s, a) => s + a.items.filter(it => ['X','Sí','Si','SI','si','sí','1',true].includes(it.activoNoContable)).length, 0);
    let totalAlertas = 0;
    areas.forEach(a => a.items.forEach(it => {
        const ests = Array.isArray(it.serialesEstado) ? it.serialesEstado : [];
        if (ests.some(e => e === 'Malo' || e === 'Dado de baja') || it.estado === 'Malo' || it.estado === 'Dado de baja') totalAlertas++;
    }));

    // ══════════════════════════════════════════════════════════
    // PÁG 1 — PORTADA FORMAL
    // ══════════════════════════════════════════════════════════
    doc.setFillColor(...azulOscuro);
    doc.rect(0, 0, pageW, pageH, 'F');

    // Franja decorativa azul medio
    doc.setFillColor(...azulMedio);
    doc.rect(0, pageH * 0.38, pageW, 3, 'F');

    // Logo placeholder (estrella de David esquemática como rect)
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, 18, 22, 22, 3, 3, 'F');
    doc.setTextColor(...azulOscuro);
    doc.setFontSize(14); doc.setFont('helvetica', 'bold');
    doc.text('UIB', margin + 11, 32, { align: 'center' });

    // Nombre institución
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20); doc.setFont('helvetica', 'bold');
    doc.text('UNION ISRAELITA DE BENEFICENCIA', pageW / 2, 38, { align: 'center' });
    doc.setFontSize(9); doc.setFont('helvetica', 'normal');
    doc.setTextColor(180, 210, 255);
    doc.text('NIT: 860.007.759-5', pageW / 2, 46, { align: 'center' });

    // Título del documento
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26); doc.setFont('helvetica', 'bold');
    doc.text('INFORME DE INVENTARIO', pageW / 2, pageH * 0.32, { align: 'center' });
    doc.setFontSize(14); doc.setFont('helvetica', 'normal');
    doc.setTextColor(...azulMedio);
    doc.text('DE ACTIVOS FIJOS', pageW / 2, pageH * 0.32 + 10, { align: 'center' });

    // Subtítulo sede y categoría
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11); doc.setFont('helvetica', 'bold');
    doc.text(sedeNombre.toUpperCase(), pageW / 2, pageH * 0.32 + 22, { align: 'center' });
    doc.setFontSize(8.5); doc.setFont('helvetica', 'normal');
    doc.setTextColor(180, 210, 255);
    doc.text('Categoria: ' + (tabLabels[tab] || tab), pageW / 2, pageH * 0.32 + 30, { align: 'center' });

    // Período auditado
    doc.setFillColor(255, 255, 255);
    doc.setFillColor(20, 60, 110);
    doc.roundedRect(pageW / 2 - 55, pageH * 0.55, 110, 18, 3, 3, 'F');
    doc.setTextColor(180, 210, 255);
    doc.setFontSize(7); doc.setFont('helvetica', 'normal');
    doc.text('PERIODO AUDITADO', pageW / 2, pageH * 0.55 + 6, { align: 'center' });
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11); doc.setFont('helvetica', 'bold');
    doc.text('Año ' + anioHoy, pageW / 2, pageH * 0.55 + 14, { align: 'center' });

    // Fecha de generación
    doc.setTextColor(180, 210, 255);
    doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
    doc.text('Fecha de generacion: ' + fechaHoy, pageW / 2, pageH * 0.55 + 26, { align: 'center' });

    // Campos de firma en portada
    const firmaY = pageH * 0.72;
    const fw = 75;

    [[margin, 'ELABORADO POR', 'Responsable / Custodio'], [pageW / 2 - fw / 2, 'REVISADO POR', 'Revisor Fiscal'], [pageW - margin - fw, 'APROBADO POR', 'Representante Legal']].forEach(([fx, label, role]) => {
        doc.setDrawColor(100, 150, 220);
        doc.setLineWidth(0.4);
        doc.line(fx, firmaY + 16, fx + fw, firmaY + 16);
        doc.setTextColor(180, 210, 255);
        doc.setFontSize(7); doc.setFont('helvetica', 'bold');
        doc.text(label, fx + fw / 2, firmaY + 21, { align: 'center' });
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.text(role, fx + fw / 2, firmaY + 26, { align: 'center' });
        doc.text('Firma y No. de Cedula', fx + fw / 2, firmaY + 30, { align: 'center' });
    });

    // Pie portada
    doc.setFillColor(8, 28, 58);
    doc.rect(0, pageH - 14, pageW, 14, 'F');
    doc.setTextColor(120, 160, 220);
    doc.setFontSize(6.5); doc.setFont('helvetica', 'normal');
    doc.text('Documento generado electronicamente — Para uso exclusivo de Revisoria Fiscal', pageW / 2, pageH - 7, { align: 'center' });
    doc.text('Union Israelita de Beneficencia — ' + fechaHoy, pageW / 2, pageH - 3, { align: 'center' });

    // ══════════════════════════════════════════════════════════
    // PÁG 2 — ESTADÍSTICAS GENERALES + RESUMEN POR ÁREA
    // ══════════════════════════════════════════════════════════
    doc.addPage();
    _drawHeader('Resumen General — ' + sedeNombre + ' · ' + (tabLabels[tab] || tab));
    let y = 28;

    // Bloque info sede
    doc.setFillColor(...grisClaro);
    doc.roundedRect(margin, y, contentW, 12, 2, 2, 'F');
    doc.setTextColor(...azulOscuro);
    doc.setFontSize(9); doc.setFont('helvetica', 'bold');
    doc.text(sedeNombre, margin + 4, y + 5);
    doc.setFontSize(7); doc.setFont('helvetica', 'normal');
    doc.setTextColor(...grisTexto);
    doc.text('NIT: 860.007.759-5  ·  Categoria: ' + (tabLabels[tab] || tab) + '  ·  Periodo: ' + anioHoy, margin + 4, y + 10);
    y += 16;

    // KPIs — fila 1
    const kpiW = (contentW - 12) / 5;
    const kpis1 = [
        { label: 'Areas',        value: totalAreas,                     color: azulMedio },
        { label: 'Items totales', value: totalItems,                    color: [16, 185, 129] },
        { label: 'Unidades',     value: totalUds,                      color: [139, 92, 246] },
        { label: 'Acti. Contables', value: totalContable,              color: [14, 116, 144] },
        { label: 'Con alertas',  value: totalAlertas, color: totalAlertas > 0 ? rojo : [156, 163, 175] }
    ];
    kpis1.forEach((k, i) => {
        const kx = margin + i * (kpiW + 3);
        doc.setFillColor(...k.color);
        doc.roundedRect(kx, y, kpiW, 14, 2, 2, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14); doc.setFont('helvetica', 'bold');
        doc.text(String(k.value), kx + kpiW / 2, y + 8.5, { align: 'center' });
        doc.setFontSize(5); doc.setFont('helvetica', 'normal');
        doc.text(k.label.toUpperCase(), kx + kpiW / 2, y + 12.5, { align: 'center' });
    });
    y += 18;

    // KPI valor total (si aplica)
    if (totalValor > 0) {
        doc.setFillColor(15, 118, 110);
        doc.roundedRect(margin, y, contentW, 10, 2, 2, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7); doc.setFont('helvetica', 'bold');
        doc.text('VALOR TOTAL REGISTRADO EN INVENTARIO:', margin + 4, y + 4);
        doc.setFontSize(9);
        doc.text(fmt(totalValor), margin + 90, y + 4);
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.setTextColor(180, 240, 230);
        doc.text('(Suma de valores registrados por ítem — verificar contra libros contables)', margin + 4, y + 8.5);
        y += 14;
    }

    // ── Tabla resumen por área ──
    const summaryHead = tab === 'inventario'
        ? [['Cod.', 'Area', 'Items', 'Uds.', 'Contable', 'No Cont.', 'Bueno', 'Regular', 'Malo', 'Baja', 'Valor', 'Responsable']]
        : tab === 'depuracion'
        ? [['Cod.', 'Area', 'Items', 'Uds.', 'Bueno', 'Regular', 'Malo', 'Dado de baja', 'Responsable']]
        : [['Cod.', 'Area', 'Items', 'Uds.', 'Valor Total', 'Responsable']];

    const summaryBody = areas.map(area => {
        let cBueno = 0, cRegular = 0, cMalo = 0, cBaja = 0;
        let cContable = 0, cNoContable = 0, valorArea = 0;
        area.items.forEach(it => {
            valorArea += parseFloat(it.valor) || 0;
            if (['X','Sí','Si','SI','si','sí','1',true].includes(it.activoContable))   cContable++;
            if (['X','Sí','Si','SI','si','sí','1',true].includes(it.activoNoContable)) cNoContable++;
            const ests = Array.isArray(it.serialesEstado) ? it.serialesEstado : [];
            if (ests.length > 0) {
                ests.forEach(e => {
                    if (e === 'Bueno' || e === 'Nuevo') cBueno++;
                    else if (e === 'Regular')            cRegular++;
                    else if (e === 'Malo')               cMalo++;
                    else if (e === 'Dado de baja')       cBaja++;
                    else                                 cBueno++;
                });
            } else {
                const e = it.estado || 'Bueno';
                const n = it.cantidad || 1;
                if (e === 'Bueno' || e === 'Nuevo')      cBueno   += n;
                else if (e === 'Regular')                 cRegular += n;
                else if (e === 'Malo')                    cMalo    += n;
                else if (e === 'Dado de baja')            cBaja    += n;
                else                                      cBueno   += n;
            }
        });
        const uds = area.items.reduce((s, it) => s + (it.cantidad || 0), 0);
        if (tab === 'inventario') {
            return [
                area.codigoArea || '—', area.area,
                String(area.items.length), String(uds),
                cContable   > 0 ? String(cContable)   : '—',
                cNoContable > 0 ? String(cNoContable) : '—',
                cBueno   > 0 ? String(cBueno)   : '—',
                cRegular > 0 ? String(cRegular)  : '—',
                cMalo    > 0 ? String(cMalo)     : '—',
                cBaja    > 0 ? String(cBaja)     : '—',
                valorArea > 0 ? fmt(valorArea)    : '—',
                area.responsable || '—'
            ];
        } else if (tab === 'depuracion') {
            return [
                area.codigoArea || '—', area.area,
                String(area.items.length), String(uds),
                cBueno   > 0 ? String(cBueno)   : '—',
                cRegular > 0 ? String(cRegular)  : '—',
                cMalo    > 0 ? String(cMalo)     : '—',
                cBaja    > 0 ? String(cBaja)     : '—',
                area.responsable || '—'
            ];
        } else {
            return [
                area.codigoArea || '—', area.area,
                String(area.items.length), String(uds),
                valorArea > 0 ? fmt(valorArea) : '—',
                area.responsable || '—'
            ];
        }
    });

    // Fila de totales
    if (tab === 'inventario') {
        summaryBody.push([
            '', 'TOTAL GENERAL',
            String(totalItems), String(totalUds),
            String(totalContable), String(totalNoContable),
            '—','—','—','—',
            totalValor > 0 ? fmt(totalValor) : '—',
            ''
        ]);
    }

    const invColStyles = {
        0: { halign: 'center', cellWidth: 13, font: 'courier', fontSize: 5.5 },
        1: { cellWidth: 'auto', fontStyle: 'bold' },
        2: { halign: 'center', cellWidth: 11 },
        3: { halign: 'center', cellWidth: 11 },
        4: { halign: 'center', cellWidth: 13 },
        5: { halign: 'center', cellWidth: 13 },
        6: { halign: 'center', cellWidth: 12 },
        7: { halign: 'center', cellWidth: 12 },
        8: { halign: 'center', cellWidth: 12 },
        9: { halign: 'center', cellWidth: 12 },
        10: { cellWidth: 22, fontSize: 5.5 },
        11: { cellWidth: 26, fontSize: 5.5 }
    };
    const depColStyles = {
        0: { halign: 'center', cellWidth: 14, font: 'courier', fontSize: 5.5 },
        1: { cellWidth: 'auto', fontStyle: 'bold' },
        2: { halign: 'center', cellWidth: 12 },
        3: { halign: 'center', cellWidth: 12 },
        4: { halign: 'center', cellWidth: 14 },
        5: { halign: 'center', cellWidth: 14 },
        6: { halign: 'center', cellWidth: 14 },
        7: { halign: 'center', cellWidth: 18 },
        8: { cellWidth: 30, fontSize: 5.5 }
    };
    const addColStyles = {
        0: { halign: 'center', cellWidth: 14, font: 'courier', fontSize: 5.5 },
        1: { cellWidth: 'auto', fontStyle: 'bold' },
        2: { halign: 'center', cellWidth: 12 },
        3: { halign: 'center', cellWidth: 12 },
        4: { cellWidth: 30 },
        5: { cellWidth: 35, fontSize: 5.5 }
    };
    const colStyles = tab === 'inventario' ? invColStyles : tab === 'depuracion' ? depColStyles : addColStyles;

    doc.autoTable({
        startY: y,
        head: summaryHead,
        body: summaryBody,
        margin: { left: margin, right: margin, bottom: 14 },
        styles: { fontSize: 6.2, cellPadding: 2, lineColor: [226, 232, 240], lineWidth: 0.2, textColor: grisTexto, overflow: 'linebreak', minCellHeight: 6 },
        headStyles: { fillColor: azulOscuro, textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 6.2, halign: 'center', cellPadding: 2.5 },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        columnStyles: colStyles,
        didParseCell: (data) => {
            if (data.section !== 'body') return;
            const col = data.column.index;
            const val = data.cell.raw;
            if (val === '—') return;
            if (tab === 'inventario') {
                if (col === 6) { data.cell.styles.textColor = verde;       data.cell.styles.fontStyle = 'bold'; }
                if (col === 7) { data.cell.styles.textColor = amarillo;    data.cell.styles.fontStyle = 'bold'; }
                if (col === 8) { data.cell.styles.textColor = rojo;        data.cell.styles.fontStyle = 'bold'; data.cell.styles.fillColor = [254, 242, 242]; }
                if (col === 9) { data.cell.styles.textColor = grisApagado; data.cell.styles.fontStyle = 'bold'; }
            } else if (tab === 'depuracion') {
                if (col === 4) { data.cell.styles.textColor = verde;       data.cell.styles.fontStyle = 'bold'; }
                if (col === 5) { data.cell.styles.textColor = amarillo;    data.cell.styles.fontStyle = 'bold'; }
                if (col === 6) { data.cell.styles.textColor = rojo;        data.cell.styles.fontStyle = 'bold'; data.cell.styles.fillColor = [254, 242, 242]; }
                if (col === 7) { data.cell.styles.textColor = grisApagado; data.cell.styles.fontStyle = 'bold'; }
            }
            // Fila TOTAL GENERAL
            if (data.row.index === summaryBody.length - 1 && tab === 'inventario') {
                data.cell.styles.fontStyle = 'bold';
                data.cell.styles.fillColor = [234, 240, 255];
                data.cell.styles.textColor = azulOscuro;
            }
        },
        didDrawPage: () => _drawPageFooter('Resumen General de Inventario')
    });

    // ══════════════════════════════════════════════════════════
    // PÁG 3 — DETALLE CONTABLE (solo tab inventario)
    // ══════════════════════════════════════════════════════════
    if (tab === 'inventario') {
        doc.addPage();
        _drawHeader('Detalle Contable — ' + sedeNombre);
        let cy = 28;

        doc.setFillColor(...grisClaro);
        doc.roundedRect(margin, cy, contentW, 10, 2, 2, 'F');
        doc.setTextColor(...azulOscuro);
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold');
        doc.text('ACTIVOS CONTABLES Y NO CONTABLES POR AREA', margin + 4, cy + 6.5);
        cy += 14;

        const contHead = [['Cod.', 'Area', 'ID Activo', 'Descripcion del Activo', 'Cant.', 'Estado', 'Contable', 'No Contable', 'Valor Unitario', 'Valor Total', 'Observaciones']];
        const contBody = [];
        areas.forEach(area => {
            area.items.forEach(it => {
                const esContable   = ['X','Sí','Si','SI','si','sí','1',true].includes(it.activoContable) ? 'Sí' : '—';
                const esNoContable = ['X','Sí','Si','SI','si','sí','1',true].includes(it.activoNoContable) ? 'Sí' : '—';
                const valorUnit = parseFloat(it.valor) || 0;
                const valorTot  = valorUnit * (it.cantidad || 1);
                contBody.push([
                    area.codigoArea || '—',
                    area.area,
                    it.id,
                    titleCase(it.nombre),
                    String(it.cantidad),
                    it.estado || '—',
                    esContable,
                    esNoContable,
                    valorUnit > 0 ? fmt(valorUnit) : '—',
                    valorTot  > 0 ? fmt(valorTot)  : '—',
                    it.observaciones || '—'
                ]);
            });
        });

        doc.autoTable({
            startY: cy,
            head: contHead,
            body: contBody,
            margin: { left: margin, right: margin, bottom: 14 },
            styles: { fontSize: 5.8, cellPadding: 1.8, lineColor: [226, 232, 240], lineWidth: 0.2, textColor: grisTexto, overflow: 'linebreak', minCellHeight: 5.5 },
            headStyles: { fillColor: [14, 116, 144], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 5.8, halign: 'center', cellPadding: 2.2 },
            alternateRowStyles: { fillColor: [248, 250, 252] },
            columnStyles: {
                0: { halign: 'center', cellWidth: 12, font: 'courier', fontSize: 5.2 },
                1: { cellWidth: 28, fontSize: 5.2 },
                2: { halign: 'center', cellWidth: 14, font: 'courier', fontSize: 5.2 },
                3: { cellWidth: 'auto' },
                4: { halign: 'center', cellWidth: 10 },
                5: { cellWidth: 13 },
                6: { halign: 'center', cellWidth: 13 },
                7: { halign: 'center', cellWidth: 14 },
                8: { cellWidth: 20, fontSize: 5.2 },
                9: { cellWidth: 22, fontSize: 5.2 },
                10: { cellWidth: 24, fontSize: 5.2 }
            },
            didParseCell: (data) => {
                if (data.section !== 'body') return;
                const col = data.column.index;
                const val = data.cell.raw;
                if (col === 6 && val === 'Sí') { data.cell.styles.textColor = verde;    data.cell.styles.fontStyle = 'bold'; }
                if (col === 7 && val === 'Sí') { data.cell.styles.textColor = amarillo; data.cell.styles.fontStyle = 'bold'; }
                if (col === 5) {
                    if (val === 'Malo')          { data.cell.styles.textColor = rojo;        data.cell.styles.fillColor = [254, 242, 242]; data.cell.styles.fontStyle = 'bold'; }
                    else if (val === 'Regular')   { data.cell.styles.textColor = amarillo;    data.cell.styles.fontStyle = 'bold'; }
                    else if (val === 'Bueno' || val === 'Nuevo') { data.cell.styles.textColor = verde; }
                }
            },
            didDrawPage: () => _drawPageFooter('Detalle Contable de Activos')
        });
    }

    // ══════════════════════════════════════════════════════════
    // PÁG — DEPURACIÓN CON MOTIVO (solo tab depuracion)
    // ══════════════════════════════════════════════════════════
    if (tab === 'depuracion') {
        doc.addPage();
        _drawHeader('Activos Depurados — ' + sedeNombre);
        let dy = 28;

        doc.setFillColor(254, 242, 242);
        doc.roundedRect(margin, dy, contentW, 10, 2, 2, 'F');
        doc.setTextColor(...rojo);
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold');
        doc.text('DETALLE DE ACTIVOS DADOS DE BAJA — MOTIVO Y TRAZABILIDAD', margin + 4, dy + 6.5);
        dy += 14;

        const depHead = [['Cod.', 'Area', 'ID', 'Descripcion', 'Cant.', 'Estado', 'Fecha Retiro', 'Motivo de Baja', 'Responsable']];
        const depBody = [];
        areas.forEach(area => {
            area.items.forEach(it => {
                depBody.push([
                    area.codigoArea || '—', area.area, it.id,
                    titleCase(it.nombre),
                    String(it.cantidad),
                    it.estado || '—',
                    it.fechaRetiro || '—',
                    it.motivo || '—',
                    area.responsable || '—'
                ]);
            });
        });

        doc.autoTable({
            startY: dy,
            head: depHead,
            body: depBody,
            margin: { left: margin, right: margin, bottom: 14 },
            styles: { fontSize: 6, cellPadding: 2, lineColor: [226, 232, 240], lineWidth: 0.2, textColor: grisTexto, overflow: 'linebreak', minCellHeight: 6 },
            headStyles: { fillColor: [185, 28, 28], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 6, halign: 'center', cellPadding: 2.5 },
            alternateRowStyles: { fillColor: [255, 251, 251] },
            columnStyles: {
                0: { halign: 'center', cellWidth: 12, font: 'courier', fontSize: 5.5 },
                1: { cellWidth: 28 },
                2: { halign: 'center', cellWidth: 15, font: 'courier', fontSize: 5.5 },
                3: { cellWidth: 'auto' },
                4: { halign: 'center', cellWidth: 10 },
                5: { cellWidth: 16 },
                6: { cellWidth: 18, fontSize: 5.5 },
                7: { cellWidth: 35, fontSize: 5.5 },
                8: { cellWidth: 28, fontSize: 5.5 }
            },
            didParseCell: (data) => {
                if (data.section !== 'body' || data.column.index !== 5) return;
                const v = data.cell.raw;
                if (v === 'Malo')         { data.cell.styles.textColor = rojo;        data.cell.styles.fillColor = [254, 242, 242]; data.cell.styles.fontStyle = 'bold'; }
                else if (v === 'Dado de baja') { data.cell.styles.textColor = grisApagado; data.cell.styles.fillColor = [241, 245, 249]; data.cell.styles.fontStyle = 'bold'; }
            },
            didDrawPage: () => _drawPageFooter('Detalle de Activos Depurados')
        });
    }

    // ══════════════════════════════════════════════════════════
    // PÁG — ADICIONES: detalle con proveedor y O.C. (tab adiciones)
    // ══════════════════════════════════════════════════════════
    if (tab === 'adiciones') {
        doc.addPage();
        _drawHeader('Adiciones de Activos — ' + sedeNombre);
        let ay2 = 28;

        doc.setFillColor(240, 253, 244);
        doc.roundedRect(margin, ay2, contentW, 10, 2, 2, 'F');
        doc.setTextColor(...verde);
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold');
        doc.text('DETALLE DE ADICIONES — TRAZABILIDAD DE COMPRAS', margin + 4, ay2 + 6.5);
        ay2 += 14;

        const addHead = [['Cod.', 'Area', 'ID', 'Descripcion', 'Cant.', 'F. Compra', 'Proveedor', 'Valor Unit.', 'Valor Total', 'Orden de Compra', 'Responsable']];
        const addBody = [];
        let valorAdiciones = 0;
        areas.forEach(area => {
            area.items.forEach(it => {
                const valorUnit = parseFloat(it.valor) || 0;
                const valorTot  = valorUnit * (it.cantidad || 1);
                valorAdiciones += valorTot;
                addBody.push([
                    area.codigoArea || '—', area.area, it.id,
                    titleCase(it.nombre),
                    String(it.cantidad),
                    it.fechaCompra || '—',
                    it.proveedor || '—',
                    valorUnit > 0 ? fmt(valorUnit) : '—',
                    valorTot  > 0 ? fmt(valorTot)  : '—',
                    it.ordenCompra || '—',
                    area.responsable || '—'
                ]);
            });
        });
        if (valorAdiciones > 0) {
            addBody.push(['', 'TOTAL ADICIONES', '', '', '', '', '', '', fmt(valorAdiciones), '', '']);
        }

        doc.autoTable({
            startY: ay2,
            head: addHead,
            body: addBody,
            margin: { left: margin, right: margin, bottom: 14 },
            styles: { fontSize: 5.8, cellPadding: 1.8, lineColor: [226, 232, 240], lineWidth: 0.2, textColor: grisTexto, overflow: 'linebreak', minCellHeight: 5.5 },
            headStyles: { fillColor: [5, 78, 50], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 5.8, halign: 'center', cellPadding: 2.2 },
            alternateRowStyles: { fillColor: [240, 253, 244] },
            columnStyles: {
                0: { halign: 'center', cellWidth: 12, font: 'courier', fontSize: 5.2 },
                1: { cellWidth: 26, fontSize: 5.2 },
                2: { halign: 'center', cellWidth: 14, font: 'courier', fontSize: 5.2 },
                3: { cellWidth: 'auto' },
                4: { halign: 'center', cellWidth: 10 },
                5: { cellWidth: 16, fontSize: 5.2 },
                6: { cellWidth: 24, fontSize: 5.2 },
                7: { cellWidth: 20, fontSize: 5.2 },
                8: { cellWidth: 22, fontSize: 5.2, fontStyle: 'bold' },
                9: { cellWidth: 20, font: 'courier', fontSize: 5.2 },
                10: { cellWidth: 24, fontSize: 5.2 }
            },
            didParseCell: (data) => {
                if (data.section === 'body' && data.row.index === addBody.length - 1 && valorAdiciones > 0) {
                    data.cell.styles.fontStyle = 'bold';
                    data.cell.styles.fillColor = [209, 250, 229];
                    data.cell.styles.textColor = [5, 78, 50];
                }
            },
            didDrawPage: () => _drawPageFooter('Detalle de Adiciones')
        });
    }

    // ══════════════════════════════════════════════════════════
    // PÁG — ALERTAS (ítems con Malo o Dado de baja)
    // ══════════════════════════════════════════════════════════
    if (totalAlertas > 0) {
        doc.addPage();
        _drawHeader('Items que Requieren Atencion — ' + sedeNombre);
        let aly = 28;

        doc.setFillColor(254, 242, 242);
        doc.roundedRect(margin, aly, contentW, 10, 2, 2, 'F');
        doc.setTextColor(...rojo);
        doc.setFontSize(8.5); doc.setFont('helvetica', 'bold');
        doc.text('ITEMS QUE REQUIEREN ATENCION (' + totalAlertas + ')', margin + 4, aly + 6.5);
        aly += 14;

        const alertHead = [['Cod. Area', 'Area', 'Codigo', 'Descripcion', 'Cant.', 'Estado', 'Detalle Unidades Afectadas', 'Responsable']];
        const alertBody = [];
        areas.forEach(area => {
            area.items.forEach(it => {
                const ests = Array.isArray(it.serialesEstado) ? it.serialesEstado : [];
                const sers = Array.isArray(it.seriales) ? it.seriales : [];
                const esMalo = ests.some(e => e === 'Malo' || e === 'Dado de baja') || it.estado === 'Malo' || it.estado === 'Dado de baja';
                if (!esMalo) return;
                const unidsMalas = ests.map((e, idx) => {
                    if (e !== 'Malo' && e !== 'Dado de baja') return null;
                    const s = sers[idx] ? sers[idx] : '';
                    return `U${idx+1}${s ? ': ' + s : ''} — ${e}`;
                }).filter(Boolean);
                alertBody.push([
                    area.codigoArea || '—', area.area, it.id,
                    titleCase(it.nombre),
                    String(it.cantidad),
                    it.estado || '—',
                    unidsMalas.length > 0 ? unidsMalas.join('\n') : (it.estado || '—'),
                    area.responsable || '—'
                ]);
            });
        });

        doc.autoTable({
            startY: aly,
            head: alertHead,
            body: alertBody,
            margin: { left: margin, right: margin, bottom: 14 },
            styles: { fontSize: 6.2, cellPadding: 2, lineColor: [226, 232, 240], lineWidth: 0.2, textColor: grisTexto, overflow: 'linebreak', minCellHeight: 6 },
            headStyles: { fillColor: [185, 28, 28], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 6.2, halign: 'center', cellPadding: 2.5 },
            alternateRowStyles: { fillColor: [255, 251, 251] },
            columnStyles: {
                0: { halign: 'center', cellWidth: 14, font: 'courier', fontSize: 5.5 },
                1: { cellWidth: 30 },
                2: { halign: 'center', cellWidth: 16, font: 'courier', fontSize: 5.5 },
                3: { cellWidth: 'auto' },
                4: { halign: 'center', cellWidth: 11 },
                5: { cellWidth: 16 },
                6: { cellWidth: 38, fontSize: 5.2 },
                7: { cellWidth: 28, fontSize: 5.5 }
            },
            didParseCell: (data) => {
                if (data.section !== 'body' || data.column.index !== 5) return;
                const v = data.cell.raw;
                if (v === 'Malo')              { data.cell.styles.textColor = rojo;        data.cell.styles.fillColor = [254, 242, 242]; data.cell.styles.fontStyle = 'bold'; }
                else if (v === 'Dado de baja') { data.cell.styles.textColor = grisApagado; data.cell.styles.fillColor = [241, 245, 249]; data.cell.styles.fontStyle = 'bold'; }
            },
            didDrawPage: () => _drawPageFooter('Items que Requieren Atencion')
        });
    }

    // ══════════════════════════════════════════════════════════
    // ÚLTIMA PÁG — FIRMA Y CERTIFICACIÓN
    // ══════════════════════════════════════════════════════════
    doc.addPage();
    _drawHeader('Constancia de Verificacion — ' + sedeNombre);
    let fy = 32;

    // Declaración formal
    doc.setFillColor(...grisClaro);
    doc.roundedRect(margin, fy, contentW, 8, 2, 2, 'F');
    doc.setTextColor(...azulOscuro);
    doc.setFontSize(8.5); doc.setFont('helvetica', 'bold');
    doc.text('CONSTANCIA DE VERIFICACION Y CONFORMIDAD DEL INVENTARIO', margin + 4, fy + 5.5);
    fy += 13;

    doc.setTextColor(...grisTexto);
    doc.setFontSize(8); doc.setFont('helvetica', 'normal');
    const declaracion = `Los suscritos, en nuestra calidad de Responsable Custodio y Revisor Fiscal de la UNION ISRAELITA DE BENEFICENCIA, NIT 860.007.759-5, hacemos constar que hemos verificado el inventario de activos fijos de la sede "${sedeNombre}" correspondiente a la categoria "${tabLabels[tab] || tab}", el cual comprende ${totalAreas} areas con ${totalItems} items por un total de ${totalUds} unidades.`;
    const splitDecl = doc.splitTextToSize(declaracion, contentW - 4);
    doc.text(splitDecl, margin + 2, fy);
    fy += splitDecl.length * 4 + 4;

    const declaracion2 = `Los activos relacionados en el presente informe han sido verificados fisicamente y se encuentran bajo la responsabilidad de los custodios designados por area. Este documento hace parte integral de los archivos de auditoria para el periodo ${anioHoy}.`;
    const splitDecl2 = doc.splitTextToSize(declaracion2, contentW - 4);
    doc.text(splitDecl2, margin + 2, fy);
    fy += splitDecl2.length * 4 + 14;

    // 3 firmas
    const firmaW = 72;
    const firmaGap = (contentW - firmaW * 3) / 2;
    const firmas = [
        { label: 'RESPONSABLE CUSTODIO', sub: 'Nombre, firma y No. de cedula', extra: sedeNombre },
        { label: 'REVISOR FISCAL', sub: 'Nombre, firma, T.P. y No. de cedula', extra: '' },
        { label: 'REPRESENTANTE LEGAL', sub: 'Nombre, firma y No. de cedula', extra: '' }
    ];
    firmas.forEach((f, i) => {
        const fx = margin + i * (firmaW + firmaGap);
        doc.setDrawColor(...azulOscuro);
        doc.setLineWidth(0.35);
        doc.line(fx, fy + 20, fx + firmaW, fy + 20);
        doc.setTextColor(...azulOscuro);
        doc.setFontSize(7.5); doc.setFont('helvetica', 'bold');
        doc.text(f.label, fx + firmaW / 2, fy + 25, { align: 'center' });
        doc.setFontSize(6); doc.setFont('helvetica', 'normal');
        doc.setTextColor(...grisTexto);
        doc.text(f.sub, fx + firmaW / 2, fy + 29, { align: 'center' });
        if (f.extra) { doc.text(f.extra, fx + firmaW / 2, fy + 33, { align: 'center' }); }
    });
    fy += 44;

    // Fecha de verificación
    doc.setDrawColor(...azulMedio);
    doc.setLineWidth(0.3);
    const fechaLineX = pageW / 2 - 40;
    doc.line(fechaLineX, fy + 8, fechaLineX + 80, fy + 8);
    doc.setTextColor(...grisTexto);
    doc.setFontSize(7); doc.setFont('helvetica', 'normal');
    doc.text('Fecha de verificacion (DD/MM/AAAA)', pageW / 2, fy + 12, { align: 'center' });

    // Nota al pie
    fy += 22;
    doc.setFillColor(...grisClaro);
    doc.roundedRect(margin, fy, contentW, 20, 2, 2, 'F');
    doc.setTextColor(...grisApagado);
    doc.setFontSize(6.2); doc.setFont('helvetica', 'bold');
    doc.text('NOTAS:', margin + 4, fy + 5);
    doc.setFont('helvetica', 'normal');
    doc.text('1. Este informe fue generado electronicamente desde el sistema de inventarios de la UIB.', margin + 4, fy + 9);
    doc.text('2. Para efectos de auditoria, los valores registrados deben cruzarse con el modulo contable y los comprobantes de egreso.', margin + 4, fy + 13);
    doc.text('3. Los activos en estado "Malo" o "Dado de baja" requieren acta de baja formal firmada por el Representante Legal y el Revisor Fiscal.', margin + 4, fy + 17);

    // Pie de página final
    _drawPageFooter('Constancia de Verificacion');

    // ── Guardar ──
    const fileName = `Informe_RF_${sedeKey}_${tabLabels[tab] || tab}_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
    showToast('PDF generado', `Informe completo para Revisoria Fiscal descargado (${totalAreas} areas).`, 'success');
};

// ─── CRUD de ítems de inventario ───
window.openInventoryItemForm = (sedeKey, tab, editAreaIdx = null, editItemIdx = null, preselectedArea = null) => {
    const isEdit = editAreaIdx !== null && editItemIdx !== null;
    const sede = INVENTORY_DB[sedeKey];
    const areas = sede[tab] || [];
    const existingAreas = areas.map(a => a.area);

    let itemData = { id: '', nombre: '', cantidad: 1, estado: 'Bueno', serial: '', observaciones: '', fechaCompra: '', activoContable: '', activoNoContable: '', responsable: '' };
    // null = sin preferencia (usa primera área), '' = nueva área (viene de "Agregar Área")
    const forceNewArea = preselectedArea === '';
    let selectedArea = forceNewArea ? '' : (preselectedArea || existingAreas[0] || '');

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

    // Función para calcular siguiente ID del área (usa codigoArea como base)
    const getNextIdForArea = (areaName) => {
        const area = areas.find(a => a.area === areaName);
        const baseCode = area?.codigoArea ? parseInt(area.codigoArea) : null;
        if (!area || area.items.length === 0) {
            return baseCode ? `${sedeKey.toUpperCase()}-${baseCode + 1}` : `${sedeKey.toUpperCase()}-001`;
        }
        // Buscar el número más alto entre los IDs del área
        let maxNum = baseCode || 0;
        area.items.forEach(item => {
            const match = item.id.match(/(\d+)$/);
            if (match) {
                const num = parseInt(match[1]);
                if (num > maxNum) maxNum = num;
            }
        });
        return `${sedeKey.toUpperCase()}-${maxNum + 1}`;
    };

    // Para nueva área: calcular el próximo codigoArea y usar codigoArea+1 como ID base
    const getNextNewAreaId = () => {
        const TABS = ['inventario', 'depuracion', 'adiciones'];
        const allCodes = TABS.flatMap(t => (sede[t] || []).map(a => parseInt(a.codigoArea || '0')));
        const maxCode = allCodes.reduce((m, c) => c > m ? c : m, 0);
        const nextCode = maxCode + 100;
        return `${sedeKey.toUpperCase()}-${nextCode + 1}`;
    };

    const autoId = isEdit ? itemData.id : (forceNewArea ? getNextNewAreaId() : getNextIdForArea(selectedArea));

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
                    <div class="inv-modal-icon">${isEdit ? '✏️' : forceNewArea ? '🏷️' : '📦'}</div>
                    <div>
                        <h2 class="inv-modal-title">${isEdit ? 'Editar Ítem' : forceNewArea ? 'Nueva Área de Inventario' : 'Nuevo Ítem de Inventario'}</h2>
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
                            ${forceNewArea ? `
                            <input type="text" id="inv-area-new" class="inv-modal-input" placeholder="Ej: GESTIÓN HUMANA" autofocus style="margin-top:4px;">
                            <span class="inv-id-hint">El código de la nueva área será ${parseInt(autoId.split('-')[1]) - 1}</span>
                            <input type="hidden" id="inv-area-select-value" value="__new__">
                            ` : `
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
                            `}
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
                        <div style="display:flex;gap:10px;align-items:stretch;padding:4px 0;">
                            <label class="inv-checkbox-label">
                                <input type="checkbox" id="inv-item-activo-contable" ${['X','Sí','Si','SI','si','sí','1',true].includes(itemData.activoContable) ? 'checked' : ''}>
                                <span class="inv-checkbox-text">Activo<br>Contable</span>
                            </label>
                            <label class="inv-checkbox-label">
                                <input type="checkbox" id="inv-item-activo-no-contable" ${['X','Sí','Si','SI','si','sí','1',true].includes(itemData.activoNoContable) ? 'checked' : ''}>
                                <span class="inv-checkbox-text">Activo No<br>Contable</span>
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
                            <input type="text" id="inv-item-nombre" class="inv-modal-input" value="${itemData.nombre}" placeholder="Ej: ESCRITORIO EJECUTIVO EN MADERA" style="text-transform:uppercase;" oninput="this.value=this.value.toUpperCase()">
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
                        <div class="inv-modal-field" style="margin-top:14px;" id="inv-serial-block">
                            <div class="inv-serial-header">
                                <span></span>
                                <span>N° de Serie</span>
                                <span>Estado unidad</span>
                            </div>
                            <div id="inv-seriales-list">
                                ${(() => {
                                    const qty = itemData.cantidad || 1;
                                    const seriales = Array.isArray(itemData.seriales) ? itemData.seriales : (itemData.serial ? [itemData.serial] : []);
                                    const estados = Array.isArray(itemData.serialesEstado) ? itemData.serialesEstado : [];
                                    const estadoOpts = ['Bueno','Regular','Malo','Dado de baja'];
                                    const estClass = e => e==='Bueno'?'est-bueno':e==='Regular'?'est-regular':e==='Malo'?'est-malo':'est-baja';
                                    let inputs = '';
                                    for (let i = 0; i < qty; i++) {
                                        const est = estados[i] || 'Bueno';
                                        inputs += `<div class="inv-serial-row">
                                            <span class="inv-serial-num">U${i+1}</span>
                                            <input type="text" class="inv-modal-input inv-serial-input" data-idx="${i}" value="${seriales[i] || ''}" placeholder="N° serie (vacío si no aplica)">
                                            <select class="inv-modal-select inv-serial-estado ${estClass(est)}" data-idx="${i}" onchange="window._serialEstadoChange(this)">${estadoOpts.map(e => `<option value="${e}" ${est===e?'selected':''}>${e}</option>`).join('')}</select>
                                        </div>`;
                                    }
                                    return inputs;
                                })()}
                            </div>
                        </div>

                        ${tab === 'inventario' ? `
                        <div style="margin-top:14px;border-top:1px solid #e5e7eb;padding-top:12px;">
                            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
                                <label style="font-weight:600;color:#374151;font-size:0.82rem;">🔧 Componentes vinculados <span style="font-weight:400;color:#9ca3af;font-size:0.75rem;">(teclado, mouse, regulador…)</span></label>
                                <button type="button" class="inv-modal-btn-add-comp" onclick="window._invAddComponentRow()">+ Agregar</button>
                            </div>
                            <div id="inv-componentes-list">
                                ${(itemData.componentes || []).map((c) => `
                                <div class="inv-comp-form-row">
                                    <input type="text" class="inv-modal-input inv-comp-desc" placeholder="Ej: TECLADO" value="${(c.descripcion || '').toUpperCase()}" style="text-transform:uppercase;" oninput="this.value=this.value.toUpperCase()">
                                    <input type="text" class="inv-modal-input inv-comp-serial" placeholder="N° Serie" value="${c.serial || ''}">
                                    <select class="inv-modal-select inv-comp-estado">
                                        ${['Bueno','Regular','Malo','Dado de baja'].map(e => `<option value="${e}" ${(c.estado||'Bueno')===e?'selected':''}>${e}</option>`).join('')}
                                    </select>
                                    <button type="button" class="inv-comp-remove-btn" onclick="this.closest('.inv-comp-form-row').remove()" title="Eliminar">✕</button>
                                </div>`).join('')}
                            </div>
                        </div>` : ''}
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
    const nombre = document.getElementById('inv-item-nombre')?.value.trim().toUpperCase();
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
        serialesEstado: Array.from(document.querySelectorAll('#inv-seriales-list .inv-serial-estado')).map(s => s.value),
        fechaCompra: document.getElementById('inv-item-fecha-compra')?.value || '',
        activoContable: document.getElementById('inv-item-activo-contable')?.checked ? 'X' : '',
        activoNoContable: document.getElementById('inv-item-activo-no-contable')?.checked ? 'X' : '',
        responsable: document.getElementById('inv-item-responsable')?.value.trim() || '',
        observaciones: document.getElementById('inv-item-obs')?.value || '',
        componentes: tab === 'inventario'
            ? Array.from(document.querySelectorAll('#inv-componentes-list .inv-comp-form-row'))
                .map(row => ({
                    descripcion: row.querySelector('.inv-comp-desc')?.value.trim() || '',
                    serial: row.querySelector('.inv-comp-serial')?.value.trim() || '',
                    estado: row.querySelector('.inv-comp-estado')?.value || 'Bueno'
                }))
                .filter(c => c.descripcion || c.serial)
            : []
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

    // Trazabilidad: registrar quién y cuándo en adiciones y depuraciones
    if (tab === 'adiciones' || tab === 'depuracion') {
        const isEdit = editAreaIdx !== null && editAreaIdx !== 'null';
        if (!isEdit) {
            // Solo al crear (nuevo registro)
            item.registradoPor = (typeof APP_STATE !== 'undefined' && APP_STATE.userEmail) || 'Sistema';
            item.fechaRegistro = new Date().toISOString();
        } else {
            // Al editar: conservar quien creó originalmente, agregar quién editó
            const sede = INVENTORY_DB[sedeKey];
            const existing = sede[tab]?.[editAreaIdx]?.items?.[editItemIdx];
            item.registradoPor = existing?.registradoPor || 'Sistema';
            item.fechaRegistro = existing?.fechaRegistro || new Date().toISOString();
            item.ultimaEdicion = (typeof APP_STATE !== 'undefined' && APP_STATE.userEmail) || 'Sistema';
            item.fechaUltimaEdicion = new Date().toISOString();
        }
    }

    const isEdit = editAreaIdx !== null && editAreaIdx !== 'null';

    // Calcular siguiente codigoArea si se va a crear un área nueva
    const _getNextAreaCode = () => {
        const allAreas = [...(sede.inventario || []), ...(sede.depuracion || []), ...(sede.adiciones || [])];
        const maxCode = allAreas.reduce((max, a) => {
            const code = parseInt(a.codigoArea || '0');
            return code > max ? code : max;
        }, 0);
        return String(maxCode + 100);
    };

    if (isEdit) {
        const oldArea = sede[tab][editAreaIdx];
        if (oldArea.area === areaName) {
            // Paso 2: Para inventario activo, guardar snapshot del estado anterior en historial
            if (tab === 'inventario') {
                const prev = oldArea.items[editItemIdx];
                if (prev) {
                    const snap = {
                        fecha: new Date().toISOString(),
                        por: (typeof APP_STATE !== 'undefined' && APP_STATE.userEmail) || 'Sistema',
                        cantidad: prev.cantidad,
                        estado: prev.estado,
                        responsable: prev.responsable || '',
                        observaciones: prev.observaciones || ''
                    };
                    item.historial = [...(prev.historial || []), snap];
                }
            }
            oldArea.items[editItemIdx] = item;
        } else {
            // Ítem se mueve a otra área — conservar historial
            if (tab === 'inventario') {
                const prev = oldArea.items[editItemIdx];
                if (prev) {
                    const snap = {
                        fecha: new Date().toISOString(),
                        por: (typeof APP_STATE !== 'undefined' && APP_STATE.userEmail) || 'Sistema',
                        cantidad: prev.cantidad,
                        estado: prev.estado,
                        responsable: prev.responsable || '',
                        observaciones: prev.observaciones || '',
                        nota: `Trasladado de área: ${prev.area || oldArea.area} → ${areaName}`
                    };
                    item.historial = [...(prev.historial || []), snap];
                }
            }
            oldArea.items.splice(editItemIdx, 1);
            if (oldArea.items.length === 0) sede[tab].splice(editAreaIdx, 1);
            let targetArea = sede[tab].find(a => a.area === areaName);
            if (!targetArea) { targetArea = { area: areaName, codigoArea: _getNextAreaCode(), items: [] }; sede[tab].push(targetArea); }
            targetArea.items.push(item);
        }
    } else {
        let targetArea = sede[tab].find(a => a.area === areaName);
        if (!targetArea) { targetArea = { area: areaName, codigoArea: _getNextAreaCode(), items: [] }; sede[tab].push(targetArea); }
        targetArea.items.push(item);
    }

    // Guardar el nombre del área activa antes de re-renderizar (para restaurarla después)
    const savedAreaName = (() => {
        try {
            const sede = INVENTORY_DB[sedeKey];
            return sede[tab]?.[isEdit ? parseInt(editAreaIdx) : null]?.area || null;
        } catch(e) { return null; }
    })();

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

    // Restaurar el área activa sin re-abrir el modal
    if (savedAreaName) {
        setTimeout(() => {
            const card = Array.from(document.querySelectorAll('.inv-grid-card'))
                .find(c => c.dataset.area === savedAreaName.toLowerCase());
            if (card && !card.classList.contains('active')) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                card.click();
            }
        }, 80);
    }
};

// ─── Componentes vinculados ────────────────────────────────────────────────

window._invAddComponentRow = () => {
    const list = document.getElementById('inv-componentes-list');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'inv-comp-form-row';
    div.innerHTML = `
        <input type="text" class="inv-modal-input inv-comp-desc" placeholder="Ej: TECLADO" style="text-transform:uppercase;" oninput="this.value=this.value.toUpperCase()">
        <input type="text" class="inv-modal-input inv-comp-serial" placeholder="N° Serie">
        <select class="inv-modal-select inv-comp-estado">
            ${['Bueno','Regular','Malo','Dado de baja'].map(e => `<option value="${e}">${e}</option>`).join('')}
        </select>
        <button type="button" class="inv-comp-remove-btn" onclick="this.closest('.inv-comp-form-row').remove()" title="Eliminar">✕</button>
    `;
    list.appendChild(div);
};

window.toggleInventoryComponents = (btn, rowId) => {
    const row = document.getElementById(rowId);
    if (!row) return;
    const hidden = row.style.display === 'none';
    row.style.display = hidden ? '' : 'none';
    btn.textContent = hidden ? '⊖' : '⊕';
    btn.classList.toggle('inv-btn-comp-active', hidden);
};

window.desvincularComponente = (sedeKey, areaIdx, itemIdx, compIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];
    const comp = item.componentes[compIdx];

    showConfirm(
        '🔓 Desvincular Componente',
        `¿Convertir <strong>${comp.descripcion}</strong> ${comp.serial ? '(serial: ' + comp.serial + ')' : ''} en un ítem independiente dentro del área <strong>${area.area}</strong>?`,
        () => {
            // Calcular nuevo ID
            const allItems = (sede.inventario || []).flatMap(a => a.items);
            let maxNum = 0;
            allItems.forEach(i => {
                const match = i.id.match(/(\d+)$/);
                if (match) maxNum = Math.max(maxNum, parseInt(match[1]));
            });
            const newId = `${sedeKey.toUpperCase()}-${maxNum + 1}`;

            const newItem = {
                id: newId,
                nombre: comp.descripcion,
                cantidad: 1,
                estado: comp.estado || 'Bueno',
                serial: '',
                seriales: comp.serial ? [comp.serial] : [],
                serialesEstado: [comp.estado || 'Bueno'],
                responsable: item.responsable || area.responsable || '',
                fechaCompra: '',
                activoContable: '',
                activoNoContable: '',
                observaciones: `Desvinculado de ${item.id} — ${item.nombre}`,
                componentes: [],
                historial: []
            };

            area.items.push(newItem);
            item.componentes.splice(compIdx, 1);

            const areaName = area.area;
            saveInventory();
            showToast('✅ Componente desvinculado', `${comp.descripcion} registrado como ${newId}`, 'success');
            renderInventoryView(document.getElementById('view-dashboard'));
            setTimeout(() => {
                const card = Array.from(document.querySelectorAll('.inv-grid-card'))
                    .find(c => c.dataset.area === areaName.toLowerCase());
                if (card && !card.classList.contains('active')) { card.scrollIntoView({ behavior:'smooth', block:'nearest' }); card.click(); }
                else if (card) { card.click(); card.click(); }
            }, 80);
        },
        'Desvincular',
        'primary'
    );
};

window.abrirVincularComponente = (sedeKey, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];

    // Recopilar todos los ítems de la sede (excepto el propio) como candidatos padre
    const candidatos = [];
    (sede.inventario || []).forEach((a, ai) => {
        a.items.forEach((it, ii) => {
            if (ai === areaIdx && ii === itemIdx) return; // excluir el propio
            candidatos.push({ sedeKey, areaIdx: ai, itemIdx: ii, id: it.id, nombre: it.nombre, area: a.area });
        });
    });

    const prev = document.getElementById('inv-vincular-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.id = 'inv-vincular-overlay';
    overlay.className = 'inv-modal-overlay';
    overlay.innerHTML = `
        <div class="inv-modal" style="max-width:520px;" onclick="event.stopPropagation()">
            <div class="inv-modal-header">
                <div class="inv-modal-header-left">
                    <div class="inv-modal-icon">🔗</div>
                    <div>
                        <h2 class="inv-modal-title">Vincular como componente</h2>
                        <p class="inv-modal-subtitle">${item.id} — ${item.nombre}</p>
                    </div>
                </div>
                <button class="inv-modal-close" onclick="document.getElementById('inv-vincular-overlay').remove()">&times;</button>
            </div>
            <div class="inv-modal-body">
                <p style="font-size:0.85rem;color:#64748b;margin-bottom:12px;">Selecciona el equipo al que quieres vincular este ítem como componente. El ítem desaparecerá de la lista principal.</p>
                <input type="text" id="inv-vincular-search" class="inv-modal-input" placeholder="Buscar por ID o descripción..." oninput="window._filtrarCandidatos(this.value)" style="margin-bottom:10px;">
                <div id="inv-vincular-lista" style="max-height:320px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:8px;">
                    ${candidatos.length === 0 ? `<p style="text-align:center;color:#94a3b8;padding:20px;">No hay otros ítems disponibles</p>` :
                    candidatos.map(c => `
                        <div class="inv-vincular-item" data-nombre="${c.nombre.toLowerCase()}" data-id="${c.id.toLowerCase()}"
                             onclick="window.confirmarVincular('${sedeKey}',${areaIdx},${itemIdx},${c.areaIdx},${c.itemIdx})">
                            <code style="font-size:0.75rem;color:#3b82f6;font-weight:700;">${c.id}</code>
                            <span style="font-size:0.85rem;color:#1e293b;margin-left:8px;">${c.nombre}</span>
                            <span style="font-size:0.75rem;color:#94a3b8;margin-left:auto;">${c.area}</span>
                        </div>`).join('')}
                </div>
            </div>
        </div>
    `;

    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));

    window._filtrarCandidatos = (q) => {
        q = q.toLowerCase();
        document.querySelectorAll('#inv-vincular-lista .inv-vincular-item').forEach(el => {
            const match = el.dataset.nombre.includes(q) || el.dataset.id.includes(q);
            el.style.display = match ? '' : 'none';
        });
    };
};

window.confirmarVincular = (sedeKey, areaIdx, itemIdx, parentAreaIdx, parentItemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];
    const parentArea = sede.inventario[parentAreaIdx];
    const parentItem = parentArea.items[parentItemIdx];

    showConfirm(
        '🔗 Vincular Componente',
        `¿Vincular <strong>${item.nombre}</strong> ${item.seriales?.[0] ? '(serial: ' + item.seriales[0] + ')' : ''} como componente de <strong>${parentItem.id} — ${parentItem.nombre}</strong>?`,
        () => {
            // Agregar como componente al padre
            if (!Array.isArray(parentItem.componentes)) parentItem.componentes = [];
            parentItem.componentes.push({
                descripcion: item.nombre,
                serial: item.seriales?.[0] || item.serial || '',
                estado: item.estado || 'Bueno'
            });

            // Eliminar de la lista principal
            area.items.splice(itemIdx, 1);
            if (area.items.length === 0) sede.inventario.splice(areaIdx, 1);

            document.getElementById('inv-vincular-overlay')?.remove();
            saveInventory();
            showToast('✅ Vinculado', `${item.nombre} ahora es componente de ${parentItem.id}`, 'success');
            renderInventoryView(document.getElementById('view-dashboard'));
        },
        'Vincular',
        'primary'
    );
};

// ─── Fin componentes ───────────────────────────────────────────────────────

window.deleteInventoryItem = (sedeKey, tab, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede[tab][areaIdx];
    const item = area.items[itemIdx];

    // ── Si ya está en depuración → borrado definitivo ─────────────────────────
    if (tab === 'depuracion') {
        showConfirm(
            'Eliminar Definitivamente',
            `¿Eliminar <strong>${item.nombre}</strong> de forma permanente?<br><small>${item.id} · ${area.area} — Este ítem ya está en depuración.</small>`,
            () => {
                area.items.splice(itemIdx, 1);
                if (area.items.length === 0) sede[tab].splice(areaIdx, 1);
                saveInventory();
                showToast('Eliminado', 'Ítem eliminado definitivamente.', 'success');
                renderInventoryView(document.getElementById('view-dashboard'));
            },
            'Eliminar',
            'danger'
        );
        return;
    }

    // ── Si está en inventario activo → mover a depuración (auditoría) ─────────
    showConfirm(
        'Retirar del Inventario',
        `¿Retirar <strong>${item.nombre}</strong> del inventario activo?<br>
         <small>${item.id} · ${area.area}</small><br>
         <small style="color:#f59e0b;">⚠️ El ítem quedará en la pestaña <strong>Depuración</strong> con registro de auditoría.</small>`,
        () => {
            const ahora = new Date().toISOString();
            const usuario = (typeof APP_STATE !== 'undefined' && APP_STATE.userName) ? APP_STATE.userName : 'Sistema';
            const fechaHoy = new Date().toLocaleDateString('es-CO', { day:'2-digit', month:'short', year:'numeric' });

            // Crear entrada en depuración con todos los campos del ítem + trazabilidad
            const itemDepurado = {
                ...item,
                fechaRetiro: fechaHoy,
                motivo: 'Eliminado del inventario activo',
                registradoPor: usuario,
                fechaRegistro: ahora,
                ultimaEdicion: null,
                fechaUltimaEdicion: null,
                historial: item.historial || []
            };

            // Encontrar o crear área destino en depuración
            if (!sede.depuracion) sede.depuracion = [];
            let depArea = sede.depuracion.find(a => a.area === area.area);
            if (!depArea) {
                depArea = { area: area.area, codigoArea: area.codigoArea || '', responsable: area.responsable || '', items: [] };
                sede.depuracion.push(depArea);
            }
            depArea.items.push(itemDepurado);

            // Eliminar del inventario activo
            area.items.splice(itemIdx, 1);
            if (area.items.length === 0) sede[tab].splice(areaIdx, 1);

            saveInventory();
            showToast('Retirado', `"${item.nombre}" movido a Depuración con registro de auditoría.`, 'success');
            renderInventoryView(document.getElementById('view-dashboard'));
        },
        'Retirar',
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
    const existingEstados = Array.from(container.querySelectorAll('.inv-serial-estado')).map(s => s.value);
    const estadoOpts = ['Bueno','Regular','Malo','Dado de baja'];
    const estClass = e => e==='Bueno'?'est-bueno':e==='Regular'?'est-regular':e==='Malo'?'est-malo':'est-baja';
    let html = '';
    for (let i = 0; i < qty; i++) {
        const est = existingEstados[i] || 'Bueno';
        html += `<div class="inv-serial-row">
            <span class="inv-serial-num">U${i+1}</span>
            <input type="text" class="inv-modal-input inv-serial-input" data-idx="${i}" value="${existing[i] || ''}" placeholder="N° serie (vacío si no aplica)">
            <select class="inv-modal-select inv-serial-estado ${estClass(est)}" data-idx="${i}" onchange="window._serialEstadoChange(this)">${estadoOpts.map(e => `<option value="${e}" ${est===e?'selected':''}>${e}</option>`).join('')}</select>
        </div>`;
    }
    container.innerHTML = html;
};

window._serialEstadoChange = (sel) => {
    sel.className = sel.className.replace(/est-\S+/g, '');
    const map = {'Bueno':'est-bueno','Regular':'est-regular','Malo':'est-malo','Dado de baja':'est-baja'};
    sel.classList.add(map[sel.value] || 'est-bueno');
};

// ─── Fusionar área completa con otra ─────────────────────────────────────────
window.openMergeArea = (sedeKey, srcAreaIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const srcArea = sede.inventario[srcAreaIdx];
    const destAreas = sede.inventario.filter((_, i) => i !== srcAreaIdx).map(a => a.area);

    const prev = document.getElementById('inv-merge-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.id = 'inv-merge-overlay';
    overlay.className = 'inv-modal-overlay';
    overlay.innerHTML = `
        <div class="inv-modal" style="max-width:440px;" onclick="event.stopPropagation()">
            <div class="inv-modal-header">
                <div class="inv-modal-header-left">
                    <div class="inv-modal-icon" style="background:linear-gradient(135deg,#7c3aed,#5b21b6);">⇄</div>
                    <div>
                        <h2 class="inv-modal-title">Fusionar Área</h2>
                        <p class="inv-modal-subtitle">Mover todos los ítems de <strong>${srcArea.area}</strong></p>
                    </div>
                </div>
                <button class="inv-modal-close" onclick="document.getElementById('inv-merge-overlay').remove()">&times;</button>
            </div>
            <div class="inv-modal-body">
                <div class="inv-merge-info-box">
                    <div class="inv-merge-from">
                        <span class="inv-merge-label">ORIGEN</span>
                        <span class="inv-merge-area-name">${srcArea.area}</span>
                        <span class="inv-merge-count">${srcArea.items.length} ítems · ${srcArea.items.reduce((s,it)=>s+(it.cantidad||0),0)} uds.</span>
                    </div>
                    <div class="inv-merge-arrow">→</div>
                    <div class="inv-merge-to">
                        <span class="inv-merge-label">DESTINO</span>
                        <span class="inv-merge-area-name" id="inv-merge-dest-name" style="color:#94a3b8;">Sin seleccionar</span>
                    </div>
                </div>
                <div class="inv-modal-section" style="margin-top:16px;">
                    <div class="inv-modal-section-title"><span class="inv-modal-section-icon">📍</span> Área destino</div>
                    <div class="inv-area-search-wrap">
                        <input type="text" id="inv-merge-search" class="inv-area-search-input" placeholder="🔍 Buscar área de destino..." autocomplete="off">
                        <input type="hidden" id="inv-merge-dest" value="">
                        <div class="inv-area-search-dropdown" id="inv-merge-dropdown"></div>
                    </div>
                </div>
                <p class="inv-merge-warning">⚠️ El área <strong>${srcArea.area}</strong> quedará vacía y será eliminada automáticamente.</p>
            </div>
            <div class="inv-modal-footer">
                <button class="inv-modal-btn-cancel" onclick="document.getElementById('inv-merge-overlay').remove()">Cancelar</button>
                <button class="inv-modal-btn-save" style="background:linear-gradient(135deg,#7c3aed,#5b21b6);" onclick="window.executeMergeArea('${sedeKey}',${srcAreaIdx})">⇄ Fusionar Área</button>
            </div>
        </div>
    `;
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));

    // Buscador de área destino
    function buildMergeDropdown(filter) {
        const dd = document.getElementById('inv-merge-dropdown');
        if (!dd) return;
        const matches = destAreas.filter(a => a.toLowerCase().includes(filter.toLowerCase()));
        dd.innerHTML = matches.map(a => `<div class="inv-area-search-option" data-value="${a}">${a}</div>`).join('') ||
            `<div class="inv-area-search-empty">Sin resultados</div>`;
        dd.querySelectorAll('.inv-area-search-option').forEach(opt => {
            opt.addEventListener('mousedown', e => {
                e.preventDefault();
                const val = opt.dataset.value;
                document.getElementById('inv-merge-search').value = val;
                document.getElementById('inv-merge-dest').value = val;
                document.getElementById('inv-merge-dest-name').textContent = val;
                document.getElementById('inv-merge-dest-name').style.color = '#1e293b';
                dd.style.display = 'none';
            });
        });
    }
    const si = document.getElementById('inv-merge-search');
    si.addEventListener('focus', () => { buildMergeDropdown(si.value); document.getElementById('inv-merge-dropdown').style.display = 'block'; });
    si.addEventListener('input', () => { buildMergeDropdown(si.value); document.getElementById('inv-merge-dropdown').style.display = 'block'; document.getElementById('inv-merge-dest').value = ''; document.getElementById('inv-merge-dest-name').textContent = 'Sin seleccionar'; document.getElementById('inv-merge-dest-name').style.color = '#94a3b8'; });
    si.addEventListener('blur', () => { setTimeout(() => { const dd = document.getElementById('inv-merge-dropdown'); if (dd) dd.style.display = 'none'; }, 150); });
    si.focus();
};

window.executeMergeArea = (sedeKey, srcAreaIdx) => {
    const destAreaName = document.getElementById('inv-merge-dest').value;
    if (!destAreaName) { showToast('Selecciona el área destino', 'error'); return; }

    const sede = INVENTORY_DB[sedeKey];
    const srcArea = sede.inventario[srcAreaIdx];
    const destArea = sede.inventario.find(a => a.area === destAreaName);
    if (!destArea) { showToast('Área destino no encontrada', 'error'); return; }

    const srcItemCount = srcArea.items.length;
    const usuarioActual = (typeof APP_STATE !== 'undefined' && APP_STATE.userName) ? APP_STATE.userName : 'Sistema';
    const ahoraNow = new Date().toISOString();

    // Mover todos los ítems al destino
    srcArea.items.forEach(it => {
        const clone = { ...it, responsable: destArea.responsable || it.responsable, historial: it.historial || [] };
        clone.historial.push({ tipo: 'traslado', fecha: ahoraNow, usuario: usuarioActual, detalle: `Fusión de área: ${srcArea.area} → ${destAreaName}` });
        destArea.items.push(clone);
    });

    // Eliminar área origen
    sede.inventario.splice(srcAreaIdx, 1);
    saveInventory();

    document.getElementById('inv-merge-overlay').remove();
    document.getElementById('inv-detail-panel').style.display = 'none';
    document.querySelectorAll('.inv-grid-card.active').forEach(c => c.classList.remove('active'));

    showToast(`✅ ${srcItemCount} ítems fusionados en "${destAreaName}"`, 'success');
    if (typeof renderView === 'function') requestAnimationFrame(() => renderView('inventory'));
};

// ─── Editar nombre de área ────────────────────────────────────────────────────
window.editAreaName = (sedeKey, tab, areaIdx) => {
    const area = INVENTORY_DB[sedeKey][tab][areaIdx];
    const nameEl = document.getElementById('inv-area-name-display');
    if (!nameEl) return;

    const currentName = area.area;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.className = 'inv-edit-area-input';
    input.style.cssText = 'font-size:inherit;font-weight:700;border:2px solid #3b82f6;border-radius:6px;padding:2px 8px;outline:none;background:#fff;color:#1e293b;min-width:180px;';

    const confirm = () => {
        const newName = input.value.trim().toUpperCase();
        if (!newName || newName === currentName) {
            nameEl.textContent = currentName;
            input.replaceWith(nameEl);
            return;
        }
        area.area = newName;
        saveInventory();
        nameEl.textContent = newName;
        input.replaceWith(nameEl);
        // Actualizar la tarjeta del grid
        const card = document.querySelector(`.inv-grid-card[data-idx="${areaIdx}"]`);
        if (card) {
            const nameDiv = card.querySelector('.inv-grid-card-name');
            if (nameDiv) nameDiv.textContent = newName;
            card.dataset.area = newName.toLowerCase();
        }
        showToast('Nombre del área actualizado', 'success');
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') confirm();
        if (e.key === 'Escape') {
            nameEl.textContent = currentName;
            input.replaceWith(nameEl);
        }
    });
    input.addEventListener('blur', confirm);

    nameEl.replaceWith(input);
    input.focus();
    input.select();
};

// ─── Filtro de tabla por estado ───────────────────────────────────────────────
window._filterTableByEstado = (valor) => {
    const tbody = document.querySelector('#inv-detail-table tbody');
    if (!tbody) return;
    const rows = Array.from(tbody.querySelectorAll('tr[data-estado]'));
    rows.forEach(row => {
        const rowEstado = row.getAttribute('data-estado') || '';
        if (valor === 'all' || !valor) {
            row.style.display = '';
        } else if (valor === 'alert') {
            // Mostrar solo Malo, Dado de baja, Regular
            row.style.display = ['Malo','Dado de baja','Regular'].includes(rowEstado) ? '' : 'none';
        } else {
            row.style.display = rowEstado === valor ? '' : 'none';
        }
    });
    // Actualizar select si se llamó desde el botón de alerta
    if (valor === 'alert') {
        const sel = document.getElementById('inv-estado-filter');
        if (sel) sel.value = 'all';
    }
};

// ─── Traslado de unidad individual entre áreas ───
window.openTransferItem = (sedeKey, areaIdx, itemIdx) => {
    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];
    const seriales = Array.isArray(item.seriales) ? item.seriales.filter(Boolean) : (item.serial ? [item.serial] : []);

    // Opciones de unidades a trasladar
    const totalUnits = seriales.length > 0 ? seriales.length : item.cantidad;
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

    // Sedes disponibles
    const todasLasSedes = Object.keys(INVENTORY_DB);
    const sedeOptions = todasLasSedes.map(sk => {
        const s = INVENTORY_DB[sk];
        return `<option value="${sk}" ${sk === sedeKey ? 'selected' : ''}>${s.icono || ''} ${sk} — ${s.nombre || sk}</option>`;
    }).join('');

    // Lista de áreas para el buscador
    const areasDestino = sede.inventario.filter((_, i) => i !== areaIdx).map(a => a.area);

    const prev = document.getElementById('inv-transfer-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.id = 'inv-transfer-overlay';
    overlay.className = 'inv-modal-overlay';
    overlay.innerHTML = `
        <div class="inv-modal" style="max-width:500px;" onclick="event.stopPropagation()">
            <div class="inv-modal-header">
                <div class="inv-modal-header-left">
                    <div class="inv-modal-icon">🔀</div>
                    <div>
                        <h2 class="inv-modal-title">Trasladar Unidad(es)</h2>
                        <p class="inv-modal-subtitle">${item.nombre} · ${area.area} · <strong>${sedeKey}</strong></p>
                    </div>
                </div>
                <button class="inv-modal-close" onclick="document.getElementById('inv-transfer-overlay').remove()">&times;</button>
            </div>
            <div class="inv-modal-body">
                <div class="inv-modal-section">
                    <div class="inv-modal-section-title" style="display:flex;align-items:center;justify-content:space-between;">
                        <span><span class="inv-modal-section-icon">📦</span> Unidades a trasladar</span>
                        <label class="inv-select-all-label">
                            <input type="checkbox" id="inv-transfer-select-all">
                            <span>Seleccionar todas (${totalUnits})</span>
                        </label>
                    </div>
                    <div class="inv-transfer-units">${unidadesOptions}</div>
                </div>
                <div class="inv-modal-section" style="margin-top:12px;">
                    <div class="inv-modal-section-title"><span class="inv-modal-section-icon">🏢</span> Sede destino</div>
                    <div class="inv-modal-field">
                        <select id="inv-transfer-sede" class="inv-modal-select">${sedeOptions}</select>
                    </div>
                </div>
                <div class="inv-modal-section" style="margin-top:12px;">
                    <div class="inv-modal-section-title"><span class="inv-modal-section-icon">📍</span> Área destino</div>
                    <div class="inv-area-search-wrap" id="inv-area-search-wrap">
                        <input type="text" id="inv-transfer-dest-search" class="inv-area-search-input" placeholder="🔍 Buscar área..." autocomplete="off">
                        <input type="hidden" id="inv-transfer-dest" value="">
                        <div class="inv-area-search-dropdown" id="inv-area-search-dropdown"></div>
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

    // "Seleccionar todas" toggle
    document.getElementById('inv-transfer-select-all').addEventListener('change', function() {
        document.querySelectorAll('.inv-transfer-unit-cb').forEach(cb => cb.checked = this.checked);
    });
    document.addEventListener('change', function handler(e) {
        if (e.target.classList.contains('inv-transfer-unit-cb')) {
            const all = document.querySelectorAll('.inv-transfer-unit-cb');
            const checked = document.querySelectorAll('.inv-transfer-unit-cb:checked');
            const sa = document.getElementById('inv-transfer-select-all');
            if (sa) sa.checked = all.length === checked.length;
        }
        if (!document.getElementById('inv-transfer-overlay')) document.removeEventListener('change', handler);
    });

    // ── Buscador de área ──────────────────────────────────────────────────────
    let currentAreaList = areasDestino;
    function buildAreaDropdown(filter) {
        const dd = document.getElementById('inv-area-search-dropdown');
        if (!dd) return;
        const matches = currentAreaList.filter(a => a.toLowerCase().includes(filter.toLowerCase()));
        dd.innerHTML = [
            ...matches.map(a => `<div class="inv-area-search-option" data-value="${a}">${a}</div>`),
            `<div class="inv-area-search-option inv-area-search-nueva" data-value="__nueva__">➕ Nueva área...</div>`
        ].join('');
        dd.style.display = matches.length > 0 || true ? '' : 'none';
        dd.querySelectorAll('.inv-area-search-option').forEach(opt => {
            opt.addEventListener('mousedown', e => {
                e.preventDefault();
                const val = opt.dataset.value;
                if (val === '__nueva__') {
                    document.getElementById('inv-transfer-dest-search').value = '';
                    document.getElementById('inv-transfer-dest-search').placeholder = 'Nombre de la nueva área...';
                    document.getElementById('inv-transfer-dest').value = '__nueva__';
                } else {
                    document.getElementById('inv-transfer-dest-search').value = val;
                    document.getElementById('inv-transfer-dest').value = val;
                    // Actualizar responsable si el área existe
                    const areaObj = INVENTORY_DB[document.getElementById('inv-transfer-sede').value]?.inventario?.find(a => a.area === val);
                    if (areaObj?.responsable) document.getElementById('inv-transfer-responsable').value = titleCase(areaObj.responsable);
                }
                dd.style.display = 'none';
            });
        });
    }
    const searchInput = document.getElementById('inv-transfer-dest-search');
    searchInput.addEventListener('focus', () => { buildAreaDropdown(searchInput.value); document.getElementById('inv-area-search-dropdown').style.display = 'block'; });
    searchInput.addEventListener('input', () => { buildAreaDropdown(searchInput.value); document.getElementById('inv-area-search-dropdown').style.display = 'block'; document.getElementById('inv-transfer-dest').value = ''; });
    searchInput.addEventListener('blur', () => { setTimeout(() => { const dd = document.getElementById('inv-area-search-dropdown'); if (dd) dd.style.display = 'none'; }, 150); });

    // Cuando cambia la sede destino → recargar lista de áreas
    document.getElementById('inv-transfer-sede').addEventListener('change', function() {
        const destSedeKey = this.value;
        const destSede = INVENTORY_DB[destSedeKey];
        const esMismaSede = destSedeKey === sedeKey;
        currentAreaList = (destSede.inventario || [])
            .filter((_, i) => !esMismaSede || i !== areaIdx)
            .map(a => a.area);
        document.getElementById('inv-transfer-dest-search').value = '';
        document.getElementById('inv-transfer-dest').value = '';
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

    // Sede destino (puede ser distinta a la de origen)
    const destSedeKey = document.getElementById('inv-transfer-sede').value || sedeKey;
    const sedeDest = INVENTORY_DB[destSedeKey];
    if (!sedeDest) {
        showToast('Error', 'Sede destino no encontrada', 'error');
        return;
    }
    const esCrossSede = destSedeKey !== sedeKey;

    // Área destino (soporta buscador nuevo y nueva área)
    let destAreaName = document.getElementById('inv-transfer-dest').value;
    if (destAreaName === '__nueva__') {
        destAreaName = document.getElementById('inv-transfer-dest-search').value.trim().toUpperCase();
    }
    if (!destAreaName) {
        showToast('Error', 'Selecciona el área destino', 'error');
        return;
    }

    const responsableDest = document.getElementById('inv-transfer-responsable').value.trim();
    const fechaHoy = new Date().toLocaleDateString('es-CO', {day:'2-digit', month:'short', year:'numeric'});
    const indices = checked.map(cb => parseInt(cb.value));
    const seriales = Array.isArray(item.seriales) ? [...item.seriales] : (item.serial ? [item.serial] : Array(item.cantidad).fill(''));

    // Crear o encontrar área destino (en la sede destino)
    let destArea = sedeDest.inventario.find(a => a.area === destAreaName);
    if (!destArea) {
        destArea = { area: destAreaName, codigoArea: '', responsable: responsableDest, items: [] };
        sedeDest.inventario.push(destArea);
    }

    // Calcular siguiente ID para el área destino (usando prefijo de la sede destino)
    let maxNum = 0;
    sedeDest.inventario.forEach(a => a.items.forEach(it => {
        const m = it.id.match(/(\d+)$/);
        if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
    }));
    const newId = `${destSedeKey.toUpperCase()}-${String(maxNum + 1).padStart(3, '0')}`;

    const serialesTransladados = indices.map(i => seriales[i]).filter(Boolean);
    const ahoraNow = new Date().toISOString();
    const usuarioActual = (typeof APP_STATE !== 'undefined' && APP_STATE.userName) ? APP_STATE.userName : 'Sistema';
    const origenLabel = esCrossSede ? `${srcArea.area} (${sedeKey})` : srcArea.area;

    // ── Ítem destino ──────────────────────────────────────────────────────────
    const itemDestino = {
        ...item,
        id: newId,
        cantidad: indices.length,
        seriales: serialesTransladados,
        serialesEstado: indices.map(i => (Array.isArray(item.serialesEstado) ? item.serialesEstado[i] : null) || 'Bueno'),
        serial: '',
        responsable: responsableDest,
        registradoPor: usuarioActual,
        fechaRegistro: ahoraNow,
        ultimaEdicion: null,
        fechaUltimaEdicion: null,
        historial: [],
        observaciones: `Traslado desde ${origenLabel} · ${fechaHoy}${item.observaciones ? ' | ' + item.observaciones : ''}`
    };
    destArea.items.push(itemDestino);

    // ── Registrar en adiciones de la sede destino (log global) ───────────────
    if (!sedeDest.adiciones) sedeDest.adiciones = [];
    sedeDest.adiciones.push({
        id: newId,
        nombre: item.nombre,
        cantidad: indices.length,
        area: destAreaName,
        tipo: esCrossSede ? 'Traslado Entre Sedes' : 'Traslado',
        origen: origenLabel,
        seriales: serialesTransladados,
        registradoPor: usuarioActual,
        fechaRegistro: ahoraNow,
        observaciones: `Traslado desde ${origenLabel} → ${destAreaName}${esCrossSede ? ` (${destSedeKey})` : ''}`
    });

    // ── Historial en el ítem ORIGEN ───────────────────────────────────────────
    if (!item.historial) item.historial = [];
    item.historial.push({
        fecha: ahoraNow,
        por: usuarioActual,
        tipo: 'traslado',
        cantidad: item.cantidad,
        estado: item.estado || '',
        responsable: item.responsable || '',
        nota: `Traslado de ${indices.length} unidad(es) → ${destAreaName}${esCrossSede ? ` (sede ${destSedeKey})` : ''} (nuevo ID: ${newId})`
    });

    // ── Actualizar ítem origen: quitar unidades trasladadas ───────────────────
    const serialesRestantes = seriales.filter((_, i) => !indices.includes(i));
    item.cantidad -= indices.length;
    item.seriales = serialesRestantes;
    item.serial = '';
    item.ultimaEdicion = usuarioActual;
    item.fechaUltimaEdicion = ahoraNow;

    // Si quedó en 0, eliminar el ítem origen
    if (item.cantidad <= 0) {
        srcArea.items.splice(itemIdx, 1);
        if (srcArea.items.length === 0) sede.inventario.splice(areaIdx, 1);
    }

    saveInventory();
    document.getElementById('inv-transfer-overlay').remove();
    showToast('✅ Traslado realizado',
        `${indices.length} unidad(es) de "${item.nombre}" trasladada(s) a ${destAreaName}${esCrossSede ? ` · ${destSedeKey}` : ''} (ID: ${newId})`,
        'success');

    window._invSedeActiva = sedeKey;
    renderInventoryView(document.getElementById('view-dashboard'));
};

// ─── Paso 2: Mostrar historial inline de un ítem del inventario activo ───
window.toggleItemHistory = (btn, sedeKey, areaIdx, itemIdx) => {
    const row = btn.closest('tr');
    if (!row) return;

    // Si ya existe el panel, alternarlo
    const existing = row.nextSibling;
    if (existing && existing.classList && existing.classList.contains('inv-history-row')) {
        existing.remove();
        btn.style.opacity = '';
        return;
    }

    const sede = INVENTORY_DB[sedeKey];
    const area = sede.inventario[areaIdx];
    const item = area.items[itemIdx];
    const historial = item.historial || [];

    const colCount = row.cells.length;
    const histRow = document.createElement('tr');
    histRow.className = 'inv-history-row';

    const cell = document.createElement('td');
    cell.colSpan = colCount;
    cell.style.cssText = 'padding:0;background:#f8faff;border-bottom:2px solid #bfdbfe;';

    if (historial.length === 0) {
        cell.innerHTML = `<div style="padding:10px 20px;font-size:0.82rem;color:#94a3b8;font-style:italic;">Sin cambios registrados aún. El historial se genera a partir de la próxima edición.</div>`;
    } else {
        const rows = [...historial].reverse().map((h, i) => {
            const fecha = new Date(h.fecha).toLocaleString('es-CO', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
            const esUltimo = i === historial.length - 1;
            return `<tr style="border-bottom:1px solid #e2e8f0;${esUltimo ? 'opacity:0.5;' : ''}">
                <td style="padding:6px 12px;font-size:0.78rem;color:#475569;white-space:nowrap;">${fecha}</td>
                <td style="padding:6px 12px;font-size:0.78rem;color:#1e293b;font-weight:600;">${h.por || '—'}</td>
                <td style="padding:6px 12px;font-size:0.78rem;text-align:center;">${h.cantidad ?? '—'}</td>
                <td style="padding:6px 12px;"><span class="inv-estado inv-estado-${(h.estado||'').toLowerCase().replace(/\s+/g,'-')}" style="font-size:0.72rem;">${h.estado || '—'}</span></td>
                <td style="padding:6px 12px;font-size:0.78rem;color:#64748b;">${h.responsable || '—'}</td>
                <td style="padding:6px 12px;font-size:0.78rem;color:#94a3b8;">${h.nota || h.observaciones || ''}</td>
            </tr>`;
        }).join('');

        cell.innerHTML = `
            <div style="padding:8px 12px 4px;display:flex;align-items:center;gap:8px;">
                <span style="font-size:0.72rem;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:0.5px;">📜 Historial de cambios — ${titleCase(item.nombre)}</span>
                <span style="font-size:0.7rem;background:#dbeafe;color:#1d4ed8;border-radius:10px;padding:1px 8px;font-weight:600;">${historial.length} registro${historial.length !== 1 ? 's' : ''}</span>
            </div>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-family:inherit;">
                    <thead>
                        <tr style="background:#eff6ff;border-bottom:1px solid #bfdbfe;">
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:left;white-space:nowrap;">Fecha</th>
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:left;">Editado por</th>
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:center;">Cant. anterior</th>
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:left;">Estado anterior</th>
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:left;">Responsable</th>
                            <th style="padding:5px 12px;font-size:0.7rem;color:#3b82f6;font-weight:700;text-align:left;">Nota</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }

    histRow.appendChild(cell);
    row.parentNode.insertBefore(histRow, row.nextSibling);
    btn.style.opacity = '1';
    btn.style.color = '#3b82f6';
};
// ─── Drag & Drop reordenamiento de ítems ───
window._invDragState = null;

window._invDragStart = (e, sedeKey, tab, areaIdx, itemIdx) => {
    window._invDragState = { sedeKey, tab, areaIdx, fromIdx: itemIdx };
    setTimeout(() => { e.target.closest('tr').style.opacity = '0.4'; }, 0);
    e.dataTransfer.effectAllowed = 'move';
};

window._invDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.style.background = '#eff6ff';
    e.currentTarget.style.outline = '2px dashed #3b82f6';
};

window._invDragLeave = (e) => {
    e.currentTarget.style.background = '';
    e.currentTarget.style.outline = '';
};

window._invDragEnd = (e) => {
    const tr = e.target.closest('tr');
    if (tr) { tr.style.opacity = ''; tr.style.background = ''; tr.style.outline = ''; }
    window._invDragState = null;
};

window._invDragDrop = (e, sedeKey, tab, areaIdx, toIdx) => {
    e.preventDefault();
    e.currentTarget.style.background = '';
    e.currentTarget.style.outline = '';
    const state = window._invDragState;
    if (!state || state.fromIdx === toIdx) return;
    const items = INVENTORY_DB[sedeKey][tab][areaIdx].items;
    const [moved] = items.splice(state.fromIdx, 1);
    items.splice(toIdx, 0, moved);
    saveInventory();
    const card = document.querySelector('.inv-grid-card.active');
    if (card) {
        card.classList.remove('active');
        window.toggleAreaDetail(sedeKey, tab, areaIdx, card);
    }
    window._invDragState = null;
};
