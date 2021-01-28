
export const getHighscores = (cb) => {
  fetch('/api/highscore',{method: "GET"})
    .then(res => res.json())
    .then(response => {
      cb(response.items)
    })
    .catch(error => console.log(error))
}

export const setHighscore = (data, cb) => {
  fetch('/api/highscore',{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(response => {
      if(response.items) {
        cb(response.items)
      }
    })
    .catch(error => console.log(error))
}
