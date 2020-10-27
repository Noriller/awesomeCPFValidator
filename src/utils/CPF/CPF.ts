import { cpfUnmask } from './cpfMask';

export class CPF {

  public fullCPFNumber: boolean;

  constructor ( public cpf: string ) {
    this.fullCPFNumber = cpf.length === 14 ? true : false;
  }

  getUnmaskedCPF (): number {
    return cpfUnmask( this.cpf );
  }
}