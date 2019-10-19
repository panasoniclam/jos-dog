import React from 'react';
class Sort extends React.Component {
  render() {
    return (
              <>
             
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button
                  className="btn btn-primary  dropdown-toggle"
                  type="button"
                  aria-haspopup="true"
                  >
                    sap xep <span className="fa fa-caret-square-o-down ml-5"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelladby="dropdownMenu1">
                    <li >
                      <a role="button" className="sort_selected">
                        <span className="fa fa-sort-alpha-asc pr-5">Ten a-z</span>
                      </a>
                    </li>
                     <li  role="separetor" className="divider"> </li>
                     <li >
                      <a role="button" >
                        trang thai kich hoat
                      </a>
                    </li>
                    <li >
                      <a role="button" >
                        an
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              </>
      
    )
  }
}
export default Sort
