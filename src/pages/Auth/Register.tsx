import { Button, Form, Input, message } from "antd";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await register(values.email, values.password);
      message.success("تم إنشاء الحساب بنجاح!");
      navigate("/"); // العودة للصفحة الرئيسية
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>تسجيل مستخدم جديد</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="البريد الإلكتروني" name="email" rules={[{ required: true, message: "الرجاء إدخال البريد الإلكتروني" }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="كلمة المرور" name="password" rules={[{ required: true, message: "الرجاء إدخال كلمة المرور" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            إنشاء الحساب
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
