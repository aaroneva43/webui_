import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DisplayModalSub extends Component {

constructor(props){
        super(props)
        this.state = {
            nestedModal: this.props.isOpen
        }
    };

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

// <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested}>
//                         <ModalHeader>Nested Modal title</ModalHeader>
//                         <ModalBody>Nested Modal body content goes here</ModalBody>
//                         <ModalFooter>
//                             <Button color="primary" onClick={this.toggleNested.bind(this)}>Done</Button>{' '}
//                         </ModalFooter>
//                     </Modal>

render(){
    return(
        <Modal isOpen={this.state.isOpen} toggle={this.toggleNested.bind(this)}>
            <ModalHeader>Nested Modal title</ModalHeader>
                <ModalBody>Nested Modal body content goes here</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleNested.bind(this)}>Done</Button>{' '}
                </ModalFooter>
        </Modal>
    );
}

}

export default DisplayModalSub
