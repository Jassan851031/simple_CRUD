import React from 'react'

class Modificar extends React.Component {

    componentDidMount() {
        this.setState({
            nombre: this.props.currentUser.nombre,
            apellido: this.props.currentUser.apellido,
            edad: this.props.currentUser.edad,
            rut: this.props.currentUser.rut
        })
    }

    handleModifySubmit = event => {
        event.preventDefault();
        this.props.modifyUser(this.state);
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
                        <form onSubmit={this.handleModifySubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modificar Usuario</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombres</label>
                                            <input type="text" className="form-control" id="name" defaultValue={this.props.currentUser.nombre} onChange={this.nombreHandleChange} />
                                            <label>Edad</label>
                                            <input type="text" className="form-control" id="age" defaultValue={this.props.currentUser.edad} onChange={this.edadHandleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Apellidos</label>
                                            <input type="text" className="form-control" id="apellido" defaultValue={this.props.currentUser.apellido} onChange={this.apellidoHandleChange} />
                                            <label>RUT</label>
                                            <input type="text" className="form-control" id="rut" defaultValue={this.props.currentUser.rut} onChange={this.rutHandleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modificar;