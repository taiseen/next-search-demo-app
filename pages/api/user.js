import { Users } from '../../constants/userDB';

export default function handler(req, res) {

  const { searching } = req.query;

  const keysForSearching = ['first_name', 'last_name', 'email', 'gender'];

  const search = (data) => {
    return data.filter(user =>
      keysForSearching.some(key =>
        user[key].toLowerCase().includes(searching)
      ));
  }

  res.status(200).json(search(Users).slice(0, 20));
}
