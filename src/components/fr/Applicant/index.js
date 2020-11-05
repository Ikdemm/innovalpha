import React from 'react';
import { useTranslation } from 'react-i18next';

function ApplicantSubForm ({handleChange}) {

    const { t, i18n } = useTranslation();
    
    return(
    
    <div>
        <div className="formheader-container">
            <h3 className="section-header">{t('section1-title')}</h3>
            {/* <a onClick={this.props.showSubForm}>
                <h3 className="section-header collapse-button">+</h3>
            </a> */}
        </div>

        <div className="subform-container">

            <div className="form-row">

                <div className="text-input">
                    <label>{t('firstName')}</label>
                    <input type="text" className="form-control" id="applicantFirstName" name="applicantFirstName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>{t('lastName')}</label>
                    <input type="text" className="form-control" id="applicantLastName" name="applicantLastName" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>{t('socialReason')}</label>
                    <input type="text" className="form-control" id="applicantSocialReason" name="applicantSocialReason" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>{t('address')}</label>
                    <input type="text" className="form-control" id="applicantAddress" name="applicantAddress" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>{t('postCode')}</label>
                    <input type="text" className="form-control" id="applicantPostCode" name="applicantPostCode" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>{t('location')}</label>
                    <input type="text" className="form-control" id="applicantLocation" name="applicantLocation" onChange={handleChange}/>
                </div>

            </div>

        </div>
    </div>
    )
    
    
}

export default ApplicantSubForm;