import axios from "axios"

class DataServices{
    
    fetchAllReq(type, status){
        let data = {type: type, status : status}
        console.log("http://localhost:4466/bankapp/getEmpInfo/"+data.type+"/"+data.status)
        return axios.get("http://localhost:4466/bankapp/getEmpInfo/"+data.type+"/"+data.status)
    
    }
    fetchAddOnCardReq(id){
        return axios.get("http://localhost:4466/bankapp/getAddOnCardById/"+id);
    }

    fetchIncreaseCreditLimit(id){
        return axios.get("http://localhost:4466/bankapp/getIncreaseCreditLimit/"+id);
    }
    fetchLostStolenCard(id){
        return axios.get("http://localhost:4466/bankapp/getStolenCardInfo/"+id);
    }
    fetchChequeBookRequest(id){
        console.log(id)
        return axios.get("http://localhost:4466/bankapp/getChequeBookRequest/"+id);
    }
    fetchEmpLogin(id){
        return axios.get("http://localhost:4466/bankapp/getEmpById/"+id);
    }
    updateAddOnCard(data){
        return axios.put("http://localhost:4466/bankapp/updateCardInfo/",data);
    }
    updateLostStolen(data){
        console.log(data)
        return axios.put("http://localhost:4466/bankapp/updateLostStolenInfo",data);
    }
    updateChequeBookRequest(data){
        return axios.put("http://localhost:4466/bankapp/updateCheckBookServiceInfo",data)
    }
    updateCreditLimit(data){
        console.log(data)
        return axios.put("http://localhost:4466/bankapp/updateCreditLimit",data)}
        
    }


export default new DataServices();