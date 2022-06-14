import { Layout } from "components";

export const CadastroProdutos: React.FC = () => {
  return (
    <Layout titulo="Cadastro de Produtos">
      <div className="field">
        <label className="label" htmlFor="inputSKU">
          SKU: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o SKU do produto"
            id="inputSKU"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="inputNome">
          Nome: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o Nome do produto"
            id="inputNome"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="inputPreco">
          Preço: *
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Digite o Preço do produto"
            id="inputPreco"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="InputDescricao">
          Descrição: *
        </label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Digite o Preço do produto"
            id="InputDescricao"
          ></textarea>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancelar</button>
        </div>
      </div>
    </Layout>
  );
};
