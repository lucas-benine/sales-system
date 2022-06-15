import { Layout } from "components"
import { useState } from "react"

export const CadastroProdutos: React.FC = () => {

    const [sku, setSku] = useState('')
    const [preco, setPreco] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const submitButtonSave = () => {
        const produto = {
            sku,
            preco,
            nome,
            descricao
        }
        console.log(produto)
    }

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
                        value={sku}
                        onChange={event => {
                                setSku(event.target.value)
                        }}
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
                        value={preco}
                        onChange={event => {
                            setPreco(event.target.value)
                        }}
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
                        value={nome}
                        onChange={event => {
                            setNome(event.target.value)
                        }}
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
                        value={descricao}
                        onChange={event => {
                            setDescricao(event.target.value)
                        }}
                        id="InputDescricao"
                    ></textarea>
                </div>
            </div>
        </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submitButtonSave}>Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancelar</button>
                </div>
        </div>
        </Layout>
    );
};
