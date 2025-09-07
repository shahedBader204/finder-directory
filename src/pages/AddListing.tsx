import React, { useState } from 'react';
import { Form, Input, Button, Card, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addListing } from '../services/listingService';
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddListing: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file: File) => {
    const storageRef = ref(storage, `listings/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const onFinish = async (values: { title: string; description: string }) => {
    if (!user) return;
    setLoading(true);
    try {
      let imageUrl = '';
      if (fileList.length > 0) {
        imageUrl = await handleUpload(fileList[0]);
      }
      await addListing({ ...values, userId: user.uid, imageUrl });
      message.success('Listing added!');
      navigate('/listings');
    } catch (error) {
      message.error('Error adding listing');
    }
    setLoading(false);
  };

  return (
    <Card title="Add Listing" style={{ maxWidth: 600, margin: '20px auto' }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input placeholder="Enter listing title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} placeholder="Enter listing description" />
        </Form.Item>
        <Form.Item label="Upload Image">
          <Upload
            beforeUpload={(file) => {
              setFileList([file]);
              return false;
            }}
            fileList={fileList}
            onRemove={() => setFileList([])}
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Listing
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddListing;
