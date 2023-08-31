import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as C from './styles'
import { CaretLeft, EyeSlash } from 'phosphor-react-native';
import Spotify from '../../assets/Spotify.svg'
import GoogleLogo from '../../assets/GoogleLogo.svg'
import AppleLogo from '../../assets/AppleLogo.svg'

export default function SignIn() {
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
                <Spotify  width={108} height={33}/>
                <View style={{width:32, height:32}}/>
            </C.Header>
            <C.ContentHeader>
                <C.ContentHeaderTitle>Sign in</C.ContentHeaderTitle>
                <C.ContentHeaderSubtitle>If you need any support click here</C.ContentHeaderSubtitle>
            </C.ContentHeader>
            <C.ContentInput>
                <C.InputGroup>
                    <TextInput style={{height:"100%",color:"#F2F2F2"}} placeholderTextColor={"#757575"} placeholder='Enter Username Or Email'/>
                </C.InputGroup>
                <C.InputGroup>
                    <TextInput style={{height:"100%"}} placeholderTextColor={"#757575"} placeholder='Password'/>
                    <EyeSlash size={32} color='#757575' weight='light'/>
                </C.InputGroup>
                <C.Recovery>Recovery password</C.Recovery>
            </C.ContentInput>
            <C.ContainerButton>    
                <TouchableOpacity style={{
                    paddingHorizontal:30,
                    backgroundColor:"#42C83C",
                    height:80,
                    borderRadius:30,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <C.ButtonSignIn>Sign in</C.ButtonSignIn>
                </TouchableOpacity>
            </C.ContainerButton>
            <C.Sepatator>
                <View style={{height:1, backgroundColor:"#757575", flex:1}}/>
                <C.SepatatorText>Or</C.SepatatorText>
                <View style={{height:1, backgroundColor:"#757575", flex:1}}/>
            </C.Sepatator>

            <C.SocialContainerButton>
            <TouchableOpacity>
                <GoogleLogo />
            </TouchableOpacity>
            <TouchableOpacity >
                <AppleLogo />
            </TouchableOpacity>
            </C.SocialContainerButton>
            <C.FooterText>not a member ? register now</C.FooterText>
        </C.Container>
  );
}
