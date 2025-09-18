async function getUsers() {
    try {
        let response=await fetch('https://jsonplaceholder.typicode.com/users');
        let users=await response.json();
        console.log("first 5 responses");
        users.slice(0,5).forEach(usr=>{
            console.log(`#${usr.id} : ${usr.name}`);
        })
        
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
getUsers();