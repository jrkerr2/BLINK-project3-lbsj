import React from 'react';
import { Formik } from 'formik';
import { FormControl, FormGroup, Col, Row, Button, ControlLabel } from 'react-bootstrap';


const Basic = () => (
  <div>
    
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
          // e.preventDefault();
          // var values = this;
          // alert(values.agenda);
          console.log(values);
          fetch('/api/meetings', { 
            method: 'POST',
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)

          })
          .then(function(response) {
            console.log(response);
            console.log(response._id);
            return response.json()
          }).then(function(body) {
            console.log(body);
            console.log(body._id);
            alert("Use this ID to send to your invitees: " + body._id);
          });
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
              <Col md={1}>
                  <ControlLabel>Agenda</ControlLabel>
              </Col>
              <Col md={6}>
                <FormControl componentClass="textarea"
                  type="agenda"
                  name="agenda"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.agenda}
                  placeholder="What topics will you cover in this meeting?"
                />
                {errors.agenda && touched.agenda && errors.agenda}
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={1} >
                  <ControlLabel>Outcomes</ControlLabel>
                </Col>
                <Col md={6}>
                  <FormControl componentClass="textarea"
                    type="criteria"
                    name="criteria"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.criteria}
                    placeholder="What do you hope to accomplish in this meeting?"
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