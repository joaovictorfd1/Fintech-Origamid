import React from 'react'
import { NavLink } from 'react-router-dom'
import fintech from '../../assets/fintech.svg'
import resumeIcon from '../../assets/icons/resumo.svg'
import sellIcon from '../../assets/icons/vendas.svg'
import webhooksIcon from '../../assets/icons/webhooks.svg'
import configurationsIcon from '../../assets/icons/configuracoes.svg'
import contactIcon from '../../assets/icons/contato.svg'
import logoutIcon from '../../assets/icons/sair.svg'
import FintechSVG from '../../assets/FintechSVG'

const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='Fintech Logo' />
      <ul>
        <li>
          <span>
            <img src={resumeIcon} />
          </span>
          <NavLink to="/"> Resumo </NavLink>
        </li>
        <li>
          <span>
            <img src={sellIcon} />
          </span>
          <NavLink to="/vendas"> Vendas </NavLink>
        </li>
        <li>
          <span>
            <img src={webhooksIcon} />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configurationsIcon} />
          </span>
          <a>Configuração</a>
        </li>
        <li>
          <span>
            <img src={contactIcon} />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={logoutIcon} />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav