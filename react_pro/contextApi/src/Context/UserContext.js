import React from "react";

// created context 

const UserContext =  React.createContext() 

//here "UserContext" is a global variable 
export default UserContext


//steps 
//1st step create a global varibale using createContext() method holding into a variable "UserContext"
//2nd step - Cretae a provider for the global variable in new components

// <UserContext.Provider>
    // {children}
// </UserContext.Provider>