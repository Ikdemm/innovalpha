import React from "react";
import { useTranslation } from 'react-i18next';

function ContactSubForm({ handleChange, handleCheck, isEmailProvided }) {
  
  const { t, i18n } = useTranslation();

  return (
    <div>
    <div className="formheader-container">
      <div className="section-formheader-container">
        <h3 className="section-header">{t("section3-title")}</h3>
      </div>
      <div className="collapse-button-container">
        <a>
          <h3 className="section-header collapse-button">+</h3>
        </a>
      </div>
    </div>

    <div className="subform-container">
      <div className="form-row">
        {/* <!-- First Name --> */}
        <div className="text-input">
          <label>{t("firstName")}</label>
          <input
            type="text"
            className="form-control"
            id="contactFirstName"
            name="contactFirstName"
            onChange={handleChange}
          />
        </div>

        {/* <!-- Last Name --> */}
        <div className="text-input">
          <label>{t("lastName")}</label>
          <input
            type="text"
            className="form-control"
            id="contactLastName"
            name="contactLastName"
            onChange={handleChange}
          />
        </div>

        {/* <!-- Social Reason --> */}
        <div className="text-input">
          <label>{t("phone")}</label>
          <input
            type="text"
            className="form-control"
            id="contactPhone"
            name="contactPhone"
            onChange={handleChange}
          />
        </div>

        {/* <!-- Application number --> */}
        <div className="text-input app-number-input">
          <label>{t("propsalNumber")}</label>
          <input
            type="text"
            className="form-control"
            id="appNumber"
            name="appNumber"
            placeholder="XXXX XXXX XXXX"
            onChange={handleChange}
          />
        </div><br/>

        {/* <!-- Digital Communication --> */}
        <div className="contact-email-section">
          <div>
            <label className="contact-email-label">
            <input
              type="checkbox"
              className="checkbox-input"
              id="isEmailProvided"
              name="isEmailProvided"
              onChange={handleCheck}
            />
              {t("emailLabel")}
              
            </label>
          </div>
          <div className="">
            <input
              type="email"
              className="form-control contact-email-input"
              name="contactEmail"
              id="email"
              placeholder="example@gmail.com"
              disabled={!isEmailProvided}
              onChange={handleChange}
            />
          </div>
          </div>
        <p className="input-hint">
          {t("emailHint")}
        </p>
      </div>
    </div>
  </div>
  )

}


export default ContactSubForm;
