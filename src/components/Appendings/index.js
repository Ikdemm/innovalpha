import React from 'react';

const Appendings = ({ handleCheck, handleUpload }) => (
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

            <input type="checkbox" className="checkbox-input" id="appending1Check" name="appending1Check" onChange={handleCheck}/>
            <label>Annexe 1</label>
            <input type="file" className="form-control file-input sum-input" name="appendingFile1" id="appendingFile1" onChange={handleUpload}/>
            <label htmlFor="appendingFile1">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending2Check" name="appending2Check" onChange={handleCheck}/>
            <label>Annexe 2</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile2" id="appendingFile2" onChange={handleUpload}/>
            <label htmlFor="appendingFile2">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending3Check" name="appending3Check" onChange={handleCheck}/>
            <label>Annexe 3</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile3" id="appendingFile3" onChange={handleUpload}/>
            <label htmlFor="appendingFile3">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending4Check" name="appending4Check" onChange={handleCheck}/>
            <label>Annexe 4</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile4" id="appendingFile4" onChange={handleUpload}/>
            <label htmlFor="appendingFile4">Ajouter fichier</label>

        </div>
    </div>
)

export default Appendings;