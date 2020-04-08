export class Pedido {
    id: number;
    fechaRecibido: string;
    fechaEntrega: string;
    estado: string;
    productos: any[]=[];
    employee: any[]=[];
    precioFinal: string;
    active: boolean;
}