import React from 'react';

export default class Date extends React.Component {
    render() {
        return(
            <div>
                <div class="formheader-container">
                    <div class="section-formheader-container">
                        <h3 class="section-header">Date et Signature</h3>
                    </div>
                    <div class="collapse-button-container">
                        <a>
                            <h3 class="section-header collapse-button">+</h3>
                        </a>
                    </div>            
                </div>

                <div class="subform-container">
                    <div class="">
                        <label for="signature">Date</label>
                        <input type="date" class="sum-input" name="signingDate" id="signingDate"/>

                        <label for="signature">Digital Signature</label>
                        <input type="file" class="sum-input" name="signature" id="signature"/>
                    </div>
                </div>
            </div>
        )
    }
}