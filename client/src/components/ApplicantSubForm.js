import React from 'react';

class ApplicantSubForm extends React.Component {
    render() {
        return (
            <div>
                <div className="formheader-container">
                    <h3 className="section-header">Déposant</h3>
                    <a onClick={this.showSubForm}>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>

                <div className="subform-container">

                <div className="form-row">

                    <div className="text-input">
                        <label for="applicantFirstName">Prénom</label>
                        <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" required/>
                    </div>

                    <div className="text-input">
                        <label for="applicantLastName">Nom</label>
                        <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" required/>
                    </div>

                    <div className="text-input">
                        <label for="applicantSocialReason">Raison sociale</label>
                        <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" required/>
                    </div>

                    <div className="text-input">
                        <label for="applicantAddress">Adresse</label>
                        <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" required/>
                    </div>

                    <div className="text-input">
                        <label for="applicantPostCode">Code Postal</label>
                        <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" required/>
                    </div>

                    <div className="text-input">
                        <label for="applicantLocation">Localité</label>
                        <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" required/>
                    </div>

                </div>

            </div>
        </div>
        )
    }
}

export default ApplicantSubForm;