export function CreateTodo() {
    return   <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" />  <br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" />  <br />
            <button style={{
                padding: 10,
                margin: 10
            }} onClick={function (){
                fetch("http://localhost:3000/todos", {
                    method: POST, 
                    body: {
                        title: "",
                        description: ""
                    }
                })
                .then(async function(res){
                    const json = await res.json()
                    alert("Todo added")
                })
            }}>Add a todo</button>
        </div>
    
}