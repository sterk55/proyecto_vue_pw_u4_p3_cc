import axios from "axios";

//Metodos Fachada

export const buscarTodosFachada=()=>{
    return buscarTodos()
}

export const obtenerPorCedulaFachada= async (cedula)=>{

    return await obtenerPorCedula(cedula);
}

export const insertarFachada=async (body)=>{
    await insertar(body);
}

export const actualizarFachada=(id,body)=>{
    actualizar(id,body);
}
export const borrarPorIdFachada=(id)=>{
     borrarPorId(id);
}
export const borrarPorCedulaFachada=(cedula)=>{
    borrarPorCedula(cedula)
}

//Metodos de Consumo CRUD


const obtenerPorCedula= async (cedula)=>{

    const data=axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/cedula/${cedula}`).then(r=>r.data)
    const {nombre,apellido}=axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/cedula/${cedula}`).then(r=>r.data)
    
    console.log(nombre,apellido)
    console.log(data)
    return data
}

const insertar= async (body)=>{
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`,body).then(r=>r.data)
}

const actualizar=async (id,body)=>{

    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes/id/${id}`,body).then(r=>r.data)

}

const buscarTodos=()=>{

}



const borrarPorId=(id)=>{
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/id/${id}`).then(r=>r.data)
}
const borrarPorCedula=(cedula)=>{
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/cedula/${cedula}`).then(r=>r.data)
}


