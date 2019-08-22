import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';



function UpdateForm(props){
let movie={}
const [values, setValues ] = useState({id: null, title: '', director: '', metascore:null, stars: []});
console.log('props', props);

useEffect(()=> {
    axios
    .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
    .then(res => {
        console.log('res: ', res)
    })
    .catch(err=> console.log('err', err))
})

return (
    <Form>
        <Field type = "Text" placeholder = "Name"  />
        <Field type = "Number" placeholder = "Metascore" />
        <button type="submit">Submit</button>
    </Form>
);
}

const FormikUpdateForm = withFormik({
    mapPropsToValues({name, metascore}){
        return{
            name: name||"E",
            metascore: metascore|| ""
        };
    },

    handleSubmit(values){
        console.log('HandleSubmitValues: ', values)
        alert("IBIKI");
        
    // putMovie = values => {
    // axios
    // .put(`http://localhost:5000/api/movies/${id}`)
    // .then(res => {
    //   this.setState({movie: res.data})})
    //   .catch(err => {
    //     console.log('editError: ', err);
    //   })
    // }
     }
})(UpdateForm);
//const UpdateForm = (props) => {





export default FormikUpdateForm;