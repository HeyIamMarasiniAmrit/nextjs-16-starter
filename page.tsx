type User={
    id: number;
    name: string;
    username: string;
}

export default async function classroom(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json()

    

    return(
        <>
        <h1>Classroom Page</h1>
        <p>This is a classroom page</p>
        
            <h1>hello from classroom</h1>
            <p>This is the classroom page of the application</p>
        <u>
        {user.map((user: User)=>(
            <li key={user.id}>{user.name}</li>
        ))}
        </u>
        
        </>
    )
}
