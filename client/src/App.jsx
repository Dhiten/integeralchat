import React from 'react'
//dependencias para la Api del chat
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

//Importar los componentes
import { ChannelContainer, ChannelListContainer } from './components';

import './App.css'

const apiKey= 'ju9n9wpw7ze8';

const client=StreamChat.getInstance(apiKey);

//Creation off the app
const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer/>
            <ChannelContainer/>
        </Chat>
    </div>
  )
}

export default App