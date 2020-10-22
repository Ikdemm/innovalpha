import React from "react";

const ContactSubForm = ({ handleChange, handleCheck, isEmailProvided }) => (
  <div>
    <div className="formheader-container">
      <div className="section-formheader-container">
        <h3 className="section-header">Personne à contacter</h3>
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
          <label>Prénom</label>
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
          <label>Nom</label>
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
          <label>Téléphone</label>
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
          <label>Numéro de référence, dossier</label>
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
              Dans la présente procédure, je souhaite recevoir les écrits de
              l’IPI par voie électronique à l’adresse suivante*:
              
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
          * L’adresse indiquée doit être enregistrée sur une plateforme de
          messagerie reconnue pour transmettre par voie électronique des
          documents dans le cadre d’une procédure administrative fédérale.
          Pour plus d’informations: www.ipi.ch/communication-electronique.
        </p>
      </div>
    </div>
  </div>
)


export default ContactSubForm;
