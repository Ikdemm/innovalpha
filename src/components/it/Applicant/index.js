import React from 'react';

const ApplicantSubForm = ({handleChange}) => (
    <div>
        <div className="formheader-container">
            <h3 className="section-header">Depositante</h3>
            {/* <a onClick={this.props.showSubForm}>
                <h3 className="section-header collapse-button">+</h3>
            </a> */}
        </div>

        <div className="subform-container">

            <div className="form-row">

                <div className="text-input">
                    <label>Nome</label>
                    <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Cognome</label>
                    <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Rispettivamente ditta</label>
                    <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Indirizzo</label>
                    <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>CAP</label>
                    <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Località</label>
                    <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" onChange={handleChange}/>
                </div>

            </div>

        </div>
    </div>
)

export default ApplicantSubForm;