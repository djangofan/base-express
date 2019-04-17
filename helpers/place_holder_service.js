const fetch = require('node-fetch');

class PlaceHolderService {

    async getResults() {
        fetch(`https://jsonplaceholder.typicode.com/users/10`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then((data) => {
                            console.log("HTTP OK")
                            return data
                        }
                    );
                } else {
                    throw 'There is something wrong.'
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

}

module.exports = PlaceHolderService
