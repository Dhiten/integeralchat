import React,{useState} from 'react'
//dependencias para la Api del chat
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import 'stream-chat-react/dist/css/index.css'

//Importar los componentes
import { ChannelContainer, ChannelListContainer, Auth } from './components';

import './App.css'

const cookies = new Cookies();

const apiKey= 'ju9n9wpw7ze8';
const client=StreamChat.getInstance(apiKey);
const authToken =cookies.get("token");

if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    token: cookies.get('token'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
    },authToken);
}

//Creation off the app
const App = () => {
  const [createType, setCreateType]=useState('');
  const [isCreating, setIsCreating]=useState(false);
  const [isEditing, setIsEditing]=useState(false);


  if(!authToken)return <Auth/>
  
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
            />
            <ChannelContainer
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              createType={createType}/>
        </Chat>
    </div>
  )
}

export default App