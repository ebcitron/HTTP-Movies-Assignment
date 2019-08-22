import React from 'react';
import {withFormik, Form, Field} from 'formik';

function UpdateForm(){
return (
    <Form>
        <Field type = "Text" placeholder = "Name" />
        <Field type = "Text" placeholder = "Review" />
    </Form>
);
}

const FormikUpdateForm = withFormik({
    mapPropsToValues({name, review}){
        return{
            name: name||"",
            review: review|| ""
        };
    },

    handleSubmit(values){
        console.log('HandleSubmitValues: ', values)
        alert("IBIKI");
    }
})(UpdateForm);
//const UpdateForm = (props) => {





export default FormikUpdateForm;