import React from "react";
import Droppable from "./DroppableComponent";
import Draggable from "./DraggableComponent";
export default function Container() {
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Droppable />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Draggable name="Glass" />
        <Draggable name="Banana" />
        <Draggable name="Paper" />
      </div>
    </div>
  );
}
