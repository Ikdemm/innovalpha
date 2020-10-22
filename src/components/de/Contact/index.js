import React from "react";

const ContactSubForm = ({ handleChange, handleCheck, isEmailProvided }) => (
  <div>
    <div className="formheader-container">
      <div className="section-formheader-container">
        <h3 className="section-header">Kontaktperson</h3>
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
          <label htmlFor="contactFirstName">Vorname</label>
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
          <label htmlFor="contactLastName">Nom</label>
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
          <label htmlFor="contactPhone">Telefon</label>
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
          <label htmlFor="appNumber">Referenznummer, Dossier</label>
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
              Ich wünsche in diesem Verfahren eine elektronische Übermittlung der IGE-Schreiben an die hier
              aufgeführte E-Mail-Adresse*:
              
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
          * Die angegebene E-Mail-Adresse muss für den schweizerischen Behördenverkehr auf einer
          anerkannten Zustellplattform eingetragen sein. Mehr erfahren unter www.ige.ch/e-uebermittlung.
        </p>
      </div>
    </div>
  </div>
)


export default ContactSubForm;
