import React, { Component } from "react";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries = [],
            categories = [],
            subcategories = [],
            documents = [],
            selectedCountry = '',
            selectedCategory = '',
            selectedSubCategory = ''
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
                        <select>
                            <option>

                            </option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}