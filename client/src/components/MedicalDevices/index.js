import React, { Component } from "react";

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

    changedCategory = () => {

    }

    changedCountry = () => {

    }

    changedSubCategory = () => {

    }

    loadCountries = () => {

    }

    loadDocuments = () => {

    }

    reloadDocuments = () => {

    }

    render() {
        return(
            <div class="form-container" width="100%">
                <div class="form-row">
                    <div class="col-md-4">
                       <label for="country">Country</label>
                        <select onChange={this.changedCountry}>
                            {
                                this.state.countries.map((elem, index) => {
                                    return <option key={index} className="medical-label">{elem}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}