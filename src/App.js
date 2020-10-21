import React from "react";
import axios from "axios";

import ApplicantSubForm from "./components/Applicant";
// import AgentSubForm from "./components/Agent";
// import ContactSubForm from "./components/Contact";
// import BrandSubForm from "./components/Brand";
// import TaxesSubForm from "./Components/Taxes";
// import ServicesSubForm from "./components/Services";
// import BrandCategroy from "./components/BrandCategory";
// import Colors from "./components/Colors";
// import Notes from "./components/Notes";
// import Appendings from "./components/Appendings";
// import Date from "./components/Date";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] }
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAndDownloadPDF = this.createAndDownloadPDF.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  /* ------------ Create PDF (then Downlad) ------------------ */

  createAndDownloadPDF() {
    
    let formData = new FormData();
    
    // Appending files to formData

    for (let element of this.state.files){
      let name = Object.keys(element)[0] 
      formData.append(name, element[name]);
    }

    // Appending the rest of the data to formData
    
    formData.append("data", JSON.stringify(this.state))
    
    // Sending the request

    axios({
      method: 'post',
      url: 'http://www.localhost:5000/proposal',
      data: formData,
      dataType: "multipart/form-data",
      processData: false,
      contentType: false
    }).then(res => console.log(res))
    /* ------------ Send the request to get the created PDF ------------------ */
    // .then(() =>
    //   axios({
    //     url: "http://www.localhost:5000/proposal",
    //     method: "GET",
    //     responseType: "blob",
    //   })
    // )
    /* ------------ Downloading the PDF file we get back ------------------ */
    // .then((response) => {
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", "file.pdf");
    //   document.body.appendChild(link);
    //   link.click();
    // });
  }

  /* ---------------- HandleUpload for files --------------------- */

  handleUpload(event) {
    // let files = (this.state.files !== undefined) ? this.state.files : [];
    // files.push({ [event.target.name]: event.target.files[0] })
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
    return (
      <div className="App">
        <div className="page-container">
          <h1 className="page-header">Enregistrement d’une marque suisse</h1>
        </div>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <ApplicantSubForm handleChange={this.handleChange} />
            {/* <AgentSubForm handleChange={this.handleChange} /> */}
            {/* <ContactSubForm
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
            <BrandCategroy handleCheck={this.handleCheck}/>
            <Colors handleChange={this.handleChange}/>
            <Notes handleChange={this.handleChange}/>
            <Appendings handleCheck={this.handleCheck} handleChange={this.handleChange} handleUpload={this.handleUpload}/>
            <Date handleUpload={this.handleUpload} handleChange={this.handleChange}/> */}

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
