import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //* Angulars's built-in tool for making API calls
//* here HttpClient has only the reference of the class. and as we know by only referencce we can't access the method/properties of the class, we need it's instance

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {} //? this is the shorthand of the constructor in TS
  // * how internally it look like this one line
  // private http: HttpClient;  //* this is how firstly constructor create one vairable which one you passed very first http.

  // constructor(http: HttpClient) { //* then angular create an instance of the HttpClient.
  //   this.http = http;  //* and then assing it to the http variable, now this variable have the instance of the HttpClient, so now this http can access all the methods and properties which are present inside the HttpClient 
  // }

  getUsers() {
    return this.http.get(this.apiUrl);
  }
}
