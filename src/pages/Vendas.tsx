import React from 'react'
import { useData } from '../hooks/useContext'
import SellItem from '../components/SellItem/SellItem'

const Vendas = () => {

  const { data } = useData()

  if (!data) return null
  return (
    <ul>
      {data.map(venda => <li key={venda.id}><SellItem venda={venda} /></li>)}
    </ul>
  )
}

export default Vendas