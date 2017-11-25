import React from 'react';
import ContentWrapper from './ContentWrapper';
import { Grid, Row, Col, Panel, Button, Modal, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

class SettingModal extends React.Component {
    render() {
        const divProps = Object.assign({}, this.props);
        delete divProps.layout;

        console.log('divPros ===========> ', divProps);

        if (divProps.stackArray === 'undefine')
        {
            divProps.stackArray = '';
        }

        if (divProps.isTablulateData) {
            divProps.leftBtnText = '';
            divProps.rightBtnText = '';
        }


        return (
            <Modal {...divProps} aria-labelledby="contained-modal-title-lg" backdrop="static" keyboard={false} autoFocus={false} enforceFocus={false}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">{divProps.onTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {divProps.errorMessage}
                        </div>
                        <div className="modal-tip">
                            {divProps.stackArray}
                            {divProps.onContent}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {
                            divProps.leftBtnText &&
                            <Button onClick={divProps.onCancel} className="pull-left btn btn-cancel">{divProps.leftBtnText}</Button>
                        }
                        {
                            divProps.rightBtnText &&
                            <Button onClick={divProps.onSubmits } type="submit" className="pull-right btn btn-save">{divProps.rightBtnText}</Button>
                        }
                    </Modal.Footer>
            </Modal>
        );
    }
}

export default SettingModal;
