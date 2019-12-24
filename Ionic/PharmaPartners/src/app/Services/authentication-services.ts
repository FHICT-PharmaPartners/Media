import { user } from 'models/models-list.ts'
import { UserService } from '../services/user-services';

export class AuthenticationService {
	constructor(private dataService: LoginService) { }

	authenticate() {
	  const jwt = localStorage.getItem("jwt");
	  
	  if (jwt) {
	  	let user = dataService.getUser(jwt);
	  	console.log(user);
	  } else {
	  	location.href = "/login";
	  }
	}
}