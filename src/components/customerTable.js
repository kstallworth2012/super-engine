import {useContext} from "react"
import NorthwindDataContext from '../northwindDataContext'
import CustomerTableRow from './customerTableRow'


function CustomerTable(){
	const { customers } = useContext(NorthwindDataContext)
	console.log(customers)
	return(
// address
// city
// company_name
// contact_name
// contact_title
// country
// customer_id
// fax
// phone
// postal_code
// region
			<div>
			<table>
				<thead>
				<tr>
						<th>address</th>
						<th>city</th>
						<th>company_name</th>
						<th>contact_name</th>
						<th>contact_title</th>
						<th>country</th>
						<th>customer_id</th>
						<th>fax</th>
						<th>phone</th>
						<th>postal_code</th>
						<th>region</th>
				</tr>
				</thead>
				<tbody>
					{
						customers.map((c)=>{

							return(
						<CustomerTableRow address ={c.address}
											city={c.city}
											company_name={c.company_name}
											contact_name={c.contact_name}
											contact_title={c.contact_title}
											country={c.country}
											customer_id={c.customer_id}
											fax={c.fax}
											phone={c.phone}
											postal_code={c.postal_code}
											region={c.region} />)
										})
					}
				</tbody>
			</table>
			</div>
		)
}

export default CustomerTable