import { Layout, Input } from "components"
import { useState } from "react"

export const CadastroProdutos: React.FC = () => {

    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

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
            <Input 
                id="inputSku"
                type="text" 
                label="SKU *" 
                placeholder="Digite o SKU do produto" 
                value={sku}
                onChange={setSku}
                sizeInput="is-half"
            />
            
            <Input 
                id="inputPreco"
                type="number" 
                label="Preço: *" 
                placeholder="Digite o Preço do produto" 
                value={preco}
                onChange={setPreco}
                sizeInput="is-half"
            />
        </div>  

        <div className="columns">
            <Input 
                id="inputNome"
                type="text" 
                label="Nome: *" 
                placeholder="Digite o Nome do produto" 
                value={nome}
                onChange={setNome}
                sizeInput="is-full"
            />
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
