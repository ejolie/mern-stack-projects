import React, { memo } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "inherit"};
  transition: background-color 0.2s ease;

  flex-grow: 1;
  min-height: 100px;
`;

const InnerList = memo(({ tasks }) => {
  return tasks.map((task, taskIndex) => (
    <Task key={task.id} task={task} index={taskIndex} />
  ));
});

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingover={snapshot.isDraggingOver}
              >
                <InnerList tasks={tasks} />
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
