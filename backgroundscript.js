chrome.contextMenus.create({
	'title': 'Search IMDB for "%s"',
	'contexts': ['selection'],
	'onclick': async (context) => {
		const name = context.selectionText;
		const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=YOUR_API_KEY`)
		const {
			Title,
			Year,
			Runtime,
			Genre,
			Actors,
			Plot,
			imdbRating
		} = await response.json()
		const newLine = "\r\n"
		let message = `Title : ${Title}`
		message += newLine
		message += `Year : ${Year}`
		message += newLine
		message += `IMDb Rating : ${imdbRating}`
		message += newLine
		message += `Runtime : ${Runtime}`
		message += newLine
		message += `Genre : ${Genre}`
		message += newLine
		message += `Actors : ${Actors}`
		message += newLine
		message += `Plot : ${Plot}`
		alert(message)
	}
});