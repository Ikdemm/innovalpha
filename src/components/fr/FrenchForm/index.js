import React from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";

import ApplicantSubForm from "../Applicant";
import AgentSubForm from "../Agent";
import ContactSubForm from "../Contact";
import BrandSubForm from "../Brand";
import TaxesSubForm from "../Taxes";
import ServicesSubForm from "../Services";
import BrandCategroy from "../BrandCategory";
import Colors from "../Colors";
import Notes from "../Notes";
import Appendings from "../Appendings";
import Date from "../Date";
import ClaimSubForm from '../Claim';

export default class FrenchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { files: [], lang: 'fr' }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAndDownloadPDF = this.createAndDownloadPDF.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  /* ------------ Create PDFs (then Downlad) ------------------ */

  createAndDownloadPDF() {
    
    let formData = new FormData();
    
    // Appending files to formData

    for (let element of this.state.files) {
      let name = Object.keys(element)[0] 
      formData.append(name, element[name]);
    }

    // Appending the rest of the data to formData
    
    formData.append("data", JSON.stringify(this.state))
    
    // Sending the request

    axios({
      method: 'POST',
      url: 'http://www.localhost:5000/proposal',
      data: formData,
      dataType: "multipart/form-data",
      processData: false,
      contentType: false
    })
    /* ------------ Send the request to get the created PDF ------------------ */
    .then(() => axios({
        url: "http://www.localhost:5000/proposal",
        method: "GET",
        responseType: "blob",
      })
    )
    /* -------------- Downloading the PDF file we get back ------------------- */
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();
    });
  }

  /* ---------------- HandleUpload for files --------------------- */

  handleUpload(event) {
    let files = this.state.files;
    files.push({ [event.target.name]: event.target.files[0] })
    this.setState({ files })
  }

  /* ------------ HandleChange for text inputs ------------------ */

  handleChange(event) {
    let property = event.target.name;
    this.setState({ [property]: event.target.value });
  }

  /* -------------- HandleCheck for checkboxes ------------------- */

  handleCheck(event) {
    console.log(event.target.name);
    let property = event.target.name;
    this.setState({ [property]: !this.state[property] }, () => {
      console.log(this.state);
    });
  }

  /* ------------ Handling the submit of the form ------------------ */

  handleSubmit(event) {
    event.preventDefault();
    this.createAndDownloadPDF();
  }

  /* ------------------------ Render Method ------------------------ */

  render() {
    const { t, i18n } = useTranslation();
    return (
      <div className="App">
        <div className="page-container">
          <h1 className="page-header">{t("page-header")}</h1>
        </div>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <ApplicantSubForm handleChange={this.handleChange} />
            <AgentSubForm handleChange={this.handleChange} />
            <ContactSubForm
              handleChange={this.handleChange}
              handleCheck={this.handleCheck}
              isEmailProvided = {this.state.isEmailProvided} 
            />
            <BrandSubForm
             handleCheck={this.handleCheck}
             handleChange={this.handleChange}
             handleUpload={this.handleUpload}
             otherBrand={this.state.otherBrand}/>
            <TaxesSubForm handleCheck={this.handleCheck} handleChange={this.handleChange}/>
            <ServicesSubForm handleChange={this.handleChange} handleUpload={this.handleUpload}/>
            <BrandCategroy handleCheck={this.handleCheck} />
            <ClaimSubForm handleChange={this.handleChange} />
            <Colors handleChange={this.handleChange}/>
            <Notes handleChange={this.handleChange}/>
            <Appendings handleCheck={this.handleCheck} handleUpload={this.handleUpload}/>
            <Date handleChange={this.handleChange} handleUpload={this.handleUpload}/>

            <hr />

            <input
              type="submit"
              className="submit-button"
              value="Générer PDF"
            />
          </form>
        </div>
      </div>
    );
  }
}
