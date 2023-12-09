import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

type ClientType = {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

const ClientRow = (props: { client: ClientType }) => {
  const { client } = props;
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS
      }) as any;
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client: ClientType) => client.id !== deleteClient.id)
        }
      })
    }
  });

  return (
    <tr>
      <td>{ client.name }</td>
      <td>{ client.email }</td>
      <td>{ client.phone }</td>
      <td>
        <div onClick={() => deleteClient()}>
          Delete
        </div>
      </td>
    </tr>
  )
}

export default ClientRow;