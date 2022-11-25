import React from 'react';
import styled from 'styled-components';

import {
  AntDesignOutlined,
  CopyOutlined,
  DeleteRowOutlined,
  DownloadOutlined,
  FilterOutlined,
  InsertRowBelowOutlined,
  ReloadOutlined,
  SaveOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import Grid from '@toast-ui/react-grid';

interface DataGridToolBarProps {
  ref: React.RefObject<Grid>;
  appendRow: () => void;
  refresh: () => void;
  onFilter?: () => void;
  modifyData: () => void;
  removeRows: () => void;
  exportFile: () => void;
  copyToClipboard: () => void;
  // openTableSetting: () => void;
  // openHeaderSetting: () => void;
}

/**
 * Toast UI 사용 시, 테이블 상단에 뜨는 툴바 설정
 * @param DataGridToolBarProps DataGridToolBarProps
 * @returns {JSX.Element} React Component(div)
 */
function DataGridToolbar({
  ref,
  appendRow,
  refresh,
  onFilter,
  // openTableSetting,
  // openHeaderSetting,
  modifyData,
  removeRows,
  exportFile,
  copyToClipboard,
}: DataGridToolBarProps) {
  const ToolBarOptions = [
    {
      id: 0,
      buttons: [
        {
          id: 0,
          title: '리프레시?',
          key: 'refresh',
          icon: <ReloadOutlined width="small" />,
          onClick: refresh,
        },
        {
          id: 1,
          title: '테이블 설정',
          key: 'table-setting',
          icon: <TableOutlined width="small" />,
          // onClick: openTableSetting,ButtonGroup
          onClick: () => null,
        },
        {
          id: 2,
          title: '헤더 설정',
          key: 'header-setting',
          icon: <AntDesignOutlined width="small" />,
          // onClick: openHeaderSetting,
          onClick: () => null,
        },
      ],
    },
    {
      id: 1,
      buttons: [
        {
          id: 0,
          title: '새로운 행 추가',
          key: 'new-row',
          icon: <InsertRowBelowOutlined width="small" />,
          onClick: appendRow,
        },
        {
          id: 1,
          title: '클립보드로 복사',
          key: 'copy-row',
          icon: <CopyOutlined width="small" />,
          onClick: copyToClipboard,
        },
        {
          id: 2,
          title: '파일로 내보내기',
          key: 'export-as-file',
          icon: <DownloadOutlined width="small" />,
          onClick: exportFile,
        },
      ],
    },
    {
      id: 2,
      buttons: [
        {
          id: 0,
          title: '삭제',
          key: 'delete',
          icon: <DeleteRowOutlined width="small" />,
          onClick: removeRows,
        },
        {
          id: 0,
          title: '저장',
          key: 'save',
          icon: <SaveOutlined width="small" />,
          onClick: modifyData,
        },
      ],
    },
  ];

  return (
    <Root>
      <LeftBar>
        {ToolBarOptions.map((group) => (
          // eslint-disable-next-line react/jsx-key
          <Space size="large">
            <Space.Compact size="large" block>
              {group.buttons.map((btn) => (
                <Tooltip key={btn.id} title={btn.title}>
                  <IconButton onClick={btn.onClick} key={btn.key}>
                    {btn.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Space.Compact>
          </Space>
        ))}
      </LeftBar>
      <Space size="large">
        <Space.Compact size="large" block>
          <Tooltip title="필터">
            <IconButton onClick={onFilter}>
              <FilterOutlined width="large" />
            </IconButton>
          </Tooltip>
        </Space.Compact>
      </Space>
    </Root>
  );
}

export default DataGridToolbar;

const Root = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '1%',
});

const LeftBar = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const IconButton = styled(Button)(() => ({
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    // color: theme.palette.secondary.light,
  },
}));
