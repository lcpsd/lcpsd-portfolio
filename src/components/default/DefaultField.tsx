import { ChakraStyledOptions, Input } from "@chakra-ui/react";
import { FieldValues, UseFormProps, UseFormRegister } from "react-hook-form";

interface DefaultFieldProps extends ChakraStyledOptions, UseFormProps, React.HTMLAttributes<HTMLInputElement> {
    registerName: string;
    formRegister: UseFormRegister<FieldValues>;
}

export function DefaultField({ registerName, formRegister, ...rest }: DefaultFieldProps) {

    return (
        <Input border='1px' borderColor="quaternary" rounded="2xl" bg='quinary' colorScheme="black" {...formRegister(registerName)} {...rest} />
    )
}