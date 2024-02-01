import { BoxInput } from "../../components/BoxInput"
import { ContainerForm, ScrollForm } from "./style"


export const HomeScreen = () => {

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput placeholder={'cep'} keyType="numeric" maxLength={9} textLabel={'informe o cep'}/>

            </ContainerForm>

        </ScrollForm>
    )
}

export default HomeScreen