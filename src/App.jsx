import React, { useContext } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import Table from './components/Table'
import CreateDrawer from './components/CreateDrawer'
import EditDrawer from './components/EditDrawer'
import { DataContext } from './context/DataContext'

const App = () => {
  const {editDrawer} = useContext(DataContext)
  return (
    <Container>
     <Header/>
     <Table/>
     <CreateDrawer/>
     {editDrawer && <EditDrawer/>}
    </Container>
  )
}

export default App
