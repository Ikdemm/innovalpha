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

    changedCountry = (e) => {
        console.log("event.target.value: ", e.target.value)
        this.setState({selectedCountry: e.target.value})
        console.log("selected country: ", this.state.selectedCountry)
        this.state.countries.map(country => {
            country.categories.map(category => {
                country.country === this.state.selectedCountry && this.state.categories.push(category)   
            })
        })
    }

    changedSubCategory = () => {

    }

    loadCountries = () => {
        axios.get("/documents/countries.json")
        .then((data) => {
            this.setState({countries : [...data.data]});
            console.log(this.state.countries)
            console.log(data)
        })
    }

    loadDocuments = () => {
        axios.get("/documents/plainDocuments.json")
        .then((data) => {
            this.setState({documents : [...data.data]});
            console.log(this.state.documents)
        })
    }

    loadCategories = () => {
        this.state.countries.map(country => {
            console.log(country.category)
            this.state.categories.push(country.category)
        })
        console.log(this.state.categories)
    }

    reloadDocuments = () => {

    }

    render() {
        return(
            <div>
            <div className="medical-form-container" width="100%">
                <div className="form-row">

                    <div className="col-md-3">
                       <label htmlFor="country" className="medical-label">Country</label><br/>
                        <select className="select-bar" name="country" onChange={this.changedCountry}>
                            {
                                this.state.countries.map((elem, index) => {
                                    return <option key={index}>{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-3">
                       <label htmlFor="category" className="medical-label">Category</label><br/>
                        <select className="select-bar" name="category" onChange={this.changedCategory}>
                            {
                                this.state.categories.map((elem, index) => {
                                    return <option key={index}>{elem.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-3">
                       <label htmlFor="subcategory" className="medical-label">Subcategory</label><br/>
                        <select className="select-bar" name="subcategory" onChange={this.changedCategory}>
                            {
                                this.state.categories.map((elem, index) => {
                                    return <option key={index} className="medical-label">{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

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