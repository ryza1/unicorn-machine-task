const api = "http://[::1]:5000/api";


export const getPoll = async (pollId) => {
  const queryURL = api + "/query-poll?poll=" + pollId;
  return await new Promise( (resolve) => {
        const newRequest = new XMLHttpRequest();
        newRequest.open("GET", queryURL, true);
        newRequest.responseType = "json";
        // newRequest.setRequestHeader("Content-Type", "application/json")
        newRequest.onload = (value) => {
            if (value.target.status === 200) {
                resolve(value.target.response);
            } else {
                resolve(false);
            }
        };
        newRequest.onerror = () => {
            resolve(false);
        }
        newRequest.send();
    });
}

export const votePoll = async (pollId, key) => {
  const voteURL = api + "/vote-poll";
  return await new Promise( (resolve) => {
        const newRequest = new XMLHttpRequest();
        newRequest.open("POST", voteURL, true);
        newRequest.responseType = "json";
        newRequest.setRequestHeader("Content-Type", "application/json")
        newRequest.onload = (value) => {
            if (value.target.status === 200) {
                resolve(value.target.response);
            } else {
                resolve(false);
            }
        };
        newRequest.onerror = () => {
            resolve(false);
        }
        newRequest.send(JSON.stringify({
          poll_id: pollId,
          key: key
        }));
    });
}

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
    console.log(response)
}

export const getPollResults = (pollId) => {
    //retrieve poll results 
}