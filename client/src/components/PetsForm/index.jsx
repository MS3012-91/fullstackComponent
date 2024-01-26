import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { createPetThunk } from "../../store/slices/petsSlice";

const PetsForm = ({ createPet }) => {
  const initialValues = {
    name: "",
    breed: "",
    color: "",
    weight: "",
    gender: "",
    birthday: "",
    image: "",
  };
  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();
    values.name && formData.append("name", values.name);
    values.breed && formData.append("breed", values.breed);
    values.color && formData.append("color", values.color);
    values.weight && formData.append("weight", values.weight);
    values.gender && formData.append("gender", values.gender);
    values.birthday && formData.append("birthday", values.birthday);
    values.image && formData.append("image", values.image);
    // formData.append("name", values.name);
    // formData.append("breed", values.breed);
    // formData.append("color", values.color);
    // formData.append("weight", values.weight);
    // formData.append("gender", values.gender);
    // formData.append("birthday", values.birthday);
    // formData.append("image", values.image);
    createPet(formData);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <label htmlFor='name'>
            <span>Name:</span>
            <Field type='text' name='name' id='name' placeholder='Name' />
          </label>
          <label htmlFor='breed'>
            <span>Breed:</span>
            <Field type='text' name='breed' id='breed' placeholder='Breed' />
          </label>
          <label htmlFor='color'>
            <span>Color:</span>
            <Field type='text' name='color' id='color' placeholder='Color' />
          </label>
          <label htmlFor='weight'>
            <span>Weight:</span>
            <Field type='text' name='weight' id='weight' placeholder='Weight' />
          </label>
          <label htmlFor='gender'>
            <span>Gender:</span>
            <Field as='select' name='gender' id='gender'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Field>
          </label>
          <label htmlFor='birthday'>
            <span>Name:</span>
            <Field
              type='date'
              name='birthday'
              id='birthday'
              placeholder='Birthday'
            />
          </label>
          <label htmlFor='image'>
            <span>Pet's image:</span>
            <Field
              type='file'
              name='image'
              id='image'
              value={undefined}
              onChange={(e) => {
                //setSelectedFile(e.target.files[0]);
                //formikProps.handleChange(e.target);
                formikProps.setFieldValue("image", e.target.files[0]);
              }}
            />
          </label>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ petsData }) => petsData;
const mapDispatchToProps = (dispatch) => ({
  createPet: (data) => dispatch(createPetThunk(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsForm);
