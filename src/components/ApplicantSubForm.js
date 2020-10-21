import React from 'react';

class ApplicantSubForm extends React.Component {


    render() {
        return (
            <div>
                <div className="formheader-container">
                    <h3 className="section-header">Déposant</h3>
                    {/* <a onClick={this.props.showSubForm}>
                        <h3 className="section-header collapse-button">+</h3>
                    </a> */}
                </div>

                <div className="subform-container">

                <div className="form-row">

                    <div className="text-input">
                        <label>Prénom</label>
                        <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" onChange={this.props.handleChange}/>
                    </div>

                    <div className="text-input">
                        <label>Nom</label>
                        <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" onChange={this.props.handleChange}/>
                    </div>

                    <div className="text-input">
                        <label>Raison sociale</label>
                        <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" onChange={this.props.handleChange}/>
                    </div>

                    <div className="text-input">
                        <label>Adresse</label>
                        <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" onChange={this.props.handleChange}/>
                    </div>

                    <div className="text-input">
                        <label>Code Postal</label>
                        <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" onChange={this.props.handleChange}/>
                    </div>

                    <div className="text-input">
                        <label>Localité</label>
                        <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" onChange={this.props.handleChange}/>
                    </div>

                </div>

            </div>
        </div>
        )
    }
}

export default ApplicantSubForm;