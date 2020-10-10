import React from "react";
// import { connect } from "react-redux";

export default class ContactSubForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isEmailProvided: this.props.isEmailProvided
    // }
  }

  render() {
    return (
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
                onChange={this.props.handleChange}
                required
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
                onChange={this.props.handleChange}
                required
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
                onChange={this.props.handleChange}
                required
              />
            </div>

            {/* <!-- Application number --> */}
            <div className="">
              <label>Numéro de référence, dossier</label>
              <input
                type="text"
                className="form-control"
                id="appNumber"
                name="appNumber"
                onChange={this.props.handleChange}
                required
              />
            </div>

            {/* <!-- Digital Communication --> */}
            <div className="">
              <input
                type="checkbox"
                className="checkbox-input"
                id="isEmailProvided"
                name="isEmailProvided"
                onChange={this.props.handleCheck}
              />
              <label>
                Dans la présente procédure, je souhaite recevoir les écrits de
                l’IPI par voie électronique à l’adresse suivante*:
              </label>
            </div>
            <div className="">
              <input
                type="text"
                className="form-control"
                name="contactEmail"
                id="email"
                disabled={this.props.isEmailProvided}
                onChange={this.props.handleChange}
              />
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
    );
  }
}
