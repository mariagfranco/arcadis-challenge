import { Button, Modal, Form, Input, Select, message } from 'antd';
import React, { useState } from 'react';
import { createParam } from '../../Api';
import { validateParamData } from '../../helpers/helpers';
const { Option } = Select;

const NewParamModal: React.FC<{id: string}> = ({id})  => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paramName, setParamName] = useState('');
  const [paramDate, setParamDate] = useState('');
  const [paramValue, setParamValue] = useState(0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  let unity = '';
  
  switch(paramName){
    case 'Escherichia coli':
      unity = 'NMP/100ml'
      break;
    case 'DBO':
      unity = 'mg O2/l'
      break;
    default:
      unity = 'mg/l'
  }

  const paramNames = [
    {
    "name": "Aluminio dissolvido",
    "value": "aluminioDissolvido",
    "unity": "mg/l"
   },
   {
    "name":"Arsênio total",
    "value":"arsenioTotal",
    "unity": "mg/l"
   },
   {
    "name":"Chumbo total",
    "value":"chumboTotal",
    "unity": "mg/l"
   },
   {
    "name":"Cobre dissolvido",
    "value":"cobreDissolvido"
   },
   {
    "name":"Escherichia coli",
    "value":"escherichiaColi"
   },
   {
    "name":"Cromo total",
    "value":"cromoTotal"
   },
   {
    "name":"Cádmio total",
    "value":"cadmioTotal"
   },
   {
    "name":"DBO",
    "value":"dbo"
   }
]

const onChange = (value: string) => {
  setParamName(value)
};

const formatDate = new Date(paramDate).toLocaleDateString("en-GB")

const handleOk = () => {
  if(validateParamData(paramName, paramValue, paramDate)){
    createParam(id, paramName, paramValue, formatDate, unity)
    setIsModalVisible(false);
    message.success('Novo parâmetro cadastrado com sucesso');
    window.location.reload();
  } else {
    message.error('Todos os campos devem ser preenchidos') ;
  }

};

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Cadastrar novo parametro
      </Button>
      <Modal title="Novo Paramentro" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
          rules={[{ required: true, message: 'Selecione o nome do parâmetro' }]}
        >
          <Select
            showSearch
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {paramNames.map((param) => 
              <Option  key={param.value} value={param.name}>{param.name}</Option>
            )}
          </Select>
        </Form.Item>

        <Form.Item
          label="Valor"
          name="value"
          rules={[{ required: true, message: 'Insira um valor válido' }]}
        >
          <Input value={paramValue} disabled={!paramName} placeholder={unity} onBlur={(event) => setParamValue(parseFloat(event.target.value))}/>
        </Form.Item>
        <Form.Item 
        label="Data de coleta"
        rules={[{ required: true, message: 'Selecione uma data válida' }]}
        >
            <Input type={'date'} onBlur={(event) => setParamDate((event.target.value))}/>
          </Form.Item>
      </Form>
      </Modal>
    </>
  );
};

export default NewParamModal;