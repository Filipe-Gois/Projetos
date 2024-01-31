import { HeaderContainer, HeaderContent, TextHeader } from "./style"
import ShadowView from 'react-native-shadow-view';

export const Header = () => {
    return (
        // <ShadowView
        //     style={{
        //         shadowColor: "#000",
        //         shadowOffset: {
        //             width: 0,
        //             height: 4,
        //         },
        //         shadowOpacity: 15,
        //         shadowRadius: 0,
        //     }}
        // >

            <HeaderContainer>

                <HeaderContent>

                    <TextHeader>Consumo da API ViaCep</TextHeader>

                </HeaderContent>

            </HeaderContainer>
        // </ShadowView>
    )

}
