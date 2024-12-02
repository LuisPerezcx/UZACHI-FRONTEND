import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export const generarReporteSemarnat = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    // Configurar estilos globales
    worksheet.properties.defaultRowHeight = 20;
    worksheet.columns = [
        { width: 25 }, // Columna A
        { width: 10 }, // Columna B
        { width: 15 }, // Columna C
        { width: 15 }, // Columna D
        { width: 30 }, // Columna E
        { width: 10 }, // Columna F
        { width: 10 }, // Columna G
    ];

    const logo = await fetch('/assets/logoSemarnat.webp') // Cambia esta ruta según sea necesario
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer());
  
  const logoId = workbook.addImage({
    buffer: logo,
    extension: 'webp', // Asegúrate de usar la extensión correcta según el formato de la imagen
  });
  
  worksheet.addImage(logoId, {
    tl: { col: 0, row: 0 },  // Coordenadas de la imagen
    ext: { width: 150, height: 70 },  // Tamaño de la imagen
  });
  


    // Títulos principales
    const titulos = [
        ['COMISARIADO DE BIENES COMUNALES'],
        ['SANTIAGO XIACUI, IXTLÁN DE JUÁREZ, OAXACA'],
        ['INFORME ANUAL DE AVISOS DE APROVECHAMIENTO'],
        ['REMISIONES FORESTALES EMITIDAS'],
        ['ANUALIDAD 2023-2024 (8/8)'],
    ];
    titulos.forEach((titulo, index) => {
        const row = worksheet.addRow(titulo);
        row.font = { bold: true, size: 14 };
        row.alignment = { horizontal: 'center' };
        worksheet.mergeCells(`A${index + 1}:G${index + 1}`);
    });

    worksheet.addRow([]);
    worksheet.addRow(['INFORMACIÓN SOBRE EL TITULAR DEL APROVECHAMIENTO O REMITENTE']);

    const datosTitulares = [
        ['Nombre del titular o remitente:', 'Comisariado de Bienes Comunales de Santiago Xiacui'],
        ['Registro Federal de Contribuyentes:', 'CBC870315II6'],
        ['Registro Forestal Nacional:', 'LIBRO OAX, TIPO PI, VOL. 1, NO. 12'],
        ['Anualidad que se informa:', 'Anualidad (8/8) 2023-2024'],
        ['Municipio:', 'Santiago Xiacui'],
        ['Entidad:', 'Oaxaca'],
        ['Domicilio Fiscal:', 'Conocido, Santiago Xiacui, Ixtlán, Oaxaca'],
    ];
    datosTitulares.forEach((dato) => {
        const row = worksheet.addRow(dato);
        row.font = { size: 12 };
    });

    worksheet.addRow([]);

    // Encabezados de la tabla
    const encabezados = [
        'Documento emitido',
        'Folio autorizado',
        'Folio progresivo',
        'De fecha',
        'Género/Producto',
        'Unidad',
        'Cantidad',
    ];
    const encabezadosRow = worksheet.addRow(encabezados);
    encabezadosRow.eachCell((cell) => {
        cell.font = { bold: true };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFF00' },
        };
        cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
        };
        cell.alignment = { horizontal: 'center' };
    });

    // Datos de la tabla
    const datosTabla = [
        ['Remisión Forestal', 287, 27291510, '5/2/2024', 'Pinus spp/madera en rollo', 'm3', 16.753],
        ['Remisión Forestal', 288, 27291511, '5/3/2024', 'Pinus spp/madera en rollo', 'm3', 11.914],
        ['Remisión Forestal', 289, 27291512, '5/3/2024', 'Cancelada por error de datos', 'm3', 0.0],
        ['Remisión Forestal', 290, 27291513, '5/4/2024', 'Pinus spp/madera en rollo', 'm3', 18.303],
        ['Remisión Forestal', 291, 27291514, '5/4/2024', 'Pinus spp/madera en rollo', 'm3', 22.769],
    ];

    datosTabla.forEach((fila) => {
        const row = worksheet.addRow(fila);
        row.eachCell((cell) => {
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' },
            };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });
    });

    worksheet.addRow([]);
    worksheet.addRow(['TOTAL:', '', '', '', '', '', 240.312]);

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), 'Reporte_SIMARNAT.xlsx');
};
