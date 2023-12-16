import { Tag } from 'antd';
import classNames from 'classnames';

import useStyles from './index.module.style';

import type { FC } from 'react';

interface PropState {
  name: string;
  fixed?: boolean;
  active?: boolean;
  closeTag: () => void;
  onClick: () => void;
}

const TagItem: FC<PropState> = ({ name, fixed, active, closeTag, onClick }) => {
  const { styles } = useStyles();
  return (
    <Tag
      className={classNames(styles['compo_tag-item'], { [styles.active]: active })}
      closable={!fixed}
      onClose={closeTag}
      onClick={onClick}
    >
      <span className={styles['compo_tag-item__dot']} />
      <span className={styles['compo_tag-item__name']}>{name}</span>
    </Tag>
  );
};

export default TagItem;