import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export const generarReporteInterno = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte Interno');

    // Configurar estilos generales para el reporte
    worksheet.properties.defaultRowHeight = 20;
    worksheet.columns = [
        { width: 10 }, // Columna A (Nº)
        { width: 20 }, // Columna B (Documento)
        { width: 20 }, // Columna C (Número)
        { width: 35 }, // Columna D (Género/Producto)
        { width: 10 }, // Columna E (Unidad)
        { width: 15 }, // Columna F (Fecha)
        { width: 15 }, // Columna G (Paraje)
        { width: 15 }, // Columna H (Remisión)
        { width: 40 }, // Columna I (Transportista)
        { width: 35 }, // Columna J (Camión)
        { width: 40 }, // Columna K (Comprador)
        { width: 10 }, // Columna L (No.)
        { width: 15 }, // Columna M (Prima)
        { width: 15 }, // Columna N (Secundario)
        { width: 15 }, // Columna O (Tercio)
        { width: 15 }, // Columna P (Seco)
        { width: 15 }, // Columna Q (Bolo)
        { width: 15 }, // Columna R (Total)
    ];

    // Títulos de la tabla
    const encabezados = [
        'Nº', 'DOCUMENTO', 'NÚMERO', 'Género/Producto', 'Unidad', 'FECHA', 
        'PARAJE', 'REMISIÓN', 'TRANSPORTISTA', 'CAMIÓN', 'COMPRADOR', 
        'No.', 'PRIMA', 'SECUNDARIO', 'TERCIO', 'SECO', 'BOLO', 'TOTAL'
    ];
    const encabezadosRow = worksheet.addRow(encabezados);
    encabezadosRow.eachCell((cell) => {
        cell.font = { bold: true };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'A7D477' }, 
        };
        cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
        };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });

    // Datos de ejemplo para la tabla (de acuerdo con lo que ves en la imagen)
    const datosTabla = [
        [1, 'Rem. Ftal.', '35/2537328', 'Pinus spp/ aserrío de 2.62 mts.', 'm3', '25/11/2022', 
         'Grúa Vieja', '25/200', 'Jonás Ilescas Manzano', 'Torton Dina Volvo', 'Forestal Pasam S.A DE C.V', 
         63, 19_313, 1_897, 953, 22_163, 23_934_966],
        [2, 'Rem. Ftal.', '35/2537329', 'Pinus spp/ aserrío de 2.62 mts.', 'm3', '26/11/2022', 
         'Grúa Vieja', '26/200', 'Francisco Cascos Martínez', 'Torton Dina Rojo', 'Forestal Pasam S.A DE C.V', 
         65, 18_179, 3_361, 2_433, 22_853, 22_288_803],
        [3, 'Rem. Ftal.', '35/2537330', 'Pinus spp/ aserrío de 2.62 mts.', 'm3', '28/11/2022', 
         'Grúa Vieja', '27/200', 'Ángel Norberto Barón López', 'Freightliner', 'Forestal Pasam S.A DE C.V', 
         46, 15_483, 1_904, 2_417, 19_773, 22_779_057],
        // ... más filas de datos según sea necesario
    ];

    // Agregar los datos de la tabla
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

    // Descargar el archivo
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), 'Reporte_Interno.xlsx');
};
