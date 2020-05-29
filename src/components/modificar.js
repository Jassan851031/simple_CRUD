import React from 'react'

class Modificar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: props.nombre,
            apellido: props.apellido,
            edad: props.edad,
            rut: props.rut
        };
        //console.log(this.state.nombre);
    }

    nombreHandleChange = event => {
        this.setState({
            nombre: event.target.value
        })
        //console.log(this.nombre)
    }

    apellidoHandleChange = event => {
        this.setState({
            apellido: event.target.value
        })
    }

    edadHandleChange = event => {
        this.setState({
            edad: event.target.value
        })
    }

    rutHandleChange = event => {
        this.setState({
            rut: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState(
            {
                nombre: '',
                apellido: '',
                edad: '',
                rut: ''
            }
        )
      }

    render() {

        return (
            <div className="modal fade" id="modifyModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modify Member</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control" id="name" placeholder={this.props.nombre} onChange={this.nombreHandleChange} />
                                        <label>Age</label>
                                        <input type="text" className="form-control" id="age" placeholder={this.props.edad}  onChange={this.edadHandleChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Lastname</label>
                                        <input type="text" className="form-control" id="apellido" placeholder={this.props.apellido}  onChange={this.apellidoHandleChange} />
                                        <label>RUT</label>
                                        <input type="text" className="form-control" id="rut" placeholder={this.props.rut}  onChange={this.rutHandleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modificar;