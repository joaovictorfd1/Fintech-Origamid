import React from 'react'
import { useData } from '../../hooks/useContext'
import DateRange from '../DateRange/DateRange';
import Months from '../Months/Months';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const { data } = useData();
  const [ title, setTitle ] = React.useState("Resumo")
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Fintech | Resumo"
      return setTitle("Resumo")
    }
    document.title = "Fintech | Vendas"
    return setTitle("Vendas")
  }, [location])

  return (
    <header className='mb'>
      <div className='daterange mb'>
        <DateRange />
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <Months />
    </header>
  )
}

export default Header