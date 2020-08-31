import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { DatePipe } from '@angular/common';
import { Object } from 'core-js';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  async generateExcel(json: any[]) {


    // const ExcelJS = await import('exceljs');
    // console.log(ExcelJS);
    // const Workbook: any = {};

  // Excel Title, Header, Data
    const title = '                                                                           Reporte de ventas - Fábrica 502';
    const header = ['Factura', 'Fábrica', 'Producto', 'Descripcion', 'Cantidad', 'Subtotal'];

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');




// Add Image
    /* const logo = workbook.addImage({
  base64: logoFile.logoBase64,
  extension: 'jpeg',
}); */

    /* worksheet.addImage(logo, 'A1:A3'); */
    //worksheet.mergeCells('A3:E3');
    
    worksheet.addRow([]);
    worksheet.addRow([]);

// Add Row and formatting
const titleRow = worksheet.addRow([title]);
titleRow.font = { name: 'Arial', family: 4, size: 18, bold: true };
/* worksheet.addRow([]);
const subTitleRow = worksheet.addRow(['Fecha : ' + this.datePipe.transform(new Date(), 'medium')]);
 */

// Blank Row
    worksheet.addRow([]);

// Add Header Row
    const headerRow = worksheet.addRow(header);

// Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
  cell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'a9a7ae' },
    bgColor: { argb: 'FF0000FF' }
  };
  cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
});
// worksheet.addRows(data);


// Add Data and Conditional Formatting
  var convertido = Object.values(json);

  console.log('Este es el json convertido a lista', convertido)
  convertido.forEach(d => {
    var lista = Object.values(d);
    console.log('lista', lista)

    const row = worksheet.addRow(lista);
    const qty = row.getCell(5);
  /* let color = 'FF99FF99';
  if (+qty.value < 500) {
    color = 'FF9999';
  }

  qty.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: color }
  }; */
}

);


    worksheet.getColumn(1).width = 20;
    worksheet.getColumn(2).width = 17;
    worksheet.getColumn(3).width = 17;
    worksheet.getColumn(4).width = 25;
    worksheet.getColumn(5).width = 20;
    worksheet.getColumn(6).width = 30;
    worksheet.getColumn(7).width = 30;
    worksheet.getColumn(8).width = 25;
    worksheet.addRow([]);


// Footer Row
    /* const footerRow = worksheet.addRow(['Todos los derechos reservados']);
    footerRow.getCell(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFCCFFE5' }
};
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }; */

// Merge Cells
/*     worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`); */

// Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((json: any) => {
  const blob = new Blob([json], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, 'Reporte.xlsx');
});

  }
}
