import Private from 'private-props'

class Builder {
  constructor(r) {
    Private(this).r = r
  }

  create(table) {
    return Private(this).r.console(r =>
      r.tableCreate(table)
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