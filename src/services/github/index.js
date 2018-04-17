class GithubApi {
    url = 'http://api.github.com/users/';

    getUserDetails(user) {
        return fetch(`${this.url}${user}`).then((res) => {
            if (res.ok) {
                return res.json()
              } else {
                return Promise.reject('Not Found or something went wrong!')
              }
        });
    }

}

export default GithubApi;