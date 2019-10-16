import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center"><h1>Quan ly cong viec</h1></div>



        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-title">
                <h3>Them cong viec
                <span className="fa fa-times-circle text-right"></span></h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Ten:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                    />
                  </div>
                  <label>trang thai:</label>
                  <select
                    className="form-control"
                    name="status"
                  >
                    <option value={true}>Kick hoat</option>
                    <option value={false}>an</option>

                  </select><br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">
                      <span className="fa fa-plus mr-5"></span> luu lai
                      </button>&nbsp;
                      <button type="submit" className="btn btn-danger">
                      <span className="fa fa-close mr-5"></span>  huy bo
                      </button>&nbsp;
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button className="btn btn-primary" type="button">
              <span className="fa fa-plus mr-5"></span>Them cong viec
               </button>
            {/* search-sort */}
            <div className="row mt-15">
              {/* search */}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="nhap tu khoa"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <span className="fa fa-search mr-5"></span> tim
                    </button>
                  </span>
                </div>
              </div>

            {/* sort */}
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



            </div>
          </div>
        </div>

        <div className="row mt-15">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">ten</th>
                  <th className="text-center">trang thai</th>
                  <th className="text-center">hanh dong</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    />
                  </td>
                  <td>
                    <select 
                    className="form-control"
                    name="filterStatus"
                    >
                     <option value={-1}>tat ca</option>
                     <option value={0}>an</option>
                     <option value={1}> kich hoat</option>

                    </select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hoc reactjs</td>
                  <td className="text-center">
                    <button className="btn btn-warning" type="button">
                       <span className="fa fa-danger mr-5">Kich hoat</span>
                    </button>
                   
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger"> 
                    <span className="fa fa-pencil mr-5"></span>sua
                    </button>
                    &nbsp;

                    <button type="button" className="btn btn-danger">
                      <span className="fa fa-trash mr-5"></span>xoa
                    </button>
                   
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>

      </div>
    )
  }
}
export default App
