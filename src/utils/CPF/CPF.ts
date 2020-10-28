import { cpfUnmask } from './cpfMask';

export class CPF {

  public fullCPFNumber: boolean;
  private cpfLenghWithMask = 14;

  constructor ( public cpf: string ) {
    this.fullCPFNumber = cpf.length === this.cpfLenghWithMask ? true : false;
  }

  getUnmaskedCPF (): string {
    return cpfUnmask( this.cpf );
  }
}