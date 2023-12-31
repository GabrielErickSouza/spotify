import {  View, Image, Text, TouchableOpacity } from 'react-native';
import * as C from './styles'
import bille from '../../assets/bille.png'
import Spotify from '../../assets/Spotify.svg'

export default function GetStarted() {
  return (
    <C.Container>
        <C.ImgBackground  source={bille}/>
        <Spotify  style={{margin:37}} width={196} height={59}/>
        <C.Content>
            <C.ContentText>Enjoy listening to music</C.ContentText>
            <C.ContentTextTwo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aut ducimus! Sapiente eaque fugiat dicta optio ad excepturi quis rem est.</C.ContentTextTwo>
            <TouchableOpacity style={{
                width:329, 
                height:92,
                backgroundColor:"#42C83C",
                borderRadius:30,
                marginTop:37,
                alignItems:"center",
                justifyContent:"center"
                }}>
                <C.Button>Get Started</C.Button>
            </TouchableOpacity>
        </C.Content>
    </C.Container>
  );
}

