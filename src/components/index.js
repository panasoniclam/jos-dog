import React from 'react'
import { useState } from 'react'
export default function Test({ test }) {
    const [count, setCount] = useState(3, 4);
    return (
        <div>
            <div>
            <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                        lamnn
             </div>
                    <div className="col-md-6 col-xs-6 col-lg-6 col-sm-6">
                        lamnn
             </div>
                </div>
            </div>
        </div>


    )
}