let todos = []

const createTask = (e) => {
    e.preventDefault()
    let message = document.getElementById('text')
    let input = document.getElementById('input')
    console.log(input.value)

    if (message.value.length >= 3 && input.value.length >= 3) {
        let todo = {
            id: todos.length === 0 ? 1 : todos[todos.length-1].id + 1,
            message: message.value,
            input: input.value,
            status: false,
            date: new Date()
        }
        todos.push(todo)
        console.log(todos)
        message.value=''
        input.value=""
        renderTodos()
    }else{
        alert('Minimum length is 3 symbols')
    }
}




const renderTodos = () =>{
    const output = document.getElementById('output')
    output.innerHTML=''

    todos.map(todo =>{
        // console.log(todo)
        let block = document.createElement('div')
        block.style.background=todo.status===true?'green':'coral'

        let mess = document.createElement('h2')
        let mesDescription=document.createElement("p")
        let date = document.createElement('p')

        let p=document.createElement("p")




        let del = document.createElement('button')
        let edit = document.createElement('button')
        let done = document.createElement('button')
        let discription = document.createElement('button')
    

        
        if(todo.status ==true){
             done.style.display ='none'
             p.textContent="Bishkek"
        }
        else{
            done.style.display ='inline'   
        }
       



        mess.textContent = `Name: ${todo.message}`
        let current_date = todo.date
        mesDescription.textContent= `Discription: ${todo.input}`
        date.textContent = `
        Todo was created ${current_date.getDate()} -
        ${current_date.getMonth()+1}  
        - ${current_date.getFullYear()} 
        ${current_date.getHours()} : ${current_date.getMinutes()} : ${current_date.getSeconds()}
      `
    

        del.textContent='Delete'
        edit.textContent='Edit'
        done.textContent='Done'
        discription.textContent='description'

        



        done.addEventListener('click',()=>{
            doneTodo(todo.id)
            console.log(todo.id)
        })

        del.addEventListener('click',()=>{
          
           todo.status? deleteTodo(todo.id) :alert('not done')
        })

        edit.addEventListener('click',()=>{
            editTodo(todo.id)
        })


        discription.addEventListener('click',()=>{
            changeTodo(todo.id)
        })


        
     
  
        

   
         



        block.append(mess,mesDescription,date,p,del,edit,done,discription)
        output.append(block)


    })
}

const doneTodo = (id) =>{
    todos.map(el=>{
        // console.log(el)
        if(id==el.id){
            el.status = true
            renderTodos()
        }
    })
}


const deleteTodo = (id) =>{
    todos = todos.filter(el=>el.id != id)
    renderTodos()
}

const editTodo = (id) =>{
    todos.map(el=>{
    
        if(id==el.id){
            let newMessage = prompt('Edit Todo')
           

            if(newMessage==null || newMessage=='' || newMessage.trim()=='' ){
                el.message
                
            }else if(newMessage.length<=3 ){
                alert('Minimum length is 3 symbols')
            }else{
                console.log(newMessage)
                el.message=newMessage
               
                renderTodos()
            }
         
        }
    })
}

const changeTodo=(id)=>{
    todos.map(el=>{
        if(id==el.id){
            let newDec = prompt('Edit Description')
            if( newDec==null || newDec=='' || newDec.trim()==''){
                el.input
            }
            else if(newDec.length<=3 ){
                alert('Minimum length is 3 symbols')
            }
            else{
            
                el.input=newDec
                renderTodos()
            }
        }
    })
}










// ===new Date===
// console.log(new Date())
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())