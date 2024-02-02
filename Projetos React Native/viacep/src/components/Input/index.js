import { InputText } from "./style"

export const Input = ({

    editable,
    placeholder,
    fieldValue,
    onChangeText,
    keyType,
    maxLength,
    onEndEditing


}) => {
    return (

        <InputText

            editable={editable}
            placeholder={placeholder}
            value={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
            onEndEditing={onEndEditing}
        />


    )
}