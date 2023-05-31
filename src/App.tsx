import React, { useState } from 'react';
import Modal from './component/Modal/Index';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ content, setContent ] = useState(`<p>aaa</p><p>sajlfsjalfd</p>`)


  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setContent('bbbbbbbbbbbbbbbbbbbb');
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    //setContent('bbb');
    setOpen(false);
  };

  return (
    <>
      <div className='btn' onClick={showModal}>
        Open Modal
      </div>
      <button disabled={true} >111</button>
      <Modal 
        mask
        open={open}
        title={<p>Basic Modal,Basic Modal</p>} 
        width={'1920px'}
        onOk={handleOk}
        confirmLoading={loading}
        destroyOnClose
        //centered
        onCancel={handleCancel}
       // okButtonProps={{ disabled: false }}
        // footer={[
        //   <button className="lai-btn-default lai-btn" onClick={handleCancel}>cancel</button>,
        //   <button className="lai-btn lai-btn-primary" onClick={handleCancel}>ok</button>
        // ]}
        footer={null}
        cancelText={'取消'}
        okText={'确认'}
        maskClosable={false}
        bodyStyle={{color: 'red',top:'50px'}}
      >
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        <p>aaaaaaaa</p>
        <p>bbbbbbbbb</p>
        
      </Modal>
    </>
  );
};

export default App;
