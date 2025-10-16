const User =({name, department,skills,DOB,Age})=>{
    return(
        <div>
            I am {name} from {department}<br></br>
            DOB is {DOB} Age is {Age}
        <ol>
            {skills?.map((skill) => (
          <li key={skill}>{skill}</li>
            ))}
        </ol>
        </div>
    )
}
export default User