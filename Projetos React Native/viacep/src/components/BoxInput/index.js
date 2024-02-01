import { FieldContent } from "./style"
import { Label } from "../Label"
import { Input } from "../Input"


export const BoxInput = ({
    fieldWidth = 100,
    editTable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (
        <FieldContent>

            <Label textLabel={textLabel} />

            <Input
                editTable={editTable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />

        </FieldContent>

    )
}