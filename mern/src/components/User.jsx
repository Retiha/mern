const User =({name, department,skills,DOB,Age})=>{
    return(
        <div>
            <h1>I am {name} from {department}</h1>
            <h2>DOB is {DOB} Age is {Age}</h2>
        <ol>
            {skills?.map((skill) => (
          <li key={skill}>{skill}</li>
            ))}
        </ol>
        </div>
    )
}
export default User