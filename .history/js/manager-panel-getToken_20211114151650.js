
        
            axios.get('http://localhost:3000/api/v1/user/create',{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('get : ')
                console.log(res);
                
                
            } )
            .catch(err => console.log(err))

        
