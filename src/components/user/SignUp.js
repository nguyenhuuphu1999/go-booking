import React from 'react'
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import {
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  FormHelperText,
} from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUp = () => {
  const paperStyle = {
    padding: '30px 20px',
    width: 370,
    margin: '0px auto',
  }
  const headerStyle = {
    margin: 0,
  }
  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: '#ffffff',
    borderRadius: '20px',
    margin: '8px 0'
  }
  const center = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
  }
  const initialValues = {
    phone: '',
    name: '',
    password: '',
    email: '',
    termAndConditions: false,
  }
  const onSubmit = (values, props) => {
    console.log(values)
    console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
  }
  const validationSchema = Yup.object().shape({
    phone: Yup.number().typeError('Chỉ nhập số').required('Bắt buộc'),
    name: Yup.string()
      .min(2, 'Nhập tối thiểu 2 chữ cái!')
      .max(50, 'Tên quá dài!')
      .required('Bắt buộc'),
    password: Yup.string()
      .min(8, 'Nhập tối thiểu 8 ký tự')
      .required('Bắt buộc'),
    termAndConditions: Yup.string().oneOf(
      ['true'],
      'Đồng ý với các điều khoản sử dụng',
    ),
    email: Yup.string().email('Nhập email hợp lệ').required('Bắt buộc'),
  })
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar></Avatar>
          <h4 style={headerStyle}>Đăng ký</h4>
          <Typography variant="caption">
            Vui lòng điền để tạo tài khoản
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {props => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="phone"
                label="Số điện thoại"
                helperText={<ErrorMessage name="phone" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="User name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termAndConditions" />}
                label="Tôi đồng ý với các điều khoản sử dụng"
              />
              <FormHelperText>
                <ErrorMessage name="termAndConditions" />
              </FormHelperText>
              <div style={center}>
                <Button type="submit" variant="contained" style={buttonStyle} disabled={props.isSubmitting}>
                {props.isSubmitting ? "Loading" : "Tạo tài khoản"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default SignUp
