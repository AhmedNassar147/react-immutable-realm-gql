import React from 'react';
import { TodoProps } from './index.interface';
import styles from './todos.module.css';

const TodoItem: React.FC<TodoProps> = ({ item }) => (
    <div className={`${styles.todoItem} ${styles.row}`}>
      <p>
        {item.get("name")}
      </p>

      <p>
        {item.get("age")  || ""}
      </p>
    </div>
  )

export default TodoItem;
