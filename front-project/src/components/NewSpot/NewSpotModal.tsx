import { Button, Modal, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { createSpot } from '../../Api';
import { validateSpotData } from '../../helpers/helpers';

const NewSpotModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spotName, setName] = useState('');
  const [spotCoordX, setCoordX] = useState(0);
  const [spotCoordY, setCoordY] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if(validateSpotData(spotName, spotCoordX, spotCoordY)){
      createSpot(spotName, spotCoordX, spotCoordY);
      message.success('Novo ponto criado') ;
      setIsModalVisible(false);
      window.location.reload();
    } else {
      message.error('Todos os campos devem ser preenchidos') ;
    }  
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="text" onClick={showModal} style={{borderColor: '#e8e8e8', width: '50%' }}>
        Cadastre um novo ponto
      </Button>
      <Modal title="Cadastrar novo ponto" visible={isModalVisible} onOk={() => handleOk()} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true}]}
          >
              <Input value={spotName} onBlur={(event) => setName(event.target.value)}/>
          </Form.Item>

          <Form.Item label="Coordenadas"         
            rules={[{ required: true}]}
          >
            <Input.Group compact>
              <Form.Item
                name="coordX"
                noStyle
                rules={[{ required: true, message: 'Insira a coordenada X'}]}
              >
                <Input type={'number'} inputMode='numeric' value={spotCoordX} onBlur={(event) => setCoordX
                  (parseFloat(event.target.value))} name="coordX" style={{ width: '45%', marginRight: '5%' }} placeholder="Coordenada X" />
              </Form.Item>
              <Form.Item
                name='coordY'
                noStyle
                rules={[{ required: true, message: 'Insira a coordenada Y'}]}
              >
                <Input type={'number'} value={spotCoordY} onBlur={(event) => setCoordY
                  (parseFloat(event.target.value))} name="coordY" style={{ width: '45%' }} placeholder="Coordenada Y" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewSpotModal;