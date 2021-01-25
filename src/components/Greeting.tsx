
export const Greeting = (props:{name:string, age: number}) => {
    return (
        <div>
            <ul>
                <li>Name:{props.name}</li>
                <li>Age: {props.age}</li>
            </ul>
     
        </div>
    )
}