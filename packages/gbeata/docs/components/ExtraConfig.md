---
nav: 组件
group: 表格table
order: 3
---

# 扩展按钮配置

在表格头部右侧，则是扩展区域，可以通过配置来控制它们的展示。

全屏按钮，是网页全屏，并非是页面全屏。

全屏遮罩默认层级是固定 999，如果发生覆盖现象，可以考虑调整此参数。

```css
.mw-search-table.full {
  z-index: 999;
}
```

全局配置请参考 [这里](../global/set-search-table-default-value)。

## 扩展按钮的配置

### 刷新按钮

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];

export default function Demo() {
  return (
    <GSearchTable
      title="右边没有刷新按钮"
      rowKey="sort_id"
      extraRefreshVisible={false}
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右边没有刷新按钮"
+ extraRefreshVisible={false}
  fields={fields}
  api={listApi}
/>
```

### 密度按钮

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];

export default function Demo() {
  return (
    <GSearchTable
      title="右边没有密度按钮"
      rowKey="sort_id"
      extraSizeVisible={false}
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右边没有密度按钮"
+ extraSizeVisible={false}
  fields={fields}
  api={listApi}
/>
```

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];
export default function Demo() {
  return (
    <GSearchTable
      title="右边没有密度默认值为紧凑"
      rowKey="sort_id"
      extraSizeDefaultValue="small"
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右边没有密度按钮"
+ extraSizeVisible={false}
  fields={fields}
  api={listApi}
/>
```

### 展示列按钮

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];

export default function Demo() {
  return (
    <GSearchTable
      title="右边没有展示列"
      rowKey="sort_id"
      extraSettingVisible={false}
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右边没有展示列"
+ extraSettingVisible={false}
  fields={fields}
  api={listApi}
/>
```

### 全屏按钮

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];
export default function Demo() {
  return (
    <GSearchTable
      title="右边没有全屏按钮"
      rowKey="sort_id"
      extraFullscreenVisible={false}
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右边没有全屏按钮"
+ extraFullscreenVisible={false}
  fields={fields}
  api={listApi}
/>
```

### 不展示所有扩展按钮

可以配置右侧没有按钮，而不需要单独配置。

```tsx
import React from 'react';
import { GSearchTable, GSearchTableField } from 'gbeata';
import { listApi } from '../api';

const fields: Array<GSearchTableField> = [
  {
    title: '姓名',
    key: 'cn',
    dialog: {
      required: true,
    },
  },
  {
    title: '英文名',
    key: 'en',
    dialog: {
      required: true,
    },
  },
];
export default function Demo() {
  return (
    <GSearchTable
      title="右侧没有扩展按钮"
      rowKey="sort_id"
      extraVisible={false}
      fields={fields}
      api={listApi}
    />
  );
}
```

```diff
<GSearchTable
  title="右侧没有扩展按钮"
+ extraVisible={false}
  fields={fields}
  api={listApi}
/>
```
