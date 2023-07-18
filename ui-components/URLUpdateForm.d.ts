/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { URL } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type URLUpdateFormInputValues = {
    long?: string;
    short?: string;
};
export declare type URLUpdateFormValidationValues = {
    long?: ValidationFunction<string>;
    short?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type URLUpdateFormOverridesProps = {
    URLUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    short?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type URLUpdateFormProps = React.PropsWithChildren<{
    overrides?: URLUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uRL?: URL;
    onSubmit?: (fields: URLUpdateFormInputValues) => URLUpdateFormInputValues;
    onSuccess?: (fields: URLUpdateFormInputValues) => void;
    onError?: (fields: URLUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: URLUpdateFormInputValues) => URLUpdateFormInputValues;
    onValidate?: URLUpdateFormValidationValues;
} & React.CSSProperties>;
export default function URLUpdateForm(props: URLUpdateFormProps): React.ReactElement;
