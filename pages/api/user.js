import { Users } from '../../constants/userDB';

export default function handler(req, res) {

  


  res.status(200).json(Users.slice(0, 20))
}
