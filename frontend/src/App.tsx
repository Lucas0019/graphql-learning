import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

export const App = () => {

  const { data, loading } = useQuery(GET_USERS)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <ul>
        {data?.users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <NewUserForm/>
    </div>
  )
}
