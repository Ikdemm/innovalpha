import React from 'react';
import { useTranslation } from 'react-i18next';

function Appendings ({ handleCheck, handleUpload }) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section11-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    {/* <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a> */}
                </div>            
            </div>
    
            <div className="subform-container">
    
                <input type="checkbox" className="checkbox-input" id="appending1Check" name="appending1Check" onChange={handleCheck}/>
                <label>{t("appending")} 1</label>
                <input type="file" className="form-control file-input sum-input" name="appendingFile1" id="appendingFile1" onChange={handleUpload}/>
                <label htmlFor="appendingFile1">{t("upload file")}</label>
    
                <input type="checkbox" className="checkbox-input" id="appending2Check" name="appending2Check" onChange={handleCheck}/>
                <label>{t("appending")} 2</label>
                <input type="file" className="sum-input form-control file-input" name="appendingFile2" id="appendingFile2" onChange={handleUpload}/>
                <label htmlFor="appendingFile2">{t("upload file")}</label>
    
                <input type="checkbox" className="checkbox-input" id="appending3Check" name="appending3Check" onChange={handleCheck}/>
                <label>{t("appending")} 3</label>
                <input type="file" className="sum-input form-control file-input" name="appendingFile3" id="appendingFile3" onChange={handleUpload}/>
                <label htmlFor="appendingFile3">{t("upload file")}</label>
    
                <input type="checkbox" className="checkbox-input" id="appending4Check" name="appending4Check" onChange={handleCheck}/>
                <label>{t("appending")} 4</label>
                <input type="file" className="sum-input form-control file-input" name="appendingFile4" id="appendingFile4" onChange={handleUpload}/>
                <label htmlFor="appendingFile4">{t("upload file")}</label>
    
            </div>
        </div>
    )

} 

export default Appendings;