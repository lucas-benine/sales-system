import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    sizeInput?: string;
    label: string;
    onChange?: (value: any) => void;
}

export const Input: React.FC<InputProps> = ({
    sizeInput,
    label,
    onChange,
    id,
    ...InputDefaultProps
}: InputProps) => {
    return(
        <div className={`field column ${sizeInput}`}>
                    <label className="label" htmlFor={id}>
                        {label}
                    </label>
                <div className="control">
                    <input
                        className="input"
                        {...InputDefaultProps}
                        onChange={event => {
                                if(onChange){
                                    onChange(event.target.value) 
                                }
                        }}
                        id={id}
                    />
                </div>
            </div>
    )
}