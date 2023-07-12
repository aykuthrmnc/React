import { Button, Form, Input, message, Space } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const showError = (errorMessage: string) => {
  message.error(errorMessage);
};

const SignUp = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    api
      .post("/users", values)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        showError(err.response.data.errorMessage);
      });
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <h2 style={{ textAlign: "center" }}>Register for an account</h2>
      <Form.Item name="username" label="UserName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your password", min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="full_name" label="Full Name">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submits
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
