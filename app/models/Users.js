import jwt from 'jsonwebtoken'

export default class Users {
	all() {
		return thoughts.console(r =>
			r.table('users').coerceTo('array')
		)
	}

	find(id) {
		return thoughts.console(r => 
			r.table('users').get(id)
		)
	}

	login(username, password) {
		return thoughts.console(r => 
      r.table('users')
       .getAll([username, password], {index: 'login'})
       .coerceTo('array')
    ).then((response, reject) => {
      if (response && response.length) {
        const token = jwt.sign({
          id: response[0].id
        }, 'sample')

        return { token }
      }

      throw new Error('Incorrect username/password')
    }).catch(reject => reject)
	}
}