import React from 'react';

export default class Appendings extends React.Component {
    render() {
        return(
            <div>
                <div class="formheader-container">
                    <div class="section-formheader-container">
                        <h3 class="section-header">Annexes</h3>
                    </div>
                    <div class="collapse-button-container">
                        {/* <a>
                            <h3 class="section-header collapse-button">+</h3>
                        </a> */}
                    </div>            
                </div>

                <div className="subform-container">

                    <input type="checkbox" className="checkbox-input" id="annexe1Check" name="annexe1Check" onChange={this.props.handleCheck}/>
                    <label>Annexe 1</label>
                    <input type="file" className="sum-input" name="annexe1" id="annexe1" onChange={this.props.handleChange}/>

                    <input type="checkbox" className="checkbox-input" id="annexe2Check" name="annexe2Check" onChange={this.props.handleCheck}/>
                    <label>Annexe 2</label>
                    <input type="file" className="sum-input" name="annexe2" id="annexe2" onChange={this.props.handleChange}/>

                    <input type="checkbox" className="checkbox-input" id="annexe3Check" name="annexe3Check" onChange={this.props.handleCheck}/>
                    <label>Annexe 3</label>
                    <input type="file" className="sum-input" name="annexe3" id="annexe3" onChange={this.props.handleChange}/>

                    <input type="checkbox" className="checkbox-input" id="annexe4Check" name="annexe4Check" onChange={this.props.handleCheck}/>
                    <label>Annexe 4</label>
                    <input type="file" className="sum-input" name="annexe4" id="annexe4" onChange={this.props.handleChange}/>

                </div>
            </div>
            )
    }
}