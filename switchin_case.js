var user = "testprep";

switch(user)
{
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
    console.log("gets access to create or delete a course");  
         break;
    case "testprep":
    console.log("gets access to create or delete a test");  
         break;
    case "user":
    console.log("gets access to consume content");  
         break;
    default:
    console.log("Trial user");
        break;
}