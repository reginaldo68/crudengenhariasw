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
