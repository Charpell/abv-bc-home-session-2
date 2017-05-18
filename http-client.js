let axios = require("axios");



function httpClient(username){

	  axios({
	  method:'get',
	  url:'https://api.github.com/users/'+username,
	  data:{
			client_id:'62cea19f342af5bd356d',
			client_secret: 'e7066de6ecefe7211f90bb0deb2a2fdb58de3ac4'
		}
	  }).then(function(response) {

			axios({
			  method:'get',
			  url:'https://api.github.com/users/'+username+'/repos',
			  data:{
					client_id:'62cea19f342af5bd356d',
					client_secret: 'e7066de6ecefe7211f90bb0deb2a2fdb58de3ac4'
				}
			}).then(function(repo) {
				 for(let i = 0; i < repo.data.length; i++){
				 	console.log(' Repo '+[i+1]+': ' + repo.data[i].name);
				 	
				}


			});
	  let result = ""; 
	  result += ' Name: ' + response.data.name+ "\n";
	  result += ' Bio: ' + response.data.bio+ "\n";
	  result += ' Email: ' + response.data.email+ "\n";
	  result += ' URL: ' + response.data.html_url+ "\n";
	  console.log(result);
	}).catch(function(error){
		console.log(error);

	});

}


// Testing the Code

httpClient('charpell');

