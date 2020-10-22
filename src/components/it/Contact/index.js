import React from "react";

const ContactSubForm = ({ handleChange, handleCheck, isEmailProvided }) => (
  <div>
    <div className="formheader-container">
      <div className="section-formheader-container">
        <h3 className="section-header">Persona di contatto</h3>
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
          <label>Nome</label>
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
          <label>Cognome</label>
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
          <label>Telefono</label>
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
          <label>Numero di riferimento, incarto n.</label>
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
               Per quel che concerne la presente procedura, chiedo che tutte le comunicazioni dell’IPI siano
                trasmesse elettronicamente all’indirizzo e-mail*:
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
          L’indirizzo e-mail indicato deve essere registrato presso una piattaforma riconosciuta
          per la comunicazione per via elettronica di dati delle autorità federali. Maggiori informazioni:
          www.ipi.ch/comunicazioneelettronica
        </p>
      </div>
    </div>
  </div>
)


export default ContactSubForm;
