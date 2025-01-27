import { Alert, Popover, Tag } from 'antd';
import React, { ReactNode, ReactText, useEffect, useState } from 'react';
import GAction from '../../GAction';
import locale from '../../locale';
import { AnyKeyProps } from '../../types/AnyKeyProps';
import { getKey } from '../../utils';

type Row = AnyKeyProps;

interface UseSelectionProps {
  /** 表格 rowKey */
  rowKey?: ((record: AnyKeyProps) => string) | string;
  /** ☑️表格选择框类型 */
  selectionType?: 'checkbox' | 'radio';
  /** 📢表格选择改变触发事件 */
  onSelectionChange?(
    selection: Array<Row>,
    selectionKeys: Array<ReactText>,
  ): void;
  /** 选中显示的名称 */
  selectShowKey?: string;
  /** 选择功能的配置 */
  rowSelection?: AnyKeyProps;
}

interface UseSelectionReturns {
  /** 头部元素 */
  header: ReactNode;
  /** 只有消息部分 */
  message: ReactNode;
  /** 生成的 antd rowSelection */
  tableRowSelection: AnyKeyProps | undefined;
  /** ☑️已选中的选项 */
  selection: Array<Row>;
  /** 清空所有选项 */
  clearSelection(): void;
  /** 设置选中的项 */
  setSelection(selection: Array<AnyKeyProps>): void;
  /** 添加选中的项 */
  addSelection(selection: Array<AnyKeyProps>): void;
  /** 移除选项 */
  removeSelection?(i: number | null, record?: AnyKeyProps): void;
}

export default function useSelection(
  _props: UseSelectionProps,
): UseSelectionReturns {
  const {
    rowKey,
    selectionType,
    onSelectionChange,
    selectShowKey,
    rowSelection,
  } = _props;
  const [selectionKeys, setSelectionKeys] = useState<Array<ReactText>>([]);
  const [selection, setSelection] = useState<Array<Row>>([]);

  let tableRowSelection: AnyKeyProps | undefined;

  if (selectionType) {
    tableRowSelection = {
      ...rowSelection,
      type: selectionType,
      selectedRowKeys: selectionKeys,
      onSelect: (record: Row, selected: boolean) => {
        if (selectionType === 'radio') {
          changeRadioSelection(record);
        } else {
          selected ? addSelection(record) : removeSelection(null, record);
        }
      },
      onSelectAll: (
        selected: boolean,
        selectedRows: Array<Row>,
        changeRows: Array<Row>,
      ) => {
        selected
          ? addSelectionArray(selectedRows)
          : removeSelectionArray(changeRows);
      },
    };
  }

  /**
   * 清空所有选项
   */
  const clearSelection = () => {
    setSelectionKeys([]);
    setSelection([]);
  };

  /**
   * 设置选中的行
   */
  const setDefaultSelection = (selection: AnyKeyProps[]) => {
    setSelection(selection);
    setSelectionKeys(selection.map((row) => getKey(row, rowKey)));
  };

  /**
   * 添加选项
   */
  const addDefaultSelection = (addSelection: AnyKeyProps[]) => {
    // @ts-ignore
    let newSelection = [...selection];
    addSelection.forEach((row) => {
      if (!selectionKeys.includes(getKey(row, rowKey))) {
        newSelection.push(row);
      }
    });

    setSelection(newSelection);
    setSelectionKeys(newSelection.map((row) => getKey(row, rowKey)));
  };

  const changeRadioSelection = (row: AnyKeyProps) => {
    let newKeys = [];
    let newSelection = [];

    newKeys.push(getKey(row, rowKey));
    newSelection.push(row);

    setSelectionKeys(newKeys);
    setSelection(newSelection);
  };

  /**
   * 添加选项（单个）
   * @param row 某一条选项
   */
  const addSelection = (row: AnyKeyProps) => {
    // @ts-ignore
    let newKeys = [...selectionKeys];
    let newSelection = [...selection];

    newKeys.push(getKey(row, rowKey));
    newSelection.push(row);

    setSelectionKeys(newKeys);
    setSelection(newSelection);
  };

  /**
   * 添加选项（数组）
   * @param rows 项目列表
   */
  const addSelectionArray = (rows: Array<AnyKeyProps>) => {
    let newKeys = [...selectionKeys];
    let newSelection = [...selection];

    rows.forEach((row) => {
      if (!row) {
        return;
      }
      let key = getKey(row, rowKey);
      if (!newKeys.includes(key)) {
        newKeys.push(key);
        newSelection.push(row);
      }
    });

    setSelectionKeys(newKeys);
    setSelection(newSelection);
  };

  /**
   * 移除某个选项
   * @param i 移除选项的 index
   */
  const removeSelection = (i: number | null, record?: AnyKeyProps) => {
    let newKeys = [...selectionKeys];
    let newSelection = [...selection];

    if (i === null && record) {
      i = newKeys.findIndex((key) => key === getKey(record, rowKey));
    }

    if (typeof i === 'number') {
      newKeys.splice(i, 1);
      newSelection.splice(i, 1);
    }

    setSelectionKeys(newKeys);
    setSelection(newSelection);
  };

  /**
   * 移除一组选项
   * @param rows 移除选项
   */
  const removeSelectionArray = (rows: Array<Row>) => {
    let newKeys = [...selectionKeys];
    let newSelection = [...selection];

    rows.forEach((row) => {
      let index = newKeys.findIndex((item) => item === getKey(row, rowKey));
      if (index >= 0) {
        newKeys.splice(index, 1);
        newSelection.splice(index, 1);
      }
    });

    setSelectionKeys(newKeys);
    setSelection(newSelection);
  };

  /** Popover 弹窗的提示 */
  const popContent = (
    <div className="mw-search-poper">
      {selection.map((row, i) => {
        return (
          <Tag
            key={getKey(row, rowKey)}
            closable
            className="mb"
            onClose={() => removeSelection(i)}
          >
            {row[selectShowKey || 'name']}
          </Tag>
        );
      })}
    </div>
  );

  const message = (
    <div>
      <span>
        {locale.table.selectedBefore}
        <Popover title={locale.table.selectedTitle} content={popContent}>
          <a>{selection.length}</a>
        </Popover>
        &nbsp;{locale.table.selectedAfter}
      </span>
      <GAction className="ml" type="link" size="small" onClick={clearSelection}>
        {locale.table.selectedClear}
      </GAction>
    </div>
  );

  /** 头部已选中的提示 */
  const header = selectionKeys.length ? (
    <Alert className="mw-search-table-alert" message={message} showIcon />
  ) : (
    ''
  );

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(selection, selectionKeys);
    }
  }, [onSelectionChange, selection]);

  return {
    header,
    message,
    tableRowSelection,
    selection,
    clearSelection,
    removeSelection,
    setSelection: setDefaultSelection,
    addSelection: addDefaultSelection,
  };
}
