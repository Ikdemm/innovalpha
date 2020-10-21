import React from 'react';

const ApplicantSubForm = ({handleChange}) => (
    <div>
        <div className="formheader-container">
            <h3 className="section-header">Markenhinterleger/in</h3>
            {/* <a onClick={this.props.showSubForm}>
                <h3 className="section-header collapse-button">+</h3>
            </a> */}
        </div>

        <div className="subform-container">

            <div className="form-row">

                <div className="text-input">
                    <label>Vorname</label>
                    <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Name</label>
                    <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Firma</label>
                    <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Adresse</label>
                    <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>PLZ</label>
                    <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Ort</label>
                    <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" onChange={handleChange}/>
                </div>

            </div>

        </div>
    </div>
)

export default ApplicantSubForm;