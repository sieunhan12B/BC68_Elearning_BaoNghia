import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { Image } from "antd";
import InputCustom from "../Input/InputCustom";
import { NotificationContext } from "../../App";
import { getLocalStorage, setLocalStorage } from "../../utils/util";

const InfoUser = () => {
  const { accessToken } = getLocalStorage("user");
  const { showNotification } = useContext(NotificationContext);
  const [dataUser, setDataUser] = useState({});

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
      taiKhoan: dataUser.taiKhoan,
      matKhau: dataUser.matKhau,
      hoTen: dataUser.hoTen,
      email: dataUser.email,
      soDT: dataUser.soDT,
      // token:dataUser.accessToken,
      maNhom: dataUser.maNhom,
      maLoaiNguoiDung: dataUser.maLoaiNguoiDung,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);

      nguoiDungService
        .editUser(values, accessToken)
        .then((res) => {
          console.log(res);
          showNotification("Thay đổi thành công", "success");
        })
        .catch((err) => {
          console.log(err);
          showNotification(err.response.data, "error");
        });
    },
  });

  useEffect(() => {
    nguoiDungService
      .getUser(accessToken)
      .then((res) => {
        console.log(res);
        setDataUser(res.data);
        // console.log(dataUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="info">
      <form action="" onSubmit={handleSubmit}>
        <div className="p-5 info-header flex justify-between">
          <div className=" space-y-2 ">
            <h1 className="text-2xl font-bold">Sửa hồ sơ của bạn</h1>
            <p className=" font-normal">
              Điều này sẽ được chia sẻ với các học viên khác
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-yellow-500 px-5 py-3 rounded-lg font-semibold"
            >
              Lưu
            </button>
          </div>
        </div>
        <hr className="my-5" />
        <div className="info-content">
          <p>Ảnh hồ sơ</p>
          <div className="flex gap-5">
            <Image src="https://picsum.photos" />
            <p>PNG hoặc JPG có chiều rộng và chiều cao không lớn hơn 800px.</p>
          </div>
          <div className="flex flex-wrap gap-5 justify-between">
            <InputCustom
              onChange={handleChange}
              classWrapper="w-1/3"
              labelContent={"Họ tên "}
              name={"hoTen"}
              value={values.hoTen}
            />
            <InputCustom
              onChange={handleChange}
              classWrapper="w-1/3"
              labelContent={"Email"}
              name={"email"}
              value={values.email}
            />
            <InputCustom
              onChange={handleChange}
              classWrapper="w-1/3"
              labelContent={"Tài khoản"}
              name={"taiKhoan"}
              value={values.taiKhoan}
            />
            <InputCustom
              onChange={handleChange}
              classWrapper="w-1/3"
              labelContent={"Mật khẩu"}
              name={"matKhau"}
              value={values.matKhau}
              typeInput="password"
            />
            <InputCustom
              onChange={handleChange}
              classWrapper="w-1/3"
              labelContent={"Số điện thoại"}
              name={"soDT"}
              value={values.soDT}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoUser;
