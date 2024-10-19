import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";

import logoCyber from "./../../assets/logo/logoCyberSoft.png";
import background from "../../assets/img/bgSigninSignup.jpg";
import { useFormik } from "formik";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { NotificationContext } from "../../App";
import { path } from "../../common/path";
// import ReactFacebookLogin from "react-facebook-login";
// import FaceBook from "../../components/Icon/FaceBook";

const RegisterPage = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      taikhoan: "",
      matkhau: "",
      nhaplaimatkhau: "",
      hoten: "",
      email: "",
      soDT: "",
      maNhom: "gp01",
    },
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .signUp(values)
        .then((res) => {
          showNotification(
            "Chúc mừng tạo tài khoản thành công, bạn sẽ được chuyển hướng về đăng nhập",
            "success"
          );
          setTimeout(() => {
            navigate(path.logIn);
          }, 2000);

          console.log(res);
        })
        .catch((err) => {
          showNotification(err.response.data, "error");

          console.log(err);
        });
    },
  });
  return (
    <div>
      <div className="admin_login flex  space-x-5 ">
        <div className="w-1/2  h-full">
          <div className="admin_login_form  flex flex-col justify-center  p-5 ">
            <div className="logo w-1/5 text-center   ">
              <Image height={50} src={logoCyber} />
              <h1 className=" text-2xl font-bold text-purple-950">
                Cyber Soft
              </h1>
            </div>
            <div className="title text-center">
              <h2 className="text-3xl font-bold mb-2  ">Tạo tài khoản</h2>
              <p>Đăng ký và bắt đầu khám phá khoá học của bạn.</p>
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
              <InputCustom
                onChange={handleChange}
                name="nhaplaimatkhau"
                labelContent="Nhập lại mật khẩu "
                value={values.nhaplaimatkhau}
              />
              <InputCustom
                onChange={handleChange}
                name="hoten"
                labelContent="Họ tên"
                value={values.hoten}
              />
              <InputCustom
                onChange={handleChange}
                name="email"
                labelContent="Email"
                placeholder={"vd: abc@example.com"}
                value={values.email}
              />
              <InputCustom
                onChange={handleChange}
                name="soDT"
                labelContent="Số điện thoại "
                placeholder={"vd: 0901234567"}
                value={values.soDT}
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
                  <span>Bạn đã có tài khoản ?</span>
                  <Link className="font-bold" to={path.logIn}>
                    Đăng nhập
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

export default RegisterPage;
