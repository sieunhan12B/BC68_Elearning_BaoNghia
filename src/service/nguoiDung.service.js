import { http } from "./config";

export const nguoiDungService = {
  signUp: (data) => {
    return http.post("/QuanLyNguoiDung/DangKy", data);
  },
  logIn: (data) => {
    return http.post("/QuanLyNguoiDung/DangNhap", data);
  },
  getListUser: () => {
    return http.get("/users");
  },
  // NV2 : Tạo hàm xử lí gọi API xóa người dùng
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  createUser: (data) => {
    return http.post("/users", data);
  },
  editUser: (data, token) => {
    return http.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getUser: (token) => {
    return http.post(
      "/QuanLyNguoiDung/ThongTinTaiKhoan",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  uploadAvatar: (token, data) => {
    return http.post("/users/upload-avatar", data, {
      headers: {
        token,
      },
    });
  },
  // logInFace:(data)=>{
  //   return http.post("")
  // }
};
