import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, Card, CardBody } from 'reactstrap';
import Form from '../Form/Form';
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../actions/processActions';
import { openModal, closeModal } from '../../actions/modalActions';
import Children from '../../components/Children';

// redux stuff
//import { setConfigGID } from '../../actions/configActions';
//import { setConfigWidget } from '../../actions/configActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store
  };
})

class DisplayModal extends Component {

   constructor(props){
        super(props)
        this.state = {
            nestedModal: false,
            collapse: false
        }
    };

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    handleOnAdd(gid, modalType) {
    alert('replace content by open modal')
    ///this.props.dispatch(openModal(gid, modalType));
    }

    handleOnClose() {
        ///this.props.dispatch(closeModal());
        this.props.dispatch(configEntryDone());
    }

   render() {
       const divProps = Object.assign({}, this.props);
        ///delete divProps.layout;

       ///console.log('mmm ===> divPros (DisplayModal.js) ===========> ', divProps);

        if (divProps.stackarray === 'undefined')
        {
            divProps.stackarray = '';
        }


       if (divProps.isTablulateData) {
            divProps.leftBtnText = '';
            divProps.rightBtnText = '';
        }


       return (
        <Modal {...divProps} autoFocus={false} backdrop="static">
            <ModalHeader toggle={this.handleOnClose.bind(this)}>{divProps.onTitle}</ModalHeader>
                <ModalBody>

                    {divProps.stackarray}

                    <div>
                        {/* <Button color="primary" onClick={this.toggleNested.bind(this)}>Open new modal</Button>
                        {' '} */}
                        {/* <Button outline color="primary" onClick={this.toggle.bind(this)}>New Rule</Button>
                        {' '}
                        <Button outline color="primary" onClick={ this.handleOnAdd.bind(this, 5473, 'form') }>Replace content</Button>  */}
                    </div>

                    {divProps.onContent}

                    {/* <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested.bind(this)} autoFocus={false}>
                            <ModalHeader>Nested Modal title</ModalHeader>
                            <ModalBody>

                                <Form gid={2034} />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleNested.bind(this)}>Done</Button>{' '}
                            </ModalFooter>
                    </Modal> */}

                    <Children children={ this.props.children } />

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={ divProps.onContent.props.onSubmit }>Save</Button>{' '}
                    <Button color="secondary" onClick={ this.handleOnClose.bind(this) }>Cancel</Button>
                </ModalFooter>
        </Modal>
        );
    }
}

export default DisplayModal;
