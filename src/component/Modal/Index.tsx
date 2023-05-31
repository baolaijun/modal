import React,{ ReactNode, useEffect, useState } from "react";
import './Index.scss'

interface ModalProps {
    bodyStyle?: object;
    centered?: boolean;
    closable?: boolean;
    mask: boolean;
    style?: object;
    title?: ReactNode | string;
    width?: string | number;
    cancelText?: ReactNode;
    okText?: ReactNode;
    confirmLoading?: boolean;
    maskClosable?: boolean;
    destroyOnClose?: boolean;
    footer: ReactNode;
    children: ReactNode;
    open: boolean;
    okButtonProps?: object;
    onOk: ()=> void;
    onCancel: ()=> void
}


const Modal = (props: ModalProps) => {
    const {
        open,
        bodyStyle,
        centered,
        closable,
        mask,
        style,
        title,
        width='500px',
        cancelText,
        okText,
        footer=null,
        children,
        maskClosable=true,
        okButtonProps,
        confirmLoading,
        destroyOnClose,
        onCancel,
        onOk
    } = props

    const [ isShowCom, setIsShowCom ] = useState(true);

    // 控制外层 div 的 display 是否为 none
    const [modalHidden, setModalHidden] = useState(!open);
    // 控制模态框缩放和不透明度动画和背景蒙版动画
    const [animatedVisible, setAnimatedVisible] = useState(open);

    const _hanldeCancel = () => {
        onCancel && onCancel()
    }
    const _hanldeOkClick = () => {
        onOk && onOk()
    }
    const _handleClose = () => {
        if(destroyOnClose){
            setIsShowCom(false)
        }
        onCancel && onCancel()
    }
    // useEffect(()=>{
    //    //console.log(destroyOnClose) 
    //    return () => {
    //     console.log('组件销毁')
    //    }
    // },[])
    // useEffect(() => {
    //     if (open) {
    //       // 弹出模态框
    //       // 先把模态框的 display 取消 none
    //       setModalHidden(false);
    //       // 使用 setTimeout 先让 React 渲染已经修改的状态
    //       // 如果不使用 setTimeout，模态框动画会无效
    //       setTimeout(() => {
    //         // 然后再开始动画
    //         setAnimatedVisible(true);
    //       }, 0);
    //     } else {
    //       // 关闭模态框
    //       // 先进行动画
    //       setAnimatedVisible(false);
    //       setTimeout(() => {
    //         // 动画结束后把模态框设置为 display: none
    //         setModalHidden(true);
    //       }, 300);
    //     }
    //   }, [open]);
    return (
        <>
            <div className="lai-modal-root">
                <div className="lai-modal-wrap" style={{ display: open ? 'block' : 'none' }}>
                    {
                        isShowCom && <div className={`lai-modal-content ${centered && 'lai-modal-centered'}`} style={{width:width,...bodyStyle}}  >
                        <div className="lai-modal-header">
                            <div className="lai-modal-title">{ title }</div>
                        </div>
                        <div className="lai-modal-body"  >
                            { children }
                        </div>
                        <div className="lai-modal-footer">
                            {
                                footer==null ? (
                                    <>
                                        <button className="lai-btn-default lai-btn" onClick={()=>{
                                            _hanldeCancel()
                                        }}>{cancelText}</button>
                                        <button className="lai-btn lai-btn-primary " onClick={()=>{
                                            _hanldeOkClick()
                                        }} {...okButtonProps}>{confirmLoading && '异步中'} {okText}</button>
                                    </>
                                ):(
                                    footer
                                )
                            }
                        </div>
                        <button className="lai-modal-close" onClick={()=>{
                            _handleClose();
                        }}>X</button>
                    </div>
                    }
                    
                </div>
                {
                    mask && open && <div className="lai-modal-mask"  onClick={()=>{
                        maskClosable && _hanldeCancel()
                    }}  ></div>
                }
            </div>
        </>
    )
}

export default Modal;