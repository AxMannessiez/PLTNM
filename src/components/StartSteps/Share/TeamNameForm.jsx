import {FormControl, FormErrorMessage, Input, VStack} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {PltnmButton} from "../../base/PltnmButton";
import {validateFormRequired} from "../../SignIn/validateFormRequired";

export function TeamNameForm(props) {
    let previousTeamName = props.initialName;
    return (
        <Formik
            initialValues={{ teamName: props.initialName }}
            onSubmit={(values, actions) => {
                // Only update database if the value has changed
                if (values.teamName !== previousTeamName) {
                    console.log("Submit new name");
                    /*player.save()   // Save in database
                        .then(() => {
                            storeUserName(player.name);
                            storeUserId(player.id);
                        });*/
                    previousTeamName = values.teamName;
                    actions.setSubmitting(false);
                } else {
                    actions.setSubmitting(false);
                }
            }}
        >
            {(props) => (
                <Form>
                    <VStack spacing={6}>
                        <Field name='teamName' validate={(n) => validateFormRequired(n, "Team name")}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.teamName && form.touched.teamName}>
                                    <Input {...field}/>
                                    <FormErrorMessage>{form.errors.teamName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <PltnmButton mt={4} isLoading={props.isSubmitting} type='submit' w='100%'>Save</PltnmButton>
                    </VStack>
                </Form>
            )}
        </Formik>
    )
}