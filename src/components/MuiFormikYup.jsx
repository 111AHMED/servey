import React, { useState, useEffect } from 'react'

import { Box, Button, Card, Container, Grid } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import countryList from '../data/countryList'
import { Formik } from 'formik'
import SelectField from './SelectField'

import * as yup from 'yup' // upload button

const accountSchema = yup.object().shape({
  city: yup.string().required('City is required'),
  country: yup.mixed().required('Country is required'),
  contact: yup.string().required('Contact is required'),
  last_name: yup.string().required('Last name is required'),
  first_name: yup.string().required('First name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
}) // =============================================================================

// =============================================================================

export default function MuiFormikYup() {
  const initialValues = {
    city: '',
    email: '',
    contact: '',
    country: 'Afghanistan',
    last_name: '',
    first_name: '',
  }

  const handleFormSubmit = async (values) => {
    console.log(values)
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Container>
      <h3 mb={2}>Account Setting</h3>

      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Formik
            initialValues={initialValues}
            validationSchema={accountSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={4}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <SelectField
                        fullWidth
                        name="country"
                        label="country"
                        //onBlur={handleBlur}
                        //onChange={handleChange}
                        value={values.country}
                        data={countryList}
                        /* error={!!touched.country && !!errors.country}
                      helperText={touched.country && errors.country} */
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        size="medium"
                        name="first_name"
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.first_name}
                        error={!!touched.first_name && !!errors.first_name}
                        helperText={touched.first_name && errors.first_name}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        size="medium"
                        name="last_name"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.last_name}
                        error={!!touched.last_name && !!errors.last_name}
                        helperText={touched.last_name && errors.last_name}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        name="email"
                        type="email"
                        label="Email"
                        size="medium"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        type="tel"
                        color="info"
                        size="medium"
                        name="contact"
                        label="Phone"
                        onBlur={handleBlur}
                        value={values.contact}
                        onChange={handleChange}
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                      />
                    </Grid>
                    {/* <Grid item md={6} xs={12}>
                    <Autocomplete
                      fullWidth
                      disablePortal
                      options={countryList}
                      value={values.country}
                      getOptionLabel={(option) => option.label}
                      onChange={(_, value) => setFieldValue('country', value)}
                      renderInput={(params) => (
                        <TextField
                          color="info"
                          label="Country"
                          variant="outlined"
                          placeholder="Select Country"
                          error={!!touched.country && !!errors.country}
                          helperText={touched.country && errors.country}
                          {...params}
                          size="medium"
                        />
                      )}
                    />
                  </Grid> */}
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        name="city"
                        label="City"
                        color="info"
                        size="medium"
                        onBlur={handleBlur}
                        value={values.city}
                        onChange={handleChange}
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Button type="submit" variant="contained" color="info">
                  Save Changes
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </React.Fragment>
    </Container>
  )
}
