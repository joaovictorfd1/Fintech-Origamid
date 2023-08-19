import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { IVendas } from '../hooks/useContext'
import Loading from '../components/Loading/Loading';


type IVenda = Omit<IVendas, 'data'>;

const Venda = () => {
  const { id } = useParams()
  const { data, loading } = useFetch<IVenda>(`https://data.origamid.dev/vendas/${id}`)
  console.log(loading)
  if (!data) return null
  if (loading) return <Loading />
  return (
    <div>
      <div className='box mb'>ID: {data.id}</div>
      <div className='box mb'>Nome: {data.nome}</div>
      <div className='box mb'>Preço: {data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
      <div className='box mb'>Status: {data.status}</div>
      <div className='box mb'>Pagamento: {data.pagamento}</div>
    </div>
  )
}

export default Venda