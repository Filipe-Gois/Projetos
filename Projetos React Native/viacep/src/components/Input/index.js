import { InputText } from "./style"

export const Input = ({

    editTable,
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,


}) => {
    return (

        <InputText

            editTable={editTable}
            placeholder={placeholder}
            value={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
        />


    )
}