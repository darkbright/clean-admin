import React from 'react';
import BaseDataGrid from '../../components/tui-grid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const columns: OptColumn[] = [
  {
    header: 'Name',
    name: 'name'
  },
  {
    header: 'Artist',
    name: 'artist'
  },
  {
    header: 'Type',
    name: 'type'
  },
  {
    header: 'Release',
    name: 'release'
  },
  {
    header: 'Genre',
    name: 'genre'
  }
];

function App() {
  return (
    <>
      <BaseDataGrid columns={columns} tableName="basic" />
    </>
  );
}

export default App;