import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie'
//componentes del chat
import {ChannelSearch, TeamChannelList, TeamChannelPrevie} from './'
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png'
//Barra lateral
const SideBar=()=>(
    <div className="channel-list__sidebar">
        <div className='channel-list__sidebar__icon1'>
        {/* iconos de la barra */}
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" widht='20' />
            </div>
            
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                    <img src={LogoutIcon} alt="Logout" widht='20' />
                </div>
        </div>
    </div>
)
//Componente donde aparecerá la información relevante, chats, grupos, etc.
const CompanyHeader =()=>(
    <div  className='channel-list__header'>
        <p className='channel-list__header__text'>List of Users</p>
    </div>
)

const ChannelListContainer = () => {
  return (
      <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <CompanyHeader/>
        </div>
      </>
  )
}

export default ChannelListContainer