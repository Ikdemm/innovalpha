import React from 'react';

const ApplicantSubForm = ({handleChange}) => (
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
                    <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Nom</label>
                    <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Raison sociale</label>
                    <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Adresse</label>
                    <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Code Postal</label>
                    <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Localité</label>
                    <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" onChange={handleChange}/>
                </div>

            </div>

        </div>
    </div>
)

export default ApplicantSubForm;