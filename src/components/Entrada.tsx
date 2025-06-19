interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: string | number
  somenteLeitura?: boolean
  className?: string
  placeholder?: string
  valorMudou?: (valor: string | number) => void
}

export default function Entrada(props: EntradaProps){

   function tratarMudanca(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = props.tipo === 'number' ? +e.target.value : e.target.value
    props.valorMudou?.(valor)
  }

  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">
        {props.texto}
      </label>
      <input 
      type={props.tipo ?? 'text'} 
      value={props.valor} 
      readOnly={props.somenteLeitura}
      placeholder={props.placeholder}
      onChange={tratarMudanca}
      className={`
        border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}
      `}
      />
    </div>
  )
}