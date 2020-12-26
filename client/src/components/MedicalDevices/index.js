import React, { Component } from "react";
import axios from 'axios';

export default class MedicalDevices extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries : [],
            categories : [],
            subcategories : [],
            documents : [],
            selectedCountry : '',
            selectedCategory : '',
            selectedSubCategory : ''
        }
    }

    componentDidMount() {
        this.loadCountries();
        this.loadDocuments();
    }

    changedCategory = () => {

    }

    changedCountry = () => {

    }

    changedSubCategory = () => {

    }

    loadCountries = () => {
        axios.get("/documents/countries.json")
        .then((data) => {
            this.setState({countries : [...data.data]});
            console.log(this.state.countries)
            // console.log(data)
        })
    }

    loadDocuments = () => {
        axios.get("/documents/plainDocuments.json")
        .then((data) => {
            // console.log(data.data)
            this.setState({documents : [...data.data]});
            console.log(this.state.documents)
        })
    }

    reloadDocuments = () => {

    }

    render() {
        return(
            <div className="form-container" width="100%">
                <div className="form-row">

                    <div className="col-md-4">
                       <label htmlFor="country">Country</label>
                        <select name="country" onChange={this.changedCountry}>
                            {
                                this.state.countries.map((elem, index) => {
                                    return <option key={index} className="medical-label">{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-4">
                       <label htmlFor="category">Category</label>
                        <select name="category" onChange={this.changedCategory}>
                            {
                                this.state.categories.map((elem, index) => {
                                    return <option key={index} className="medical-label">{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-4">
                       <label htmlFor="subcategory">Subcategory</label>
                        <select name="subcategory" onChange={this.changedCategory}>
                            {
                                this.state.categories.map((elem, index) => {
                                    return <option key={index} className="medical-label">{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

                </div>

                <div className="cards-container">
                    {this.state.documents.map((document, index) => {
                        return (
                            <div key={index} className="card mb-4">
                                <div className="card-header">{document.category} - <b>{document.subcategory}</b></div>
                                <div className="card-body">
                                    <h5 className="card-title">{document.title}</h5>
                                    <p className="card-text">Files</p>
                                    {document.files && document.files.map((file, index) => {
                                        return (
                                            <a key={index} href={file} download>
                                                <button className="btn btn-pdf">
                                                PDF
                                                </button>
                                            </a>
                                        )
                                    })}
                                    {document.excel && document.excel.map((file, index) => {
                                        return (
                                            <a key={index} href={file} download>
                                                <button className="btn btn-pdf">
                                                {file.title}
                                                </button>
                                            </a>
                                        )
                                    })}
                                    {document.zip && document.zip.map((file, index) => {
                                        return (
                                            <a key={index} href={file} download>
                                                <button className="btn btn-pdf">
                                                {file.title}
                                                </button>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}