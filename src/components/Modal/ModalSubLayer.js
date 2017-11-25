import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Form from '../Form/Form';
// import { openModal, closeModal } from '../../actions/modalActions';

// import { connect } from 'react-redux';

// @connect((store) => {
//   return {
//     store
//   };
// })

class ModalSubLayer extends Component {

    constructor(props){
        super(props)
    };

//    componentWillReceiveProps(nextProps) {
//         if(nextProps.activetblname === nextProps.tblname) {
//             if (nextProps.expanded === true) {
//                 // setTimeout(function() { 
//                 //     $('.modal-body').scrollTop(0); 
//                 // }.bind(this), 500);
//                 $('body').addClass('modal-sub-form-open');
//             } else if (nextProps.expanded === false) {
//                 $('body').removeClass('modal-sub-form-open');
//             }
//         }
//     }

    render () {
        return (
            <div className="subform-modal" style={{ display: (this.props.expanded ? 'block' : 'none') }}>
                <div className="modal-backdrop fade in"></div>
                <div className="modal fade in">
                    <div className="panel">
                        <div className="panel-heading">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <div className="panel-title">
                                title
                            </div>
                        </div>
                        <div className="panel-body">
                            fjsldsf dslfjsldf jsldf sljdfsdlf jsdljfsd lfjsdl fjsdljfsdl fsljdjfsdlfj
                            dlfjsldf ldf ldjfld jfld fsldjfsldf dljfldjf sldaf saljf
                        </div>
                        {/* <div className="panel-footer ">
                            <Button onClick={ this.handleOnCancel.bind(this) } className="pull-left btn btn-cancel">Cancel</Button>
                            <Button onClick={ this.handleSubmit.bind(this) } type="submit" className="pull-right btn btn-save">Save</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
  
}

export default ModalSubLayer;