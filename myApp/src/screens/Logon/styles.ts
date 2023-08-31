import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    backgroundColor: #1C1B1B;
`

export const Header = styled.View`
    marginTop:40px;
    paddingHorizontal:30px;
`

export const Content = styled.View`
    alignItems:center;
    width:100%;
    marginTop:111px;
    paddingHorizontal:50px;
    position:absolute;
    z-index:1;
`
export const ContentTextTitle = styled.Text`
    color:#F2F2F2;
    fontWeight:700;
    fontSize:20px;
    lineHeight:35px;
    textTransform:capitalize;
    marginTop:55px;
`
export const ContentTextSubTitle = styled.Text`
    color:#A0A0A0;
    fontWeight:400;
    fontSize:17px;
    lineHeight:25px;
    textTransform:capitalize;
    marginTop:21px;
    textAlign:center;
`
export const ContainerButtons = styled.View`
    width:100%;
    alignItems:center;
    flexDirection:row;
    justifyContent:space-around;
    marginTop:30px;
`
export const ButtonRegisterText = styled.Text`
    color:#ffffff;
    fontSize:19px;
    lineHeight:26px;
    fontWeight:700;
`

export const ImageLeft = styled.Image`
    position:absolute;
    top:300px;
`
export const ImageRight = styled.Image`
    position:absolute;
    left:220px;
`
export const Image = styled.Image`
    position:absolute;
    left:230px;
    bottom:-2px;
`