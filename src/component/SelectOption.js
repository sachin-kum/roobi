import React from 'react'

function SelectOption() {
  return (
<>
<div className="options">
        <div className="container">
          <form>
            <div className="row select-option">
              <div className="col dropdown-select">
                <select >
                  <option value="">Anywhere</option>
                </select>
              </div>
              <div className="col dropdown-select">
                <select >
                  <option value="">05.05.2024</option>
                </select>
              </div>
              <div className="col dropdown-select">
                <select >
                  <option>Boho Theme</option>
                </select>
              </div>
              <div className="col dropdown-select">
                <select >
                  <option value="">30-50 guests</option>
                </select>
              </div>
              <div className="col dropdown-select border-0 d-flex">
                <select name="" id="">
                  <option value="">Price Range: $$</option>
                </select>
                <div className="dropdown_submit">
                  <button type="submit">
                    <img src="static/vecot_border.png" alt="vector"></img>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</>
  )
}

export default SelectOption