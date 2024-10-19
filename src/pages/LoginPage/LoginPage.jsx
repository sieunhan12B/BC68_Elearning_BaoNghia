import React, { useContext } from "react";
import signInAnimation from "./../../assets/animation/signInAnimation.json";
import { useLottie } from "lottie-react";
import InputCustom from "../../components/Input/InputCustom";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import logoCyber from "./../../assets/logo/logoCyberSoft.png";
import background from "../../assets/img/bgSigninSignup.jpg";
import "./LoginPage.scss";
import * as yup from "yup";
import { authService } from "../../service/auth.service";
import { http } from "../../service/config";
import { setLocalStorage } from "../../utils/util";
import { NotificationContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUser, setValueUser } from "../../redux/authSlice";
import useResponsive from "../../hooks/useReponsive";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { Image } from "antd";
import { path } from "../../common/path";
import { nguoiDungService } from "../../service/nguoiDung.service";
// import FacebookLogin from "react-facebook-login";
// import ReactFacebookLogin from "react-facebook-login";
// import FaceBook from "../../components/Icon/FaceBook";
const LoginPage = () => {
  const isReponsive = useResponsive({
    mobile: 576,
    tablet: 768,
  });

  const { infoUser } = useSelector((state) => state.authSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNotification } = useContext(NotificationContext);
  const options = {
    animationData: signInAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  // NV1 : thực hiện setup formik trong phần form login page
  // NV2 : gắn các thuộc tính cần cho các input vào 2 component inputcustom
  // NV3 : gắn validation cho 2 inputcustom : email (required,email) - password (required, min(6), max(10))
  // NV4 : thực hiện test phần form xem các onsubmit và validation hoạt động có đúng hay k
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        taikhoan: "",
        matkhau: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        // try{}catch
        await nguoiDungService
          .logIn(values)
          .then((res) => {
            console.log(res);
            setLocalStorage("user", res.data);
            showNotification(
              "Chúc mừng tạo tài khoản thành công, bạn sẽ được chuyển hướng về đăng nhập",
              "success"
            );
            dispatch(setValueUser(res.data));
            setTimeout(() => {
              navigate(path.homePage);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            showNotification(err.response.data, "error");
          });
        // authService
        //   .signIn(values)
        //   .then((res) => {
        //     console.log(res);
        //     // B1 thực hiện lưu trữ ở localStorage
        //     setLocalStorage("user", res.data.content);
        //     dispatch(getInfoUser(res.data.content));
        //     // B2 thực hiện thông báo và chuyển hướng người dùng
        //     showNotification(
        //       "Đăng nhập thành công, bạn sẽ được chuyển hướng về trang chủ",
        //       "success",
        //       2000
        //     );
        //     setTimeout(() => {
        //       navigate("/");
        //     }, 1000);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     showNotification(err.response.data.message, "error");
        //   });
      },
      // validationSchema: yup.object({
      //   email: yup
      //     .string()
      //     .required("Vui lòng không bỏ trống")
      //     .email("Vui lòng nhập đúng định dạng email"),
      //   password: yup
      //     .string()
      //     .required("Vui lòng không bỏ trống")
      //     .min(6, "Vui lòng tối thiểu 6 ký tự")
      //     .max(10, "Vui lòng nhập tối đa 10 ký tự"),
      // }),
    });
  // return isReponsive.mobile ? <InputCustom /> : <PageNotFound />

  return (
    <div>
      <div className="admin_login flex h-screen  space-x-5 ">
        <div className="w-1/2  mt-3 ">
          <div className="logo w-1/5 text-center h-1/5   ">
            <Image width={50} src={logoCyber} />
            <h1 className="h-full text-2xl font-bold text-purple-950">
              Cyber Soft
            </h1>
          </div>
          <div className="admin_login_form w-full flex flex-col justify-center h-4/5   ">
            <div className="title text-center">
              <h2 className="text-3xl font-bold mb-2  ">Đăng nhập</h2>
              <p>Chào mừng trở lại ,hãy đăng nhập thông tin của bạn </p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <InputCustom
                onChange={handleChange}
                name="taikhoan"
                labelContent="Tài khoản"
                value={values.taikhoan}
              />
              <InputCustom
                labelContent="Mật khẩu"
                typeInput="password"
                onChange={handleChange}
                name="matkhau"
                value={values.matkhau}
              />

              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full block bg-black text-white rounded-md"
                >
                  Đăng kí
                </button>
                <div className="fb flex border rounded-md space-y-2 mt-2 justify-center items-center gap-2">
                  <span>
                    {/* <i className=" bg-[rgb(24,119,242)] fa-brands fa-facebook"></i>
                     */}
                    {/* <FaceBook /> */}
                  </span>
                  {/* <ReactFacebookLogin
                    cssClass="btnfb"
                    appId="1493093984735988"
                    fields="name,email,picture"
                    callback={(res) => {
                      console.log(res);
                      let { id, email, name } = res;
                      console.log(id);
                      console.log(email);
                      console.log(name);
                      // loginFaceBookAPI({ id, email, name })
                      //   .then((res) => {
                      //     toast.success(res.message);
                      //     localStorage.setItem("LOGIN_USER", res);
                      //   })
                      //   .catch((err) => {
                      //     toast.error(err.response.data.message);
                      //   });
                    }}
                  /> */}
                </div>

                <div className="space-x-2 mt-2">
                  <span>Bạn chưa có tài khoản ?</span>
                  <Link className="font-bold" to={path.signUp}>
                    Đăng kí
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="admin_login_image w-1/2">
          <img className="h-full w-full" src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
