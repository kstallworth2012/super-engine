import {useContext} from "react"
import NorthwindDataContext from '../northwindDataContext'
import OrdersTableRow from './ordersTableRow'


function OrdersTable(){
	const { orders } = useContext(NorthwindDataContext)
	return(




			<div>
			<table>
				<thead>
				<tr>
						<th>order_id</th>
						<th>customer_id</th>
						<th>employee_id</th>
						<th>order_date</th>
						<th>required_date</th>
						<th>shipped_date</th>
						<th>ship_via</th>
						<th>freight</th>
						<th>ship_name</th>
						<th>ship_address</th>
						<th>ship_city</th>
						<th>ship_region</th>
						<th>ship_postal_code</th>
						<th>ship_country</th>
						
				</tr>
				</thead>
				<tbody>
					{
						orders.map((o)=>{

							return(
						<OrdersTableRow  order_id={o.order_id}
							            customer_id={o.customer_id}
							            employee_id={o.employee_id}
							            order_date={o.order_date}
							            required_date={o.required_date}
							            shipped_date={o.shipped_date}
							            ship_via={o.ship_via}
							            freight={o.freight}
							            ship_name={o.ship_name}
							            ship_address={o.ship_address}
							            ship_city={o.ship_city}
							            ship_region={o.ship_region}
							            ship_postal_code={o.ship_postal_code}
							            ship_country={o.ship_country}
             />)
										})
					}
				</tbody>
			</table>
			</div>
		)
}

export default OrdersTable