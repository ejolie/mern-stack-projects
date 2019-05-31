import React, { useState, memo } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import initialData from "./initial-data";
import Column from "./Column";
import "@atlaskit/css-reset";

const Container = styled.div`
  display: flex;
`;

const InnerList = memo(({ column, taskMap, index }) => {
  const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
  return <Column column={column} tasks={tasks} index={index} />;
});

const App = () => {
  const [state, setState] = useState(initialData);

  const onDragStart = (start, provided) => {
    // style
    // document.body.style.color = "orange";
    // document.body.style.transition = "background-color 0.2s ease";

    // screenreader
    provided.announce(
      `안녕하세요. You have lifted the task in position ${start.source.index +
        1}`
    );
  };

  const onDragUpdate = (update, provided) => {
    // style
    // const { destination } = update;
    // const opacity = destination
    //   ? destination.index / Object.keys(state.tasks).length
    //   : 0;
    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;

    // screenreader
    const message = update.destination
      ? `You have moved the task to position ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;

    provided.announce(message);
  };

  const onDragEnd = (result, provided) => {
    // style
    document.body.style.color = "inherit";

    // screenreader
    const message = result.destination
      ? `You have moved the task from position ${result.source.index + 1}
        to ${result.destination.index + 1}`
      : `The task has been returned to its starting position of
        ${result.source.index + 1}`;

    provided.announce(message);

    // logic
    // - reorder our task
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //// - reorder our column
    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder
      };

      setState(newState);
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    // in the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      };

      setState(newState);
      return;
    }

    // in other column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    setState(newState);
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {state.columnOrder.map((columnId, columnIndex) => {
              const column = state.columns[columnId];
              return (
                <InnerList
                  key={column.id}
                  column={column}
                  taskMap={state.tasks}
                  index={columnIndex}
                />
              );
            })}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
