import FichaTecnicaDAO from './FichaTecnicaDAO';
import Produto from '../../dominio/Produto';
import FichaTecnica from '../../dominio/FichaTecnica';
import Acessorio from '../../dominio/Acessorio';
import ProdutoDAO from './ProdutoDAO';
const acessorio1 = new Acessorio('espelho central', 'dispositivo de visualização posterior', 4);
const acessorio2 = new Acessorio('porta copo', 'dispositivo de portar copos', 41);
const acessorioList = [acessorio1, acessorio2];
const objExpct = {
  categoria: 'sedan',
  subCategoria: 'offroad',
  nome: 'impreza',
  descricao: 'carrão dos rally',
  componenteBasico: 'subaro impreza default',
  componentePrimario: 'kit motors offroad',
  componenteSecundario: 'caranagem de rally',
  observacoes: 'somente na cor azul',
  _acessorioList: acessorioList
};
const fichaTecnica = new FichaTecnica(...Object.values(objExpct));
const fichaTecnica2 = new FichaTecnica(...Object.values(objExpct));

const objExpctToProduto = {
  status: true,
  nome: 'subaru imprenza sxz',
  valor: 123000.00,
  dataEntrada: 1591562332197,
  quantidade: 6,
  funcionario: 'José das Neves',
  comprador: 'José das Neves',
  _fichaTecnica: fichaTecnica
}

const produto = new Produto(...Object.values(objExpctToProduto));
const produto2 = new Produto(...Object.values(objExpctToProduto));

describe('ProdutoDAO service of persistence', () => {
  describe.skip('criar method', () => {
  describe('criar method', () => {
    it('should exists this method', () => {
      const dao = new ProdutoDAO();
      expect(dao).toBeInstanceOf(ProdutoDAO);
      expect(dao.criar).toBeDefined();
    });
    it('should return Result with Produto contain id returned after save in db and FichaTecnica with id', async () => {
      const dao = new ProdutoDAO();
      const result = await dao.criar(produto);
      expect(result.erro).toEqual(0);
      expect(result.data).toHaveLength(1);
      expect(result.data[0].id.toString()).toMatch(/^[\d]+$/);
    });
  });
  describe('alterar method', () => {
    it('should exists this method', () => {
      const dao = new ProdutoDAO();
      expect(dao).toBeInstanceOf(ProdutoDAO);
      expect(dao.alterar).toBeDefined();
    });
    it('should return one Produto with atributes updated', async () => {
      const randomNum = (Math.random()*100).toFixed(0);
      const oldNome = produto2.nome;
      produto2.id = 5;
      produto2.id = 1;
      produto2.nome += randomNum;
      produto2.quantidade = 21;
      const {data:[fichaTecnicaWithId]} = await (new FichaTecnicaDAO()).criar(fichaTecnica);
      produto2.fichaTecnica = fichaTecnicaWithId;
      const dao = new ProdutoDAO();
      const result = await dao.alterar(produto2);
      expect(result.erro).toEqual(0);
      expect(result.data).toHaveLength(1);
      expect(result.data[0].nome).toEqual(`${oldNome}${randomNum}`);
      produto2.nome = oldNome;
      expect(result.data[0].fichaTecnica.id).toEqual(fichaTecnicaWithId.id);
    });
  });
  describe('consultar method', () => {
  describe.only('consultar method', () => {
    it('should exists this method', () => {
      const dao = new ProdutoDAO();
      expect(dao).toBeInstanceOf(ProdutoDAO);
      expect(dao.consultar).toBeDefined();
    });
    it('should return all Produto when called without parameters', async () => {
      const dao = new ProdutoDAO();
      const result = await dao.consultar();
      console.log('total de produtos no banco ---->', result.data.length);
      expect(result.erro).toEqual(0);
      expect(result.data.length > 1).toBeTruthy();
      expect(result.data[0]).toBeInstanceOf(Produto);
      expect(result.data[0].fichaTecnica).toBeInstanceOf(FichaTecnica);
      expect(result.data[0].fichaTecnica.acessorioList[0]).toBeInstanceOf(Acessorio);
    });
    it('should return selected Produto by id', async () => {
      const dao = new ProdutoDAO();
      const result = await dao.consultar({ id: 3 });
      expect(result.erro).toEqual(0);
      expect(result.data.length).toEqual(1);
      expect(result.data[0].id).toEqual(3);
    });

    it.skip('should return selected Produto by other atribute', async () => {
    it('should return selected Produto by other atribute', async () => {
      const dao = new ProdutoDAO();
      const result = await dao.consultar({ nome: 'subaru imprenza sxz71', quantidade: 21});
      const targetName = 'junk';
      const targetQuantidade = 99;
      const result = await dao.consultar({ nome: targetName, quantidade: targetQuantidade});
      expect(result.erro).toEqual(0);
      expect(result.data.length > 1).toBe(true);
      expect(result.data.map( prod => prod.quantidade).includes(21)).toBe(true);
      expect(result.data.map( prod => prod.nome).includes('subaru imprenza sxz71')).toBe(true);
      expect(result.data.map( prod => prod.quantidade).includes(targetQuantidade)).toBe(true);
      expect(result.data.map( prod => prod.nome).includes(targetName)).toBe(true);
    });
  });
  describe('excluir method', () => {
    it('should exists this method', () => {
      const dao = new ProdutoDAO();
      expect(dao).toBeInstanceOf(ProdutoDAO);
      expect(dao.excluir).toBeDefined
    });
    it('should delete element by id', async () => {
      const dao = new ProdutoDAO();
      let {erro,data:[{id}]} = await dao.criar(produto);
      expect(erro).toEqual(0);
      const result = await dao.excluir(id);
      expect(result.erro).toEqual(0);
      const {data} = await dao.consultar({id});
      expect(data.length).toEqual(0);
    });
  });
});
