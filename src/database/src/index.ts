import  {DatabaseAdapter2} from './adapter'



const test = DatabaseAdapter2();

test.verifyConnection().then(async (connection) => {
  
  console.log("Inserting a new user into the database...")

})
