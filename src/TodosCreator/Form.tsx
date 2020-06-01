import React from 'react';
import { Map } from 'immutable';
import styles from './todos.module.css';
import { IStateImmutable, FormProps } from './index.interface';

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formValues, setState] = React.useState<IStateImmutable>(Map({ name: "", age: 1 }));


  const handleChange = React.useCallback(({ target:{ name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState(oldValues => oldValues.update(name, () => value))  
  }, [setState])

  const handleSubmit = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Enter"){
     if(!!formValues.get("name")?.toString().length){
        onSubmit(formValues)
    }
    }
  }, [onSubmit, formValues])

  return (
    <section className={styles.headControllersSection}>
      <form className={styles.row}>
        <input 
          type="text" 
          name="name" 
          placeholder="Type Name" 
          onChange={handleChange} 
          className={styles.styledInput}
          value={formValues.get("name")}
          onKeyPress={handleSubmit}
          autoComplete="off"
        />

        <input 
          type="number" 
          name="age" 
          placeholder="Type Age" 
          className={styles.styledInput}
          onChange={handleChange}
          value={formValues.get("age")}
          onKeyPress={handleSubmit}
          min={1}
        />
      </form>
      </section>
    )
  };

export default React.memo(Form);
