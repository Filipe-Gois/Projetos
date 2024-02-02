import { ContainerBox } from "./style"

export const Container = ({ fieldDirection = "column", children, fieldJustifyContent = "flex-start", fieldAlignItems = "stretch" }) => {
    return (

        <ContainerBox
            fieldAlignItems={fieldAlignItems}
            fieldJustifyContent={fieldJustifyContent}
            fieldDirection={fieldDirection}
        >

            {children}

        </ContainerBox>

    )
}