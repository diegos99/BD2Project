export class Pedido {
    id: number;
    fechaRecibido: string;
    fechaEntrega: string;
    estado: string;
    productos: any[]=[];
    employee: object;
    precioFinal: string;
    active: boolean;
}