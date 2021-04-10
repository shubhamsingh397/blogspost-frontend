import axios from 'axios';

class AuthService {
 constructor( token2)
 {
    this.token2 = 'Bearer '+sessionStorage.getItem("token");
 }
    registerSuccessfulLogin(username,token)
    {
        console.log("LoginSuccessfull");
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('token',token);
        
        var token1 = this.createAuthToken();
        console.log(token1);
      //  axios.defaults.headers.common['Authorization'] = token1;
        var isLogged = this.isUserLoggedIn();
        console.log(isLogged);
        this.token2 = token1
        console.log(this.token2)
       // this.setupAxiosInterceptors(token1,isLogged);
    }
    getToken()
    {
        return this.headerToken;
    }
    logout(){
        sessionStorage.removeItem("authenticatedUser");
        sessionStorage.removeItem("token");
    }
    addUser(values)
    {
        console.log(values);
       // return axios.post('http://localhost:8081/add_user', values);
       return axios.post('https://blogspost1.herokuapp.com/add_user', values);
    }

    authenticateUser(username,password)
    {
        //return axios.post('http://localhost:8081/authenticate',{
            return axios.post('https://blogspost1.herokuapp.com/authenticate',{
            username: username,
            password: password
        })
    }

    createAuthToken()
    {
        var token = sessionStorage.getItem('token');
        return 'Bearer '+ token
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem("authenticatedUser")
        console.log("user logged" + user)
        if(user === null)  return false
       
        return true
    }
    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null)
        return ''
        return user
    }
    
    setupAxiosInterceptors(token,islogged) {
        console.log('interceptor: '+token);
        axios.interceptors.request.use(
             config => {
               console.log("inceptors before if ")
                if (islogged) {
                    console.log("before inceptors added")
                    config.headers.authorization = token
                    console.log("after inceptors added")
                }
                
                return config;
            }
        )
    }
    retreiveAllBlogs(){
        console.log(this.token2)
       // return axios.get('http://localhost:8081/post',{headers:{Authorization: `${this.token2}` }})
       return axios.get('https://blogspost1.herokuapp.com/post',{headers:{Authorization: `${this.token2}` }})
    }

    getUser(userName)
    {
       // return axios.get(`http://localhost:8081/user/${userName}`,{headers:{Authorization: `${this.token2}` }})
       return axios.get(`https://blogspost1.herokuapp.com/user/${userName}`,{headers:{Authorization: `${this.token2}` }})
    }
}
export default new AuthService();