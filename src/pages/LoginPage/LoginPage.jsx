import React, { useContext } from 'react'
import signInAnimation from './../../assets/animation/signInAnimation.json'
import { useLottie } from 'lottie-react';
import InputCustom from '../../components/Input/InputCustom';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { authService } from '../../service/auth.service';
import { http } from '../../service/config';
import { setLocalStorage } from '../../utils/util';
import { NotificationContext } from '../../App';
import { useDispatch } from 'react-redux';
import { getInfoUser } from '../../redux/authSlice';
import useResponsive from '../../hooks/useReponsive';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
const LoginPage = () => {
  const isReponsive = useResponsive({
    mobile: 576,
    tablet: 768,
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { showNotification } = useContext(NotificationContext)
  const options = {
    animationData: signInAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  // NV1 : thực hiện setup formik trong phần form login page
  // NV2 : gắn các thuộc tính cần cho các input vào 2 component inputcustom
  // NV3 : gắn validation cho 2 inputcustom : email (required,email) - password (required, min(6), max(10))
  // NV4 : thực hiện test phần form xem các onsubmit và validation hoạt động có đúng hay k
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      authService.signIn(values).then((res) => {
        console.log(res)
        // B1 thực hiện lưu trữ ở localStorage
        setLocalStorage('user', res.data.content)
        dispatch(getInfoUser(res.data.content))
        // B2 thực hiện thông báo và chuyển hướng người dùng
        showNotification("Đăng nhập thành công, bạn sẽ được chuyển hướng về trang chủ", "success", 2000);
        setTimeout(() => {
          navigate("/")
        }, 1000)
      }).catch((err) => {
        console.log(err)
        showNotification(err.response.data.message, "error")
      })
    },
    validationSchema: yup.object({
      email: yup.string().required("Vui lòng không bỏ trống").email("Vui lòng nhập đúng định dạng email"),
      password: yup.string().required("Vui lòng không bỏ trống").min(6, "Vui lòng tối thiểu 6 ký tự").max(10, "Vui lòng nhập tối đa 10 ký tự")
    })
  })
  // return isReponsive.mobile ? <InputCustom /> : <PageNotFound />

  return (
    <div className=''>
      <div className="container">
        <div className={`loginPage_content ${isReponsive.mobile ? "block" : "flex"} items-center h-screen`}>
          <div className={`loginPage_img ${isReponsive.mobile ? "w-full" : "w-1/2"}`}>
            {View}
          </div>
          <div className={`loginPage_form ${isReponsive.mobile ? "w-full" : "w-1/2"}`}>
            <form className='space-y-5' onSubmit={handleSubmit}>
              <h1 className='text-center text-4xl font-medium uppercase'>Giao diện đăng nhập</h1>
              {/* email  */}
              <InputCustom name={"email"} onChange={handleChange} value={values.email} labelContent={"Email"} placeholder={"Vui lòng nhập email"} error={errors.email} touched={touched.email} onBlur={handleBlur} />
              <InputCustom name={"password"} onChange={handleChange} value={values.password} placeholder={"Vui lòng nhập mật khẩu"} labelContent={"Password"} typeInput='password' error={errors.password} touched={touched.password} onBlur={handleBlur} />
              <div>
                <button type='submit' className='inline-block w-full bg-black text-white py-2 px-5 rounded-md'>Đăng nhập</button>
                <Link className='mt-3 text-blue-600 inline-block hover:underline duration-300'>Chưa có tài khoản ư, bấm vào đây nè</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage