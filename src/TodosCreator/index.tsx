import React from 'react';
import { List } from 'immutable';
import Todo from './Todo';
import Form from './Form';
import { IStateImmutable } from './index.interface';


const TodosCreator: React.FC = () => {
  const [state, setState] = React.useState<List<unknown> | List<IStateImmutable>>(List([]));

  const AddNewItem = React.useCallback((newItem: IStateImmutable) => {
    setState(oldState => oldState.push(newItem))
  }, [setState])


  return (
    <div>
      
      <Form onSubmit={AddNewItem} />
      
      {state.isEmpty() ? null : (
        <section>
          {(state as List<IStateImmutable>).map((item, idx) => item && <Todo item={item as IStateImmutable} key={idx} />)}
        </section>
      )}
    </div>
  )
};

export default TodosCreator;
