const api = process.env.API_URL ?? "http://[::1]:5000/api";

export const createPoll = async (formData) => {
  console.log(formData);
    //make request to backend to store this.
    const storeURL = api + '/store-poll';
    const response = await new Promise( (resolve) => {
        const newRequest = new XMLHttpRequest();
        newRequest.open("POST", storeURL, true);
        newRequest.responseType = "json";
        newRequest.setRequestHeader("Content-Type", "application/json")
        newRequest.onload = (value) => {
            if (value.target.status === 200) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        newRequest.onerror = () => {
            resolve(false);
        }
        newRequest.send(JSON.stringify(formData));
    });
    // const response = await fetch(storeURL, {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(formData)
    //     });
    console.log(response)
}

export const getPollResults = (pollId) => {
    //retrieve poll results 
}