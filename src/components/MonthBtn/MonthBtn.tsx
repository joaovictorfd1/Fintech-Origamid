import React from 'react'
import { useData } from '../../hooks/useContext';


const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
}

function nameMonths(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n)
  return new Intl.DateTimeFormat('pt-br', { month: 'long' }).format(date)
}

function formateDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`
}

const MonthBtn = ({ n }: { n: number }) => {

  const { setInicio, setFinal } = useData()

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n)

    setInicio(formateDate(new Date(date.getFullYear(), date.getMonth(), 1)));
    setFinal(formateDate(new Date(date.getFullYear(), date.getMonth() + 1, 0)));
  }

  return (
    <button style={buttonStyle} onClick={() => setMes(n)}>{nameMonths(n)}</button>
  )
}

export default MonthBtn