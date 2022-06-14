import { Layout } from "components";

export const CadastroProdutos: React.FC = () => {
  return (
    <Layout titulo="Cadastro de Produtos">
      <div className="columns">
        <div className="field column is-half">
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
        <div className="field column is-half">
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
      </div>  

      <div className="columns">
        <div className="field column is-full">
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
      </div>

      <div className="columns">
        <div className="field column is-full">
            <label className="label" htmlFor="InputDescricao">
            Descrição: *
            </label>
            <div className="control">
            <textarea
                className="textarea"
                placeholder="Escreva a descrição detalhada do produto"
                id="InputDescricao"
            ></textarea>
            </div>
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
