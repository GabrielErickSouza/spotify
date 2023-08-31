import styled from 'styled-components/native'


export const Container = styled.View`
    flex:1;
    backgroundColor:#1C1B1B;
`
export const Header = styled.View`
    flexDirection:row;
    alignItems:center;
    justifyContent: space-between;
    paddingTop:40px;
    paddingHorizontal:30px;
`
export const ContentHeader = styled.View`
    width:100%;
    paddingHorizontal:30px;
    alignItems:center;
    justifyContent:center;
    paddingTop:80px;
    paddingBottom:38px;
    gap:22px;
`
export const ContentHeaderTitle = styled.Text`
    color:#F2F2F2;
    fontSize:20px;
    lineHeight:40px;
    fontWeight:700;
`
export const ContentHeaderSubtitle = styled.Text`
    fontSize:12px;
    fontWeight:400;
    color:#E1E1E1;
`
export const ContentInput = styled.View`
    width:100%;
    alignItems:flex-start;
    justifyContent:center;
    paddingHorizontal:30px;
    justifyContent:center;
    gap:16px;
`
export const InputGroup = styled.View`
    width:100%;
    paddingHorizontal:27px;
    height:80px;
    borderWidth:1px;
    borderColor:#757575;
    borderRadius:30px;
    alignItems:center;
    justifyContent:space-between;
    flexDirection:row;
`
export const Recovery = styled.Text`
    color:#AEAEAE;
    fontSize:14px;
    fontWeight:700;
    paddingHorizontal:25px;
`
export const ContainerButton = styled.View`
    paddingTop:22px;
    paddingHorizontal:30px;
`
export const ButtonSignIn = styled.Text`
    color:#fff;
    fontSize:20px;
    fontWeight:700;
`

export const Sepatator = styled.View`
    width:100%;
    flexDirection:row;
    alignItems:center;
    gap:10px;
    paddingTop:21px;
    paddingHorizontal:30px;   
`
export const SepatatorText = styled.Text`
    color:#fff;
    fontSize:12px;
    fontWeight:400;
`

export const SocialContainerButton = styled.View`
    flexDirection:row;
    width:100%;
    alignItems:center;
    gap:58px;
    justifyContent:center;
    paddingTop:20px;
`

export const FooterText = styled.Text`
    color:#DCDCDC;
    textTransform:capitalize;
    alignSelf:center;
    paddingTop:15px;
`