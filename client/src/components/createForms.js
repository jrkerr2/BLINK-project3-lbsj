import React from 'react';
import { Formik } from 'formik';
import { FormControl, FormGroup, Col, Row, Button, ControlLabel } from 'react-bootstrap';


const Basic = () => (
  <div>
    <h1>Create!</h1>
    <Formik
      initialValues={{ agenda: '', criteria: '' }}
      validate={values => {
        let errors = {};
        if (!values.agenda) {
          errors.agenda = 'Meeting Agenda is Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
       
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Row>
              <Col md={4}>
                  <ControlLabel>Agenda</ControlLabel>
              </Col>
              <Col md={8}>
                <FormControl componentClass="textarea"
                  type="agenda"
                  name="agenda"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.agenda}
                />
                {errors.agenda && touched.agenda && errors.agenda}
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={4}>
                  <ControlLabel>Criteria</ControlLabel>
                </Col>
                <Col md={8}>
                  <FormControl componentClass="textarea"
                    type="criteria"
                    name="criteria"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.criteria}
                  />
                  {errors.criteria && touched.criteria && errors.criteria}
                </Col>
            </Row>
            </FormGroup>
            <Button type="submit" disabled={isSubmitting} value="Submit">
              Create 
            </Button>
          </form>
        
      )}
    </Formik>
  </div>
);

export default Basic;