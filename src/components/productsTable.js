import {useContext} from "react"
import NorthwindDataContext from '../northwindDataContext'
import ProductsTableRow from './productsTableRow'


function ProductsTable(){
	const { products } = useContext(NorthwindDataContext)
	return(

        
			<div>
			<table>
				<thead>
				<tr>
						<th>product_id</th>
						<th>product_name</th>
						<th>supplier_id</th>
						<th>category_id</th>
						<th>quantity_per_unit</th>
						<th>unit_price</th>
						<th>units_in_stock</th>
						<th>units_on_order</th>
						<th>reorder_level</th>
						<th>discontinued</th>
						
				</tr>
				</thead>
				<tbody>
					{
						products.map((p)=>{

							return(
						<ProductsTableRow 
									  			product_id={p.product_id}
									            product_name={p.product_name}
									            supplier_id={p.supplier_id}
									            category_id={p.category_id}
									            quantity_per_unit={p.quantity_per_unit}
									            unit_price={p.unit_price}
									            units_in_stock={p.units_in_stock}
									            units_on_order={p.units_on_order}
									            reorder_level={p.reorder_level}
									            discontinued={p.discontinued}
						 />)
										})
					}
				</tbody>
			</table>
			</div>
		)
}

export default ProductsTable