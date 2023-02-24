import axios from "axios";

//metodo fachadas

export const obtenerClienteporCedulaFachada= async (cedula)=>{
    return obtenerClienteporCedula(cedula)
}

export const insertarFachada= async (body)=>{
    return insertar(body)
}

/**const actualizarFachada=(cedula, body)=>{
    return actualizar(cedula, body)
}

const buscarTodosFachada=()=>{

    return buscarTodos()
}

const borrarPorIdFachada=(id)=>{

    return borrarPorId(id)

}

const borrarPorCedulaFachada=(cedula)=>{

    return borrarPorCedula(cedula)
}
*/

//metodos de consumo CRUD


const obtenerClienteporCedula= async (cedula)=>{
    const data = axios.get(`http://localhost:8081/API/facturacion/V1/clientes/cedula/${cedula}`).then(r=>r.data)
    console.log(data)
    return data
}

const insertar= async (body)=>{
    axios.post(`http://localhost:8081/API/facturacion/V1/clientes`, body).then(r=>r.data)
}
/**
const actualizar=(cedula, body)=>{
    axios.put(`http://localhost:8081/API/facturacion/V1/clientes/$`, body)
}

/**const buscarTodos=()=>{


}

const borrarPorId=(id)=>{


}

const borrarPorCedula=(cedula)=>{


}**/


