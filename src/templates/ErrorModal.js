import React from 'react';
import { Text } from 'react-native';
import { Modal as PaperModal, Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getIsShow, getText } from '../reducks/errorModal/selectors';
import { hide as hideErrorModal } from '../reducks/errorModal/operations';


const ErrorModal = () => {
    const dispatch = useDispatch()
    const containerStyle = {backgroundColor: 'white', padding: 20, marginLeft: '10%', marginRight: '10%'};
    const selector = useSelector((state) => state);
    const isShow = getIsShow(selector);
    const text = getText(selector);

    return(
        <Portal>
            <PaperModal visible={isShow} onDismiss={() => dispatch(hideErrorModal())} contentContainerStyle={containerStyle}>
                <Text>{text}</Text>
            </PaperModal>
        </Portal>
    )
}

export default ErrorModal