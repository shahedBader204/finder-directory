import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button, Input, Form } from "antd";

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      alert("Login successful!");
    } catch (err) {
      alert("Error logging in");
    }
    setLoading(false);
  };

  return (
    <Form onFinish={onFinish} style={{ maxWidth: 300, margin: "auto", paddingTop: 50 }}>
      <Form.Item name="email" rules={[{ required: true, message: "Enter email" }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "Enter password" }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
