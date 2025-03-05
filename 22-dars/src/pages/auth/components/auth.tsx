import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import auhtLogo from "../../../assets/auth/logo-auth.svg";
import { useLogin } from "../service/mutation/useLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthType } from "../../../types/auth-types";

export const Auth = () => {
  const { mutate } = useLogin();

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onFinish: FormProps<AuthType>["onFinish"] = (values) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/home");
      },
      onError: (err: any) => {
        setErrorMsg(err.response.data.error.message);
      },
    });
  };

  return (
    <div className="wrap">
      <div className="form-wrapper">
        <div>
          <img src={auhtLogo} alt="auth" style={{ marginBottom: "32px" }} />
          <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
            Dasturga kirish
          </h2>
          <p style={{ fontSize: "16px" }}>
            Iltimos, tizimga kirish uchun login va parolingizni kiriting.
          </p>
        </div>
        <Form
          name="basic"
          layout="vertical"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            style={{ width: "100%" }}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Login"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Parol"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                height: "45px",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
