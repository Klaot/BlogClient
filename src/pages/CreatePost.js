import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
//   validationSchema={}

function CreatePost() {

  const initialValues = {
    title: "",
    postText: "",
    userName: ""
  }

  const validationSchema = Yup.object().shape({
     title: Yup.string().required("Введите подзаголовок"),
     postText: Yup.string().required("Введите текст поста"),
     userName: Yup.string().min(3, "Введите имя автора (не менее 3 символов)").max(15).required("Введите имя автора (не менее 3 символов)")
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response)=> {
        console.log('IT work');
    });
  }

  return (
    <div className="create-post-page">
        <Formik initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            <Form className='post-form'>
              <label>Подзаголовок: </label>
              <ErrorMessage name="title" component="span"/>
                <Field 
                  autoComplete="off"
                  id="input-create-post"
                  name="title"
                  placeholder="Введите подзаголовок" />
              <label>Ваш пост: </label>
              <ErrorMessage name="postText" component="span"/>
                <Field
                  id="input-create-post"
                  name="postText"
                  placeholder="Введите ваш пост" />
              <label>Автор: </label>
              <ErrorMessage name="userName" component="span"/>
                <Field
                  id="input-create-post"
                  name="userName"
                  placeholder="Введите имя автора" />
                  <button className="create-post-btn">Создать запись</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost