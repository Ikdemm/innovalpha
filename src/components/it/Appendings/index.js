import React from 'react';

const Appendings = ({ handleCheck, handleUpload }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Allegati</h3>
            </div>
            <div className="collapse-button-container">
                {/* <a>
                    <h3 class="section-header collapse-button">+</h3>
                </a> */}
            </div>            
        </div>

        <div className="subform-container">

            <input type="checkbox" className="checkbox-input" id="appending1Check" name="appending1Check" onChange={handleCheck}/>
            <label>Allegati 1</label>
            <input type="file" className="form-control file-input sum-input" name="appendingFile1" id="appendingFile1" onChange={handleUpload}/>
            <label htmlFor="appendingFile1">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending2Check" name="appending2Check" onChange={handleCheck}/>
            <label>Allegati 2</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile2" id="appendingFile2" onChange={handleUpload}/>
            <label htmlFor="appendingFile2">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending3Check" name="appending3Check" onChange={handleCheck}/>
            <label>Allegati 3</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile3" id="appendingFile3" onChange={handleUpload}/>
            <label htmlFor="appendingFile3">Ajouter fichier</label>

            <input type="checkbox" className="checkbox-input" id="appending4Check" name="appending4Check" onChange={handleCheck}/>
            <label>Allegati 4</label>
            <input type="file" className="sum-input form-control file-input" name="appendingFile4" id="appendingFile4" onChange={handleUpload}/>
            <label htmlFor="appendingFile4">Ajouter fichier</label>

        </div>
    </div>
)

export default Appendings;