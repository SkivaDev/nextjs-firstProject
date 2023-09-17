
const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function Home() {

  const users = await fetchUsers()

  return (
    <div>
      <h1>Home</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.first_name}</h2>
          <p>{user.email}</p>
          <img src={user.avatar} alt={user.first_name} />
         </div>))}
    </div>
  )
}
