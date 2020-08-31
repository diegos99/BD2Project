import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from "rxjs";
import { VentasService } from "../ventas.service";
import { DetalleFactura } from "../detallefactura";
import { Router } from '@angular/router';

import 'core-js';
import 'zone.js/dist/zone';
import { ExcelService } from '../excel.service';


import * as xlsx from 'xlsx';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {
detalleFactura: Observable<DetalleFactura[]>;
// Implementacion de PDFMAKE
@ViewChild("content", { static: false }) content: ElementRef;
  constructor(private employeeService: VentasService,
              private router: Router,
              private excelService: ExcelService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.detalleFactura = this.employeeService.getVentasList();
  }
  
  //Este metodo funciona con el import xlsx (npm i xlsx), pero esteticamente no es bueno y no deja agregar img
  public downloadExcel() {
    //let content = this.content.nativeElement;
    let element = document.getElementById('content');
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.content.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'reporteVentas.xlsx');
  }

  public downloadPDF() {
    let content = this.content.nativeElement;
    var html = htmlToPdfmake(content.innerHTML);
    var img = htmlToPdfmake(content.innerHTML);
    var docDefinition = {
      pageOrientation: 'landscape',
      content: [
          html],
      styles: {
        "html-table": {
          fontSize: 10,
        }
      },
    };
    // background:'yellow' // it will add a yellow background to all <STRONG> elements
    pdfMake.createPdf(docDefinition).download('ReporteVentas.pdf');
    
    // implementacion de JSPDF
    /* let doc = new jsPDF({orientation: 'landscape', unit: 'pt', format: 'a4', precision: 16});
    let especialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };
    let content = this.content.nativeElement

    doc.fromHTML(content.innerHTML, 50, 300, {
      width: 200,
      elementHandlers: especialElementHandlers
    });
    doc.setFontSize(40);
    doc.save('test.pdf'); */

    // Implementacion (jsPDF opcion 2)
    /* const doc = new jsPDF('landscape');
      doc.fromHTML(document.getElementById('content'), 20, 15, {
        'width': 500,
      });
      doc.setFontSize(1);
      doc.save('test'); */

    // Implementacion de html2canvas (screenshot)
    /* const options = {
        filename: 'Our_awesome_file.pdf',
        image: {type: 'jpeg'},
        html2canvas: {width: '1500', left: '1'},
        jsPDF: {orientation: 'landscape', left: '1500'}
      };
      const content: Element = document.getElementById('content');
      html2pdf()
      .from(content)
      .set(options)
      .save(); */
  }
}
