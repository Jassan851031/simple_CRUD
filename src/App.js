import React from 'react';
import './App.css';
import Agregar from './components/agregar';
import Modificar from './components/modificar';


//const [data, getDataState] = useState()

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: {},
      filter: ''
    }
  };


  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    });
  }

  getUser = (user) => {
    this.setState({ currentUser: user })
  }

  modifyUser = (e) => {
    this.setState((prevState) => {
      let currentUser = Object.assign({}, prevState.currentUser);
      currentUser.nombre = e.target.value;
      currentUser.apellido = e.target.value;
      currentUser.edad = e.target.value;
      currentUser.rut = e.target.value;
      return { currentUser };
    })
  }

  trash(y) {
    const { users } = this.state;
    users.splice(y, 1);
    this.setState({
      users: users
    })
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {

    const { filter, users } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = users.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <>
        <Agregar addUser={this.addUser} />
        <Modificar currentUser={this.state.currentUser} modifyUser={this.modifyUser} />
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="table-responsive-md">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Filter</span>
                </div>
                <input id="inputFilter" onChange={this.handleChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <table className="table table-lg table-dark">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Age</th>
                    <th scope="col">RUT</th>
                    <th scope="col"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#agregarmodal">
                      Insert
                    </button></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredData.map((user, i) => (
                      <tr key={i}>
                        <td> {i + 1}</td>
                        <td> {user.nombre}</td>
                        <td> {user.apellido}</td>
                        <td> {user.edad}</td>
                        <td> {user.rut}</td>
                        <td><button className="btn btn-dark btn-block border-white" data-toggle="modal" data-target='#modifyModal' onClick={() => this.getUser(user)}>Modify</button></td>
                        <td><button className="btn btn-danger btn-block" data-toggle="modal" data-target="#staticBackdrop" onClick={y => this.trash(i)}><i className="fa fa-trash"></i></button></td>
                      </tr>
                    ))
                  }
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
