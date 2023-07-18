/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type URLCreateFormInputValues = {
    long?: string;
    short?: string;
};
export declare type URLCreateFormValidationValues = {
    long?: ValidationFunction<string>;
    short?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type URLCreateFormOverridesProps = {
    URLCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    short?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type URLCreateFormProps = React.PropsWithChildren<{
    overrides?: URLCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: URLCreateFormInputValues) => URLCreateFormInputValues;
    onSuccess?: (fields: URLCreateFormInputValues) => void;
    onError?: (fields: URLCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: URLCreateFormInputValues) => URLCreateFormInputValues;
    onValidate?: URLCreateFormValidationValues;
} & React.CSSProperties>;
export default function URLCreateForm(props: URLCreateFormProps): React.ReactElement;
