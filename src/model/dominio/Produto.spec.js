import FichaTecnica from './FichaTecnica';
import Acessorio from './Acessorio';
import Produto from './Produto';
const acessorio = new Acessorio('espelho central', 'dispositivo de visualização posterior', 4);
const acessorioList = [acessorio, acessorio];
const fichaTecnica = new FichaTecnica (
  'sedan',
  'offroad',
  'impreza',
  'carrão dos rally',
  'subaro impreza default',
  'kit motors offroad',
  'caranagem de rally',
  'somente na cor azul',
  acessorioList
);
const objExpct = {
  status: true,
  nome: 'subaru imprenza sxz',
  valor: 123000.00,
  dataEntrada: 1591562332197,
  quantidade: 6,
  funcionario: 'José das Neves',
  comprador: 'José das Neves',
  _fichaTecnica: fichaTecnica
}
import EntidadeDominio from './EntidadeDominio';

export default class Produto extends EntidadeDominio {
  status: boolean;
  nome: string;
  valor: number;
  dataEntrada: number;
  dataEntrada: number | undefined;
  quantidade: number;
  funcionario: string;
  comprador: string;
  private _fichaTecnica: FichaTecnica | undefined
  constructor(
    status: boolean,
    nome: string,
    valor: number,
    dataEntrada: number,
    dataEntrada: number | undefined,
    quantidade: number,
    funcionario: string,
    comprador: string,
    fichaTecnica: FichaTecnica | undefined = undefined
  ) {
    super();
    this.status = status;
    this.nome = nome,
    this.valor = valor,
    this.dataEntrada = dataEntrada,
    this.quantidade = quantidade,
    this.funcionario = funcionario,
    this.comprador = comprador,
    this._fichaTecnica = fichaTecnica 
  }
  get fichaTecnica(){}
