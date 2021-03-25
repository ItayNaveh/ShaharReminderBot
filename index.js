import axios from "axios";

const apiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/`;

(async() => {
	try {
		const response = await axios.get(apiUrl + "sendMessage", {
			data: {
				// chat_id: "@reminder",
				chat_id: "-1001270026811",
				text: `test msg ${new Date(Date.now()).toLocaleString("he-IL")}`,
			}
		});

		console.log(response.data);
	} catch (err) {
		if (err.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log(err.response.status, err.response.statusText);
			console.log(err.response.data);
			// console.log(err.response.headers);
		} else if (err.request) {
			// The request was made but no response was received
			// `err.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(err.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', err.message);
		}
	}
})().then(() => process.exit(0));
