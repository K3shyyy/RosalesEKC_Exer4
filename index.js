
import validator from "validator";
import { appendFileSync } from "node:fs";
import { v4 as uuidv4 } from "uuid";

//Function to generate UID
const generateUniqueID = (firstName,lastName) => {

    const ID = uuidv4().split("-")[0];
    const Name = (firstName.charAt(0)).concat(lastName);

    //merge randomized ID With lowercase name 
    const UID = (Name.toLowerCase()).concat(ID);
    return UID; 

}

//FUnction to add an account to text file
const addAccount = (AccountArray) => {
    if (AccountArray.length === 4 && AccountArray[0] !== "" && AccountArray[1] !== "" && AccountArray[2] !== "" && validator.isEmail(AccountArray[2]) && AccountArray[3] >= 18 ) {

        try {

            const UID = generateUniqueID(AccountArray[0],AccountArray[1])

            //Appending of info to file
            appendFileSync('user.txt', AccountArray[0]+","+AccountArray[1]+","+AccountArray[2]+","+AccountArray[3]+","+UID+"\n");

            //NOTIFICATION OF SUCCESSFUL APPENDING
            console.log('The "data to append" was appended to file!');
         
        } catch (err) {
            /* Handle the error */
          } 
    
    return true;
    }
    else{
        return false;
    }
    
}

export { generateUniqueID , addAccount }
