import React from "react";
import { useForm, useFieldArray, Controller } from "./src";
import ReactDOM from "react-dom";

import "./styles.css";

let renderCount = 0;

function App() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: [{ name: "useFieldArray" }]
    }
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test"
    }
  );

  const onSubmit = data => console.log("data", data);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].name`}
                defaultValue={`${item.name}`}
                ref={register({})}
              />

              {/* <Controller
                as={<input />}
                name={`items[${index}].text`}
                control={control}
                defaultValue={item.name}
              /> */}
              <button
                type="button"
                onClick={() => {
                  console.log(index);
                  remove(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          append
        </button>
        <button type="button" onClick={() => prepend({ name: "prepend" })}>
          prepend
        </button>
        <button
          type="button"
          onClick={() => insert(parseInt(2, 10), { name: "insert" })}
        >
          insert at
        </button>

        <button type="button" onClick={() => swap(1, 2)}>
          swap
        </button>

        <button type="button" onClick={() => move(1, 4)}>
          move
        </button>

        <button type="button" onClick={() => remove(1)}>
          remove at
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
