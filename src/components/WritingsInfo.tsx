const WritingsInfo = (props:{ writingsData:Writing[]; }) => {
	const {writingsData} = props;
	console.dir(writingsData)
	return (
		<div>
			<h2>Writings</h2>
			{writingsData.map((w) => {
				return (
					<>
						<h3>{w.title}</h3>
						<div dangerouslySetInnerHTML={{__html: w.info}}/>
					</>
				);
			})}
		</div>
	);
};

export default WritingsInfo;
