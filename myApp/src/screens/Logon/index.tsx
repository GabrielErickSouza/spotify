import {Text, TouchableOpacity, View, Image } from 'react-native';
import * as C from './styles'
import { CaretLeft } from 'phosphor-react-native';
import Spotify from '../../assets/Spotify.svg'
import image from '../../assets/image2.png'
import union from '../../assets/Union.png'
import union1 from '../../assets/Union-1.png'


export default function Logon() {
  return (
        <C.Container>
            <C.Header>
                <TouchableOpacity style={{
                    width:32, 
                    height:32, 
                    backgroundColor:"rgba(255,255,255,0.03)",
                    borderRadius:50,
                    alignItems:"center",
                    justifyContent:"center"
                    }}>
                    <CaretLeft  color="#DDDDDD"/>
                </TouchableOpacity>
            </C.Header>
            <C.Content>
                <Spotify width={235} height={75}/>
                <C.ContentTextTitle>Enjoy listening to music</C.ContentTextTitle> 
                <C.ContentTextSubTitle>Spotify is a proprietary sweedish audio and media services</C.ContentTextSubTitle> 
                <C.ContainerButtons>
                    <TouchableOpacity style={{
                        width:147, 
                        height:73, 
                        backgroundColor:"#42C83C", 
                        borderRadius:30,
                        alignItems:"center",
                        justifyContent:"center"
                        }}>
                        <C.ButtonRegisterText>Register</C.ButtonRegisterText>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width:147, 
                        height:73,  
                        borderRadius:30,
                        alignItems:"center",
                        justifyContent:"center"
                        }}>
                        <C.ButtonRegisterText>sign up</C.ButtonRegisterText>
                    </TouchableOpacity>
                </C.ContainerButtons>
            </C.Content>
            <C.ImageLeft source={image}/>
            <C.ImageRight source={union}/> 
            <C.Image source={union1}/>           
        </C.Container>
  );
}
