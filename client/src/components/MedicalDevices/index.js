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
            selectedCountry : 'Europe',
            selectedCategory : '',
            selectedSubCategory : '',
            selectedDocuments: []
        }
    }

    componentDidMount() {
        this.loadCountries();
        this.loadDocuments();
    }

    changedCountry = (e) => {
        this.setState({selectedCountry: e.target.value}, () => {
            this.loadCategories();
            this.reloadDocuments("country");   
        });
    }

    changedCategory = (e) => {
        this.setState({selectedCategory: e.target.value}, () => {
            this.loadSubCategories();
            this.reloadDocuments("category");
        });
    }

    changedSubCategory = (e) => {
        this.setState({selectedSubCategory: e.target.value}, () => {
            this.reloadDocuments("subcategory");   
        });
    }

    loadCountries = () => {
        axios.get("/documents/countries.json")
        .then((data) => {
            this.setState({countries : [...data.data]});
            this.loadCategories();
        })
    }

    loadDocuments = () => {
        axios.get("/documents/plainDocuments.json")
        .then((data) => {
            this.setState({documents : [...data.data]}, 
                this.setState({selectedDocuments: this.state.documents})
            );
        })
    }

    loadCategories = () => {
        var acc = []
        this.state.countries.map(country => {
            country.categories.map(category => {
                country.country === this.state.selectedCountry && acc.push(category)   
            })
            this.setState({categories: acc})
        })
    }

    loadSubCategories = () => {
        var acc = []
        this.state.categories.map(category => {
            category.subcategories.map(subcategory => {
                category.name === this.state.selectedCategory && acc.push(subcategory)
            })
            this.setState({subcategories: acc})
        })
    }

    reloadDocuments = (condition) => {
        switch (condition) {
            case 'country':
                this.setState({selectedDocuments: this.state.documents.filter(document => document.country === this.state.selectedCountry)})
                break;
            case 'category':
                this.setState({selectedDocuments: this.state.documents.filter(document => document.category === this.state.selectedCategory)})
                break;
            case 'subcategory':
                this.setState({selectedDocuments: this.state.documents.filter(document => document.subcategory === this.state.selectedSubCategory)})
                break;
        }
    }

    render() {
        return(
            <div>
            <div className="medical-form-container" width="100%">
                <div className="form-row">

                    <div className="col-md-3">
                       <label htmlFor="country" className="medical-label">Country</label><br/>
                        <select
                         className="select-bar"
                         name="country"
                         onChange={this.changedCountry}
                         placeholder="Select a Region" 
                        >
                            {
                                this.state.countries.map((elem, index) => {
                                    return <option key={index} className="medical-option">{elem.country}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-3">
                       <label htmlFor="category" className="medical-label">Category</label><br/>
                        <select
                         className="select-bar"
                         name="category"
                         onChange={this.changedCategory}
                         placeholder="Select a Category"
                        >
                            {
                                this.state.categories.map((elem, index) => {
                                    return <option key={index} className="medical-option">{elem.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="col-md-3">
                       <label htmlFor="subcategory" className="medical-label">Subcategory</label><br/>
                        <select
                         className="select-bar"
                         name="subcategory"
                         onChange={this.changedSubCategory}
                         placeholder="Select a Subcategory" 
                        >
                            {
                                this.state.subcategories.map((elem, index) => {
                                    return <option key={index} className="medical-option">{elem.title}</option>
                                })
                            }
                        </select>
                    </div>

                </div>
            </div>

                <div className="cards-container">
                    {this.state.selectedDocuments.map((document, index) => {
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