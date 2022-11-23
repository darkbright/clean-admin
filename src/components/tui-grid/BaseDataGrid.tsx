import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { OptColumn, OptRow } from 'tui-grid/types/options';
// import { DataSource } from 'tui-grid/types/dataSource';

interface BaseDataGridProps {
  // tableName: string;
  columns: OptColumn[];
  // frozenColumn?: number;
  // header?: OptHeader;
  // showToolbar?: boolean;
}

function BaseDataGrid({
  // tableName,
  columns,
  // frozenColumn = 1,
  // header = { height: 60 },
  // showToolbar = true,
}: BaseDataGridProps) {
  // const API_URL = '';
  // const tableName = '';
  // const dataSource: DataSource = {
  //   withCredentials: false,
  //   initialRequest: true,
  //   contentType: 'application/json',
  //   api: {
  //     readData: { url: `${API_URL}/api/${tableName}`, method: 'GET' },
  //     modifyData: { url: `${API_URL}/api/${tableName}`, method: 'PUT' },
  //   },
  // };

  const data: OptRow[] = [
    {id: 1, name: 'Editor'},
    {id: 2, name: 'Grid'},
    {id: 3, name: 'Chart'}
  ];

  const frozenColumn = 1;

  return (
    <>
      <Grid
        // ref={ref}
        data={data}
        // header={header}
        columns={columns}
        columnOptions={{ resizable: true, frozenCount: frozenColumn, minWidth: 100 }}
        rowHeight={30}
        bodyHeight={600}
        heightResizable
        width="auto"
        rowHeaders={['rowNum', 'checkbox']}
        draggable
        scrollX
        scrollY={false}
        // oneTimeBindingProps={['data', 'columns']}
      />
    </>
  );
}


export default BaseDataGrid;