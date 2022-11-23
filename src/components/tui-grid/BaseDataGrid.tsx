import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import { DataSource } from 'tui-grid/types/dataSource';
import { createRef } from 'react';
import DataGridToolbar from './DataGridToolbar';

interface BaseDataGridProps {
  tableName: string;
  columns: OptColumn[];
  frozenColumn?: number;
  header?: OptHeader;
  showToolbar?: boolean;
}

function BaseDataGrid({
  tableName,
  columns,
  frozenColumn = 0,
  header = { height: 60 },
  showToolbar = true,
}: BaseDataGridProps) {
  // grid language
  TuiGrid.setLanguage('ko');

  const ref = createRef<Grid>();

  const API_URL = '';
  const dataSource: DataSource = {
    withCredentials: false,
    initialRequest: true,
    contentType: 'application/json',
    api: {
      readData: { url: `${API_URL}/api/${tableName}`, method: 'GET' },
      modifyData: { url: `${API_URL}/api/${tableName}`, method: 'PUT' },
    },
  };

  return (
    <>
      {showToolbar && (
        <DataGridToolbar
          ref={ref}
          appendRow={() => ref.current?.getInstance().appendRow({})}
          refresh={() => ref.current?.getInstance().reloadData()}
          modifyData={() => ref.current?.getInstance().request('modifyData')}
          removeRows={() => ref.current?.getInstance().removeCheckedRows()}
          exportFile={() => ref.current?.getInstance().export('csv')}
          copyToClipboard={() => ref.current?.getInstance().copyToClipboard()}
          // openTableSetting={() => setTableSettingOpen(true)}
          // openHeaderSetting={() => setHeaderSettingOpen(true)}
        />
      )}
      <Grid
        ref={ref}
        data={dataSource}
        header={header}
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
        oneTimeBindingProps={['data', 'columns']}
      />
    </>
  );
}


export default BaseDataGrid;