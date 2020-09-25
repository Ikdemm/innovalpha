import React from 'react';

export default class Notes extends React.Component {
    render() {
        return(
            <div>
                <div className="formheader-container">
                    <div className="section-formheader-container">
                        <h3 className="section-header">Remarques</h3>
                    </div>
                    <div className="collapse-button-container">
                        <a>
                            <h3 className="section-header collapse-button">+</h3>
                        </a>
                    </div>            
                </div>

                <div className="subform-container">
                    <textarea id="notes" name="notes" className="form-control" rows="7" cols="33" onChange={this.props.handleChange}></textarea>
                </div>
            </div>
        )
    }
}  