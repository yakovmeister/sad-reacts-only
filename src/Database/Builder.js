import Private from 'private-props'

export default class Builder {
  constructor(r) {
    Private(this).r = r
  }

  create(table, options = {}) {
    return Private(this).r.console(r =>
      r.tableCreate(table, options)
    )
  }

  index(table, column) {
    return Private(this).r.console(r => 
      r.table(table).indexCreate(column)
    )
  }

  down(table) {
    return Private(this).r.console(r =>
      r.tableDrop(table)
    )
  }
  
  list() {
    return Private(this).r.console(r => 
      r.tableList()
    )
  }
}