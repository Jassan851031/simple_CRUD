import React from 'react';
import './App.css';
import Agregar from './components/agregar'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  };

  


  render() {
    return (
      <>
        <Agregar />
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="table-responsive-md">
              <button type="button" className="btn btn-primary mb-1" data-toggle="modal" data-target="#exampleModal">
                Insert
            </button>
              <table className="table table-lg table-dark">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Age</th>
                    <th scope="col">RUT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button className="btn btn-dark btn-block border-white" data-toggle="modal">Modify</button>
                    </td>
                    <td><button className="btn btn-danger btn-block" data-toggle="modal" data-target="#staticBackdrop"><i className="fa fa-trash"></i></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
