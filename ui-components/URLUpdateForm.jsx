/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { URL } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function URLUpdateForm(props) {
  const {
    id: idProp,
    uRL: uRLModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    long: "",
    short: "",
  };
  const [long, setLong] = React.useState(initialValues.long);
  const [short, setShort] = React.useState(initialValues.short);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uRLRecord
      ? { ...initialValues, ...uRLRecord }
      : initialValues;
    setLong(cleanValues.long);
    setShort(cleanValues.short);
    setErrors({});
  };
  const [uRLRecord, setURLRecord] = React.useState(uRLModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(URL, idProp) : uRLModelProp;
      setURLRecord(record);
    };
    queryData();
  }, [idProp, uRLModelProp]);
  React.useEffect(resetStateValues, [uRLRecord]);
  const validations = {
    long: [],
    short: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          long,
          short,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            URL.copyOf(uRLRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "URLUpdateForm")}
      {...rest}
    >
      <TextField
        label="Long"
        isRequired={false}
        isReadOnly={false}
        value={long}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              long: value,
              short,
            };
            const result = onChange(modelFields);
            value = result?.long ?? value;
          }
          if (errors.long?.hasError) {
            runValidationTasks("long", value);
          }
          setLong(value);
        }}
        onBlur={() => runValidationTasks("long", long)}
        errorMessage={errors.long?.errorMessage}
        hasError={errors.long?.hasError}
        {...getOverrideProps(overrides, "long")}
      ></TextField>
      <TextField
        label="Short"
        isRequired={false}
        isReadOnly={false}
        value={short}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              long,
              short: value,
            };
            const result = onChange(modelFields);
            value = result?.short ?? value;
          }
          if (errors.short?.hasError) {
            runValidationTasks("short", value);
          }
          setShort(value);
        }}
        onBlur={() => runValidationTasks("short", short)}
        errorMessage={errors.short?.errorMessage}
        hasError={errors.short?.hasError}
        {...getOverrideProps(overrides, "short")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uRLModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uRLModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
