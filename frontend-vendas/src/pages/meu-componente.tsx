
type MensagemProps = {
    mensagem: string;
}

const Mensagem: React.FC<MensagemProps> = (props : MensagemProps) => {
    return(
        <div>
            {props.mensagem}
        </div>
    )
}

const MeuComponente = () => {
    return(
        <div>
            <Mensagem mensagem="Teste da props"/>
        </div>
    )   
}

export default MeuComponente;