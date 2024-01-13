


function CustomerTableRow({
					address,
				city,
				company_name,
				contact_name,
				contact_title,
				country,
				customer_id,
				fax,
				phone,
				postal_code,
				region
					}){
	return(
		<tr>
					<td>{address}</td>
					<td>{city}</td>
					<td>{company_name}</td>
					<td>{contact_name}</td>
					<td>{contact_title}</td>
					<td>{country}</td>
					<td>{customer_id}</td>
					<td>{fax}</td>
					<td>{phone}</td>
					<td>{postal_code}</td>
					<td>{region}</td>
		</tr>)
}


export default CustomerTableRow