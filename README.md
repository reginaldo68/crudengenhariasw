# crudengenhariasw

    query.valor && (objParcialProduto['valor'] = query.valor);
    query.dataEntrada && (objParcialProduto['dataEntrada'] = query.dataEntrada);
    query.quantidade && (objParcialProduto['quantidade'] = query.quantidade);
    query.funcionario && (objParcialProduto['funcionario'] = query.funcionario);
    query.comprador && (objParcialProduto['comprador'] = query.comprador);

    const facade = new ProdutoFacade();
    const result = await facade.consultar(objParcialProduto);
@@ -63,19 +63,21 @@ export default class ProdutoController extends Router{
    );

    const {
      status,
      nome: pro_nome,
      valor,
      dataEntrada,
      quantidade,
      funcionario,
      comprador,
    } = body.data[0].produto;

    const produto = new Produto(
      status,
      pro_nome,
      valor,
      dataEntrada,
      quantidade,
      funcionario,
      comprador,
      fichaTecnica
    );

@@ -126,19 +128,21 @@ export default class ProdutoController extends Router{

    const {
      id: pro_id,
      status,
      nome: pro_nome,
      valor,
      dataEntrada,
      quantidade,
      funcionario,
      comprador,
    } = body.data[0].produto;

    const produto = new Produto(
      status,
      pro_nome,
      valor,
      dataEntrada,
      quantidade,
      funcionario,
      comprador,
      fichaTecnica
    );
    produto.id = pro_id;
