const users = [
    {
        id: 1,
        name: "Pam"
    },
    {
        id: 2,
        name: "Sam"
    },
    {
        id: 3,
        name: "Ram"
    }
]

export const allUsers = (req,res) => {
    res.send(users)
}
export const getUserId = (req,res) => {
    const user = users.find(u =>u.id === parseInt(req.params.id));
    if(!user){res.status(404).send(`User with given id: ${req.params.id} not found`)}
    res.send(user);
}

export const createUser = (req,res) => {
    const user = req.body;
    users.push(user);
    console.log(users);
    res.send(user);
};

export const deleteUser = (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user){res.status(404).send(`User with given id: ${req.params.id} not found`)};

    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(`User with id:${index + 1} is deleted`)
}

export const updateUser = (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user){res.status(404).send(`User with given id: ${req.params.id} not found`)}
    user.name = req.body.name;
    res.send(`User with ${req.params.id} has been updated`)
}

