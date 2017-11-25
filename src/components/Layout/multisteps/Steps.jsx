import React from 'react';

export default class Steps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: props.currentStep,
        };

        this._moveStep = this._moveStep.bind(this);
    }

    componentDidMount() {
        // Call onStepChange for first time
        this.props.onStepChange(this.state.currentStep, this.state.currentStep === 1, this.state.currentStep === this.props.children.length);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.nextMove === false && nextProps.nextMove === true) {
            this._moveStep(this.state.currentStep + 1);
        }
        else if (this.props.prevMove === false && nextProps.prevMove === true) {
            this._moveStep(this.state.currentStep - 1);
        }
    }

    render() {
        let { currentStep } = this.state;
        let { children } = this.props;

        return (
            <div className="steps-component">
                <ul className="steps-navigator">
                    {
                        this._printStepsLabel(children, currentStep)
                    }
                </ul>
                <div className="steps-content">
                    {
                        this._printSteps(children, currentStep)
                    }
                </div>
            </div>
        );
    }

    _printStepsLabel(children, currentStep) {
        return (
            React.Children.map(children, (child, index) => {
                var isActivePrev = '';
                let isActive = index + 1 === currentStep ? 'active-step' : '';
                let isValid = (this.props.validPass) ? 'step-normal ' : '';
                let isLast = index + 1 === children.length ? 'last' : '';
                if (index + 2 === currentStep) {
                    isActivePrev = 'active-prevstep';
                }

                let { customNavigator } = child.props;
                return (
                    <span>
                        <li key={index} className={isValid + isActive + isActivePrev + isLast} onClick={() => {this._moveStep(index + 1)}} disabled={index > this.props.currentMaxStep}>
                            {customNavigator ? customNavigator : index + 1}
                            <span className="arrow-bg pull-right">
                                <span className="arrow-wrapper">
                                    <span className="arrow" />
                                </span>
                            </span>
                        </li>
                    </span>
                )
            })
        )
    }

    _printSteps(children, currentStep) {
        return (
            React.Children.map(children, (child, index) => {
                let stepNumber = index + 1;
                let isSibling = currentStep + 1 === stepNumber || currentStep - 1 === stepNumber;
                let settings = {
                    key: index,
                    index,
                    stepNumber: stepNumber,
                    isActive: currentStep === stepNumber,
                    isSibling: this.props.mountOnlySiblings ? isSibling : true
                };
                return (
                    <child.type {...settings}>
                        {child.props.children}
                    </child.type>
                );
            })
        )
    }

    _moveStep(step) {
        if (this.props.stepShouldChange()) {
            this.setState({
                currentStep: step
            });
            this.props.onStepChange(step, step === 1, step === this.props.children.length);
        }
    }
}

Steps.propTypes = {
    currentStep: React.PropTypes.number,
    currentMaxStep: React.PropTypes.number,
    stepShouldChange: React.PropTypes.func,
    onStepChange: React.PropTypes.func,
    mountOnlySiblings: React.PropTypes.bool,
    validPass: React.PropTypes.bool
};

Steps.defaultProps = {
    currentStep: 1,
    stepShouldChange: () => {return true;},
    onStepChange: () => {},
    prevButton: 'Prev',
    nextButton: 'Next',
    mountOnlySiblings: false
};