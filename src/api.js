import axios from "axios"


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4040"


class NorthwindDataAPI {

		static async getAllCustomers(){
			try{

				const results = await axios.get(`${BASE_URL}/customers`)
				return results
			}catch(error){
				console.log(error)
			}
		}

}


export default NorthwindDataAPI
